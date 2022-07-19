const db = require("../dbconfig/init");
const User = require("./User");

class Habit {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.frequency = data.frequency;
    this.user_id = data.user_id;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let habitData = await db.query("SELECT * FROM habits");
        let habits = habitData.rows.map((habit) => new Habit(habit));
        resolve(habits);
      } catch (err) {
        reject("Error Retrieving Habits");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let getHabits = await db.query(
          `SELECT * FROM habits JOIN users ON habits.user_id=users.id WHERE users.id = $1;`,
          [id]
        );
        let habits = getHabits.rows.map((habit) => new Habit(habit));
        resolve(habits);
      } catch (err) {
        reject("Habits Could Not Be Found For This User!");
      }
    });
  }

  static create(title, frequency, id) {
    return new Promise(async (resolve, reject) => {
      try {
        let createHabit = await db.query(
          "INSERT INTO habits (title, frequency, user_id) VALUES ($1,$2,$3) RETURNING *;",
          [title, frequency, id]
        );
        resolve(createHabit.rows[0]);
      } catch (err) {
        reject("Book could not be created");
      }
    });
  }
}

module.exports = Habit;

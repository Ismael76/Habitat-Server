const db = require("../dbconfig/init");

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


  static create(title, frequency, email) {
    return new Promise(async (resolve, reject) => {
      try {
        let user = User.findUser(email);
        let createHabit = await db.query(

          "INSERT INTO habits (title, frequency, user_id) VALUES ($1,$2,$3) RETURNING *;",
          [title, frequency, user.id]
        );
        resolve(createHabit.rows[0]);
      } catch (err) {
        reject("Habit could not be created");

      }
    });
  }
}

module.exports = Habit;

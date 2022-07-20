const db = require("../dbconfig/init");
const User = require("./User");

class Habit {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.frequency = data.frequency;
    this.progression = data.progression;
    this.completed = data.completed;
    this.streak = data.streak;
    this.user_id = data.user_id;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let habitData = await db.query("SELECT * FROM habits");
        let habits = habitData.rows.map((habit) => new Habit(habit));
        console.log(habits);
        resolve(habits);
      } catch (err) {
        reject("Error Retrieving Habits");
      }
    });
  }

  //Finds All User Habits By Id
  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let getHabits = await db.query(
          `SELECT * FROM habits WHERE user_id = $1;`,
          [id]
        );
        let habits = getHabits.rows.map((habit) => new Habit(habit));
        resolve(habits);
      } catch (err) {
        reject("Habits Could Not Be Found For This User!");
      }
    });
  }

  //Gets A Habit By Habit ID
  static findHabitById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let getHabit = await db.query(`SELECT * FROM habits WHERE id = $1`, [
          id,
        ]);
        let habit = new Habit(getHabit.rows[0]);
        resolve(habit);
      } catch (err) {
        reject("Habit Could Not Be Found For This User!");
      }
    });
  }

  //Updates 'Complete' Column For Habits
  static updateCompleteStatus(habitId, statusChange) {
    return new Promise(async (resolve, reject) => {
      try {
        let updateValue = await db.query(
          `UPDATE habits SET completed = $1 WHERE id = $2 RETURNING *;`,
          [statusChange.completed, habitId]
        );
        resolve(updateValue.rows[0]);
      } catch (err) {
        reject("Habit Could Not Be updated");
      }
    });
  }

  /******** THIS FUNCTION IS NOT NEEDED ************/
  // static updateStreak(habitId) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let currentStreak = await db.query(
  //         `SELECT streak FROM habits WHERE id = $1;`,
  //         [habitId]
  //       );
  //       let streak = currentStreak.rows[0].streak;
  //       streak++;
  //       let updateStreak = await db.query(
  //         `UPDATE habits SET streak = $1 WHERE id = $2 RETURNING *;`,
  //         [streak, habitId]
  //       );
  //       resolve(updateStreak.rows[0]);
  //     } catch (err) {
  //       reject("Streak Could Not Be Updated!");
  //     }
  //   });
  // }

  //Updates 'Progress' Column For Habits When Frequency === Progression, It Also Increments Streak Column By One
  static updateProgression(habitId) {
    return new Promise(async (resolve, reject) => {
      try {
        let currentValue = await db.query(
          `SELECT progression, frequency, streak FROM habits WHERE id = $1;`,
          [habitId]
        );

        let newProgressionVal = currentValue.rows[0].progression;

        let streak = currentValue.rows[0].streak;

        if (newProgressionVal == currentValue.rows[0].frequency) {
          newProgressionVal = currentValue.rows[0].frequency;
          streak = currentValue.rows[0].streak;
        } else {
          newProgressionVal = currentValue.rows[0].progression + 1;
          if (newProgressionVal == currentValue.rows[0].frequency) {
            streak++;
            let obj = { completed: "t" };
            this.updateCompleteStatus(habitId, obj);
          }
        }

        let updateValue = await db.query(
          `UPDATE habits SET progression = $1, streak = $2 WHERE id = $3 RETURNING *;`,
          [newProgressionVal, streak, habitId]
        );
        resolve(updateValue.rows[0]);
      } catch (err) {
        reject("Habit Could Not Be Found For This User!");
      }
    });
  }

  // static updateCompleteStatus(obj) {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       let updateValue = await db.query(
  //         `UPDATE habits SET completed = $1 WHERE id = $2 RETURNING *;`,
  //         [statusChange.completed, habitId]
  //       );
  //       console.log(statusChange, "******************updateValue");
  //       resolve(updateValue.rows[0]);
  //     } catch (err) {
  //       reject("Habit Could Not Be updated");
  //     }
  //   });
  // }

  //Create Habit
  static create(title, frequency, id) {
    return new Promise(async (resolve, reject) => {
      try {
        let completed = "f";
        let streak = 0;
        let progression = 0;
        let createHabit = await db.query(
          "INSERT INTO habits (title, frequency, progression, completed, streak, user_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *;",
          [title, frequency, progression, completed, streak, id]
        );
        resolve(createHabit.rows[0]);
      } catch (err) {
        reject("Habit Could Not Be Created");
      }
    });
  }

  //Shows Completed Habits For Specific User
  static showUserCompletedHabits(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let habitData = await db.query(
          "SELECT * FROM habits WHERE completed = 't' AND user_id = $1;",
          [id]
        );

        let habits = habitData.rows.map((habit) => new Habit(habit));
        resolve(habits);
      } catch (err) {
        reject("Error Retrieving Habits");
      }
    });
  }

  //Deletes Habit
  destroy() {
    return new Promise(async (resolve, reject) => {
      try {
        await db.query(`DELETE FROM habits WHERE id = $1;`, [this.id]);
        resolve("Habit Was Deleted!");
      } catch (err) {
        reject("Habit Could Not Be Deleted");
      }
    });
  }
}

module.exports = Habit;

const db = require("../dbConfig/init");

class Habit {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.frequency = data.frequency;
    this.user_id = data.user_id;
  }

  static create(title, frequency, email) {
    return new Promise(async (resolve, reject) => {
      try {
        let user = User.findUser(email);
        let createHabit = await db.query(
          "INSERT INTO books (title, frequency, user_id) VALUES ($1,$2,$3) RETURNING *;",
          [title, frequency, user.id]
        );
        resolve(createHabit.rows[0]);
      } catch (err) {
        reject("Book could not be created");
      }
    });
  }
}

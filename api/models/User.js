const db = require('../dbConfig/init');

class User {
    constructor(data){
        this.id = data.id
        this.username = data.username
        this.email = data.email
        this.password = data.password
    }

    static create(username, email, password) {
        return new Promise(async (resolve, reject) => {
          try {
            let userData = await db.query(
              `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *;`,
              [username, email, password]
            );
            let newUser = new User(userData.rows[0]);
            resolve(newUser);
          } catch (err) {
            reject("Error creating post");
          }
        });
      }
}

module.exports = User;
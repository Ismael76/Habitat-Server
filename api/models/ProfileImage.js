const db = require("../dbconfig/init");

class ProfileImage {
  constructor(data) {
    this.id = data.id;
    this.src = data.src;
  }

  static get all() {
    return new Promise(async (res, rej) => {
      try {
        const images = await db.query("SELECT * FROM images;");
        const profileImage = images.rows.map((img) => new ProfileImage(img));
        res(profileImage);
      } catch (err) {
        rej("Error retrieving pics");
      }
    });
  }
}

module.exports = ProfileImage;

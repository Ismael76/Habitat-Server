const ProfileImage = require("../models/ProfileImage");

async function getAllImages(req, res) {
  try {
    const images = await ProfileImage.all;
    res.status(201).json(images);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { getAllImages };

const Habit = require("../models/Habit");

async function createHabit(req, res) {
  try {
    //From Front End We Want To Send Frequency, Title Of Habit From The Form & The Email Of Logged In User
    const { frequency, title, email } = req.body;
    const habit = await Habit.create(frequency, title, email);
    res.status(201).json(habit);
  } catch (err) {
    res.status(422).json({ err });
  }
}

async function showHabits(req, res) {
  try {
    console.log("IN HERE!");
    const habit = await Habit.all;
    console.log(habit);
    res.status(201).json(habit);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { createHabit, showHabits };

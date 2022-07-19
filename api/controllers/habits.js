const Habit = require("../models/Habit");
const User = require("../models/User");

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

//Shows All Habits Stored In Habits Table
async function showAllHabits(req, res) {
  try {
    const habit = await Habit.all;
    res.status(201).json(habit);
  } catch (err) {
    res.status(422).json({ err });
  }
}

// async function currentUser(req, res) {
//   try {
//     if (req.method == "POST") {
//       const user = await User.findUser(req.body.email);
//       habits = await Habit.findById(user.id);
//     }
//   } catch (err) {
//     res.status(422).json({ err });
//   }
// }

//Shows Habits For Specific Users
async function showUserHabits(req, res) {
  try {
    let id = req.params.id;
    const habits = await Habit.findById(id);
    res.status(201).json(habits);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { createHabit, showAllHabits, showUserHabits };

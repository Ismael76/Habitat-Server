
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

function verifyToken(req, res, next) {
    const token = req.headers('authorization');
    console.log('<----------  token ------------>');
    console.log(token);
    console.log('<----------  token ------------>');

    if(token) {
        JsonWebTokenError.verify(token, "super-secret-password", async (err, data) => {
            if(err) {
                res.status(403).json({err: 'invalid token'})
            } else {
                next()
            }
        })
    } else {
        res.status(403).json({err: 'missing token'})
    }
}



async function showHabits(req, res) {
  try {
    const habit = await Habit.all;
    res.status(201).json(habit);
  } catch (err) {
    res.status(422).json({ err });
  }
}

module.exports = { createHabit, showHabits };

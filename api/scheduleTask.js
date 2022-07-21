const db = require("./dbConfig/init");
const Habit = require("./models/Habit");

async function checkCompleted() {
  let allHabits = await Habit.all;

  console.log("IN THIS CHECK COMPLETED FUNCTION");
  allHabits.forEach(async (habit) => {
    await resetHabit(habit);
  });
}

async function resetHabit(habit) {
  console.log("IN THIS RESET HABIT FUNCTION");
  let obj = { completed: "f" };
  if (habit.completed == true) {
    try {
      let updateProgression = await db.query(
        "UPDATE habits SET progression = 0, completed = $1 WHERE id = $2;",
        [obj.completed, habit.id]
      );
    } catch (err) {
      console.log("Failed To Update Progression!");
    }
  } else {
    try {
      let updateProgression = await db.query(
        "UPDATE habits SET progression = 0, streak = 0, completed = $1 WHERE id = $2;",
        [obj.completed, habit.id]
      );
    } catch (err) {}
    console.log("Failed To Update Streak & Progression!");
  }
}

checkCompleted();

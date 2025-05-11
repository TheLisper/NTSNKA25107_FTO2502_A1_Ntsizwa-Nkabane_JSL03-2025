/*
// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase();

// Keep asking until the user enters a valid status for task 1
while (
  task1Status !== "todo" &&
  task1Status !== "doing" &&
  task1Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task1Status = prompt(
    "Enter task 1 status (todo, doing, done):"
  ).toLowerCase();
}

// Repeat the same steps for task 2
const task2Title = prompt("Enter task 2 title:");
const task2Description = prompt("Enter task 2 description:");
let task2Status = prompt(
  "Enter task 2 status (todo, doing, done):"
).toLowerCase();

while (
  task2Status !== "todo" &&
  task2Status !== "doing" &&
  task2Status !== "done"
) {
  alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  task2Status = prompt(
    "Enter task 2 status (todo, doing, done):"
  ).toLowerCase();
}

// Check if task1 is done, and log it if so
if (task1Status === "done") {
  console.log("Title: " + task1Title + ", status: " + task1Status);
}

// Check if task2 is done, and log it if so
if (task2Status === "done") {
  console.log("Title: " + task2Title + ", status: " + task2Status);
}

// If neither task1 nor task2 is done, show a motivational message
if (task1Status !== "done" && task2Status !== "done") {
  console.log("No tasks completed, let's get to work!");
} */

const initialTasks = [
  {
    id: 1,
    title: "Gym",
    description: "Work those muscles",
    status: "todo",
  },
  {
    id: 2,
    title: "Study",
    description: "Work those brains",
    status: "doing",
  },
  {
    id: 3,
    title: "Sleep",
    description:
      "Rest that bod",
    status: "done",
  },
  {
    id: 4,
    title: "Correct JSL02",
    description:
      "Makecorrections to JSL02 before attempting JSL03",
    status: "done",
  },
  {
    id: 5,
    title: "Work on JSL03",
    description:
      "Read the project brief and user stories to understand the requirements,implement a solution",
    status: "todo",
  },
  {
    id: 6,
    title: "Revise Javascript concepts",
    description:
      "Practice JS concepts to make sure I understand the fundamentals",
    status: "doing",
  },


];
 const completedTasks = initialTasks.filter(status => initialTasks.status === 'done');
 console.log('Initial tasks:', initialTasks);
 console.log('completed tasks:', completedTasks);

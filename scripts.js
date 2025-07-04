// Ask the user for the title and description of task 1
const task1Title = prompt("Enter task 1 title:");
const task1Description = prompt("Enter task 1 description:");

// Ask for the status of task 1 and convert it to lowercase
let task1Status = prompt(
  "Enter task 1 status (todo, doing, done):"
).toLowerCase()

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
}

const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description: "Gain practical experience",
    status: "done",
  },
];
// Function to get a valid status input from the user
function getValidStatus() {
  let status = prompt("Enter status (todo, doing, done):").toLowerCase();
   // Convert input to lowercase
  while (!["todo", "doing", "done"].includes(status)) {
    // Check if input is valid
    status = prompt("Invalid! Enter status (todo, doing, done):").toLowerCase();
  }
  return status; // Return correct status
}
// Function to add three new tasks
function addTasks() {
  for (let i = 0; i < 3; i++) {
    // Loop runs three times
    if (tasks.length >= 6) {
      // Max six tasks allowed
      alert("There are enough tasks on your board, check the console.");
      return; // Stop adding more tasks
    }
    // Ask user for task details
    let title = prompt(`Task ${tasks.length + 1} title?`);
    let description = prompt(`Task ${tasks.length + 1} description?`);
    let status = getValidStatus()
    // Add new task to list
    tasks.push({ id: tasks.length + 1, title, description, status });
    // Show new task in console
    console.log("New task added:", tasks[tasks.length - 1]);
  }
}
// Function to display all tasks
function showTasks() {
const allTasks= [

  {id: 1, title: 'Gym', description: 'Work those muscles', status: 'todo' },
  {id: 2, title: 'Study', description: 'Work those brains', status: 'doing' },
  {id: 3, title: 'Sleep', description: 'Rest that bod', status: 'done' },
  {id: 4, title: 'Correct JSL02', description: 'Make corrections to JSL02 before attempting to JSL03', status: 'done' },
  {id: 5, title: 'Work on JSL03', description: 'Read the brief and user stories...', status: 'todo' },
  {id: 6, title: 'Revise Javascript concepts', description: 'Practise JS concepts...', status: 'doing' },
];
}
// Function to show completed tasks
function showCompleted() {
  let completed = tasks.filter((task) => task.status === "done"); // Get tasks that are "done"
  if (completed.length) {
    console.log("Completed Tasks:", completed);
  } else {
    console.log("No tasks completed, let's get to work!");
  }
}
// Example usage - runs functions in order
showTasks();
addTasks(); // Adds three new tasks
showCompleted();
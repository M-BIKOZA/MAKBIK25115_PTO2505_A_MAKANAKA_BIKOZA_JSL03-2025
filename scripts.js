// Task list - stores existing tasks in an array
const tasks = [
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
}
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
console.log('All Tasks:');
console.log(tasks)
// Example usage - runs functions in order
addTasks(); // Adds three new tasks
showCompleted();
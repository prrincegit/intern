// todo.js

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const task = {
    text: taskText,
    completed: false
  };

  const tasks = getTasksFromStorage();
  tasks.push(task);
  saveTasksToStorage(tasks);

  input.value = "";
  renderTasks();
}

function removeTask(index) {
  const tasks = getTasksFromStorage();
  tasks.splice(index, 1);
  saveTasksToStorage(tasks);
  renderTasks();
}

function toggleComplete(index) {
  const tasks = getTasksFromStorage();
  tasks[index].completed = !tasks[index].completed;
  saveTasksToStorage(tasks);
  renderTasks();
}

function getTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [];
}

function saveTasksToStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const tasks = getTasksFromStorage();
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})">
      <span style="text-decoration: ${task.completed ? 'line-through' : 'none'};">${task.text}</span>
      <button onclick="removeTask(${index})">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

function loadTasks() {
  renderTasks();
}

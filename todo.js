let text = document.getElementById("newTask");
let listContainer = document.querySelector(".todo");
let tasks = [];

// Load tasks from localStorage
function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    tasks = savedTasks;
    show();
  }
}
loadTasks();

function myFunction() {
  const taskText = text.value.trim();
  if (taskText === "") {
    alert("You must put at least one task!");
  } else {
    const task = `<li><input type="checkbox"> ${taskText} </li>`;
    listContainer.innerHTML += task;
    tasks.push(taskText); // Push the task text into the tasks array
    text.value = "";
    save(); // Call save() to update the localStorage
  }
}

listContainer.addEventListener("click", function (event) {
  const target = event.target;
  const location = target.parentElement;

  if (target.type === "checkbox") {
    location.classList.toggle("checked");
    setTimeout(() => {
      const taskText = location.innerText.trim();
      const taskIndex = tasks.indexOf(taskText);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        update(); // Call update() to update the localStorage
      }
      location.remove();
    }, 1000);
  } else if (target.tagName === "IMG") {
    save();
  }
});

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function update() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function show() {
  listContainer.innerHTML = ""; // Clear the list
  tasks.forEach((taskText) => {
    const task = `<li><input type="checkbox"> ${taskText} </li>`;
    listContainer.innerHTML += task;
  });
}

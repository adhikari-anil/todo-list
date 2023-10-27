// const tasks = [];
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
    const task = `<li><input type="checkbox"> ${taskText} <img src="https://cdn2.vectorstock.com/i/1000x1000/64/71/diskette-black-icon-save-button-vector-31046471.jpg"></li>`;
    listContainer.innerHTML += task;
    //tasks.push(taskText);
    text.value = "";
  }
}

listContainer.addEventListener("click", function (event) {
  const target = event.target;
  const location = target.parentElement;
  const deleteitem = location.innerText;
  //console.log(deleteitem);
  if (target.type === "checkbox") {
    target.parentElement.classList.toggle("checked");
    setInterval(() => {
      /*
      //remove(location);
      const tasklist = target.nextSibling.textContent.trim(); // Get the task text
      const taskIndex = tasks.indexOf(tasklist);
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
      }
      */
      update();
      location.remove();
    }, 1000);
  } else if (target.tagName === "IMG") {
    save();
  }
});

function save(deleteitem) {
  tasks.push(deleteitem);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function update() {
  const tasklist = target.nextSibling.textContent.trim(); // Get the task text
  const taskIndex = tasks.indexOf(tasklist);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function show() {
  listContainer.innerHTML = ""; // Clear the list
  tasks.forEach((taskText) => {
    const task = `<li><input type="checkbox"> ${taskText} <img src="https://cdn2.vectorstock.com/i/1000x1000/64/71/diskette-black-icon-save-button-vector-31046471.jpg"></li>`;
    listContainer.innerHTML += task;
  });
}

/*
let inputs = document.getElementById("newTask");
let text = document.querySelector(".todo");

function myFunction() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value}`;
        text.appendChild(newEle);
        inputs.value = "";
    }
}
*/

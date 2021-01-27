const taskInput = document.querySelector("#task");
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

const reloadIcon = document.querySelector(".fa");

form.addEventListener("submit", addNewTask);

clearBtn.addEventListener("click", clearAllTasks);

filter.addEventListener("keyup", filterTasks);

taskList.addEventListener("click", removeTask);

reloadIcon.addEventListener('click', reloadPage);

function addNewTask(e) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.className = 'delete-item secondary-content';

    li.appendChild(link);
    taskList.appendChild(li);

    if (taskInput.value === "") {
        taskInput.style.borderColor = 'red';
        return;
    }  else {
        e.preventDefault();
    }
}

function clearAllTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm("Are you sure about that?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function filterTasks() {
    alert("Task Filter ..");
}

function reloadPage() {
    location.reload();
}
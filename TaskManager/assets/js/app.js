document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {
        'closeOnClick': true
    }
    var instances = M.Dropdown.init(elems, options);
  });

const taskInput = document.querySelector("#task");
const form = document.querySelector("#task-form");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


const reloadIcon = document.querySelector(".fa");

const sortAscend = document.querySelector("#ascending");
const sortDescend = document.querySelector("#descending");


form.addEventListener("submit", addNewTask);

clearBtn.addEventListener("click", clearAllTasks);

filter.addEventListener("keyup", filterTasks);

taskList.addEventListener("click", removeTask);

reloadIcon.addEventListener('click', reloadPage);

sortAscend.addEventListener("click", defaultSort);

sortDescend.addEventListener("click", descendSort);


function addNewTask(e) {

    createTask(taskInput.value);
    if (taskInput.value === "") {
        taskInput.style.borderColor = 'red';
        return;
    }  else {
        e.preventDefault();
    }
}

function createTask(value) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(value));
    
    const link = document.createElement('a');
    li.id = Date.now().toString();

    link.innerHTML = '<i class="fa fa-remove"></i>';

    link.className = 'delete-item secondary-content';

    li.appendChild(link);
    taskList.appendChild(li);
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
    document.querySelectorAll(".collection-item").forEach(item => {
        if (item.textContent.indexOf(filter.value) == -1)
            item.style.display = "none";
        });
}

function defaultSort(e) {

    let collection = Array.from(document.querySelectorAll(".collection-item")).sort(function(a,b) {
        var aDate = a.id;
        var bDate = b.id;
        if (aDate > bDate) return 1;
        if (aDate < bDate) return -1;
        return 0;
    });
    clearAllTasks();
    collection.forEach(item => {
        createTask(item.textContent)});

}

function descendSort() {
    let collection = Array.from(document.querySelectorAll(".collection-item")).sort(function(a,b) {
        var aDate = a.id;
        var bDate = b.id;
        if (aDate > bDate) return 1;
        if (aDate < bDate) return -1;
        return 0;
    }).reverse();
    clearAllTasks();
    collection.forEach(item => {
        createTask(item.textContent);});
}

function reloadPage() {
    location.reload();
}


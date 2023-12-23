document.addEventListener('DOMContentLoaded', function () {
    load();
});

function addTask() {
    var tasks = prompt("Test");
    if (tasks.length > 0) {
        newTodo(tasks);
        save();
    }
}

function newTodo(todo) {
    var list = document.getElementById("ft_list");
    var task = document.createElement("div");
    task.className = "ft_task";
    task.textContent = todo;
    task.onclick = function () {
        if (confirm("Are you sure you want to delete this task?")) {
            task.remove(this);
            save();
        }
    }
    list.insertBefore(task, list.firstChild);
}

function save() {
    var tasks = [];
    var all = document.querySelectorAll(".ft_task");
    all.forEach(function (all) {
        tasks.push(all.textContent);
    });
    console.log(tasks);
    document.cookie = "tasks=" + JSON.stringify(tasks);
}

function load() {
    var cookies = document.cookie.split(';');
    for (var cookie of cookies) {
        var [name, value] = cookie.split('=');
        if (name.trim() === 'tasks') {
            var tasks = JSON.parse(value);
            tasks.reverse();
            tasks.forEach(function (task) {
                newTodo(task);
            });
        }
    }
}

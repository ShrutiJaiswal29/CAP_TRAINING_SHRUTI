let button = document.getElementById("addBtn");

button.addEventListener("click", addTask);

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value;

    let li = document.createElement("li");

    li.textContent = task;

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

}
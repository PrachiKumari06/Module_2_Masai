let task = document.querySelector("#task");
let add = document.querySelector("#add");
let list = document.querySelector("#list");

add.onclick = function () {
    if (task.value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task.value + " ";

    let complete = document.createElement("button");
    complete.textContent = "Complete";

    let del = document.createElement("button");
    del.textContent = "Delete";

    complete.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    del.onclick = function () {
        li.remove();
    };

    li.appendChild(complete);
    li.appendChild(del);

    list.appendChild(li);

    task.value = "";
};

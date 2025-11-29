let colorInput = document.querySelector("#colorInput");
let textInput = document.querySelector("#textInput");
let box = document.querySelector("#box");

let bgBtn = document.querySelector("#bgBtn");
let textBtn = document.querySelector("#textBtn");

bgBtn.onclick = function () {
    let color = colorInput.value;
    box.style.backgroundColor = color;

    if (box.style.backgroundColor === "") {
        alert("Invalid color name!");
    }
};

textBtn.onclick = function () {
    let text = textInput.value;

    if (text === "") {
        alert("Please enter some text!");
    } else {
        box.textContent = text;
    }
};

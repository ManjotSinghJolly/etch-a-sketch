let size = prompt("Enter the size of the grid");
size = Number(size);

const body = document.body;
const container = document.createElement("div");
container.classList.add("main-container");
body.append(container);

let boxWidth = 500 / size;
let boxHeight = 500 / size;

if (size <= 100) {
  for (let i = 1; i <= size ** 2; i++) {
    const div = document.createElement("div");
    div.style.width = boxWidth + "px";
    div.style.height = boxHeight + "px";

    div.setAttribute("width", "boxWidth");
    div.setAttribute("height", "boxHeight");
    // div.textContent = "haha";
    div.classList.add("box");
    container.append(div);
  }
} else {
  alert("Please enter a grid size less than 100.");
}

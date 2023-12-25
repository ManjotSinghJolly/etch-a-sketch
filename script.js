function makeGrid(gridSize) {
  const body = document.body;
  const container = document.createElement("div");
  container.classList.add("main-container");
  body.append(container);

  let boxWidth = 500 / gridSize;
  let boxHeight = 500 / gridSize;

  for (let i = 1; i <= gridSize ** 2; i++) {
    const div = document.createElement("div");
    div.style.width = boxWidth + "px";
    div.style.height = boxHeight + "px";

    div.setAttribute("width", "boxWidth");
    div.setAttribute("height", "boxHeight");
    // div.textContent = "haha";
    div.classList.add("box");
    container.append(div);
  }
}

//Asking the user for the grid size in the prompt
let size = prompt("Enter the size of the grid");
size = Number(size);
makeGrid(size);

// const body = document.body;
// const container = document.createElement("div");
// container.classList.add("main-container");
// body.append(container);

// let boxWidth = 500 / size;
// let boxHeight = 500 / size;

// for (let i = 1; i <= size ** 2; i++) {
//   const div = document.createElement("div");
//   div.style.width = boxWidth + "px";
//   div.style.height = boxHeight + "px";

//   div.setAttribute("width", "boxWidth");
//   div.setAttribute("height", "boxHeight");
//   // div.textContent = "haha";
//   div.classList.add("box");
//   container.append(div);
// }

// selecting the Grid Change button
const gridBtn = document.getElementById("button");
gridBtn.addEventListener("click", function () {
  // let size = prompt("Enter the size of the grid");
  // size = Number(size);
  location.reload();

  //
});

//Selecting boxes to draw on hover
const boxes = document.querySelectorAll(".box");

//Draw on Hover
boxes.forEach(function (box) {
  box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "black";
  });
});

//Erase functionality
const eraser = document.getElementById("erase");
eraser.addEventListener("click", function () {
  console.log("I think the erase button was really clicked this time.");
  boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "white";
    });
  });
});

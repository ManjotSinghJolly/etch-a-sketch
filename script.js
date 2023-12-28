//Asking the user for the grid size in the prompt
let size = prompt("Enter the size of the grid. The max size is 100");
size = Number(size);
while (size > 100) {
  size = prompt("Enter the size of the grid. The max size is 100");
  size = Number(size);
}
makeGrid(size);

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
const gridBtn = document.getElementById("change-grid");
gridBtn.addEventListener("click", function () {
  // let size = prompt("Enter the size of the grid");
  // size = Number(size);
  location.reload();

  //
});

//Selecting boxes to draw on hover
const boxes = document.querySelectorAll(".box");

// //Draw on Hover
// boxes.forEach(function (box) {
//   box.addEventListener("mouseover", function () {
//     box.style.backgroundColor = color;
//   });
// });

//Erase functionality
const eraser = document.getElementById("erase");
eraser.addEventListener("click", function () {
  // console.log("I think the erase button was really clicked this time.");
  boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = "white";
    });
  });
});

//Colour Functionality
let color;
const colorPicker = document.getElementById("colour-picker");
// console.log("The value of the color selected is: " + colorPicker);
//Click function for the colour picker
colorPicker.addEventListener("change", function (colorValue) {
  color = colorValue.target.value;
  boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = color;
    });
  });
  // console.log("The value of the new color is: " + color);
});

function generateRandomColor() {
  let alphabets = ["a", "b", "c", "d", "e", "f"];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // let randomAlphabet = Math.floor(Math.random() * 10);
  // console.log(randomAlphabet);
  // let randomNumber = Math.floor(Math.random() * 6);
  // console.log("The random alphabet is: " + alphabets[randomAlphabet]);
  // console.log("The random number is: " + numbers[randomNumber]);
  hexCodeList = [];
  let randomAlphabet;
  let randomNumber;
  // Loop for the alphabets
  let randomCount = Math.floor(Math.random() * 6) + 1;

  for (let j = 1; j <= randomCount; j++) {
    randomAlphabet = Math.floor(Math.random() * 6);
    hexCodeList.push(alphabets[randomAlphabet]);

    // console.log("Content at iteration " + j + ": " + hexCodeList);
  }
  let listLength = hexCodeList.length;
  // console.log("Length: " + listLength);
  let lengthLeft = 6 - listLength;

  // Loop for numbers
  if (lengthLeft < 6) {
    for (let k = 1; k <= lengthLeft; k++) {
      randomNumber = Math.floor(Math.random() * 10);
      hexCodeList.push(numbers[randomNumber]);
      // console.log("The content at iteration " + k + " is: " + hexCodeList);
    }
  }

  // console.log("The hex code list is: " + hexCodeList);

  //Printing the hexCodeList in random order
  // Printing the hexCodeList in random order
  randomHexList = [];
  let remainingIndices = [0, 1, 2, 3, 4, 5];

  for (let l = 1; l <= 6; l++) {
    const randomIndex = Math.floor(Math.random() * remainingIndices.length);
    const selectedIndex = remainingIndices.splice(randomIndex, 1)[0];
    randomHexList.push(hexCodeList[selectedIndex]);
  }

  // console.log("The final content is: " + randomHexList);

  // Join the list into a string
  const hexCode = randomHexList.join("");

  // Use the hexCode as a color option
  const colorOption = "#" + hexCode;

  return colorOption;
}

// console.log(colorOption);

// console.log("Okay, The color option is: " + resultColor);

//Rainbow Mode Button
let rainbowButton = document.getElementById("rainbow");
rainbowButton.addEventListener("click", function () {
  boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
      let resultColor = generateRandomColor();
      box.style.backgroundColor = resultColor;
    });
  });
});

//Reset Grid button
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  boxes.forEach(function (box) {
    box.style.backgroundColor = "#fff";
  });
});

// let rgbaValue = 0;
//Progressive Shading
boxes.forEach(function (box) {
  // console.log(box);
  let rgbaValue = 0;
  box.addEventListener("mouseover", function () {
    rgbaValue += 0.1;

    box.style.backgroundColor = `rgba(0, 0, 0, ${rgbaValue})`;
  });
});

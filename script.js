//Asking the user for the grid size in the prompt
let size = prompt("Enter the size of the grid. The max size is 100.");
size = Number(size);
while (size > 100) {
  size = prompt("Enter the size of the grid. The max size is 100.");
  size = Number(size);
}
makeGrid(size);

function makeGrid(gridSize) {
  const body = document.body;

  const container = document.createElement("div");
  container.classList.add("main-container");
  const mainLayout = document.getElementById("layout");
  body.append(container);

  let boxWidth = 500 / gridSize;
  let boxHeight = 500 / gridSize;

  for (let i = 1; i <= gridSize ** 2; i++) {
    const div = document.createElement("div");
    div.style.width = boxWidth + "px";
    div.style.height = boxHeight + "px";

    div.setAttribute("width", "boxWidth");
    div.setAttribute("height", "boxHeight");

    div.classList.add("box");

    container.append(div);

    mainLayout.append(container);
  }
}

//Selecting boxes to draw on hover
const boxes = document.querySelectorAll(".box");

//Progressive Shading on hovering
boxes.forEach(function (box) {
  let rgbaValue = 0;

  box.addEventListener("mouseover", function () {
    rgbaValue += 0.1;

    box.style.backgroundColor = `rgba(0,0,0, ${rgbaValue})`;
  });
});

//Colour Picker Functionality
let color;
const colorPicker = document.getElementById("colour-picker");

colorPicker.addEventListener("change", function (colorValue) {
  color = colorValue.target.value;
  boxes.forEach(function (box) {
    box.addEventListener("mouseover", function () {
      box.style.backgroundColor = color;
    });
  });
});

function generateRandomColor() {
  let alphabets = ["a", "b", "c", "d", "e", "f"];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  hexCodeList = [];
  let randomAlphabet;
  let randomNumber;
  // Loop for the alphabets
  let randomCount = Math.floor(Math.random() * 6) + 1;

  for (let j = 1; j <= randomCount; j++) {
    randomAlphabet = Math.floor(Math.random() * 6);
    hexCodeList.push(alphabets[randomAlphabet]);
  }
  let listLength = hexCodeList.length;

  let lengthLeft = 6 - listLength;

  // Loop for numbers
  if (lengthLeft < 6) {
    for (let k = 1; k <= lengthLeft; k++) {
      randomNumber = Math.floor(Math.random() * 10);
      hexCodeList.push(numbers[randomNumber]);
    }
  }

  //Printing the hexCodeList in random order

  randomHexList = [];
  let remainingIndices = [0, 1, 2, 3, 4, 5];

  for (let l = 1; l <= 6; l++) {
    const randomIndex = Math.floor(Math.random() * remainingIndices.length);
    const selectedIndex = remainingIndices.splice(randomIndex, 1)[0];
    randomHexList.push(hexCodeList[selectedIndex]);
  }

  // Join the list into a string
  const hexCode = randomHexList.join("");

  // Use the hexCode as a color option
  const colorOption = "#" + hexCode;

  return colorOption;
}

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

//Reset Grid button
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  boxes.forEach(function (box) {
    box.style.backgroundColor = "#fff";
  });
});

//Grid Change button
const gridBtn = document.getElementById("change-grid");
gridBtn.addEventListener("click", function () {
  location.reload();
});

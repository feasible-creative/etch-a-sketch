const button = document.querySelector("#squareCount");
const gridContainer = document.getElementById("gridContainer");

function setGrid() {
  button.addEventListener("click", () => {
    answer = prompt("How many squares per side? (Max 100)");
    // console.log(`"${answer}"`);
    gridContainer.style.gridTemplateColumns = `repeat(${answer},1fr)`;

    for (i = 1; i <= answer ** 2; i++) {
      const grid16 = document.createElement("div");
      grid16.textContent = "";

      // grid16.style.width = `${answer}` + "px";
      // grid16.style.height = `${answer}` + "px";

      gridContainer.appendChild(grid16);

      grid16.classList.add("gridItem");

      grid16.addEventListener("mouseover", () => {
        // grid16.style.backgroundColor = "black"

        // random color selector:
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        grid16.style.backgroundColor = "#" + randomColor;

        grid16.style.backgroundColor = "randomColor";
      });
    }
  });
}

setGrid();

// function playGame() {
//   button.addEventListener("click", () => {
//     answer = prompt("How many squares per side? (Max 100)");
//     console.log(answer);
//     if (answer > 100) {
//       alert("ERROR: Please select a value less than 100.");
//     }

//     for (i = 1; i <= 100; i++) {
//       const grid16 = document.createElement("div");
//       grid16.textContent = "";

//       // grid16.style.width = `${answer}` + "px";
//       // grid16.style.height = `${answer}` + "px";

//       gridContainer.appendChild(grid16);

//       grid16.classList.add("gridItem");

//       grid16.addEventListener("mouseover", () => {
//         // grid16.style.backgroundColor = "black"
//         const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//         grid16.style.backgroundColor = "#" + randomColor;

//         grid16.style.backgroundColor = "randomColor";
//       });
//     }
//   });
// }

// playGame();

// console.log(i);
// console.log('hi')

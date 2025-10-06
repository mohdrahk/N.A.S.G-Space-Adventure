// Variables
const grid = document.querySelector(".grid")
const resultsDisplay = document.querySelector(".results")
const width = 20

// Drawing 400 cells
for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div")
  square.className = "cell"
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll(".grid div"))
console.log(squares)

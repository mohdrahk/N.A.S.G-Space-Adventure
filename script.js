// Variables
const grid = document.querySelector(".grid")
const resultsDisplay = document.querySelector(".results")
const width = 20
const alienRemoved = []
let currentShooterIndex = 369

// Drawing 400 cells
for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div")
  square.className = "cell"
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll(".grid div"))
console.log(squares)

//Placing the Alien Invaders
const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55,
]

function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!alienRemoved.includes(i)) {
      squares[alienInvaders[i]].setAttribute("id", "invader")
    }
  }
}

squares[currentShooterIndex].setAttribute("id", "shooter")

draw()

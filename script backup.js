// Variables
const grid = document.querySelector(".grid")
const resultsDisplay = document.querySelector(".results")
const width = 20
const alienRemoved = []
let currentShooterIndex = 369
let invadersId
let isGoingRight = true
let direction = 1

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

//Drawing the invaders ontop of the grid
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!alienRemoved.includes(i)) {
      squares[alienInvaders[i]].setAttribute("id", "invader")
    }
  }
}

squares[currentShooterIndex].setAttribute("id", "shooter")

//Redrawing the Aliens
function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].removeAttribute("id")
  }
}

//Logic for Moving the shooter
function moveShooter(e) {
  squares[currentShooterIndex].removeAttribute("id")
  switch (e.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1 //Will not move to beyond the left border
      break
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1 //Will not move to beyond the right border
      break
  }
  squares[currentShooterIndex].setAttribute("id", "shooter")
}

//Event listener to move Hero Ship
document.addEventListener("keydown", moveShooter)

//Logic to move Aliens by redrawing them with increments
function moveInvaders() {
  const leftEdge = alienInvaders[0] % width === 0
  const rightEdge =
    alienInvaders[alienInvaders.length - 1] % width === width - 1

  remove()

  if (rightEdge && isGoingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width // Move down
    }
    direction = -1
    isGoingRight = false
  } else if (leftEdge && !isGoingRight) {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += width // Move down
    }
    direction = 1
    isGoingRight = true
  } else {
    for (let i = 0; i < alienInvaders.length; i++) {
      alienInvaders[i] += direction // Move left or right
    }
  }

  draw()

  // Check for game over condition: Invaders touching the shooter
  for (let i = 0; i < alienInvaders.length; i++) {
    if (alienInvaders[i] === currentShooterIndex) {
      resultsDisplay.innerHTML = "GAME OVER"
      clearInterval(invadersId)
      return // Exit the function
    }
  }

  // Check if all Invaders are gone
  if (alienRemoved.length === alienInvaders.length) {
    resultsDisplay.innerHTML = "You have saved the Kingdom"
    clearInterval(invadersId)
  }
}

draw()
// Check for game over condition
if (alienInvaders.some((invader) => invader >= squares.length - width)) {
  resultsDisplay.innerHTML = "GAME OVER"
  clearInterval(invadersId)
}

//Speed of invaders movement
invadersId = setInterval(moveInvaders, 600)

//Adding bullets/lasers

function shoot(e) {
  let bulletId
  let currentLaserIndex = currentShooterIndex

  function moveBullet() {
    // Remove the bullet ID only if it's not the shooter's position
    if (squares[currentLaserIndex].id === "bullet") {
      squares[currentLaserIndex].removeAttribute("id") // Remove bullet ID
    }

    currentLaserIndex -= width // Move the bullet up

    // Add the bullet ID to the new position
    if (currentLaserIndex >= 0) {
      squares[currentLaserIndex].setAttribute("id", "bullet")
    }
    if (squares[currentLaserIndex].classList.contains("invader")) {
      squares[currentLaserIndex].classList.remove("laser")
      squares[currentLaserIndex].classList.remove("invader")
    }
  }

  switch (e.key) {
    case "ArrowUp":
      bulletId = setInterval(moveBullet, 100)
      break
  }
}

//Event to shoot
document.addEventListener("keydown", shoot)

draw()

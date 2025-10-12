// Music Button
function toggleMusic() {
  const audio = document.getElementById("background-music")
  const button = document.getElementById("music-toggle")

  if (audio.paused) {
    audio.play()
    button.textContent = "Stop Music" // Update button text
  } else {
    audio.pause()
    button.textContent = "Play Music" // Update button text
  }
}

// Variables
const grid = document.querySelector(".grid")
const resultsDisplay = document.querySelector(".results")
const width = 20
const alienRemoved = []
let currentShooterIndex = 369
let invadersId
let isGoingRight = true
let direction = 1
let results = 0
const levelWinner = document.querySelector(".level-winner")

// Drawing 400 cells
for (let i = 0; i < width * width; i++) {
  const square = document.createElement("div")
  grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll(".grid div"))

// Placing the Alien Invaders
const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 40, 41, 42, 43, 44, 45, 46, 47, 48,
  49, 50, 51, 52, 53, 54, 55,
]

// Drawing the invaders on top of the grid
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    if (!alienRemoved.includes(i)) {
      squares[alienInvaders[i]].classList.add("invader")
    }
  }
}

squares[currentShooterIndex].classList.add("shooter")

// Redrawing the Aliens
function remove() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.remove("invader")
  }
}

// Logic for Moving the shooter
function moveShooter(e) {
  squares[currentShooterIndex].classList.remove("shooter")
  switch (e.key) {
    case "ArrowLeft":
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1 // Will not move beyond the left border
      break
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1 // Will not move beyond the right border
      break
  }
  squares[currentShooterIndex].classList.add("shooter")
}

// Event listener to move Hero Ship
document.addEventListener("keydown", moveShooter)

// Logic to move Aliens by redrawing them with increments
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
    levelWinner.style.opacity = "1"
    grid.style.opacity = "0"
    clearInterval(invadersId)

    const audio = document.getElementById("background-music")
    audio.src = "epicwin.mp3"
    audio.play()
  }
}

draw()

// Speed of invaders movement
invadersId = setInterval(moveInvaders, 600)

// Adding bullets/lasers

function shoot(e) {
  let bulletId
  let currentLaserIndex = currentShooterIndex

  // Play shoot sound
  const shootSound = document.getElementById("shoot-sound")
  shootSound.currentTime = 0 // Have to reset sound to play
  shootSound.play()

  function moveBullet() {
    // Remove the bullet class only if it's not the shooter's position
    if (squares[currentLaserIndex].classList.contains("bullet")) {
      squares[currentLaserIndex].classList.remove("bullet") // Remove bullet class
    }

    currentLaserIndex -= width // Move the bullet up

    // Add the bullet class to the new position
    if (currentLaserIndex >= 0) {
      squares[currentLaserIndex].classList.add("bullet")
    }

    // Check for collision with invaders
    if (squares[currentLaserIndex].classList.contains("invader")) {
      squares[currentLaserIndex].classList.remove("bullet")
      squares[currentLaserIndex].classList.remove("invader")

      // Play hit sound
      const hitSound = document.getElementById("hit-sound")
      hitSound.currentTime = 0 // Reset sound to start
      hitSound.play()

      // Mark invader as removed and update results
      const invaderIndex = alienInvaders.indexOf(currentLaserIndex)
      if (invaderIndex !== -1 && !alienRemoved.includes(invaderIndex)) {
        alienRemoved.push(invaderIndex) // Mark invader as removed
        results++ // Increment score
        resultsDisplay.innerHTML = results // Display score
      }

      clearInterval(bulletId) // Stop the bullet movement after hitting
    }
  }

  switch (e.key) {
    case "ArrowUp":
      bulletId = setInterval(moveBullet, 100)
      break
  }
}
// Event to shoot
document.addEventListener("keydown", shoot)

draw()

function toggleHow() {
  const image = document.getElementById("toggleImage")
  const button = document.getElementById("toggle-Button")

  const image1 = "NASGposter.jpg"
  const image2 = "howtoposter.png"

  button.addEventListener("click", () => {
    if (image.src.endsWith(image2)) {
      image.src = image1
    } else {
      image.src = image2
    }
  })
}

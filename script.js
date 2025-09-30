// Starting with the grid creation
const GRID_SIZE = 20

function createGrid() {
  const gameBoard = document.getElementById("gameBoard")
  gameBoard.innerHTML = ""

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = document.createElement("div")
    cell.className = "cell"
    cell.id = `box-${i}`

    // Adding the cell as a child of the game board
    gameBoard.appendChild(cell)
  }
}

// Converting grid to x,y coordinates
function getIndex(x, y) {
  return y * GRID_SIZE + x
}

createGrid()

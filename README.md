# N.A.S.G SPACE ADVENTURE

##### SAVE THE KINGDOM
![NASG](/NASGposter.jpg)

## Date: 23/9/2025

### By: Mohamed Khamis

### ***Technologies Used***
* Javascript
* HTML5
* CSS3
***

### ***What is a Snake game?***
#### Before I introduce the concept, I want to look at the logic of a snake game below:

1. *Setup the Game Environment*
    - *HTML Structure*: Use a grid layout with <div> elements or a table to represent the game area. Each cell can be a <div> that gets updated based on the game state, similar to the concepts we learned in our Tic Tac Toe game.
    - *CSS Styles*: Style the grid and the snake segments using CSS.

2. *Define Game Variables*
    - Grid
    - Snake
    - Direction of snake
    - Food to be randomly generated and increase snake size when the snake head touches it.

3. *Game Logic*
    - *Movement*: Update the snake's position based on keyboard presses; the snake moves forward only.
    - *Collision Detection*: Check for collisions with the walls or the snake itself. If a collision occurs, end the game.
    - *Food Consumption*: Grow the snake and generate new food at a random index.

4. *User Input*
    - *Keyboard Events*: Listen for keypress events (e.g., ArrowUp, ArrowDown, ArrowLeft, ArrowRight) to change the direction of the snake.

5. *Rendering the Game*
    - *Updating the Grid*: Clear the previous state of the grid and update the classes or styles of the relevant cells to represent the snake and food.

6. *Game Over Logic*
    - Implement a mechanism to restart the game, similar to the Tic Tac Toe game.
    - The snake should not move after the game has ended.


### ***Let's deconstruct that***
#### So with the Snake game in mind, how about we deconstruct it? Instead of a snake, we turn it into a spaceship that moves only left and right at the bottom of the grid, shooting lasers, while opposite to the ship, we have smaller ships shooting lasers.
1. *Setup the Game Environment*
    - *HTML Structure*: Use a grid layout with <div> elements or a table to represent the game area. Each cell can be a <div> that gets updated based on the game state, similar to the concepts we learned in our Tic Tac Toe game.
    - *CSS Styles*: Style the grid and the spaceship segments using CSS.

2. *Define Game Variables*
    - Grid
    - Spaceship
    - Direction of spaceship
    - Enemy ships
    - Lasers to be fired by the spaceship

3. *Game Logic*
    - *Movement*: Update the spaceship's position based on keyboard presses; the spaceship moves left and right only.
    - *Collision Detection*: Check for collisions with enemy ships or laser shots. If a collision occurs, end the game.
    - *Laser Firing*: Allow the spaceship to shoot lasers; detect collisions with enemy ships.

4. *User Input*
    - *Keyboard Events*: Listen for keypress events (e.g., ArrowLeft, ArrowRight, Spacebar) to change the direction of the spaceship and fire lasers.

5. *Rendering the Game*
    - *Updating the Grid*: Clear the previous state of the grid and update the classes or styles of the relevant cells to represent the spaceship, lasers, and enemy ships.

6. *Game Over Logic*
    - Implement a mechanism to restart the game, similar to the Tic Tac Toe game.
    - The spaceship should not move after the game has ended.


### ***Future Updates***

- [x] Level 1 with enemy patterns
- [x] Ending
- [x] Music
- [x] Models
- [ ] Infinite Mode with Faster moving enemies
- [ ] Shooting mode
- [ ] Have a health system instead of a one hit system
***


### ***Credits***

##### Snake Game concept by DazFather: [Codepen](https://codepen.io/DazFather/pen/rNzWWzv)

##### ALmost all tests from: [W3 Schools](https://www.w3schools.com)


***


const readline = require('readline');

// Define the game board size
const ROWS = 10;
const COLS = 10;

// Define the initial position and direction of the snake
let snake = [[0, 0], [0, 1], [0, 2]];
let direction = { x: 1, y: 0 };

// Define the game board as a two-dimensional array
let board = new Array(ROWS);
for (let i = 0; i < ROWS; i++) {
  board[i] = new Array(COLS).fill(' ');
}

// Define the food position
let food = null;

// Define the game loop interval
let intervalId = null;

// Define the game score
let score = 0;

// Set up keyboard input
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else if (key.name === 'up') {
    direction = { x: 0, y: -1 };
  } else if (key.name === 'down') {
    direction = { x: 0, y: 1 };
  } else if (key.name === 'left') {
    direction = { x: -1, y: 0 };
  } else if (key.name === 'right') {
    direction = { x: 1, y: 0 };
  }
});

// Function to move the snake in the current direction
function moveSnake() {
  // Get the head and tail of the snake
  let head = snake[snake.length - 1];
  let tail = snake.shift();

  // Update the head position based on the current direction
  head[0] += direction.x;
  head[1] += direction.y;

  // Check for collisions with the game board boundaries
  if (head[0] < 0 || head[0] >= ROWS || head[1] < 0 || head[1] >= COLS) {
    clearInterval(intervalId);
    console.log('Game over!');
    return;
  }

  // Check for collisions with the snake's own body
  if (board[head[0]][head[1]] === 's') {
    clearInterval(intervalId);
    console.log('Game over!');
    return;
    }
    
    // Update the snake's body position
    board[tail[0]][tail[1]] = ' ';
    board[head[0]][head[1]] = 's';
    snake.push(head);
    
    // Check for collisions with the food
    if (food && head[0] === food[0] && head[1] === food[1]) {
    score += 10;
    food = null;
    snake.unshift(tail);
    }
    }
    
    // Function to render the game board on the console
    function renderBoard() {
    // Clear the console
    console.clear();
    
    // Render the board
    for (let i = 0; i < ROWS; i++) {
    let row = '';
    for (let j = 0; j < COLS; j++) {
    if (board[i][j] === 's') {
    row += '■';
    } else if (board[i][j] === 'f') {
    row += '●';
    } else {
    row += ' ';
    }
    }
    console.log(row);
    }
    
    // Render the score
    console.log(`Score: ${score}`);

    }
    
    // Function to generate random food on the board
    function generateFood() {
    let x = Math.floor(Math.random() * ROWS);
    let y = Math.floor(Math.random() * COLS);
    
    // Check that the food is not on the snake
    if (board[x][y] === 's') {
    generateFood();
    } else {
    food = [x, y];
    board[x][y] = 'f';
    }
    }
    
    // Start the game loop
    intervalId = setInterval(() => {
    moveSnake();
    renderBoard();
    
    if (!food) {
    generateFood();
    }
    }, 200);
    
    // Initialize the board with the snake
    snake.forEach((cell) => {
    board[cell[0]][cell[1]] = 's';
    });
    
    // Render the initial game board
    renderBoard();

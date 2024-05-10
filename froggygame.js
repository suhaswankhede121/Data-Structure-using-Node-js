const readline = require('readline');

// Initialize game variables
let stones = [];
let currentPosition = 0;
let jumps = 0;
let remainingJumps = 3;

// Initialize the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to initialize the game board with stones
function initializeBoard() {
  for (let i = 0; i < 10; i++) {
    stones.push(Math.floor(Math.random() * 5) + 1);
  }
  stones[currentPosition] = 'F';
}

// Function to render the game board on the console
function renderBoard() {
  console.clear();
  console.log(stones.join(' '));
  console.log(`Remaining jumps: ${remainingJumps}`);
  console.log(`Total jumps: ${jumps}`);
}

// Function to handle user input and move the frog
function handleInput(input) {
  let newPosition = currentPosition + parseInt(input);
  if (newPosition < 0 || newPosition > 9) {
    console.log('Invalid move!');
    return;
  }

  // Calculate the distance to the target
  let distanceToTarget = 9 - newPosition;

  // Check if the frog can make the jump
  if (stones[newPosition] === 0 || remainingJumps === 0 || distanceToTarget > remainingJumps) {
    console.log('Invalid move!');
    return;
  }

  // Update the game board and variables
  stones[currentPosition] = stones[currentPosition] === 'F' ? 0 : stones[currentPosition];
  stones[newPosition] = 'F';
  currentPosition = newPosition;
  jumps++;
  remainingJumps--;

  // Check if the game is over
  if (currentPosition === 9) {
    console.log('You win!');
    rl.close();
    return;
  }

  // Calculate the optimal jump distance based on the stones ahead
  let maxJumpDistance = 0;
  for (let i = 1; i <= remainingJumps; i++) {
    let nextStone = stones[currentPosition + i];
    if (nextStone > maxJumpDistance) {
      maxJumpDistance = nextStone;
    }
  }

  // Make the optimal jump
  if (maxJumpDistance > 0) {
    handleInput(maxJumpDistance);
  } else {
    remainingJumps = 3;
    renderBoard();
  }
}

// Start the game
initializeBoard();
renderBoard();

rl.on('line', (input) => {
  handleInput(input);
});

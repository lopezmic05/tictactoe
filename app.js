let boardState = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

//define game variables
let player = 1;
let gameOver = false;

// pull in cells from DOM
const cells = document.querySelectorAll(".cell");

//add eventlisteners
cells.forEach((cellSquares, index) => {
  cellSquares.addEventListener("click", () => {
    placeMark(index);
  });
});

//result text from DOM
const resultElement = document.getElementById("result");

//create function for placing marks
function placeMark(index) {
  // determine row and column from index
  let col = index % 3;
  let row = (index - col) / 3;
  //check if curr cell is empty
  if (boardState[row][col] === 0 && gameOver === false) {
    boardState[row][col] = player;
    //change player
    player *= -1;
    playerMarks();
    //check if won
    checkWin();
  }
}

//creat func for creating the players marks
function playerMarks() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardState[row][col] === 1) {
        cells[row * 3 + col].classList.add("cross");
      } else if (boardState[row][col] === -1) {
        cells[row * 3 + col].classList.add("circle");
      }
    }
  }
}

//creating a func to check the winning state of game
function checkWin() {
  for (let i = 0; i < 3; i++) {
    let rowSum = boardState[i][0] + boardState[i][1] + boardState[i][2];
    let colSum = boardState[0][i] + boardState[1][i] + boardState[2][i];
    if (rowSum === 3 || colSum === 3) {
      endGame(1);
      return;
    } else if (rowSum === -3 || colSum === -3) {
      endGame(2);
      return;
    }
  }

  //check diagnols
  let diagSum1 = boardState[0][0] + boardState[1][1] + boardState[2][2];
  let diagSum2 = boardState[0][2] + boardState[1][1] + boardState[2][0];
  if (diagSum1 === 3 || diagSum2 === 3) {
    endGame(1);
    return;
  } else if (diagSum1 === -3 || diagSum2 === -3) {
    endGame(2);
    return;
  }

  //check for draw
  if (
    boardState[0].indexOf(0) === -1 &&
    boardState[1].indexOf(0) === -1 &&
    boardState[2].indexOf(0) === -1
  ) {
    endGame(0);
    return;
  }
}

//Function to end the game and display result

function endGame(winner) {
  gameOver = true;

  if (winner === 0) {
    resultElement.innerText = "TIE";
  } else {
    resultElement.innerText = `Player ${winner} wins!`;
  }
}

//RESTARTING GAME
const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
  //Reset Variables
  boardState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  player = 1;
  gameOver = false;

  //reset board
  cells.forEach((cell) => {
    cell.classList.remove("cross", "circle");
  });
  //reset text
  resultElement.innerText = "";
});

 const gameState = {
  players: ['x', 'o'],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}



// state
let initialState;

function buildInitialState() {

}

// render
function renderState() {

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners

const playerSel = document.getElementsByClassName('selection')
playerSel.addEventListener('click')

const board = document.getElementById('board');

board.addEventListener('click', (event) => {
    event.target.innerHTML = gameState.players[0]

    if( board % 2 === 0){


    }
}); 
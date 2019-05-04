'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  //Your code here
  constructor(color) {
    if (color === 'white') {
      this.symbol = '○';
    } else {
      this.symbol = '●';
    }
  }
}
// Create object instance for white and black checker
// Note: Should create after Ckecker class
const whiteChecker = new Checker('white');
const blackChecker = new Checker('black');

// Let Black checker starts
let playerTurn = blackChecker;

class Board {
  constructor() {
    //hold our Checker instances (pieces) in a two dimensional array
    this.grid = [];
    //repository of checker pieces
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
  createCheckers() {

    // Starting positions of white checkers
    const whitePosition = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ]

    // Starting positions of white checkers
    const blackPosition = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ]

    // Start create white checkers
    // We know white checkers have 12 starting positions 
    for (let i = 0; i < 12; i++) {
      // Determin white position by row
      const whiteRow = whitePosition[i][0];
      // Determin white position by column
      const whiteColumn = whitePosition[i][1];

      // Push the white checkers to the board
      this.checkers.push(whiteChecker);
      // Using row and column value to fill the board
      this.grid[whiteRow][whiteColumn] = whiteChecker;

    }

    // Start create black checkers
    // We know black checkers have 12 starting positions 
    for (let i = 0; i < 12; i++) {
      // Determin black position by row
      const blackRow = blackPosition[i][0];
      // Determin black position by column
      const blackColumn = blackPosition[i][1];

      // Push the black checkers to the board
      this.checkers.push(blackChecker);
      // Using row and column value to fill the board
      this.grid[blackRow][blackColumn] = blackChecker;
    }
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();

    // Create a board with filled white and black checkers
    this.board.createCheckers();
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}

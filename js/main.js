// playerMove function
// winner function
// clear function

var TicTacToe = {
  board : [["_", "_", "_"],
          ["_", "_", "_"],
          ["_", "_", "_"]],
  // winningCombinationsRow : [["x", "x", "x"], ["y", "y", "y"]],
  // winningCombinationsCol : []
  playerMove : function (row, col, player) {
    this.board[row][col] = player;
  },








  checkForWinner : function () {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2]) {
      return "winner";
    }
    if (this.board[0][0] === this.board[1][0] && this.board[i][1] === this.board[i][2]) {
    return "winner";
    }
  }
 };


    // input: none
    // return: player, none
  // numClicks : 0,




$(document).ready(function () {
  $('.box').on('click', function () {
    // change to 'x' or 'o';
    $(this).addClass("x");

    // get coordinates


    // get player
      // odd click = x
      // even click = 0
      // (nClicks) % 2 === 0;
      // increment

    // playerMove () to update array

    // checkForWinner() to check if won
      // if winner => animation or something to identify winner
      // clear board


  })
});











// var logic
// var display
// ["_","_","_"]
// preso
// click handlers
// keep track of move e.g. var change move;

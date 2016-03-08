var TicTacToe = {
  numClicks: 0,
  board : [["_", "_", "_"],
          ["_", "_", "_"],
          ["_", "_", "_"]],
  playerMove : function (row, col, player) {
    this.board[row][col] = player;
  },
  gameComplete: function () {
    swal("Congratulations, you won!", "Ready for another game?");
    $(".x, .o").removeClass("o").removeClass("x");
    return this.board = [["_", "_", "_"],["_", "_", "_"],["_", "_", "_"]];
  },
  checkForWinner : function () {
    for (var i = 0; i < 3; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][0] !== "_") {
        this.gameComplete('winner');
        return true;
      } else if (this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[0][i] !== "_") {
        this.gameComplete('winner');
        return true; // VERTICAL WINS
      }
    }

    if (this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[2][2] !== "_") {
      this.gameComplete("winner");
      return true;
    } else if (this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0] && this.board[2][0] !== "_") {
      this.gameComplete("winner");
      return true;
    }
  }
};

$(document).ready(function () {
  $(".box").on("click", function () {
    TicTacToe.numClicks += 1;
    var xCoord = parseInt( $(this).data("x") );
    var yCoord = parseInt( $(this).data("y") );
    if (TicTacToe.numClicks % 2 === 0) {
      $(this).addClass("x");
      TicTacToe.playerMove(xCoord, yCoord, "x");
    } else {
      $(this).addClass("o");
      TicTacToe.playerMove(xCoord, yCoord, "o");
    }
    TicTacToe.checkForWinner();
  });
});

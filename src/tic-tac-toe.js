class TicTacToe {
  constructor() {
    this.matrix = [['','',''],['','',''],['','','']];	
    this.currentPlayer = 'x';
    this.steps = 0;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.matrix[rowIndex][columnIndex]) {
      this.matrix[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer === 'x' ? this.currentPlayer = 'o' : this.currentPlayer = 'x';
      this.steps++;
    }
  }

  isFinished() {
		return this.getWinner() || this.isDraw() ? true : false;
  }

  getWinner() {
    const a = this.matrix.flat();
    if (a[0] === a[1] && a[0] === a[2] && a[1] === a[2] && +a[0] !== 0) return a[0];
    if (a[3] === a[4] && a[3] === a[5] && a[4] === a[5] && +a[3] !== 0) return a[3];
    if (a[6] === a[7] && a[6] === a[8] && a[7] === a[8] && +a[6] !== 0) return a[6];
    if (a[0] === a[3] && a[0] === a[6] && a[3] === a[6] && +a[0] !== 0) return a[0];
    if (a[1] === a[4] && a[1] === a[7] && a[4] === a[7] && +a[1] !== 0) return a[1];
    if (a[2] === a[5] && a[2] === a[8] && a[5] === a[8] && +a[2] !== 0) return a[2];
    if (a[0] === a[4] && a[0] === a[8] && a[4] === a[8] && +a[0] !== 0) return a[0];
    if (a[2] === a[4] && a[2] === a[6] && a[4] === a[6] && +a[2] !== 0) return a[2];
    return null;
  }

  noMoreTurns() {
		return this.steps === 9 ? true : false;
  }

  isDraw() {
		return this.steps === 9 && !this.getWinner() ? true : false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.matrix[rowIndex][colIndex] ? this.matrix[rowIndex][colIndex] : null;
  }
}

module.exports = TicTacToe;

export class Tile {
  constructor(pos, board) {
    this.pos = pos;
    this.board = board;
    this.has_bomb = false;
    this.explored = false;
    this.flagged = false;
  }

  addBomb() {
    this.has_bomb = true;
  }

  explore() {
    this.explored = true;
  }

  toggleFlag() {
    this.flag = !this.flag;
  }
}

export class Board {
  constructor(rowCount, columnCount, bombCount) {
    this.grid = this.constructGrid(rowCount, columnCount);
  }

  constructGrid(rowCount, columnCount) {
    const grid = [...Array(rowCount)].map( element => Array(columnCount));

    for (let row = 0; row < rowCount; row++) {
      for (let column = 0; column < columnCount; column++) {
        grid[row][column] = new Tile([row, column], this);
      }
    }

    return grid;
  }
}

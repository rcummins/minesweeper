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
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.bombCount = bombCount;
    this.grid = this.constructGrid();
    this.addBombsToGrid();
  }

  addBombsToGrid() {
    while (this.totalBombs() < this.bombCount) {
      let row = Math.floor(Math.random() * this.rowCount);
      let column = Math.floor(Math.random() * this.columnCount);

      if (!this.grid[row][column].has_bomb) {
        this.grid[row][column].addBomb();
      }
    }
  }

  constructGrid() {
    const grid = [...Array(this.rowCount)].map( element => (
      Array(this.columnCount))
    );

    for (let row = 0; row < this.rowCount; row++) {
      for (let column = 0; column < this.columnCount; column++) {
        grid[row][column] = new Tile([row, column], this);
      }
    }

    return grid;
  }

  totalBombs() {
    let total = 0;

    this.grid.flat().forEach( tile => {
      if (tile.has_bomb) {
        total += 1;
      }
    });

    return total;
  }
}

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

  neighborBombCount() {
    let count = 0;

    this.neighbors().forEach( tile => {
      if (tile.has_bomb) {
        count += 1;
      }
    });

    return count;
  }

  neighbors() {
    let neighborsArray = [];

    for (let rowOffset = -1; rowOffset <= 1; rowOffset++) {
      for (let columnOffset = -1; columnOffset <= 1; columnOffset++) {
        if (rowOffset === 0 && columnOffset === 0) { continue; }

        let newPos = [this.pos[0] + rowOffset, this.pos[1] + columnOffset];

        if (!this.board.onBoard(newPos)) { continue; }

        neighborsArray.push(this.board.getTile(newPos));
      }
    }

    return neighborsArray;
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

  getTile(pos) {
    return this.grid[pos[0]][pos[1]];
  }

  onBoard(pos) {
    return(
      pos[0] >= 0 &&
      pos[1] >= 0 &&
      pos[0] < this.rowCount &&
      pos[1] < this.columnCount);
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

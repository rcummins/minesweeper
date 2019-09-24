export class Tile {
  constructor(pos, board) {
    this.pos = pos;
    this.board = board;
    this.hasBomb = false;
    this.explored = false;
    this.flagged = false;
    this.gameOverBombRevealed = false;
  }

  addBomb() {
    this.hasBomb = true;
  }

  explore() {
    if (!this.flagged) {
      this.explored = true;

      if (!this.hasBomb && this.neighborBombCount() === 0) {
        this.neighbors().forEach( neighbor => {
          if (!neighbor.explored) {
            neighbor.explore();
          }
        });
      }
    }
  }

  gameOverRevealBomb() {
    this.gameOverBombRevealed = true;
  }

  neighborBombCount() {
    let count = 0;

    this.neighbors().forEach( tile => {
      if (tile.hasBomb) {
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
    if (!this.explored) {
      this.flagged = !this.flagged;
    }
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

      if (!this.grid[row][column].hasBomb) {
        this.grid[row][column].addBomb();
      }
    }
  }

  allBombFreeTilesExplored() {
    let bombFreeTiles = this.grid.flat().filter(tile => !tile.hasBomb);
    return bombFreeTiles.every(tile => tile.explored);
  }

  allBombsFlagged() {
    let tilesWithBombs = this.grid.flat().filter(tile => tile.hasBomb);
    return tilesWithBombs.every(tile => tile.flagged);
  }

  bombExplored() {
    return this.grid.flat().some(tile => tile.hasBomb && tile.explored);
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

  gameOverRevealAllBombs() {
    this.grid.forEach( row => {
      row.forEach( tile => {
        if (!tile.explored && tile.hasBomb) {
          tile.gameOverRevealBomb();
        }
      })
    })
  }

  lost() {
    return this.bombExplored();
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
      if (tile.hasBomb) {
        total += 1;
      }
    });

    return total;
  }

  won() {
    return !this.bombExplored() &&
      (this.allBombFreeTilesExplored() || this.allBombsFlagged());
  }
}

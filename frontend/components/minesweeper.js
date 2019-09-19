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

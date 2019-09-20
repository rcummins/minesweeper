import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9, 10)
    };

    this.exploreTile = this.exploreTile.bind(this);
    this.toggleTileFlag = this.toggleTileFlag.bind(this);
  }

  exploreTile(tile) {
    tile.explore();
    this.setState({
      board: this.state.board
    });
  }

  toggleTileFlag(tile) {
    tile.toggleFlag();
    this.setState({
      board: this.state.board
    });
  }

  render() {
    return(
      <div>
        <Board
          board={this.state.board}
          exploreTile={this.exploreTile}
          toggleTileFlag={this.toggleTileFlag} />
      </div>
    )
  }
}

export default Game;

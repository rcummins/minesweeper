import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9, 10)
    };
  }

  render() {
    return(
      <div>
        <Board board={this.state.board} />
      </div>
    )
  }
}

export default Game;

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
    this.restartGame = this.restartGame.bind(this);
    this.toggleTileFlag = this.toggleTileFlag.bind(this);
  }

  exploreTile(tile) {
    tile.explore();
    this.setState({
      board: this.state.board
    });
  }

  restartGame() {
    this.setState({
      board: new Minesweeper.Board(9, 9, 10)
    });
  }

  toggleTileFlag(tile) {
    tile.toggleFlag();
    this.setState({
      board: this.state.board
    });
  }

  render() {
    let { board } = this.state;

    let modal;
    if (board.won() || board.lost()) {
      let message = board.won() ? "Congrats, you won!" : "Sorry, you lost";
      modal = (
        <section>

          <article className="modal-content">
            <p>{ message }</p>
            <button onClick={this.restartGame}>Play again</button>
          </article>

          <div className="modal-screen"></div>

        </section>
      )
    }

    return(
      <div>
        <Board
          board={board}
          exploreTile={this.exploreTile}
          toggleTileFlag={this.toggleTileFlag} />

        { modal }
      </div>
    )
  }
}

export default Game;

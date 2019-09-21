import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9, 10),
      remainingFlags: 10,
      elapsedTime: 0,
      timerStarted: false
    };

    this.exploreTile = this.exploreTile.bind(this);
    this.incrementTimer = this.incrementTimer.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.toggleTileFlag = this.toggleTileFlag.bind(this);
  }

  exploreTile(tile) {
    tile.explore();
    this.setState({
      board: this.state.board
    });
  }

  incrementTimer() {
    this.setState({
      elapsedTime: this.state.elapsedTime + 1
    });
  }

  restartGame() {
    this.setState({
      board: new Minesweeper.Board(9, 9, 10),
      remainingFlags: 10,
      elapsedTime: 0,
      timerStarted: false
    });
  }

  startTimer() {
    if (!this.state.timerStarted) {
      this.intervalId = window.setInterval(this.incrementTimer, 1000);
      this.setState({
        timerStarted: true
      });
    }
  }

  toggleTileFlag(tile) {
    if (tile.flagged) {
      tile.toggleFlag();
      this.setState({
        remainingFlags: this.state.remainingFlags + 1
      });
    } else if (!tile.explored && this.state.remainingFlags > 0) {
      tile.toggleFlag();
      this.setState({
        remainingFlags: this.state.remainingFlags - 1
      });
    }

    this.setState({
      board: this.state.board
    });
  }

  render() {
    let { board } = this.state;

    let modal;
    if (board.won() || board.lost()) {

      clearInterval(this.intervalId);
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
        <div className="game-counters">
          <p>Remaining flags: { this.state.remainingFlags }</p>
          <p>Elapsed time: { this.state.elapsedTime }</p>
        </div>
        <Board
          board={board}
          exploreTile={this.exploreTile}
          startTimer={this.startTimer}
          toggleTileFlag={this.toggleTileFlag} />

        { modal }
      </div>
    )
  }
}

export default Game;

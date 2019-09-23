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
        board: this.state.board,
        remainingFlags: this.state.remainingFlags + 1
      });
    } else if (!tile.explored && this.state.remainingFlags > 0) {
      tile.toggleFlag();
      this.setState({
        board: this.state.board,
        remainingFlags: this.state.remainingFlags - 1
      });
    }
  }

  render() {
    let { board } = this.state;

    let gameOver;
    if (board.won() || board.lost()) {

      clearInterval(this.intervalId);

      if (board.lost()) {
        board.gameOverRevealAllBombs();
      }

      let message = board.won() ? "Congrats, you won!" : "Sorry, you lost";

      gameOver = (
        <section className="game-over">
          <p>{ message }</p>
          <button onClick={this.restartGame}>Play again</button>
        </section>
      )
    }

    return(
      <div>
        <h1>Minesweeper</h1>

        <div className="game-counters">
          <p><span>{'\u2691'}</span> { this.state.remainingFlags }</p>
          <p>{ this.state.elapsedTime } {'\u23F1'}</p>
        </div>

        <Board
          board={board}
          exploreTile={this.exploreTile}
          startTimer={this.startTimer}
          toggleTileFlag={this.toggleTileFlag} />

        { gameOver }
      </div>
    )
  }
}

export default Game;

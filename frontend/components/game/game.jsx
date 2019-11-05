import React from 'react';

import * as Minesweeper from './minesweeper';
import Board from './board';
import ScoreFormContainer from '../score_form/score_form_container';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 9, 10),
      remainingFlags: 10,
      timeElapsed: 0,
      gameStarted: false
    };

    this.exploreTile = this.exploreTile.bind(this);
    this.incrementTimer = this.incrementTimer.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.startGame = this.startGame.bind(this);
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
      timeElapsed: this.state.timeElapsed + 1
    });
  }

  restartGame() {
    this.setState({
      board: new Minesweeper.Board(9, 9, 10),
      remainingFlags: 10,
      timeElapsed: 0,
      gameStarted: false
    });
  }

  startGame(tile) {
    if (!this.state.gameStarted && !tile.flagged) {
      this.startTimer();
      tile.firstClick();
      this.state.board.addBombsToGrid();
      this.setState({
        gameStarted: true
      });
    }
  }

  startTimer() {
    this.intervalId = window.setInterval(this.incrementTimer, 1000);
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
      board.gameOverRevealAllBombs();

      let scoreForm;
      if (board.won()) {
        scoreForm = <ScoreFormContainer
          timeElapsed={this.state.timeElapsed}
          restartGame={this.restartGame} />;
      }

      let message = board.won() ? "Congrats, you won!" : "Sorry, you lost";

      gameOver = (
        <section className="game-over">
          <p>{ message }</p>

          { scoreForm }

        </section>
      )
    } else {
      gameOver = (
        <section className="game-over-placeholder"></section>
      )
    }

    return(
      <div className="game">
        <h1>Minesweeper</h1>

        <div className="instructions">
          <p>Click on a tile to reveal it. Win by revealing all bomb-free tiles.</p>
          <p>Right-click to flag a tile you suspect contains a bomb.</p>
        </div>

        <div className="game-counters">
          <p><span>{'\u2691'}</span> { this.state.remainingFlags }</p>
          <p>{ this.state.timeElapsed } {'\u23F1'}</p>
        </div>

        <Board
          board={board}
          exploreTile={this.exploreTile}
          startGame={this.startGame}
          toggleTileFlag={this.toggleTileFlag} />

        { gameOver }
      </div>
    )
  }
}

export default Game;

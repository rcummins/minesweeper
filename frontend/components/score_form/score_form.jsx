import React from 'react';

import {
  selectScoreByUsername,
  usernameOnScoreboard
} from '../../reducers/selectors';

class ScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleInput = this.handleInput.bind(this);
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ username: e.target.value });
  }

  handlePlayAgain(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.restartGame();
  }

  handleSubmit(e) {
    e.preventDefault();

    const allScores = this.props.allScores;
    if (usernameOnScoreboard(allScores, this.state.username)) {

      const oldScore = selectScoreByUsername(allScores, this.state.username);
      if (this.props.timeElapsed < oldScore.time_elapsed) {
        let updatedScore = {
          score: {
            id: oldScore.id,
            username: oldScore.username,
            time_elapsed: this.props.timeElapsed
          }
        };
        this.props.updateScore(updatedScore).then( () => {
          this.setState({ username: '' });
          this.props.fetchScores();
          this.props.clearErrors();
          this.props.restartGame();
        });

      } else {
        alert('Your score was not recorded because you already have a better score on the scoreboard');
        this.setState({ username: '' });
        this.props.clearErrors();
        this.props.restartGame();
      }

    } else {

      let newScore = {
        score: {
          username: this.state.username,
          time_elapsed: this.props.timeElapsed
        }
      };
      this.props.createScore(newScore).then( () => {
        this.setState({ username: '' });
        this.props.fetchScores();
        this.props.clearErrors();
        this.props.restartGame();
      });

    }
  }

  render() {
    const { errors } = this.props;

    let errorMessage;
    if (errors.length > 0) {
      errorMessage = (
        <div className="error-message">
          <p>Please fix the following issue:</p>
          <ul>
            { errors.map( (error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )
    }

    return(
      <div className="game-over-actions">
        <form>

          { errorMessage }

          <label htmlFor="username">
            Enter a username for the scoreboard:
          </label>

          <input
            type="text"
            id="username"
            onChange={this.handleInput}
            value={this.state.username} ></input>

          <button onClick={this.handleSubmit} >Submit</button>

        </form>

        <button onClick={this.handlePlayAgain}>Play again</button>
      </div>
    )
  }
}

export default ScoreForm;

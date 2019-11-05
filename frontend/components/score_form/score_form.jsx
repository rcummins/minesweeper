import React from 'react';

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
    let score = {
      score: {
        username: this.state.username,
        time_elapsed: this.props.timeElapsed
      }
    };
    this.props.createScore(score).then( () => {
      this.setState({ username: '' });
      this.props.fetchScores();
      this.props.clearErrors();
      this.props.restartGame();
    });
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

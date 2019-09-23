import React from 'react';

class ScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ username: e.target.value });
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
    });
  }

  render() {
    return(
      <form>

        <label htmlFor="username">
          Enter your username for the scoreboard:
        </label>

        <input
          type="text"
          id="username"
          onChange={this.handleInput}
          value={this.state.username} ></input>

        <button onClick={this.handleSubmit} >Submit</button>

      </form>
    )
  }
}

export default ScoreForm;

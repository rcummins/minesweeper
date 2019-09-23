import React from 'react';

class Scores extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchScores();
  }

  render() {
    return (
      <div className="score-board">
        <ol>
          { this.props.scores.map( (score, index) => (
            <li key={index}>{score.username}: {score.time_elapsed}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Scores;

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
        <table>
          <thead>
            <tr>
              <th colSpan="3">Scoreboard</th>
            </tr>
          </thead>
          <tbody>
            { this.props.scores.map( (score, index) => (
              <tr key={index}>
                <td className="table-rank">{index + 1}.</td>
                <td>{score.username}</td>
                <td className="table-time">{score.time_elapsed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Scores;

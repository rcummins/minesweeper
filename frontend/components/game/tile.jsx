import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleAuxClick = this.handleAuxClick.bind(this);
  }

  handleAuxClick(e) {
    e.preventDefault();
    this.props.startTimer();
    this.props.toggleTileFlag(this.props.tile);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.startTimer();
    this.props.exploreTile(this.props.tile);
  }

  handleContextMenu(e) {
    e.preventDefault();
  }

  render() {
    let { tile } = this.props;
    let className;
    let innerText;

    if (tile.flagged) {
      className = 'tile unexplored flagged';
      innerText = '\u2691';
    } else if (tile.gameOverBombRevealed) {
      className="tile explored";
      innerText = '\u{1F4A3}';
    } else if (!tile.explored) {
      className = 'tile unexplored';
      innerText = '';
    } else if (tile.explored && tile.hasBomb) {
      className = 'tile explored clicked-on-bomb';
      innerText = '\u{1F4A3}';
    } else if (tile.explored && tile.neighborBombCount() > 0) {
      className = 'tile explored';
      innerText = tile.neighborBombCount();
    } else {
      className = 'tile explored';
      innerText = '';
    }

    return(
      <div
        className={className}
        onClick={this.handleClick}
        onAuxClick={this.handleAuxClick}
        onContextMenu={this.handleContextMenu} >{ innerText }</div>
    );
  }
}

export default Tile;

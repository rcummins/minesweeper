import React from 'react';

import Tile from './tile';

const Board = ({ board }) => (
  <div>
    { board.grid.map( (row, rowIndex) => (
      <div className="board-row" key={rowIndex}>
        { row.map( (tile, columnIndex) => (
          <Tile key={rowIndex*100 + columnIndex} />
        ))}
      </div>
    ))}
  </div>
);

export default Board;

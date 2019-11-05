import React from 'react';

import Tile from './tile';

const Board = ({ board, exploreTile, toggleTileFlag, startGame }) => (
  <div>
    { board.grid.map( (row, rowIndex) => (
      <div className="board-row" key={rowIndex}>
        { row.map( (tile, columnIndex) => (
          <Tile
            key={rowIndex*100 + columnIndex}
            tile={tile}
            exploreTile={exploreTile}
            startGame={startGame}
            toggleTileFlag={toggleTileFlag} />
        ))}
      </div>
    ))}
  </div>
);

export default Board;

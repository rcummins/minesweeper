# Minesweeper
[renata-minesweeper.herokuapp.com](https://renata-minesweeper.herokuapp.com/?utm_source=github&utm_medium=readme&utm_campaign=github)

## Application description
Minesweeper is a clone of the classic PC game. Features include:
* Players click on tiles to explore them, and win when all bomb-free tiles have been explored
* Bombs are placed after the first click, so players will never hit a bomb with their first click
* Players can right-click on a tile to flag it if they suspect it contains a bomb
* Bomb locations are revealed when the game is over
* A flag counter tracks remaining flags, and a timer tracks the elapsed time during game play
* If they win, players can enter a username to submit their time to the scoreboard
* Only the fastest time for each unique username will be added to the scoreboard

## Feature highlight: recursive `explore()` function
I leveraged recursion to write an `explore()` function for the Tile class. The function explores all bomb-free neighbors of a tile, continuing to explore until it reaches a bomb-adjacent tile. The `explore()` function is defined in the minesweeper.js library file that is imported into React component files:
```JavaScript
//minesweeper.js

class Tile {
  ...

  explore() {
    if (!this.flagged) {
      this.explored = true;

      if (!this.hasBomb && this.neighborBombCount() === 0) {
        this.neighbors().forEach( neighbor => {
          if (!neighbor.explored) {
            neighbor.explore();
          }
        });
      }
    }
  }

...
}
```

## Future
There are a few features of the classic PC game that I have not implemented in my clone. I would like to add these features in the future:
* Players can choose to play one of three levels (beginner, intermediate, expert) with different grid sizes and bomb counts
* Numbers on tiles reporting the number of adjacent bombs have different colors corresponding to their value (1 is blue, 2 is green, etc.)

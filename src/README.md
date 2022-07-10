# REACT-GAME-OF-LIFE

## About the game of life, rules of the game

### Origins

The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.

### Rules

1) If a cell is alive and surrounded by 2 or 3 live cells, it remains alive in the next generation.
2) If a cell is dead and surrounded by exactly 3 live cells, it becomes alive in the next generation.
3) If a cell is alive and surrounded by less than two live cells, or more than 3 live cells, it becomes dead in the next generation.

## Components

### App

The App component is the top parent component of the app.
This is where all the states are declared and saved, as well as all of the functions.

### Grid

The Grid component is responsible for the display of the game's grid, and parent to each Cell component.
It inherits the gridState from the App component, and uses it to return a 2d array of Cell components.
It also controls dynamically the CSS grid parameters for the number of rows and columns.


### Cell

Each "Cell" component represents a cell on the grid and is a direct child of the Grid component.
It has the capacity to alternate between to states, on and off, by using the toggle function which modifies the state of the whole grid. (this state called gridState is stored in the App component).

### GameRun

This component controls the button which starts the game.
The "play" function starts the iterations.
to do : make the button toggleable, and modify the function so that it iterate continuously untill toggled again or untill a certain number of iterations is reached.

## Functions

### toggle

This function is responsible for switching on and off the state of the cells by clicking on them.

### play

This function is responsible for calculating what the next generation of cells will be, this is where the actual "game of life" is happening.
It calculates for each cell of the grid how many cells around it are alive or dead, and depending on that number and on whether the cell itself is still alive, decides whether it should be alive or dead in the next generation.
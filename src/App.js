// The App component is the top parent component of the app.
// This is where all the states are declared and saved, as well as all of the functions.

import React, { useEffect } from 'react';
import './App.css';
import Grid from "./components/Grid.js";
import GameRun from "./components/GameRun.js";
import Display from './components/Display';

function App() {


  // generating 2d array that will then be used as the base state
  const size = 30;
  const squares = [];
  let idCount = 0;
  for (let i = size; i > 0; i--) {
    let newArr = [];
    for (let j = 1; j < size + 1; j++) {
      idCount++;
      // let id = Number(String(j) + String(i));
      newArr.push({ id: idCount, x: j, y: i, on: false });
    }
    squares.push(newArr);
  }

  // grid state initialized with the 2d array created above
  const [gridState, setGridState] = React.useState(squares);

  // playing state, used to determine whether the game is playing or on pause.
  const [playing, setPlaying] = React.useState(false);


  // toggle function which will toggle on and off cells when clicked
  function toggle(id) {
    setGridState((previous) => {
      // copying the array
      let newState = [];
      for (let i = 0; i < previous.length; i++) {
        let newArr = [];
        for (let j = 0; j < previous.length; j++) {
          newArr.push({ ...previous[i][j] });
        }
        newState.push(newArr);
      }

      // switching the square which was clicked based on its id.
      for (let i = 0; i < newState.length; i++) {
        for (let j = 0; j < newState[i].length; j++) {
          if (newState[i][j].id === id) {
            newState[i][j].on = !newState[i][j].on;
          }
        }
      }
      return newState;
    });
  }

  // play function calculating what the next generation will be, this is where the actual "game of life" is happening.
  function play() {
    // call setState
    setGridState((previous) => {
      // copying the state array
      let newState = [];
      for (let i = 0; i < previous.length; i++) {
        let newArr = [];
        for (let j = 0; j < previous.length; j++) {
          newArr.push({ ...previous[i][j] });
        }
        newState.push(newArr);
      }

      // for each cell
      for (let i = 0; i < newState.length; i++) {
        for (let j = 0; j < newState.length; j++) {
          // we check if the cell is alive or dead
          let alive = previous[i][j].on;
          let lifeCount = 0;

          //for each cell around it and including it
          for (let y = i - 1; y <= i + 1; y++) {
            for (let x = j - 1; x <= j + 1; x++) {
              // if the y and x are not out of bounds (outside array range)
              if (
                x >= 0 &&
                x < newState.length &&
                y >= 0 &&
                y < newState.length
              ) {
                // we check if these cells are alive, and if yes,
                // we increment the lifeCount counter
                if (previous[y][x].on === true) {
                  lifeCount++;
                }
              }
            }
          }
          // if the number of live cells is 3 or 4 and the cell is alive,
          // the cell is alive in the next generation.
          if (alive && lifeCount >= 3 && lifeCount <= 4) {
            newState[i][j].on = true;
          }

          // if the cell is dead but surrounded by 3 live cells,
          // it becomes alive in the next generation
          else if (!alive && lifeCount === 3) {
            newState[i][j].on = true;
          }
          // if the number is too high or too low,
          // the cell is dead in the next generation.
          else {
            newState[i][j].on = false;
          }
        }
      }
      return newState;
    });
  }


  // the useEffect hook is called everytime the "playing" state is updated (see dependency array) 
  useEffect(() => {

    let interval = null;

    if(playing){
      interval = setInterval(() => {
        play();
      }, 500)
    }

    else{
      clearInterval(interval);
    }

    return () => clearInterval(interval)

  }, [playing]) // the dependency array dictates what variables trigger the useEffect hook to fire when they are updated, in this case, it's "playing"



  return (
    <div className="App">
      <Grid size={size} gridState={gridState} toggle={toggle}/>
      <GameRun playing={playing} setPlaying={setPlaying} setGridState={setGridState} size={size} />
      <Display playing={playing} />
    </div>
  );
}

export default App;

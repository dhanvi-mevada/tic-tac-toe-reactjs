import React,{ useState } from 'react';
import './App.css';
import Block from './Components/blocks';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState ('X');

  const checkWinner = (state : any[]) => {
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6] 
  ];

    for (let i=0 ; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !==null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
      return null;
};
   
 const handleclick = (index: number) => {
  if (checkWinner(state)) return;

    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;

    stateCopy[index] = currentTurn;
    setState(stateCopy);

    const winner = checkWinner(stateCopy);
    if (winner) {
      alert(`Player ${currentTurn} wins!`);
      return;
    }

    const isDraw = !winner && stateCopy.every((cell: any) => cell !== null);
    if (isDraw) {
      alert("It's a draw!");
      return;
      }

    setCurrentTurn (currentTurn === 'X' ? 'O' : 'X');
  };

  const resetGame = () => { 
    setState(Array(9).fill(null));
    setCurrentTurn('X');
    };

  return (
<div>
    <h1> TIC-TAC-TOE GAME </h1>

    <div className = "board">

      <div className = "row">
        <Block onClick={() => handleclick(0) } value={state[0]} />
        <Block onClick={() => handleclick(1) } value={state[1]} />
        <Block onClick={() => handleclick(2) } value={state[2]} />
      </div>
      <div className = "row">
        <Block onClick={() => handleclick(3) } value={state[3]} />
        <Block onClick={() => handleclick(4) } value={state[4]} />
        <Block onClick={() => handleclick(5) } value={state[5]} />
      </div>
      <div className = "row">
        <Block onClick={() => handleclick(6) } value={state[6]} />
        <Block onClick={() => handleclick(7) } value={state[7]} />
        <Block onClick={() => handleclick(8) } value={state[8]} />
      </div>
       <div className="game-info">
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
    </div>
    
  );
}

export default App;

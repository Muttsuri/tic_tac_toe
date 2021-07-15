import React, { useCallback, useState } from "react";
import "./App.css";

import * as T from "./Types";
import Cell from "./components/Cell";

// Just some shorthand so I don't have to type the full thing everytime I want to
const X = T.Player.X;
const O = T.Player.O;

function App(): JSX.Element {
  const [cells, setCells] = useState<T.CellValue[]>(
    Array<T.CellValue>(9).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<T.Player>(X);
  const [rounds, setRounds] = useState<number>(0);

  const flipPlayer = useCallback(
    (p: T.Player): T.Player => (p === X ? O : X),
    []
  );

  const checkVictory = ():T.Over => {
    return T.Over.Draw;
  };

  const clickCell = useCallback(
    (value: T.CellValue, index: number) =>
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // console.log(`Cell nº${index} with Value:${value}`);

        // There might be a better way to do this but it's 8 am and I haven't slept
        const newCells = cells;

        // Only act on the given cell if the cell is empty
        if (cells[index] === null) {
          newCells[index] = currentPlayer;
          setCells(newCells);
          setCurrentPlayer(flipPlayer(currentPlayer));
          setRounds(rounds + 1);
        }

        // TODO: Prevent flip if cell already has a value (easy) [✔]
        // TODO: Call some check function to see if there is any victor. Then set the victor somehwere
      },
    [cells, currentPlayer, flipPlayer, rounds]
  );

  return (
    <div className="App">
      <header className="App-Header">
        <h1>Current Player: {currentPlayer}</h1>
      </header>
      <div className="App-Core">
        {cells.map((value, index) => {
          // TODO: Turn this into it's own component that just displays the value
          return (
            <Cell value={value} onClick={clickCell(value, index)} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;

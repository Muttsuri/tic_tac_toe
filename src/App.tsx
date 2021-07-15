import React, { useCallback, useState } from "react";
import "./App.css";

import * as T from "./Types";
import Cell from "./components/Cell";

function App(): JSX.Element {
  const [cells, setCells] = useState<T.CellValue[]>(
    Array<T.CellValue>(9).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<T.Player>("X");

  const flipPlayer = (p: T.Player): T.Player => (p === "X" ? "Y" : "X");

  const clickCell = useCallback(
    (value: T.CellValue, index: number) =>
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(`Cell nº${index} with Value:${value}`);

        // There might be a better way to do this but it's 8 am and I haven't slept
        const newCells = cells;
        cells[index] = currentPlayer;
        setCells(newCells);

        // TODO: Prevent flip if cell already has a value (easy)
        // TODO: Call some check function to see if there is any victor. Then set the victor somehwere 

        setCurrentPlayer(flipPlayer(currentPlayer));
      },
    [cells, currentPlayer]
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

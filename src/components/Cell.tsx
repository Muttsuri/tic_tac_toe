import * as T from "../Types";

function Cell({
  value,
  onClick,
}: {
  value: T.CellValue;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}): JSX.Element {
  return (
    <div className="cell" onClick={onClick}>
      {/* Interestingly null doesn't get written, cool */}
      <p>{value ? value : "\0"}</p> 
      {/* The "\0" exists for the purpuse of having the P with soemthing
          so that the grid doesn't flicker in size when the first cell in
          a row is selected */}
    </div>
  );
}

export default Cell;

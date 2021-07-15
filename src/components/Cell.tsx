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
      <p>{value}</p>
    </div>
  );
}

export default Cell;

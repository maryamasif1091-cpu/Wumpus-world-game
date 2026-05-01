import Cell from "./Cell";
export default function Grid({
  rows,
  cols,
  agentPos,
  cellStates,
  reveal,
  grid,
}) {
  return (
    <div>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} style={{ display: "flex" }}>
          {Array.from({ length: cols }).map((_, c) => {
            const key = `${r},${c}`;
            let state = cellStates[key] || "unknown";
            let label = "";
            if (agentPos[0] === r && agentPos[1] === c) {
              state = "agent";
              label = "A";
            }
            if (reveal) {
              if (grid[r][c].pit) {
                state = "danger";
                label = "P";
              }
              if (grid[r][c].wumpus) {
                state = "danger";
                label = "W";
              }
            }
            return (
              <Cell
                key={c}
                state={state}
                label={label}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import Controls from "./components/Controls";
import Dashboard from "./components/Dashboard";
import { initWorld } from "./logic/env";
import { getPercepts } from "./logic/percepts";
import { moveAgent } from "./logic/agent";
import { inferCell } from "./logic/inference";

export default function App() {
  const [size, setSize] = useState(5);
const rows = size;
const cols = size;
  const [grid, setGrid] = useState([]);
  const [phase, setPhase] = useState("setup");
  const [agentPos, setAgentPos] = useState([0, 0]);
  const [cellStates, setCellStates] = useState({});
  const [percepts, setPercepts] = useState({
    breeze: false,
    stench: false,
  });
  const [steps, setSteps] = useState(0);
  const [reveal, setReveal] = useState(false);
  function startGame() {
    const newGrid = initWorld(rows, cols);
    setGrid(newGrid);
    setAgentPos([0, 0]);
    setCellStates({
      "0,0": "agent",
    });
    setReveal(false);
    setPhase("playing");
    setSteps(0);
    const p = getPercepts(newGrid, 0, 0, rows, cols);
    setPercepts(p);
  }
  function restartGame() {
    startGame();
  }
  function stopGame() {
    setPhase("stopped");
  }
  function move(direction) {
    if (phase !== "playing") return;
    const [nr, nc] = moveAgent(
      direction,
      agentPos,
      rows,
      cols
    );
    if (nr === agentPos[0] && nc === agentPos[1]) return;
    const result = inferCell(grid, nr, nc);
    const key = `${nr},${nc}`;
    setSteps(prev => prev + 1);
    if (result === "danger") {
      setReveal(true);
      setCellStates(prev => ({
        ...prev,
        [key]: "danger",
      }));
      setAgentPos([nr, nc]);
      setPhase("dead");
      return;
    }
    const newStates = {
      ...cellStates,
      [key]: "safe",
    };
    setCellStates(newStates);
    setAgentPos([nr, nc]);
    const p = getPercepts(
      grid,
      nr,
      nc,
      rows,
      cols
    );
    setPercepts(p);
    let totalSafe = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (!grid[r][c].pit && !grid[r][c].wumpus) {
          totalSafe++;
        }
      }
    }
    if (Object.keys(newStates).length >= totalSafe) {
      setPhase("won");
    }
  }
  return (
    <div className="app">
      <h1>WUMPUS WORLD AI AGENT</h1>
      <Controls
  move={move}
  startGame={startGame}
  restartGame={restartGame}
  stopGame={stopGame}
  phase={phase}
  changeSize={setSize}
/>
      {phase !== "setup" && (
        <>
          <Grid
            rows={rows}
            cols={cols}
            grid={grid}
            reveal={reveal}
            cellStates={cellStates}
            agentPos={agentPos}
          />
          <Dashboard
            steps={steps}
            percepts={percepts}
            phase={phase}
          />
        </>
      )}
    </div>
  );
}
export default function Dashboard({
  steps,
  percepts,
  phase,
}) {
  return (
    <div className="dashboard">
      <div className="card">
        <h3>Inference Steps</h3>
        <p>{steps}</p>
      </div>
      <div className="card">
        <h3>Percepts</h3>
        <p>
          {percepts.breeze ? "Breeze" : "None"}
        </p>
        <p>
          {percepts.stench ? "Stench" : "None"}
        </p>
      </div>
      {phase === "dead" && (
        <div className="game-over">
          GAME OVER
        </div>
      )}
      {phase === "won" && (
        <div className="game-win">
          YOU WIN
        </div>
      )}
    </div>
  );
}
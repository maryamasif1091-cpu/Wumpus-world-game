export default function Controls({
  move,
  startGame,
  restartGame,
  stopGame,
  phase,
  changeSize,
}) {
  return (
    <div className="controls">
      {}
      <div className="top-buttons">
        <button onClick={startGame}> START </button>
        <button onClick={restartGame}> RESTART</button>
        <button onClick={stopGame}>STOP</button>
        <select
  onChange={(e) => changeSize(Number(e.target.value))}
>
  <option value="4">4 x 4</option>
  <option value="5">5 x 5</option>
  <option value="6">6 x 6</option>
  <option value="7">7 x 7</option>
  <option value="8">8 x 8</option>
  <option value="9">9 x 9</option>
  <option value="10">10 x 10</option>
</select>
      </div>
      {}
      {phase === "playing" && (
        <div className="arrows">
          <button onClick={() => move("UP")}>
            ↑
          </button>
          <div className="middle-arrows">
            <button onClick={() => move("LEFT")}>
              ←
            </button>
            <button onClick={() => move("RIGHT")}>
              →
            </button>
          </div>
          <button onClick={() => move("DOWN")}>
            ↓
          </button>

        </div>
      )}
    </div>
  );
}
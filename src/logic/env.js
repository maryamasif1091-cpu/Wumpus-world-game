export function initWorld(rows, cols) {
  const grid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      pit: false,
      wumpus: false,
    }))
  );

  const pits = Math.max(1, Math.floor(rows * cols * 0.15));

  let count = 0;

  while (count < pits) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);

    if ((r === 0 && c === 0) || grid[r][c].pit) continue;

    grid[r][c].pit = true;
    count++;
  }

  let wr, wc;

  do {
    wr = Math.floor(Math.random() * rows);
    wc = Math.floor(Math.random() * cols);
  } while ((wr === 0 && wc === 0) || grid[wr][wc].pit);

  grid[wr][wc].wumpus = true;

  return grid;
}
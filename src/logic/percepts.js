export function getAdjacent(r, c, rows, cols) {
  const arr = [];
  if (r > 0) arr.push([r - 1, c]);
  if (r < rows - 1) arr.push([r + 1, c]);
  if (c > 0) arr.push([r, c - 1]);
  if (c < cols - 1) arr.push([r, c + 1]);

  return arr;
}
export function getPercepts(grid, r, c, rows, cols) {
  const adj = getAdjacent(r, c, rows, cols);
  let breeze = false;
  let stench = false;
  for (const [ar, ac] of adj) {
    if (grid[ar][ac].pit) breeze = true;
    if (grid[ar][ac].wumpus) stench = true;
  }
  return { breeze, stench };
}
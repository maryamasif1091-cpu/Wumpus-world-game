export function inferCell(grid, r, c) {
  if (grid[r][c].pit || grid[r][c].wumpus) {
    return "danger";
  }
  return "safe";
}
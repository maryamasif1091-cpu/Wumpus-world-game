export function moveAgent(direction, pos, rows, cols) {
  let [r, c] = pos;
  if (direction === "UP" && r > 0) r--;
  if (direction === "DOWN" && r < rows - 1) r++;
  if (direction === "LEFT" && c > 0) c--;
  if (direction === "RIGHT" && c < cols - 1) c++;
  return [r, c];
}
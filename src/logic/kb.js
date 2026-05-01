import { getPercepts } from "./percepts";
export class Agent {
  constructor(world) {
    this.world = world;
    this.r = 0;
    this.c = 0;
    this.percepts = {};
    this.visited = new Set();
    this.inferenceCount = 0;
    this.stopped = false;
  }
  reset(world) {
    this.world = world;
    this.r = 0;
    this.c = 0;
    this.visited = new Set();
    this.inferenceCount = 0;
    this.stopped = false;
  }
  perceive() {
    this.percepts = getPercepts(this.world, this.r, this.c);
    this.visited.add(`${this.r},${this.c}`);
    this.inferenceCount++;
  }
  chooseMove() {
    const moves = [
      [1,0],
      [-1,0],
      [0,1],
      [0,-1]
    ];
    for (let [dr, dc] of moves) {
      const nr = this.r + dr;
      const nc = this.c + dc;
      if (!this.world[nr]?.[nc]) continue;
      if (this.visited.has(`${nr},${nc}`)) continue;
      return [nr, nc];
    }
    return null;
  }
  step() {
    if (this.stopped) return;
    this.perceive();
    const move = this.chooseMove();
    if (move) {
      this.r = move[0];
      this.c = move[1];
      this.world[this.r][this.c].visited = true;
    }
  }
}
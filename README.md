## Wumpus World Game

A web-based implementation of the classic **Wumpus World AI problem**, built using **React.js and Vite**.  
The project simulates a grid-based environment where an intelligent agent navigates hazards, finds gold, and makes decisions based on percepts.

---

##  Features
- Interactive grid-based Wumpus World environment
- AI-inspired agent logic for decision making
- Hazards: Wumpus and pits
- Percept system (breeze, stench)
- Modular React component-based UI
- Clean and responsive interface

---

##  Tech Stack
- React.js
- Vite
- JavaScript 
- HTML5
- CSS3

---

## Project Structure
/src
│── components/        # UI Components (Grid, Cell, Controls, Dashboard)

│── logic/             # Game logic (agent, env, inference, kb, percepts)

│── App.jsx

│── main.jsx

│── App.css

│── index.css

│── index.html

---

## Installation & Setup

Clone the repository:
git clone https:https://github.com/maryamasif1091-cpu/Wumpus-world-game.git

Navigate to project folder

Install dependencies:
npm install

Run development server:
npm run dev

Build for production:
npm run build

---

##  How It Works
- The world is represented as a grid
- The agent navigates cell by cell
- Each cell may contain hazards or gold
- The agent uses percepts to infer safe moves
- Goal is to safely avoid Wumpus/pits

---

## Key Concepts Used
- Artificial Intelligence (Knowledge-Based Agent)
- Inference Engine
- Environment Simulation
- State Management in React

---

##  Future Improvements
- Add advanced AI pathfinding (A* algorithm)
- Improve animations and UI effects
- Add multiple levels/difficulty modes
- Add score tracking system
- Add sound effects for interactions

---


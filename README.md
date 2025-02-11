# Toy Robot Simulator test2

## Introduction

This project is a **Toy Robot Simulator** built with **React**. The simulator allows users to control a robot that moves within a 5x5 grid. Users can place the robot on the grid, move it around, rotate it, and report its current position, all through an interactive UI.

## Features

- **Grid Visualization**: A 5x5 grid to represent the robot's environment.
- **Robot Movement**: The robot can move forward, rotate left or right, and its position can be reported.
- **Boundary Enforcement**: The robot cannot move outside the 5x5 grid boundaries.
- **Robot Initialization**: The robot can be placed at any (X,Y) coordinate on the grid with an initial direction (`NORTH`, `SOUTH`, `EAST`, `WEST`).

## Functionality

1. **PLACE X,Y,F**: Places the robot at a specific (X,Y) position and sets its facing direction (`NORTH`, `SOUTH`, `EAST`, `WEST`).
2. **MOVE**: Moves the robot one step forward in its current facing direction.
3. **LEFT / RIGHT**: Rotates the robot 90 degrees to the left or right.
4. **REPORT**: Displays the robot's current position and facing direction as (X,Y,F).

## Running the Project with pnpm

Follow these steps to set up and run the Toy Robot Simulator project using `pnpm`:

### 1. **Install pnpm**

If you don't have `pnpm` installed on your system, you can install it using the following command:

npm install -g pnpm

### 2. **Clone the Repository**

Clone the repository to your local machine by running:
git clone https://github.com/ZICHENGYE48/Toy-Robot-Simulator.git
Navigate into the project directory:
cd Toy-Robot-Simulator

### 3. **Install Dependencies**

Install all necessary dependencies by running:
pnpm install

### 4. **Run the Development Server**

To run the project in development mode, use:
pnpm run dev

import { useCallback, useEffect, useState } from "react";
import GameSettings from "./components/GameSettings/";
import RobotPlayfield from "./components/RobotPlayfield/";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [activeCoordinateX, setActiveCoordinateX] = useState(3);
  const [activeCoordinateY, setActiveCoordinateY] = useState(3);
  const [activeDirection, setActiveDirection] = useState("North");

  const startButtonClick = (isGameStart) => {
    setGameStart(isGameStart);
  };

  const handleActiveState = (newX, newY, newDirection) => {
    setActiveCoordinateX(newX);
    setActiveCoordinateY(newY);
    setActiveDirection(newDirection);
  };

  const gameSettings = {
    activeCoordinateX: activeCoordinateX,
    activeCoordinateY: activeCoordinateY,
    activeDirection: activeDirection,
  };

  const handleOutOfBounds = () => {
    alert("Error: Robot is out of bounds!");
  };

  const moveButtonClick = useCallback(() => {
    switch (activeDirection) {
      case "North":
        if (activeCoordinateY !== 1) {
          setActiveCoordinateY((oldY) => oldY - 1);
        } else {
          handleOutOfBounds();
        }
        break;
      case "South":
        if (activeCoordinateY !== 5) {
          setActiveCoordinateY((oldY) => oldY + 1);
        } else {
          handleOutOfBounds();
        }
        break;
      case "West":
        if (activeCoordinateX !== 1) {
          setActiveCoordinateX((oldX) => oldX - 1);
        } else {
          handleOutOfBounds();
        }
        break;
      case "East":
        if (activeCoordinateX !== 5) {
          setActiveCoordinateX((oldX) => oldX + 1);
        } else {
          handleOutOfBounds();
        }
        break;
      default:
        break;
    }
  }, [activeCoordinateX, activeCoordinateY, activeDirection]);

  const leftButtonClick = useCallback(() => {
    switch (activeDirection) {
      case "North":
        setActiveDirection("West");
        break;
      case "South":
        setActiveDirection("East");
        break;
      case "West":
        setActiveDirection("South");
        break;
      case "East":
        setActiveDirection("North");
        break;
      default:
        break;
    }
  }, [activeDirection]);

  const rightButtonClick = useCallback(() => {
    switch (activeDirection) {
      case "North":
        setActiveDirection("East");
        break;
      case "South":
        setActiveDirection("West");
        break;
      case "West":
        setActiveDirection("North");
        break;
      case "East":
        setActiveDirection("South");
        break;
      default:
        break;
    }
  }, [activeDirection]);

  const reportButtonClick = () => {
    alert(
      `Current coordinate X is ${activeCoordinateX}, coordinate Y is ${activeCoordinateY} and direction is ${activeDirection}`,
    );
  };

  const handleKeyPress = useCallback(
    (event) => {
      switch (event.key) {
        case "ArrowUp":
          moveButtonClick();
          break;
        case "ArrowLeft":
          leftButtonClick();
          break;
        case "ArrowRight":
          rightButtonClick();
          break;
        default:
          break;
      }
    },
    [moveButtonClick, leftButtonClick, rightButtonClick],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <main>
      <h1 className="text-4xl text-center my-3 md:my-4">Toy Robot</h1>
      <GameSettings
        startButtonClick={startButtonClick}
        moveButtonClick={moveButtonClick}
        leftButtonClick={leftButtonClick}
        rightButtonClick={rightButtonClick}
        reportButtonClick={reportButtonClick}
        handleActiveState={handleActiveState}
        gameSettings={gameSettings}
        gameStart={gameStart}
      />
      {gameStart && <RobotPlayfield gameSettings={gameSettings} />}
    </main>
  );
}

export default App;

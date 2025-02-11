import PropTypes from "prop-types";
import Robot from "./components/Robot";

const Grid = ({
  coordinateX,
  coordinateY,
  gameSettings: { activeCoordinateX, activeCoordinateY, activeDirection },
}) => {
  const active =
    coordinateX === activeCoordinateX && coordinateY === activeCoordinateY;

  return (
    <div
      className={`w-16 md:w-32 h-16 md:h-32 border border-gray-300 flex items-center justify-center ${active ? "bg-red-50" : ""}`}
    >
      {active && <Robot direction={activeDirection} />}
    </div>
  );
};

Grid.propTypes = {
  coordinateX: PropTypes.number.isRequired,
  coordinateY: PropTypes.number.isRequired,
  gameSettings: PropTypes.shape({
    activeCoordinateX: PropTypes.number.isRequired,
    activeCoordinateY: PropTypes.number.isRequired,
    activeDirection: PropTypes.string.isRequired,
  }).isRequired,
};

export default Grid;

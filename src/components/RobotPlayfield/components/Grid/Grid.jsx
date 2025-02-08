import Robot from "./components/Robot"

const Grid = ({
  coordinateX,
  coordinateY,
  gameSettings: { activeCoordinateX,activeCoordinateY,activeDirection }
}) => {
  const active = (coordinateX == activeCoordinateX && coordinateY == activeCoordinateY)
  return (
    <div className={`w-16 md:w-32 h-16 md:h-32 border border-gray-300 flex items-center justify-center ${active ? 'bg-red-50' : ''}`}>
      { active && <Robot direction={activeDirection}/> }
    </div>
  )
}

export default Grid
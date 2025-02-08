import Grid from './components/Grid'

const RobotPlayfield = ({
  gameSettings
}) => {
  const rows = 5
  const columns = 5
  const gridArray = []

  for (let x = 1; x <= columns; x++) {
    for (let y = 1; y <= rows; y++) {
      gridArray.push({ coordinateX: x, coordinateY: y });
    }
  }
  
  const groupedByY = [];
  for (let y = 1; y <= rows; y++) {
    groupedByY.push(gridArray.filter(grid => grid.coordinateY === y));
  }

  return (
    <div>
      {groupedByY.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.map((grid) => (
            <Grid key={`${grid.coordinateX}-${grid.coordinateY}`} coordinateX={grid.coordinateX} coordinateY={grid.coordinateY} gameSettings={gameSettings}/>
          ))}
        </div>
      ))}
    </div>
  )
}

export default RobotPlayfield
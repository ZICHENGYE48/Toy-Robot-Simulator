import Button from './components/Button'

const GameSettings = ({
  startButtonClick,
  moveButtonClick,
  leftButtonClick,
  rightButtonClick,
  reportButtonClick,
  handleActiveState,
  gameSettings: { activeCoordinateX,activeCoordinateY,activeDirection },
  gameStart
}) => {
  const handleInputChange = (type, value) => {
    const values = {
      x: activeCoordinateX,
      y: activeCoordinateY,
      direction: activeDirection
    }

    values[type] = value
    const {x,y,direction} = values
    handleActiveState(x,y,direction)
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6 mb-12">
      <h2 className="text-xl font-semibold text-center text-gray-700">Please choose the initial coordinates and direction for your robot.</h2>
  
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <label htmlFor="x-coordinate" className="text-lg text-gray-600">X Coordinate: {activeCoordinateX}</label>
          <input type="range" id="x-coordinate" name="x-coordinate" min="1" max="5" className="w-32" value={activeCoordinateX} onChange={(e)=> handleInputChange("x",e.target.value)}/>
        </div>
  
        <div className="flex items-center justify-between">
          <label htmlFor="y-coordinate" className="text-lg text-gray-600">Y Coordinate: {activeCoordinateY}</label>
          <input type="range" id="y-coordinate" name="y-coordinate" min="1" max="5" className="w-32" value={activeCoordinateY} onChange={(e)=> handleInputChange("y",e.target.value)}/>
        </div>
  
        <div className="flex items-center justify-between">
          <label htmlFor="direction" className="text-lg text-gray-600">Direction: {activeDirection}</label>
          <select name="direction" id="direction" className="w-32 py-2 px-3 bg-gray-100 rounded-md" value={activeDirection} onChange={(e)=> handleInputChange("direction",e.target.value)}>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
        </div>
  
        {gameStart || <Button onClick={()=> startButtonClick(true)}>Start!</Button>}

        {gameStart && 
          <>
          <div className="flex flex-col items-center">
            <Button onClick={moveButtonClick}>Move</Button>
            <span className="hidden md:block text-sm text-gray-500 mt-1">(Or use ↑ on the keyboard)</span>
          </div>
          
          <div className="flex flex-col items-center">
            <Button onClick={leftButtonClick}>Left</Button>
            <span className="hidden md:block text-sm text-gray-500 mt-1">(Or use ← on the keyboard)</span>
          </div>
          
          <div className="flex flex-col items-center">
            <Button onClick={rightButtonClick}>Right</Button>
            <span className="hidden md:block text-sm text-gray-500 mt-1">(Or use → on the keyboard)</span>
          </div>
            <Button onClick={reportButtonClick}>Report</Button>
          </>
        }
      </div>
    </div>
  )
}

export default GameSettings
import robotImage from '../../../../../../assets/robot.png';

const Robot = ({
  direction
}) => {
  let style = ''
  switch (direction) {
    case 'North':
      break;
    case 'South':
      style = "rotate-180"
      break;
    case 'East':
      style = "rotate-90"
      break;
    case 'West':
      style = "rotate-270"
      break;
    default:
      break;
  }
  return (
    <img src={robotImage} alt="Toy Robot" className={`w-full h-full object-cover ${style}`}/>
  )
}

export default Robot
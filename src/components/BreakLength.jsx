import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function BreakLength(props) {
  const { handleBreakIncrement, handleBreakDecrement, breakLength } = props;
  
  return (
    <div className="Break-length">
      <h2 id="break-label">Break Length</h2>
      <h3 id="break-length">{breakLength}</h3>
      <button id="break-decrement" onClick={handleBreakDecrement}>
        <FontAwesomeIcon icon={faMinusCircle} size="2x" />
      </button>
      <button id="break-increment" onClick={handleBreakIncrement}>
        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
      </button>
    </div>
  );
}

export default BreakLength;

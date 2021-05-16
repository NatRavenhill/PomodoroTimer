import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function SessionLength(props) {
  const { handleSessionDecrement, handleSessionIncrement, sessionLength } = props

  return (
    <div className="Session-length">
      <h2 id="session-label">Session Length</h2>
      <h3 id="session-length">{sessionLength}</h3>
      <button id="session-decrement" onClick={handleSessionDecrement}>
        <FontAwesomeIcon icon={faMinusCircle} size="2x" />
      </button>
      <button id="session-increment" onClick={handleSessionIncrement}>
        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
      </button>
    </div>
  );
}

export default SessionLength;

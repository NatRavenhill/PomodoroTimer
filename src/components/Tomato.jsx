import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import "./Tomato.css";

function Tomato (props) {
  const { handleReset, handleStartStop, minutes, seconds } = props;

  return (
    <div className="tomato">
      <p id="time-left">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
      <button id="start_stop" onClick={handleStartStop}>
        <FontAwesomeIcon icon={faPlay} color="#FDE9B0" size="2x" />
        <FontAwesomeIcon icon={faPause} color="#FDE9B0" size="2x" />
      </button>
      <button id="reset" onClick={handleReset}>
        <FontAwesomeIcon icon={faRedo} color="#FDE9B0" size="2x" />
      </button>
    </div>
  );
}

export default Tomato;

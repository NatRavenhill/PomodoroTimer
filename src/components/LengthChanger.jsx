import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function LengthChanger(props) {
  const { name, classname, handleDecrement, handleIncrement, length, label } = props

  return (
    <div className={classname}>
      <h2 id={name + '-label'}>{label}</h2>
      <h3 id={name + '-length'}>{length}</h3>
      <button id={name + '-decrement'} onClick={handleDecrement}>
        <FontAwesomeIcon icon={faMinusCircle} size="2x" />
      </button>
      <button id={name + '-increment'} onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlusCircle} size="2x" />
      </button>
    </div>
  );
}

export default LengthChanger;
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import './Tomato.css';

class Tomato extends Component {

  handleStartStop = () => {
    this.props.handleStartStop();
  };

  handleReset = () => {
    this.props.handleReset();
  };
 
  render() {
    return (
      <div className="tomato">
        <p id="time-left">
          {this.props.minutes.toString().padStart(2, "0")}:
          {this.props.seconds.toString().padStart(2, "0")}
        </p>
        <button id="start_stop" onClick={this.handleStartStop.bind(this)}>
          <FontAwesomeIcon icon={faPlay} color="#FDE9B0" size="2x" />
          <FontAwesomeIcon icon={faPause} color="#FDE9B0" size="2x" />
        </button>
        <button id="reset" onClick={this.handleReset.bind(this)}>
          <FontAwesomeIcon icon={faRedo} color="#FDE9B0" size="2x" />
        </button>
      </div>
    );
  }
}

export default Tomato;

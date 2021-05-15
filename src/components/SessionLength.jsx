import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

class SessionLength extends Component {
  handleSessionIncrement = () => {
    this.props.handleSessionIncrement();
  };

  handleSessionDecrement = () => {
    this.props.handleSessionDecrement();
  };

  render() {
    return (
      <div className="Session-length">
        <h2 id="session-label">Session Length</h2>
        <h3 id="session-length">{this.props.sessionLength}</h3>
        <button
          id="session-decrement"
          onClick={this.handleSessionDecrement.bind(this)}
        >
          <FontAwesomeIcon icon={faMinusCircle} size="2x" />
        </button>
        <button
          id="session-increment"
          onClick={this.handleSessionIncrement.bind(this)}
        >
          <FontAwesomeIcon icon={faPlusCircle} size="2x" />
        </button>
      </div>
    );
  }
}

export default SessionLength;

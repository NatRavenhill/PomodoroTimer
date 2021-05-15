import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

class BreakLength extends Component {

  handleBreakIncrement = () => {
      this.props.handleBreakIncrement();
  };

  handleBreakDecrement = () => {
    this.props.handleBreakDecrement();
};

  render() {
    return (
      <div className="Break-length">
        <h2 id="break-label">Break Length</h2>
        <h3 id="break-length">{this.props.breakLength}</h3>
        <button
          id="break-decrement"
          onClick={this.handleBreakDecrement.bind(this)}
        >
          <FontAwesomeIcon icon={faMinusCircle} size="2x" />
        </button>
        <button
          id="break-increment"
          onClick={this.handleBreakIncrement.bind(this)}
        >
          <FontAwesomeIcon icon={faPlusCircle} size="2x" />
        </button>
      </div>
    );
  }
}

export default BreakLength;

import React, { Component } from "react";

class Session extends Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      isRunning: false,
      seconds: 0,
      minutes:25
    };

    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.tick = this.tick.bind(this);
  }

  // Add FCC test script
  componentWillMount() {
    const scriptTag = document.createElement("script");
    scriptTag.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    scriptTag.async = true;
    document.body.appendChild(scriptTag);
  }

  handleSessionIncrement = () => {
    if (this.state.sessionLength < 60)
      this.setState({ sessionLength: this.state.sessionLength + 1 });
  };

  handleSessionDecrement = () => {
    if (this.state.sessionLength > 1)
      this.setState({ sessionLength: this.state.sessionLength - 1 });
  };

  handleBreakIncrement = () => {
    if (this.state.breakLength < 60)
      this.setState({ breakLength: this.state.breakLength + 1 });
  };

  handleBreakDecrement = () => {
    if (this.state.breakLength > 1)
      this.setState({ breakLength: this.state.breakLength - 1 });
  };

  handleReset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      seconds: 0,
      isRunning: false,
      minutes: 25
    });
    clearInterval(this.timerID);
  };

  tick = () => {
    if (this.state.seconds > 0) {
      this.setState((state) => ({
        seconds: state.seconds - 1,
        isRunning: true,
      }));
    } 
    else if(this.state.minutes > 0){
      this.setState((state) => ({
        minutes:state.minutes - 1,
        seconds: 59,
        isRunning: true,
      }));
    }
    else {
      clearInterval(this.timerID);
    }
  };

  handleStartStop = () => {
    if (this.state.isRunning) {
      clearInterval(this.timerID);
      this.setState({
        isRunning: false,
      });
    } else {
      this.timerID = setInterval(this.tick, 1000);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 id="timer-label">Session</h1>
        <div className="tomato">
          <p id="time-left">{this.state.minutes}:{this.state.seconds.toString().padStart(2, "0")}</p>
          <button id="start_stop" onClick={this.handleStartStop.bind(this)}>
            start/stop
          </button>
          <button id="reset" onClick={this.handleReset.bind(this)}>
            reset
          </button>
        </div>

        <div className="Break-length">
          <p id="break-label">Break Length</p>
          <p id="break-length">{this.state.breakLength}</p>
          <button id="break-increment" onClick={this.handleBreakIncrement}>
            +
          </button>
          <button id="break-decrement" onClick={this.handleBreakDecrement}>
            -
          </button>
        </div>

        <div className="Session-length">
          <p id="session-label">Session Length</p>
          <p id="session-length">{this.state.sessionLength}</p>
          <button id="session-increment" onClick={this.handleSessionIncrement}>
            +
          </button>
          <button id="session-decrement" onClick={this.handleSessionDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Session;

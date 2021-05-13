import React, { Component } from "react";

class Session extends Component {
  constructor() {
    super();
    this.state = this.defaultState();
    this.tick = this.tick.bind(this);
    this.handleBreakTime = this.handleBreakTime.bind(this);
    this.setBreakLength = this.setBreakLength.bind(this);
    this.setSessionLength = this.setSessionLength.bind(this);
  }

  defaultState = () => {
    return {
      breakLength: 5,
      sessionLength: 25,
      isRunning: false,
      seconds: 0,
      minutes: 25,
      timerLabel: "Session",
      isBreak: false,
    };
  };

  // Add FCC test script
  componentWillMount() {
    const scriptTag = document.createElement("script");
    scriptTag.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    scriptTag.async = true;
    document.body.appendChild(scriptTag);
  }

  handleSessionIncrement = () => {
    if (this.state.sessionLength < 60) {
      this.setSessionLength(this.state.sessionLength + 1);
    }
  };

  handleSessionDecrement = () => {
    if (this.state.sessionLength > 1) {
      this.setSessionLength(this.state.sessionLength - 1);
    }
  };

  handleBreakIncrement = () => {
    if (this.state.breakLength < 60) {
      this.setBreakLength(this.state.breakLength + 1);
    }
  };

  handleBreakDecrement = () => {
    if (this.state.breakLength > 1) {
      this.setBreakLength(this.state.breakLength - 1);
    }
  };

  setSessionLength = (newSessionLength) => {
    if (this.state.isBreak) {
      this.setState({
        sessionLength: newSessionLength,
      });
    } else {
      this.setState({
        sessionLength: newSessionLength,
        minutes: newSessionLength,
        seconds: 0,
      });
    }
  };

  setBreakLength = (newBreakLength) => {
    if (this.state.isBreak) {
      this.setState({
        breakLength: newBreakLength,
        minutes: newBreakLength,
        seconds: 0,
      });
    } else {
      this.setState({ breakLength: newBreakLength });
    }
  };

  handleReset = () => {
    this.setState(this.defaultState());
  };

  tick = () => {
    if (!this.state.isRunning) return;

    if (this.state.seconds > 0) {
      this.setState((state) => ({
        seconds: state.seconds - 1,
      }));
    } else if (this.state.minutes > 0) {
      this.setState((state) => ({
        minutes: state.minutes - 1,
        seconds: 59,
      }));
    } else {
      this.handleBreakTime();
    }

    setTimeout(this.tick, 1000);

  };

  handleBreakTime = () => {
    if (this.state.isBreak) {
      this.setState({
        isRunning: true,
        seconds: 0,
        minutes: this.state.sessionLength,
        timerLabel: "Session",
        isBreak: false,
      });
    } else {
      this.setState((state) => ({
        isBreak: true,
        timerLabel: "Break",
        minutes: state.breakLength,
        seconds: 0,
      }));
    }
  };

  handleStartStop = () => {
    if (this.state.isRunning) {
      this.setState({
        isRunning: false,
      });
    } else {
      this.setState(
        {
          isRunning: true,
        }, this.tick);
    }
  };

  render() {
    return (
      <div className="App">
        <h1 id="timer-label">{this.state.timerLabel}</h1>
        <div className="tomato">
          <p id="time-left">
            {this.state.minutes.toString().padStart(2, "0")}:
            {this.state.seconds.toString().padStart(2, "0")}
          </p>
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
          <button
            id="break-increment"
            onClick={this.handleBreakIncrement.bind(this)}
          >
            +
          </button>
          <button
            id="break-decrement"
            onClick={this.handleBreakDecrement.bind(this)}
          >
            -
          </button>
        </div>

        <div className="Session-length">
          <p id="session-label">Session Length</p>
          <p id="session-length">{this.state.sessionLength}</p>
          <button
            id="session-increment"
            onClick={this.handleSessionIncrement.bind(this)}
          >
            +
          </button>
          <button
            id="session-decrement"
            onClick={this.handleSessionDecrement.bind(this)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Session;

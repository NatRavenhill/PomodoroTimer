import React, { Component } from "react";
import "./Session.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRedo, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

class Session extends Component {
  constructor() {
    super();
    this.state = this.defaultState();
    this.tick = this.tick.bind(this);
    this.handleBreakTime = this.handleBreakTime.bind(this);
    this.setBreakLength = this.setBreakLength.bind(this);
    this.setSessionLength = this.setSessionLength.bind(this);

    this.beepRef = React.createRef();
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
    this.beepRef.current.load();
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
      this.beepRef.current.play();
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
        },
        this.tick
      );
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
            <FontAwesomeIcon icon={faPlay} color='#FDE9B0' size='2x'/>
            <FontAwesomeIcon icon={faPause} color='#FDE9B0' size='2x'/>
          </button>
          <button id="reset" onClick={this.handleReset.bind(this)}>
            <FontAwesomeIcon icon={faRedo} color='#FDE9B0'  size="2x"/>
          </button>
        </div>

        <div className="gridClass">
          <div className="Break-length">
            <h2 id="break-label">Break Length</h2>
            <h3 id="break-length">{this.state.breakLength}</h3>
            <button
              id="break-decrement"
              onClick={this.handleBreakDecrement.bind(this)}
            >
              <FontAwesomeIcon icon={faMinusCircle} size="2x"/>
            </button>
            <button
              id="break-increment"
              onClick={this.handleBreakIncrement.bind(this)}
            >
              <FontAwesomeIcon icon={faPlusCircle} size="2x"/>
            </button>
          </div>
          <div className="Session-length">
            <h2 id="session-label">Session Length</h2>
            <h3 id="session-length">{this.state.sessionLength}</h3>
            <button
              id="session-decrement"
              onClick={this.handleSessionDecrement.bind(this)}
            >
             <FontAwesomeIcon icon={faMinusCircle} size="2x"/>
            </button>
            <button
              id="session-increment"
              onClick={this.handleSessionIncrement.bind(this)}
            >
              <FontAwesomeIcon icon={faPlusCircle} size="2x"/>
            </button>
          </div>
        </div>
        <audio
          id="beep"
          ref={this.beepRef}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    );
  }
}

export default Session;

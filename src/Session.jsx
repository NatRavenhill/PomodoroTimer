import React, { Component } from "react";

class Session extends Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
    };
  }

  //   // Add FCC test script
  //   componentWillMount() {
  //     const scriptTag = document.createElement("script");
  //     scriptTag.src =
  //       "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
  //     scriptTag.async = true;
  //     document.body.appendChild(scriptTag);
  //   }

  render() {
    return (
      <div className="App">
        <h1 id="timer-label">Session</h1>
        <div className="tomato">
          <p id="time-left">25:00</p>
          <button id="start_stop">start/stop</button>
          <button id="reset">reset</button>
        </div>

        <div className="Break-length">
          <p id="break-label">Break Length</p>
          <p id="break-length">{this.state.breakLength}</p>
          <button id="break-increment">+</button>
          <button id="break-decrement">-</button>
        </div>

        <div className="Session-length">
          <p id="session-label">Session Length</p>
          <p id="session-length">{this.state.sessionLength}</p>
          <button id="session-increment">+</button>
          <button id="session-decrement">-</button>
        </div>
      </div>
    );
  }
}

export default Session;

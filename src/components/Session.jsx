import React, { useEffect, useState, useRef } from "react";
import "./Session.css";
import BreakLength from "./BreakLength";
import SessionLength from './SessionLength';
import Tomato from './Tomato';

var defaultState = {
  breakLength: 5,
  sessionLength: 25,
  seconds: 0,
  minutes: 25,
  timerLabel: "Session",
  isBreak: false,
};

function Session() {
  const [watchState, setWatchState] = useState(defaultState);
  const beepRef = useRef();
  const isRunning = useRef(false);

  //on initual render
  useEffect(() => {
    // Add FCC test script
    const scriptTag = document.createElement("script");
    scriptTag.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    scriptTag.async = true;
    document.body.appendChild(scriptTag);
  }, []);

  const handleSessionIncrement = () => {
    if (watchState.sessionLength < 60) {
      setSessionLength(watchState.sessionLength + 1);
    }
  };

  const handleSessionDecrement = () => {
    if (watchState.sessionLength > 1) {
      setSessionLength(watchState.sessionLength - 1);
    }
  };

  const handleBreakIncrement = () => {
    if (watchState.breakLength < 60) {
      setBreakLength(watchState.breakLength + 1)
    }
  };

  const handleBreakDecrement = () => {
    if (watchState.breakLength > 1) {
      setBreakLength(watchState.breakLength - 1);
    }
  };

  const setSessionLength = (newSessionLength) => {
    if (watchState.isBreak) {
      setWatchState(prevState => ({ ...prevState, sessionLength: newSessionLength }));
    } else {
      setWatchState(prevState => ({
        ...prevState,
        sessionLength: newSessionLength,
        minutes: newSessionLength,
        seconds: 0,
      }));
    }
  };

  const setBreakLength = (newBreakLength) => {
    if (watchState.isBreak) {
      setWatchState(prevState => ({
        ...prevState,
        breakLength: newBreakLength,
        minutes: newBreakLength,
        seconds: 0,
      }));
    } else {
      setWatchState(prevState => ({ ...prevState, breakLength: newBreakLength }));
    }
  };

  const handleReset = () => {
    handleStartStop();
    beepRef.current.load();
    setWatchState(defaultState);
  };

  const handleBreakTime = () => {
    if (watchState.isBreak) {
      setWatchState(prevState => ({
        ...prevState,
        seconds: 0,
        minutes: prevState.sessionLength,
        timerLabel: "Session",
        isBreak: false,
      }));
      isRunning.current = true;
    } else {
      setWatchState(prevState => ({
        ...prevState,
        isBreak: true,
        timerLabel: "Break",
        minutes: prevState.breakLength,
        seconds: 0,
      }));
    }
  };

  const handleStartStop = () => {
    if (isRunning.current) {
      isRunning.current = false;
    } else {
      isRunning.current = true
      decreaseTime();
    }
  };

  const tick = () => {
    if (!isRunning.current) return;
    decreaseTime();
  }

  const decreaseTime = () => {
    if (watchState.seconds > 0) {
      setWatchState(prevState => ({
        ...prevState, seconds: prevState.seconds - 1,
      }));
    } else if (watchState.minutes > 0) {
      setWatchState(prevState => ({
        ...prevState,
        minutes: prevState.minutes - 1,
        seconds: 59,
      }));
    } else {
      beepRef.current.play();
      handleBreakTime();
    }
  }

  useEffect(() => {
    if (isRunning.current) {
      const timer = setTimeout(() => {
        tick()
      }, 1000);


      return () => clearTimeout(timer);
    }
  }, [watchState.seconds]);


  return (
    <div className="App">
      <h1 id="timer-label">{watchState.timerLabel}</h1>
      <Tomato handleStartStop={handleStartStop}
        handleReset={handleReset}
        minutes={watchState.minutes}
        seconds={watchState.seconds}
      />
      <div className="gridClass">
        <BreakLength
          handleBreakDecrement={handleBreakDecrement}
          handleBreakIncrement={handleBreakIncrement}
          breakLength={watchState.breakLength}
        />
        <SessionLength
          handleSessionDecrement={handleSessionDecrement}
          handleSessionIncrement={handleSessionIncrement}
          sessionLength={watchState.sessionLength}
        />
      </div>
      <audio
        id="beep"
        ref={beepRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );

}

export default Session;

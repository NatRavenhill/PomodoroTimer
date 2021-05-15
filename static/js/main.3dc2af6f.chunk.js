(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n.n(s),a=n(9),c=n.n(a),r=(n(18),n(19),n(10)),o=n(11),d=n(5),h=n(13),b=n(12),l=(n(20),n(3)),u=n(4),j=n(0),m=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).defaultState=function(){return{breakLength:5,sessionLength:25,isRunning:!1,seconds:0,minutes:25,timerLabel:"Session",isBreak:!1}},e.handleSessionIncrement=function(){e.state.sessionLength<60&&e.setSessionLength(e.state.sessionLength+1)},e.handleSessionDecrement=function(){e.state.sessionLength>1&&e.setSessionLength(e.state.sessionLength-1)},e.handleBreakIncrement=function(){e.state.breakLength<60&&e.setBreakLength(e.state.breakLength+1)},e.handleBreakDecrement=function(){e.state.breakLength>1&&e.setBreakLength(e.state.breakLength-1)},e.setSessionLength=function(t){e.state.isBreak?e.setState({sessionLength:t}):e.setState({sessionLength:t,minutes:t,seconds:0})},e.setBreakLength=function(t){e.state.isBreak?e.setState({breakLength:t,minutes:t,seconds:0}):e.setState({breakLength:t})},e.handleReset=function(){e.beepRef.current.load(),e.setState(e.defaultState())},e.tick=function(){e.state.isRunning&&(e.state.seconds>0?e.setState((function(e){return{seconds:e.seconds-1}})):e.state.minutes>0?e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})):(e.beepRef.current.play(),e.handleBreakTime()),setTimeout(e.tick,1e3))},e.handleBreakTime=function(){e.state.isBreak?e.setState({isRunning:!0,seconds:0,minutes:e.state.sessionLength,timerLabel:"Session",isBreak:!1}):e.setState((function(e){return{isBreak:!0,timerLabel:"Break",minutes:e.breakLength,seconds:0}}))},e.handleStartStop=function(){e.state.isRunning?e.setState({isRunning:!1}):e.setState({isRunning:!0},e.tick)},e.state=e.defaultState(),e.tick=e.tick.bind(Object(d.a)(e)),e.handleBreakTime=e.handleBreakTime.bind(Object(d.a)(e)),e.setBreakLength=e.setBreakLength.bind(Object(d.a)(e)),e.setSessionLength=e.setSessionLength.bind(Object(d.a)(e)),e.beepRef=i.a.createRef(),e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e=document.createElement("script");e.src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{id:"timer-label",children:this.state.timerLabel}),Object(j.jsxs)("div",{className:"tomato",children:[Object(j.jsxs)("p",{id:"time-left",children:[this.state.minutes.toString().padStart(2,"0"),":",this.state.seconds.toString().padStart(2,"0")]}),Object(j.jsxs)("button",{id:"start_stop",onClick:this.handleStartStop.bind(this),children:[Object(j.jsx)(l.a,{icon:u.c,color:"#FDE9B0",size:"2x"}),Object(j.jsx)(l.a,{icon:u.b,color:"#FDE9B0",size:"2x"})]}),Object(j.jsx)("button",{id:"reset",onClick:this.handleReset.bind(this),children:Object(j.jsx)(l.a,{icon:u.e,color:"#FDE9B0",size:"2x"})})]}),Object(j.jsxs)("div",{className:"gridClass",children:[Object(j.jsxs)("div",{className:"Break-length",children:[Object(j.jsx)("h2",{id:"break-label",children:"Break Length"}),Object(j.jsx)("h3",{id:"break-length",children:this.state.breakLength}),Object(j.jsx)("button",{id:"break-decrement",onClick:this.handleBreakDecrement.bind(this),children:Object(j.jsx)(l.a,{icon:u.a,size:"2x"})}),Object(j.jsx)("button",{id:"break-increment",onClick:this.handleBreakIncrement.bind(this),children:Object(j.jsx)(l.a,{icon:u.d,size:"2x"})})]}),Object(j.jsxs)("div",{className:"Session-length",children:[Object(j.jsx)("h2",{id:"session-label",children:"Session Length"}),Object(j.jsx)("h3",{id:"session-length",children:this.state.sessionLength}),Object(j.jsx)("button",{id:"session-decrement",onClick:this.handleSessionDecrement.bind(this),children:Object(j.jsx)(l.a,{icon:u.a,size:"2x"})}),Object(j.jsx)("button",{id:"session-increment",onClick:this.handleSessionIncrement.bind(this),children:Object(j.jsx)(l.a,{icon:u.d,size:"2x"})})]})]}),Object(j.jsx)("audio",{id:"beep",ref:this.beepRef,src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})}}]),n}(s.Component);var g=function(){return Object(j.jsx)(m,{})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),k()}},[[27,1,2]]]);
//# sourceMappingURL=main.3dc2af6f.chunk.js.map
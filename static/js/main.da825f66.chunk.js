(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var s=n(4),i=n.n(s),a=n(9),c=n.n(a),r=(n(18),n(19),n(10)),o=n(11),d=n(5),h=n(13),l=n(12),b=(n(20),n(2)),u=n(3),j=n(0);var m=function(e){var t=e.handleBreakIncrement,n=e.handleBreakDecrement,s=e.breakLength;return Object(j.jsxs)("div",{className:"Break-length",children:[Object(j.jsx)("h2",{id:"break-label",children:"Break Length"}),Object(j.jsx)("h3",{id:"break-length",children:s}),Object(j.jsx)("button",{id:"break-decrement",onClick:n,children:Object(j.jsx)(b.a,{icon:u.a,size:"2x"})}),Object(j.jsx)("button",{id:"break-increment",onClick:t,children:Object(j.jsx)(b.a,{icon:u.d,size:"2x"})})]})};var k=function(e){var t=e.handleSessionDecrement,n=e.handleSessionIncrement,s=e.sessionLength;return Object(j.jsxs)("div",{className:"Session-length",children:[Object(j.jsx)("h2",{id:"session-label",children:"Session Length"}),Object(j.jsx)("h3",{id:"session-length",children:s}),Object(j.jsx)("button",{id:"session-decrement",onClick:t,children:Object(j.jsx)(b.a,{icon:u.a,size:"2x"})}),Object(j.jsx)("button",{id:"session-increment",onClick:n,children:Object(j.jsx)(b.a,{icon:u.d,size:"2x"})})]})};n(27);var g=function(e){var t=e.handleReset,n=e.handleStartStop,s=e.minutes,i=e.seconds;return Object(j.jsxs)("div",{className:"tomato",children:[Object(j.jsxs)("p",{id:"time-left",children:[s.toString().padStart(2,"0"),":",i.toString().padStart(2,"0")]}),Object(j.jsxs)("button",{id:"start_stop",onClick:n,children:[Object(j.jsx)(b.a,{icon:u.c,color:"#FDE9B0",size:"2x"}),Object(j.jsx)(b.a,{icon:u.b,color:"#FDE9B0",size:"2x"})]}),Object(j.jsx)("button",{id:"reset",onClick:t,children:Object(j.jsx)(b.a,{icon:u.e,color:"#FDE9B0",size:"2x"})})]})},S=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).defaultState=function(){return{breakLength:5,sessionLength:25,isRunning:!1,seconds:0,minutes:25,timerLabel:"Session",isBreak:!1}},e.handleSessionIncrement=function(){e.state.sessionLength<60&&e.setSessionLength(e.state.sessionLength+1)},e.handleSessionDecrement=function(){e.state.sessionLength>1&&e.setSessionLength(e.state.sessionLength-1)},e.handleBreakIncrement=function(){e.state.breakLength<60&&e.setBreakLength(e.state.breakLength+1)},e.handleBreakDecrement=function(){e.state.breakLength>1&&e.setBreakLength(e.state.breakLength-1)},e.setSessionLength=function(t){e.state.isBreak?e.setState({sessionLength:t}):e.setState({sessionLength:t,minutes:t,seconds:0})},e.setBreakLength=function(t){e.state.isBreak?e.setState({breakLength:t,minutes:t,seconds:0}):e.setState({breakLength:t})},e.handleReset=function(){e.beepRef.current.load(),e.setState(e.defaultState())},e.tick=function(){e.state.isRunning&&(e.state.seconds>0?e.setState((function(e){return{seconds:e.seconds-1}})):e.state.minutes>0?e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})):(e.beepRef.current.play(),e.handleBreakTime()),setTimeout(e.tick,1e3))},e.handleBreakTime=function(){e.state.isBreak?e.setState({isRunning:!0,seconds:0,minutes:e.state.sessionLength,timerLabel:"Session",isBreak:!1}):e.setState((function(e){return{isBreak:!0,timerLabel:"Break",minutes:e.breakLength,seconds:0}}))},e.handleStartStop=function(){e.state.isRunning?e.setState({isRunning:!1}):e.setState({isRunning:!0},e.tick)},e.state=e.defaultState(),e.tick=e.tick.bind(Object(d.a)(e)),e.handleBreakTime=e.handleBreakTime.bind(Object(d.a)(e)),e.setBreakLength=e.setBreakLength.bind(Object(d.a)(e)),e.setSessionLength=e.setSessionLength.bind(Object(d.a)(e)),e.beepRef=i.a.createRef(),e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e=document.createElement("script");e.src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{id:"timer-label",children:this.state.timerLabel}),Object(j.jsx)(g,{handleStartStop:this.handleStartStop,handleReset:this.handleReset,minutes:this.state.minutes,seconds:this.state.seconds}),Object(j.jsxs)("div",{className:"gridClass",children:[Object(j.jsx)(m,{handleBreakDecrement:this.handleBreakDecrement,handleBreakIncrement:this.handleBreakIncrement,breakLength:this.state.breakLength}),Object(j.jsx)(k,{handleSessionDecrement:this.handleSessionDecrement,handleSessionIncrement:this.handleSessionIncrement,sessionLength:this.state.sessionLength})]}),Object(j.jsx)("audio",{id:"beep",ref:this.beepRef,src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})}}]),n}(s.Component);var f=function(){return Object(j.jsx)(S,{})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),L()}},[[28,1,2]]]);
//# sourceMappingURL=main.da825f66.chunk.js.map
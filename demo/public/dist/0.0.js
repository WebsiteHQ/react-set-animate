webpackJsonp([0],{61:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(9),s=a(u),c=n(22),f=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={left:0,checked:!1,isAnimating:!1,ease:"bounce-in-out"},n}return l(t,e),o(t,[{key:"componentDidMount",value:function(){this.setAnimate("left",0,4e3,"bounce-in-out"),this.handleHeadingClick=this.handleHeadingClick.bind(this)}},{key:"handleHeadingClick",value:function(e){var t=this;if(!this.state.isAnimating){this.state.isAnimating=!0;var n=this;n.setAnimate("left",+this.refs.distance.value,+this.refs.timeOut.value,this.state.ease).then(function(){return t.setAnimate("left",0,+t.refs.timeIn.value,t.state.ease)}).then(function(){return t.setState({isAnimating:!1})})}}},{key:"render",value:function(){var e=this,t=this;return s["default"].createElement("div",{style:{paddingTop:150}},s["default"].createElement("div",{style:{zIndex:999,position:"fixed",top:50,backgroundColor:"white",height:150,width:"100%"}},s["default"].createElement("h1",null,"Slider Demo"),s["default"].createElement("p",null,"Time out:",s["default"].createElement("input",{ref:"timeOut",defaultValue:1e3}),"Time in:",s["default"].createElement("input",{ref:"timeIn",defaultValue:500}),"Out distance",s["default"].createElement("input",{ref:"distance",defaultValue:768}),s["default"].createElement("hr",null),s["default"].createElement("select",{value:t.state.ease,onChange:function(t){return e.setState({ease:t.target.value})}},c.Eases.map(function(e){return s["default"].createElement("option",null,e)})),"  ",s["default"].createElement("button",{onClick:t.handleHeadingClick,disabled:this.state.isAnimating},"Start"))),s["default"].createElement("div",{style:{paddingTop:10,paddingBottom:10,borderTop:"2px solid #999"}},s["default"].createElement("h2",null,t.state.ease),s["default"].createElement("div",{style:{zIndex:3,height:60,backgroundColor:"#eef",border:"1px solid black",marginTop:12}},s["default"].createElement("img",{src:"/img/ball.jpeg",style:{zIndex:2,backgroundColor:"#000",borderRadius:25,width:50,height:50,textAlign:"center",color:"#FFF",position:"relative",transform:"translate3d("+this.state.left+"px,0px,0px)"}}))))}}]),t}(c.AnimatedComponent);t["default"]=f}});
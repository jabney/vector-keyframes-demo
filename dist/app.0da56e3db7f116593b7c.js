webpackJsonp([0],{52:function(e,t,n){"use strict";function r(e,t,n){return e.stop<=n&&n<t.stop?0:n<e.stop?-1:1}function o(e,t,n,r,a){var l=Math.floor(n+(r-n)/2),i=e.length;if(0==i)return null;if(l<0)return[e[0]];if(l==i-1)return[e[i-1]];var u=e[l],s=e[l+1],c=a(u,s,t);return 0==c?[u,s]:c<0?o(e,t,n,l-1,a):o(e,t,l+1,r,a)}function a(e,t){var n={linear:t.linearInterpolate,smooth:t.smoothInterpolate};return n[e]||n.linear}function l(e,t,n,r){if(!Array.isArray(e)||!e.length)return r.zero();var o=u.tween(e,t),l=a(n,r);if(1==o.length){var s=o[0].value;return l(s,s,0)}var c=i(o,2),f=c[0],h=c[1],p=(t-f.stop)/(h.stop-f.stop);return l(f.value,h.value,p)}var i=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u={tween:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;return o(e,t,0,e.length-1,n)}},s={smooth:function(e){return 3*Math.pow(e,2)-2*Math.pow(e,3)},vector3dToHex:function(e){return"#"+e.slice(0,3).map(function(e){var t=Math.round(e),n=t.toString(16);return 1==n.length?"0"+n:n}).join("")},hexToVector3d:function(e){var t=e.slice(1);return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]},vector3dToRgb:function(e){return"rgb("+(e=e.slice(0,3).map(function(e){return Math.round(e)}))+")"},rgbToVector3d:function(e){return e.split(/[(), ]+/).slice(1,4).map(function(e){return+e})},keyframeSort:function(e){return e.sort(function(e,t){return e.stop-t.stop})}},c={zero:function(){return 0},linearInterpolate:function(e,t,n){return e+n*(t-e)},smoothInterpolate:function(e,t,n){return e+s.smooth(n)*(t-e)},keyframeInterpolate:function(e,t){return l(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",arguments.length>3&&void 0!==arguments[3]?arguments[3]:c)}},f={zero:function(){return[0,0]},linearInterpolate:function(e,t,n){var r=c.linearInterpolate;return[r(e[0],t[0],n),r(e[1],t[1],n)]},smoothInterpolate:function(e,t,n){var r=c.smoothInterpolate;return[r(e[0],t[0],n),r(e[1],t[1],n)]},keyframeInterpolate:function(e,t){return l(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",arguments.length>3&&void 0!==arguments[3]?arguments[3]:f)}},h={zero:function(){return[0,0,0]},linearInterpolate:function(e,t,n){var r=c.linearInterpolate;return[r(e[0],t[0],n),r(e[1],t[1],n),r(e[2],t[2],n)]},smoothInterpolate:function(e,t,n){var r=c.smoothInterpolate;return[r(e[0],t[0],n),r(e[1],t[1],n),r(e[2],t[2],n)]},keyframeInterpolate:function(e,t){return l(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear",arguments.length>3&&void 0!==arguments[3]?arguments[3]:h)}};t.util=s,t.search=u,t.scalar=c,t.vector2d=f,t.vector3d=h},83:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.length;if(1===t)e[0].stop=0;else if(t>1)for(var n=0;n<t;++n)e[n].stop=+(n/(t-1)).toFixed(3);return e}function u(e,t,n){var r=y.vector3d.keyframeInterpolate(e,t,n);return y.util.vector3dToHex(r)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(14),f=r(c),h=n(89),p=r(h),m=n(87),d=r(m),y=n(52);n(91);var v=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=i(e.keyframes),l=u(r,.5,"smooth");return n.state={keyframes:r,sliderValue:.5,color:l,timing:"smooth"},n}return l(t,e),s(t,[{key:"onAddKeyframe",value:function(){var e=this.state.keyframes.slice(0),t=e.length,n=t&&e[t-1].vector||[127,127,127];e.push({stop:0,value:n}),i(e);var r=u(e,this.state.sliderValue,this.state.timing);this.props.onChangeKeyframes(e),this.setState({keyframes:e,color:r})}},{key:"onDeleteKeyframe",value:function(e){var t=this.state.keyframes.slice(0);t.splice(e,1),i(t);var n=u(t,this.state.sliderValue,this.state.timing);this.props.onChangeKeyframes(t),this.setState({keyframes:t,color:n})}},{key:"onChangeStop",value:function(e,t){var n=this.state.keyframes.slice(0);n[e].stop=Math.min(Math.max(t.target.value,0),1);var r=u(n,this.state.sliderValue,this.state.timing);this.props.onChangeKeyframes(n),this.setState({keyframes:n,color:r})}},{key:"onChangeColor",value:function(e,t){var n=this.state.keyframes.slice(0);n[e].vector=y.util.hexToVector3d(t.target.value);var r=u(n,this.state.sliderValue,this.state.timing);this.props.onChangeKeyframes(n),this.setState({keyframes:n,color:r})}},{key:"onChangeSlider",value:function(e){var t=e.target.value,n=u(this.state.keyframes,t,this.state.timing);this.setState({sliderValue:t,color:n})}},{key:"onChangeTiming",value:function(e){var t=e.target.value,n=u(this.state.keyframes,this.state.sliderValue,t);this.setState({timing:t,color:n})}},{key:"render",value:function(){return f.default.createElement("div",{className:"KeyframeInterpolation"},f.default.createElement(d.default,{color:this.state.color,value:this.state.sliderValue,selected:this.state.timing,onChangeTiming:this.onChangeTiming.bind(this),onChangeSlider:this.onChangeSlider.bind(this)}),f.default.createElement("h2",null,"Keyframes"),f.default.createElement(p.default,{keyframes:this.state.keyframes,onChangeStop:this.onChangeStop.bind(this),onChangeColor:this.onChangeColor.bind(this),onDeleteKeyframe:this.onDeleteKeyframe.bind(this)}),f.default.createElement("div",{className:"button-wrapper"},f.default.createElement("button",{onClick:this.onAddKeyframe.bind(this)},"Add Keyframe")))}}]),t}(f.default.Component);t.default=v},84:function(e,t){},86:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(14),s=r(u),c=n(33),f=r(c),h=n(83),p=r(h);n(84);var m=[{stop:0,value:[0,0,255]},{stop:0,value:[0,255,0]},{stop:0,value:[255,0,0]}],d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={keyframes:m},n}return l(t,e),i(t,[{key:"onChangeKeyframes",value:function(e){this.setState({keyframes:e})}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("h1",null,"Keyframe Interpolation"),s.default.createElement(p.default,{keyframes:this.state.keyframes,onChangeKeyframes:this.onChangeKeyframes.bind(this)}),s.default.createElement("pre",{className:"json"},JSON.stringify(this.state.keyframes,null,2)))}}]),t}(s.default.Component);f.default.render(s.default.createElement(d,null),document.getElementById("root"))},87:function(e,t,n){"use strict";function r(e){var t={backgroundColor:e.color};return a.default.createElement("div",{className:"ColorControl"},a.default.createElement("div",{className:"color-chip",style:t}),a.default.createElement("input",{type:"range",min:"0",max:"1",step:"0.001",value:e.value,onChange:e.onChangeSlider}),a.default.createElement("div",{className:"color-text"},e.color,", ","rgb("+l.util.hexToVector3d(e.color).toString()+")"),a.default.createElement("div",{className:"timing"},a.default.createElement("label",null,"Smooth",a.default.createElement("input",{type:"radio",value:"smooth",onChange:e.onChangeTiming,checked:"smooth"===e.selected})),a.default.createElement("label",null,"Linear",a.default.createElement("input",{type:"radio",value:"linear",onChange:e.onChangeTiming,checked:"linear"===e.selected}))))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(14),a=function(e){return e&&e.__esModule?e:{default:e}}(o),l=n(52)},88:function(e,t,n){"use strict";function r(e){return a.default.createElement("li",{className:"Keyframe"},a.default.createElement("label",{className:"stop"},a.default.createElement("span",null,"stop:"),a.default.createElement("input",{type:"number",step:"0.01",value:e.stop,onChange:e.onChangeStop})),a.default.createElement("label",{className:"color"},a.default.createElement("span",null,"color:"),a.default.createElement("input",{type:"color",value:e.color,onChange:e.onChangeColor})),a.default.createElement("button",{className:"delete",onClick:e.onDeleteKeyframe},"x"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(14),a=function(e){return e&&e.__esModule?e:{default:e}}(o)},89:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(14),s=r(u),c=n(88),f=r(c),h=n(52),p=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),i(t,[{key:"onChangeStop",value:function(e,t){this.props.onChangeStop(e,t)}},{key:"onChangeColor",value:function(e,t){this.props.onChangeColor(e,t)}},{key:"onDeleteKeyframe",value:function(e,t){this.props.onDeleteKeyframe(e,t)}},{key:"render",value:function(){var e=this;return s.default.createElement("ul",{className:"KeyframesList"}," ",this.props.keyframes.map(function(t,n){return s.default.createElement(f.default,{key:n,stop:t.stop,color:h.util.vector3dToHex(t.value),onChangeStop:e.onChangeStop.bind(e,n),onChangeColor:e.onChangeColor.bind(e,n),onDeleteKeyframe:e.onDeleteKeyframe.bind(e,n)})}))}}]),t}(s.default.Component);t.default=p},91:function(e,t){}},[86]);
//# sourceMappingURL=app.0da56e3db7f116593b7c.js.map
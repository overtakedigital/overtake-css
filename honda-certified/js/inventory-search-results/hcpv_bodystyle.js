"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),hcpv_bodystyle=function(){function e(t){_classCallCheck(this,e),this.styleList=t,this.stylesObj={};for(var n=0;n<t.length;n++)this.stylesObj[t[n]["@id"]]=t[n]["@Name"]}return _createClass(e,[{key:"getStyleNameById",value:function(e){for(var t=0;t<this.styleList.length;t++)if(this.styleList[t]["@id"]==e)return this.styleList[t]["@Name"];return null}},{key:"getStyleNameById2",value:function(e){return this.stylesObj[e]}}]),e}();
//# sourceMappingURL=hcpv_bodystyle.js.map

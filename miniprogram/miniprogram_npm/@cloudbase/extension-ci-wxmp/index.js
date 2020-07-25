module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";var n=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",o="["+n+"][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",a=new RegExp("^"+o+"$");e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,r){if(e)for(var n=Object.keys(e),o=n.length,a=0;a<o;a++)t[n[a]]="strict"===r?[e[n[a]]]:e[n[a]]},e.getValue=function(t){return e.isExist(t)?t:""},e.buildOptions=function(t,e,r){var n={};if(!t)return e;for(var o=0;o<r.length;o++)void 0!==t[r[o]]?n[r[o]]=t[r[o]]:n[r[o]]=e[r[o]];return n},e.isName=function(t){var e=a.exec(t);return!(null==e)},e.getAllMatches=function(t,e){for(var r=[],n=e.exec(t);n;){for(var o=[],a=n.length,i=0;i<a;i++)o.push(n[i]);r.push(o),n=e.exec(t)}return r},e.nameRegexp=o},function(t,e,r){"use strict";var n=r(0),o=r(0).buildOptions,a=r(11),i=1,u=2,s=3,c=4,l="<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,n.nameRegexp);!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var f={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,arrayMode:!1,trimValues:!0,cdataTagName:!1,cdataPositionChar:"\\c",tagValueProcessor:function(t,e){return t},attrValueProcessor:function(t,e){return t},stopNodes:[]};e.defaultOptions=f;var d=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","ignoreNameSpace","allowBooleanAttributes","parseNodeValue","parseAttributeValue","arrayMode","trimValues","cdataTagName","cdataPositionChar","tagValueProcessor","attrValueProcessor","parseTrueNumberOnly","stopNodes"];e.props=d;function h(t,e,r){var n=t[7]||r,o=t[12];return o&&(e.trimValues&&(o=o.trim()),o=g(o=e.tagValueProcessor(o,n),e.parseNodeValue,e.parseTrueNumberOnly)),o}function p(t){return"]]>"===t[4]?c:"/"===t[10]?u:void 0!==t[8]&&"/"===t[8].substr(t[8].length-1)?s:i}function b(t,e){if(e.ignoreNameSpace){var r=t.split(":"),n="/"===t.charAt(0)?"/":"";if("xmlns"===r[0])return"";2===r.length&&(t=n+r[1])}return t}function g(t,e,r){var o;return e&&"string"==typeof t?(""===t.trim()||isNaN(t)?o="true"===t||"false"!==t&&t:(-1!==t.indexOf("0x")?o=Number.parseInt(t,16):-1!==t.indexOf(".")?(o=Number.parseFloat(t),t=t.replace(/0+$/,"")):o=Number.parseInt(t,10),r&&(o=String(o)===t?o:t)),o):n.isExist(t)?t:""}var m=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?","g");function v(t,e){if(!e.ignoreAttributes&&"string"==typeof t){t=t.replace(/\r?\n/g," ");for(var r=n.getAllMatches(t,m),o=r.length,a={},i=0;i<o;i++){var u=b(r[i][1],e);u.length&&(void 0!==r[i][4]?(e.trimValues&&(r[i][4]=r[i][4].trim()),r[i][4]=e.attrValueProcessor(r[i][4],u),a[e.attributeNamePrefix+u]=g(r[i][4],e.parseAttributeValue,e.parseTrueNumberOnly)):e.allowBooleanAttributes&&(a[e.attributeNamePrefix+u]=!0))}if(!Object.keys(a).length)return;if(e.attrNodeName){var s={};return s[e.attrNodeName]=a,s}return a}}e.getTraversalObj=function(t,e){e=o(e,f,d),t=t.replace(/<!--[\s\S]*?-->/g,"");for(var r=new a("!xml"),i=r,b=new RegExp(l,"g"),g=b.exec(t),m=b.exec(t);g;){var y=p(g);if(y===u)i.parent&&g[12]&&(i.parent.val=n.getValue(i.parent.val)+""+h(g,e,i.parent.tagname)),e.stopNodes.length&&e.stopNodes.includes(i.tagname)&&(i.child=[],null==i.attrsMap&&(i.attrsMap={}),i.val=t.substr(i.startIndex+1,g.index-i.startIndex-1)),i=i.parent;else if(y===c)if(e.cdataTagName){var x=new a(e.cdataTagName,i,g[3]);x.attrsMap=v(g[8],e),i.addChild(x),i.val=n.getValue(i.val)+e.cdataPositionChar,g[12]&&(i.val+=h(g,e))}else i.val=(i.val||"")+(g[3]||"")+h(g,e);else if(y===s){i&&g[12]&&(i.val=n.getValue(i.val)+""+h(g,e));var _=new a(e.ignoreNameSpace?g[7]:g[5],i,"");g[8]&&g[8].length>0&&(g[8]=g[8].substr(0,g[8].length-1)),_.attrsMap=v(g[8],e),i.addChild(_)}else{var A=new a(e.ignoreNameSpace?g[7]:g[5],i,h(g,e));e.stopNodes.length&&e.stopNodes.includes(A.tagname)&&(A.startIndex=g.index+g[1].length),A.attrsMap=v(g[8],e),i.addChild(A),i=A}g=m,m=b.exec(t)}return r}},function(t,e,r){r(3),t.exports=r(5)},function(t,e,r){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(t){"use strict";var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new C(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=x(i,r);if(u){if(u===l)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=c(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l={};function f(){}function d(){}function h(){}var p={};p[a]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(w([])));g&&g!==r&&n.call(g,a)&&(p=g);var m=h.prototype=f.prototype=Object.create(p);function v(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function y(t,r){var o;this._invoke=function(a,i){function u(){return new r((function(o,u){!function o(a,i,u,s){var l=c(t[a],t,i);if("throw"!==l.type){var f=l.arg,d=f.value;return d&&"object"===e(d)&&n.call(d,"__await")?r.resolve(d.__await).then((function(t){o("next",t,u,s)}),(function(t){o("throw",t,u,s)})):r.resolve(d).then((function(t){f.value=t,u(f)}),(function(t){return o("throw",t,u,s)}))}s(l.arg)}(a,i,o,u)}))}return o=o?o.then(u,u):u()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function w(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=m.constructor=h,h.constructor=d,h[u]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},v(y.prototype),y.prototype[i]=function(){return this},t.AsyncIterator=y,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new y(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=w,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:w(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}("object"===e(t)?t.exports:{});try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}).call(this,r(4)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){function n(t,e,r,n,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}var o,a,i=r(6),u=r(16);t.exports={name:i.name,invoke:(o=regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=r||u,t.next=3,i.invoke(e,r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})),a=function(){var t=this,e=arguments;return new Promise((function(r,a){var i=o.apply(t,e);function u(t){n(i,r,a,u,s,"next",t)}function s(t){n(i,r,a,u,s,"throw",t)}u(void 0)}))},function(t,e){return a.apply(this,arguments)})}},function(t,e,r){"use strict";function n(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,i=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{s(n.next(t))}catch(t){a(t)}}function u(t){try{s(n.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,u)}s((n=n.apply(t,e||[])).next())}))},u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var s=r(7),c=u(r(9));function l(t,e){if(0===e.indexOf("/"))return e;var r=t.lastIndexOf("/");return-1===r?e:t.slice(0,r+1)+e}var f={DetectLabel:"DetectLabel",DetectType:"DetectType",WaterMark:"WaterMark",ImageProcess:"ImageProcess"};function d(t,e){return i(this,void 0,void 0,regeneratorRuntime.mark((function r(){var n,o,a,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.callFunction(e);case 3:n=r.sent,r.next=11;break;case 6:throw r.prev=6,r.t0=r.catch(0),o="[@cloudbase/extension-ci] 调用扩展函数失败 ;  ".concat(r.t0.code?r.t0.code:""," ").concat(r.t0.message?r.t0.message:""),r.t0.errMsg&&r.t0.errMsg.indexOf("找不到对应的FunctionName")>-1&&(o="[@cloudbase/extension-ci] 请确认扩展已安装"),new Error(o);case 11:if(!n.code){r.next=13;break}throw new Error("[@cloudbase/extension-ci] 调用扩展函数失败 ;  ".concat(n.requestId," ; ").concat(n.code," ; ").concat(n.message));case 13:if(a=n.result||{},!(i=a.code)){r.next=16;break}throw new Error("[@cloudbase/extension-ci] ".concat(i," ; ").concat(n.requestId," ;"));case 16:return r.abrupt("return",n.result);case 17:case"end":return r.stop()}}),r,null,[[0,6]])})))}e.name="CloudInfinite",e.invoke=function(t,e){return i(this,void 0,void 0,regeneratorRuntime.mark((function r(){var o,i,u,h,p,b,g,m,v,y,x,_,A,C,w,N,E,O,P,S,F,T,j,k,D,I,R,M;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.cloudPath,i=t.fileContent,u=t.action,h=t.operations,u&&f[u]){r.next=3;break}throw new Error("[@cloudbase/extension-ci] action必须为正确的值");case 3:if(o=0===o.indexOf("/")?o.slice(1):o,p={},!i){r.next=8;break}if(i instanceof Uint8Array||i instanceof ArrayBuffer){r.next=8;break}throw new Error("[@cloudbase/extension-ci] fileContent一定要是Uint8Array对象或者ArrayBuffer对象");case 8:if(u!==f.DetectLabel){r.next=13;break}b="GET",g={"ci-process":"detect-label"},r.next=57;break;case 13:if(u!==f.DetectType){r.next=21;break}if(b="GET",h.type){r.next=17;break}throw new Error("[@cloudbase/extension-ci] DetectType是，type字段不为空");case 17:g={"ci-process":"sensitive-content-recognition","detect-type":h.type},delete h.type,r.next=57;break;case 21:if(u!==f.ImageProcess){r.next=27;break}g="image_process",b="POST",i&&(b="PUT",g=void 0),r.next=57;break;case 27:if(u!==f.WaterMark){r.next=57;break}"POST"===(b=i?"PUT":"POST")&&(g="image_process"),h.rules.some((function(t){if("object"!==a(t))throw new Error("[@cloudbase/extension-ci] WaterMark,rule必须为对象")})),m=n(h.rules),r.prev=32,m.s();case 34:if((v=m.n()).done){r.next=49;break}if(y=v.value,1!==(x=y.rule).type&&2!==x.type||!x.image){r.next=42;break}0===x.image.indexOf("/")&&(x.image=x.image.slice(1)),y.rule="watermark/".concat(x.mode,"/type/").concat(x.type,"/image/").concat(x.image),r.next=47;break;case 42:if(3!==x.type||!x.text){r.next=46;break}y.rule="watermark/".concat(x.mode,"/type/").concat(x.type,"/text/").concat(s.Base64.encode(x.text).replace(/\//g,"_").replace(/=/g,"").replace(/\+/g,"-")),r.next=47;break;case 46:throw new Error("[@cloudbase/extension-ci] WaterMark,rule参数错误");case 47:r.next=34;break;case 49:r.next=54;break;case 51:r.prev=51,r.t0=r.catch(32),m.e(r.t0);case 54:return r.prev=54,m.f(),r.finish(54);case 57:return h&&(p["Pic-Operations"]=JSON.stringify(h)),_={name:"tcb_extension_ci",data:{key:o,action:u,query:"object"===a(g)?g:null,headers:p,method:b}},r.next=61,d(e,_);case 61:if(A=r.sent,w=(C=A||{}).authorization,N=C.token,E=C.url,O=C.headers,P=C.cosFileId,"PUT"!==b){r.next=72;break}if(P){r.next=69;break}return r.next=67,e.getUploadMetadata({cloudPath:o});case 67:F=r.sent,P=F.data.cosFileId;case 69:S={url:E,headers:Object.assign(Object.assign({},O),{"x-cos-security-token":N,"x-cos-meta-fileid":P,Authorization:w}),method:b,body:i},r.next=87;break;case 72:if("POST"!==b){r.next=82;break}if(!((T=h.rules.map((function(t){return t.fileid})).filter((function(t){return!!t})))&&T.length>0)){r.next=82;break}if(j=0===(j=l(o,T[0])).indexOf("/")?j.slice(1):j,P){r.next=82;break}return r.next=80,e.getUploadMetadata({cloudPath:j});case 80:k=r.sent,P=k.data.cosFileId;case 82:g&&"object"===a(g)?I=Object.keys(g).map((function(t){return"".concat(t,"=").concat(g[t])})).join("&"):g&&"string"==typeof g&&(I=g),D=E,E.indexOf("?")>-1?D+="&".concat(I):D+="?".concat(I),S={url:D,headers:Object.assign(Object.assign({},O),{Authorization:w,"x-cos-security-token":N}),method:b.toUpperCase()},"POST"===b&&P&&(S.headers["x-cos-meta-fileid"]=P);case 87:return r.next=89,e.requestClient[b.toLowerCase()](S);case 89:return(R=r.sent)&&R.data&&((M=c.parse(R.data))&&M.UploadResult&&M.UploadResult.OriginalInfo&&M.UploadResult.OriginalInfo.Location&&(M.UploadResult.OriginalInfo.Location=M.UploadResult.OriginalInfo.Location.replace(/cos\.ap-([a-z]+)\.myqcloud\.com/,"tcb.qcloud.la")),M&&M.UploadResult&&M.UploadResult.ProcessResults&&M.UploadResult.ProcessResults.Object&&M.UploadResult.ProcessResults.Object.Location&&(M.UploadResult.ProcessResults.Object.Location=M.UploadResult.ProcessResults.Object.Location.replace(/cos\.ap-([a-z]+)\.myqcloud\.com/,"tcb.qcloud.la")),R.data=M),r.abrupt("return",R);case 92:case"end":return r.stop()}}),r,null,[[32,51,54,57]])})))}},function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===_typeof(exports)&&void 0!==module?module.exports=e(t):void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=e)?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(t){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var e={},r=0,n=t.length;r<n;r++)e[t.charAt(r)]=r;return e}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?fromCharCode(192|e>>>6)+fromCharCode(128|63&e):fromCharCode(224|e>>>12&15)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|e>>>18&7)+fromCharCode(128|e>>>12&63)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(t){return t.replace(re_utob,cb_utob)},cb_encode=function(t){var e=[0,2,1][t.length%3],r=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[b64chars.charAt(r>>>18),b64chars.charAt(r>>>12&63),e>=2?"=":b64chars.charAt(r>>>6&63),e>=1?"=":b64chars.charAt(63&r)].join("")},btoa=global.btoa?function(t){return global.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(t){return"[object Uint8Array]"===Object.prototype.toString.call(t)?t.toString("base64"):btoa(utob(String(t)))},encode=function(t,e){return e?_encode(String(t)).replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"})).replace(/=/g,""):_encode(t)},encodeURI=function(t){return encode(t,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(t){switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return fromCharCode(55296+(e>>>10))+fromCharCode(56320+(1023&e));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(t){return t.replace(re_btou,cb_btou)},cb_decode=function(t){var e=t.length,r=e%4,n=(e>0?b64tab[t.charAt(0)]<<18:0)|(e>1?b64tab[t.charAt(1)]<<12:0)|(e>2?b64tab[t.charAt(2)]<<6:0)|(e>3?b64tab[t.charAt(3)]:0),o=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(255&n)];return o.length-=[0,0,2,1][r],o.join("")},_atob=global.atob?function(t){return global.atob(t)}:function(t){return t.replace(/\S{1,4}/g,cb_decode)},atob=function(t){return _atob(String(t).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t,"base64")).toString()}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t,"base64")).toString()}:function(t){return btou(_atob(t))},decode=function(t){return _decode(String(t).replace(/[-_]/g,(function(t){return"-"==t?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"==typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(t){return encode(this,t)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global.Meteor&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))}).call(this,__webpack_require__(8))},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e,r){"use strict";var n=r(10),o=r(1),a=r(1),i=r(0).buildOptions,u=r(12);e.parse=function(t,e,r){if(r){!0===r&&(r={});var s=u.validate(t,r);if(!0!==s)throw Error(s.err.msg)}return e=i(e,a.defaultOptions,a.props),n.convertToJson(o.getTraversalObj(t,e),e)},e.convertTonimn=r(13).convert2nimn,e.getTraversalObj=o.getTraversalObj,e.convertToJson=n.convertToJson,e.convertToJsonString=r(14).convertToJsonString,e.validate=u.validate,e.j2xParser=r(15),e.parseToNimn=function(t,r,n){return e.convertTonimn(e.getTraversalObj(t,n),r,n)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(0);e.convertToJson=function t(e,r){var a={};if(!(e.child&&!o.isEmptyObject(e.child)||e.attrsMap&&!o.isEmptyObject(e.attrsMap)))return o.isExist(e.val)?e.val:"";o.isExist(e.val)&&("string"!=typeof e.val||""!==e.val&&e.val!==r.cdataPositionChar)&&("strict"===r.arrayMode?a[r.textNodeName]=[e.val]:a[r.textNodeName]=e.val),o.merge(a,e.attrsMap,r.arrayMode);for(var i=Object.keys(e.child),u=0;u<i.length;u++){var s=i[u];if(e.child[s]&&e.child[s].length>1)for(var c in a[s]=[],e.child[s])a[s].push(t(e.child[s][c],r));else if(!0===r.arrayMode){var l=t(e.child[s][0],r);"object"===n(l)?a[s]=[l]:a[s]=l}else"strict"===r.arrayMode?a[s]=[t(e.child[s][0],r)]:a[s]=t(e.child[s][0],r)}return a}},function(t,e,r){"use strict";t.exports=function(t,e,r){this.tagname=t,this.parent=e,this.child={},this.attrsMap={},this.val=r,this.addChild=function(t){Array.isArray(this.child[t.tagname])?this.child[t.tagname].push(t):this.child[t.tagname]=[t]}}},function(t,e,r){"use strict";var n=r(0),o={allowBooleanAttributes:!1},a=["allowBooleanAttributes"];function i(t,e){for(var r=e;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{var n=t.substr(r,e-r);if(e>5&&"xml"===n)return d("InvalidXml","XML declaration allowed only at the start of the document.",p(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function u(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){var r=1;for(e+=8;e<t.length;e++)if("<"===t[e])r++;else if(">"===t[e]&&0===--r)break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}e.validate=function(t,e){e=n.buildOptions(e,o,a);var r,c=[],h=!1,b=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(var g=0;g<t.length;g++){if("<"!==t[g]){if(" "===t[g]||"\t"===t[g]||"\n"===t[g]||"\r"===t[g])continue;return d("InvalidChar","char '".concat(t[g],"' is not expected."),p(t,g))}if("?"===t[++g]){if((g=i(t,++g)).err)return g}else{if("!"===t[g]){g=u(t,g);continue}var m=!1;"/"===t[g]&&(m=!0,g++);for(var v="";g<t.length&&">"!==t[g]&&" "!==t[g]&&"\t"!==t[g]&&"\n"!==t[g]&&"\r"!==t[g];g++)v+=t[g];if("/"===(v=v.trim())[v.length-1]&&(v=v.substring(0,v.length-1),g--),r=v,!n.isName(r)){return d("InvalidTag",0===v.trim().length?"There is an unnecessary space between tag name and backward slash '</ ..'.":"Tag '".concat(v,"' is an invalid name."),p(t,g))}var y=s(t,g);if(!1===y)return d("InvalidAttr","Attributes for '".concat(v,"' have open quote."),p(t,g));var x=y.value;if(g=y.index,"/"===x[x.length-1]){var _=l(x=x.substring(0,x.length-1),e);if(!0!==_)return d(_.err.code,_.err.msg,p(t,g-x.length+_.err.line));h=!0}else if(m){if(!y.tagClosed)return d("InvalidTag","Closing tag '".concat(v,"' doesn't have proper closing."),p(t,g));if(x.trim().length>0)return d("InvalidTag","Closing tag '".concat(v,"' can't have attributes or invalid starting."),p(t,g));var A=c.pop();if(v!==A)return d("InvalidTag","Closing tag '".concat(A,"' is expected inplace of '").concat(v,"'."),p(t,g));0==c.length&&(b=!0)}else{var C=l(x,e);if(!0!==C)return d(C.err.code,C.err.msg,p(t,g-x.length+C.err.line));if(!0===b)return d("InvalidXml","Multiple possible root nodes found.",p(t,g));c.push(v),h=!0}for(g++;g<t.length;g++){if("<"===t[g]){if("!"===t[g+1]){g=u(t,++g);continue}break}if("&"===t[g]){var w=f(t,g);if(-1==w)return d("InvalidChar","char '&' is not expected.",p(t,g));g=w}}"<"===t[g]&&g--}}return h?!(c.length>0)||d("InvalidXml","Invalid '".concat(JSON.stringify(c,null,4).replace(/\r?\n/g,""),"' found."),1):d("InvalidXml","Start tag expected.",1)};function s(t,e){for(var r="",n="",o=!1;e<t.length;e++){if('"'===t[e]||"'"===t[e])if(""===n)n=t[e];else{if(n!==t[e])continue;n=""}else if(">"===t[e]&&""===n){o=!0;break}r+=t[e]}return""===n&&{value:r,index:e,tagClosed:o}}var c=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function l(t,e){for(var r=n.getAllMatches(t,c),o={},a=0;a<r.length;a++){if(0===r[a][1].length)return d("InvalidAttr","Attribute '".concat(r[a][2],"' has no space in starting."),b(t,r[a][0]));if(void 0===r[a][3]&&!e.allowBooleanAttributes)return d("InvalidAttr","boolean attribute '".concat(r[a][2],"' is not allowed."),b(t,r[a][0]));var i=r[a][2];if(!h(i))return d("InvalidAttr","Attribute '".concat(i,"' is an invalid name."),b(t,r[a][0]));if(o.hasOwnProperty(i))return d("InvalidAttr","Attribute '".concat(i,"' is repeated."),b(t,r[a][0]));o[i]=1}return!0}function f(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){var r=/\d/;for("x"===t[e]&&(e++,r=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(r))break}return-1}(t,++e);for(var r=0;e<t.length;e++,r++)if(!(t[e].match(/\w/)&&r<20)){if(";"===t[e])break;return-1}return e}function d(t,e,r){return{err:{code:t,msg:e,line:r}}}function h(t){return n.isName(t)}function p(t,e){return t.substring(0,e).split(/\r?\n/).length}function b(t,e){return t.indexOf(e)+e.length}},function(t,e,r){"use strict";var n=function(t){return String.fromCharCode(t)},o={nilChar:n(176),missingChar:n(201),nilPremitive:n(175),missingPremitive:n(200),emptyChar:n(178),emptyValue:n(177),boundryChar:n(179),objStart:n(198),arrStart:n(204),arrayEnd:n(185)},a=[o.nilChar,o.nilPremitive,o.missingChar,o.missingPremitive,o.boundryChar,o.emptyChar,o.emptyValue,o.arrayEnd,o.objStart,o.arrStart],i=function t(e,r,n){if("string"==typeof r)return e&&e[0]&&void 0!==e[0].val?u(e[0].val,r):u(e,r);var a,i=void 0===(a=e)?o.missingChar:null===a?o.nilChar:!(a.child&&0===Object.keys(a.child).length&&(!a.attrsMap||0===Object.keys(a.attrsMap).length))||o.emptyChar;if(!0===i){var c="";if(Array.isArray(r)){c+=o.arrStart;var l=r[0],f=e.length;if("string"==typeof l)for(var d=0;d<f;d++){var h=u(e[d].val,l);c=s(c,h)}else for(var p=0;p<f;p++){var b=t(e[p],l,n);c=s(c,b)}c+=o.arrayEnd}else{c+=o.objStart;var g=Object.keys(r);for(var m in Array.isArray(e)&&(e=e[0]),g){var v=g[m],y=void 0;y=!n.ignoreAttributes&&e.attrsMap&&e.attrsMap[v]?t(e.attrsMap[v],r[v],n):v===n.textNodeName?t(e.val,r[v],n):t(e.child[v],r[v],n),c=s(c,y)}}return c}return i},u=function(t){switch(t){case void 0:return o.missingPremitive;case null:return o.nilPremitive;case"":return o.emptyValue;default:return t}},s=function(t,e){return c(e[0])||c(t[t.length-1])||(t+=o.boundryChar),t+e},c=function(t){return-1!==a.indexOf(t)};var l=r(1),f=r(0).buildOptions;e.convert2nimn=function(t,e,r){return r=f(r,l.defaultOptions,l.props),i(t,e,r)}},function(t,e,r){"use strict";var n=r(0),o=r(0).buildOptions,a=r(1),i=function t(e,r,o){for(var a,i="{",u=Object.keys(e.child),s=0;s<u.length;s++){var c=u[s];if(e.child[c]&&e.child[c].length>1){for(var l in i+='"'+c+'" : [ ',e.child[c])i+=t(e.child[c][l],r)+" , ";i=i.substr(0,i.length-1)+" ] "}else i+='"'+c+'" : '+t(e.child[c][0],r)+" ,"}return n.merge(i,e.attrsMap),n.isEmptyObject(i)?n.isExist(e.val)?e.val:"":(n.isExist(e.val)&&("string"!=typeof e.val||""!==e.val&&e.val!==r.cdataPositionChar)&&(i+='"'+r.textNodeName+'" : '+(!0!==(a=e.val)&&!1!==a&&isNaN(a)?'"'+a+'"':a)),","===i[i.length-1]&&(i=i.substr(0,i.length-2)),i+"}")};e.convertToJsonString=function(t,e){return(e=o(e,a.defaultOptions,a.props)).indentBy=e.indentBy||"",i(t,e,0)}},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=r(0).buildOptions,a={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataTagName:!1,cdataPositionChar:"\\c",format:!1,indentBy:"  ",supressEmptyNode:!1,tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t}},i=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","cdataTagName","cdataPositionChar","format","indentBy","supressEmptyNode","tagValueProcessor","attrValueProcessor"];function u(t){this.options=o(t,a,i),this.options.ignoreAttributes||this.options.attrNodeName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=b),this.options.cdataTagName?this.isCDATA=g:this.isCDATA=function(){return!1},this.replaceCDATAstr=s,this.replaceCDATAarr=c,this.options.format?(this.indentate=p,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.supressEmptyNode?(this.buildTextNode=h,this.buildObjNode=f):(this.buildTextNode=d,this.buildObjNode=l),this.buildTextValNode=d,this.buildObjectNode=l}function s(t,e){return t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t?t+"<![CDATA["+e+"]]"+this.tagEndChar:t.replace(this.options.cdataPositionChar,"<![CDATA["+e+"]]"+this.tagEndChar)}function c(t,e){if(t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t)return t+"<![CDATA["+e.join("]]><![CDATA[")+"]]"+this.tagEndChar;for(var r in e)t=t.replace(this.options.cdataPositionChar,"<![CDATA["+e[r]+"]]>");return t+this.newLine}function l(t,e,r,n){return r&&!t.includes("<")?this.indentate(n)+"<"+e+r+">"+t+"</"+e+this.tagEndChar:this.indentate(n)+"<"+e+r+this.tagEndChar+t+this.indentate(n)+"</"+e+this.tagEndChar}function f(t,e,r,n){return""!==t?this.buildObjectNode(t,e,r,n):this.indentate(n)+"<"+e+r+"/"+this.tagEndChar}function d(t,e,r,n){return this.indentate(n)+"<"+e+r+">"+this.options.tagValueProcessor(t)+"</"+e+this.tagEndChar}function h(t,e,r,n){return""!==t?this.buildTextValNode(t,e,r,n):this.indentate(n)+"<"+e+r+"/"+this.tagEndChar}function p(t){return this.options.indentBy.repeat(t)}function b(t){return!!t.startsWith(this.options.attributeNamePrefix)&&t.substr(this.attrPrefixLen)}function g(t){return t===this.options.cdataTagName}u.prototype.parse=function(t){return this.j2x(t,0).val},u.prototype.j2x=function(t,e){for(var r="",o="",a=Object.keys(t),i=a.length,u=0;u<i;u++){var s=a[u];if(void 0===t[s]);else if(null===t[s])o+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if(t[s]instanceof Date)o+=this.buildTextNode(t[s],s,"",e);else if("object"!==n(t[s])){var c=this.isAttribute(s);c?r+=" "+c+'="'+this.options.attrValueProcessor(""+t[s])+'"':this.isCDATA(s)?t[this.options.textNodeName]?o+=this.replaceCDATAstr(t[this.options.textNodeName],t[s]):o+=this.replaceCDATAstr("",t[s]):s===this.options.textNodeName?t[this.options.cdataTagName]||(o+=this.options.tagValueProcessor(""+t[s])):o+=this.buildTextNode(t[s],s,"",e)}else if(Array.isArray(t[s]))if(this.isCDATA(s))o+=this.indentate(e),t[this.options.textNodeName]?o+=this.replaceCDATAarr(t[this.options.textNodeName],t[s]):o+=this.replaceCDATAarr("",t[s]);else for(var l=t[s].length,f=0;f<l;f++){var d=t[s][f];if(void 0===d);else if(null===d)o+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if("object"===n(d)){var h=this.j2x(d,e+1);o+=this.buildObjNode(h.val,s,h.attrStr,e)}else o+=this.buildTextNode(d,s,"",e)}else if(this.options.attrNodeName&&s===this.options.attrNodeName)for(var p=Object.keys(t[s]),b=p.length,g=0;g<b;g++)r+=" "+p[g]+'="'+this.options.attrValueProcessor(""+t[s][p[g]])+'"';else{var m=this.j2x(t[s],e+1);o+=this.buildObjNode(m.val,s,m.attrStr,e)}}return{attrStr:r,val:o}},t.exports=u},function(t,e){function r(t,e,r,n,o,a,i){try{var u=t[a](i),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function u(t){r(i,o,a,u,s,"next",t)}function s(t){r(i,o,a,u,s,"throw",t)}u(void 0)}))}}function o(){return(o=n(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("GET",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function a(){return(a=n(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("POST",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=n(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u("PUT",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,e){return s.apply(this,arguments)}function s(){return(s=n(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,n){var o={url:r.url,header:r.headers,data:r.body,method:e,success:function(e){e&&e.code?n(e):t(e)},fail:function(t){n(t)}};wx.request(o)}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return(c=n(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wx.cloud.callFunction(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l={requestClient:{get:function(t){return o.apply(this,arguments)},post:function(t){return a.apply(this,arguments)},put:function(t){return i.apply(this,arguments)}},callFunction:function(t){return c.apply(this,arguments)}};t.exports=l}]);
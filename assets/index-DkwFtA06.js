(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Ih(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gd={exports:{}},bi={},yd={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),Mh=Symbol.for("react.portal"),Oh=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),Ah=Symbol.for("react.provider"),bh=Symbol.for("react.context"),Bh=Symbol.for("react.forward_ref"),Uh=Symbol.for("react.suspense"),Hh=Symbol.for("react.memo"),Wh=Symbol.for("react.lazy"),wu=Symbol.iterator;function Vh(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var vd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xd=Object.assign,wd={};function qn(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||vd}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $d(){}$d.prototype=qn.prototype;function ca(e,t,n){this.props=e,this.context=t,this.refs=wd,this.updater=n||vd}var da=ca.prototype=new $d;da.constructor=ca;xd(da,qn.prototype);da.isPureReactComponent=!0;var $u=Array.isArray,kd=Object.prototype.hasOwnProperty,fa={current:null},Sd={key:!0,ref:!0,__self:!0,__source:!0};function Cd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)kd.call(t,r)&&!Sd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:co,type:e,key:i,ref:l,props:o,_owner:fa.current}}function Gh(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pa(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function Qh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function hl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qh(""+e.key):t.toString(36)}function Vo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case co:case Mh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+hl(l,0):r,$u(o)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),Vo(o,t,n,"",function(c){return c})):o!=null&&(pa(o)&&(o=Gh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ku,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",$u(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+hl(i,a);l+=Vo(i,t,n,u,o)}else if(u=Vh(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+hl(i,a++),l+=Vo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ko(e,t,n){if(e==null)return e;var r=[],o=0;return Vo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Yh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Go={transition:null},Kh={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Go,ReactCurrentOwner:fa};function Ed(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:ko,forEach:function(e,t,n){ko(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ko(e,function(){t++}),t},toArray:function(e){return ko(e,function(t){return t})||[]},only:function(e){if(!pa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=qn;O.Fragment=Oh;O.Profiler=Dh;O.PureComponent=ca;O.StrictMode=Fh;O.Suspense=Uh;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kh;O.act=Ed;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=xd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)kd.call(t,u)&&!Sd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:co,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:bh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ah,_context:e},e.Consumer=e};O.createElement=Cd;O.createFactory=function(e){var t=Cd.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Bh,render:e}};O.isValidElement=pa;O.lazy=function(e){return{$$typeof:Wh,_payload:{_status:-1,_result:e},_init:Yh}};O.memo=function(e,t){return{$$typeof:Hh,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Go.transition;Go.transition={};try{e()}finally{Go.transition=t}};O.unstable_act=Ed;O.useCallback=function(e,t){return Ee.current.useCallback(e,t)};O.useContext=function(e){return Ee.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};O.useEffect=function(e,t){return Ee.current.useEffect(e,t)};O.useId=function(){return Ee.current.useId()};O.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Ee.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};O.useRef=function(e){return Ee.current.useRef(e)};O.useState=function(e){return Ee.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Ee.current.useTransition()};O.version="18.3.1";yd.exports=O;var v=yd.exports;const Se=Ih(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh=v,Zh=Symbol.for("react.element"),Jh=Symbol.for("react.fragment"),qh=Object.prototype.hasOwnProperty,em=Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tm={key:!0,ref:!0,__self:!0,__source:!0};function jd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)qh.call(t,r)&&!tm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Zh,type:e,key:i,ref:l,props:o,_owner:em.current}}bi.Fragment=Jh;bi.jsx=jd;bi.jsxs=jd;gd.exports=bi;var d=gd.exports,zd={exports:{}},Ae={},Pd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var T=_.length;_.push(L);e:for(;0<T;){var H=T-1>>>1,b=_[H];if(0<o(b,L))_[H]=L,_[T]=b,T=H;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],T=_.pop();if(T!==L){_[0]=T;e:for(var H=0,b=_.length,se=b>>>1;H<se;){var te=2*(H+1)-1,oe=_[te],Ie=te+1,Be=_[Ie];if(0>o(oe,T))Ie<b&&0>o(Be,oe)?(_[H]=Be,_[Ie]=T,H=Ie):(_[H]=oe,_[te]=T,H=te);else if(Ie<b&&0>o(Be,T))_[H]=Be,_[Ie]=T,H=Ie;else break e}}return L}function o(_,L){var T=_.sortIndex-L.sortIndex;return T!==0?T:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],f=1,h=null,g=3,k=!1,x=!1,$=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(_){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=_)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function S(_){if($=!1,y(_),!x)if(n(u)!==null)x=!0,jt(E);else{var L=n(c);L!==null&&Zt(S,L.startTime-_)}}function E(_,L){x=!1,$&&($=!1,m(P),P=-1),k=!0;var T=g;try{for(y(L),h=n(u);h!==null&&(!(h.expirationTime>L)||_&&!W());){var H=h.callback;if(typeof H=="function"){h.callback=null,g=h.priorityLevel;var b=H(h.expirationTime<=L);L=e.unstable_now(),typeof b=="function"?h.callback=b:h===n(u)&&r(u),y(L)}else r(u);h=n(u)}if(h!==null)var se=!0;else{var te=n(c);te!==null&&Zt(S,te.startTime-L),se=!1}return se}finally{h=null,g=T,k=!1}}var R=!1,C=null,P=-1,F=5,I=-1;function W(){return!(e.unstable_now()-I<F)}function Te(){if(C!==null){var _=e.unstable_now();I=_;var L=!0;try{L=C(!0,_)}finally{L?G():(R=!1,C=null)}}else R=!1}var G;if(typeof p=="function")G=function(){p(Te)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,ge=ze.port2;ze.port1.onmessage=Te,G=function(){ge.postMessage(null)}}else G=function(){j(Te,0)};function jt(_){C=_,R||(R=!0,G())}function Zt(_,L){P=j(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,jt(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var T=g;g=L;try{return _()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=g;g=_;try{return L()}finally{g=T}},e.unstable_scheduleCallback=function(_,L,T){var H=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?H+T:H):T=H,_){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=T+b,_={id:f++,callback:L,priorityLevel:_,startTime:T,expirationTime:b,sortIndex:-1},T>H?(_.sortIndex=T,t(c,_),n(u)===null&&_===n(c)&&($?(m(P),P=-1):$=!0,Zt(S,T-H))):(_.sortIndex=b,t(u,_),x||k||(x=!0,jt(E))),_},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(_){var L=g;return function(){var T=g;g=L;try{return _.apply(this,arguments)}finally{g=T}}}})(Rd);Pd.exports=Rd;var nm=Pd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=v,De=nm;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _d=new Set,Ur={};function mn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Ur[e]=t,e=0;e<t.length;e++)_d.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=Object.prototype.hasOwnProperty,om=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Su={},Cu={};function im(e){return ss.call(Cu,e)?!0:ss.call(Su,e)?!1:om.test(e)?Cu[e]=!0:(Su[e]=!0,!1)}function lm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sm(e,t,n,r){if(t===null||typeof t>"u"||lm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var ha=/[\-:]([a-z])/g;function ma(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ha,ma);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ha,ma);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ha,ma);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ga(e,t,n,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sm(t,n,o,r)&&(n=null),r||o===null?im(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),ya=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),Nd=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),us=Symbol.for("react.suspense"),cs=Symbol.for("react.suspense_list"),xa=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Td=Symbol.for("react.offscreen"),Eu=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=Eu&&e[Eu]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,ml;function kr(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var gl=!1;function yl(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function am(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Cn:return"Portal";case as:return"Profiler";case ya:return"StrictMode";case us:return"Suspense";case cs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ld:return(e.displayName||"Context")+".Consumer";case Nd:return(e._context.displayName||"Context")+".Provider";case va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xa:return t=e.displayName||null,t!==null?t:ds(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return ds(e(t))}catch{}}return null}function um(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ds(t);case 8:return t===ya?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Id(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cm(e){var t=Id(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=cm(e))}function Md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Id(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fs(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ju(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Od(e,t){t=t.checked,t!=null&&ga(e,"checked",t,!1)}function ps(e,t){Od(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&hs(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hs(e,t,n){(t!=="number"||ci(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function On(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ms(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Sr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function Fd(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ru(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Eo,Ad=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dm=["Webkit","ms","Moz","O"];Object.keys(_r).forEach(function(e){dm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_r[t]=_r[e]})});function bd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_r.hasOwnProperty(e)&&_r[e]?(""+t).trim():t+"px"}function Bd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var fm=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ys(e,t){if(t){if(fm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function vs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Fn=null,Dn=null;function _u(e){if(e=ho(e)){if(typeof ws!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Vi(t),ws(e.stateNode,e.type,t))}}function Ud(e){Fn?Dn?Dn.push(e):Dn=[e]:Fn=e}function Hd(){if(Fn){var e=Fn,t=Dn;if(Dn=Fn=null,_u(e),t)for(e=0;e<t.length;e++)_u(t[e])}}function Wd(e,t){return e(t)}function Vd(){}var vl=!1;function Gd(e,t,n){if(vl)return e(t,n);vl=!0;try{return Wd(e,t,n)}finally{vl=!1,(Fn!==null||Dn!==null)&&(Vd(),Hd())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Vi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var $s=!1;if(wt)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){$s=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{$s=!1}function pm(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(f){this.onError(f)}}var Nr=!1,di=null,fi=!1,ks=null,hm={onError:function(e){Nr=!0,di=e}};function mm(e,t,n,r,o,i,l,a,u){Nr=!1,di=null,pm.apply(hm,arguments)}function gm(e,t,n,r,o,i,l,a,u){if(mm.apply(this,arguments),Nr){if(Nr){var c=di;Nr=!1,di=null}else throw Error(z(198));fi||(fi=!0,ks=c)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nu(e){if(gn(e)!==e)throw Error(z(188))}function ym(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Nu(o),e;if(i===r)return Nu(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function Yd(e){return e=ym(e),e!==null?Kd(e):null}function Kd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kd(e);if(t!==null)return t;e=e.sibling}return null}var Xd=De.unstable_scheduleCallback,Lu=De.unstable_cancelCallback,vm=De.unstable_shouldYield,xm=De.unstable_requestPaint,re=De.unstable_now,wm=De.unstable_getCurrentPriorityLevel,$a=De.unstable_ImmediatePriority,Zd=De.unstable_UserBlockingPriority,pi=De.unstable_NormalPriority,$m=De.unstable_LowPriority,Jd=De.unstable_IdlePriority,Bi=null,ut=null;function km(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(Bi,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Em,Sm=Math.log,Cm=Math.LN2;function Em(e){return e>>>=0,e===0?32:31-(Sm(e)/Cm|0)|0}var jo=64,zo=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Cr(a):(i&=l,i!==0&&(r=Cr(i)))}else l=n&~o,l!==0?r=Cr(l):i!==0&&(r=Cr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),o=1<<n,r|=e[n],t&=~o;return r}function jm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-tt(i),a=1<<l,u=o[l];u===-1?(!(a&n)||a&r)&&(o[l]=jm(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Ss(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qd(){var e=jo;return jo<<=1,!(jo&4194240)&&(jo=64),e}function xl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Pm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var tf,Sa,nf,rf,of,Cs=!1,Po=[],Ft=null,Dt=null,At=null,Vr=new Map,Gr=new Map,Lt=[],Rm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tu(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":At=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(t.pointerId)}}function ur(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ho(t),t!==null&&Sa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function _m(e,t,n,r,o){switch(t){case"focusin":return Ft=ur(Ft,e,t,n,r,o),!0;case"dragenter":return Dt=ur(Dt,e,t,n,r,o),!0;case"mouseover":return At=ur(At,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vr.set(i,ur(Vr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Gr.set(i,ur(Gr.get(i)||null,e,t,n,r,o)),!0}return!1}function lf(e){var t=tn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Qd(n),t!==null){e.blockedOn=t,of(e.priority,function(){nf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xs=r,n.target.dispatchEvent(r),xs=null}else return t=ho(n),t!==null&&Sa(t),e.blockedOn=n,!1;t.shift()}return!0}function Iu(e,t,n){Qo(e)&&n.delete(t)}function Nm(){Cs=!1,Ft!==null&&Qo(Ft)&&(Ft=null),Dt!==null&&Qo(Dt)&&(Dt=null),At!==null&&Qo(At)&&(At=null),Vr.forEach(Iu),Gr.forEach(Iu)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,Cs||(Cs=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Nm)))}function Qr(e){function t(o){return cr(o,e)}if(0<Po.length){cr(Po[0],e);for(var n=1;n<Po.length;n++){var r=Po[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&cr(Ft,e),Dt!==null&&cr(Dt,e),At!==null&&cr(At,e),Vr.forEach(t),Gr.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)lf(n),n.blockedOn===null&&Lt.shift()}var An=Et.ReactCurrentBatchConfig,mi=!0;function Lm(e,t,n,r){var o=U,i=An.transition;An.transition=null;try{U=1,Ca(e,t,n,r)}finally{U=o,An.transition=i}}function Tm(e,t,n,r){var o=U,i=An.transition;An.transition=null;try{U=4,Ca(e,t,n,r)}finally{U=o,An.transition=i}}function Ca(e,t,n,r){if(mi){var o=Es(e,t,n,r);if(o===null)Rl(e,t,r,gi,n),Tu(e,r);else if(_m(o,e,t,n,r))r.stopPropagation();else if(Tu(e,r),t&4&&-1<Rm.indexOf(e)){for(;o!==null;){var i=ho(o);if(i!==null&&tf(i),i=Es(e,t,n,r),i===null&&Rl(e,t,r,gi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var gi=null;function Es(e,t,n,r){if(gi=null,e=wa(r),e=tn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gi=e,null}function sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wm()){case $a:return 1;case Zd:return 4;case pi:case $m:return 16;case Jd:return 536870912;default:return 16}default:return 16}}var It=null,Ea=null,Yo=null;function af(){if(Yo)return Yo;var e,t=Ea,n=t.length,r,o="value"in It?It.value:It.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Yo=o.slice(e,1<r?1-r:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function Mu(){return!1}function be(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ro:Mu,this.isPropagationStopped=Mu,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=be(er),po=ee({},er,{view:0,detail:0}),Im=be(po),wl,$l,dr,Ui=ee({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(wl=e.screenX-dr.screenX,$l=e.screenY-dr.screenY):$l=wl=0,dr=e),wl)},movementY:function(e){return"movementY"in e?e.movementY:$l}}),Ou=be(Ui),Mm=ee({},Ui,{dataTransfer:0}),Om=be(Mm),Fm=ee({},po,{relatedTarget:0}),kl=be(Fm),Dm=ee({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Am=be(Dm),bm=ee({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bm=be(bm),Um=ee({},er,{data:0}),Fu=be(Um),Hm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vm[e])?!!t[e]:!1}function za(){return Gm}var Qm=ee({},po,{key:function(e){if(e.key){var t=Hm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ym=be(Qm),Km=ee({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=be(Km),Xm=ee({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),Zm=be(Xm),Jm=ee({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),qm=be(Jm),eg=ee({},Ui,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tg=be(eg),ng=[9,13,27,32],Pa=wt&&"CompositionEvent"in window,Lr=null;wt&&"documentMode"in document&&(Lr=document.documentMode);var rg=wt&&"TextEvent"in window&&!Lr,uf=wt&&(!Pa||Lr&&8<Lr&&11>=Lr),Au=" ",bu=!1;function cf(e,t){switch(e){case"keyup":return ng.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function og(e,t){switch(e){case"compositionend":return df(t);case"keypress":return t.which!==32?null:(bu=!0,Au);case"textInput":return e=t.data,e===Au&&bu?null:e;default:return null}}function ig(e,t){if(jn)return e==="compositionend"||!Pa&&cf(e,t)?(e=af(),Yo=Ea=It=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return uf&&t.locale!=="ko"?null:t.data;default:return null}}var lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lg[e.type]:t==="textarea"}function ff(e,t,n,r){Ud(r),t=yi(t,"onChange"),0<t.length&&(n=new ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Yr=null;function sg(e){Sf(e,0)}function Hi(e){var t=Rn(e);if(Md(t))return e}function ag(e,t){if(e==="change")return t}var pf=!1;if(wt){var Sl;if(wt){var Cl="oninput"in document;if(!Cl){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Cl=typeof Uu.oninput=="function"}Sl=Cl}else Sl=!1;pf=Sl&&(!document.documentMode||9<document.documentMode)}function Hu(){Tr&&(Tr.detachEvent("onpropertychange",hf),Yr=Tr=null)}function hf(e){if(e.propertyName==="value"&&Hi(Yr)){var t=[];ff(t,Yr,e,wa(e)),Gd(sg,t)}}function ug(e,t,n){e==="focusin"?(Hu(),Tr=t,Yr=n,Tr.attachEvent("onpropertychange",hf)):e==="focusout"&&Hu()}function cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hi(Yr)}function dg(e,t){if(e==="click")return Hi(t)}function fg(e,t){if(e==="input"||e==="change")return Hi(t)}function pg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:pg;function Kr(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ss.call(t,o)||!it(e[o],t[o]))return!1}return!0}function Wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vu(e,t){var n=Wu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wu(n)}}function mf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gf(){for(var e=window,t=ci();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ci(e.document)}return t}function Ra(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hg(e){var t=gf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mf(n.ownerDocument.documentElement,n)){if(r!==null&&Ra(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Vu(n,i);var l=Vu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mg=wt&&"documentMode"in document&&11>=document.documentMode,zn=null,js=null,Ir=null,zs=!1;function Gu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zs||zn==null||zn!==ci(r)||(r=zn,"selectionStart"in r&&Ra(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Kr(Ir,r)||(Ir=r,r=yi(js,"onSelect"),0<r.length&&(t=new ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},El={},yf={};wt&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Wi(e){if(El[e])return El[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in yf)return El[e]=t[n];return e}var vf=Wi("animationend"),xf=Wi("animationiteration"),wf=Wi("animationstart"),$f=Wi("transitionend"),kf=new Map,Qu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){kf.set(e,t),mn(t,[e])}for(var jl=0;jl<Qu.length;jl++){var zl=Qu[jl],gg=zl.toLowerCase(),yg=zl[0].toUpperCase()+zl.slice(1);Yt(gg,"on"+yg)}Yt(vf,"onAnimationEnd");Yt(xf,"onAnimationIteration");Yt(wf,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt($f,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Yu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gm(r,t,void 0,e),e.currentTarget=null}function Sf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Yu(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Yu(o,a,c),i=u}}}if(fi)throw e=ks,fi=!1,ks=null,e}function Q(e,t){var n=t[Ls];n===void 0&&(n=t[Ls]=new Set);var r=e+"__bubble";n.has(r)||(Cf(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),Cf(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[No]){e[No]=!0,_d.forEach(function(n){n!=="selectionchange"&&(vg.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Pl("selectionchange",!1,t))}}function Cf(e,t,n,r){switch(sf(t)){case 1:var o=Lm;break;case 4:o=Tm;break;default:o=Ca}n=o.bind(null,t,n,e),o=void 0,!$s||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=tn(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}Gd(function(){var c=i,f=wa(n),h=[];e:{var g=kf.get(e);if(g!==void 0){var k=ja,x=e;switch(e){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":k=Ym;break;case"focusin":x="focus",k=kl;break;case"focusout":x="blur",k=kl;break;case"beforeblur":case"afterblur":k=kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Zm;break;case vf:case xf:case wf:k=Am;break;case $f:k=qm;break;case"scroll":k=Im;break;case"wheel":k=tg;break;case"copy":case"cut":case"paste":k=Bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Du}var $=(t&4)!==0,j=!$&&e==="scroll",m=$?g!==null?g+"Capture":null:g;$=[];for(var p=c,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=Wr(p,m),S!=null&&$.push(Zr(p,S,y)))),j)break;p=p.return}0<$.length&&(g=new k(g,x,null,n,f),h.push({event:g,listeners:$}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==xs&&(x=n.relatedTarget||n.fromElement)&&(tn(x)||x[$t]))break e;if((k||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=c,x=x?tn(x):null,x!==null&&(j=gn(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=c),k!==x)){if($=Ou,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&($=Du,S="onPointerLeave",m="onPointerEnter",p="pointer"),j=k==null?g:Rn(k),y=x==null?g:Rn(x),g=new $(S,p+"leave",k,n,f),g.target=j,g.relatedTarget=y,S=null,tn(f)===c&&($=new $(m,p+"enter",x,n,f),$.target=y,$.relatedTarget=j,S=$),j=S,k&&x)t:{for($=k,m=x,p=0,y=$;y;y=vn(y))p++;for(y=0,S=m;S;S=vn(S))y++;for(;0<p-y;)$=vn($),p--;for(;0<y-p;)m=vn(m),y--;for(;p--;){if($===m||m!==null&&$===m.alternate)break t;$=vn($),m=vn(m)}$=null}else $=null;k!==null&&Ku(h,g,k,$,!1),x!==null&&j!==null&&Ku(h,j,x,$,!0)}}e:{if(g=c?Rn(c):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var E=ag;else if(Bu(g))if(pf)E=fg;else{E=cg;var R=ug}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=dg);if(E&&(E=E(e,c))){ff(h,E,n,f);break e}R&&R(e,g,c),e==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&hs(g,"number",g.value)}switch(R=c?Rn(c):window,e){case"focusin":(Bu(R)||R.contentEditable==="true")&&(zn=R,js=c,Ir=null);break;case"focusout":Ir=js=zn=null;break;case"mousedown":zs=!0;break;case"contextmenu":case"mouseup":case"dragend":zs=!1,Gu(h,n,f);break;case"selectionchange":if(mg)break;case"keydown":case"keyup":Gu(h,n,f)}var C;if(Pa)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else jn?cf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(uf&&n.locale!=="ko"&&(jn||P!=="onCompositionStart"?P==="onCompositionEnd"&&jn&&(C=af()):(It=f,Ea="value"in It?It.value:It.textContent,jn=!0)),R=yi(c,P),0<R.length&&(P=new Fu(P,e,null,n,f),h.push({event:P,listeners:R}),C?P.data=C:(C=df(n),C!==null&&(P.data=C)))),(C=rg?og(e,n):ig(e,n))&&(c=yi(c,"onBeforeInput"),0<c.length&&(f=new Fu("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=C))}Sf(h,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wr(e,n),i!=null&&r.unshift(Zr(e,i,o)),i=Wr(e,t),i!=null&&r.push(Zr(e,i,o))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ku(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=Wr(n,i),u!=null&&l.unshift(Zr(n,u,a))):o||(u=Wr(n,i),u!=null&&l.push(Zr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var xg=/\r\n?/g,wg=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(xg,`
`).replace(wg,"")}function Lo(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(z(425))}function vi(){}var Ps=null,Rs=null;function _s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ns=typeof setTimeout=="function"?setTimeout:void 0,$g=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(Sg)}:Ns;function Sg(e){setTimeout(function(){throw e})}function _l(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Qr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),at="__reactFiber$"+tr,Jr="__reactProps$"+tr,$t="__reactContainer$"+tr,Ls="__reactEvents$"+tr,Cg="__reactListeners$"+tr,Eg="__reactHandles$"+tr;function tn(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ju(e);e!==null;){if(n=e[at])return n;e=Ju(e)}return t}e=n,n=e.parentNode}return null}function ho(e){return e=e[at]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Vi(e){return e[Jr]||null}var Ts=[],_n=-1;function Kt(e){return{current:e}}function K(e){0>_n||(e.current=Ts[_n],Ts[_n]=null,_n--)}function V(e,t){_n++,Ts[_n]=e.current,e.current=t}var Qt={},$e=Kt(Qt),_e=Kt(!1),an=Qt;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function xi(){K(_e),K($e)}function qu(e,t,n){if($e.current!==Qt)throw Error(z(168));V($e,t),V(_e,n)}function Ef(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,um(e)||"Unknown",o));return ee({},n,r)}function wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,an=$e.current,V($e,e),V(_e,_e.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Ef(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,K(_e),K($e),V($e,e)):K(_e),V(_e,n)}var gt=null,Gi=!1,Nl=!1;function jf(e){gt===null?gt=[e]:gt.push(e)}function jg(e){Gi=!0,jf(e)}function Xt(){if(!Nl&&gt!==null){Nl=!0;var e=0,t=U;try{var n=gt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,Gi=!1}catch(o){throw gt!==null&&(gt=gt.slice(e+1)),Xd($a,Xt),o}finally{U=t,Nl=!1}}return null}var Nn=[],Ln=0,$i=null,ki=0,Ue=[],He=0,un=null,yt=1,vt="";function Jt(e,t){Nn[Ln++]=ki,Nn[Ln++]=$i,$i=e,ki=t}function zf(e,t,n){Ue[He++]=yt,Ue[He++]=vt,Ue[He++]=un,un=e;var r=yt;e=vt;var o=32-tt(r)-1;r&=~(1<<o),n+=1;var i=32-tt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,yt=1<<32-tt(t)+o|n<<o|r,vt=i+e}else yt=1<<i|n<<o|r,vt=e}function _a(e){e.return!==null&&(Jt(e,1),zf(e,1,0))}function Na(e){for(;e===$i;)$i=Nn[--Ln],Nn[Ln]=null,ki=Nn[--Ln],Nn[Ln]=null;for(;e===un;)un=Ue[--He],Ue[He]=null,vt=Ue[--He],Ue[He]=null,yt=Ue[--He],Ue[He]=null}var Fe=null,Oe=null,X=!1,et=null;function Pf(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Fe=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:yt,overflow:vt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Fe=e,Oe=null,!0):!1;default:return!1}}function Is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ms(e){if(X){var t=Oe;if(t){var n=t;if(!tc(e,t)){if(Is(e))throw Error(z(418));t=bt(n.nextSibling);var r=Fe;t&&tc(e,t)?Pf(r,n):(e.flags=e.flags&-4097|2,X=!1,Fe=e)}}else{if(Is(e))throw Error(z(418));e.flags=e.flags&-4097|2,X=!1,Fe=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Fe=e}function To(e){if(e!==Fe)return!1;if(!X)return nc(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_s(e.type,e.memoizedProps)),t&&(t=Oe)){if(Is(e))throw Rf(),Error(z(418));for(;t;)Pf(e,t),t=bt(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Fe?bt(e.stateNode.nextSibling):null;return!0}function Rf(){for(var e=Oe;e;)e=bt(e.nextSibling)}function Vn(){Oe=Fe=null,X=!1}function La(e){et===null?et=[e]:et.push(e)}var zg=Et.ReactCurrentBatchConfig;function fr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function Io(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function _f(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=Wt(m,p),m.index=0,m.sibling=null,m}function i(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,S){return p===null||p.tag!==6?(p=Dl(y,m.mode,S),p.return=m,p):(p=o(p,y),p.return=m,p)}function u(m,p,y,S){var E=y.type;return E===En?f(m,p,y.props.children,S,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&rc(E)===p.type)?(S=o(p,y.props),S.ref=fr(m,p,y),S.return=m,S):(S=ni(y.type,y.key,y.props,null,m.mode,S),S.ref=fr(m,p,y),S.return=m,S)}function c(m,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Al(y,m.mode,S),p.return=m,p):(p=o(p,y.children||[]),p.return=m,p)}function f(m,p,y,S,E){return p===null||p.tag!==7?(p=ln(y,m.mode,S,E),p.return=m,p):(p=o(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Dl(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case So:return y=ni(p.type,p.key,p.props,null,m.mode,y),y.ref=fr(m,null,p),y.return=m,y;case Cn:return p=Al(p,m.mode,y),p.return=m,p;case _t:var S=p._init;return h(m,S(p._payload),y)}if(Sr(p)||sr(p))return p=ln(p,m.mode,y,null),p.return=m,p;Io(m,p)}return null}function g(m,p,y,S){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(m,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case So:return y.key===E?u(m,p,y,S):null;case Cn:return y.key===E?c(m,p,y,S):null;case _t:return E=y._init,g(m,p,E(y._payload),S)}if(Sr(y)||sr(y))return E!==null?null:f(m,p,y,S,null);Io(m,y)}return null}function k(m,p,y,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,a(p,m,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case So:return m=m.get(S.key===null?y:S.key)||null,u(p,m,S,E);case Cn:return m=m.get(S.key===null?y:S.key)||null,c(p,m,S,E);case _t:var R=S._init;return k(m,p,y,R(S._payload),E)}if(Sr(S)||sr(S))return m=m.get(y)||null,f(p,m,S,E,null);Io(p,S)}return null}function x(m,p,y,S){for(var E=null,R=null,C=p,P=p=0,F=null;C!==null&&P<y.length;P++){C.index>P?(F=C,C=null):F=C.sibling;var I=g(m,C,y[P],S);if(I===null){C===null&&(C=F);break}e&&C&&I.alternate===null&&t(m,C),p=i(I,p,P),R===null?E=I:R.sibling=I,R=I,C=F}if(P===y.length)return n(m,C),X&&Jt(m,P),E;if(C===null){for(;P<y.length;P++)C=h(m,y[P],S),C!==null&&(p=i(C,p,P),R===null?E=C:R.sibling=C,R=C);return X&&Jt(m,P),E}for(C=r(m,C);P<y.length;P++)F=k(C,m,P,y[P],S),F!==null&&(e&&F.alternate!==null&&C.delete(F.key===null?P:F.key),p=i(F,p,P),R===null?E=F:R.sibling=F,R=F);return e&&C.forEach(function(W){return t(m,W)}),X&&Jt(m,P),E}function $(m,p,y,S){var E=sr(y);if(typeof E!="function")throw Error(z(150));if(y=E.call(y),y==null)throw Error(z(151));for(var R=E=null,C=p,P=p=0,F=null,I=y.next();C!==null&&!I.done;P++,I=y.next()){C.index>P?(F=C,C=null):F=C.sibling;var W=g(m,C,I.value,S);if(W===null){C===null&&(C=F);break}e&&C&&W.alternate===null&&t(m,C),p=i(W,p,P),R===null?E=W:R.sibling=W,R=W,C=F}if(I.done)return n(m,C),X&&Jt(m,P),E;if(C===null){for(;!I.done;P++,I=y.next())I=h(m,I.value,S),I!==null&&(p=i(I,p,P),R===null?E=I:R.sibling=I,R=I);return X&&Jt(m,P),E}for(C=r(m,C);!I.done;P++,I=y.next())I=k(C,m,P,I.value,S),I!==null&&(e&&I.alternate!==null&&C.delete(I.key===null?P:I.key),p=i(I,p,P),R===null?E=I:R.sibling=I,R=I);return e&&C.forEach(function(Te){return t(m,Te)}),X&&Jt(m,P),E}function j(m,p,y,S){if(typeof y=="object"&&y!==null&&y.type===En&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case So:e:{for(var E=y.key,R=p;R!==null;){if(R.key===E){if(E=y.type,E===En){if(R.tag===7){n(m,R.sibling),p=o(R,y.props.children),p.return=m,m=p;break e}}else if(R.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_t&&rc(E)===R.type){n(m,R.sibling),p=o(R,y.props),p.ref=fr(m,R,y),p.return=m,m=p;break e}n(m,R);break}else t(m,R);R=R.sibling}y.type===En?(p=ln(y.props.children,m.mode,S,y.key),p.return=m,m=p):(S=ni(y.type,y.key,y.props,null,m.mode,S),S.ref=fr(m,p,y),S.return=m,m=S)}return l(m);case Cn:e:{for(R=y.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=o(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Al(y,m.mode,S),p.return=m,m=p}return l(m);case _t:return R=y._init,j(m,p,R(y._payload),S)}if(Sr(y))return x(m,p,y,S);if(sr(y))return $(m,p,y,S);Io(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,y),p.return=m,m=p):(n(m,p),p=Dl(y,m.mode,S),p.return=m,m=p),l(m)):n(m,p)}return j}var Gn=_f(!0),Nf=_f(!1),Si=Kt(null),Ci=null,Tn=null,Ta=null;function Ia(){Ta=Tn=Ci=null}function Ma(e){var t=Si.current;K(Si),e._currentValue=t}function Os(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bn(e,t){Ci=e,Ta=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Ci===null)throw Error(z(308));Tn=e,Ci.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var nn=null;function Oa(e){nn===null?nn=[e]:nn.push(e)}function Lf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Oa(t)):(n.next=o.next,o.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kt(e,n)}return o=r.interleaved,o===null?(t.next=t,Oa(r)):(t.next=o.next,o.next=t),r.interleaved=t,kt(e,n)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}function oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ei(e,t,n,r){var o=e.updateQueue;Nt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;l=0,f=c=u=null,a=i;do{var g=a.lane,k=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,$=a;switch(g=t,k=n,$.tag){case 1:if(x=$.payload,typeof x=="function"){h=x.call(k,h,g);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=$.payload,g=typeof x=="function"?x.call(k,h,g):x,g==null)break e;h=ee({},h,g);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=k,u=h):f=f.next=k,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(u=h),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);dn|=l,e.lanes=l,e.memoizedState=h}}function ic(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var mo={},ct=Kt(mo),qr=Kt(mo),eo=Kt(mo);function rn(e){if(e===mo)throw Error(z(174));return e}function Da(e,t){switch(V(eo,t),V(qr,e),V(ct,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gs(t,e)}K(ct),V(ct,t)}function Qn(){K(ct),K(qr),K(eo)}function If(e){rn(eo.current);var t=rn(ct.current),n=gs(t,e.type);t!==n&&(V(qr,e),V(ct,n))}function Aa(e){qr.current===e&&(K(ct),K(qr))}var Z=Kt(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function ba(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var Zo=Et.ReactCurrentDispatcher,Tl=Et.ReactCurrentBatchConfig,cn=0,J=null,ae=null,de=null,zi=!1,Mr=!1,to=0,Pg=0;function ye(){throw Error(z(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!it(e[n],t[n]))return!1;return!0}function Ua(e,t,n,r,o,i){if(cn=i,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?Lg:Tg,e=n(r,o),Mr){i=0;do{if(Mr=!1,to=0,25<=i)throw Error(z(301));i+=1,de=ae=null,t.updateQueue=null,Zo.current=Ig,e=n(r,o)}while(Mr)}if(Zo.current=Pi,t=ae!==null&&ae.next!==null,cn=0,de=ae=J=null,zi=!1,t)throw Error(z(300));return e}function Ha(){var e=to!==0;return to=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=e:de=de.next=e,de}function Qe(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=de===null?J.memoizedState:de.next;if(t!==null)de=t,ae=e;else{if(e===null)throw Error(z(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},de===null?J.memoizedState=de=e:de=de.next=e}return de}function no(e,t){return typeof t=="function"?t(e):t}function Il(e){var t=Qe(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var f=c.lane;if((cn&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,l=r):u=u.next=h,J.lanes|=f,dn|=f}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,it(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,dn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ml(e){var t=Qe(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);it(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Mf(){}function Of(e,t){var n=J,r=Qe(),o=t(),i=!it(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,Wa(Af.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,ro(9,Df.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(z(349));cn&30||Ff(n,t,o)}return o}function Ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Df(e,t,n,r){t.value=n,t.getSnapshot=r,bf(t)&&Bf(e)}function Af(e,t,n){return n(function(){bf(t)&&Bf(e)})}function bf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!it(e,n)}catch{return!0}}function Bf(e){var t=kt(e,1);t!==null&&nt(t,e,1,-1)}function lc(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:no,lastRenderedState:e},t.queue=e,e=e.dispatch=Ng.bind(null,J,e),[t.memoizedState,e]}function ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Uf(){return Qe().memoizedState}function Jo(e,t,n,r){var o=st();J.flags|=e,o.memoizedState=ro(1|t,n,void 0,r===void 0?null:r)}function Qi(e,t,n,r){var o=Qe();r=r===void 0?null:r;var i=void 0;if(ae!==null){var l=ae.memoizedState;if(i=l.destroy,r!==null&&Ba(r,l.deps)){o.memoizedState=ro(t,n,i,r);return}}J.flags|=e,o.memoizedState=ro(1|t,n,i,r)}function sc(e,t){return Jo(8390656,8,e,t)}function Wa(e,t){return Qi(2048,8,e,t)}function Hf(e,t){return Qi(4,2,e,t)}function Wf(e,t){return Qi(4,4,e,t)}function Vf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gf(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4,4,Vf.bind(null,t,e),n)}function Va(){}function Qf(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Yf(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kf(e,t,n){return cn&21?(it(n,t)||(n=qd(),J.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function Rg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Tl.transition;Tl.transition={};try{e(!1),t()}finally{U=n,Tl.transition=r}}function Xf(){return Qe().memoizedState}function _g(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zf(e))Jf(t,n);else if(n=Lf(e,t,n,r),n!==null){var o=Ce();nt(n,e,r,o),qf(n,t,r)}}function Ng(e,t,n){var r=Ht(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zf(e))Jf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,it(a,l)){var u=t.interleaved;u===null?(o.next=o,Oa(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Lf(e,t,o,r),n!==null&&(o=Ce(),nt(n,e,r,o),qf(n,t,r))}}function Zf(e){var t=e.alternate;return e===J||t!==null&&t===J}function Jf(e,t){Mr=zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}var Pi={readContext:Ge,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Lg={readContext:Ge,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:sc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4194308,4,Vf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Jo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jo(4,2,e,t)},useMemo:function(e,t){var n=st();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=st();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_g.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:lc,useDebugValue:Va,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=lc(!1),t=e[0];return e=Rg.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,o=st();if(X){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),fe===null)throw Error(z(349));cn&30||Ff(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,sc(Af.bind(null,r,i,e),[e]),r.flags|=2048,ro(9,Df.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=st(),t=fe.identifierPrefix;if(X){var n=vt,r=yt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=to++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tg={readContext:Ge,useCallback:Qf,useContext:Ge,useEffect:Wa,useImperativeHandle:Gf,useInsertionEffect:Hf,useLayoutEffect:Wf,useMemo:Yf,useReducer:Il,useRef:Uf,useState:function(){return Il(no)},useDebugValue:Va,useDeferredValue:function(e){var t=Qe();return Kf(t,ae.memoizedState,e)},useTransition:function(){var e=Il(no)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:Of,useId:Xf,unstable_isNewReconciler:!1},Ig={readContext:Ge,useCallback:Qf,useContext:Ge,useEffect:Wa,useImperativeHandle:Gf,useInsertionEffect:Hf,useLayoutEffect:Wf,useMemo:Yf,useReducer:Ml,useRef:Uf,useState:function(){return Ml(no)},useDebugValue:Va,useDeferredValue:function(e){var t=Qe();return ae===null?t.memoizedState=e:Kf(t,ae.memoizedState,e)},useTransition:function(){var e=Ml(no)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Mf,useSyncExternalStore:Of,useId:Xf,unstable_isNewReconciler:!1};function Ze(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yi={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=Ht(e),i=xt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(nt(t,e,o,r),Xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=Ht(e),i=xt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(nt(t,e,o,r),Xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Ht(e),o=xt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(nt(t,e,r,n),Xo(t,e,r))}};function ac(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(o,i):!0}function ep(e,t,n){var r=!1,o=Qt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(o=Ne(t)?an:$e.current,r=t.contextTypes,i=(r=r!=null)?Wn(e,o):Qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function Ds(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ge(i):(i=Ne(t)?an:$e.current,o.context=Wn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fs(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yi.enqueueReplaceState(o,o.state,null),Ei(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Yn(e,t){try{var n="",r=t;do n+=am(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function As(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mg=typeof WeakMap=="function"?WeakMap:Map;function tp(e,t,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_i||(_i=!0,Ks=r),As(e,t)},n}function np(e,t,n){n=xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){As(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){As(e,t),typeof r!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Kg.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=xt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var Og=Et.ReactCurrentOwner,Re=!1;function ke(e,t,n,r){t.child=e===null?Nf(t,null,n,r):Gn(t,e.child,n,r)}function pc(e,t,n,r,o){n=n.render;var i=t.ref;return bn(t,o),r=Ua(e,t,n,r,i,o),n=Ha(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(X&&n&&_a(t),t.flags|=1,ke(e,t,r,o),t.child)}function hc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,rp(e,t,i,r,o)):(e=ni(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(l,r)&&e.ref===t.ref)return St(e,t,o)}return t.flags|=1,e=Wt(i,r),e.ref=t.ref,e.return=t,t.child=e}function rp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Kr(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,St(e,t,o)}return bs(e,t,n,r,o)}function op(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Mn,Me),Me|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Mn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Mn,Me),Me|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Mn,Me),Me|=r;return ke(e,t,o,n),t.child}function ip(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bs(e,t,n,r,o){var i=Ne(n)?an:$e.current;return i=Wn(t,i),bn(t,o),n=Ua(e,t,n,r,i,o),r=Ha(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(X&&r&&_a(t),t.flags|=1,ke(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(Ne(n)){var i=!0;wi(t)}else i=!1;if(bn(t,o),t.stateNode===null)qo(e,t),ep(t,n,r),Ds(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=Ne(n)?an:$e.current,c=Wn(t,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&uc(t,l,r,c),Nt=!1;var g=t.memoizedState;l.state=g,Ei(t,r,l,o),u=t.memoizedState,a!==r||g!==u||_e.current||Nt?(typeof f=="function"&&(Fs(t,n,f,r),u=t.memoizedState),(a=Nt||ac(t,n,a,r,g,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Tf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ze(t.type,a),l.props=c,h=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ge(u):(u=Ne(n)?an:$e.current,u=Wn(t,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||g!==u)&&uc(t,l,r,u),Nt=!1,g=t.memoizedState,l.state=g,Ei(t,r,l,o);var x=t.memoizedState;a!==h||g!==x||_e.current||Nt?(typeof k=="function"&&(Fs(t,n,k,r),x=t.memoizedState),(c=Nt||ac(t,n,c,r,g,x,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Bs(e,t,n,r,i,o)}function Bs(e,t,n,r,o,i){ip(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&ec(t,n,!1),St(e,t,i);r=t.stateNode,Og.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Gn(t,e.child,null,i),t.child=Gn(t,null,a,i)):ke(e,t,a,i),t.memoizedState=r.state,o&&ec(t,n,!0),t.child}function lp(e){var t=e.stateNode;t.pendingContext?qu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qu(e,t.context,!1),Da(e,t.containerInfo)}function gc(e,t,n,r,o){return Vn(),La(o),t.flags|=256,ke(e,t,n,r),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0};function Hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function sp(e,t,n){var r=t.pendingProps,o=Z.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Z,o&1),e===null)return Ms(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Zi(l,r,0,null),e=ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Hs(n),t.memoizedState=Us,e):Ga(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Fg(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Wt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Wt(a,i):(i=ln(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Hs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Us,r}return i=e.child,e=i.sibling,r=Wt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ga(e,t){return t=Zi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&La(r),Gn(t,e.child,null,n),e=Ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fg(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ol(Error(z(422))),Mo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Zi({mode:"visible",children:r.children},o,0,null),i=ln(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Gn(t,e.child,null,l),t.child.memoizedState=Hs(l),t.memoizedState=Us,i);if(!(t.mode&1))return Mo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=Ol(i,r,void 0),Mo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Re||a){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kt(e,o),nt(r,e,o,-1))}return Ja(),r=Ol(Error(z(421))),Mo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Xg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Oe=bt(o.nextSibling),Fe=t,X=!0,et=null,e!==null&&(Ue[He++]=yt,Ue[He++]=vt,Ue[He++]=un,yt=e.id,vt=e.overflow,un=t),t=Ga(t,r.children),t.flags|=4096,t)}function yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Os(e.return,t,n)}function Fl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function ap(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ke(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ji(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Fl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ji(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Fl(t,!0,n,null,i);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dg(e,t,n){switch(t.tag){case 3:lp(t),Vn();break;case 5:If(t);break;case 1:Ne(t.type)&&wi(t);break;case 4:Da(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Si,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?sp(e,t,n):(V(Z,Z.current&1),e=St(e,t,n),e!==null?e.sibling:null);V(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ap(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,op(e,t,n)}return St(e,t,n)}var up,Ws,cp,dp;up=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ws=function(){};cp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(ct.current);var i=null;switch(n){case"input":o=fs(e,o),r=fs(e,r),i=[];break;case"select":o=ee({},o,{value:void 0}),r=ee({},r,{value:void 0}),i=[];break;case"textarea":o=ms(e,o),r=ms(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vi)}ys(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ur.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Q("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};dp=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ag(e,t,n){var r=t.pendingProps;switch(Na(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ne(t.type)&&xi(),ve(t),null;case 3:return r=t.stateNode,Qn(),K(_e),K($e),ba(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(To(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Js(et),et=null))),Ws(e,t),ve(t),null;case 5:Aa(t);var o=rn(eo.current);if(n=t.type,e!==null&&t.stateNode!=null)cp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return ve(t),null}if(e=rn(ct.current),To(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[at]=t,r[Jr]=i,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<Er.length;o++)Q(Er[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":ju(r,i),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Q("invalid",r);break;case"textarea":Pu(r,i),Q("invalid",r)}ys(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Lo(r.textContent,a,e),o=["children",""+a]):Ur.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":Co(r),zu(r,i,!0);break;case"textarea":Co(r),Ru(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[at]=t,e[Jr]=r,up(e,t,!1,!1),t.stateNode=e;e:{switch(l=vs(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<Er.length;o++)Q(Er[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":ju(e,r),o=fs(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Pu(e,r),o=ms(e,r),Q("invalid",e);break;default:o=r}ys(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Bd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ad(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Hr(e,u):typeof u=="number"&&Hr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ur.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Q("scroll",e):u!=null&&ga(e,i,u,l))}switch(n){case"input":Co(e),zu(e,r,!1);break;case"textarea":Co(e),Ru(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?On(e,!!r.multiple,i,!1):r.defaultValue!=null&&On(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=vi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)dp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=rn(eo.current),rn(ct.current),To(t)){if(r=t.stateNode,n=t.memoizedProps,r[at]=t,(i=r.nodeValue!==n)&&(e=Fe,e!==null))switch(e.tag){case 3:Lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[at]=t,t.stateNode=r}return ve(t),null;case 13:if(K(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Oe!==null&&t.mode&1&&!(t.flags&128))Rf(),Vn(),t.flags|=98560,i=!1;else if(i=To(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[at]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else et!==null&&(Js(et),et=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?ce===0&&(ce=3):Ja())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Qn(),Ws(e,t),e===null&&Xr(t.stateNode.containerInfo),ve(t),null;case 10:return Ma(t.type._context),ve(t),null;case 17:return Ne(t.type)&&xi(),ve(t),null;case 19:if(K(Z),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)pr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ji(e),l!==null){for(t.flags|=128,pr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Z,Z.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>Kn&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ji(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!X)return ve(t),null}else 2*re()-i.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,n=Z.current,V(Z,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function bg(e,t){switch(Na(t),t.tag){case 1:return Ne(t.type)&&xi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),K(_e),K($e),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Aa(t),null;case 13:if(K(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Z),null;case 4:return Qn(),null;case 10:return Ma(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var Oo=!1,xe=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,N=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Vs(e,t,n){try{n()}catch(r){ne(e,t,r)}}var vc=!1;function Ug(e,t){if(Ps=mi,e=gf(),Ra(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,f=0,h=e,g=null;t:for(;;){for(var k;h!==n||o!==0&&h.nodeType!==3||(a=l+o),h!==i||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(k=h.firstChild)!==null;)g=h,h=k;for(;;){if(h===e)break t;if(g===n&&++c===o&&(a=l),g===i&&++f===r&&(u=l),(k=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rs={focusedElem:e,selectionRange:n},mi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var $=x.memoizedProps,j=x.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?$:Ze(t.type,$),j);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(S){ne(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=vc,vc=!1,x}function Or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Vs(t,n,i)}o=o.next}while(o!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Gs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fp(e){var t=e.alternate;t!==null&&(e.alternate=null,fp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Jr],delete t[Ls],delete t[Cg],delete t[Eg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pp(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vi));else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}var pe=null,Je=!1;function Pt(e,t,n){for(n=n.child;n!==null;)hp(e,t,n),n=n.sibling}function hp(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(Bi,n)}catch{}switch(n.tag){case 5:xe||In(n,t);case 6:var r=pe,o=Je;pe=null,Pt(e,t,n),pe=r,Je=o,pe!==null&&(Je?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(Je?(e=pe,n=n.stateNode,e.nodeType===8?_l(e.parentNode,n):e.nodeType===1&&_l(e,n),Qr(e)):_l(pe,n.stateNode));break;case 4:r=pe,o=Je,pe=n.stateNode.containerInfo,Je=!0,Pt(e,t,n),pe=r,Je=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Vs(n,t,l),o=o.next}while(o!==r)}Pt(e,t,n);break;case 1:if(!xe&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ne(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Pt(e,t,n),xe=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function wc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bg),t.forEach(function(r){var o=Zg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Xe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,Je=!1;break e;case 3:pe=a.stateNode.containerInfo,Je=!0;break e;case 4:pe=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(pe===null)throw Error(z(160));hp(i,l,o),pe=null,Je=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ne(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mp(t,e),t=t.sibling}function mp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Xe(t,e),lt(e),r&4){try{Or(3,e,e.return),Ki(3,e)}catch($){ne(e,e.return,$)}try{Or(5,e,e.return)}catch($){ne(e,e.return,$)}}break;case 1:Xe(t,e),lt(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(Xe(t,e),lt(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var o=e.stateNode;try{Hr(o,"")}catch($){ne(e,e.return,$)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Od(o,i),vs(a,l);var c=vs(a,i);for(l=0;l<u.length;l+=2){var f=u[l],h=u[l+1];f==="style"?Bd(o,h):f==="dangerouslySetInnerHTML"?Ad(o,h):f==="children"?Hr(o,h):ga(o,f,h,c)}switch(a){case"input":ps(o,i);break;case"textarea":Fd(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?On(o,!!i.multiple,k,!1):g!==!!i.multiple&&(i.defaultValue!=null?On(o,!!i.multiple,i.defaultValue,!0):On(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jr]=i}catch($){ne(e,e.return,$)}}break;case 6:if(Xe(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch($){ne(e,e.return,$)}}break;case 3:if(Xe(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch($){ne(e,e.return,$)}break;case 4:Xe(t,e),lt(e);break;case 13:Xe(t,e),lt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ka=re())),r&4&&wc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(c=xe)||f,Xe(t,e),xe=c):Xe(t,e),lt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(h=N=f;N!==null;){switch(g=N,k=g.child,g.tag){case 0:case 11:case 14:case 15:Or(4,g,g.return);break;case 1:In(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch($){ne(r,n,$)}}break;case 5:In(g,g.return);break;case 22:if(g.memoizedState!==null){kc(h);continue}}k!==null?(k.return=g,N=k):kc(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{o=h.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=bd("display",l))}catch($){ne(e,e.return,$)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch($){ne(e,e.return,$)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Xe(t,e),lt(e),r&4&&wc(e);break;case 21:break;default:Xe(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(pp(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Hr(o,""),r.flags&=-33);var i=xc(e);Ys(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=xc(e);Qs(e,a,l);break;default:throw Error(z(161))}}catch(u){ne(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hg(e,t,n){N=e,gp(e)}function gp(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Oo;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||xe;a=Oo;var c=xe;if(Oo=l,(xe=u)&&!c)for(N=o;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?Sc(o):u!==null?(u.return=l,N=u):Sc(o);for(;i!==null;)N=i,gp(i),i=i.sibling;N=o,Oo=a,xe=c}$c(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):$c(e)}}function $c(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ze(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ic(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ic(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Qr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}xe||t.flags&512&&Gs(t)}catch(g){ne(t,t.return,g)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function kc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Sc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ki(4,t)}catch(u){ne(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ne(t,o,u)}}var i=t.return;try{Gs(t)}catch(u){ne(t,i,u)}break;case 5:var l=t.return;try{Gs(t)}catch(u){ne(t,l,u)}}}catch(u){ne(t,t.return,u)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var Wg=Math.ceil,Ri=Et.ReactCurrentDispatcher,Qa=Et.ReactCurrentOwner,Ve=Et.ReactCurrentBatchConfig,A=0,fe=null,le=null,he=0,Me=0,Mn=Kt(0),ce=0,oo=null,dn=0,Xi=0,Ya=0,Fr=null,Pe=null,Ka=0,Kn=1/0,ht=null,_i=!1,Ks=null,Ut=null,Fo=!1,Mt=null,Ni=0,Dr=0,Xs=null,ei=-1,ti=0;function Ce(){return A&6?re():ei!==-1?ei:ei=re()}function Ht(e){return e.mode&1?A&2&&he!==0?he&-he:zg.transition!==null?(ti===0&&(ti=qd()),ti):(e=U,e!==0||(e=window.event,e=e===void 0?16:sf(e.type)),e):1}function nt(e,t,n,r){if(50<Dr)throw Dr=0,Xs=null,Error(z(185));fo(e,n,r),(!(A&2)||e!==fe)&&(e===fe&&(!(A&2)&&(Xi|=n),ce===4&&Tt(e,he)),Le(e,r),n===1&&A===0&&!(t.mode&1)&&(Kn=re()+500,Gi&&Xt()))}function Le(e,t){var n=e.callbackNode;zm(e,t);var r=hi(e,e===fe?he:0);if(r===0)n!==null&&Lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lu(n),t===1)e.tag===0?jg(Cc.bind(null,e)):jf(Cc.bind(null,e)),kg(function(){!(A&6)&&Xt()}),n=null;else{switch(ef(r)){case 1:n=$a;break;case 4:n=Zd;break;case 16:n=pi;break;case 536870912:n=Jd;break;default:n=pi}n=Cp(n,yp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function yp(e,t){if(ei=-1,ti=0,A&6)throw Error(z(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=hi(e,e===fe?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var o=A;A|=2;var i=xp();(fe!==e||he!==t)&&(ht=null,Kn=re()+500,on(e,t));do try{Qg();break}catch(a){vp(e,a)}while(!0);Ia(),Ri.current=i,A=o,le!==null?t=0:(fe=null,he=0,t=ce)}if(t!==0){if(t===2&&(o=Ss(e),o!==0&&(r=o,t=Zs(e,o))),t===1)throw n=oo,on(e,0),Tt(e,r),Le(e,re()),n;if(t===6)Tt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Vg(o)&&(t=Li(e,r),t===2&&(i=Ss(e),i!==0&&(r=i,t=Zs(e,i))),t===1))throw n=oo,on(e,0),Tt(e,r),Le(e,re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:qt(e,Pe,ht);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=Ka+500-re(),10<t)){if(hi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ns(qt.bind(null,e,Pe,ht),t);break}qt(e,Pe,ht);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-tt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wg(r/1960))-r,10<r){e.timeoutHandle=Ns(qt.bind(null,e,Pe,ht),r);break}qt(e,Pe,ht);break;case 5:qt(e,Pe,ht);break;default:throw Error(z(329))}}}return Le(e,re()),e.callbackNode===n?yp.bind(null,e):null}function Zs(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=Li(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Js(t)),e}function Js(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Vg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!it(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Ya,t&=~Xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function Cc(e){if(A&6)throw Error(z(327));Bn();var t=hi(e,0);if(!(t&1))return Le(e,re()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=Ss(e);r!==0&&(t=r,n=Zs(e,r))}if(n===1)throw n=oo,on(e,0),Tt(e,t),Le(e,re()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,Pe,ht),Le(e,re()),null}function Xa(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Kn=re()+500,Gi&&Xt())}}function fn(e){Mt!==null&&Mt.tag===0&&!(A&6)&&Bn();var t=A;A|=1;var n=Ve.transition,r=U;try{if(Ve.transition=null,U=1,e)return e()}finally{U=r,Ve.transition=n,A=t,!(A&6)&&Xt()}}function Za(){Me=Mn.current,K(Mn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$g(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Na(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xi();break;case 3:Qn(),K(_e),K($e),ba();break;case 5:Aa(r);break;case 4:Qn();break;case 13:K(Z);break;case 19:K(Z);break;case 10:Ma(r.type._context);break;case 22:case 23:Za()}n=n.return}if(fe=e,le=e=Wt(e.current,null),he=Me=t,ce=0,oo=null,Ya=Xi=dn=0,Pe=Fr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}nn=null}return e}function vp(e,t){do{var n=le;try{if(Ia(),Zo.current=Pi,zi){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}zi=!1}if(cn=0,de=ae=J=null,Mr=!1,to=0,Qa.current=null,n===null||n.return===null){ce=1,oo=t,le=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=he,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=dc(l);if(k!==null){k.flags&=-257,fc(k,l,a,i,t),k.mode&1&&cc(i,c,t),t=k,u=c;var x=t.updateQueue;if(x===null){var $=new Set;$.add(u),t.updateQueue=$}else x.add(u);break e}else{if(!(t&1)){cc(i,c,t),Ja();break e}u=Error(z(426))}}else if(X&&a.mode&1){var j=dc(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),fc(j,l,a,i,t),La(Yn(u,a));break e}}i=u=Yn(u,a),ce!==4&&(ce=2),Fr===null?Fr=[i]:Fr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=tp(i,u,t);oc(i,m);break e;case 1:a=u;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ut===null||!Ut.has(y)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=np(i,a,t);oc(i,S);break e}}i=i.return}while(i!==null)}$p(n)}catch(E){t=E,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function xp(){var e=Ri.current;return Ri.current=Pi,e===null?Pi:e}function Ja(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||!(dn&268435455)&&!(Xi&268435455)||Tt(fe,he)}function Li(e,t){var n=A;A|=2;var r=xp();(fe!==e||he!==t)&&(ht=null,on(e,t));do try{Gg();break}catch(o){vp(e,o)}while(!0);if(Ia(),A=n,Ri.current=r,le!==null)throw Error(z(261));return fe=null,he=0,ce}function Gg(){for(;le!==null;)wp(le)}function Qg(){for(;le!==null&&!vm();)wp(le)}function wp(e){var t=Sp(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?$p(e):le=t,Qa.current=null}function $p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bg(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}else if(n=Ag(n,t,Me),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function qt(e,t,n){var r=U,o=Ve.transition;try{Ve.transition=null,U=1,Yg(e,t,n,r)}finally{Ve.transition=o,U=r}return null}function Yg(e,t,n,r){do Bn();while(Mt!==null);if(A&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Pm(e,i),e===fe&&(le=fe=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fo||(Fo=!0,Cp(pi,function(){return Bn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ve.transition,Ve.transition=null;var l=U;U=1;var a=A;A|=4,Qa.current=null,Ug(e,n),mp(n,e),hg(Rs),mi=!!Ps,Rs=Ps=null,e.current=n,Hg(n),xm(),A=a,U=l,Ve.transition=i}else e.current=n;if(Fo&&(Fo=!1,Mt=e,Ni=o),i=e.pendingLanes,i===0&&(Ut=null),km(n.stateNode),Le(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(_i)throw _i=!1,e=Ks,Ks=null,e;return Ni&1&&e.tag!==0&&Bn(),i=e.pendingLanes,i&1?e===Xs?Dr++:(Dr=0,Xs=e):Dr=0,Xt(),null}function Bn(){if(Mt!==null){var e=ef(Ni),t=Ve.transition,n=U;try{if(Ve.transition=null,U=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,Ni=0,A&6)throw Error(z(331));var o=A;for(A|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(N=c;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:Or(8,f,i)}var h=f.child;if(h!==null)h.return=f,N=h;else for(;N!==null;){f=N;var g=f.sibling,k=f.return;if(fp(f),f===c){N=null;break}if(g!==null){g.return=k,N=g;break}N=k}}}var x=i.alternate;if(x!==null){var $=x.child;if($!==null){x.child=null;do{var j=$.sibling;$.sibling=null,$=j}while($!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Or(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,N=m;break e}N=i.return}}var p=e.current;for(N=p;N!==null;){l=N;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,N=y;else e:for(l=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ki(9,a)}}catch(E){ne(a,a.return,E)}if(a===l){N=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,N=S;break e}N=a.return}}if(A=o,Xt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(Bi,e)}catch{}r=!0}return r}finally{U=n,Ve.transition=t}}return!1}function Ec(e,t,n){t=Yn(n,t),t=tp(e,t,1),e=Bt(e,t,1),t=Ce(),e!==null&&(fo(e,1,t),Le(e,t))}function ne(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ut===null||!Ut.has(r))){e=Yn(n,e),e=np(t,e,1),t=Bt(t,e,1),e=Ce(),t!==null&&(fo(t,1,e),Le(t,e));break}}t=t.return}}function Kg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(he&n)===n&&(ce===4||ce===3&&(he&130023424)===he&&500>re()-Ka?on(e,0):Ya|=n),Le(e,t)}function kp(e,t){t===0&&(e.mode&1?(t=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):t=1);var n=Ce();e=kt(e,t),e!==null&&(fo(e,t,n),Le(e,n))}function Xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),kp(e,n)}function Zg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),kp(e,n)}var Sp;Sp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,Dg(e,t,n);Re=!!(e.flags&131072)}else Re=!1,X&&t.flags&1048576&&zf(t,ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var o=Wn(t,$e.current);bn(t,n),o=Ua(null,t,r,e,o,n);var i=Ha();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,wi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fa(t),o.updater=Yi,t.stateNode=o,o._reactInternals=t,Ds(t,r,e,n),t=Bs(null,t,r,!0,i,n)):(t.tag=0,X&&i&&_a(t),ke(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=qg(r),e=Ze(r,e),o){case 0:t=bs(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=pc(null,t,r,e,n);break e;case 14:t=hc(null,t,r,Ze(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),bs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),mc(e,t,r,o,n);case 3:e:{if(lp(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Tf(e,t),Ei(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Yn(Error(z(423)),t),t=gc(e,t,r,n,o);break e}else if(r!==o){o=Yn(Error(z(424)),t),t=gc(e,t,r,n,o);break e}else for(Oe=bt(t.stateNode.containerInfo.firstChild),Fe=t,X=!0,et=null,n=Nf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===o){t=St(e,t,n);break e}ke(e,t,r,n)}t=t.child}return t;case 5:return If(t),e===null&&Ms(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,_s(r,o)?l=null:i!==null&&_s(r,i)&&(t.flags|=32),ip(e,t),ke(e,t,l,n),t.child;case 6:return e===null&&Ms(t),null;case 13:return sp(e,t,n);case 4:return Da(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):ke(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),pc(e,t,r,o,n);case 7:return ke(e,t,t.pendingProps,n),t.child;case 8:return ke(e,t,t.pendingProps.children,n),t.child;case 12:return ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,V(Si,r._currentValue),r._currentValue=l,i!==null)if(it(i.value,l)){if(i.children===o.children&&!_e.current){t=St(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Os(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Os(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ke(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,bn(t,n),o=Ge(o),r=r(o),t.flags|=1,ke(e,t,r,n),t.child;case 14:return r=t.type,o=Ze(r,t.pendingProps),o=Ze(r.type,o),hc(e,t,r,o,n);case 15:return rp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ze(r,o),qo(e,t),t.tag=1,Ne(r)?(e=!0,wi(t)):e=!1,bn(t,n),ep(t,r,o),Ds(t,r,o,n),Bs(null,t,r,!0,e,n);case 19:return ap(e,t,n);case 22:return op(e,t,n)}throw Error(z(156,t.tag))};function Cp(e,t){return Xd(e,t)}function Jg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Jg(e,t,n,r)}function qa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qg(e){if(typeof e=="function")return qa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===va)return 11;if(e===xa)return 14}return 2}function Wt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ni(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")qa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case En:return ln(n.children,o,i,t);case ya:l=8,o|=8;break;case as:return e=We(12,n,t,o|2),e.elementType=as,e.lanes=i,e;case us:return e=We(13,n,t,o),e.elementType=us,e.lanes=i,e;case cs:return e=We(19,n,t,o),e.elementType=cs,e.lanes=i,e;case Td:return Zi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nd:l=10;break e;case Ld:l=9;break e;case va:l=11;break e;case xa:l=14;break e;case _t:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=We(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Zi(e,t,n,r){return e=We(22,e,r,t),e.elementType=Td,e.lanes=n,e.stateNode={isHidden:!1},e}function Dl(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Al(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eu(e,t,n,r,o,i,l,a,u){return e=new e0(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=We(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(i),e}function t0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ep(e){if(!e)return Qt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Ef(e,n,t)}return t}function jp(e,t,n,r,o,i,l,a,u){return e=eu(n,r,!0,e,o,i,l,a,u),e.context=Ep(null),n=e.current,r=Ce(),o=Ht(n),i=xt(r,o),i.callback=t??null,Bt(n,i,o),e.current.lanes=o,fo(e,o,r),Le(e,r),e}function Ji(e,t,n,r){var o=t.current,i=Ce(),l=Ht(o);return n=Ep(n),t.context===null?t.context=n:t.pendingContext=n,t=xt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,l),e!==null&&(nt(e,o,l,i),Xo(e,o,l)),l}function Ti(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tu(e,t){jc(e,t),(e=e.alternate)&&jc(e,t)}function n0(){return null}var zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}qi.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Ji(e,t,null,null)};qi.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Ji(null,e,null,null)}),t[$t]=null}};function qi(e){this._internalRoot=e}qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=rf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&lf(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function r0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Ti(l);i.call(c)}}var l=jp(t,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=l,e[$t]=l.current,Xr(e.nodeType===8?e.parentNode:e),fn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Ti(u);a.call(c)}}var u=eu(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=u,e[$t]=u.current,Xr(e.nodeType===8?e.parentNode:e),fn(function(){Ji(t,u,n,r)}),u}function tl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=Ti(l);a.call(u)}}Ji(t,l,e,o)}else l=r0(n,t,e,o,r);return Ti(l)}tf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(ka(t,n|1),Le(t,re()),!(A&6)&&(Kn=re()+500,Xt()))}break;case 13:fn(function(){var r=kt(e,1);if(r!==null){var o=Ce();nt(r,e,1,o)}}),tu(e,1)}};Sa=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Ce();nt(t,e,134217728,n)}tu(e,134217728)}};nf=function(e){if(e.tag===13){var t=Ht(e),n=kt(e,t);if(n!==null){var r=Ce();nt(n,e,t,r)}tu(e,t)}};rf=function(){return U};of=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};ws=function(e,t,n){switch(t){case"input":if(ps(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vi(r);if(!o)throw Error(z(90));Md(r),ps(r,o)}}}break;case"textarea":Fd(e,n);break;case"select":t=n.value,t!=null&&On(e,!!n.multiple,t,!1)}};Wd=Xa;Vd=fn;var o0={usingClientEntryPoint:!1,Events:[ho,Rn,Vi,Ud,Hd,Xa]},hr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i0={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yd(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||n0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Do=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Do.isDisabled&&Do.supportsFiber)try{Bi=Do.inject(i0),ut=Do}catch{}}Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;Ae.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(t))throw Error(z(200));return t0(e,t,null,n)};Ae.createRoot=function(e,t){if(!ru(e))throw Error(z(299));var n=!1,r="",o=zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=eu(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,Xr(e.nodeType===8?e.parentNode:e),new nu(t)};Ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=Yd(t),e=e===null?null:e.stateNode,e};Ae.flushSync=function(e){return fn(e)};Ae.hydrate=function(e,t,n){if(!el(t))throw Error(z(200));return tl(null,e,t,!0,n)};Ae.hydrateRoot=function(e,t,n){if(!ru(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=zp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=jp(t,null,e,1,n??null,o,!1,i,l),e[$t]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qi(t)};Ae.render=function(e,t,n){if(!el(t))throw Error(z(200));return tl(null,e,t,!1,n)};Ae.unmountComponentAtNode=function(e){if(!el(e))throw Error(z(40));return e._reactRootContainer?(fn(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};Ae.unstable_batchedUpdates=Xa;Ae.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return tl(e,t,n,!1,r)};Ae.version="18.3.1-next-f1338f8080-20240426";function Pp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp)}catch(e){console.error(e)}}Pp(),zd.exports=Ae;var l0=zd.exports,Rp,Pc=l0;Rp=Pc.createRoot,Pc.hydrateRoot;/**
 * react-router v7.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Rc="popstate";function _c(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function s0(e={}){function t(r,o){var c;let i=(c=o.state)==null?void 0:c.masked,{pathname:l,search:a,hash:u}=i||r.location;return qs("",{pathname:l,search:a,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default",i?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:io(o)}return u0(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function dt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function a0(){return Math.random().toString(36).substring(2,10)}function Nc(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function qs(e,t,n=null,r,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?nr(t):t,state:n,key:t&&t.key||r||a0(),mask:o}}function io({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function nr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function u0(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a="POP",u=null,c=f();c==null&&(c=0,l.replaceState({...l.state,idx:c},""));function f(){return(l.state||{idx:null}).idx}function h(){a="POP";let j=f(),m=j==null?null:j-c;c=j,u&&u({action:a,location:$.location,delta:m})}function g(j,m){a="PUSH";let p=_c(j)?j:qs($.location,j,m);c=f()+1;let y=Nc(p,c),S=$.createHref(p.mask||p);try{l.pushState(y,"",S)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(S)}i&&u&&u({action:a,location:$.location,delta:1})}function k(j,m){a="REPLACE";let p=_c(j)?j:qs($.location,j,m);c=f();let y=Nc(p,c),S=$.createHref(p.mask||p);l.replaceState(y,"",S),i&&u&&u({action:a,location:$.location,delta:0})}function x(j){return c0(j)}let $={get action(){return a},get location(){return e(o,l)},listen(j){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Rc,h),u=j,()=>{o.removeEventListener(Rc,h),u=null}},createHref(j){return t(o,j)},createURL:x,encodeLocation(j){let m=x(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:k,go(j){return l.go(j)}};return $}function c0(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),q(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:io(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function _p(e,t,n="/"){return d0(e,t,n,!1)}function d0(e,t,n,r,o){let i=typeof t=="string"?nr(t):t,l=Ct(i.pathname||"/",n);if(l==null)return null;let a=f0(e),u=null,c=C0(l);for(let f=0;u==null&&f<a.length;++f)u=k0(a[f],c,r);return u}function f0(e){let t=Np(e);return p0(t),t}function Np(e,t=[],n=[],r="",o=!1){let i=(l,a,u=o,c)=>{let f={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;q(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let h=rt([r,f.relativePath]),g=n.concat(f);l.children&&l.children.length>0&&(q(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Np(l.children,t,g,h,u)),!(l.path==null&&!l.index)&&t.push({path:h,score:w0(h,l.index),routesMeta:g})};return e.forEach((l,a)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))i(l,a);else for(let c of Lp(l.path))i(l,a,!0,c)}),t}function Lp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Lp(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function p0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var h0=/^:[\w-]+$/,m0=3,g0=2,y0=1,v0=10,x0=-2,Lc=e=>e==="*";function w0(e,t){let n=e.split("/"),r=n.length;return n.some(Lc)&&(r+=x0),t&&(r+=g0),n.filter(o=>!Lc(o)).reduce((o,i)=>o+(h0.test(i)?m0:i===""?y0:v0),r)}function $0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function k0(e,t,n=!1){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=Ii({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),g=u.route;if(!h&&c&&n&&!r[r.length-1].route.index&&(h=Ii({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!h)return null;Object.assign(o,h.params),l.push({params:o,pathname:rt([i,h.pathname]),pathnameBase:P0(rt([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=rt([i,h.pathnameBase]))}return l}function Ii(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=S0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,{paramName:f,isOptional:h},g)=>{if(f==="*"){let x=a[g]||"";l=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const k=a[g];return h&&!k?c[f]=void 0:c[f]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function S0(e,t=!1,n=!0){dt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u,c,f)=>{if(r.push({paramName:a,isOptional:u!=null}),u){let h=f.charAt(c+l.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function C0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return dt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ct(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var E0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function j0(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?nr(e):e,i;return n?(n=Ip(n),n.startsWith("/")?i=Tc(n.substring(1),"/"):i=Tc(n,t)):i=t,{pathname:i,search:R0(r),hash:_0(o)}}function Tc(e,t){let n=Mi(t).split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function bl(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Tp(e){let t=z0(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function ou(e,t,n,r=!1){let o;typeof e=="string"?o=nr(e):(o={...e},q(!o.pathname||!o.pathname.includes("?"),bl("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),bl("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),bl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;o.pathname=g.join("/")}a=h>=0?t[h]:"/"}let u=j0(o,a),c=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}var Ip=e=>e.replace(/\/\/+/g,"/"),rt=e=>Ip(e.join("/")),Mi=e=>e.replace(/\/+$/,""),P0=e=>Mi(e).replace(/^\/*/,"/"),R0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,N0=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function L0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function T0(e){let t=e.map(n=>n.route.path).filter(Boolean);return rt(t)||"/"}var Mp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Op(e,t){let n=e;if(typeof n!="string"||!E0.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(Mp)try{let i=new URL(window.location.href),l=n.startsWith("//")?new URL(i.protocol+n):new URL(n),a=Ct(l.pathname,t);l.origin===i.origin&&a!=null?n=a+l.search+l.hash:o=!0}catch{dt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Fp=["POST","PUT","PATCH","DELETE"];new Set(Fp);var I0=["GET",...Fp];new Set(I0);var rr=v.createContext(null);rr.displayName="DataRouter";var nl=v.createContext(null);nl.displayName="DataRouterState";var Dp=v.createContext(!1);function M0(){return v.useContext(Dp)}var Ap=v.createContext({isTransitioning:!1});Ap.displayName="ViewTransition";var O0=v.createContext(new Map);O0.displayName="Fetchers";var F0=v.createContext(null);F0.displayName="Await";var Ke=v.createContext(null);Ke.displayName="Navigation";var go=v.createContext(null);go.displayName="Location";var ft=v.createContext({outlet:null,matches:[],isDataRoute:!1});ft.displayName="Route";var iu=v.createContext(null);iu.displayName="RouteError";var bp="REACT_ROUTER_ERROR",D0="REDIRECT",A0="ROUTE_ERROR_RESPONSE";function b0(e){if(e.startsWith(`${bp}:${D0}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function B0(e){if(e.startsWith(`${bp}:${A0}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new N0(t.status,t.statusText,t.data)}catch{}}function U0(e,{relative:t}={}){q(yo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=v.useContext(Ke),{hash:o,pathname:i,search:l}=vo(e,{relative:t}),a=i;return n!=="/"&&(a=i==="/"?n:rt([n,i])),r.createHref({pathname:a,search:l,hash:o})}function yo(){return v.useContext(go)!=null}function pt(){return q(yo(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(go).location}var Bp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Up(e){v.useContext(Ke).static||v.useLayoutEffect(e)}function Hp(){let{isDataRoute:e}=v.useContext(ft);return e?ny():H0()}function H0(){q(yo(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(rr),{basename:t,navigator:n}=v.useContext(Ke),{matches:r}=v.useContext(ft),{pathname:o}=pt(),i=JSON.stringify(Tp(r)),l=v.useRef(!1);return Up(()=>{l.current=!0}),v.useCallback((u,c={})=>{if(dt(l.current,Bp),!l.current)return;if(typeof u=="number"){n.go(u);return}let f=ou(u,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:rt([t,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[t,n,i,o,e])}v.createContext(null);function W0(){let{matches:e}=v.useContext(ft),t=e[e.length-1];return(t==null?void 0:t.params)??{}}function vo(e,{relative:t}={}){let{matches:n}=v.useContext(ft),{pathname:r}=pt(),o=JSON.stringify(Tp(n));return v.useMemo(()=>ou(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function V0(e,t){return Wp(e,t)}function Wp(e,t,n){var j;q(yo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=v.useContext(Ke),{matches:o}=v.useContext(ft),i=o[o.length-1],l=i?i.params:{},a=i?i.pathname:"/",u=i?i.pathnameBase:"/",c=i&&i.route;{let m=c&&c.path||"";Gp(a,!c||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=pt(),h;if(t){let m=typeof t=="string"?nr(t):t;q(u==="/"||((j=m.pathname)==null?void 0:j.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=f;let g=h.pathname||"/",k=g;if(u!=="/"){let m=u.replace(/^\//,"").split("/");k="/"+g.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=n&&n.state.matches.length?n.state.matches.map(m=>Object.assign(m,{route:n.manifest[m.route.id]||m.route})):_p(e,{pathname:k});dt(c||x!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),dt(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=X0(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:rt([u,r.encodeLocation?r.encodeLocation(m.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:rt([u,r.encodeLocation?r.encodeLocation(m.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathnameBase])})),o,n);return t&&$?v.createElement(go.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},$):$}function G0(){let e=ty(),t=L0(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:i},"ErrorBoundary")," or"," ",v.createElement("code",{style:i},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,l)}var Q0=v.createElement(G0,null),Vp=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=B0(e.digest);n&&(e=n)}let t=e!==void 0?v.createElement(ft.Provider,{value:this.props.routeContext},v.createElement(iu.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?v.createElement(Y0,{error:e},t):t}};Vp.contextType=Dp;var Bl=new WeakMap;function Y0({children:e,error:t}){let{basename:n}=v.useContext(Ke);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=b0(t.digest);if(r){let o=Bl.get(t);if(o)throw o;let i=Op(r.location,n);if(Mp&&!Bl.get(t))if(i.isExternal||r.reloadDocument)window.location.href=i.absoluteURL||i.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:r.replace}));throw Bl.set(t,l),l}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return e}function K0({routeContext:e,match:t,children:n}){let r=v.useContext(rr);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(ft.Provider,{value:e},n)}function X0(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,i=r==null?void 0:r.errors;if(i!=null){let f=o.findIndex(h=>h.route.id&&(i==null?void 0:i[h.route.id])!==void 0);q(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,a=-1;if(n&&r){l=r.renderFallback;for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(a=f),h.route.id){let{loaderData:g,errors:k}=r,x=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!k||k[h.route.id]===void 0);if(h.route.lazy||x){n.isStatic&&(l=!0),a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}}let u=n==null?void 0:n.onError,c=r&&u?(f,h)=>{var g,k;u(f,{location:r.location,params:((k=(g=r.matches)==null?void 0:g[0])==null?void 0:k.params)??{},pattern:T0(r.matches),errorInfo:h})}:void 0;return o.reduceRight((f,h,g)=>{let k,x=!1,$=null,j=null;r&&(k=i&&h.route.id?i[h.route.id]:void 0,$=h.route.errorElement||Q0,l&&(a<0&&g===0?(Gp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,j=null):a===g&&(x=!0,j=h.route.hydrateFallbackElement||null)));let m=t.concat(o.slice(0,g+1)),p=()=>{let y;return k?y=$:x?y=j:h.route.Component?y=v.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=f,v.createElement(K0,{match:h,routeContext:{outlet:f,matches:m,isDataRoute:r!=null},children:y})};return r&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?v.createElement(Vp,{location:r.location,revalidation:r.revalidation,component:$,error:k,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:c}):p()},null)}function lu(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Z0(e){let t=v.useContext(rr);return q(t,lu(e)),t}function J0(e){let t=v.useContext(nl);return q(t,lu(e)),t}function q0(e){let t=v.useContext(ft);return q(t,lu(e)),t}function su(e){let t=q0(e),n=t.matches[t.matches.length-1];return q(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function ey(){return su("useRouteId")}function ty(){var r;let e=v.useContext(iu),t=J0("useRouteError"),n=su("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function ny(){let{router:e}=Z0("useNavigate"),t=su("useNavigate"),n=v.useRef(!1);return Up(()=>{n.current=!0}),v.useCallback(async(o,i={})=>{dt(n.current,Bp),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Ic={};function Gp(e,t,n){!t&&!Ic[e]&&(Ic[e]=!0,dt(!1,n))}v.memo(ry);function ry({routes:e,manifest:t,future:n,state:r,isStatic:o,onError:i}){return Wp(e,void 0,{manifest:t,state:r,isStatic:o,onError:i,future:n})}function jr(e){q(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function oy({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:i=!1,useTransitions:l}){q(!yo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:a,navigator:o,static:i,useTransitions:l,future:{}}),[a,o,i,l]);typeof n=="string"&&(n=nr(n));let{pathname:c="/",search:f="",hash:h="",state:g=null,key:k="default",mask:x}=n,$=v.useMemo(()=>{let j=Ct(c,a);return j==null?null:{location:{pathname:j,search:f,hash:h,state:g,key:k,mask:x},navigationType:r}},[a,c,f,h,g,k,r,x]);return dt($!=null,`<Router basename="${a}"> is not able to match the URL "${c}${f}${h}" because it does not start with the basename, so the <Router> won't render anything.`),$==null?null:v.createElement(Ke.Provider,{value:u},v.createElement(go.Provider,{children:t,value:$}))}function iy({children:e,location:t}){return V0(ea(e),t)}function ea(e,t=[]){let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...t,o];if(r.type===v.Fragment){n.push.apply(n,ea(r.props.children,i));return}q(r.type===jr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),q(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=ea(r.props.children,i)),n.push(l)}),n}var ri="get",oi="application/x-www-form-urlencoded";function rl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ly(e){return rl(e)&&e.tagName.toLowerCase()==="button"}function sy(e){return rl(e)&&e.tagName.toLowerCase()==="form"}function ay(e){return rl(e)&&e.tagName.toLowerCase()==="input"}function uy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function cy(e,t){return e.button===0&&(!t||t==="_self")&&!uy(e)}var Ao=null;function dy(){if(Ao===null)try{new FormData(document.createElement("form"),0),Ao=!1}catch{Ao=!0}return Ao}var fy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ul(e){return e!=null&&!fy.has(e)?(dt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oi}"`),null):e}function py(e,t){let n,r,o,i,l;if(sy(e)){let a=e.getAttribute("action");r=a?Ct(a,t):null,n=e.getAttribute("method")||ri,o=Ul(e.getAttribute("enctype"))||oi,i=new FormData(e)}else if(ly(e)||ay(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||a.getAttribute("action");if(r=u?Ct(u,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||ri,o=Ul(e.getAttribute("formenctype"))||Ul(a.getAttribute("enctype"))||oi,i=new FormData(a,e),!dy()){let{name:c,type:f,value:h}=e;if(f==="image"){let g=c?`${c}.`:"";i.append(`${g}x`,"0"),i.append(`${g}y`,"0")}else c&&i.append(c,h)}}else{if(rl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ri,r=null,o=oi,l=e}return i&&o==="text/plain"&&(l=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function au(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qp(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&Ct(o.pathname,t)==="/"?o.pathname=`${Mi(t)}/_root.${r}`:o.pathname=`${Mi(o.pathname)}.${r}`,o}async function hy(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function my(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function gy(e,t,n){let r=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let l=await hy(i,n);return l.links?l.links():[]}return[]}));return wy(r.flat(1).filter(my).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Mc(e,t,n,r,o,i){let l=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,a=(u,c)=>{var f;return n[c].pathname!==u.pathname||((f=n[c].route.path)==null?void 0:f.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return i==="assets"?t.filter((u,c)=>l(u,c)||a(u,c)):i==="data"?t.filter((u,c)=>{var h;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(l(u,c)||a(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function yy(e,t,{includeHydrateFallback:n}={}){return vy(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function vy(e){return[...new Set(e)]}function xy(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function wy(e,t){let n=new Set;return new Set(t),e.reduce((r,o)=>{let i=JSON.stringify(xy(o));return n.has(i)||(n.add(i),r.push({key:i,link:o})),r},[])}function uu(){let e=v.useContext(rr);return au(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function $y(){let e=v.useContext(nl);return au(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var cu=v.createContext(void 0);cu.displayName="FrameworkContext";function du(){let e=v.useContext(cu);return au(e,"You must render this element inside a <HydratedRouter> element"),e}function ky(e,t){let n=v.useContext(cu),[r,o]=v.useState(!1),[i,l]=v.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:c,onMouseLeave:f,onTouchStart:h}=t,g=v.useRef(null);v.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let $=m=>{m.forEach(p=>{l(p.isIntersecting)})},j=new IntersectionObserver($,{threshold:.5});return g.current&&j.observe(g.current),()=>{j.disconnect()}}},[e]),v.useEffect(()=>{if(r){let $=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout($)}}},[r]);let k=()=>{o(!0)},x=()=>{o(!1),l(!1)};return n?e!=="intent"?[i,g,{}]:[i,g,{onFocus:mr(a,k),onBlur:mr(u,x),onMouseEnter:mr(c,k),onMouseLeave:mr(f,x),onTouchStart:mr(h,k)}]:[!1,g,{}]}function mr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sy({page:e,...t}){let n=M0(),{router:r}=uu(),o=v.useMemo(()=>_p(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?n?v.createElement(Ey,{page:e,matches:o,...t}):v.createElement(jy,{page:e,matches:o,...t}):null}function Cy(e){let{manifest:t,routeModules:n}=du(),[r,o]=v.useState([]);return v.useEffect(()=>{let i=!1;return gy(e,t,n).then(l=>{i||o(l)}),()=>{i=!0}},[e,t,n]),r}function Ey({page:e,matches:t,...n}){let r=pt(),{future:o}=du(),{basename:i}=uu(),l=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let a=Qp(e,i,o.unstable_trailingSlashAwareDataRequests,"rsc"),u=!1,c=[];for(let f of t)typeof f.route.shouldRevalidate=="function"?u=!0:c.push(f.route.id);return u&&c.length>0&&a.searchParams.set("_routes",c.join(",")),[a.pathname+a.search]},[i,o.unstable_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,l.map(a=>v.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...n})))}function jy({page:e,matches:t,...n}){let r=pt(),{future:o,manifest:i,routeModules:l}=du(),{basename:a}=uu(),{loaderData:u,matches:c}=$y(),f=v.useMemo(()=>Mc(e,t,c,i,r,"data"),[e,t,c,i,r]),h=v.useMemo(()=>Mc(e,t,c,i,r,"assets"),[e,t,c,i,r]),g=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let $=new Set,j=!1;if(t.forEach(p=>{var S;let y=i.routes[p.route.id];!y||!y.hasLoader||(!f.some(E=>E.route.id===p.route.id)&&p.route.id in u&&((S=l[p.route.id])!=null&&S.shouldRevalidate)||y.hasClientLoader?j=!0:$.add(p.route.id))}),$.size===0)return[];let m=Qp(e,a,o.unstable_trailingSlashAwareDataRequests,"data");return j&&$.size>0&&m.searchParams.set("_routes",t.filter(p=>$.has(p.route.id)).map(p=>p.route.id).join(",")),[m.pathname+m.search]},[a,o.unstable_trailingSlashAwareDataRequests,u,r,i,f,t,e,l]),k=v.useMemo(()=>yy(h,i),[h,i]),x=Cy(h);return v.createElement(v.Fragment,null,g.map($=>v.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...n})),k.map($=>v.createElement("link",{key:$,rel:"modulepreload",href:$,...n})),x.map(({key:$,link:j})=>v.createElement("link",{key:$,nonce:n.nonce,...j,crossOrigin:j.crossOrigin??n.crossOrigin})))}function zy(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Py=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Py&&(window.__reactRouterVersion="7.15.0")}catch{}function Ry({basename:e,children:t,useTransitions:n,window:r}){let o=v.useRef();o.current==null&&(o.current=s0({window:r,v5Compat:!0}));let i=o.current,[l,a]=v.useState({action:i.action,location:i.location}),u=v.useCallback(c=>{n===!1?a(c):v.startTransition(()=>a(c))},[n]);return v.useLayoutEffect(()=>i.listen(u),[i,u]),v.createElement(oy,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:i,useTransitions:n})}var Yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,or=v.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:i,replace:l,mask:a,state:u,target:c,to:f,preventScrollReset:h,viewTransition:g,defaultShouldRevalidate:k,...x},$){let{basename:j,navigator:m,useTransitions:p}=v.useContext(Ke),y=typeof f=="string"&&Yp.test(f),S=Op(f,j);f=S.to;let E=U0(f,{relative:o}),R=pt(),C=null;if(a){let ge=ou(a,[],R.mask?R.mask.pathname:"/",!0);j!=="/"&&(ge.pathname=ge.pathname==="/"?j:rt([j,ge.pathname])),C=m.createHref(ge)}let[P,F,I]=ky(r,x),W=Ly(f,{replace:l,mask:a,state:u,target:c,preventScrollReset:h,relative:o,viewTransition:g,defaultShouldRevalidate:k,useTransitions:p});function Te(ge){t&&t(ge),ge.defaultPrevented||W(ge)}let G=!(S.isExternal||i),ze=v.createElement("a",{...x,...I,href:(G?C:void 0)||S.absoluteURL||E,onClick:G?Te:t,ref:zy($,F),target:c,"data-discover":!y&&n==="render"?"true":void 0});return P&&!y?v.createElement(v.Fragment,null,ze,v.createElement(Sy,{page:E})):ze});or.displayName="Link";var ol=v.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:i,to:l,viewTransition:a,children:u,...c},f){let h=vo(l,{relative:c.relative}),g=pt(),k=v.useContext(nl),{navigator:x,basename:$}=v.useContext(Ke),j=k!=null&&Fy(h)&&a===!0,m=x.encodeLocation?x.encodeLocation(h).pathname:h.pathname,p=g.pathname,y=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;n||(p=p.toLowerCase(),y=y?y.toLowerCase():null,m=m.toLowerCase()),y&&$&&(y=Ct(y,$)||y);const S=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let E=p===m||!o&&p.startsWith(m)&&p.charAt(S)==="/",R=y!=null&&(y===m||!o&&y.startsWith(m)&&y.charAt(m.length)==="/"),C={isActive:E,isPending:R,isTransitioning:j},P=E?t:void 0,F;typeof r=="function"?F=r(C):F=[r,E?"active":null,R?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let I=typeof i=="function"?i(C):i;return v.createElement(or,{...c,"aria-current":P,className:F,ref:f,style:I,to:l,viewTransition:a},typeof u=="function"?u(C):u)});ol.displayName="NavLink";var _y=v.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:i,method:l=ri,action:a,onSubmit:u,relative:c,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:g,...k},x)=>{let{useTransitions:$}=v.useContext(Ke),j=My(),m=Oy(a,{relative:c}),p=l.toLowerCase()==="get"?"get":"post",y=typeof a=="string"&&Yp.test(a),S=E=>{if(u&&u(E),E.defaultPrevented)return;E.preventDefault();let R=E.nativeEvent.submitter,C=(R==null?void 0:R.getAttribute("formmethod"))||l,P=()=>j(R||E.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:o,state:i,relative:c,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:g});$&&n!==!1?v.startTransition(()=>P()):P()};return v.createElement("form",{ref:x,method:p,action:m,onSubmit:r?u:S,...k,"data-discover":!y&&e==="render"?"true":void 0})});_y.displayName="Form";function Ny(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kp(e){let t=v.useContext(rr);return q(t,Ny(e)),t}function Ly(e,{target:t,replace:n,mask:r,state:o,preventScrollReset:i,relative:l,viewTransition:a,defaultShouldRevalidate:u,useTransitions:c}={}){let f=Hp(),h=pt(),g=vo(e,{relative:l});return v.useCallback(k=>{if(cy(k,t)){k.preventDefault();let x=n!==void 0?n:io(h)===io(g),$=()=>f(e,{replace:x,mask:r,state:o,preventScrollReset:i,relative:l,viewTransition:a,defaultShouldRevalidate:u});c?v.startTransition(()=>$()):$()}},[h,f,g,n,r,o,t,e,i,l,a,u,c])}var Ty=0,Iy=()=>`__${String(++Ty)}__`;function My(){let{router:e}=Kp("useSubmit"),{basename:t}=v.useContext(Ke),n=ey(),r=e.fetch,o=e.navigate;return v.useCallback(async(i,l={})=>{let{action:a,method:u,encType:c,formData:f,body:h}=py(i,t);if(l.navigate===!1){let g=l.fetcherKey||Iy();await r(g,n,l.action||a,{defaultShouldRevalidate:l.defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:f,body:h,formMethod:l.method||u,formEncType:l.encType||c,flushSync:l.flushSync})}else await o(l.action||a,{defaultShouldRevalidate:l.defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:f,body:h,formMethod:l.method||u,formEncType:l.encType||c,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,o,t,n])}function Oy(e,{relative:t}={}){let{basename:n}=v.useContext(Ke),r=v.useContext(ft);q(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),i={...vo(e||".",{relative:t})},l=pt();if(e==null){i.search=l.search;let a=new URLSearchParams(i.search),u=a.getAll("index");if(u.some(f=>f==="")){a.delete("index"),u.filter(h=>h).forEach(h=>a.append("index",h));let f=a.toString();i.search=f?`?${f}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:rt([n,i.pathname])),io(i)}function Fy(e,{relative:t}={}){let n=v.useContext(Ap);q(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Kp("useViewTransitionState"),o=vo(e,{relative:t});if(!n.isTransitioning)return!1;let i=Ct(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Ct(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ii(o.pathname,l)!=null||Ii(o.pathname,i)!=null}const s={colors:{primary50:"#f0fdfa",primary100:"#ccfbf1",primary200:"#99f6e4",primary300:"#5eead4",primary400:"#2dd4bf",primary500:"#14b8a6",primary600:"#0d9488",primary700:"#0f766e",primary800:"#115e59",primary900:"#134e4a",secondary50:"#fffbeb",secondary100:"#fef3c7",secondary200:"#fde68a",secondary300:"#fcd34d",secondary400:"#fbbf24",secondary500:"#f59e0b",secondary600:"#d97706",secondary700:"#b45309",secondary800:"#92400e",secondary900:"#78350f",accent50:"#fff1f2",accent100:"#ffe4e6",accent200:"#fecdd3",accent300:"#fda4af",accent400:"#fb7185",accent500:"#f43f5e",accent600:"#e11d48",accent700:"#be123c",accent800:"#9f1239",accent900:"#881337",success50:"#f0fdf4",success500:"#22c55e",success700:"#15803d",warning50:"#fffbeb",warning500:"#f59e0b",warning700:"#b45309",error50:"#fff1f2",error500:"#f43f5e",error700:"#be123c",neutral0:"#ffffff",neutral50:"#fafafa",neutral100:"#f5f5f5",neutral200:"#e5e5e5",neutral300:"#d4d4d4",neutral400:"#a3a3a3",neutral500:"#737373",neutral600:"#525252",neutral700:"#404040",neutral800:"#262626",neutral900:"#171717"},typography:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif",fontFamilyDisplay:"'Cal Sans', 'Inter', sans-serif",weights:{regular:400,medium:500,semibold:600},sizes:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},lineHeights:{tight:"1.2",normal:"1.5",relaxed:"1.625"}},spacing:{1:"4px",2:"8px",3:"12px",4:"16px",5:"20px",6:"24px",8:"32px",10:"40px",12:"48px",16:"64px",20:"80px",24:"96px"},radii:{sm:"6px",md:"10px",lg:"16px",xl:"20px","2xl":"24px",full:"9999px"},shadows:{sm:"0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",md:"0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",lg:"0 10px 30px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)",xl:"0 20px 50px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)",card:"0 2px 8px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.08)",cardHover:"0 8px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)"},transitions:{fast:"150ms ease",base:"220ms ease",slow:"350ms ease"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"}};var Y="-ms-",Ar="-moz-",B="-webkit-",Xp="comm",il="rule",fu="decl",Dy="@import",Ay="@namespace",Zp="@keyframes",by="@layer",Jp=Math.abs,pu=String.fromCharCode,ta=Object.assign;function By(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function qp(e){return e.trim()}function mt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function ii(e,t,n){return e.indexOf(t,n)}function ue(e,t){return e.charCodeAt(t)|0}function pn(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function eh(e){return e.length}function zr(e,t){return t.push(e),e}function Uy(e,t){return e.map(t).join("")}function Oc(e,t){return e.filter(function(n){return!mt(n,t)})}var ll=1,Xn=1,th=0,Ye=0,ie=0,ir="";function sl(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ll,column:Xn,length:l,return:"",siblings:a}}function Rt(e,t){return ta(sl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function xn(e){for(;e.root;)e=Rt(e.root,{children:[e]});zr(e,e.siblings)}function Hy(){return ie}function Wy(){return ie=Ye>0?ue(ir,--Ye):0,Xn--,ie===10&&(Xn=1,ll--),ie}function ot(){return ie=Ye<th?ue(ir,Ye++):0,Xn++,ie===10&&(Xn=1,ll++),ie}function Ot(){return ue(ir,Ye)}function li(){return Ye}function al(e,t){return pn(ir,e,t)}function lo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vy(e){return ll=Xn=1,th=qe(ir=e),Ye=0,[]}function Gy(e){return ir="",e}function Hl(e){return qp(al(Ye-1,na(e===91?e+2:e===40?e+1:e)))}function Qy(e){for(;(ie=Ot())&&ie<33;)ot();return lo(e)>2||lo(ie)>3?"":" "}function Yy(e,t){for(;--t&&ot()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return al(e,li()+(t<6&&Ot()==32&&ot()==32))}function na(e){for(;ot();)switch(ie){case e:return Ye;case 34:case 39:e!==34&&e!==39&&na(ie);break;case 40:e===41&&na(e);break;case 92:ot();break}return Ye}function Ky(e,t){for(;ot()&&e+ie!==57;)if(e+ie===84&&Ot()===47)break;return"/*"+al(t,Ye-1)+"*"+pu(e===47?e:ot())}function Xy(e){for(;!lo(Ot());)ot();return al(e,Ye)}function Zy(e){return Gy(si("",null,null,null,[""],e=Vy(e),0,[0],e))}function si(e,t,n,r,o,i,l,a,u){for(var c=0,f=0,h=l,g=0,k=0,x=0,$=1,j=1,m=1,p=0,y="",S=o,E=i,R=r,C=y;j;)switch(x=p,p=ot()){case 40:if(x!=108&&ue(C,h-1)==58){ii(C+=M(Hl(p),"&","&\f"),"&\f",Jp(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:C+=Hl(p);break;case 9:case 10:case 13:case 32:C+=Qy(x);break;case 92:C+=Yy(li()-1,7);continue;case 47:switch(Ot()){case 42:case 47:zr(Jy(Ky(ot(),li()),t,n,u),u),(lo(x||1)==5||lo(Ot()||1)==5)&&qe(C)&&pn(C,-1,void 0)!==" "&&(C+=" ");break;default:C+="/"}break;case 123*$:a[c++]=qe(C)*m;case 125*$:case 59:case 0:switch(p){case 0:case 125:j=0;case 59+f:m==-1&&(C=M(C,/\f/g,"")),k>0&&(qe(C)-h||$===0&&x===47)&&zr(k>32?Dc(C+";",r,n,h-1,u):Dc(M(C," ","")+";",r,n,h-2,u),u);break;case 59:C+=";";default:if(zr(R=Fc(C,t,n,c,f,o,a,y,S=[],E=[],h,i),i),p===123)if(f===0)si(C,t,R,R,S,i,h,a,E);else{switch(g){case 99:if(ue(C,3)===110)break;case 108:if(ue(C,2)===97)break;default:f=0;case 100:case 109:case 115:}f?si(e,R,R,r&&zr(Fc(e,R,R,0,0,o,a,y,o,S=[],h,E),E),o,E,h,a,r?S:E):si(C,R,R,R,[""],E,0,a,E)}}c=f=k=0,$=m=1,y=C="",h=l;break;case 58:h=1+qe(C),k=x;default:if($<1){if(p==123)--$;else if(p==125&&$++==0&&Wy()==125)continue}switch(C+=pu(p),p*$){case 38:m=f>0?1:(C+="\f",-1);break;case 44:a[c++]=(qe(C)-1)*m,m=1;break;case 64:Ot()===45&&(C+=Hl(ot())),g=Ot(),f=h=qe(y=C+=Xy(li())),p++;break;case 45:x===45&&qe(C)==2&&($=0)}}return i}function Fc(e,t,n,r,o,i,l,a,u,c,f,h){for(var g=o-1,k=o===0?i:[""],x=eh(k),$=0,j=0,m=0;$<r;++$)for(var p=0,y=pn(e,g+1,g=Jp(j=l[$])),S=e;p<x;++p)(S=qp(j>0?k[p]+" "+y:M(y,/&\f/g,k[p])))&&(u[m++]=S);return sl(e,t,n,o===0?il:a,u,c,f,h)}function Jy(e,t,n,r){return sl(e,t,n,Xp,pu(Hy()),pn(e,2,-2),0,r)}function Dc(e,t,n,r,o){return sl(e,t,n,fu,pn(e,0,r),pn(e,r+1,-1),r,o)}function nh(e,t,n){switch(By(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return B+e+e;case 4855:return B+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ar+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+Ar+e+Y+e+e;case 5936:switch(ue(e,t+11)){case 114:return B+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+Y+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+Y+e+e;case 6165:return B+e+Y+"flex-"+e+e;case 5187:return B+e+M(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return B+e+Y+"flex-item-"+M(e,/flex-|-self/g,"")+(mt(e,/flex-|baseline/)?"":Y+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return B+e+Y+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+Y+M(e,"shrink","negative")+e;case 5292:return B+e+Y+M(e,"basis","preferred-size")+e;case 6060:return B+"box-"+M(e,"-grow","")+B+e+Y+M(e,"grow","positive")+e;case 4554:return B+M(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+Y+"flex-pack:$3"),/space-between/,"justify")+B+e+e;case 4200:if(!mt(e,/flex-|baseline/))return Y+"grid-column-align"+pn(e,t)+e;break;case 2592:case 3360:return Y+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,mt(r.props,/grid-\w+-end/)})?~ii(e+(n=n[t].value),"span",0)?e:Y+M(e,"-start","")+e+Y+"grid-row-span:"+(~ii(n,"span",0)?mt(n,/\d+/):+mt(n,/\d+/)-+mt(e,/\d+/))+";":Y+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return mt(r.props,/grid-\w+-start/)})?e:Y+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+Ar+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ii(e,"stretch",0)?nh(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,u,c){return Y+o+":"+i+c+(l?Y+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(ue(e,t+6)===121)return M(e,":",":"+B)+e;break;case 6444:switch(ue(e,ue(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ue(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+Y+"$2box$3")+e;case 100:return M(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Oi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function qy(e,t,n,r){switch(e.type){case by:if(e.children.length)break;case Dy:case Ay:case fu:return e.return=e.return||e.value;case Xp:return"";case Zp:return e.return=e.value+"{"+Oi(e.children,r)+"}";case il:if(!qe(e.value=e.props.join(",")))return""}return qe(n=Oi(e.children,r))?e.return=e.value+"{"+n+"}":""}function e1(e){var t=eh(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function t1(e){return function(t){t.root||(t=t.return)&&e(t)}}function n1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case fu:e.return=nh(e.value,e.length,n);return;case Zp:return Oi([Rt(e,{value:M(e.value,"@","@"+B)})],r);case il:if(e.length)return Uy(n=e.props,function(o){switch(mt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xn(Rt(e,{props:[M(o,/:(read-\w+)/,":"+Ar+"$1")]})),xn(Rt(e,{props:[o]})),ta(e,{props:Oc(n,r)});break;case"::placeholder":xn(Rt(e,{props:[M(o,/:(plac\w+)/,":"+B+"input-$1")]})),xn(Rt(e,{props:[M(o,/:(plac\w+)/,":"+Ar+"$1")]})),xn(Rt(e,{props:[M(o,/:(plac\w+)/,Y+"input-$1")]})),xn(Rt(e,{props:[o]})),ta(e,{props:Oc(n,r)});break}return""})}}var Un={},Wl,Vl;const Zn=typeof process<"u"&&Un!==void 0&&(Un.REACT_APP_SC_ATTR||Un.SC_ATTR)||"data-styled",rh="active",oh="data-styled-version",ul="6.4.1",hu=`/*!sc*/
`,br=typeof window<"u"&&typeof document<"u";function Ac(e){if(typeof process<"u"&&Un!==void 0){const t=Un[e];if(t!==void 0&&t!=="")return t!=="false"}}const r1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Vl=(Wl=Ac("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Wl!==void 0?Wl:Ac("SC_DISABLE_SPEEDY"))!==null&&Vl!==void 0?Vl:typeof process>"u"||Un===void 0),ih="sc-keyframes-",o1={};function hn(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let ai=new Map,Fi=new Map,ui=1;const Pr=e=>{if(ai.has(e))return ai.get(e);for(;Fi.has(ui);)ui++;const t=ui++;return ai.set(e,t),Fi.set(t,e),t},i1=e=>Fi.get(e),l1=(e,t)=>{ui=t+1,ai.set(e,t),Fi.set(t,e)},mu=Object.freeze([]),Jn=Object.freeze({});function lh(e,t,n=Jn){return e.theme!==n.theme&&e.theme||t||n.theme}const s1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,a1=/(^-|-$)/g;function sh(e){return e.replace(s1,"-").replace(a1,"")}const u1=/(a)(d)/gi,bc=e=>String.fromCharCode(e+(e>25?39:97));function gu(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=bc(t%52)+n;return(bc(t%52)+n).replace(u1,"$1-$2")}const ra=5381,sn=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ah=e=>sn(ra,e);function yu(e){return gu(ah(e)>>>0)}function c1(e){return e.displayName||e.name||"Component"}function oa(e){return typeof e=="string"&&!0}function d1(e){return oa(e)?`styled.${e}`:`Styled(${c1(e)})`}const uh=Symbol.for("react.memo"),f1=Symbol.for("react.forward_ref"),p1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},h1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ch={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},m1={[f1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[uh]:ch};function Bc(e){return("type"in(t=e)&&t.type.$$typeof)===uh?ch:"$$typeof"in e?m1[e.$$typeof]:p1;var t}const g1=Object.defineProperty,y1=Object.getOwnPropertyNames,v1=Object.getOwnPropertySymbols,x1=Object.getOwnPropertyDescriptor,w1=Object.getPrototypeOf,$1=Object.prototype;function dh(e,t,n){if(typeof t!="string"){const r=w1(t);r&&r!==$1&&dh(e,r,n);const o=y1(t).concat(v1(t)),i=Bc(e),l=Bc(t);for(let a=0;a<o.length;++a){const u=o[a];if(!(u in h1||n&&n[u]||l&&u in l||i&&u in i)){const c=x1(t,u);try{g1(e,u,c)}catch{}}}}return e}function lr(e){return typeof e=="function"}function vu(e){return typeof e=="object"&&"styledComponentId"in e}function Rr(e,t){return e&&t?e+" "+t:e||t||""}function Di(e,t){return e.join("")}function so(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ia(e,t,n=!1){if(!n&&!so(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ia(e[r],t[r]);else if(so(t))for(const r in t)e[r]=ia(e[r],t[r]);return e}function xu(e,t){Object.defineProperty(e,"toString",{value:t})}const k1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const o=this.groupSizes,i=o.length;let l=i;for(;e>=l;)if(l<<=1,l<0)throw hn(16,`${e}`);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(let a=i;a<l;a++)this.groupSizes[a]=0}let n=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(n,t[o])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let o=n;o<r;o++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+hu;return t}},S1=`style[${Zn}][${oh}="${ul}"]`,C1=new RegExp(`^${Zn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Uc=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,la=e=>{if(!e)return document;if(Uc(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Uc(t))return t}return document},E1=(e,t,n)=>{const r=n.split(",");let o;for(let i=0,l=r.length;i<l;i++)(o=r[i])&&e.registerName(t,o)},j1=(e,t)=>{var n;const r=((n=t.textContent)!==null&&n!==void 0?n:"").split(hu),o=[];for(let i=0,l=r.length;i<l;i++){const a=r[i].trim();if(!a)continue;const u=a.match(C1);if(u){const c=0|parseInt(u[1],10),f=u[2];c!==0&&(l1(f,c),E1(e,f,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}},Gl=e=>{const t=la(e.options.target).querySelectorAll(S1);for(let n=0,r=t.length;n<r;n++){const o=t[n];o&&o.getAttribute(Zn)!==rh&&(j1(e,o),o.parentNode&&o.parentNode.removeChild(o))}};let gr=!1;function z1(){if(gr!==!1)return gr;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return gr=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return gr=t.getAttribute("content")||void 0}return gr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const fh=(e,t)=>{const n=document.head,r=e||n,o=document.createElement("style"),i=(u=>{const c=Array.from(u.querySelectorAll(`style[${Zn}]`));return c[c.length-1]})(r),l=i!==void 0?i.nextSibling:null;o.setAttribute(Zn,rh),o.setAttribute(oh,ul);const a=t||z1();return a&&o.setAttribute("nonce",a),r.insertBefore(o,l),o},P1=class{constructor(e,t){this.element=fh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(n=>{var r;if(n.sheet)return n.sheet;const o=(r=n.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,l=o.length;i<l;i++){const a=o[i];if(a.ownerNode===n)return a}throw hn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},R1=class{constructor(e,t){this.element=fh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Hc=br;const _1={isServer:!br,useCSSOMInjection:!r1};class xo{static registerId(t){return Pr(t)}constructor(t=Jn,n={},r){this.options=Object.assign(Object.assign({},_1),t),this.gs=n,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&br&&Hc&&(Hc=!1,Gl(this)),xu(this,()=>(o=>{const i=o.getTag(),{length:l}=i;let a="";for(let u=0;u<l;u++){const c=i1(u);if(c===void 0)continue;const f=o.names.get(c);if(f===void 0||!f.size)continue;const h=i.getGroup(u);if(h.length===0)continue;const g=Zn+".g"+u+'[id="'+c+'"]';let k="";for(const x of f)x.length>0&&(k+=x+",");a+=h+g+'{content:"'+k+'"}'+hu}return a})(this))}rehydrate(){!this.server&&br&&Gl(this)}reconstructWithOptions(t,n=!0){const r=new xo(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&br&&t.target!==this.options.target&&la(this.options.target)!==la(t.target)&&Gl(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:n,target:r,nonce:o})=>n?new P1(r,o):new R1(r,o))(this.options),new k1(t)));var t}hasNameForId(t,n){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(n))!==null&&o!==void 0&&o}registerName(t,n){Pr(t),t.startsWith(ih)&&this.keyframeIds.add(t);const r=this.names.get(t);r?r.add(n):this.names.set(t,new Set([n]))}insertRules(t,n,r){this.registerName(t,n),this.getTag().insertRules(Pr(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(Pr(t)),this.clearNames(t)}clearTag(){this.tag=void 0}}const ph=new WeakSet,N1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function L1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in N1||e.startsWith("--")?String(t).trim():t+"px"}const en=47;function Wc(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const hh=Symbol.for("sc-keyframes");function T1(e){return typeof e=="object"&&e!==null&&hh in e}function mh(e){return lr(e)&&!(e.prototype&&e.prototype.isReactComponent)}const gh=e=>e==null||e===!1||e==="",I1=Symbol.for("react.client.reference");function Vc(e){return e.$$typeof===I1}function yh(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!gh(r)&&(Array.isArray(r)&&ph.has(r)||lr(r)?t.push(Wc(n)+":",r,";"):so(r)?(t.push(n+" {"),yh(r,t),t.push("}")):t.push(Wc(n)+": "+L1(n,r)+";"))}}function Vt(e,t,n,r,o=[]){if(gh(e))return o;const i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(Vc(e))return o;if(mh(e)&&t){const l=e(t);return Vt(l,t,n,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let l=0;l<e.length;l++)Vt(e[l],t,n,r,o);return o}return vu(e)?(o.push(`.${e.styledComponentId}`),o):T1(e)?(n?(e.inject(n,r),o.push(e.getName(r))):o.push(e),o):Vc(e)?o:so(e)?(yh(e,o),o):(o.push(e.toString()),o)}const M1=ah(ul);class O1{constructor(t,n,r){this.rules=t,this.componentId=n,this.baseHash=sn(M1,n),this.baseStyle=r,xo.registerId(n)}generateAndInjectStyles(t,n,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";{let i="";for(let l=0;l<this.rules.length;l++){const a=this.rules[l];if(typeof a=="string")i+=a;else if(a)if(mh(a)){const u=a(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=Di(Vt(u,t,n,r)))}else i+=Di(Vt(a,t,n,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const l=r.hash?r.hash+i:i;let a=this.dynamicNameCache.get(l);if(!a){if(a=gu(sn(sn(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){const u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(l,a)}if(!n.hasNameForId(this.componentId,a)){const u=r(i,"."+a,void 0,this.componentId);n.insertRules(this.componentId,a,u)}o=Rr(o,a)}}return o}}const F1=/&/g;function vh(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function Ql(e){const t=e.length;let n="",r=0,o=0,i=0,l=!1,a=!1;for(let u=0;u<t;u++){const c=e.charCodeAt(u);if(i!==0||l||c!==en||e.charCodeAt(u+1)!==42)if(l)c===42&&e.charCodeAt(u+1)===en&&(l=!1,u++);else if(c!==34&&c!==39||vh(e,u)){if(i===0)if(c===123)o++;else if(c===125){if(o--,o<0){a=!0;let f=u+1;for(;f<t;){const h=e.charCodeAt(f);if(h===59||h===10)break;f++}f<t&&e.charCodeAt(f)===59&&f++,o=0,u=f-1,r=f;continue}o===0&&(n+=e.substring(r,u+1),r=u+1)}else c===59&&o===0&&(n+=e.substring(r,u+1),r=u+1)}else i===0?i=c:i===c&&(i=0);else l=!0,u++}return a||o!==0||i!==0?(r<t&&o===0&&i===0&&(n+=e.substring(r)),n):e}function xh(e,t){const n=t+" ",r=","+n;for(let o=0;o<e.length;o++){const i=e[o];if(i.type==="rule"){i.value=(n+i.value).replaceAll(",",r);const l=i.props,a=[];for(let u=0;u<l.length;u++)a[u]=n+l[u];i.props=a}Array.isArray(i.children)&&i.type!=="@keyframes"&&xh(i.children,t)}return e}function D1({options:e=Jn,plugins:t=mu}=Jn){let n,r,o;const i=(g,k,x)=>x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?`.${n}`:g,l=t.slice();l.push(g=>{g.type===il&&g.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),g.props[0]=g.props[0].replace(F1,r).replace(o,i))}),e.prefix&&l.push(n1),l.push(qy);let a=[];const u=e1(l.concat(t1(g=>a.push(g)))),c=(g,k="",x="",$="&")=>{n=$,r=k,o=void 0;const j=function(p){const y=p.indexOf("//")!==-1,S=p.indexOf("}")!==-1;if(!y&&!S)return p;if(!y)return Ql(p);const E=p.length;let R="",C=0,P=0,F=0,I=0,W=0,Te=!1;for(;P<E;){const G=p.charCodeAt(P);if(G!==34&&G!==39||vh(p,P))if(F===0)if(G===en&&P+1<E&&p.charCodeAt(P+1)===42){for(P+=2;P+1<E&&(p.charCodeAt(P)!==42||p.charCodeAt(P+1)!==en);)P++;P+=2}else if(G!==40)if(G!==41)if(I>0)P++;else if(G===42&&P+1<E&&p.charCodeAt(P+1)===en)R+=p.substring(C,P),P+=2,C=P,Te=!0;else if(G===en&&P+1<E&&p.charCodeAt(P+1)===en){for(R+=p.substring(C,P);P<E&&p.charCodeAt(P)!==10;)P++;C=P,Te=!0}else G===123?W++:G===125&&W--,P++;else I>0&&I--,P++;else I++,P++;else P++;else F===0?F=G:F===G&&(F=0),P++}return Te?(C<E&&(R+=p.substring(C)),W===0?R:Ql(R)):W===0?p:Ql(p)}(g);let m=Zy(x||k?x+" "+k+" { "+j+" }":j);return e.namespace&&(m=xh(m,e.namespace)),a=[],Oi(m,u),a},f=e;let h=ra;for(let g=0;g<t.length;g++)t[g].name||hn(15),h=sn(h,t[g].name);return f!=null&&f.namespace&&(h=sn(h,f.namespace)),f!=null&&f.prefix&&(h=sn(h,"p")),c.hash=h!==ra?h.toString():"",c}const A1=new xo,sa=D1(),wh=Se.createContext({shouldForwardProp:void 0,styleSheet:A1,stylis:sa,stylisPlugins:void 0});wh.Consumer;function $h(){return Se.useContext(wh)}const ao=Se.createContext(void 0);ao.Consumer;function b1(e){const t=Se.useContext(ao),n=Se.useMemo(()=>function(r,o){if(!r)throw hn(14);if(lr(r))return r(o);if(Array.isArray(r)||typeof r!="object")throw hn(8);return o?Object.assign(Object.assign({},o),r):r}(e.theme,t),[e.theme,t]);return e.children?Se.createElement(ao.Provider,{value:n},e.children):null}const Gc=Object.prototype.hasOwnProperty,Yl={};function B1(e,t){const n=typeof e!="string"?"sc":sh(e);Yl[n]=(Yl[n]||0)+1;const r=n+"-"+yu(ul+n+Yl[n]);return t?t+"-"+r:r}function U1(e,t,n){const r=vu(e),o=e,i=!oa(e),{attrs:l=mu,componentId:a=B1(t.displayName,t.parentComponentId),displayName:u=d1(e)}=t,c=t.displayName&&t.componentId?sh(t.displayName)+"-"+t.componentId:t.componentId||a,f=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l;let{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){const $=o.shouldForwardProp;if(t.shouldForwardProp){const j=t.shouldForwardProp;h=(m,p)=>$(m,p)&&j(m,p)}else h=$}const g=new O1(n,c,r?o.componentStyle:void 0);function k($,j){return function(m,p,y){const{attrs:S,componentStyle:E,defaultProps:R,foldedComponentIds:C,styledComponentId:P,target:F}=m,I=Se.useContext(ao),W=$h(),Te=m.shouldForwardProp||W.shouldForwardProp,G=lh(p,I,R)||Jn;let ze,ge;{const L=Se.useRef(null),T=L.current;if(T!==null&&T[1]===G&&T[2]===W.styleSheet&&T[3]===W.stylis&&T[7]===E&&function(H,b,se){const te=H,oe=b;let Ie=0;for(const Be in oe)if(Gc.call(oe,Be)&&(Ie++,te[Be]!==oe[Be]))return!1;return Ie===se}(T[0],p,T[4]))ze=T[5],ge=T[6];else{ze=function(b,se,te){const oe=Object.assign(Object.assign({},se),{className:void 0,theme:te}),Ie=b.length>1;for(let Be=0;Be<b.length;Be++){const pl=b[Be],$o=lr(pl)?pl(Ie?Object.assign({},oe):oe):pl;for(const zt in $o)zt==="className"?oe.className=Rr(oe.className,$o[zt]):zt==="style"?oe.style=Object.assign(Object.assign({},oe.style),$o[zt]):zt in se&&se[zt]===void 0||(oe[zt]=$o[zt])}return"className"in se&&typeof se.className=="string"&&(oe.className=Rr(oe.className,se.className)),oe}(S,p,G),ge=function(b,se,te,oe){return b.generateAndInjectStyles(se,te,oe)}(E,ze,W.styleSheet,W.stylis);let H=0;for(const b in p)Gc.call(p,b)&&H++;L.current=[p,G,W.styleSheet,W.stylis,H,ze,ge,E]}}const jt=ze.as||F,Zt=function(L,T,H,b){const se={};for(const te in L)L[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&L.theme===H||(te==="forwardedAs"?se.as=L.forwardedAs:b&&!b(te,T)||(se[te]=L[te]));return se}(ze,jt,G,Te);let _=Rr(C,P);return ge&&(_+=" "+ge),ze.className&&(_+=" "+ze.className),Zt[oa(jt)&&jt.includes("-")?"class":"className"]=_,y&&(Zt.ref=y),v.createElement(jt,Zt)}(x,$,j)}k.displayName=u;let x=Se.forwardRef(k);return x.attrs=f,x.componentStyle=g,x.displayName=u,x.shouldForwardProp=h,x.foldedComponentIds=r?Rr(o.foldedComponentIds,o.styledComponentId):"",x.styledComponentId=c,x.target=r?o.target:e,Object.defineProperty(x,"defaultProps",{get(){return this._foldedDefaultProps},set($){this._foldedDefaultProps=r?function(j,...m){for(const p of m)ia(j,p,!0);return j}({},o.defaultProps,$):$}}),xu(x,()=>`.${x.styledComponentId}`),i&&dh(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}var H1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Qc(e,t){const n=[e[0]];for(let r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}const Yc=e=>(ph.add(e),e);function we(e,...t){if(lr(e)||so(e))return Yc(Vt(Qc(mu,[e,...t])));const n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?Vt(n):Yc(Vt(Qc(n,t)))}function aa(e,t,n=Jn){if(!t)throw hn(1,t);const r=(o,...i)=>e(t,n,we(o,...i));return r.attrs=o=>aa(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)})),r.withConfig=o=>aa(e,t,Object.assign(Object.assign({},n),o)),r}const kh=e=>aa(U1,e),w=kh;H1.forEach(e=>{w[e]=kh(e)});class W1{constructor(t,n){this.instanceRules=new Map,this.rules=t,this.componentId=n,this.isStatic=function(r){for(let o=0;o<r.length;o+=1){const i=r[o];if(lr(i)&&!vu(i))return!1}return!0}(t),xo.registerId(this.componentId)}removeStyles(t,n){this.instanceRules.delete(t),this.rebuildGroup(n)}renderStyles(t,n,r,o){const i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,n,r,o);else{const a=this.computeRules(t,n,r,o);r.insertRules(i,a.name,a.rules)}return}const l=this.instanceRules.get(t);if(this.computeRules(t,n,r,o),!r.server&&l){const a=l.rules,u=this.instanceRules.get(t).rules;if(a.length===u.length){let c=!0;for(let f=0;f<a.length;f++)if(a[f]!==u[f]){c=!1;break}if(c)return}}this.rebuildGroup(r)}computeRules(t,n,r,o){const i=Di(Vt(this.rules,n,r,o)),l={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,l),l}rebuildGroup(t){const n=this.componentId;t.clearRules(n);for(const r of this.instanceRules.values())t.insertRules(n,r.name,r.rules)}}function V1(e,...t){const n=we(e,...t),r=`sc-global-${yu(JSON.stringify(n))}`,o=new W1(n,r),i=a=>{const u=$h(),c=Se.useContext(ao);let f;{const h=Se.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),f=h.current}u.styleSheet.server&&l(f,a,u.styleSheet,c,u.stylis);{const h=o.isStatic?[f,u.styleSheet,o]:[f,a,u.styleSheet,c,u.stylis,o],g=Se.useRef(o);Se.useLayoutEffect(()=>{u.styleSheet.server||(g.current!==o&&(u.styleSheet.clearRules(r),g.current=o),l(f,a,u.styleSheet,c,u.stylis))},h),Se.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(f,u.styleSheet)},[f,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(f),null};function l(a,u,c,f,h){if(o.isStatic)o.renderStyles(a,o1,c,h);else{const g=Object.assign(Object.assign({},u),{theme:lh(u,f,i.defaultProps)});o.renderStyles(a,g,c,h)}}return Se.memo(i)}var Sh;class G1{constructor(t,n){this[Sh]=!0,this.inject=(r,o=sa)=>{const i=this.getName(o);if(!r.hasNameForId(this.id,i)){const l=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,l)}},this.name=t,this.id=ih+t,this.rules=n,Pr(this.id),xu(this,()=>{throw hn(12,String(this.name))})}getName(t=sa){return t.hash?this.name+gu(+t.hash>>>0):this.name}}function yn(e,...t){const n=Di(we(e,...t)),r=yu(n);return new G1(r,n)}Sh=hh;const Q1=V1`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${s.typography.fontFamily};
    font-size: ${s.typography.sizes.base};
    line-height: ${s.typography.lineHeights.normal};
    color: ${s.colors.neutral800};
    background-color: ${s.colors.neutral50};
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  input, select, textarea {
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${s.colors.neutral100};
  }

  ::-webkit-scrollbar-thumb {
    background: ${s.colors.neutral300};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${s.colors.neutral400};
  }

  ::selection {
    background: ${s.colors.primary200};
    color: ${s.colors.primary900};
  }
`,Ch=v.createContext(null);function Y1({children:e}){const[t,n]=v.useState(new Set),r=v.useCallback(u=>{n(c=>{const f=new Set(c);return f.has(u)?f.delete(u):f.add(u),f})},[]),o=v.useCallback(u=>{n(new Set(u.map(c=>c.id)))},[]),i=v.useCallback(()=>{n(new Set)},[]),l=v.useCallback(u=>t.has(u),[t]),a=v.useCallback(u=>u.filter(c=>t.has(c.id)).reduce((c,f)=>c+f.fileSizeKb,0),[t]);return d.jsx(Ch.Provider,{value:{selectedIds:t,toggleSelect:r,selectAll:o,clearSelection:i,isSelected:l,selectedCount:t.size,totalFileSizeKb:a},children:e})}function wo(){const e=v.useContext(Ch);if(!e)throw new Error("useSelection must be used within SelectionProvider");return e}const Kc={search:"",sort:"date-newest",species:"all"},Eh=v.createContext(null);function K1({children:e}){const[t,n]=v.useState(Kc),r=a=>n(u=>({...u,search:a})),o=a=>n(u=>({...u,sort:a})),i=a=>n(u=>({...u,species:a})),l=()=>n(Kc);return d.jsx(Eh.Provider,{value:{filters:t,setSearch:r,setSort:o,setSpecies:i,resetFilters:l},children:e})}function jh(){const e=v.useContext(Eh);if(!e)throw new Error("useFilters must be used within FilterProvider");return e}const zh=v.createContext(null);function X1({children:e}){const[t,n]=v.useState([]),r=v.useCallback((i,l="info")=>{const a=Math.random().toString(36).slice(2);n(u=>[...u,{id:a,message:i,type:l}]),setTimeout(()=>{n(u=>u.filter(c=>c.id!==a))},3500)},[]),o=v.useCallback(i=>{n(l=>l.filter(a=>a.id!==i))},[]);return d.jsx(zh.Provider,{value:{toasts:t,addToast:r,removeToast:o},children:e})}function cl(){const e=v.useContext(zh);if(!e)throw new Error("useToast must be used within ToastProvider");return e}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),D=(e,t)=>{const n=v.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:a="",children:u,...c},f)=>v.createElement("svg",{ref:f,...Z1,width:o,height:o,stroke:r,strokeWidth:l?Number(i)*24/Number(o):i,className:["lucide",`lucide-${J1(e)}`,a].join(" "),...c},[...t.map(([h,g])=>v.createElement(h,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=D("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=D("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=D("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=D("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=D("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=D("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=D("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=D("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=D("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=D("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=D("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=D("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=D("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=D("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=D("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=D("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=D("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=D("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=D("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=D("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=D("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=D("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=D("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=D("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=D("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=D("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=D("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=D("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=D("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=D("Weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=D("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=D("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),$v=yn`
  from { transform: translateX(120%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`,kv=w.div`
  position: fixed;
  bottom: ${s.spacing[6]};
  right: ${s.spacing[6]};
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: ${s.spacing[2]};
  pointer-events: none;

  @media (max-width: ${s.breakpoints.sm}) {
    left: ${s.spacing[4]};
    right: ${s.spacing[4]};
    bottom: ${s.spacing[20]};
  }
`,Sv=w.div`
  display: flex;
  align-items: center;
  gap: ${s.spacing[3]};
  padding: ${s.spacing[3]} ${s.spacing[4]};
  border-radius: ${s.radii.xl};
  box-shadow: ${s.shadows.lg};
  pointer-events: all;
  animation: ${$v} 0.3s ease;
  max-width: 360px;
  min-width: 240px;

  ${({$type:e})=>{switch(e){case"success":return we`
          background: ${s.colors.success50};
          border: 1px solid ${s.colors.success500}30;
          color: ${s.colors.success700};
        `;case"error":return we`
          background: ${s.colors.error50};
          border: 1px solid ${s.colors.error500}30;
          color: ${s.colors.error700};
        `;default:return we`
          background: white;
          border: 1px solid ${s.colors.neutral200};
          color: ${s.colors.neutral700};
        `}}}
`,Cv=w.span`
  flex: 1;
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.medium};
`,Ev=w.button`
  opacity: 0.5;
  transition: opacity ${s.transitions.fast};
  display: flex;

  &:hover {
    opacity: 1;
  }
`;function jv(){const{toasts:e,removeToast:t}=cl();return d.jsx(kv,{children:e.map(n=>d.jsxs(Sv,{$type:n.type,children:[n.type==="success"&&d.jsx(tv,{size:18}),n.type==="error"&&d.jsx(xv,{size:18}),n.type==="info"&&d.jsx(av,{size:18}),d.jsx(Cv,{children:n.message}),d.jsx(Ev,{onClick:()=>t(n.id),children:d.jsx(dl,{size:14})})]},n.id))})}const zv="https://eulerity-hackathon.appspot.com/pets";function Lh(){const[e,t]=v.useState([]),[n,r]=v.useState(!0),[o,i]=v.useState(""),l=v.useCallback(async()=>{try{r(!0),i("");const a=await fetch(zv);if(!a.ok)throw new Error("Failed to fetch pets");const c=(await a.json()).map((f,h)=>({id:String(h+1),title:f.title,description:f.description,imageUrl:f.url,createdAt:f.created,species:f.title.toLowerCase().includes("cat")?"Cat":f.title.toLowerCase().includes("bun")?"Rabbit":f.title.toLowerCase().includes("parrot")?"Bird":"Dog",breed:"Mixed Breed",age:h%10+1,gender:h%2===0?"Male":"Female",weight:`${h%20+2}kg`,location:"New York, USA",status:"Available",tags:["friendly","cute"],fileSizeKb:500}));t(c)}catch(a){i(a instanceof Error?a.message:"Something went wrong")}finally{r(!1)}},[]);return v.useEffect(()=>{l()},[l]),{pets:e,loading:n,error:o,isEmpty:e.length===0,refetch:l}}function Pv(e,t){return v.useMemo(()=>{let n=[...e];if(t.search.trim()){const r=t.search.toLowerCase();n=n.filter(o=>o.title.toLowerCase().includes(r)||o.description.toLowerCase().includes(r)||o.breed.toLowerCase().includes(r)||o.tags.some(i=>i.toLowerCase().includes(r)))}switch(t.species!=="all"&&(n=n.filter(r=>r.species.toLowerCase()===t.species.toLowerCase())),t.sort){case"name-asc":n.sort((r,o)=>r.title.localeCompare(o.title));break;case"name-desc":n.sort((r,o)=>o.title.localeCompare(r.title));break;case"date-newest":n.sort((r,o)=>new Date(o.createdAt).getTime()-new Date(r.createdAt).getTime());break;case"date-oldest":n.sort((r,o)=>new Date(r.createdAt).getTime()-new Date(o.createdAt).getTime());break}return n},[e,t])}function Rv(e,t){const[n,r]=v.useState(1),o=Math.max(1,Math.ceil(e.length/t)),i=Math.min(n,o),l=v.useMemo(()=>{const u=(i-1)*t;return e.slice(u,u+t)},[e,i,t]),a=u=>{r(Math.max(1,Math.min(u,o)))};return{currentItems:l,currentPage:i,totalPages:o,goToPage:a,nextPage:()=>a(i+1),prevPage:()=>a(i-1),hasNext:i<o,hasPrev:i>1}}const _v=yn`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,fl=w.article`
  position: relative;
  border-radius: ${s.radii.xl};
  overflow: hidden;
  background: white;
  box-shadow: ${s.shadows.card};
  transition: all ${s.transitions.base};
  cursor: pointer;
  animation: ${_v} 0.3s ease both;

  &:hover {
    box-shadow: ${s.shadows.cardHover};
    transform: translateY(-3px);
  }

  ${({$selected:e})=>e&&we`
      box-shadow: 0 0 0 3px ${s.colors.primary500},
        ${s.shadows.cardHover};
      transform: translateY(-3px);
    `}
`,Nv=w.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: ${s.colors.neutral100};
`,Lv=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${s.transitions.slow};

  ${fl}:hover & {
    transform: scale(1.05);
  }
`,Tv=w.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(0, 0, 0, 0.55) 100%
  );
  opacity: 0;
  transition: opacity ${s.transitions.base};

  ${fl}:hover & {
    opacity: 1;
  }
`,Iv=w.button`
  position: absolute;
  top: ${s.spacing[3]};
  right: ${s.spacing[3]};
  width: 32px;
  height: 32px;
  border-radius: ${s.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${s.transitions.fast};
  z-index: 2;

  ${({$selected:e})=>e?we`
          background: ${s.colors.primary500};
          box-shadow: 0 2px 8px rgba(20, 184, 166, 0.5);
        `:we`
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          opacity: 0;

          ${fl}:hover & {
            opacity: 1;
          }
        `}

  &:hover {
    transform: scale(1.1);
  }
`,Mv=w.div`
  padding: ${s.spacing[4]};
`,Ov=w.h3`
  font-size: ${s.typography.sizes.base};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral900};
  margin-bottom: ${s.spacing[1]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Fv=w.p`
  font-size: ${s.typography.sizes.sm};
  color: ${s.colors.neutral500};
  margin-bottom: ${s.spacing[3]};
`,Dv=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${s.typography.sizes.xs};
  color: ${s.colors.neutral500};
`,qc=w.span`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    flex-shrink: 0;
  }
`,Av=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: ${s.spacing[3]};
`,bv=w.span`
  padding: 2px 8px;
  background: ${s.colors.primary50};
  color: ${s.colors.primary700};
  border-radius: ${s.radii.full};
  font-size: 11px;
  font-weight: ${s.typography.weights.medium};
`;function Bv({pet:e,index:t=0}){var f,h;const n=Hp(),{toggleSelect:r,isSelected:o}=wo(),[i,l]=v.useState(!1),a=o(e.id),u=g=>{g.stopPropagation(),r(e.id)},c=new Date(e.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return d.jsxs(fl,{$selected:a,onClick:()=>n(`/pets/${e.id}`),style:{animationDelay:`${t*40}ms`},children:[d.jsxs(Nv,{children:[d.jsx(Lv,{src:e.imageUrl,alt:e.title,loading:"lazy",onLoad:()=>l(!0),style:{opacity:i?1:0,transition:"opacity 0.3s"}}),!i&&d.jsx("div",{style:{position:"absolute",inset:0,background:s.colors.neutral100}}),d.jsx(Tv,{}),d.jsx(Iv,{$selected:a,onClick:u,children:a?d.jsx(Rh,{size:16,color:"white",strokeWidth:2.5}):d.jsx(uo,{size:16,color:s.colors.neutral600})})]}),d.jsxs(Mv,{children:[d.jsx(Ov,{title:e.title,children:e.title}),d.jsxs(Fv,{children:[e.breed," · ",e.age," yr",e.age!==1?"s":""," · ",e.gender]}),d.jsxs(Dv,{children:[d.jsxs(qc,{children:[d.jsx(Nh,{size:12}),((f=e.location)==null?void 0:f.split(",")[0])||"Unknown"]}),d.jsxs(qc,{children:[d.jsx(ua,{size:12}),c]})]}),d.jsx(Av,{children:(h=e.tags)==null?void 0:h.slice(0,2).map(g=>d.jsx(bv,{children:g},g))})]})]})}const Uv=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${s.spacing[3]};
  align-items: center;

  @media (max-width: ${s.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`,Hv=w.div`
  position: relative;
  flex: 1;
  min-width: 220px;
`,Wv=w.input`
  width: 100%;
  height: 44px;
  padding: 0 ${s.spacing[4]} 0 42px;
  background: white;
  border: 1.5px solid ${s.colors.neutral200};
  border-radius: ${s.radii.lg};
  font-size: ${s.typography.sizes.sm};
  color: ${s.colors.neutral800};
  transition: all ${s.transitions.fast};
  outline: none;

  &::placeholder {
    color: ${s.colors.neutral400};
  }

  &:focus {
    border-color: ${s.colors.primary400};
    box-shadow: 0 0 0 3px ${s.colors.primary100};
  }
`,Vv=w.div`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: ${s.colors.neutral400};
  pointer-events: none;
  display: flex;
`,Gv=w.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: ${s.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.colors.neutral400};
  transition: all ${s.transitions.fast};

  &:hover {
    background: ${s.colors.neutral100};
    color: ${s.colors.neutral700};
  }
`,ed=w.div`
  position: relative;
  display: flex;
  align-items: center;
`,td=w.div`
  position: absolute;
  left: 12px;
  pointer-events: none;
  color: ${s.colors.neutral400};
  display: flex;
`,nd=w.select`
  height: 44px;
  padding: 0 ${s.spacing[4]} 0 36px;
  background: white;
  border: 1.5px solid ${s.colors.neutral200};
  border-radius: ${s.radii.lg};
  font-size: ${s.typography.sizes.sm};
  color: ${s.colors.neutral700};
  appearance: none;
  cursor: pointer;
  outline: none;
  transition: all ${s.transitions.fast};
  min-width: 160px;

  &:focus {
    border-color: ${s.colors.primary400};
    box-shadow: 0 0 0 3px ${s.colors.primary100};
  }

  &:hover {
    border-color: ${s.colors.neutral300};
  }
`,Qv=[{value:"date-newest",label:"Newest First"},{value:"date-oldest",label:"Oldest First"},{value:"name-asc",label:"Name A–Z"},{value:"name-desc",label:"Name Z–A"}],Yv=["all","Dog","Cat","Bird","Rabbit","Small Animal"];function Kv(){const{filters:e,setSearch:t,setSort:n,setSpecies:r}=jh();return d.jsxs(Uv,{children:[d.jsxs(Hv,{children:[d.jsx(Vv,{children:d.jsx(fv,{size:16})}),d.jsx(Wv,{type:"text",placeholder:"Search by name, breed, or tag...",value:e.search,onChange:o=>t(o.target.value)}),e.search&&d.jsx(Gv,{onClick:()=>t(""),children:d.jsx(dl,{size:14})})]}),d.jsxs(ed,{children:[d.jsx(td,{children:d.jsx(iv,{size:16})}),d.jsx(nd,{value:e.species,onChange:o=>r(o.target.value),children:Yv.map(o=>d.jsx("option",{value:o,children:o==="all"?"All Species":o+"s"},o))})]}),d.jsxs(ed,{children:[d.jsx(td,{children:d.jsx(sv,{size:16})}),d.jsx(nd,{value:e.sort,onChange:o=>n(o.target.value),children:Qv.map(o=>d.jsx("option",{value:o.value,children:o.label},o.value))})]})]})}const Xv=yn`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`,Zv=w.div`
  position: fixed;
  bottom: ${s.spacing[6]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  gap: ${s.spacing[3]};
  padding: ${s.spacing[3]} ${s.spacing[5]};
  background: ${s.colors.neutral900};
  color: white;
  border-radius: ${s.radii["2xl"]};
  box-shadow: ${s.shadows.xl};
  white-space: nowrap;

  ${({$visible:e})=>e?we`
          animation: ${Xv} 0.25s ease both;
        `:we`
          display: none;
        `}

  @media (max-width: ${s.breakpoints.sm}) {
    left: ${s.spacing[4]};
    right: ${s.spacing[4]};
    transform: none;
    flex-wrap: wrap;
    white-space: normal;
  }
`,Jv=w.div`
  display: flex;
  align-items: center;
  gap: ${s.spacing[2]};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.semibold};
  padding-right: ${s.spacing[3]};
  border-right: 1px solid rgba(255, 255, 255, 0.15);
`,qv=w.span`
  font-size: ${s.typography.sizes.xs};
  color: rgba(255, 255, 255, 0.55);
  margin-left: 4px;
  font-weight: ${s.typography.weights.regular};
`,bo=w.button`
  display: flex;
  align-items: center;
  gap: ${s.spacing[2]};
  padding: ${s.spacing[2]} ${s.spacing[3]};
  border-radius: ${s.radii.lg};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.medium};
  transition: all ${s.transitions.fast};

  ${({$variant:e="ghost"})=>{switch(e){case"primary":return we`
          background: ${s.colors.primary500};
          color: white;
          &:hover {
            background: ${s.colors.primary400};
          }
        `;case"danger":return we`
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          &:hover {
            background: rgba(255, 255, 255, 0.08);
            color: white;
          }
        `;default:return we`
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
          &:hover {
            background: rgba(255, 255, 255, 0.18);
            color: white;
          }
        `}}}
`;function rd(e){return e>=1024?`${(e/1024).toFixed(1)} MB`:`${e} KB`}function ex({allPets:e,visiblePets:t}){const{selectedCount:n,clearSelection:r,selectAll:o,totalFileSizeKb:i}=wo(),{addToast:l}=cl(),a=i(e),u=t.length>0&&t.every(f=>e.find(h=>h.id===f.id)),c=()=>{l(`Downloading ${n} image${n!==1?"s":""} (${rd(a)})`,"success")};return d.jsxs(Zv,{$visible:n>0,children:[d.jsxs(Jv,{children:[d.jsx(_h,{size:16}),n," selected",d.jsxs(qv,{children:["~",rd(a)]})]}),d.jsxs(bo,{onClick:()=>o(t),children:[u?d.jsx(Xc,{size:15}):d.jsx(nv,{size:15}),u?"Selected":"Select All"]}),d.jsxs(bo,{onClick:r,$variant:"ghost",children:[d.jsx(Xc,{size:15}),"Clear"]}),d.jsxs(bo,{$variant:"primary",onClick:c,children:[d.jsx(Br,{size:15}),"Download"]}),d.jsx(bo,{$variant:"danger",onClick:r,children:d.jsx(dl,{size:15})})]})}const Th=yn`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`,tx=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${s.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,nx=w.div`
  border-radius: ${s.radii.xl};
  overflow: hidden;
  background: white;
  box-shadow: ${s.shadows.card};
`,rx=w.div`
  aspect-ratio: 4/3;
  background: linear-gradient(
    90deg,
    ${s.colors.neutral100} 25%,
    ${s.colors.neutral200} 50%,
    ${s.colors.neutral100} 75%
  );
  background-size: 800px 100%;
  animation: ${Th} 1.5s infinite linear;
`,ox=w.div`
  padding: ${s.spacing[4]};
`,Kl=w.div`
  height: ${({$height:e})=>e||"14px"};
  width: ${({$width:e})=>e||"100%"};
  border-radius: ${s.radii.sm};
  background: linear-gradient(
    90deg,
    ${s.colors.neutral100} 25%,
    ${s.colors.neutral200} 50%,
    ${s.colors.neutral100} 75%
  );
  background-size: 800px 100%;
  animation: ${Th} 1.5s infinite linear;
  margin-bottom: ${s.spacing[2]};
`;function ix({count:e=8}){return d.jsx(tx,{children:Array.from({length:e}).map((t,n)=>d.jsxs(nx,{children:[d.jsx(rx,{}),d.jsxs(ox,{children:[d.jsx(Kl,{$width:"75%",$height:"16px"}),d.jsx(Kl,{$width:"50%"}),d.jsx(Kl,{$width:"90%"})]})]},n))})}const lx=w.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${s.spacing[2]};
  padding: ${s.spacing[8]} 0;
`,Xl=w.button`
  min-width: 40px;
  height: 40px;
  padding: 0 ${({$arrow:e})=>e?"10px":"4px"};
  border-radius: ${s.radii.lg};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${({$active:e})=>e?s.typography.weights.semibold:s.typography.weights.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${s.transitions.fast};

  background: ${({$active:e})=>e?s.colors.primary500:"white"};
  color: ${({$active:e})=>e?"white":s.colors.neutral600};
  border: 1.5px solid ${({$active:e})=>e?s.colors.primary500:s.colors.neutral200};
  box-shadow: ${({$active:e})=>e?"none":s.shadows.sm};

  &:hover:not(:disabled) {
    background: ${({$active:e})=>e?s.colors.primary400:s.colors.neutral50};
    border-color: ${({$active:e})=>e?s.colors.primary400:s.colors.neutral300};
    color: ${({$active:e})=>e?"white":s.colors.neutral900};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,sx=w.span`
  color: ${s.colors.neutral400};
  font-size: ${s.typography.sizes.sm};
  padding: 0 4px;
`,ax=w.span`
  font-size: ${s.typography.sizes.sm};
  color: ${s.colors.neutral500};
  padding: 0 ${s.spacing[2]};
`;function ux(e,t){if(t<=7)return Array.from({length:t},(r,o)=>o+1);const n=[1];e>3&&n.push("...");for(let r=Math.max(2,e-1);r<=Math.min(t-1,e+1);r++)n.push(r);return e<t-2&&n.push("..."),n.push(t),n}function cx({currentPage:e,totalPages:t,onPage:n,onNext:r,onPrev:o,hasNext:i,hasPrev:l}){if(t<=1)return null;const a=ux(e,t);return d.jsxs(lx,{children:[d.jsx(Xl,{$arrow:!0,onClick:o,disabled:!l,children:d.jsx(rv,{size:16})}),a.map((u,c)=>u==="..."?d.jsx(sx,{children:"..."},`ellipsis-${c}`):d.jsx(Xl,{$active:u===e,onClick:()=>n(u),children:u},u)),d.jsx(Xl,{$arrow:!0,onClick:r,disabled:!i,children:d.jsx(ov,{size:16})}),d.jsxs(ax,{children:[e," / ",t]})]})}const od=8,dx=w.section`
  background: linear-gradient(
    135deg,
    ${s.colors.primary900} 0%,
    ${s.colors.primary700} 60%,
    ${s.colors.primary500} 100%
  );
  color: white;
  padding: 120px ${s.spacing[6]} 80px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`,fx=w.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`,px=w.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: ${s.radii["2xl"]};
  margin-bottom: ${s.spacing[5]};
  backdrop-filter: blur(8px);
`,hx=w.h1`
  font-size: ${s.typography.sizes["5xl"]};
  font-weight: ${s.typography.weights.semibold};
  line-height: ${s.typography.lineHeights.tight};
  margin-bottom: ${s.spacing[4]};
  letter-spacing: -0.02em;

  @media (max-width: ${s.breakpoints.md}) {
    font-size: ${s.typography.sizes["3xl"]};
  }
`,mx=w.p`
  font-size: ${s.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.75);
  line-height: ${s.typography.lineHeights.relaxed};
`,gx=w.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${s.spacing[10]} ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.md}) {
    padding: ${s.spacing[8]} ${s.spacing[4]};
  }
`,yx=w.div`
  margin-bottom: ${s.spacing[8]};
  display: flex;
  flex-direction: column;
  gap: ${s.spacing[4]};
`,vx=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${s.spacing[2]};
`,xx=w.span`
  font-size: ${s.typography.sizes.sm};
  color: ${s.colors.neutral500};
  font-weight: ${s.typography.weights.medium};
`,wx=w.div`
  display: flex;
  gap: ${s.spacing[2]};
  flex-wrap: wrap;
`,Zl=w.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: ${s.colors.primary50};
  color: ${s.colors.primary700};
  border: 1px solid ${s.colors.primary200};
  border-radius: ${s.radii.full};
  font-size: ${s.typography.sizes.xs};
  font-weight: ${s.typography.weights.medium};
  transition: all ${s.transitions.fast};

  &:hover {
    background: ${s.colors.primary100};
  }
`,$x=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${s.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,Jl=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${s.spacing[20]} ${s.spacing[4]};
  text-align: center;
  gap: ${s.spacing[4]};
  color: ${s.colors.neutral500};
`,ql=w.h3`
  font-size: ${s.typography.sizes.xl};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral700};
`,es=w.p`
  font-size: ${s.typography.sizes.base};
  max-width: 400px;
  line-height: ${s.typography.lineHeights.relaxed};
`,id=w.button`
  display: flex;
  align-items: center;
  gap: ${s.spacing[2]};
  padding: ${s.spacing[3]} ${s.spacing[6]};
  background: ${s.colors.primary500};
  color: white;
  border-radius: ${s.radii.lg};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.medium};
  transition: background ${s.transitions.fast};
  margin-top: ${s.spacing[2]};

  &:hover {
    background: ${s.colors.primary400};
  }
`;function kx(){const{pets:e,loading:t,error:n,isEmpty:r,refetch:o}=Lh(),{filters:i,setSearch:l,setSpecies:a,resetFilters:u}=jh(),c=Pv(e,i),{currentItems:f,currentPage:h,totalPages:g,goToPage:k,nextPage:x,prevPage:$,hasNext:j,hasPrev:m}=Rv(c,od);v.useEffect(()=>{k(1)},[i]);const p=i.search||i.species!=="all";return d.jsxs(d.Fragment,{children:[d.jsx(dx,{children:d.jsxs(fx,{children:[d.jsx(px,{children:d.jsx(Ai,{size:36,color:"white"})}),d.jsx(hx,{children:"Find Your Perfect Companion"}),d.jsx(mx,{children:"Browse our gallery of adorable pets looking for their forever home. Select favorites and download their photos."})]})}),d.jsxs(gx,{children:[d.jsxs(yx,{children:[d.jsx(Kv,{}),d.jsxs(vx,{children:[d.jsx(xx,{children:t?"Loading...":`${c.length} pet${c.length!==1?"s":""} found`}),p&&d.jsxs(wx,{children:[i.search&&d.jsxs(Zl,{onClick:()=>l(""),children:['"',i.search,'" ×']}),i.species!=="all"&&d.jsxs(Zl,{onClick:()=>a("all"),children:[i.species,"s ×"]}),d.jsx(Zl,{onClick:u,children:"Clear all ×"})]})]})]}),t&&d.jsx(ix,{count:od}),n&&d.jsxs(Jl,{children:[d.jsx(q1,{size:48,color:s.colors.error500}),d.jsx(ql,{children:"Failed to load pets"}),d.jsx(es,{children:n}),d.jsxs(id,{onClick:o,children:[d.jsx(cv,{size:16}),"Try again"]})]}),r&&d.jsxs(Jl,{children:[d.jsx(Ai,{size:48,color:s.colors.neutral300}),d.jsx(ql,{children:"No pets available"}),d.jsx(es,{children:"Check back later — we update our listings regularly!"})]}),!t&&!n&&c.length===0&&!r&&d.jsxs(Jl,{children:[d.jsx(dv,{size:48,color:s.colors.neutral300}),d.jsx(ql,{children:"No results found"}),d.jsx(es,{children:"Try adjusting your search or filters to find what you're looking for."}),d.jsx(id,{onClick:u,style:{background:s.colors.neutral600},children:"Reset filters"})]}),!t&&!n&&f.length>0&&d.jsxs(d.Fragment,{children:[d.jsx($x,{children:f.map((y,S)=>d.jsx(Bv,{pet:y,index:S},y.id||`${y.title}-${S}`))}),d.jsx(cx,{currentPage:h,totalPages:g,onPage:k,onNext:x,onPrev:$,hasNext:j,hasPrev:m})]})]}),d.jsx(ex,{allPets:e,visiblePets:c})]})}function Sx(e){const[t,n]=v.useState(null),[r,o]=v.useState(!0),[i,l]=v.useState("");return v.useEffect(()=>{fetch("https://eulerity-hackathon.appspot.com/pets").then(a=>a.json()).then(a=>{const c=a.map((f,h)=>({id:String(h+1),title:f.title,description:f.description,imageUrl:f.url,createdAt:f.created,species:f.title.toLowerCase().includes("cat")?"Cat":f.title.toLowerCase().includes("bun")?"Rabbit":f.title.toLowerCase().includes("parrot")?"Bird":"Dog",breed:"Mixed Breed",age:h%10+1,gender:h%2===0?"Male":"Female",weight:`${h%20+2}kg`,location:"New York, USA",status:"Available",tags:["friendly","cute"],fileSizeKb:500})).find(f=>f.id===e);if(!c)throw new Error("Pet not found");n(c)}).catch(a=>l(a.message)).finally(()=>o(!1))},[e]),{pet:t,loading:r,error:i}}const Cx=yn`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`,Ex=w.div`
  min-height: 100vh;
  background: ${s.colors.neutral50};
  padding-top: 64px;
  animation: ${Cx} 0.35s ease;
`,ts=w.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${s.spacing[6]} ${s.spacing[6]} 0;

  @media (max-width: ${s.breakpoints.md}) {
    padding: ${s.spacing[4]} ${s.spacing[4]} 0;
  }
`,ns=w(or)`
  display: inline-flex;
  align-items: center;
  gap: ${s.spacing[2]};
  color: ${s.colors.neutral500};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.medium};
  padding: ${s.spacing[2]} ${s.spacing[3]};
  border-radius: ${s.radii.lg};
  transition: all ${s.transitions.fast};

  &:hover {
    background: white;
    color: ${s.colors.neutral900};
    box-shadow: ${s.shadows.sm};
  }
`,ld=w.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${s.spacing[6]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${s.spacing[10]};
  align-items: start;

  @media (max-width: ${s.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${s.spacing[6]};
  }

  @media (max-width: ${s.breakpoints.md}) {
    padding: ${s.spacing[4]};
  }
`,jx=w.div`
  position: sticky;
  top: 80px;

  @media (max-width: ${s.breakpoints.lg}) {
    position: static;
  }
`,zx=w.div`
  border-radius: ${s.radii["2xl"]};
  overflow: hidden;
  aspect-ratio: 4/3;
  box-shadow: ${s.shadows.xl};
`,Px=w.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Rx=w.div`
  display: flex;
  gap: ${s.spacing[3]};
  margin-top: ${s.spacing[4]};
`,rs=w.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${s.spacing[2]};
  padding: ${s.spacing[3]} ${s.spacing[4]};
  border-radius: ${s.radii.xl};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.semibold};
  transition: all ${s.transitions.fast};

  background: ${({$primary:e})=>e?s.colors.primary500:"white"};
  color: ${({$primary:e})=>e?"white":s.colors.neutral700};
  border: 1.5px solid ${({$primary:e})=>e?s.colors.primary500:s.colors.neutral200};
  box-shadow: ${s.shadows.sm};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${s.shadows.md};
    background: ${({$primary:e})=>e?s.colors.primary400:s.colors.neutral50};
  }
`,_x=w.div`
  display: flex;
  flex-direction: column;
  gap: ${s.spacing[6]};
`,Nx=w.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  background: ${s.colors.success50};
  color: ${s.colors.success700};
  border: 1px solid ${s.colors.success500}40;
  border-radius: ${s.radii.full};
  font-size: ${s.typography.sizes.xs};
  font-weight: ${s.typography.weights.semibold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`,Lx=w.span`
  display: inline-flex;
  padding: 4px 14px;
  background: ${s.colors.primary50};
  color: ${s.colors.primary700};
  border-radius: ${s.radii.full};
  font-size: ${s.typography.sizes.xs};
  font-weight: ${s.typography.weights.semibold};
`,Tx=w.div`
  display: flex;
  flex-direction: column;
  gap: ${s.spacing[2]};
`,Ix=w.div`
  display: flex;
  gap: ${s.spacing[2]};
  flex-wrap: wrap;
`,Mx=w.h1`
  font-size: ${s.typography.sizes["4xl"]};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral900};
  line-height: ${s.typography.lineHeights.tight};
  letter-spacing: -0.02em;

  @media (max-width: ${s.breakpoints.md}) {
    font-size: ${s.typography.sizes["3xl"]};
  }
`,Ox=w.p`
  font-size: ${s.typography.sizes.base};
  color: ${s.colors.neutral600};
  line-height: ${s.typography.lineHeights.relaxed};
`,Fx=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${s.spacing[3]};
`,yr=w.div`
  display: flex;
  align-items: center;
  gap: ${s.spacing[3]};
  padding: ${s.spacing[4]};
  background: white;
  border-radius: ${s.radii.xl};
  border: 1px solid ${s.colors.neutral100};
  box-shadow: ${s.shadows.sm};
`,vr=w.div`
  width: 40px;
  height: 40px;
  border-radius: ${s.radii.lg};
  background: ${s.colors.primary50};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${s.colors.primary600};
  flex-shrink: 0;
`,xr=w.div``,wr=w.div`
  font-size: ${s.typography.sizes.xs};
  color: ${s.colors.neutral400};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: ${s.typography.weights.semibold};
`,$r=w.div`
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral800};
  margin-top: 2px;
`,Dx=w.div``,Ax=w.div`
  font-size: ${s.typography.sizes.xs};
  color: ${s.colors.neutral400};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: ${s.typography.weights.semibold};
  margin-bottom: ${s.spacing[3]};
  display: flex;
  align-items: center;
  gap: ${s.spacing[2]};
`,bx=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${s.spacing[2]};
`,Bx=w.span`
  padding: 6px 14px;
  background: ${s.colors.secondary50};
  color: ${s.colors.secondary700};
  border: 1px solid ${s.colors.secondary200};
  border-radius: ${s.radii.full};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.medium};
`,sd=w.div`
  padding-top: 64px;
`,Bo=w.div`
  background: linear-gradient(
    90deg,
    ${s.colors.neutral100} 25%,
    ${s.colors.neutral200} 50%,
    ${s.colors.neutral100} 75%
  );
  background-size: 800px 100%;
  border-radius: ${s.radii.xl};
`;function Ux(){const{id:e}=W0(),{pet:t,loading:n,error:r}=Sx(e),{toggleSelect:o,isSelected:i}=wo(),{addToast:l}=cl();if(n)return d.jsxs(sd,{children:[d.jsx(ts,{children:d.jsx(ns,{to:"/",children:"← Back to Gallery"})}),d.jsxs(ld,{children:[d.jsx(Bo,{style:{aspectRatio:"4/3"}}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[d.jsx(Bo,{style:{height:32,width:"60%"}}),d.jsx(Bo,{style:{height:24,width:"40%"}}),d.jsx(Bo,{style:{height:80}})]})]})]});if(r||!t)return d.jsxs(sd,{children:[d.jsx(ts,{children:d.jsx(ns,{to:"/",children:"← Back to Gallery"})}),d.jsxs("div",{style:{textAlign:"center",padding:"80px 20px",color:s.colors.neutral500},children:[d.jsx("h2",{style:{fontSize:s.typography.sizes["2xl"],marginBottom:8},children:"Pet not found"}),d.jsx("p",{children:r})]})]});const a=i(t.id),u=()=>{navigator.clipboard.writeText(window.location.href).then(()=>{l("Link copied to clipboard!","success")})},c=()=>{l(`Downloading photo of ${t.title}...`,"success")};return d.jsxs(Ex,{children:[d.jsx(ts,{children:d.jsxs(ns,{to:"/",children:[d.jsx(Ph,{size:16}),"Back to Gallery"]})}),d.jsxs(ld,{children:[d.jsxs(jx,{children:[d.jsx(zx,{children:d.jsx(Px,{src:t.imageUrl,alt:t.title})}),d.jsxs(Rx,{children:[d.jsx(rs,{$primary:a,onClick:()=>o(t.id),children:a?d.jsxs(d.Fragment,{children:[d.jsx(Rh,{size:16})," Selected"]}):d.jsxs(d.Fragment,{children:[d.jsx(uo,{size:16})," Select"]})}),d.jsxs(rs,{onClick:c,children:[d.jsx(Br,{size:16})," Download"]}),d.jsx(rs,{onClick:u,style:{flex:"0 0 auto",width:48},children:d.jsx(pv,{size:16})})]})]}),d.jsxs(_x,{children:[d.jsxs(Tx,{children:[d.jsxs(Ix,{children:[d.jsxs(Nx,{children:[d.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:s.colors.success500,display:"inline-block"}}),t.status]}),d.jsx(Lx,{children:t.species})]}),d.jsx(Mx,{children:t.title})]}),d.jsx(Ox,{children:t.description}),d.jsxs(Fx,{children:[d.jsxs(yr,{children:[d.jsx(vr,{children:d.jsx(gv,{size:18})}),d.jsxs(xr,{children:[d.jsx(wr,{children:"Gender"}),d.jsx($r,{children:t.gender})]})]}),d.jsxs(yr,{children:[d.jsx(vr,{children:d.jsx(ua,{size:18})}),d.jsxs(xr,{children:[d.jsx(wr,{children:"Age"}),d.jsxs($r,{children:[t.age," year",t.age!==1?"s":""]})]})]}),d.jsxs(yr,{children:[d.jsx(vr,{children:d.jsx(vv,{size:18})}),d.jsxs(xr,{children:[d.jsx(wr,{children:"Weight"}),d.jsx($r,{children:t.weight})]})]}),d.jsxs(yr,{children:[d.jsx(vr,{children:d.jsx(Nh,{size:18})}),d.jsxs(xr,{children:[d.jsx(wr,{children:"Location"}),d.jsx($r,{children:t.location})]})]})]}),d.jsx("div",{children:d.jsxs(yr,{style:{marginBottom:s.spacing[3]},children:[d.jsx(vr,{children:d.jsx(Zc,{size:18})}),d.jsxs(xr,{children:[d.jsx(wr,{children:"Breed"}),d.jsx($r,{children:t.breed})]})]})}),d.jsxs(Dx,{children:[d.jsxs(Ax,{children:[d.jsx(Zc,{size:12}),"Personality Traits"]}),d.jsx(bx,{children:t.tags.map(f=>d.jsx(Bx,{children:f},f))})]}),d.jsxs("div",{style:{fontSize:s.typography.sizes.xs,color:s.colors.neutral400,display:"flex",alignItems:"center",gap:6},children:[d.jsx(ua,{size:12}),"Listed on"," ",new Date(t.createdAt).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})]})]})]})]})}const Hx=yn`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`,Wx=w.div`
  min-height: 100vh;
  padding-top: 64px;
  background: ${s.colors.neutral50};
`,Vx=w.div`
  background: white;
  border-bottom: 1px solid ${s.colors.neutral100};
  padding: ${s.spacing[8]} ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.md}) {
    padding: ${s.spacing[6]} ${s.spacing[4]};
  }
`,Gx=w.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${s.spacing[4]};
`,Qx=w.div``,Yx=w.h1`
  font-size: ${s.typography.sizes["3xl"]};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral900};
  letter-spacing: -0.02em;
`,Kx=w.p`
  color: ${s.colors.neutral500};
  font-size: ${s.typography.sizes.sm};
  margin-top: ${s.spacing[1]};
`,Xx=w.div`
  display: flex;
  gap: ${s.spacing[3]};
  flex-wrap: wrap;
`,ad=w.button`
  display: flex;
  align-items: center;
  gap: ${s.spacing[2]};
  padding: ${s.spacing[2]} ${s.spacing[4]};
  border-radius: ${s.radii.lg};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.medium};
  border: 1.5px solid transparent;
  transition: all ${s.transitions.fast};

  ${({$variant:e="default"})=>{switch(e){case"primary":return`
          background: ${s.colors.primary500};
          color: white;
          &:hover { background: ${s.colors.primary400}; }
        `;case"danger":return`
          background: ${s.colors.error50};
          color: ${s.colors.error500};
          border-color: ${s.colors.error50};
          &:hover { background: ${s.colors.error500}; color: white; }
        `;default:return`
          background: white;
          color: ${s.colors.neutral700};
          border-color: ${s.colors.neutral200};
          box-shadow: ${s.shadows.sm};
          &:hover { background: ${s.colors.neutral50}; }
        `}}}
`,Zx=w.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${s.spacing[8]} ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.md}) {
    padding: ${s.spacing[6]} ${s.spacing[4]};
  }
`,Jx=w.div`
  display: flex;
  gap: ${s.spacing[4]};
  margin-bottom: ${s.spacing[8]};
  flex-wrap: wrap;
`,ud=w.div`
  display: flex;
  align-items: center;
  gap: ${s.spacing[2]};
  padding: ${s.spacing[3]} ${s.spacing[4]};
  background: white;
  border: 1px solid ${s.colors.neutral200};
  border-radius: ${s.radii.xl};
  box-shadow: ${s.shadows.sm};
  font-size: ${s.typography.sizes.sm};
  color: ${s.colors.neutral700};

  strong {
    color: ${s.colors.neutral900};
    font-weight: ${s.typography.weights.semibold};
  }
`,qx=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${s.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,ew=w.div`
  background: white;
  border-radius: ${s.radii.xl};
  overflow: hidden;
  box-shadow: ${s.shadows.card};
  transition: all ${s.transitions.base};
  animation: ${Hx} 0.3s ease both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${s.shadows.cardHover};
  }
`,tw=w.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`,nw=w.div`
  padding: ${s.spacing[4]};
`,rw=w.h3`
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral900};
  margin-bottom: 2px;
`,ow=w.p`
  font-size: ${s.typography.sizes.xs};
  color: ${s.colors.neutral500};
  margin-bottom: ${s.spacing[3]};
`,iw=w.div`
  display: flex;
  gap: ${s.spacing[2]};
`,cd=w.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px 0;
  border-radius: ${s.radii.md};
  font-size: ${s.typography.sizes.xs};
  font-weight: ${s.typography.weights.medium};
  border: 1px solid;
  transition: all ${s.transitions.fast};

  ${({$danger:e})=>e?`
    border-color: ${s.colors.error50};
    color: ${s.colors.error500};
    background: ${s.colors.error50};
    &:hover { background: ${s.colors.error500}; color: white; }
  `:`
    border-color: ${s.colors.neutral200};
    color: ${s.colors.neutral600};
    background: ${s.colors.neutral50};
    &:hover { background: ${s.colors.primary50}; color: ${s.colors.primary700}; border-color: ${s.colors.primary200}; }
  `}
`,lw=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${s.spacing[20]} ${s.spacing[4]};
  text-align: center;
  gap: ${s.spacing[4]};
`,sw=w.h3`
  font-size: ${s.typography.sizes.xl};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral700};
`,aw=w.p`
  color: ${s.colors.neutral500};
  max-width: 360px;
  line-height: ${s.typography.lineHeights.relaxed};
`,uw=w(or)`
  display: inline-flex;
  align-items: center;
  gap: ${s.spacing[2]};
  padding: ${s.spacing[3]} ${s.spacing[6]};
  background: ${s.colors.primary500};
  color: white;
  border-radius: ${s.radii.lg};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.medium};
  transition: background ${s.transitions.fast};
  margin-top: ${s.spacing[2]};

  &:hover {
    background: ${s.colors.primary400};
  }
`;function os(e){return e>=1024?`${(e/1024).toFixed(1)} MB`:`${e} KB`}function cw(){const{pets:e}=Lh(),{selectedIds:t,toggleSelect:n,clearSelection:r,totalFileSizeKb:o}=wo(),{addToast:i}=cl(),l=e.filter(f=>t.has(f.id)),a=o(e),u=()=>{i(`Downloading ${l.length} image${l.length!==1?"s":""} (${os(a)})`,"success")},c=f=>{n(f),i("Removed from favorites","info")};return d.jsxs(Wx,{children:[d.jsx(Vx,{children:d.jsxs(Gx,{children:[d.jsxs(Qx,{children:[d.jsxs(Yx,{children:[d.jsx(uo,{size:28,style:{display:"inline",verticalAlign:"middle",marginRight:8,color:s.colors.accent500}}),"My Favorites"]}),d.jsx(Kx,{children:l.length>0?`${l.length} pet${l.length!==1?"s":""} selected · ~${os(a)} total`:"No pets selected yet"})]}),l.length>0&&d.jsxs(Xx,{children:[d.jsxs(ad,{$variant:"primary",onClick:u,children:[d.jsx(Br,{size:15}),"Download All"]}),d.jsxs(ad,{$variant:"danger",onClick:r,children:[d.jsx(Jc,{size:15}),"Clear All"]})]})]})}),d.jsxs(Zx,{children:[l.length>0&&d.jsxs(Jx,{children:[d.jsxs(ud,{children:[d.jsx(_h,{size:15,color:s.colors.primary500}),d.jsx("strong",{children:l.length})," selected"]}),d.jsxs(ud,{children:[d.jsx(Br,{size:15,color:s.colors.secondary500}),"Estimated size: ",d.jsx("strong",{children:os(a)})]})]}),l.length===0?d.jsxs(lw,{children:[d.jsx(uo,{size:56,color:s.colors.neutral200}),d.jsx(sw,{children:"No favorites yet"}),d.jsx(aw,{children:"Browse the gallery and click the heart icon on any pet to add them to your favorites list."}),d.jsxs(uw,{to:"/",children:[d.jsx(Ph,{size:16}),"Browse Gallery"]})]}):d.jsx(qx,{children:l.map((f,h)=>d.jsxs(ew,{style:{animationDelay:`${h*40}ms`},children:[d.jsx(or,{to:`/pets/${f.id}`,children:d.jsx(tw,{src:f.imageUrl,alt:f.title,loading:"lazy"})}),d.jsxs(nw,{children:[d.jsx(rw,{children:f.title}),d.jsxs(ow,{children:[f.breed," · ",f.location]}),d.jsxs(iw,{children:[d.jsxs(cd,{onClick:()=>i(`Downloading ${f.title}...`,"success"),children:[d.jsx(Br,{size:12}),"Download"]}),d.jsxs(cd,{$danger:!0,onClick:()=>c(f.id),children:[d.jsx(Jc,{size:12}),"Remove"]})]})]})]},f.id))})]})]})}const dw=yn`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`,fw=w.div`
  min-height: 100vh;
  padding-top: 64px;
  animation: ${dw} 0.4s ease;
`,pw=w.section`
  background: linear-gradient(
    160deg,
    ${s.colors.neutral900} 0%,
    ${s.colors.neutral700} 100%
  );
  color: white;
  padding: 100px ${s.spacing[6]} 80px;
  text-align: center;
`,hw=w.div`
  max-width: 700px;
  margin: 0 auto;
`,mw=w.p`
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${s.colors.primary400};
  margin-bottom: ${s.spacing[4]};
`,gw=w.h1`
  font-size: ${s.typography.sizes["5xl"]};
  font-weight: ${s.typography.weights.semibold};
  line-height: ${s.typography.lineHeights.tight};
  letter-spacing: -0.02em;
  margin-bottom: ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.md}) {
    font-size: ${s.typography.sizes["3xl"]};
  }
`,yw=w.p`
  font-size: ${s.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.7);
  line-height: ${s.typography.lineHeights.relaxed};
`,dd=w.section`
  background: ${({$bg:e})=>e||"white"};
  padding: ${s.spacing[20]} ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.md}) {
    padding: ${s.spacing[12]} ${s.spacing[4]};
  }
`,fd=w.div`
  max-width: 1280px;
  margin: 0 auto;
`,pd=w.p`
  text-align: center;
  font-size: ${s.typography.sizes.xs};
  font-weight: ${s.typography.weights.semibold};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${s.colors.primary600};
  margin-bottom: ${s.spacing[3]};
`,hd=w.h2`
  text-align: center;
  font-size: ${s.typography.sizes["3xl"]};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral900};
  letter-spacing: -0.02em;
  margin-bottom: ${s.spacing[4]};
`,md=w.p`
  text-align: center;
  font-size: ${s.typography.sizes.base};
  color: ${s.colors.neutral500};
  max-width: 560px;
  margin: 0 auto ${s.spacing[12]};
  line-height: ${s.typography.lineHeights.relaxed};
`,vw=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${s.spacing[8]};

  @media (max-width: ${s.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${s.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,wn=w.div`
  text-align: center;
  padding: ${s.spacing[8]} ${s.spacing[6]};
  border-radius: ${s.radii["2xl"]};
  background: ${s.colors.neutral50};
  border: 1px solid ${s.colors.neutral100};
  transition: all ${s.transitions.base};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${s.shadows.lg};
    background: white;
  }
`,$n=w.div`
  width: 64px;
  height: 64px;
  border-radius: ${s.radii.xl};
  background: ${s.colors.primary50};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${s.spacing[5]};
  color: ${s.colors.primary600};
`,kn=w.h3`
  font-size: ${s.typography.sizes.lg};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral900};
  margin-bottom: ${s.spacing[3]};
`,Sn=w.p`
  font-size: ${s.typography.sizes.sm};
  color: ${s.colors.neutral500};
  line-height: ${s.typography.lineHeights.relaxed};
`,xw=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s.spacing[6]};
  margin-top: ${s.spacing[12]};

  @media (max-width: ${s.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${s.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${s.spacing[4]};
  }
`,Uo=w.div`
  text-align: center;
  padding: ${s.spacing[6]};
  background: white;
  border-radius: ${s.radii.xl};
  border: 1px solid ${s.colors.neutral100};
  box-shadow: ${s.shadows.sm};
`,Ho=w.div`
  font-size: ${s.typography.sizes["4xl"]};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.primary600};
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: ${s.spacing[2]};
`,Wo=w.div`
  font-size: ${s.typography.sizes.sm};
  color: ${s.colors.neutral500};
`,ww=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${s.spacing[6]};

  @media (max-width: ${s.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${s.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,$w=w.div`
  text-align: center;
`,kw=w.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto ${s.spacing[3]};
  border: 3px solid ${s.colors.neutral100};
`,Sw=w.div`
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.neutral900};
  font-size: ${s.typography.sizes.sm};
`,Cw=w.div`
  font-size: ${s.typography.sizes.xs};
  color: ${s.colors.neutral500};
  margin-top: 2px;
`,Ew=w.section`
  background: linear-gradient(
    135deg,
    ${s.colors.primary700},
    ${s.colors.primary500}
  );
  color: white;
  padding: ${s.spacing[20]} ${s.spacing[6]};
  text-align: center;
`,jw=w.h2`
  font-size: ${s.typography.sizes["4xl"]};
  font-weight: ${s.typography.weights.semibold};
  letter-spacing: -0.02em;
  margin-bottom: ${s.spacing[4]};

  @media (max-width: ${s.breakpoints.md}) {
    font-size: ${s.typography.sizes["3xl"]};
  }
`,zw=w.p`
  font-size: ${s.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: ${s.spacing[8]};
`,Pw=w(or)`
  display: inline-flex;
  align-items: center;
  gap: ${s.spacing[2]};
  padding: ${s.spacing[4]} ${s.spacing[8]};
  background: white;
  color: ${s.colors.primary700};
  border-radius: ${s.radii.xl};
  font-size: ${s.typography.sizes.base};
  font-weight: ${s.typography.weights.semibold};
  transition: all ${s.transitions.fast};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${s.shadows.xl};
  }
`,Rw=[{name:"Sarah Chen",role:"Founder & CEO",img:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"},{name:"Marcus Rivera",role:"Head of Operations",img:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"},{name:"Priya Patel",role:"Lead Developer",img:"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"},{name:"James Okafor",role:"Animal Welfare Lead",img:"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"}];function _w(){return d.jsxs(fw,{children:[d.jsx(pw,{children:d.jsxs(hw,{children:[d.jsx(mw,{children:"About PetGallery"}),d.jsxs(gw,{children:["Every pet deserves a",d.jsx("br",{})," loving home"]}),d.jsx(yw,{children:"We're on a mission to connect amazing animals with equally amazing families. Our platform makes pet adoption transparent, joyful, and accessible to everyone."})]})}),d.jsx(dd,{children:d.jsxs(fd,{children:[d.jsx(pd,{children:"Our Mission"}),d.jsx(hd,{children:"Why we do what we do"}),d.jsx(md,{children:"Millions of pets are waiting for their forever homes. We built PetGallery to make the discovery process delightful."}),d.jsxs(vw,{children:[d.jsxs(wn,{children:[d.jsx($n,{children:d.jsx(uo,{size:28})}),d.jsx(kn,{children:"Compassion First"}),d.jsx(Sn,{children:"Every decision we make starts with the well-being of the animals in our care. We partner only with shelters who share our values."})]}),d.jsxs(wn,{children:[d.jsx($n,{children:d.jsx(hv,{size:28})}),d.jsx(kn,{children:"Trusted & Verified"}),d.jsx(Sn,{children:"All partner shelters are thoroughly vetted. Pet profiles are accurate, up-to-date, and include honest health histories."})]}),d.jsxs(wn,{children:[d.jsx($n,{children:d.jsx(yv,{size:28})}),d.jsx(kn,{children:"Community Driven"}),d.jsx(Sn,{children:"Over 50,000 adopters have found their companions through PetGallery. Our community reviews help others make informed decisions."})]}),d.jsxs(wn,{children:[d.jsx($n,{children:d.jsx(lv,{size:28})}),d.jsx(kn,{children:"Nationwide Network"}),d.jsx(Sn,{children:"We connect pets and people across 48 states, with over 1,200 partner shelters and rescue organizations."})]}),d.jsxs(wn,{children:[d.jsx($n,{children:d.jsx(wv,{size:28})}),d.jsx(kn,{children:"Fast & Modern"}),d.jsx(Sn,{children:"Built with the latest technology, our platform loads instantly and works beautifully on any device."})]}),d.jsxs(wn,{children:[d.jsx($n,{children:d.jsx(mv,{size:28})}),d.jsx(kn,{children:"5-Star Support"}),d.jsx(Sn,{children:"Our dedicated team is here 7 days a week to help you through every step of the adoption journey."})]})]}),d.jsxs(xw,{children:[d.jsxs(Uo,{children:[d.jsx(Ho,{children:"50K+"}),d.jsx(Wo,{children:"Happy adoptions"})]}),d.jsxs(Uo,{children:[d.jsx(Ho,{children:"1.2K"}),d.jsx(Wo,{children:"Partner shelters"})]}),d.jsxs(Uo,{children:[d.jsx(Ho,{children:"48"}),d.jsx(Wo,{children:"States covered"})]}),d.jsxs(Uo,{children:[d.jsx(Ho,{children:"4.9★"}),d.jsx(Wo,{children:"Average rating"})]})]})]})}),d.jsx(dd,{$bg:s.colors.neutral50,children:d.jsxs(fd,{children:[d.jsx(pd,{children:"Our Team"}),d.jsx(hd,{children:"The humans behind the mission"}),d.jsx(md,{children:"A small but passionate team of animal lovers, technologists, and advocates."}),d.jsx(ww,{children:Rw.map(e=>d.jsxs($w,{children:[d.jsx(kw,{src:e.img,alt:e.name,loading:"lazy"}),d.jsx(Sw,{children:e.name}),d.jsx(Cw,{children:e.role})]},e.name))})]})}),d.jsxs(Ew,{children:[d.jsx(jw,{children:"Ready to find your companion?"}),d.jsx(zw,{children:"Browse our gallery of pets and take the first step toward a forever friendship."}),d.jsxs(Pw,{to:"/",children:[d.jsx(Ai,{size:18}),"Browse Gallery",d.jsx(ev,{size:18})]})]})]})}const Nw=w.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all ${s.transitions.base};

  ${({$scrolled:e})=>e?we`
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid ${s.colors.neutral200};
          box-shadow: ${s.shadows.sm};
        `:we`
          background: transparent;
        `}
`,Lw=w.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${s.spacing[6]};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${s.breakpoints.md}) {
    padding: 0 ${s.spacing[4]};
  }
`,Tw=w(ol)`
  display: flex;
  align-items: center;
  gap: ${s.spacing[2]};
  font-size: ${s.typography.sizes.xl};
  font-weight: ${s.typography.weights.semibold};
  color: ${s.colors.primary700};
  transition: opacity ${s.transitions.fast};

  &:hover {
    opacity: 0.8;
  }

  svg {
    color: ${s.colors.primary500};
  }
`,Iw=w.nav`
  display: flex;
  align-items: center;
  gap: ${s.spacing[1]};

  @media (max-width: ${s.breakpoints.md}) {
    display: none;
  }
`,is=w(ol)`
  padding: ${s.spacing[2]} ${s.spacing[4]};
  border-radius: ${s.radii.full};
  font-size: ${s.typography.sizes.sm};
  font-weight: ${s.typography.weights.medium};
  color: ${s.colors.neutral600};
  transition: all ${s.transitions.fast};

  &:hover {
    background: ${s.colors.neutral100};
    color: ${s.colors.neutral900};
  }

  &.active {
    background: ${s.colors.primary50};
    color: ${s.colors.primary700};
  }
`,Mw=w.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: ${s.colors.accent500};
  color: white;
  border-radius: ${s.radii.full};
  font-size: 11px;
  font-weight: ${s.typography.weights.semibold};
  margin-left: ${s.spacing[1]};
`,Ow=w.button`
  display: none;
  padding: ${s.spacing[2]};
  border-radius: ${s.radii.md};
  color: ${s.colors.neutral700};
  transition: background ${s.transitions.fast};

  &:hover {
    background: ${s.colors.neutral100};
  }

  @media (max-width: ${s.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,Fw=w.div`
  display: none;
  flex-direction: column;
  padding: ${s.spacing[4]};
  border-top: 1px solid ${s.colors.neutral200};
  background: white;

  @media (max-width: ${s.breakpoints.md}) {
    display: ${({$open:e})=>e?"flex":"none"};
  }
`,ls=w(ol)`
  padding: ${s.spacing[3]} ${s.spacing[4]};
  border-radius: ${s.radii.md};
  font-size: ${s.typography.sizes.base};
  font-weight: ${s.typography.weights.medium};
  color: ${s.colors.neutral600};
  transition: all ${s.transitions.fast};

  &:hover {
    background: ${s.colors.neutral50};
    color: ${s.colors.neutral900};
  }

  &.active {
    background: ${s.colors.primary50};
    color: ${s.colors.primary700};
  }
`;function Dw(){const[e,t]=v.useState(!1),[n,r]=v.useState(!1),{selectedCount:o}=wo(),i=pt();v.useEffect(()=>{const a=()=>t(window.scrollY>10);return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),v.useEffect(()=>{r(!1)},[i.pathname]);const l=i.pathname==="/";return d.jsxs(Nw,{$scrolled:e||!l,children:[d.jsxs(Lw,{children:[d.jsxs(Tw,{to:"/",children:[d.jsx(Ai,{size:24}),"PetGallery"]}),d.jsxs(Iw,{children:[d.jsx(is,{to:"/",children:"Gallery"}),d.jsxs(is,{to:"/favorites",children:["Favorites",o>0&&d.jsx(Mw,{children:o})]}),d.jsx(is,{to:"/about",children:"About"})]}),d.jsx(Ow,{onClick:()=>r(a=>!a),children:n?d.jsx(dl,{size:20}):d.jsx(uv,{size:20})})]}),d.jsxs(Fw,{$open:n,children:[d.jsx(ls,{to:"/",children:"Gallery"}),d.jsxs(ls,{to:"/favorites",children:["Favorites ",o>0&&`(${o})`]}),d.jsx(ls,{to:"/about",children:"About"})]})]})}function Aw(){return d.jsxs(b1,{theme:s,children:[d.jsx(Q1,{}),d.jsx(Ry,{children:d.jsx(X1,{children:d.jsx(Y1,{children:d.jsxs(K1,{children:[d.jsx(Dw,{}),d.jsxs(iy,{children:[d.jsx(jr,{path:"/",element:d.jsx(kx,{})}),d.jsx(jr,{path:"/pets/:id",element:d.jsx(Ux,{})}),d.jsx(jr,{path:"/favorites",element:d.jsx(cw,{})}),d.jsx(jr,{path:"/about",element:d.jsx(_w,{})})]}),d.jsx(jv,{})]})})})})]})}Rp(document.getElementById("root")).render(d.jsx(v.StrictMode,{children:d.jsx(Aw,{})}));

(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const m of f)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function s(f){const m={};return f.integrity&&(m.integrity=f.integrity),f.referrerPolicy&&(m.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?m.credentials="include":f.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(f){if(f.ep)return;f.ep=!0;const m=s(f);fetch(f.href,m)}})();var Xo={exports:{}},Tr={},Yo={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc;function $p(){if(cc)return Z;cc=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),y=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),N=Symbol.iterator;function j(x){return x===null||typeof x!="object"?null:(x=N&&x[N]||x["@@iterator"],typeof x=="function"?x:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,O={};function A(x,P,Y){this.props=x,this.context=P,this.refs=O,this.updater=Y||W}A.prototype.isReactComponent={},A.prototype.setState=function(x,P){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,P,"setState")},A.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function B(){}B.prototype=A.prototype;function q(x,P,Y){this.props=x,this.context=P,this.refs=O,this.updater=Y||W}var X=q.prototype=new B;X.constructor=q,V(X,A.prototype),X.isPureReactComponent=!0;var ne=Array.isArray,oe=Object.prototype.hasOwnProperty,ue={current:null},he={key:!0,ref:!0,__self:!0,__source:!0};function Re(x,P,Y){var ee,re={},ie=null,ce=null;if(P!=null)for(ee in P.ref!==void 0&&(ce=P.ref),P.key!==void 0&&(ie=""+P.key),P)oe.call(P,ee)&&!he.hasOwnProperty(ee)&&(re[ee]=P[ee]);var ae=arguments.length-2;if(ae===1)re.children=Y;else if(1<ae){for(var me=Array(ae),Ye=0;Ye<ae;Ye++)me[Ye]=arguments[Ye+2];re.children=me}if(x&&x.defaultProps)for(ee in ae=x.defaultProps,ae)re[ee]===void 0&&(re[ee]=ae[ee]);return{$$typeof:o,type:x,key:ie,ref:ce,props:re,_owner:ue.current}}function He(x,P){return{$$typeof:o,type:x.type,key:P,ref:x.ref,props:x.props,_owner:x._owner}}function Xe(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function Nt(x){var P={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Y){return P[Y]})}var rt=/\/+/g;function Oe(x,P){return typeof x=="object"&&x!==null&&x.key!=null?Nt(""+x.key):P.toString(36)}function $e(x,P,Y,ee,re){var ie=typeof x;(ie==="undefined"||ie==="boolean")&&(x=null);var ce=!1;if(x===null)ce=!0;else switch(ie){case"string":case"number":ce=!0;break;case"object":switch(x.$$typeof){case o:case u:ce=!0}}if(ce)return ce=x,re=re(ce),x=ee===""?"."+Oe(ce,0):ee,ne(re)?(Y="",x!=null&&(Y=x.replace(rt,"$&/")+"/"),$e(re,P,Y,"",function(Ye){return Ye})):re!=null&&(Xe(re)&&(re=He(re,Y+(!re.key||ce&&ce.key===re.key?"":(""+re.key).replace(rt,"$&/")+"/")+x)),P.push(re)),1;if(ce=0,ee=ee===""?".":ee+":",ne(x))for(var ae=0;ae<x.length;ae++){ie=x[ae];var me=ee+Oe(ie,ae);ce+=$e(ie,P,Y,me,re)}else if(me=j(x),typeof me=="function")for(x=me.call(x),ae=0;!(ie=x.next()).done;)ie=ie.value,me=ee+Oe(ie,ae++),ce+=$e(ie,P,Y,me,re);else if(ie==="object")throw P=String(x),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return ce}function Ne(x,P,Y){if(x==null)return x;var ee=[],re=0;return $e(x,ee,"","",function(ie){return P.call(Y,ie,re++)}),ee}function We(x){if(x._status===-1){var P=x._result;P=P(),P.then(function(Y){(x._status===0||x._status===-1)&&(x._status=1,x._result=Y)},function(Y){(x._status===0||x._status===-1)&&(x._status=2,x._result=Y)}),x._status===-1&&(x._status=0,x._result=P)}if(x._status===1)return x._result.default;throw x._result}var Se={current:null},_={transition:null},J={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:_,ReactCurrentOwner:ue};function z(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:Ne,forEach:function(x,P,Y){Ne(x,function(){P.apply(this,arguments)},Y)},count:function(x){var P=0;return Ne(x,function(){P++}),P},toArray:function(x){return Ne(x,function(P){return P})||[]},only:function(x){if(!Xe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Z.Component=A,Z.Fragment=s,Z.Profiler=f,Z.PureComponent=q,Z.StrictMode=c,Z.Suspense=C,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Z.act=z,Z.cloneElement=function(x,P,Y){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ee=V({},x.props),re=x.key,ie=x.ref,ce=x._owner;if(P!=null){if(P.ref!==void 0&&(ie=P.ref,ce=ue.current),P.key!==void 0&&(re=""+P.key),x.type&&x.type.defaultProps)var ae=x.type.defaultProps;for(me in P)oe.call(P,me)&&!he.hasOwnProperty(me)&&(ee[me]=P[me]===void 0&&ae!==void 0?ae[me]:P[me])}var me=arguments.length-2;if(me===1)ee.children=Y;else if(1<me){ae=Array(me);for(var Ye=0;Ye<me;Ye++)ae[Ye]=arguments[Ye+2];ee.children=ae}return{$$typeof:o,type:x.type,key:re,ref:ie,props:ee,_owner:ce}},Z.createContext=function(x){return x={$$typeof:y,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:m,_context:x},x.Consumer=x},Z.createElement=Re,Z.createFactory=function(x){var P=Re.bind(null,x);return P.type=x,P},Z.createRef=function(){return{current:null}},Z.forwardRef=function(x){return{$$typeof:v,render:x}},Z.isValidElement=Xe,Z.lazy=function(x){return{$$typeof:k,_payload:{_status:-1,_result:x},_init:We}},Z.memo=function(x,P){return{$$typeof:L,type:x,compare:P===void 0?null:P}},Z.startTransition=function(x){var P=_.transition;_.transition={};try{x()}finally{_.transition=P}},Z.unstable_act=z,Z.useCallback=function(x,P){return Se.current.useCallback(x,P)},Z.useContext=function(x){return Se.current.useContext(x)},Z.useDebugValue=function(){},Z.useDeferredValue=function(x){return Se.current.useDeferredValue(x)},Z.useEffect=function(x,P){return Se.current.useEffect(x,P)},Z.useId=function(){return Se.current.useId()},Z.useImperativeHandle=function(x,P,Y){return Se.current.useImperativeHandle(x,P,Y)},Z.useInsertionEffect=function(x,P){return Se.current.useInsertionEffect(x,P)},Z.useLayoutEffect=function(x,P){return Se.current.useLayoutEffect(x,P)},Z.useMemo=function(x,P){return Se.current.useMemo(x,P)},Z.useReducer=function(x,P,Y){return Se.current.useReducer(x,P,Y)},Z.useRef=function(x){return Se.current.useRef(x)},Z.useState=function(x){return Se.current.useState(x)},Z.useSyncExternalStore=function(x,P,Y){return Se.current.useSyncExternalStore(x,P,Y)},Z.useTransition=function(){return Se.current.useTransition()},Z.version="18.3.1",Z}var dc;function aa(){return dc||(dc=1,Yo.exports=$p()),Yo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pc;function Wp(){if(pc)return Tr;pc=1;var o=aa(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function y(v,C,L){var k,N={},j=null,W=null;L!==void 0&&(j=""+L),C.key!==void 0&&(j=""+C.key),C.ref!==void 0&&(W=C.ref);for(k in C)c.call(C,k)&&!m.hasOwnProperty(k)&&(N[k]=C[k]);if(v&&v.defaultProps)for(k in C=v.defaultProps,C)N[k]===void 0&&(N[k]=C[k]);return{$$typeof:u,type:v,key:j,ref:W,props:N,_owner:f.current}}return Tr.Fragment=s,Tr.jsx=y,Tr.jsxs=y,Tr}var fc;function Vp(){return fc||(fc=1,Xo.exports=Wp()),Xo.exports}var p=Vp(),R=aa(),Vi={},Zo={exports:{}},qe={},ea={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function Qp(){return mc||(mc=1,(function(o){function u(_,J){var z=_.length;_.push(J);e:for(;0<z;){var x=z-1>>>1,P=_[x];if(0<f(P,J))_[x]=J,_[z]=P,z=x;else break e}}function s(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var J=_[0],z=_.pop();if(z!==J){_[0]=z;e:for(var x=0,P=_.length,Y=P>>>1;x<Y;){var ee=2*(x+1)-1,re=_[ee],ie=ee+1,ce=_[ie];if(0>f(re,z))ie<P&&0>f(ce,re)?(_[x]=ce,_[ie]=z,x=ie):(_[x]=re,_[ee]=z,x=ee);else if(ie<P&&0>f(ce,z))_[x]=ce,_[ie]=z,x=ie;else break e}}return J}function f(_,J){var z=_.sortIndex-J.sortIndex;return z!==0?z:_.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var y=Date,v=y.now();o.unstable_now=function(){return y.now()-v}}var C=[],L=[],k=1,N=null,j=3,W=!1,V=!1,O=!1,A=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(_){for(var J=s(L);J!==null;){if(J.callback===null)c(L);else if(J.startTime<=_)c(L),J.sortIndex=J.expirationTime,u(C,J);else break;J=s(L)}}function ne(_){if(O=!1,X(_),!V)if(s(C)!==null)V=!0,We(oe);else{var J=s(L);J!==null&&Se(ne,J.startTime-_)}}function oe(_,J){V=!1,O&&(O=!1,B(Re),Re=-1),W=!0;var z=j;try{for(X(J),N=s(C);N!==null&&(!(N.expirationTime>J)||_&&!Nt());){var x=N.callback;if(typeof x=="function"){N.callback=null,j=N.priorityLevel;var P=x(N.expirationTime<=J);J=o.unstable_now(),typeof P=="function"?N.callback=P:N===s(C)&&c(C),X(J)}else c(C);N=s(C)}if(N!==null)var Y=!0;else{var ee=s(L);ee!==null&&Se(ne,ee.startTime-J),Y=!1}return Y}finally{N=null,j=z,W=!1}}var ue=!1,he=null,Re=-1,He=5,Xe=-1;function Nt(){return!(o.unstable_now()-Xe<He)}function rt(){if(he!==null){var _=o.unstable_now();Xe=_;var J=!0;try{J=he(!0,_)}finally{J?Oe():(ue=!1,he=null)}}else ue=!1}var Oe;if(typeof q=="function")Oe=function(){q(rt)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ne=$e.port2;$e.port1.onmessage=rt,Oe=function(){Ne.postMessage(null)}}else Oe=function(){A(rt,0)};function We(_){he=_,ue||(ue=!0,Oe())}function Se(_,J){Re=A(function(){_(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(_){_.callback=null},o.unstable_continueExecution=function(){V||W||(V=!0,We(oe))},o.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<_?Math.floor(1e3/_):5},o.unstable_getCurrentPriorityLevel=function(){return j},o.unstable_getFirstCallbackNode=function(){return s(C)},o.unstable_next=function(_){switch(j){case 1:case 2:case 3:var J=3;break;default:J=j}var z=j;j=J;try{return _()}finally{j=z}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(_,J){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var z=j;j=_;try{return J()}finally{j=z}},o.unstable_scheduleCallback=function(_,J,z){var x=o.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?x+z:x):z=x,_){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=z+P,_={id:k++,callback:J,priorityLevel:_,startTime:z,expirationTime:P,sortIndex:-1},z>x?(_.sortIndex=z,u(L,_),s(C)===null&&_===s(L)&&(O?(B(Re),Re=-1):O=!0,Se(ne,z-x))):(_.sortIndex=P,u(C,_),V||W||(V=!0,We(oe))),_},o.unstable_shouldYield=Nt,o.unstable_wrapCallback=function(_){var J=j;return function(){var z=j;j=J;try{return _.apply(this,arguments)}finally{j=z}}}})(ta)),ta}var gc;function Gp(){return gc||(gc=1,ea.exports=Qp()),ea.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function Jp(){if(hc)return qe;hc=1;var o=aa(),u=Gp();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,f={};function m(e,t){y(e,t),y(e+"Capture",t)}function y(e,t){for(f[e]=t,e=0;e<t.length;e++)c.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},N={};function j(e){return C.call(N,e)?!0:C.call(k,e)?!1:L.test(e)?N[e]=!0:(k[e]=!0,!1)}function W(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||W(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var B=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(B,q);A[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(B,q);A[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(B,q);A[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var i=A.hasOwnProperty(t)?A[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V(t,n,i,r)&&(n=null),r||i===null?j(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ne=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ue=Symbol.for("react.portal"),he=Symbol.for("react.fragment"),Re=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),Nt=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),_=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,x;function P(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var Y=!1;function ee(e,t){if(!e||Y)return"";Y=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(E){var r=E}Reflect.construct(e,[],t)}else{try{t.call()}catch(E){r=E}e.call(t.prototype)}else{try{throw Error()}catch(E){r=E}e()}}catch(E){if(E&&r&&typeof E.stack=="string"){for(var i=E.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,d=l.length-1;1<=a&&0<=d&&i[a]!==l[d];)d--;for(;1<=a&&0<=d;a--,d--)if(i[a]!==l[d]){if(a!==1||d!==1)do if(a--,d--,0>d||i[a]!==l[d]){var g=`
`+i[a].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=a&&0<=d);break}}}finally{Y=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?P(e):""}function re(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case he:return"Fragment";case ue:return"Portal";case He:return"Profiler";case Re:return"StrictMode";case Oe:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nt:return(e.displayName||"Context")+".Consumer";case Xe:return(e._context.displayName||"Context")+".Provider";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===Re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ye(e){var t=me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=Ye(e))}function ha(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rl(e,t){var n=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ae(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ya(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function il(e,t){ya(e,t);var n=ae(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,n):t.hasOwnProperty("defaultValue")&&ll(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ll(e,t,n){(t!=="number"||_r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function vn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ol(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if($n(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function wa(e,t){var n=ae(t.value),r=ae(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ea(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ea(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Dr,ka=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Dr=Dr||document.createElement("div"),Dr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Dr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gc=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){Gc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function Ra(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function Na(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ra(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Jc=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sl(e,t){if(t){if(Jc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function ul(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=null;function dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pl=null,yn=null,xn=null;function La(e){if(e=fr(e)){if(typeof pl!="function")throw Error(s(280));var t=e.stateNode;t&&(t=oi(t),pl(e.stateNode,e.type,t))}}function Ta(e){yn?xn?xn.push(e):xn=[e]:yn=e}function Pa(){if(yn){var e=yn,t=xn;if(xn=yn=null,La(e),t)for(e=0;e<t.length;e++)La(t[e])}}function Ia(e,t){return e(t)}function ba(){}var fl=!1;function Ma(e,t,n){if(fl)return e(t,n);fl=!0;try{return Ia(e,t,n)}finally{fl=!1,(yn!==null||xn!==null)&&(ba(),Pa())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=oi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var ml=!1;if(v)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){ml=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{ml=!1}function Kc(e,t,n,r,i,l,a,d,g){var E=Array.prototype.slice.call(arguments,3);try{t.apply(n,E)}catch(I){this.onError(I)}}var Jn=!1,Br=null,Fr=!1,gl=null,qc={onError:function(e){Jn=!0,Br=e}};function Xc(e,t,n,r,i,l,a,d,g){Jn=!1,Br=null,Kc.apply(qc,arguments)}function Yc(e,t,n,r,i,l,a,d,g){if(Xc.apply(this,arguments),Jn){if(Jn){var E=Br;Jn=!1,Br=null}else throw Error(s(198));Fr||(Fr=!0,gl=E)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Aa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(nn(e)!==e)throw Error(s(188))}function Zc(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ja(i),e;if(l===r)return ja(i),t;l=l.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,d=i.child;d;){if(d===n){a=!0,n=i,r=l;break}if(d===r){a=!0,r=i,n=l;break}d=d.sibling}if(!a){for(d=l.child;d;){if(d===n){a=!0,n=l,r=i;break}if(d===r){a=!0,r=l,n=i;break}d=d.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Oa(e){return e=Zc(e),e!==null?_a(e):null}function _a(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_a(e);if(t!==null)return t;e=e.sibling}return null}var Da=u.unstable_scheduleCallback,Ba=u.unstable_cancelCallback,ed=u.unstable_shouldYield,td=u.unstable_requestPaint,Ce=u.unstable_now,nd=u.unstable_getCurrentPriorityLevel,hl=u.unstable_ImmediatePriority,Fa=u.unstable_UserBlockingPriority,zr=u.unstable_NormalPriority,rd=u.unstable_LowPriority,za=u.unstable_IdlePriority,Ur=null,St=null;function id(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Ur,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:ad,ld=Math.log,od=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(ld(e)/od|0)|0}var Hr=64,$r=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var d=a&~i;d!==0?r=Kn(d):(l&=a,l!==0&&(r=Kn(l)))}else a=n&~i,a!==0?r=Kn(a):l!==0&&(r=Kn(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-dt(l),d=1<<a,g=i[a];g===-1?((d&n)===0||(d&r)!==0)&&(i[a]=sd(d,t)):g<=t&&(e.expiredLanes|=d),l&=~d}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ua(){var e=Hr;return Hr<<=1,(Hr&4194240)===0&&(Hr=64),e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function Ha(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var $a,Sl,Wa,Va,Qa,wl=!1,Vr=[],Dt=null,Bt=null,Ft=null,Xn=new Map,Yn=new Map,zt=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ga(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Zn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=fr(t),t!==null&&Sl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pd(e,t,n,r,i){switch(t){case"focusin":return Dt=Zn(Dt,e,t,n,r,i),!0;case"dragenter":return Bt=Zn(Bt,e,t,n,r,i),!0;case"mouseover":return Ft=Zn(Ft,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Xn.set(l,Zn(Xn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Yn.set(l,Zn(Yn.get(l)||null,e,t,n,r,i)),!0}return!1}function Ja(e){var t=rn(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Aa(n),t!==null){e.blockedOn=t,Qa(e.priority,function(){Wa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cl=r,n.target.dispatchEvent(r),cl=null}else return t=fr(n),t!==null&&Sl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){Qr(e)&&n.delete(t)}function fd(){wl=!1,Dt!==null&&Qr(Dt)&&(Dt=null),Bt!==null&&Qr(Bt)&&(Bt=null),Ft!==null&&Qr(Ft)&&(Ft=null),Xn.forEach(Ka),Yn.forEach(Ka)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,wl||(wl=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,fd)))}function tr(e){function t(i){return er(i,e)}if(0<Vr.length){er(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&er(Dt,e),Bt!==null&&er(Bt,e),Ft!==null&&er(Ft,e),Xn.forEach(t),Yn.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)Ja(n),n.blockedOn===null&&zt.shift()}var Sn=ne.ReactCurrentBatchConfig,Gr=!0;function md(e,t,n,r){var i=se,l=Sn.transition;Sn.transition=null;try{se=1,Cl(e,t,n,r)}finally{se=i,Sn.transition=l}}function gd(e,t,n,r){var i=se,l=Sn.transition;Sn.transition=null;try{se=4,Cl(e,t,n,r)}finally{se=i,Sn.transition=l}}function Cl(e,t,n,r){if(Gr){var i=El(e,t,n,r);if(i===null)zl(e,t,r,Jr,n),Ga(e,r);else if(pd(i,e,t,n,r))r.stopPropagation();else if(Ga(e,r),t&4&&-1<dd.indexOf(e)){for(;i!==null;){var l=fr(i);if(l!==null&&$a(l),l=El(e,t,n,r),l===null&&zl(e,t,r,Jr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else zl(e,t,r,null,n)}}var Jr=null;function El(e,t,n,r){if(Jr=null,e=dl(r),e=rn(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Aa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function qa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case hl:return 1;case Fa:return 4;case zr:case rd:return 16;case za:return 536870912;default:return 16}default:return 16}}var Ut=null,kl=null,Kr=null;function Xa(){if(Kr)return Kr;var e,t=kl,n=t.length,r,i="value"in Ut?Ut.value:Ut.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return Kr=i.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Ya(){return!1}function Ze(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Xr:Ya,this.isPropagationStopped=Ya,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Ze(wn),nr=z({},wn,{view:0,detail:0}),hd=Ze(nr),Nl,Ll,rr,Yr=z({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Nl=e.screenX-rr.screenX,Ll=e.screenY-rr.screenY):Ll=Nl=0,rr=e),Nl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Za=Ze(Yr),vd=z({},Yr,{dataTransfer:0}),yd=Ze(vd),xd=z({},nr,{relatedTarget:0}),Tl=Ze(xd),Sd=z({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=Ze(Sd),Cd=z({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ed=Ze(Cd),kd=z({},wn,{data:0}),es=Ze(kd),Rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Td(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ld[e])?!!t[e]:!1}function Pl(){return Td}var Pd=z({},nr,{key:function(e){if(e.key){var t=Rd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=Ze(Pd),bd=z({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=Ze(bd),Md=z({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),Ad=Ze(Md),jd=z({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Od=Ze(jd),_d=z({},Yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=Ze(_d),Bd=[9,13,27,32],Il=v&&"CompositionEvent"in window,ir=null;v&&"documentMode"in document&&(ir=document.documentMode);var Fd=v&&"TextEvent"in window&&!ir,ns=v&&(!Il||ir&&8<ir&&11>=ir),rs=" ",is=!1;function ls(e,t){switch(e){case"keyup":return Bd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function zd(e,t){switch(e){case"compositionend":return os(t);case"keypress":return t.which!==32?null:(is=!0,rs);case"textInput":return e=t.data,e===rs&&is?null:e;default:return null}}function Ud(e,t){if(Cn)return e==="compositionend"||!Il&&ls(e,t)?(e=Xa(),Kr=kl=Ut=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ns&&t.locale!=="ko"?null:t.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hd[e.type]:t==="textarea"}function ss(e,t,n,r){Ta(r),t=ri(t,"onChange"),0<t.length&&(n=new Rl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,or=null;function $d(e){Ns(e,0)}function Zr(e){var t=Ln(e);if(ha(t))return e}function Wd(e,t){if(e==="change")return t}var us=!1;if(v){var bl;if(v){var Ml="oninput"in document;if(!Ml){var cs=document.createElement("div");cs.setAttribute("oninput","return;"),Ml=typeof cs.oninput=="function"}bl=Ml}else bl=!1;us=bl&&(!document.documentMode||9<document.documentMode)}function ds(){lr&&(lr.detachEvent("onpropertychange",ps),or=lr=null)}function ps(e){if(e.propertyName==="value"&&Zr(or)){var t=[];ss(t,or,e,dl(e)),Ma($d,t)}}function Vd(e,t,n){e==="focusin"?(ds(),lr=t,or=n,lr.attachEvent("onpropertychange",ps)):e==="focusout"&&ds()}function Qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zr(or)}function Gd(e,t){if(e==="click")return Zr(t)}function Jd(e,t){if(e==="input"||e==="change")return Zr(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Kd;function ar(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!C.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ms(e,t){var n=fs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fs(n)}}function gs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hs(){for(var e=window,t=_r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_r(e.document)}return t}function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qd(e){var t=hs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gs(n.ownerDocument.documentElement,n)){if(r!==null&&Al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ms(n,l);var a=ms(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=v&&"documentMode"in document&&11>=document.documentMode,En=null,jl=null,sr=null,Ol=!1;function vs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ol||En==null||En!==_r(r)||(r=En,"selectionStart"in r&&Al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&ar(sr,r)||(sr=r,r=ri(jl,"onSelect"),0<r.length&&(t=new Rl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},_l={},ys={};v&&(ys=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function ti(e){if(_l[e])return _l[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ys)return _l[e]=t[n];return e}var xs=ti("animationend"),Ss=ti("animationiteration"),ws=ti("animationstart"),Cs=ti("transitionend"),Es=new Map,ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Es.set(e,t),m(t,[e])}for(var Dl=0;Dl<ks.length;Dl++){var Bl=ks[Dl],Yd=Bl.toLowerCase(),Zd=Bl[0].toUpperCase()+Bl.slice(1);Ht(Yd,"on"+Zd)}Ht(xs,"onAnimationEnd"),Ht(Ss,"onAnimationIteration"),Ht(ws,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(Cs,"onTransitionEnd"),y("onMouseEnter",["mouseout","mouseover"]),y("onMouseLeave",["mouseout","mouseover"]),y("onPointerEnter",["pointerout","pointerover"]),y("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Rs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yc(r,t,void 0,e),e.currentTarget=null}function Ns(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var d=r[a],g=d.instance,E=d.currentTarget;if(d=d.listener,g!==l&&i.isPropagationStopped())break e;Rs(i,d,E),l=g}else for(a=0;a<r.length;a++){if(d=r[a],g=d.instance,E=d.currentTarget,d=d.listener,g!==l&&i.isPropagationStopped())break e;Rs(i,d,E),l=g}}}if(Fr)throw e=gl,Fr=!1,gl=null,e}function pe(e,t){var n=t[Ql];n===void 0&&(n=t[Ql]=new Set);var r=e+"__bubble";n.has(r)||(Ls(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),Ls(n,e,r,t)}var ni="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[ni]){e[ni]=!0,c.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ni]||(t[ni]=!0,Fl("selectionchange",!1,t))}}function Ls(e,t,n,r){switch(qa(t)){case 1:var i=md;break;case 4:i=gd;break;default:i=Cl}n=i.bind(null,t,n,e),i=void 0,!ml||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function zl(e,t,n,r,i){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var d=r.stateNode.containerInfo;if(d===i||d.nodeType===8&&d.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var g=a.tag;if((g===3||g===4)&&(g=a.stateNode.containerInfo,g===i||g.nodeType===8&&g.parentNode===i))return;a=a.return}for(;d!==null;){if(a=rn(d),a===null)return;if(g=a.tag,g===5||g===6){r=l=a;continue e}d=d.parentNode}}r=r.return}Ma(function(){var E=l,I=dl(n),b=[];e:{var T=Es.get(e);if(T!==void 0){var D=Rl,U=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":D=Id;break;case"focusin":U="focus",D=Tl;break;case"focusout":U="blur",D=Tl;break;case"beforeblur":case"afterblur":D=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=yd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Ad;break;case xs:case Ss:case ws:D=wd;break;case Cs:D=Od;break;case"scroll":D=hd;break;case"wheel":D=Dd;break;case"copy":case"cut":case"paste":D=Ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=ts}var H=(t&4)!==0,Ee=!H&&e==="scroll",S=H?T!==null?T+"Capture":null:T;H=[];for(var h=E,w;h!==null;){w=h;var M=w.stateNode;if(w.tag===5&&M!==null&&(w=M,S!==null&&(M=Qn(h,S),M!=null&&H.push(dr(h,M,w)))),Ee)break;h=h.return}0<H.length&&(T=new D(T,U,null,n,I),b.push({event:T,listeners:H}))}}if((t&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",T&&n!==cl&&(U=n.relatedTarget||n.fromElement)&&(rn(U)||U[Lt]))break e;if((D||T)&&(T=I.window===I?I:(T=I.ownerDocument)?T.defaultView||T.parentWindow:window,D?(U=n.relatedTarget||n.toElement,D=E,U=U?rn(U):null,U!==null&&(Ee=nn(U),U!==Ee||U.tag!==5&&U.tag!==6)&&(U=null)):(D=null,U=E),D!==U)){if(H=Za,M="onMouseLeave",S="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(H=ts,M="onPointerLeave",S="onPointerEnter",h="pointer"),Ee=D==null?T:Ln(D),w=U==null?T:Ln(U),T=new H(M,h+"leave",D,n,I),T.target=Ee,T.relatedTarget=w,M=null,rn(I)===E&&(H=new H(S,h+"enter",U,n,I),H.target=w,H.relatedTarget=Ee,M=H),Ee=M,D&&U)t:{for(H=D,S=U,h=0,w=H;w;w=Rn(w))h++;for(w=0,M=S;M;M=Rn(M))w++;for(;0<h-w;)H=Rn(H),h--;for(;0<w-h;)S=Rn(S),w--;for(;h--;){if(H===S||S!==null&&H===S.alternate)break t;H=Rn(H),S=Rn(S)}H=null}else H=null;D!==null&&Ts(b,T,D,H,!1),U!==null&&Ee!==null&&Ts(b,Ee,U,H,!0)}}e:{if(T=E?Ln(E):window,D=T.nodeName&&T.nodeName.toLowerCase(),D==="select"||D==="input"&&T.type==="file")var $=Wd;else if(as(T))if(us)$=Jd;else{$=Qd;var Q=Vd}else(D=T.nodeName)&&D.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&($=Gd);if($&&($=$(e,E))){ss(b,$,n,I);break e}Q&&Q(e,T,E),e==="focusout"&&(Q=T._wrapperState)&&Q.controlled&&T.type==="number"&&ll(T,"number",T.value)}switch(Q=E?Ln(E):window,e){case"focusin":(as(Q)||Q.contentEditable==="true")&&(En=Q,jl=E,sr=null);break;case"focusout":sr=jl=En=null;break;case"mousedown":Ol=!0;break;case"contextmenu":case"mouseup":case"dragend":Ol=!1,vs(b,n,I);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":vs(b,n,I)}var G;if(Il)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else Cn?ls(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(ns&&n.locale!=="ko"&&(Cn||K!=="onCompositionStart"?K==="onCompositionEnd"&&Cn&&(G=Xa()):(Ut=I,kl="value"in Ut?Ut.value:Ut.textContent,Cn=!0)),Q=ri(E,K),0<Q.length&&(K=new es(K,e,null,n,I),b.push({event:K,listeners:Q}),G?K.data=G:(G=os(n),G!==null&&(K.data=G)))),(G=Fd?zd(e,n):Ud(e,n))&&(E=ri(E,"onBeforeInput"),0<E.length&&(I=new es("onBeforeInput","beforeinput",null,n,I),b.push({event:I,listeners:E}),I.data=G))}Ns(b,t)})}function dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Qn(e,n),l!=null&&r.unshift(dr(e,l,i)),l=Qn(e,t),l!=null&&r.push(dr(e,l,i))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ts(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var d=n,g=d.alternate,E=d.stateNode;if(g!==null&&g===r)break;d.tag===5&&E!==null&&(d=E,i?(g=Qn(n,l),g!=null&&a.unshift(dr(n,g,d))):i||(g=Qn(n,l),g!=null&&a.push(dr(n,g,d)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function Ps(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(np,"")}function ii(e,t,n){if(t=Ps(t),Ps(e)!==t&&n)throw Error(s(425))}function li(){}var Ul=null,Hl=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wl=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,Is=typeof Promise=="function"?Promise:void 0,ip=typeof queueMicrotask=="function"?queueMicrotask:typeof Is<"u"?function(e){return Is.resolve(null).then(e).catch(lp)}:Wl;function lp(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tr(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Nn=Math.random().toString(36).slice(2),wt="__reactFiber$"+Nn,pr="__reactProps$"+Nn,Lt="__reactContainer$"+Nn,Ql="__reactEvents$"+Nn,op="__reactListeners$"+Nn,ap="__reactHandles$"+Nn;function rn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bs(e);e!==null;){if(n=e[wt])return n;e=bs(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[wt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function oi(e){return e[pr]||null}var Gl=[],Tn=-1;function Wt(e){return{current:e}}function fe(e){0>Tn||(e.current=Gl[Tn],Gl[Tn]=null,Tn--)}function de(e,t){Tn++,Gl[Tn]=e.current,e.current=t}var Vt={},_e=Wt(Vt),Ve=Wt(!1),ln=Vt;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function ai(){fe(Ve),fe(_e)}function Ms(e,t,n){if(_e.current!==Vt)throw Error(s(168));de(_e,t),de(Ve,n)}function As(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(s(108,ce(e)||"Unknown",i));return z({},n,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,ln=_e.current,de(_e,e),de(Ve,Ve.current),!0}function js(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=As(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,fe(Ve),fe(_e),de(_e,e)):fe(Ve),de(Ve,n)}var Tt=null,ui=!1,Jl=!1;function Os(e){Tt===null?Tt=[e]:Tt.push(e)}function sp(e){ui=!0,Os(e)}function Qt(){if(!Jl&&Tt!==null){Jl=!0;var e=0,t=se;try{var n=Tt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Tt=null,ui=!1}catch(i){throw Tt!==null&&(Tt=Tt.slice(e+1)),Da(hl,Qt),i}finally{se=t,Jl=!1}}return null}var In=[],bn=0,ci=null,di=0,it=[],lt=0,on=null,Pt=1,It="";function an(e,t){In[bn++]=di,In[bn++]=ci,ci=e,di=t}function _s(e,t,n){it[lt++]=Pt,it[lt++]=It,it[lt++]=on,on=e;var r=Pt;e=It;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var l=32-dt(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Pt=1<<32-dt(t)+i|n<<i|r,It=l+e}else Pt=1<<l|n<<i|r,It=e}function Kl(e){e.return!==null&&(an(e,1),_s(e,1,0))}function ql(e){for(;e===ci;)ci=In[--bn],In[bn]=null,di=In[--bn],In[bn]=null;for(;e===on;)on=it[--lt],it[lt]=null,It=it[--lt],it[lt]=null,Pt=it[--lt],it[lt]=null}var et=null,tt=null,ge=!1,ft=null;function Ds(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:Pt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(ge){var t=tt;if(t){var n=t;if(!Bs(e,t)){if(Xl(e))throw Error(s(418));t=$t(n.nextSibling);var r=et;t&&Bs(e,t)?Ds(r,n):(e.flags=e.flags&-4097|2,ge=!1,et=e)}}else{if(Xl(e))throw Error(s(418));e.flags=e.flags&-4097|2,ge=!1,et=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function pi(e){if(e!==et)return!1;if(!ge)return Fs(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=tt)){if(Xl(e))throw zs(),Error(s(418));for(;t;)Ds(e,t),t=$t(t.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?$t(e.stateNode.nextSibling):null;return!0}function zs(){for(var e=tt;e;)e=$t(e.nextSibling)}function Mn(){tt=et=null,ge=!1}function Zl(e){ft===null?ft=[e]:ft.push(e)}var up=ne.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var d=i.refs;a===null?delete d[l]:d[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Us(e){var t=e._init;return t(e._payload)}function Hs(e){function t(S,h){if(e){var w=S.deletions;w===null?(S.deletions=[h],S.flags|=16):w.push(h)}}function n(S,h){if(!e)return null;for(;h!==null;)t(S,h),h=h.sibling;return null}function r(S,h){for(S=new Map;h!==null;)h.key!==null?S.set(h.key,h):S.set(h.index,h),h=h.sibling;return S}function i(S,h){return S=en(S,h),S.index=0,S.sibling=null,S}function l(S,h,w){return S.index=w,e?(w=S.alternate,w!==null?(w=w.index,w<h?(S.flags|=2,h):w):(S.flags|=2,h)):(S.flags|=1048576,h)}function a(S){return e&&S.alternate===null&&(S.flags|=2),S}function d(S,h,w,M){return h===null||h.tag!==6?(h=Vo(w,S.mode,M),h.return=S,h):(h=i(h,w),h.return=S,h)}function g(S,h,w,M){var $=w.type;return $===he?I(S,h,w.props.children,M,w.key):h!==null&&(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===We&&Us($)===h.type)?(M=i(h,w.props),M.ref=mr(S,h,w),M.return=S,M):(M=Di(w.type,w.key,w.props,null,S.mode,M),M.ref=mr(S,h,w),M.return=S,M)}function E(S,h,w,M){return h===null||h.tag!==4||h.stateNode.containerInfo!==w.containerInfo||h.stateNode.implementation!==w.implementation?(h=Qo(w,S.mode,M),h.return=S,h):(h=i(h,w.children||[]),h.return=S,h)}function I(S,h,w,M,$){return h===null||h.tag!==7?(h=gn(w,S.mode,M,$),h.return=S,h):(h=i(h,w),h.return=S,h)}function b(S,h,w){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Vo(""+h,S.mode,w),h.return=S,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case oe:return w=Di(h.type,h.key,h.props,null,S.mode,w),w.ref=mr(S,null,h),w.return=S,w;case ue:return h=Qo(h,S.mode,w),h.return=S,h;case We:var M=h._init;return b(S,M(h._payload),w)}if($n(h)||J(h))return h=gn(h,S.mode,w,null),h.return=S,h;fi(S,h)}return null}function T(S,h,w,M){var $=h!==null?h.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return $!==null?null:d(S,h,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oe:return w.key===$?g(S,h,w,M):null;case ue:return w.key===$?E(S,h,w,M):null;case We:return $=w._init,T(S,h,$(w._payload),M)}if($n(w)||J(w))return $!==null?null:I(S,h,w,M,null);fi(S,w)}return null}function D(S,h,w,M,$){if(typeof M=="string"&&M!==""||typeof M=="number")return S=S.get(w)||null,d(h,S,""+M,$);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case oe:return S=S.get(M.key===null?w:M.key)||null,g(h,S,M,$);case ue:return S=S.get(M.key===null?w:M.key)||null,E(h,S,M,$);case We:var Q=M._init;return D(S,h,w,Q(M._payload),$)}if($n(M)||J(M))return S=S.get(w)||null,I(h,S,M,$,null);fi(h,M)}return null}function U(S,h,w,M){for(var $=null,Q=null,G=h,K=h=0,be=null;G!==null&&K<w.length;K++){G.index>K?(be=G,G=null):be=G.sibling;var le=T(S,G,w[K],M);if(le===null){G===null&&(G=be);break}e&&G&&le.alternate===null&&t(S,G),h=l(le,h,K),Q===null?$=le:Q.sibling=le,Q=le,G=be}if(K===w.length)return n(S,G),ge&&an(S,K),$;if(G===null){for(;K<w.length;K++)G=b(S,w[K],M),G!==null&&(h=l(G,h,K),Q===null?$=G:Q.sibling=G,Q=G);return ge&&an(S,K),$}for(G=r(S,G);K<w.length;K++)be=D(G,S,K,w[K],M),be!==null&&(e&&be.alternate!==null&&G.delete(be.key===null?K:be.key),h=l(be,h,K),Q===null?$=be:Q.sibling=be,Q=be);return e&&G.forEach(function(tn){return t(S,tn)}),ge&&an(S,K),$}function H(S,h,w,M){var $=J(w);if(typeof $!="function")throw Error(s(150));if(w=$.call(w),w==null)throw Error(s(151));for(var Q=$=null,G=h,K=h=0,be=null,le=w.next();G!==null&&!le.done;K++,le=w.next()){G.index>K?(be=G,G=null):be=G.sibling;var tn=T(S,G,le.value,M);if(tn===null){G===null&&(G=be);break}e&&G&&tn.alternate===null&&t(S,G),h=l(tn,h,K),Q===null?$=tn:Q.sibling=tn,Q=tn,G=be}if(le.done)return n(S,G),ge&&an(S,K),$;if(G===null){for(;!le.done;K++,le=w.next())le=b(S,le.value,M),le!==null&&(h=l(le,h,K),Q===null?$=le:Q.sibling=le,Q=le);return ge&&an(S,K),$}for(G=r(S,G);!le.done;K++,le=w.next())le=D(G,S,K,le.value,M),le!==null&&(e&&le.alternate!==null&&G.delete(le.key===null?K:le.key),h=l(le,h,K),Q===null?$=le:Q.sibling=le,Q=le);return e&&G.forEach(function(Hp){return t(S,Hp)}),ge&&an(S,K),$}function Ee(S,h,w,M){if(typeof w=="object"&&w!==null&&w.type===he&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case oe:e:{for(var $=w.key,Q=h;Q!==null;){if(Q.key===$){if($=w.type,$===he){if(Q.tag===7){n(S,Q.sibling),h=i(Q,w.props.children),h.return=S,S=h;break e}}else if(Q.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===We&&Us($)===Q.type){n(S,Q.sibling),h=i(Q,w.props),h.ref=mr(S,Q,w),h.return=S,S=h;break e}n(S,Q);break}else t(S,Q);Q=Q.sibling}w.type===he?(h=gn(w.props.children,S.mode,M,w.key),h.return=S,S=h):(M=Di(w.type,w.key,w.props,null,S.mode,M),M.ref=mr(S,h,w),M.return=S,S=M)}return a(S);case ue:e:{for(Q=w.key;h!==null;){if(h.key===Q)if(h.tag===4&&h.stateNode.containerInfo===w.containerInfo&&h.stateNode.implementation===w.implementation){n(S,h.sibling),h=i(h,w.children||[]),h.return=S,S=h;break e}else{n(S,h);break}else t(S,h);h=h.sibling}h=Qo(w,S.mode,M),h.return=S,S=h}return a(S);case We:return Q=w._init,Ee(S,h,Q(w._payload),M)}if($n(w))return U(S,h,w,M);if(J(w))return H(S,h,w,M);fi(S,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,h!==null&&h.tag===6?(n(S,h.sibling),h=i(h,w),h.return=S,S=h):(n(S,h),h=Vo(w,S.mode,M),h.return=S,S=h),a(S)):n(S,h)}return Ee}var An=Hs(!0),$s=Hs(!1),mi=Wt(null),gi=null,jn=null,eo=null;function to(){eo=jn=gi=null}function no(e){var t=mi.current;fe(mi),e._currentValue=t}function ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){gi=e,eo=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ge=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(eo!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(gi===null)throw Error(s(308));jn=e,gi.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var sn=null;function io(e){sn===null?sn=[e]:sn.push(e)}function Ws(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,io(t)):(n.next=i.next,i.next=n),t.interleaved=n,bt(e,r)}function bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Gt=!1;function lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(te&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,bt(e,n)}return i=r.interleaved,i===null?(t.next=t,io(r)):(t.next=i.next,i.next=t),r.interleaved=t,bt(e,n)}function hi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xl(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vi(e,t,n,r){var i=e.updateQueue;Gt=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var g=d,E=g.next;g.next=null,a===null?l=E:a.next=E,a=g;var I=e.alternate;I!==null&&(I=I.updateQueue,d=I.lastBaseUpdate,d!==a&&(d===null?I.firstBaseUpdate=E:d.next=E,I.lastBaseUpdate=g))}if(l!==null){var b=i.baseState;a=0,I=E=g=null,d=l;do{var T=d.lane,D=d.eventTime;if((r&T)===T){I!==null&&(I=I.next={eventTime:D,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var U=e,H=d;switch(T=t,D=n,H.tag){case 1:if(U=H.payload,typeof U=="function"){b=U.call(D,b,T);break e}b=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=H.payload,T=typeof U=="function"?U.call(D,b,T):U,T==null)break e;b=z({},b,T);break e;case 2:Gt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[d]:T.push(d))}else D={eventTime:D,lane:T,tag:d.tag,payload:d.payload,callback:d.callback,next:null},I===null?(E=I=D,g=b):I=I.next=D,a|=T;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;T=d,d=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(I===null&&(g=b),i.baseState=g,i.firstBaseUpdate=E,i.lastBaseUpdate=I,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);dn|=a,e.lanes=a,e.memoizedState=b}}function Gs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(s(191,i));i.call(r)}}}var gr={},Ct=Wt(gr),hr=Wt(gr),vr=Wt(gr);function un(e){if(e===gr)throw Error(s(174));return e}function oo(e,t){switch(de(vr,t),de(hr,e),de(Ct,gr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=al(t,e)}fe(Ct),de(Ct,t)}function _n(){fe(Ct),fe(hr),fe(vr)}function Js(e){un(vr.current);var t=un(Ct.current),n=al(t,e.type);t!==n&&(de(hr,e),de(Ct,n))}function ao(e){hr.current===e&&(fe(Ct),fe(hr))}var ve=Wt(0);function yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=[];function uo(){for(var e=0;e<so.length;e++)so[e]._workInProgressVersionPrimary=null;so.length=0}var xi=ne.ReactCurrentDispatcher,co=ne.ReactCurrentBatchConfig,cn=0,ye=null,Le=null,Pe=null,Si=!1,yr=!1,xr=0,cp=0;function De(){throw Error(s(321))}function po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function fo(e,t,n,r,i,l){if(cn=l,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?mp:gp,e=n(r,i),yr){l=0;do{if(yr=!1,xr=0,25<=l)throw Error(s(301));l+=1,Pe=Le=null,t.updateQueue=null,xi.current=hp,e=n(r,i)}while(yr)}if(xi.current=Ei,t=Le!==null&&Le.next!==null,cn=0,Pe=Le=ye=null,Si=!1,t)throw Error(s(300));return e}function mo(){var e=xr!==0;return xr=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ye.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function at(){if(Le===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Pe===null?ye.memoizedState:Pe.next;if(t!==null)Pe=t,Le=e;else{if(e===null)throw Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Pe===null?ye.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Sr(e,t){return typeof t=="function"?t(e):t}function go(e){var t=at(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var d=a=null,g=null,E=l;do{var I=E.lane;if((cn&I)===I)g!==null&&(g=g.next={lane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),r=E.hasEagerState?E.eagerState:e(r,E.action);else{var b={lane:I,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null};g===null?(d=g=b,a=r):g=g.next=b,ye.lanes|=I,dn|=I}E=E.next}while(E!==null&&E!==l);g===null?a=r:g.next=d,pt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,ye.lanes|=l,dn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ho(e){var t=at(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);pt(l,t.memoizedState)||(Ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ks(){}function qs(e,t){var n=ye,r=at(),i=t(),l=!pt(r.memoizedState,i);if(l&&(r.memoizedState=i,Ge=!0),r=r.queue,vo(Zs.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,wr(9,Ys.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(s(349));(cn&30)!==0||Xs(n,t,i)}return i}function Xs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ys(e,t,n,r){t.value=n,t.getSnapshot=r,eu(t)&&tu(e)}function Zs(e,t,n){return n(function(){eu(t)&&tu(e)})}function eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function tu(e){var t=bt(e,1);t!==null&&vt(t,e,1,-1)}function nu(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t.queue=e,e=e.dispatch=fp.bind(null,ye,e),[t.memoizedState,e]}function wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ru(){return at().memoizedState}function wi(e,t,n,r){var i=Et();ye.flags|=e,i.memoizedState=wr(1|t,n,void 0,r===void 0?null:r)}function Ci(e,t,n,r){var i=at();r=r===void 0?null:r;var l=void 0;if(Le!==null){var a=Le.memoizedState;if(l=a.destroy,r!==null&&po(r,a.deps)){i.memoizedState=wr(t,n,l,r);return}}ye.flags|=e,i.memoizedState=wr(1|t,n,l,r)}function iu(e,t){return wi(8390656,8,e,t)}function vo(e,t){return Ci(2048,8,e,t)}function lu(e,t){return Ci(4,2,e,t)}function ou(e,t){return Ci(4,4,e,t)}function au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function su(e,t,n){return n=n!=null?n.concat([e]):null,Ci(4,4,au.bind(null,t,e),n)}function yo(){}function uu(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cu(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&po(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function du(e,t,n){return(cn&21)===0?(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n):(pt(n,t)||(n=Ua(),ye.lanes|=n,dn|=n,e.baseState=!0),t)}function dp(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=co.transition;co.transition={};try{e(!1),t()}finally{se=n,co.transition=r}}function pu(){return at().memoizedState}function pp(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fu(e))mu(t,n);else if(n=Ws(e,t,n,r),n!==null){var i=Ue();vt(n,e,r,i),gu(n,t,r)}}function fp(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fu(e))mu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,d=l(a,n);if(i.hasEagerState=!0,i.eagerState=d,pt(d,a)){var g=t.interleaved;g===null?(i.next=i,io(t)):(i.next=g.next,g.next=i),t.interleaved=i;return}}catch{}finally{}n=Ws(e,t,i,r),n!==null&&(i=Ue(),vt(n,e,r,i),gu(n,t,r))}}function fu(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function mu(e,t){yr=Si=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xl(e,n)}}var Ei={readContext:ot,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},mp={readContext:ot,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wi(4194308,4,au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return wi(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pp.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:yo,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=dp.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=Et();if(ge){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ie===null)throw Error(s(349));(cn&30)!==0||Xs(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,iu(Zs.bind(null,r,l,e),[e]),r.flags|=2048,wr(9,Ys.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ie.identifierPrefix;if(ge){var n=It,r=Pt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gp={readContext:ot,useCallback:uu,useContext:ot,useEffect:vo,useImperativeHandle:su,useInsertionEffect:lu,useLayoutEffect:ou,useMemo:cu,useReducer:go,useRef:ru,useState:function(){return go(Sr)},useDebugValue:yo,useDeferredValue:function(e){var t=at();return du(t,Le.memoizedState,e)},useTransition:function(){var e=go(Sr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Ks,useSyncExternalStore:qs,useId:pu,unstable_isNewReconciler:!1},hp={readContext:ot,useCallback:uu,useContext:ot,useEffect:vo,useImperativeHandle:su,useInsertionEffect:lu,useLayoutEffect:ou,useMemo:cu,useReducer:ho,useRef:ru,useState:function(){return ho(Sr)},useDebugValue:yo,useDeferredValue:function(e){var t=at();return Le===null?t.memoizedState=e:du(t,Le.memoizedState,e)},useTransition:function(){var e=ho(Sr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Ks,useSyncExternalStore:qs,useId:pu,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ki={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Yt(e),l=Mt(r,i);l.payload=t,n!=null&&(l.callback=n),t=Jt(e,l,i),t!==null&&(vt(t,e,i,r),hi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=Yt(e),l=Mt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Jt(e,l,i),t!==null&&(vt(t,e,i,r),hi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=Yt(e),i=Mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Jt(e,i,r),t!==null&&(vt(t,e,r,n),hi(t,e,r))}};function hu(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(i,l):!0}function vu(e,t,n){var r=!1,i=Vt,l=t.contextType;return typeof l=="object"&&l!==null?l=ot(l):(i=Qe(t)?ln:_e.current,r=t.contextTypes,l=(r=r!=null)?Pn(e,i):Vt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ki,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ki.enqueueReplaceState(t,t.state,null)}function So(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},lo(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=ot(l):(l=Qe(t)?ln:_e.current,i.context=Pn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(xo(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ki.enqueueReplaceState(i,i.state,null),vi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dn(e,t){try{var n="",r=t;do n+=re(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Co(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vp=typeof WeakMap=="function"?WeakMap:Map;function xu(e,t,n){n=Mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bi||(bi=!0,Do=r),Co(e,t)},n}function Su(e,t,n){n=Mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Co(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Co(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=bp.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Eu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Mt(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var yp=ne.ReactCurrentOwner,Ge=!1;function ze(e,t,n,r){t.child=e===null?$s(t,null,n,r):An(t,e.child,n,r)}function ku(e,t,n,r,i){n=n.render;var l=t.ref;return On(t,i),r=fo(e,t,n,r,l,i),n=mo(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(ge&&n&&Kl(t),t.flags|=1,ze(e,t,r,i),t.child)}function Ru(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Wo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Nu(e,t,l,r,i)):(e=Di(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(a,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=en(l,r),e.ref=t.ref,e.return=t,t.child=e}function Nu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(ar(l,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,At(e,t,i)}return Eo(e,t,n,r,i)}function Lu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Fn,nt),nt|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Fn,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,de(Fn,nt),nt|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,de(Fn,nt),nt|=r;return ze(e,t,i,n),t.child}function Tu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Eo(e,t,n,r,i){var l=Qe(n)?ln:_e.current;return l=Pn(t,l),On(t,i),n=fo(e,t,n,r,l,i),r=mo(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(ge&&r&&Kl(t),t.flags|=1,ze(e,t,n,i),t.child)}function Pu(e,t,n,r,i){if(Qe(n)){var l=!0;si(t)}else l=!1;if(On(t,i),t.stateNode===null)Ni(e,t),vu(t,n,r),So(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,d=t.memoizedProps;a.props=d;var g=a.context,E=n.contextType;typeof E=="object"&&E!==null?E=ot(E):(E=Qe(n)?ln:_e.current,E=Pn(t,E));var I=n.getDerivedStateFromProps,b=typeof I=="function"||typeof a.getSnapshotBeforeUpdate=="function";b||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==r||g!==E)&&yu(t,a,r,E),Gt=!1;var T=t.memoizedState;a.state=T,vi(t,r,a,i),g=t.memoizedState,d!==r||T!==g||Ve.current||Gt?(typeof I=="function"&&(xo(t,n,I,r),g=t.memoizedState),(d=Gt||hu(t,n,d,r,T,g,E))?(b||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=E,r=d):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vs(e,t),d=t.memoizedProps,E=t.type===t.elementType?d:mt(t.type,d),a.props=E,b=t.pendingProps,T=a.context,g=n.contextType,typeof g=="object"&&g!==null?g=ot(g):(g=Qe(n)?ln:_e.current,g=Pn(t,g));var D=n.getDerivedStateFromProps;(I=typeof D=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==b||T!==g)&&yu(t,a,r,g),Gt=!1,T=t.memoizedState,a.state=T,vi(t,r,a,i);var U=t.memoizedState;d!==b||T!==U||Ve.current||Gt?(typeof D=="function"&&(xo(t,n,D,r),U=t.memoizedState),(E=Gt||hu(t,n,E,r,T,U,g)||!1)?(I||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,U,g),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,U,g)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=U),a.props=r,a.state=U,a.context=g,r=E):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),r=!1)}return ko(e,t,n,r,l,i)}function ko(e,t,n,r,i,l){Tu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&js(t,n,!1),At(e,t,l);r=t.stateNode,yp.current=t;var d=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=An(t,e.child,null,l),t.child=An(t,null,d,l)):ze(e,t,d,l),t.memoizedState=r.state,i&&js(t,n,!0),t.child}function Iu(e){var t=e.stateNode;t.pendingContext?Ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ms(e,t.context,!1),oo(e,t.containerInfo)}function bu(e,t,n,r,i){return Mn(),Zl(i),t.flags|=256,ze(e,t,n,r),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function No(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mu(e,t,n){var r=t.pendingProps,i=ve.current,l=!1,a=(t.flags&128)!==0,d;if((d=a)||(d=e!==null&&e.memoizedState===null?!1:(i&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ve,i&1),e===null)return Yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=a):l=Bi(a,r,0,null),e=gn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=No(n),t.memoizedState=Ro,e):Lo(t,a));if(i=e.memoizedState,i!==null&&(d=i.dehydrated,d!==null))return xp(e,t,a,r,d,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,d=i.sibling;var g={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=en(i,g),r.subtreeFlags=i.subtreeFlags&14680064),d!==null?l=en(d,l):(l=gn(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?No(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Ro,r}return l=e.child,e=l.sibling,r=en(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lo(e,t){return t=Bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ri(e,t,n,r){return r!==null&&Zl(r),An(t,e.child,null,n),e=Lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xp(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=wo(Error(s(422))),Ri(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Bi({mode:"visible",children:r.children},i,0,null),l=gn(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&An(t,e.child,null,a),t.child.memoizedState=No(a),t.memoizedState=Ro,l);if((t.mode&1)===0)return Ri(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(s(419)),r=wo(l,r,void 0),Ri(e,t,a,r)}if(d=(a&e.childLanes)!==0,Ge||d){if(r=Ie,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|a))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,bt(e,i),vt(r,e,i,-1))}return $o(),r=wo(Error(s(421))),Ri(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,tt=$t(i.nextSibling),et=t,ge=!0,ft=null,e!==null&&(it[lt++]=Pt,it[lt++]=It,it[lt++]=on,Pt=e.id,It=e.overflow,on=t),t=Lo(t,r.children),t.flags|=4096,t)}function Au(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ro(e.return,t,n)}function To(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function ju(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(ze(e,t,r.children,n),r=ve.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Au(e,n,t);else if(e.tag===19)Au(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ve,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&yi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),To(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&yi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}To(t,!0,n,null,l);break;case"together":To(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ni(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sp(e,t,n){switch(t.tag){case 3:Iu(t),Mn();break;case 5:Js(t);break;case 1:Qe(t.type)&&si(t);break;case 4:oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(mi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ve,ve.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Mu(e,t,n):(de(ve,ve.current&1),e=At(e,t,n),e!==null?e.sibling:null);de(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ju(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Lu(e,t,n)}return At(e,t,n)}var Ou,Po,_u,Du;Ou=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Po=function(){},_u=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,un(Ct.current);var l=null;switch(n){case"input":i=rl(e,i),r=rl(e,r),l=[];break;case"select":i=z({},i,{value:void 0}),r=z({},r,{value:void 0}),l=[];break;case"textarea":i=ol(e,i),r=ol(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=li)}sl(n,r);var a;n=null;for(E in i)if(!r.hasOwnProperty(E)&&i.hasOwnProperty(E)&&i[E]!=null)if(E==="style"){var d=i[E];for(a in d)d.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else E!=="dangerouslySetInnerHTML"&&E!=="children"&&E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&E!=="autoFocus"&&(f.hasOwnProperty(E)?l||(l=[]):(l=l||[]).push(E,null));for(E in r){var g=r[E];if(d=i!=null?i[E]:void 0,r.hasOwnProperty(E)&&g!==d&&(g!=null||d!=null))if(E==="style")if(d){for(a in d)!d.hasOwnProperty(a)||g&&g.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in g)g.hasOwnProperty(a)&&d[a]!==g[a]&&(n||(n={}),n[a]=g[a])}else n||(l||(l=[]),l.push(E,n)),n=g;else E==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,d=d?d.__html:void 0,g!=null&&d!==g&&(l=l||[]).push(E,g)):E==="children"?typeof g!="string"&&typeof g!="number"||(l=l||[]).push(E,""+g):E!=="suppressContentEditableWarning"&&E!=="suppressHydrationWarning"&&(f.hasOwnProperty(E)?(g!=null&&E==="onScroll"&&pe("scroll",e),l||d===g||(l=[])):(l=l||[]).push(E,g))}n&&(l=l||[]).push("style",n);var E=l;(t.updateQueue=E)&&(t.flags|=4)}},Du=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wp(e,t,n){var r=t.pendingProps;switch(ql(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Qe(t.type)&&ai(),Be(t),null;case 3:return r=t.stateNode,_n(),fe(Ve),fe(_e),uo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(zo(ft),ft=null))),Po(e,t),Be(t),null;case 5:ao(t);var i=un(vr.current);if(n=t.type,e!==null&&t.stateNode!=null)_u(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Be(t),null}if(e=un(Ct.current),pi(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[wt]=t,r[pr]=l,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<ur.length;i++)pe(ur[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":va(r,l),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},pe("invalid",r);break;case"textarea":Sa(r,l),pe("invalid",r)}sl(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var d=l[a];a==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&ii(r.textContent,d,e),i=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&ii(r.textContent,d,e),i=["children",""+d]):f.hasOwnProperty(a)&&d!=null&&a==="onScroll"&&pe("scroll",r)}switch(n){case"input":Or(r),xa(r,l,!0);break;case"textarea":Or(r),Ca(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=li)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ea(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wt]=t,e[pr]=r,Ou(e,t,!1,!1),t.stateNode=e;e:{switch(a=ul(n,r),n){case"dialog":pe("cancel",e),pe("close",e),i=r;break;case"iframe":case"object":case"embed":pe("load",e),i=r;break;case"video":case"audio":for(i=0;i<ur.length;i++)pe(ur[i],e);i=r;break;case"source":pe("error",e),i=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),i=r;break;case"details":pe("toggle",e),i=r;break;case"input":va(e,r),i=rl(e,r),pe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=z({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Sa(e,r),i=ol(e,r),pe("invalid",e);break;default:i=r}sl(n,i),d=i;for(l in d)if(d.hasOwnProperty(l)){var g=d[l];l==="style"?Na(e,g):l==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&ka(e,g)):l==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&Wn(e,g):typeof g=="number"&&Wn(e,""+g):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(f.hasOwnProperty(l)?g!=null&&l==="onScroll"&&pe("scroll",e):g!=null&&X(e,l,g,a))}switch(n){case"input":Or(e),xa(e,r,!1);break;case"textarea":Or(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ae(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?vn(e,!!r.multiple,l,!1):r.defaultValue!=null&&vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=li)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)Du(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=un(vr.current),un(Ct.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(l=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Be(t),null;case 13:if(fe(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zs(),Mn(),t.flags|=98560,l=!1;else if(l=pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[wt]=t}else Mn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),l=!1}else ft!==null&&(zo(ft),ft=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ve.current&1)!==0?Te===0&&(Te=3):$o())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return _n(),Po(e,t),e===null&&cr(t.stateNode.containerInfo),Be(t),null;case 10:return no(t.type._context),Be(t),null;case 17:return Qe(t.type)&&ai(),Be(t),null;case 19:if(fe(ve),l=t.memoizedState,l===null)return Be(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Cr(l,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=yi(e),a!==null){for(t.flags|=128,Cr(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ve,ve.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ce()>zn&&(t.flags|=128,r=!0,Cr(l,!1),t.lanes=4194304)}else{if(!r)if(e=yi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!ge)return Be(t),null}else 2*Ce()-l.renderingStartTime>zn&&n!==1073741824&&(t.flags|=128,r=!0,Cr(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ce(),t.sibling=null,n=ve.current,de(ve,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Ho(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Cp(e,t){switch(ql(t),t.tag){case 1:return Qe(t.type)&&ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _n(),fe(Ve),fe(_e),uo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ao(t),null;case 13:if(fe(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(ve),null;case 4:return _n(),null;case 10:return no(t.type._context),null;case 22:case 23:return Ho(),null;case 24:return null;default:return null}}var Li=!1,Fe=!1,Ep=typeof WeakSet=="function"?WeakSet:Set,F=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Io(e,t,n){try{n()}catch(r){we(e,t,r)}}var Bu=!1;function kp(e,t){if(Ul=Gr,e=hs(),Al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,d=-1,g=-1,E=0,I=0,b=e,T=null;t:for(;;){for(var D;b!==n||i!==0&&b.nodeType!==3||(d=a+i),b!==l||r!==0&&b.nodeType!==3||(g=a+r),b.nodeType===3&&(a+=b.nodeValue.length),(D=b.firstChild)!==null;)T=b,b=D;for(;;){if(b===e)break t;if(T===n&&++E===i&&(d=a),T===l&&++I===r&&(g=a),(D=b.nextSibling)!==null)break;b=T,T=b.parentNode}b=D}n=d===-1||g===-1?null:{start:d,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hl={focusedElem:e,selectionRange:n},Gr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var U=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(U!==null){var H=U.memoizedProps,Ee=U.memoizedState,S=t.stateNode,h=S.getSnapshotBeforeUpdate(t.elementType===t.type?H:mt(t.type,H),Ee);S.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(M){we(t,t.return,M)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return U=Bu,Bu=!1,U}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Io(t,n,l)}i=i.next}while(i!==r)}}function Ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fu(e){var t=e.alternate;t!==null&&(e.alternate=null,Fu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[pr],delete t[Ql],delete t[op],delete t[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zu(e){return e.tag===5||e.tag===3||e.tag===4}function Uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=li));else if(r!==4&&(e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}function Ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ao(e,t,n),e=e.sibling;e!==null;)Ao(e,t,n),e=e.sibling}var Ae=null,gt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Hu(e,t,n),n=n.sibling}function Hu(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Ur,n)}catch{}switch(n.tag){case 5:Fe||Bn(n,t);case 6:var r=Ae,i=gt;Ae=null,Kt(e,t,n),Ae=r,gt=i,Ae!==null&&(gt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(gt?(e=Ae,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),tr(e)):Vl(Ae,n.stateNode));break;case 4:r=Ae,i=gt,Ae=n.stateNode.containerInfo,gt=!0,Kt(e,t,n),Ae=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&((l&2)!==0||(l&4)!==0)&&Io(n,t,a),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!Fe&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){we(n,t,d)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Kt(e,t,n),Fe=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function $u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ep),t.forEach(function(r){var i=Ap.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,d=a;e:for(;d!==null;){switch(d.tag){case 5:Ae=d.stateNode,gt=!1;break e;case 3:Ae=d.stateNode.containerInfo,gt=!0;break e;case 4:Ae=d.stateNode.containerInfo,gt=!0;break e}d=d.return}if(Ae===null)throw Error(s(160));Hu(l,a,i),Ae=null,gt=!1;var g=i.alternate;g!==null&&(g.return=null),i.return=null}catch(E){we(i,t,E)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),kt(e),r&4){try{Er(3,e,e.return),Ti(3,e)}catch(H){we(e,e.return,H)}try{Er(5,e,e.return)}catch(H){we(e,e.return,H)}}break;case 1:ht(t,e),kt(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(ht(t,e),kt(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var i=e.stateNode;try{Wn(i,"")}catch(H){we(e,e.return,H)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,d=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&ya(i,l),ul(d,a);var E=ul(d,l);for(a=0;a<g.length;a+=2){var I=g[a],b=g[a+1];I==="style"?Na(i,b):I==="dangerouslySetInnerHTML"?ka(i,b):I==="children"?Wn(i,b):X(i,I,b,E)}switch(d){case"input":il(i,l);break;case"textarea":wa(i,l);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var D=l.value;D!=null?vn(i,!!l.multiple,D,!1):T!==!!l.multiple&&(l.defaultValue!=null?vn(i,!!l.multiple,l.defaultValue,!0):vn(i,!!l.multiple,l.multiple?[]:"",!1))}i[pr]=l}catch(H){we(e,e.return,H)}}break;case 6:if(ht(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(H){we(e,e.return,H)}}break;case 3:if(ht(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(H){we(e,e.return,H)}break;case 4:ht(t,e),kt(e);break;case 13:ht(t,e),kt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(_o=Ce())),r&4&&$u(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(E=Fe)||I,ht(t,e),Fe=E):ht(t,e),kt(e),r&8192){if(E=e.memoizedState!==null,(e.stateNode.isHidden=E)&&!I&&(e.mode&1)!==0)for(F=e,I=e.child;I!==null;){for(b=F=I;F!==null;){switch(T=F,D=T.child,T.tag){case 0:case 11:case 14:case 15:Er(4,T,T.return);break;case 1:Bn(T,T.return);var U=T.stateNode;if(typeof U.componentWillUnmount=="function"){r=T,n=T.return;try{t=r,U.props=t.memoizedProps,U.state=t.memoizedState,U.componentWillUnmount()}catch(H){we(r,n,H)}}break;case 5:Bn(T,T.return);break;case 22:if(T.memoizedState!==null){Gu(b);continue}}D!==null?(D.return=T,F=D):Gu(b)}I=I.sibling}e:for(I=null,b=e;;){if(b.tag===5){if(I===null){I=b;try{i=b.stateNode,E?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=b.stateNode,g=b.memoizedProps.style,a=g!=null&&g.hasOwnProperty("display")?g.display:null,d.style.display=Ra("display",a))}catch(H){we(e,e.return,H)}}}else if(b.tag===6){if(I===null)try{b.stateNode.nodeValue=E?"":b.memoizedProps}catch(H){we(e,e.return,H)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;I===b&&(I=null),b=b.return}I===b&&(I=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:ht(t,e),kt(e),r&4&&$u(e);break;case 21:break;default:ht(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zu(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wn(i,""),r.flags&=-33);var l=Uu(e);Ao(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,d=Uu(e);Mo(e,d,a);break;default:throw Error(s(161))}}catch(g){we(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rp(e,t,n){F=e,Vu(e)}function Vu(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Li;if(!a){var d=i.alternate,g=d!==null&&d.memoizedState!==null||Fe;d=Li;var E=Fe;if(Li=a,(Fe=g)&&!E)for(F=i;F!==null;)a=F,g=a.child,a.tag===22&&a.memoizedState!==null?Ju(i):g!==null?(g.return=a,F=g):Ju(i);for(;l!==null;)F=l,Vu(l),l=l.sibling;F=i,Li=d,Fe=E}Qu(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,F=l):Qu(e)}}function Qu(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||Ti(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Gs(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gs(t,a,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var E=t.alternate;if(E!==null){var I=E.memoizedState;if(I!==null){var b=I.dehydrated;b!==null&&tr(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Fe||t.flags&512&&bo(t)}catch(T){we(t,t.return,T)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Gu(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Ju(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ti(4,t)}catch(g){we(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(g){we(t,i,g)}}var l=t.return;try{bo(t)}catch(g){we(t,l,g)}break;case 5:var a=t.return;try{bo(t)}catch(g){we(t,a,g)}}}catch(g){we(t,t.return,g)}if(t===e){F=null;break}var d=t.sibling;if(d!==null){d.return=t.return,F=d;break}F=t.return}}var Np=Math.ceil,Pi=ne.ReactCurrentDispatcher,jo=ne.ReactCurrentOwner,st=ne.ReactCurrentBatchConfig,te=0,Ie=null,ke=null,je=0,nt=0,Fn=Wt(0),Te=0,kr=null,dn=0,Ii=0,Oo=0,Rr=null,Je=null,_o=0,zn=1/0,jt=null,bi=!1,Do=null,qt=null,Mi=!1,Xt=null,Ai=0,Nr=0,Bo=null,ji=-1,Oi=0;function Ue(){return(te&6)!==0?Ce():ji!==-1?ji:ji=Ce()}function Yt(e){return(e.mode&1)===0?1:(te&2)!==0&&je!==0?je&-je:up.transition!==null?(Oi===0&&(Oi=Ua()),Oi):(e=se,e!==0||(e=window.event,e=e===void 0?16:qa(e.type)),e)}function vt(e,t,n,r){if(50<Nr)throw Nr=0,Bo=null,Error(s(185));qn(e,n,r),((te&2)===0||e!==Ie)&&(e===Ie&&((te&2)===0&&(Ii|=n),Te===4&&Zt(e,je)),Ke(e,r),n===1&&te===0&&(t.mode&1)===0&&(zn=Ce()+500,ui&&Qt()))}function Ke(e,t){var n=e.callbackNode;ud(e,t);var r=Wr(e,e===Ie?je:0);if(r===0)n!==null&&Ba(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ba(n),t===1)e.tag===0?sp(qu.bind(null,e)):Os(qu.bind(null,e)),ip(function(){(te&6)===0&&Qt()}),n=null;else{switch(Ha(r)){case 1:n=hl;break;case 4:n=Fa;break;case 16:n=zr;break;case 536870912:n=za;break;default:n=zr}n=ic(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(ji=-1,Oi=0,(te&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Wr(e,e===Ie?je:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=_i(e,r);else{t=r;var i=te;te|=2;var l=Yu();(Ie!==e||je!==t)&&(jt=null,zn=Ce()+500,fn(e,t));do try{Pp();break}catch(d){Xu(e,d)}while(!0);to(),Pi.current=l,te=i,ke!==null?t=0:(Ie=null,je=0,t=Te)}if(t!==0){if(t===2&&(i=vl(e),i!==0&&(r=i,t=Fo(e,i))),t===1)throw n=kr,fn(e,0),Zt(e,r),Ke(e,Ce()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Lp(i)&&(t=_i(e,r),t===2&&(l=vl(e),l!==0&&(r=l,t=Fo(e,l))),t===1))throw n=kr,fn(e,0),Zt(e,r),Ke(e,Ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:mn(e,Je,jt);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=_o+500-Ce(),10<t)){if(Wr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Wl(mn.bind(null,e,Je,jt),t);break}mn(e,Je,jt);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-dt(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=Wl(mn.bind(null,e,Je,jt),r);break}mn(e,Je,jt);break;case 5:mn(e,Je,jt);break;default:throw Error(s(329))}}}return Ke(e,Ce()),e.callbackNode===n?Ku.bind(null,e):null}function Fo(e,t){var n=Rr;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=_i(e,t),e!==2&&(t=Je,Je=n,t!==null&&zo(t)),e}function zo(e){Je===null?Je=e:Je.push.apply(Je,e)}function Lp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!pt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Oo,t&=~Ii,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if((te&6)!==0)throw Error(s(327));Un();var t=Wr(e,0);if((t&1)===0)return Ke(e,Ce()),null;var n=_i(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=Fo(e,r))}if(n===1)throw n=kr,fn(e,0),Zt(e,t),Ke(e,Ce()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Je,jt),Ke(e,Ce()),null}function Uo(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(zn=Ce()+500,ui&&Qt())}}function pn(e){Xt!==null&&Xt.tag===0&&(te&6)===0&&Un();var t=te;te|=1;var n=st.transition,r=se;try{if(st.transition=null,se=1,e)return e()}finally{se=r,st.transition=n,te=t,(te&6)===0&&Qt()}}function Ho(){nt=Fn.current,fe(Fn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rp(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(ql(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ai();break;case 3:_n(),fe(Ve),fe(_e),uo();break;case 5:ao(r);break;case 4:_n();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:no(r.type._context);break;case 22:case 23:Ho()}n=n.return}if(Ie=e,ke=e=en(e.current,null),je=nt=t,Te=0,kr=null,Oo=Ii=dn=0,Je=Rr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}sn=null}return e}function Xu(e,t){do{var n=ke;try{if(to(),xi.current=Ei,Si){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Si=!1}if(cn=0,Pe=Le=ye=null,yr=!1,xr=0,jo.current=null,n===null||n.return===null){Te=1,kr=t,ke=null;break}e:{var l=e,a=n.return,d=n,g=t;if(t=je,d.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var E=g,I=d,b=I.tag;if((I.mode&1)===0&&(b===0||b===11||b===15)){var T=I.alternate;T?(I.updateQueue=T.updateQueue,I.memoizedState=T.memoizedState,I.lanes=T.lanes):(I.updateQueue=null,I.memoizedState=null)}var D=Cu(a);if(D!==null){D.flags&=-257,Eu(D,a,d,l,t),D.mode&1&&wu(l,E,t),t=D,g=E;var U=t.updateQueue;if(U===null){var H=new Set;H.add(g),t.updateQueue=H}else U.add(g);break e}else{if((t&1)===0){wu(l,E,t),$o();break e}g=Error(s(426))}}else if(ge&&d.mode&1){var Ee=Cu(a);if(Ee!==null){(Ee.flags&65536)===0&&(Ee.flags|=256),Eu(Ee,a,d,l,t),Zl(Dn(g,d));break e}}l=g=Dn(g,d),Te!==4&&(Te=2),Rr===null?Rr=[l]:Rr.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var S=xu(l,g,t);Qs(l,S);break e;case 1:d=g;var h=l.type,w=l.stateNode;if((l.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(qt===null||!qt.has(w)))){l.flags|=65536,t&=-t,l.lanes|=t;var M=Su(l,d,t);Qs(l,M);break e}}l=l.return}while(l!==null)}ec(n)}catch($){t=$,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Yu(){var e=Pi.current;return Pi.current=Ei,e===null?Ei:e}function $o(){(Te===0||Te===3||Te===2)&&(Te=4),Ie===null||(dn&268435455)===0&&(Ii&268435455)===0||Zt(Ie,je)}function _i(e,t){var n=te;te|=2;var r=Yu();(Ie!==e||je!==t)&&(jt=null,fn(e,t));do try{Tp();break}catch(i){Xu(e,i)}while(!0);if(to(),te=n,Pi.current=r,ke!==null)throw Error(s(261));return Ie=null,je=0,Te}function Tp(){for(;ke!==null;)Zu(ke)}function Pp(){for(;ke!==null&&!ed();)Zu(ke)}function Zu(e){var t=rc(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?ec(e):ke=t,jo.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=wp(n,t,nt),n!==null){ke=n;return}}else{if(n=Cp(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Te===0&&(Te=5)}function mn(e,t,n){var r=se,i=st.transition;try{st.transition=null,se=1,Ip(e,t,n,r)}finally{st.transition=i,se=r}return null}function Ip(e,t,n,r){do Un();while(Xt!==null);if((te&6)!==0)throw Error(s(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(cd(e,l),e===Ie&&(ke=Ie=null,je=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Mi||(Mi=!0,ic(zr,function(){return Un(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=st.transition,st.transition=null;var a=se;se=1;var d=te;te|=4,jo.current=null,kp(e,n),Wu(n,e),qd(Hl),Gr=!!Ul,Hl=Ul=null,e.current=n,Rp(n),td(),te=d,se=a,st.transition=l}else e.current=n;if(Mi&&(Mi=!1,Xt=e,Ai=i),l=e.pendingLanes,l===0&&(qt=null),id(n.stateNode),Ke(e,Ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bi)throw bi=!1,e=Do,Do=null,e;return(Ai&1)!==0&&e.tag!==0&&Un(),l=e.pendingLanes,(l&1)!==0?e===Bo?Nr++:(Nr=0,Bo=e):Nr=0,Qt(),null}function Un(){if(Xt!==null){var e=Ha(Ai),t=st.transition,n=se;try{if(st.transition=null,se=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Ai=0,(te&6)!==0)throw Error(s(331));var i=te;for(te|=4,F=e.current;F!==null;){var l=F,a=l.child;if((F.flags&16)!==0){var d=l.deletions;if(d!==null){for(var g=0;g<d.length;g++){var E=d[g];for(F=E;F!==null;){var I=F;switch(I.tag){case 0:case 11:case 15:Er(8,I,l)}var b=I.child;if(b!==null)b.return=I,F=b;else for(;F!==null;){I=F;var T=I.sibling,D=I.return;if(Fu(I),I===E){F=null;break}if(T!==null){T.return=D,F=T;break}F=D}}}var U=l.alternate;if(U!==null){var H=U.child;if(H!==null){U.child=null;do{var Ee=H.sibling;H.sibling=null,H=Ee}while(H!==null)}}F=l}}if((l.subtreeFlags&2064)!==0&&a!==null)a.return=l,F=a;else e:for(;F!==null;){if(l=F,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Er(9,l,l.return)}var S=l.sibling;if(S!==null){S.return=l.return,F=S;break e}F=l.return}}var h=e.current;for(F=h;F!==null;){a=F;var w=a.child;if((a.subtreeFlags&2064)!==0&&w!==null)w.return=a,F=w;else e:for(a=h;F!==null;){if(d=F,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Ti(9,d)}}catch($){we(d,d.return,$)}if(d===a){F=null;break e}var M=d.sibling;if(M!==null){M.return=d.return,F=M;break e}F=d.return}}if(te=i,Qt(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Ur,e)}catch{}r=!0}return r}finally{se=n,st.transition=t}}return!1}function tc(e,t,n){t=Dn(n,t),t=xu(e,t,1),e=Jt(e,t,1),t=Ue(),e!==null&&(qn(e,1,t),Ke(e,t))}function we(e,t,n){if(e.tag===3)tc(e,e,n);else for(;t!==null;){if(t.tag===3){tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=Dn(n,e),e=Su(t,e,1),t=Jt(t,e,1),e=Ue(),t!==null&&(qn(t,1,e),Ke(t,e));break}}t=t.return}}function bp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(je&n)===n&&(Te===4||Te===3&&(je&130023424)===je&&500>Ce()-_o?fn(e,0):Oo|=n),Ke(e,t)}function nc(e,t){t===0&&((e.mode&1)===0?t=1:(t=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var n=Ue();e=bt(e,t),e!==null&&(qn(e,t,n),Ke(e,n))}function Mp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function Ap(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Ge=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ge=!1,Sp(e,t,n);Ge=(e.flags&131072)!==0}else Ge=!1,ge&&(t.flags&1048576)!==0&&_s(t,di,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ni(e,t),e=t.pendingProps;var i=Pn(t,_e.current);On(t,n),i=fo(null,t,r,e,i,n);var l=mo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(l=!0,si(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lo(t),i.updater=ki,t.stateNode=i,i._reactInternals=t,So(t,r,e,n),t=ko(null,t,r,!0,l,n)):(t.tag=0,ge&&l&&Kl(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ni(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Op(r),e=mt(r,e),i){case 0:t=Eo(null,t,r,e,n);break e;case 1:t=Pu(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=Ru(null,t,r,mt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Eo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Pu(e,t,r,i,n);case 3:e:{if(Iu(t),e===null)throw Error(s(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Vs(e,t),vi(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Dn(Error(s(423)),t),t=bu(e,t,r,n,i);break e}else if(r!==i){i=Dn(Error(s(424)),t),t=bu(e,t,r,n,i);break e}else for(tt=$t(t.stateNode.containerInfo.firstChild),et=t,ge=!0,ft=null,n=$s(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),r===i){t=At(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return Js(t),e===null&&Yl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,$l(r,i)?a=null:l!==null&&$l(r,l)&&(t.flags|=32),Tu(e,t),ze(e,t,a,n),t.child;case 6:return e===null&&Yl(t),null;case 13:return Mu(e,t,n);case 4:return oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),ku(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,de(mi,r._currentValue),r._currentValue=a,l!==null)if(pt(l.value,a)){if(l.children===i.children&&!Ve.current){t=At(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){a=l.child;for(var g=d.firstContext;g!==null;){if(g.context===r){if(l.tag===1){g=Mt(-1,n&-n),g.tag=2;var E=l.updateQueue;if(E!==null){E=E.shared;var I=E.pending;I===null?g.next=g:(g.next=I.next,I.next=g),E.pending=g}}l.lanes|=n,g=l.alternate,g!==null&&(g.lanes|=n),ro(l.return,n,t),d.lanes|=n;break}g=g.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(s(341));a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),ro(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=ot(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=mt(r,t.pendingProps),i=mt(r.type,i),Ru(e,t,r,i,n);case 15:return Nu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mt(r,i),Ni(e,t),t.tag=1,Qe(r)?(e=!0,si(t)):e=!1,On(t,n),vu(t,r,i),So(t,r,i,n),ko(null,t,r,!0,e,n);case 19:return ju(e,t,n);case 22:return Lu(e,t,n)}throw Error(s(156,t.tag))};function ic(e,t){return Da(e,t)}function jp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new jp(e,t,n,r)}function Wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Op(e){if(typeof e=="function")return Wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rt)return 11;if(e===Ne)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Di(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")Wo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case he:return gn(n.children,i,l,t);case Re:a=8,i|=8;break;case He:return e=ut(12,n,t,i|2),e.elementType=He,e.lanes=l,e;case Oe:return e=ut(13,n,t,i),e.elementType=Oe,e.lanes=l,e;case $e:return e=ut(19,n,t,i),e.elementType=$e,e.lanes=l,e;case Se:return Bi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xe:a=10;break e;case Nt:a=9;break e;case rt:a=11;break e;case Ne:a=14;break e;case We:a=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=ut(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function gn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function Bi(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function Vo(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _p(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Go(e,t,n,r,i,l,a,d,g){return e=new _p(e,t,n,d,g),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ut(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lo(l),e}function Dp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lc(e){if(!e)return Vt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(Qe(n))return As(e,n,t)}return t}function oc(e,t,n,r,i,l,a,d,g){return e=Go(n,r,!0,e,i,l,a,d,g),e.context=lc(null),n=e.current,r=Ue(),i=Yt(n),l=Mt(r,i),l.callback=t??null,Jt(n,l,i),e.current.lanes=i,qn(e,i,r),Ke(e,r),e}function Fi(e,t,n,r){var i=t.current,l=Ue(),a=Yt(i);return n=lc(n),t.context===null?t.context=n:t.pendingContext=n,t=Mt(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(i,t,a),e!==null&&(vt(e,i,a,l),hi(e,i,a)),a}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jo(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function Bp(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ko(e){this._internalRoot=e}Ui.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Fi(e,t,null,null)},Ui.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Fi(null,e,null,null)}),t[Lt]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var t=Va();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&Ja(e)}};function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Fp(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var E=zi(a);l.call(E)}}var a=oc(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=a,e[Lt]=a.current,cr(e.nodeType===8?e.parentNode:e),pn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var d=r;r=function(){var E=zi(g);d.call(E)}}var g=Go(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=g,e[Lt]=g.current,cr(e.nodeType===8?e.parentNode:e),pn(function(){Fi(t,g,n,r)}),g}function $i(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var d=i;i=function(){var g=zi(a);d.call(g)}}Fi(t,a,e,i)}else a=Fp(n,t,e,i,r);return zi(a)}$a=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kn(t.pendingLanes);n!==0&&(xl(t,n|1),Ke(t,Ce()),(te&6)===0&&(zn=Ce()+500,Qt()))}break;case 13:pn(function(){var r=bt(e,1);if(r!==null){var i=Ue();vt(r,e,1,i)}}),Jo(e,1)}},Sl=function(e){if(e.tag===13){var t=bt(e,134217728);if(t!==null){var n=Ue();vt(t,e,134217728,n)}Jo(e,134217728)}},Wa=function(e){if(e.tag===13){var t=Yt(e),n=bt(e,t);if(n!==null){var r=Ue();vt(n,e,t,r)}Jo(e,t)}},Va=function(){return se},Qa=function(e,t){var n=se;try{return se=e,t()}finally{se=n}},pl=function(e,t,n){switch(t){case"input":if(il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oi(r);if(!i)throw Error(s(90));ha(r),il(r,i)}}}break;case"textarea":wa(e,n);break;case"select":t=n.value,t!=null&&vn(e,!!n.multiple,t,!1)}},Ia=Uo,ba=pn;var zp={usingClientEntryPoint:!1,Events:[fr,Ln,oi,Ta,Pa,Uo]},Lr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Up={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oa(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Ur=Wi.inject(Up),St=Wi}catch{}}return qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp,qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qo(t))throw Error(s(200));return Dp(e,t,null,n)},qe.createRoot=function(e,t){if(!qo(e))throw Error(s(299));var n=!1,r="",i=sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Go(e,1,!1,null,null,n,!1,r,i),e[Lt]=t.current,cr(e.nodeType===8?e.parentNode:e),new Ko(t)},qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Oa(t),e=e===null?null:e.stateNode,e},qe.flushSync=function(e){return pn(e)},qe.hydrate=function(e,t,n){if(!Hi(t))throw Error(s(200));return $i(null,e,t,!0,n)},qe.hydrateRoot=function(e,t,n){if(!qo(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=sc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=oc(t,null,e,1,n??null,i,!1,l,a),e[Lt]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ui(t)},qe.render=function(e,t,n){if(!Hi(t))throw Error(s(200));return $i(null,e,t,!1,n)},qe.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(s(40));return e._reactRootContainer?(pn(function(){$i(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},qe.unstable_batchedUpdates=Uo,qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hi(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return $i(e,t,n,!1,r)},qe.version="18.3.1-next-f1338f8080-20240426",qe}var vc;function Kp(){if(vc)return Zo.exports;vc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Zo.exports=Jp(),Zo.exports}var yc;function qp(){if(yc)return Vi;yc=1;var o=Kp();return Vi.createRoot=o.createRoot,Vi.hydrateRoot=o.hydrateRoot,Vi}var Xp=qp();/**
 * react-router v7.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xc="popstate";function Sc(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function Yp(o={}){function u(f,m){let{pathname:y="/",search:v="",hash:C=""}=hn(f.location.hash.substring(1));return!y.startsWith("/")&&!y.startsWith(".")&&(y="/"+y),la("",{pathname:y,search:v,hash:C},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function s(f,m){let y=f.document.querySelector("base"),v="";if(y&&y.getAttribute("href")){let C=f.location.href,L=C.indexOf("#");v=L===-1?C:C.slice(0,L)}return v+"#"+(typeof m=="string"?m:Ir(m))}function c(f,m){xt(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return ef(u,s,c,o)}function xe(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function xt(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Zp(){return Math.random().toString(36).substring(2,10)}function wc(o,u){return{usr:o.state,key:o.key,idx:u,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function la(o,u,s=null,c,f){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof u=="string"?hn(u):u,state:s,key:u&&u.key||c||Zp(),mask:f}}function Ir({pathname:o="/",search:u="",hash:s=""}){return u&&u!=="?"&&(o+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(o+=s.charAt(0)==="#"?s:"#"+s),o}function hn(o){let u={};if(o){let s=o.indexOf("#");s>=0&&(u.hash=o.substring(s),o=o.substring(0,s));let c=o.indexOf("?");c>=0&&(u.search=o.substring(c),o=o.substring(0,c)),o&&(u.pathname=o)}return u}function ef(o,u,s,c={}){let{window:f=document.defaultView,v5Compat:m=!1}=c,y=f.history,v="POP",C=null,L=k();L==null&&(L=0,y.replaceState({...y.state,idx:L},""));function k(){return(y.state||{idx:null}).idx}function N(){v="POP";let A=k(),B=A==null?null:A-L;L=A,C&&C({action:v,location:O.location,delta:B})}function j(A,B){v="PUSH";let q=Sc(A)?A:la(O.location,A,B);s&&s(q,A),L=k()+1;let X=wc(q,L),ne=O.createHref(q.mask||q);try{y.pushState(X,"",ne)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;f.location.assign(ne)}m&&C&&C({action:v,location:O.location,delta:1})}function W(A,B){v="REPLACE";let q=Sc(A)?A:la(O.location,A,B);s&&s(q,A),L=k();let X=wc(q,L),ne=O.createHref(q.mask||q);y.replaceState(X,"",ne),m&&C&&C({action:v,location:O.location,delta:0})}function V(A){return tf(A)}let O={get action(){return v},get location(){return o(f,y)},listen(A){if(C)throw new Error("A history only accepts one active listener");return f.addEventListener(xc,N),C=A,()=>{f.removeEventListener(xc,N),C=null}},createHref(A){return u(f,A)},createURL:V,encodeLocation(A){let B=V(A);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:j,replace:W,go(A){return y.go(A)}};return O}function tf(o,u=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),xe(s,"No window.location.(origin|href) available to create URL");let c=typeof o=="string"?o:Ir(o);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function Lc(o,u,s="/"){return nf(o,u,s,!1)}function nf(o,u,s,c,f){let m=typeof u=="string"?hn(u):u,y=Ot(m.pathname||"/",s);if(y==null)return null;let v=rf(o),C=null,L=hf(y);for(let k=0;C==null&&k<v.length;++k)C=mf(v[k],L,c);return C}function rf(o){let u=Tc(o);return lf(u),u}function Tc(o,u=[],s=[],c="",f=!1){let m=(y,v,C=f,L)=>{let k={relativePath:L===void 0?y.path||"":L,caseSensitive:y.caseSensitive===!0,childrenIndex:v,route:y};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(c)&&C)return;xe(k.relativePath.startsWith(c),`Absolute route path "${k.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(c.length)}let N=yt([c,k.relativePath]),j=s.concat(k);y.children&&y.children.length>0&&(xe(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${N}".`),Tc(y.children,u,j,N,C)),!(y.path==null&&!y.index)&&u.push({path:N,score:pf(N,y.index),routesMeta:j})};return o.forEach((y,v)=>{var C;if(y.path===""||!((C=y.path)!=null&&C.includes("?")))m(y,v);else for(let L of Pc(y.path))m(y,v,!0,L)}),u}function Pc(o){let u=o.split("/");if(u.length===0)return[];let[s,...c]=u,f=s.endsWith("?"),m=s.replace(/\?$/,"");if(c.length===0)return f?[m,""]:[m];let y=Pc(c.join("/")),v=[];return v.push(...y.map(C=>C===""?m:[m,C].join("/"))),f&&v.push(...y),v.map(C=>o.startsWith("/")&&C===""?"/":C)}function lf(o){o.sort((u,s)=>u.score!==s.score?s.score-u.score:ff(u.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var of=/^:[\w-]+$/,af=3,sf=2,uf=1,cf=10,df=-2,Cc=o=>o==="*";function pf(o,u){let s=o.split("/"),c=s.length;return s.some(Cc)&&(c+=df),u&&(c+=sf),s.filter(f=>!Cc(f)).reduce((f,m)=>f+(of.test(m)?af:m===""?uf:cf),c)}function ff(o,u){return o.length===u.length&&o.slice(0,-1).every((c,f)=>c===u[f])?o[o.length-1]-u[u.length-1]:0}function mf(o,u,s=!1){let{routesMeta:c}=o,f={},m="/",y=[];for(let v=0;v<c.length;++v){let C=c[v],L=v===c.length-1,k=m==="/"?u:u.slice(m.length)||"/",N=Xi({path:C.relativePath,caseSensitive:C.caseSensitive,end:L},k),j=C.route;if(!N&&L&&s&&!c[c.length-1].route.index&&(N=Xi({path:C.relativePath,caseSensitive:C.caseSensitive,end:!1},k)),!N)return null;Object.assign(f,N.params),y.push({params:f,pathname:yt([m,N.pathname]),pathnameBase:Sf(yt([m,N.pathnameBase])),route:j}),N.pathnameBase!=="/"&&(m=yt([m,N.pathnameBase]))}return y}function Xi(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,c]=gf(o.path,o.caseSensitive,o.end),f=u.match(s);if(!f)return null;let m=f[0],y=m.replace(/(.)\/+$/,"$1"),v=f.slice(1);return{params:c.reduce((L,{paramName:k,isOptional:N},j)=>{if(k==="*"){let V=v[j]||"";y=m.slice(0,m.length-V.length).replace(/(.)\/+$/,"$1")}const W=v[j];return N&&!W?L[k]=void 0:L[k]=(W||"").replace(/%2F/g,"/"),L},{}),pathname:m,pathnameBase:y,pattern:o}}function gf(o,u=!1,s=!0){xt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let c=[],f="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,v,C,L,k)=>{if(c.push({paramName:v,isOptional:C!=null}),C){let N=k.charAt(L+y.length);return N&&N!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(c.push({paramName:"*"}),f+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":o!==""&&o!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),c]}function hf(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return xt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),o}}function Ot(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,c=o.charAt(s);return c&&c!=="/"?null:o.slice(s)||"/"}var vf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function yf(o,u="/"){let{pathname:s,search:c="",hash:f=""}=typeof o=="string"?hn(o):o,m;return s?(s=bc(s),s.startsWith("/")?m=Ec(s.substring(1),"/"):m=Ec(s,u)):m=u,{pathname:m,search:wf(c),hash:Cf(f)}}function Ec(o,u){let s=Yi(u).split("/");return o.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function na(o,u,s,c){return`Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xf(o){return o.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function Ic(o){let u=xf(o);return u.map((s,c)=>c===u.length-1?s.pathname:s.pathnameBase)}function sa(o,u,s,c=!1){let f;typeof o=="string"?f=hn(o):(f={...o},xe(!f.pathname||!f.pathname.includes("?"),na("?","pathname","search",f)),xe(!f.pathname||!f.pathname.includes("#"),na("#","pathname","hash",f)),xe(!f.search||!f.search.includes("#"),na("#","search","hash",f)));let m=o===""||f.pathname==="",y=m?"/":f.pathname,v;if(y==null)v=s;else{let N=u.length-1;if(!c&&y.startsWith("..")){let j=y.split("/");for(;j[0]==="..";)j.shift(),N-=1;f.pathname=j.join("/")}v=N>=0?u[N]:"/"}let C=yf(f,v),L=y&&y!=="/"&&y.endsWith("/"),k=(m||y===".")&&s.endsWith("/");return!C.pathname.endsWith("/")&&(L||k)&&(C.pathname+="/"),C}var bc=o=>o.replace(/\/\/+/g,"/"),yt=o=>bc(o.join("/")),Yi=o=>o.replace(/\/+$/,""),Sf=o=>Yi(o).replace(/^\/*/,"/"),wf=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Cf=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Ef=class{constructor(o,u,s,c=!1){this.status=o,this.statusText=u||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function kf(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Rf(o){let u=o.map(s=>s.route.path).filter(Boolean);return yt(u)||"/"}var Mc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ac(o,u){let s=o;if(typeof s!="string"||!vf.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let c=s,f=!1;if(Mc)try{let m=new URL(window.location.href),y=s.startsWith("//")?new URL(m.protocol+s):new URL(s),v=Ot(y.pathname,u);y.origin===m.origin&&v!=null?s=v+y.search+y.hash:f=!0}catch{xt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jc=["POST","PUT","PATCH","DELETE"];new Set(jc);var Nf=["GET",...jc];new Set(Nf);var Hn=R.createContext(null);Hn.displayName="DataRouter";var tl=R.createContext(null);tl.displayName="DataRouterState";var Oc=R.createContext(!1);function Lf(){return R.useContext(Oc)}var _c=R.createContext({isTransitioning:!1});_c.displayName="ViewTransition";var Tf=R.createContext(new Map);Tf.displayName="Fetchers";var Pf=R.createContext(null);Pf.displayName="Await";var ct=R.createContext(null);ct.displayName="Navigation";var Mr=R.createContext(null);Mr.displayName="Location";var Rt=R.createContext({outlet:null,matches:[],isDataRoute:!1});Rt.displayName="Route";var ua=R.createContext(null);ua.displayName="RouteError";var Dc="REACT_ROUTER_ERROR",If="REDIRECT",bf="ROUTE_ERROR_RESPONSE";function Mf(o){if(o.startsWith(`${Dc}:${If}:{`))try{let u=JSON.parse(o.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Af(o){if(o.startsWith(`${Dc}:${bf}:{`))try{let u=JSON.parse(o.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Ef(u.status,u.statusText,u.data)}catch{}}function jf(o,{relative:u}={}){xe(Ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=R.useContext(ct),{hash:f,pathname:m,search:y}=jr(o,{relative:u}),v=m;return s!=="/"&&(v=m==="/"?s:yt([s,m])),c.createHref({pathname:v,search:y,hash:f})}function Ar(){return R.useContext(Mr)!=null}function _t(){return xe(Ar(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Mr).location}var Bc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fc(o){R.useContext(ct).static||R.useLayoutEffect(o)}function Of(){let{isDataRoute:o}=R.useContext(Rt);return o?Jf():_f()}function _f(){xe(Ar(),"useNavigate() may be used only in the context of a <Router> component.");let o=R.useContext(Hn),{basename:u,navigator:s}=R.useContext(ct),{matches:c}=R.useContext(Rt),{pathname:f}=_t(),m=JSON.stringify(Ic(c)),y=R.useRef(!1);return Fc(()=>{y.current=!0}),R.useCallback((C,L={})=>{if(xt(y.current,Bc),!y.current)return;if(typeof C=="number"){s.go(C);return}let k=sa(C,JSON.parse(m),f,L.relative==="path");o==null&&u!=="/"&&(k.pathname=k.pathname==="/"?u:yt([u,k.pathname])),(L.replace?s.replace:s.push)(k,L.state,L)},[u,s,m,f,o])}R.createContext(null);function zc(){let{matches:o}=R.useContext(Rt),u=o[o.length-1];return(u==null?void 0:u.params)??{}}function jr(o,{relative:u}={}){let{matches:s}=R.useContext(Rt),{pathname:c}=_t(),f=JSON.stringify(Ic(s));return R.useMemo(()=>sa(o,JSON.parse(f),c,u==="path"),[o,f,c,u])}function Df(o,u){return Uc(o,u)}function Uc(o,u,s){var A;xe(Ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=R.useContext(ct),{matches:f}=R.useContext(Rt),m=f[f.length-1],y=m?m.params:{},v=m?m.pathname:"/",C=m?m.pathnameBase:"/",L=m&&m.route;{let B=L&&L.path||"";$c(v,!L||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let k=_t(),N;if(u){let B=typeof u=="string"?hn(u):u;xe(C==="/"||((A=B.pathname)==null?void 0:A.startsWith(C)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${B.pathname}" was given in the \`location\` prop.`),N=B}else N=k;let j=N.pathname||"/",W=j;if(C!=="/"){let B=C.replace(/^\//,"").split("/");W="/"+j.replace(/^\//,"").split("/").slice(B.length).join("/")}let V=s&&s.state.matches.length?s.state.matches.map(B=>Object.assign(B,{route:s.manifest[B.route.id]||B.route})):Lc(o,{pathname:W});xt(L||V!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),xt(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=Hf(V&&V.map(B=>Object.assign({},B,{params:Object.assign({},y,B.params),pathname:yt([C,c.encodeLocation?c.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?C:yt([C,c.encodeLocation?c.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),f,s);return u&&O?R.createElement(Mr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...N},navigationType:"POP"}},O):O}function Bf(){let o=Gf(),u=kf(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",o),y=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:m},"ErrorBoundary")," or"," ",R.createElement("code",{style:m},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},u),s?R.createElement("pre",{style:f},s):null,y)}var Ff=R.createElement(Bf,null),Hc=class extends R.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,u){return u.location!==o.location||u.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:u.error,location:u.location,revalidation:o.revalidation||u.revalidation}}componentDidCatch(o,u){this.props.onError?this.props.onError(o,u):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const s=Af(o.digest);s&&(o=s)}let u=o!==void 0?R.createElement(Rt.Provider,{value:this.props.routeContext},R.createElement(ua.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?R.createElement(zf,{error:o},u):u}};Hc.contextType=Oc;var ra=new WeakMap;function zf({children:o,error:u}){let{basename:s}=R.useContext(ct);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let c=Mf(u.digest);if(c){let f=ra.get(u);if(f)throw f;let m=Ac(c.location,s);if(Mc&&!ra.get(u))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const y=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw ra.set(u,y),y}return R.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return o}function Uf({routeContext:o,match:u,children:s}){let c=R.useContext(Hn);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),R.createElement(Rt.Provider,{value:o},s)}function Hf(o,u=[],s){let c=s==null?void 0:s.state;if(o==null){if(!c)return null;if(c.errors)o=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let f=o,m=c==null?void 0:c.errors;if(m!=null){let k=f.findIndex(N=>N.route.id&&(m==null?void 0:m[N.route.id])!==void 0);xe(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),f=f.slice(0,Math.min(f.length,k+1))}let y=!1,v=-1;if(s&&c){y=c.renderFallback;for(let k=0;k<f.length;k++){let N=f[k];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(v=k),N.route.id){let{loaderData:j,errors:W}=c,V=N.route.loader&&!j.hasOwnProperty(N.route.id)&&(!W||W[N.route.id]===void 0);if(N.route.lazy||V){s.isStatic&&(y=!0),v>=0?f=f.slice(0,v+1):f=[f[0]];break}}}}let C=s==null?void 0:s.onError,L=c&&C?(k,N)=>{var j,W;C(k,{location:c.location,params:((W=(j=c.matches)==null?void 0:j[0])==null?void 0:W.params)??{},pattern:Rf(c.matches),errorInfo:N})}:void 0;return f.reduceRight((k,N,j)=>{let W,V=!1,O=null,A=null;c&&(W=m&&N.route.id?m[N.route.id]:void 0,O=N.route.errorElement||Ff,y&&(v<0&&j===0?($c("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,A=null):v===j&&(V=!0,A=N.route.hydrateFallbackElement||null)));let B=u.concat(f.slice(0,j+1)),q=()=>{let X;return W?X=O:V?X=A:N.route.Component?X=R.createElement(N.route.Component,null):N.route.element?X=N.route.element:X=k,R.createElement(Uf,{match:N,routeContext:{outlet:k,matches:B,isDataRoute:c!=null},children:X})};return c&&(N.route.ErrorBoundary||N.route.errorElement||j===0)?R.createElement(Hc,{location:c.location,revalidation:c.revalidation,component:O,error:W,children:q(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:L}):q()},null)}function ca(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $f(o){let u=R.useContext(Hn);return xe(u,ca(o)),u}function Wf(o){let u=R.useContext(tl);return xe(u,ca(o)),u}function Vf(o){let u=R.useContext(Rt);return xe(u,ca(o)),u}function da(o){let u=Vf(o),s=u.matches[u.matches.length-1];return xe(s.route.id,`${o} can only be used on routes that contain a unique "id"`),s.route.id}function Qf(){return da("useRouteId")}function Gf(){var c;let o=R.useContext(ua),u=Wf("useRouteError"),s=da("useRouteError");return o!==void 0?o:(c=u.errors)==null?void 0:c[s]}function Jf(){let{router:o}=$f("useNavigate"),u=da("useNavigate"),s=R.useRef(!1);return Fc(()=>{s.current=!0}),R.useCallback(async(f,m={})=>{xt(s.current,Bc),s.current&&(typeof f=="number"?await o.navigate(f):await o.navigate(f,{fromRouteId:u,...m}))},[o,u])}var kc={};function $c(o,u,s){!u&&!kc[o]&&(kc[o]=!0,xt(!1,s))}R.memo(Kf);function Kf({routes:o,manifest:u,future:s,state:c,isStatic:f,onError:m}){return Uc(o,void 0,{manifest:u,state:c,isStatic:f,onError:m})}function Ji(o){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qf({basename:o="/",children:u=null,location:s,navigationType:c="POP",navigator:f,static:m=!1,useTransitions:y}){xe(!Ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=o.replace(/^\/*/,"/"),C=R.useMemo(()=>({basename:v,navigator:f,static:m,useTransitions:y,future:{}}),[v,f,m,y]);typeof s=="string"&&(s=hn(s));let{pathname:L="/",search:k="",hash:N="",state:j=null,key:W="default",mask:V}=s,O=R.useMemo(()=>{let A=Ot(L,v);return A==null?null:{location:{pathname:A,search:k,hash:N,state:j,key:W,mask:V},navigationType:c}},[v,L,k,N,j,W,c,V]);return xt(O!=null,`<Router basename="${v}"> is not able to match the URL "${L}${k}${N}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:R.createElement(ct.Provider,{value:C},R.createElement(Mr.Provider,{children:u,value:O}))}function Xf({children:o,location:u}){return Df(oa(o),u)}function oa(o,u=[]){let s=[];return R.Children.forEach(o,(c,f)=>{if(!R.isValidElement(c))return;let m=[...u,f];if(c.type===R.Fragment){s.push.apply(s,oa(c.props.children,m));return}xe(c.type===Ji,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let y={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(y.children=oa(c.props.children,m)),s.push(y)}),s}var Ki="get",qi="application/x-www-form-urlencoded";function nl(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Yf(o){return nl(o)&&o.tagName.toLowerCase()==="button"}function Zf(o){return nl(o)&&o.tagName.toLowerCase()==="form"}function em(o){return nl(o)&&o.tagName.toLowerCase()==="input"}function tm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function nm(o,u){return o.button===0&&(!u||u==="_self")&&!tm(o)}var Qi=null;function rm(){if(Qi===null)try{new FormData(document.createElement("form"),0),Qi=!1}catch{Qi=!0}return Qi}var im=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ia(o){return o!=null&&!im.has(o)?(xt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qi}"`),null):o}function lm(o,u){let s,c,f,m,y;if(Zf(o)){let v=o.getAttribute("action");c=v?Ot(v,u):null,s=o.getAttribute("method")||Ki,f=ia(o.getAttribute("enctype"))||qi,m=new FormData(o)}else if(Yf(o)||em(o)&&(o.type==="submit"||o.type==="image")){let v=o.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let C=o.getAttribute("formaction")||v.getAttribute("action");if(c=C?Ot(C,u):null,s=o.getAttribute("formmethod")||v.getAttribute("method")||Ki,f=ia(o.getAttribute("formenctype"))||ia(v.getAttribute("enctype"))||qi,m=new FormData(v,o),!rm()){let{name:L,type:k,value:N}=o;if(k==="image"){let j=L?`${L}.`:"";m.append(`${j}x`,"0"),m.append(`${j}y`,"0")}else L&&m.append(L,N)}}else{if(nl(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Ki,c=null,f=qi,y=o}return m&&f==="text/plain"&&(y=m,m=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:m,body:y}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pa(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Wc(o,u,s,c){let f=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return s?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:u&&Ot(f.pathname,u)==="/"?f.pathname=`${Yi(u)}/_root.${c}`:f.pathname=`${Yi(f.pathname)}.${c}`,f}async function om(o,u){if(o.id in u)return u[o.id];try{let s=await import(o.module);return u[o.id]=s,s}catch(s){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function am(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function sm(o,u,s){let c=await Promise.all(o.map(async f=>{let m=u.routes[f.route.id];if(m){let y=await om(m,s);return y.links?y.links():[]}return[]}));return pm(c.flat(1).filter(am).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Rc(o,u,s,c,f,m){let y=(C,L)=>s[L]?C.route.id!==s[L].route.id:!0,v=(C,L)=>{var k;return s[L].pathname!==C.pathname||((k=s[L].route.path)==null?void 0:k.endsWith("*"))&&s[L].params["*"]!==C.params["*"]};return m==="assets"?u.filter((C,L)=>y(C,L)||v(C,L)):m==="data"?u.filter((C,L)=>{var N;let k=c.routes[C.route.id];if(!k||!k.hasLoader)return!1;if(y(C,L)||v(C,L))return!0;if(C.route.shouldRevalidate){let j=C.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((N=s[0])==null?void 0:N.params)||{},nextUrl:new URL(o,window.origin),nextParams:C.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function um(o,u,{includeHydrateFallback:s}={}){return cm(o.map(c=>{let f=u.routes[c.route.id];if(!f)return[];let m=[f.module];return f.clientActionModule&&(m=m.concat(f.clientActionModule)),f.clientLoaderModule&&(m=m.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(m=m.concat(f.hydrateFallbackModule)),f.imports&&(m=m.concat(f.imports)),m}).flat(1))}function cm(o){return[...new Set(o)]}function dm(o){let u={},s=Object.keys(o).sort();for(let c of s)u[c]=o[c];return u}function pm(o,u){let s=new Set;return new Set(u),o.reduce((c,f)=>{let m=JSON.stringify(dm(f));return s.has(m)||(s.add(m),c.push({key:m,link:f})),c},[])}function fa(){let o=R.useContext(Hn);return pa(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function fm(){let o=R.useContext(tl);return pa(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var ma=R.createContext(void 0);ma.displayName="FrameworkContext";function ga(){let o=R.useContext(ma);return pa(o,"You must render this element inside a <HydratedRouter> element"),o}function mm(o,u){let s=R.useContext(ma),[c,f]=R.useState(!1),[m,y]=R.useState(!1),{onFocus:v,onBlur:C,onMouseEnter:L,onMouseLeave:k,onTouchStart:N}=u,j=R.useRef(null);R.useEffect(()=>{if(o==="render"&&y(!0),o==="viewport"){let O=B=>{B.forEach(q=>{y(q.isIntersecting)})},A=new IntersectionObserver(O,{threshold:.5});return j.current&&A.observe(j.current),()=>{A.disconnect()}}},[o]),R.useEffect(()=>{if(c){let O=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(O)}}},[c]);let W=()=>{f(!0)},V=()=>{f(!1),y(!1)};return s?o!=="intent"?[m,j,{}]:[m,j,{onFocus:Pr(v,W),onBlur:Pr(C,V),onMouseEnter:Pr(L,W),onMouseLeave:Pr(k,V),onTouchStart:Pr(N,W)}]:[!1,j,{}]}function Pr(o,u){return s=>{o&&o(s),s.defaultPrevented||u(s)}}function gm({page:o,...u}){let s=Lf(),{router:c}=fa(),f=R.useMemo(()=>Lc(c.routes,o,c.basename),[c.routes,o,c.basename]);return f?s?R.createElement(vm,{page:o,matches:f,...u}):R.createElement(ym,{page:o,matches:f,...u}):null}function hm(o){let{manifest:u,routeModules:s}=ga(),[c,f]=R.useState([]);return R.useEffect(()=>{let m=!1;return sm(o,u,s).then(y=>{m||f(y)}),()=>{m=!0}},[o,u,s]),c}function vm({page:o,matches:u,...s}){let c=_t(),{future:f}=ga(),{basename:m}=fa(),y=R.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let v=Wc(o,m,f.unstable_trailingSlashAwareDataRequests,"rsc"),C=!1,L=[];for(let k of u)typeof k.route.shouldRevalidate=="function"?C=!0:L.push(k.route.id);return C&&L.length>0&&v.searchParams.set("_routes",L.join(",")),[v.pathname+v.search]},[m,f.unstable_trailingSlashAwareDataRequests,o,c,u]);return R.createElement(R.Fragment,null,y.map(v=>R.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...s})))}function ym({page:o,matches:u,...s}){let c=_t(),{future:f,manifest:m,routeModules:y}=ga(),{basename:v}=fa(),{loaderData:C,matches:L}=fm(),k=R.useMemo(()=>Rc(o,u,L,m,c,"data"),[o,u,L,m,c]),N=R.useMemo(()=>Rc(o,u,L,m,c,"assets"),[o,u,L,m,c]),j=R.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let O=new Set,A=!1;if(u.forEach(q=>{var ne;let X=m.routes[q.route.id];!X||!X.hasLoader||(!k.some(oe=>oe.route.id===q.route.id)&&q.route.id in C&&((ne=y[q.route.id])!=null&&ne.shouldRevalidate)||X.hasClientLoader?A=!0:O.add(q.route.id))}),O.size===0)return[];let B=Wc(o,v,f.unstable_trailingSlashAwareDataRequests,"data");return A&&O.size>0&&B.searchParams.set("_routes",u.filter(q=>O.has(q.route.id)).map(q=>q.route.id).join(",")),[B.pathname+B.search]},[v,f.unstable_trailingSlashAwareDataRequests,C,c,m,k,u,o,y]),W=R.useMemo(()=>um(N,m),[N,m]),V=hm(N);return R.createElement(R.Fragment,null,j.map(O=>R.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...s})),W.map(O=>R.createElement("link",{key:O,rel:"modulepreload",href:O,...s})),V.map(({key:O,link:A})=>R.createElement("link",{key:O,nonce:s.nonce,...A,crossOrigin:A.crossOrigin??s.crossOrigin})))}function xm(...o){return u=>{o.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sm&&(window.__reactRouterVersion="7.15.1")}catch{}function wm({basename:o,children:u,useTransitions:s,window:c}){let f=R.useRef();f.current==null&&(f.current=Yp({window:c,v5Compat:!0}));let m=f.current,[y,v]=R.useState({action:m.action,location:m.location}),C=R.useCallback(L=>{s===!1?v(L):R.startTransition(()=>v(L))},[s]);return R.useLayoutEffect(()=>m.listen(C),[m,C]),R.createElement(qf,{basename:o,children:u,location:y.location,navigationType:y.action,navigator:m,useTransitions:s})}var Vc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=R.forwardRef(function({onClick:u,discover:s="render",prefetch:c="none",relative:f,reloadDocument:m,replace:y,mask:v,state:C,target:L,to:k,preventScrollReset:N,viewTransition:j,defaultShouldRevalidate:W,...V},O){let{basename:A,navigator:B,useTransitions:q}=R.useContext(ct),X=typeof k=="string"&&Vc.test(k),ne=Ac(k,A);k=ne.to;let oe=jf(k,{relative:f}),ue=_t(),he=null;if(v){let Ne=sa(v,[],ue.mask?ue.mask.pathname:"/",!0);A!=="/"&&(Ne.pathname=Ne.pathname==="/"?A:yt([A,Ne.pathname])),he=B.createHref(Ne)}let[Re,He,Xe]=mm(c,V),Nt=Rm(k,{replace:y,mask:v,state:C,target:L,preventScrollReset:N,relative:f,viewTransition:j,defaultShouldRevalidate:W,useTransitions:q});function rt(Ne){u&&u(Ne),Ne.defaultPrevented||Nt(Ne)}let Oe=!(ne.isExternal||m),$e=R.createElement("a",{...V,...Xe,href:(Oe?he:void 0)||ne.absoluteURL||oe,onClick:Oe?rt:u,ref:xm(O,He),target:L,"data-discover":!X&&s==="render"?"true":void 0});return Re&&!X?R.createElement(R.Fragment,null,$e,R.createElement(gm,{page:oe})):$e});Me.displayName="Link";var Cm=R.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:c="",end:f=!1,style:m,to:y,viewTransition:v,children:C,...L},k){let N=jr(y,{relative:L.relative}),j=_t(),W=R.useContext(tl),{navigator:V,basename:O}=R.useContext(ct),A=W!=null&&Im(N)&&v===!0,B=V.encodeLocation?V.encodeLocation(N).pathname:N.pathname,q=j.pathname,X=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;s||(q=q.toLowerCase(),X=X?X.toLowerCase():null,B=B.toLowerCase()),X&&O&&(X=Ot(X,O)||X);const ne=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let oe=q===B||!f&&q.startsWith(B)&&q.charAt(ne)==="/",ue=X!=null&&(X===B||!f&&X.startsWith(B)&&X.charAt(B.length)==="/"),he={isActive:oe,isPending:ue,isTransitioning:A},Re=oe?u:void 0,He;typeof c=="function"?He=c(he):He=[c,oe?"active":null,ue?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let Xe=typeof m=="function"?m(he):m;return R.createElement(Me,{...L,"aria-current":Re,className:He,ref:k,style:Xe,to:y,viewTransition:v},typeof C=="function"?C(he):C)});Cm.displayName="NavLink";var Em=R.forwardRef(({discover:o="render",fetcherKey:u,navigate:s,reloadDocument:c,replace:f,state:m,method:y=Ki,action:v,onSubmit:C,relative:L,preventScrollReset:k,viewTransition:N,defaultShouldRevalidate:j,...W},V)=>{let{useTransitions:O}=R.useContext(ct),A=Tm(),B=Pm(v,{relative:L}),q=y.toLowerCase()==="get"?"get":"post",X=typeof v=="string"&&Vc.test(v),ne=oe=>{if(C&&C(oe),oe.defaultPrevented)return;oe.preventDefault();let ue=oe.nativeEvent.submitter,he=(ue==null?void 0:ue.getAttribute("formmethod"))||y,Re=()=>A(ue||oe.currentTarget,{fetcherKey:u,method:he,navigate:s,replace:f,state:m,relative:L,preventScrollReset:k,viewTransition:N,defaultShouldRevalidate:j});O&&s!==!1?R.startTransition(()=>Re()):Re()};return R.createElement("form",{ref:V,method:q,action:B,onSubmit:c?C:ne,...W,"data-discover":!X&&o==="render"?"true":void 0})});Em.displayName="Form";function km(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qc(o){let u=R.useContext(Hn);return xe(u,km(o)),u}function Rm(o,{target:u,replace:s,mask:c,state:f,preventScrollReset:m,relative:y,viewTransition:v,defaultShouldRevalidate:C,useTransitions:L}={}){let k=Of(),N=_t(),j=jr(o,{relative:y});return R.useCallback(W=>{if(nm(W,u)){W.preventDefault();let V=s!==void 0?s:Ir(N)===Ir(j),O=()=>k(o,{replace:V,mask:c,state:f,preventScrollReset:m,relative:y,viewTransition:v,defaultShouldRevalidate:C});L?R.startTransition(()=>O()):O()}},[N,k,j,s,c,f,u,o,m,y,v,C,L])}var Nm=0,Lm=()=>`__${String(++Nm)}__`;function Tm(){let{router:o}=Qc("useSubmit"),{basename:u}=R.useContext(ct),s=Qf(),c=o.fetch,f=o.navigate;return R.useCallback(async(m,y={})=>{let{action:v,method:C,encType:L,formData:k,body:N}=lm(m,u);if(y.navigate===!1){let j=y.fetcherKey||Lm();await c(j,s,y.action||v,{defaultShouldRevalidate:y.defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:k,body:N,formMethod:y.method||C,formEncType:y.encType||L,flushSync:y.flushSync})}else await f(y.action||v,{defaultShouldRevalidate:y.defaultShouldRevalidate,preventScrollReset:y.preventScrollReset,formData:k,body:N,formMethod:y.method||C,formEncType:y.encType||L,replace:y.replace,state:y.state,fromRouteId:s,flushSync:y.flushSync,viewTransition:y.viewTransition})},[c,f,u,s])}function Pm(o,{relative:u}={}){let{basename:s}=R.useContext(ct),c=R.useContext(Rt);xe(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),m={...jr(o||".",{relative:u})},y=_t();if(o==null){m.search=y.search;let v=new URLSearchParams(m.search),C=v.getAll("index");if(C.some(k=>k==="")){v.delete("index"),C.filter(N=>N).forEach(N=>v.append("index",N));let k=v.toString();m.search=k?`?${k}`:""}}return(!o||o===".")&&f.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:yt([s,m.pathname])),Ir(m)}function Im(o,{relative:u}={}){let s=R.useContext(_c);xe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Qc("useViewTransitionState"),f=jr(o,{relative:u});if(!s.isTransitioning)return!1;let m=Ot(s.currentLocation.pathname,c)||s.currentLocation.pathname,y=Ot(s.nextLocation.pathname,c)||s.nextLocation.pathname;return Xi(f.pathname,y)!=null||Xi(f.pathname,m)!=null}const Nc=[{id:"backend",name:"后端开发工具",icon:"🖥️",type:"tool"},{id:"frontend",name:"前端开发工具",icon:"🌐",type:"tool"},{id:"devops",name:"DevOps工具",icon:"🔧",type:"tool"},{id:"wechat",name:"微信生态",icon:"💬",type:"tool"},{id:"basics",name:"Java基础",icon:"📚",type:"question"},{id:"oop",name:"面向对象",icon:"🎯",type:"question"},{id:"collection",name:"集合框架",icon:"📦",type:"question"},{id:"concurrent",name:"并发编程",icon:"⚡",type:"question"},{id:"jvm",name:"JVM原理",icon:"🔧",type:"question"},{id:"advanced",name:"高级特性",icon:"🚀",type:"question"},{id:"design-pattern",name:"设计模式",icon:"🎨",type:"question"},{id:"microservice",name:"微服务与分布式",icon:"🌐",type:"question"}],bm=({isOpen:o,onClose:u})=>{const s=c=>{const f=document.getElementById(c);f&&(f.scrollIntoView({behavior:"smooth"}),u())};return p.jsxs(p.Fragment,{children:[o&&p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",onClick:u}),p.jsx("aside",{className:"hidden md:block fixed left-0 top-16 h-screen w-64 bg-white shadow-xl overflow-y-auto border-r border-gray-100 z-40",children:p.jsxs("div",{className:"p-4",children:[p.jsxs("div",{className:"mb-6",children:[p.jsxs("h3",{className:"text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center",children:[p.jsx("span",{className:"mr-2",children:"🔧"})," 开发工具"]}),p.jsx("ul",{className:"space-y-1",children:Nc.filter(c=>c.type==="tool").map(c=>p.jsx("li",{children:p.jsxs("button",{onClick:()=>s(c.id),className:"w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-purple-50 hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 text-sm font-medium group",children:[p.jsx("span",{className:"text-lg group-hover:scale-110 transition-transform",children:c.icon}),p.jsx("span",{children:c.name})]})},c.id))})]}),p.jsxs("div",{className:"mb-6",children:[p.jsxs("h3",{className:"text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center",children:[p.jsx("span",{className:"mr-2",children:"📝"})," 面试题分类"]}),p.jsx("ul",{className:"space-y-1",children:Nc.filter(c=>c.type==="question").map(c=>p.jsx("li",{children:p.jsxs(Me,{to:`/category/${c.id}`,className:"block px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-purple-50 hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 text-sm font-medium group",children:[p.jsx("span",{className:"text-lg group-hover:scale-110 transition-transform",children:c.icon}),p.jsx("span",{children:c.name})]})},c.id))})]})]})}),p.jsx("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 shadow-xl",children:p.jsxs("div",{className:"flex justify-around items-center py-2",children:[p.jsxs(Me,{to:"/",className:"flex flex-col items-center text-indigo-600 p-2",children:[p.jsx("span",{className:"text-2xl mb-1",children:"🏠"}),p.jsx("span",{className:"text-xs",children:"首页"})]}),p.jsxs(Me,{to:"/category/basics",className:"flex flex-col items-center text-gray-600 p-2",children:[p.jsx("span",{className:"text-2xl mb-1",children:"📚"}),p.jsx("span",{className:"text-xs",children:"面试题"})]}),p.jsxs("a",{href:"#ai-tools",className:"flex flex-col items-center text-gray-600 p-2",onClick:c=>{c.preventDefault(),s("ai-tools")},children:[p.jsx("span",{className:"text-2xl mb-1",children:"🤖"}),p.jsx("span",{className:"text-xs",children:"AI工具"})]}),p.jsxs("a",{href:"#docs",className:"flex flex-col items-center text-gray-600 p-2",onClick:c=>{c.preventDefault(),s("docs")},children:[p.jsx("span",{className:"text-2xl mb-1",children:"🔧"}),p.jsx("span",{className:"text-xs",children:"工具箱"})]})]})})]})},br=({isOpen:o,onToggle:u,onClose:s})=>p.jsxs(p.Fragment,{children:[p.jsx("nav",{className:"bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 shadow-2xl sticky top-0 z-50",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"flex items-center justify-between h-16",children:[p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("button",{onClick:u,className:"md:hidden text-white hover:text-indigo-200 transition-colors",children:p.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o?p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),p.jsxs(Me,{to:"/",className:"flex items-center space-x-2",children:[p.jsx("span",{className:"text-2xl",children:"☕"}),p.jsx("span",{className:"text-white font-bold text-xl",children:"Java面试题"})]})]}),p.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[p.jsx(Me,{to:"/",className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium py-1",children:"首页"}),p.jsxs("a",{href:"#ai-tools",onClick:c=>{c.preventDefault();const f=document.getElementById("ai-tools");f&&f.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[p.jsx("span",{className:"mr-1",children:"🤖"}),"AI工具"]}),p.jsxs("a",{href:"#docs",onClick:c=>{c.preventDefault();const f=document.getElementById("docs");f&&f.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[p.jsx("span",{className:"mr-1",children:"🔧"}),"工具箱"]}),p.jsxs("a",{href:"#categories",onClick:c=>{c.preventDefault();const f=document.getElementById("categories");f&&f.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[p.jsx("span",{className:"mr-1",children:"📚"}),"知识分类"]})]})]})})}),p.jsx(bm,{isOpen:o,onClose:s})]}),Zi=[{id:"basics",name:"Java基础",icon:"📚",color:"bg-blue-500",description:"Java语言的核心基础知识，包括语法、类型系统、异常处理等"},{id:"oop",name:"面向对象",icon:"🎯",color:"bg-green-500",description:"面向对象编程的三大特性：封装、继承、多态"},{id:"collection",name:"集合框架",icon:"📦",color:"bg-purple-500",description:"Java集合框架的核心实现类，如List、Map、Set等"},{id:"concurrent",name:"并发编程",icon:"⚡",color:"bg-yellow-500",description:"多线程编程、线程安全、并发工具类等"},{id:"jvm",name:"JVM原理",icon:"🔧",color:"bg-red-500",description:"Java虚拟机原理、内存模型、GC机制等"},{id:"advanced",name:"高级特性",icon:"🚀",color:"bg-indigo-500",description:"反射、注解、泛型、Lambda表达式等高级特性"},{id:"design-pattern",name:"设计模式",icon:"🎨",color:"bg-teal-500",description:"GoF设计模式：创建型、结构型、行为型模式"},{id:"microservice",name:"微服务与分布式",icon:"🌐",color:"bg-cyan-500",description:"微服务架构、分布式系统、Spring Cloud、服务治理"}],el=[{id:"1",title:"Java中==和equals的区别是什么？",content:"请详细解释Java中==运算符和equals方法的区别，并举例说明。",category:"basics",difficulty:"easy",answer:"==用于比较基本数据类型的值是否相等，或比较引用类型的引用地址是否相同。equals方法用于比较对象的内容是否相等，默认行为与==相同，但通常被重写（如String、Integer等类）来比较内容。",codeExample:`String s1 = new String("hello");
String s2 = new String("hello");
System.out.println(s1 == s2);      // false，引用不同
System.out.println(s1.equals(s2)); // true，内容相同

int a = 10;
int b = 10;
System.out.println(a == b);        // true，基本类型比较值`,tags:["基础","面向对象"]},{id:"2",title:"什么是Java的自动装箱和拆箱？",content:"解释Java中的自动装箱（autoboxing）和拆箱（unboxing）概念，并说明它们的使用场景和注意事项。",category:"basics",difficulty:"easy",answer:"自动装箱是Java编译器自动将基本类型转换为对应的包装类类型的过程，拆箱则是相反的过程。例如int自动转换为Integer，Double自动转换为double等。这简化了代码，但在性能敏感的场景或集合操作中需要注意。",codeExample:`// 自动装箱
Integer i = 100; // 相当于 Integer.valueOf(100)

// 自动拆箱
int j = i;       // 相当于 i.intValue()

// 在集合中使用
List<Integer> list = new ArrayList<>();
list.add(1);     // 自动装箱`,tags:["基础","类型系统"]},{id:"3",title:"String、StringBuilder和StringBuffer的区别",content:"比较这三个字符串相关类的特点、使用场景和性能差异。",category:"basics",difficulty:"medium",answer:"String是不可变的，每次修改都会创建新对象。StringBuilder是可变的，非线程安全，性能高。StringBuffer是可变的，线程安全（方法都加了synchronized），性能略低于StringBuilder。",codeExample:`// String - 不可变
String s = "hello";
s = s + " world"; // 创建新对象

// StringBuilder - 可变，非线程安全
StringBuilder sb = new StringBuilder("hello");
sb.append(" world"); // 原地修改

// StringBuffer - 可变，线程安全
StringBuffer sbuf = new StringBuffer("hello");
sbuf.append(" world");`,tags:["字符串","性能"]},{id:"4",title:"Java中的异常体系是怎样的？",content:"请描述Java异常的层次结构，以及Error、Exception、RuntimeException的区别。",category:"basics",difficulty:"medium",answer:"Java异常体系的根类是Throwable，分为Error和Exception。Error表示系统级错误，通常无法恢复。Exception分为受检异常（必须处理）和非受检异常（RuntimeException及其子类）。RuntimeException表示编程错误，如空指针、数组越界等。",codeExample:`// 受检异常 - 需要catch或throws
public void readFile() throws IOException {
    FileInputStream fis = new FileInputStream("file.txt");
}

// 非受检异常 - 可以不处理
public void divide(int a, int b) {
    if (b == 0) {
        throw new ArithmeticException("除数不能为0");
    }
}`,tags:["异常处理","核心概念"]},{id:"5",title:"什么是Java的反射机制？",content:"解释Java反射的概念、用途、优缺点以及基本使用方法。",category:"advanced",difficulty:"hard",answer:"反射允许程序在运行时检查类、接口、方法和字段的信息，并且可以在运行时创建对象、调用方法、访问字段。它是框架开发的基础，但会降低性能并破坏封装性。",codeExample:`// 获取Class对象
Class<?> clazz = Class.forName("java.lang.String");

// 获取构造函数并创建对象
Constructor<?> constructor = clazz.getConstructor(String.class);
String str = (String) constructor.newInstance("hello");

// 获取方法并调用
Method method = clazz.getMethod("length");
int length = (int) method.invoke(str);`,tags:["高级特性","反射"]},{id:"6",title:"HashMap的实现原理是什么？",content:"详细描述Java 8中HashMap的底层数据结构、hash算法、扩容机制等。",category:"collection",difficulty:"hard",answer:"Java 8的HashMap底层使用数组+链表+红黑树实现。当链表长度超过8且数组容量大于64时，链表会转为红黑树。hash通过hash(key) ^ (hash >>> 16)计算。当size超过负载因子0.75*capacity时，数组会扩容为原来的2倍。",codeExample:`// HashMap的基本使用
HashMap<String, Integer> map = new HashMap<>();
map.put("a", 1);
map.put("b", 2);

// 遍历方式
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`,tags:["集合","数据结构"]},{id:"7",title:"ArrayList和LinkedList的区别",content:"对比这两个List实现类的底层结构、性能特点和适用场景。",category:"collection",difficulty:"medium",answer:"ArrayList基于动态数组实现，随机访问快，插入删除慢（需要移动元素）。LinkedList基于双向链表实现，插入删除快，随机访问慢（需要遍历）。ArrayList默认容量10，扩容为1.5倍。",codeExample:`// ArrayList
List<String> arrayList = new ArrayList<>();
arrayList.get(0);        // O(1) 快速随机访问
arrayList.add(0, "a");   // O(n) 需要移动元素

// LinkedList
List<String> linkedList = new LinkedList<>();
linkedList.get(0);       // O(n) 需要遍历
linkedList.add(0, "a");  // O(1) 只修改指针`,tags:["集合","List"]},{id:"7-1",title:"HashMap和Hashtable的区别",content:"对比HashMap和Hashtable在线程安全、性能、null支持等方面的区别。",category:"collection",difficulty:"medium",answer:"HashMap线程不安全，允许key和value为null，效率高。Hashtable线程安全（synchronized修饰），不允许key或value为null，效率低。推荐使用ConcurrentHashMap替代Hashtable。",codeExample:`// HashMap允许null
HashMap<String, Integer> map = new HashMap<>();
map.put(null, 1);      // 允许
map.put("key", null);  // 允许

// Hashtable不允许null
Hashtable<String, Integer> table = new Hashtable<>();
table.put(null, 1);    // NullPointerException
table.put("key", null); // NullPointerException

// 线程安全推荐使用ConcurrentHashMap
ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
concurrentMap.put("key", 1); // 高效的线程安全操作`,tags:["集合","Map"]},{id:"7-2",title:"ConcurrentHashMap的实现原理",content:"详细解释ConcurrentHashMap如何实现高效的并发访问，包括JDK 7的分段锁和JDK 8的CAS+synchronized。",category:"collection",difficulty:"hard",answer:"JDK 7使用Segment数组+链表，每个Segment类似一个Hashtable。JDK 8取消分段锁，采用数组+链表+红黑树，使用CAS操作和synchronized来保证并发安全。put时如果数组为空，用CAS初始化头节点；否则对头节点加锁插入。",codeExample:`// ConcurrentHashMap基本操作
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

// 原子操作
map.putIfAbsent("key", 1);  // 不存在才插入
map.computeIfAbsent("key", k -> 1);  // compute
map.merge("key", 1, Integer::sum);  // 合并

// 高并发场景
for (int i = 0; i < 100; i++) {
    new Thread(() -> {
        map.put(Thread.currentThread().getName(), 1);
    }).start();
}

// JDK 8后采用CAS+synchronized
// 1. 使用CAS初始化数组
// 2. 使用synchronized锁住头节点进行插入
// 3. 链表转红黑树阈值仍为8`,tags:["集合","并发","线程安全"]},{id:"7-3",title:"HashSet的实现原理",content:"解释HashSet如何保证元素唯一性，以及它与HashMap的关系。",category:"collection",difficulty:"medium",answer:"HashSet底层使用HashMap实现，元素作为Map的key，value使用一个Object对象（PRESENT）。添加元素时调用hashCode和equals判断唯一性。由于HashMap的key不能重复，所以HashSet元素唯一。",codeExample:`// HashSet内部实际使用HashMap
private transient HashMap<E, Object> map;
private static final Object PRESENT = new Object();

public boolean add(E e) {
    return map.put(e, PRESENT) == null;
}

// HashSet保证唯一性的过程
// 1. 计算hashCode确定bucket位置
// 2. 通过equals比较是否已存在
// 3. 已存在返回false，不存在则添加返回true

Set<String> set = new HashSet<>();
set.add("hello");
set.add("hello");  // 返回false，不会重复添加

// LinkedHashSet保持插入顺序
Set<String> linkedSet = new LinkedHashSet<>();
linkedSet.add("a");
linkedSet.add("b");
linkedSet.add("a");  // 保持a,b的插入顺序`,tags:["集合","Set"]},{id:"7-4",title:"TreeMap和HashMap的区别",content:"对比TreeMap和HashMap的底层数据结构、排序方式和使用场景。",category:"collection",difficulty:"medium",answer:"HashMap基于哈希表，无序；TreeMap基于红黑树，有序（自然顺序或自定义Comparator）。HashMap查找O(1)，TreeMap查找O(log n)。TreeMap支持范围查询和按序遍历。",codeExample:`// HashMap - 无序
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("banana", 2);
hashMap.put("apple", 1);
hashMap.put("cherry", 3);
// 遍历顺序不确定

// TreeMap - 有序
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("banana", 2);
treeMap.put("apple", 1);
treeMap.put("cherry", 3);
// 遍历顺序: apple, banana, cherry（字典序）

// 自定义排序
TreeMap<Integer, String> customMap = new TreeMap<>(Comparator.reverseOrder());
customMap.put(1, "one");
customMap.put(3, "three");
customMap.put(2, "two");
// 遍历顺序: 3, 2, 1（降序）

// TreeMap特有功能
treeMap.firstKey();  // 获取最小key
treeMap.lastKey();   // 获取最大key
treeMap.subMap("a", "c");  // 获取子Map`,tags:["集合","Map","红黑树"]},{id:"7-5",title:"ArrayList的扩容机制",content:"详细解释ArrayList的扩容原理，包括默认容量、扩容公式和性能影响。",category:"collection",difficulty:"hard",answer:"ArrayList默认容量为10。添加第一个元素时数组初始化为空数组，扩容时创建新数组并复制元素。JDK 6及之前：newCapacity = (oldCapacity * 3) / 2 + 1；JDK 7开始使用 oldCapacity + (oldCapacity >> 1)，即1.5倍。扩容操作耗时，应预估容量或使用ArrayList(int initialCapacity)预分配。",codeExample:`// ArrayList扩容源码（JDK 8）
private void grow(int minCapacity) {
    int oldCapacity = elementData.length;
    // 新容量 = 旧容量 + 旧容量/2（即1.5倍）
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // 复制数组
    elementData = Arrays.copyOf(elementData, newCapacity);
}

// 性能影响
List<Integer> list = new ArrayList<>();
// 每次add都可能触发扩容和数组复制
for (int i = 0; i < 100000; i++) {
    list.add(i);  // 多次扩容，效率低
}

// 推荐做法：预估容量
List<Integer> list2 = new ArrayList<>(100000);
for (int i = 0; i < 100000; i++) {
    list2.add(i);  // 一次分配，效率高
}

// trimToSize()回收多余空间
list2.trimToSize();`,tags:["集合","ArrayList","性能"]},{id:"7-6",title:"fail-fast与fail-safe的区别",content:"解释Java集合框架中的fail-fast和fail-safe机制，以及它们在并发环境下的表现。",category:"collection",difficulty:"hard",answer:"fail-fast在检测到并发修改时立即抛出ConcurrentModificationException，通过modCount实现。ArrayList、HashMap等非线程安全集合采用fail-fast。fail-safe复制集合快照进行遍历，不抛异常，如CopyOnWriteArrayList、ConcurrentHashMap。",codeExample:`// fail-fast示例
List<String> list = new ArrayList<>();
list.add("a");
for (String item : list) {  // ConcurrentModificationException
    list.remove(item);
}

// 正确遍历删除方式
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    if (iterator.next().equals("a")) {
        iterator.remove();  // 使用迭代器删除
    }
}

// fail-safe示例
List<String> safeList = new CopyOnWriteArrayList<>();
safeList.add("a");
for (String item : safeList) {  // 不会抛异常
    safeList.remove(item);       // 可以安全删除
}

// ConcurrentHashMap遍历
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("a", 1);
// 安全遍历，不会抛ConcurrentModificationException
map.forEach((k, v) -> System.out.println(k + ": " + v));`,tags:["集合","并发","异常处理"]},{id:"8",title:"什么是Java的多态？",content:"解释多态的概念、实现方式（重载和重写）以及向上转型和向下转型。",category:"oop",difficulty:"medium",answer:"多态是指同一操作作用于不同对象会产生不同的结果。实现方式包括方法重载（编译时多态）和方法重写（运行时多态）。向上转型是子类转父类，自动进行；向下转型是父类转子类，需要强制类型转换并可能抛出ClassCastException。",codeExample:`class Animal {
    void makeSound() { System.out.println("Animal sound"); }
}

class Dog extends Animal {
    @Override
    void makeSound() { System.out.println("Woof!"); }
}

// 多态示例
Animal animal = new Dog(); // 向上转型
animal.makeSound();        // 运行时调用Dog的方法`,tags:["面向对象","多态"]},{id:"9",title:"synchronized关键字的作用和原理",content:"解释synchronized的用法、作用范围以及底层实现原理。",category:"concurrent",difficulty:"hard",answer:"synchronized用于保证多线程环境下的原子性、可见性和有序性。可以修饰方法或代码块。底层通过对象头的Mark Word和monitor机制实现。JDK 6后引入了偏向锁、轻量级锁、重量级锁的锁升级机制来优化性能。",codeExample:`// 修饰实例方法
public synchronized void increment() {
    count++;
}

// 修饰代码块
public void decrement() {
    synchronized (this) {
        count--;
    }
}

// 修饰静态方法
public static synchronized void staticMethod() {
    // ...
}`,tags:["并发","线程安全"]},{id:"10",title:"Java内存模型（JMM）是什么？",content:"描述Java内存模型的概念、主内存和工作内存的关系，以及volatile、synchronized等关键字在JMM中的作用。",category:"jvm",difficulty:"hard",answer:"JMM定义了线程和主内存之间的抽象关系，规定了共享变量的访问规则。每个线程有自己的工作内存，共享变量存于主内存。需要保证原子性、可见性、有序性。volatile保证可见性和有序性，synchronized保证三者都有。",codeExample:`// volatile保证可见性和禁止指令重排序
private volatile boolean flag = false;

public void writer() {
    flag = true; // 写操作会立即刷新到主内存
}

public void reader() {
    if (flag) { // 读操作会从主内存重新读取
        // ...
    }
}`,tags:["JVM","并发"]},{id:"11",title:"Spring Boot自动配置原理是什么？",content:"详细解释Spring Boot的自动配置机制，包括@SpringBootApplication注解、@EnableAutoConfiguration、spring.factories文件等。",category:"advanced",difficulty:"hard",answer:"Spring Boot自动配置通过@EnableAutoConfiguration注解，利用SpringFactoriesLoader加载META-INF/spring.factories文件中定义的自动配置类，根据@Conditional条件注解判断是否生效，最终将Bean注册到容器中。",codeExample:`// @SpringBootApplication包含了三个注解
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// 自定义自动配置
@Configuration
@ConditionalOnClass(SomeClass.class)
@EnableConfigurationProperties(MyProperties.class)
public class MyAutoConfiguration {
    @Bean
    @ConditionalOnMissingBean
    public MyBean myBean() {
        return new MyBean();
    }
}`,tags:["Spring Boot","自动配置"]},{id:"12",title:"什么是微服务？微服务的优缺点是什么？",content:"解释微服务架构的概念、特点、与单体架构的区别，以及微服务的优缺点。",category:"advanced",difficulty:"medium",answer:"微服务是将应用拆分为多个小型、独立部署的服务，每个服务专注于单一业务功能，通过轻量级通信机制协作。优点：独立部署、技术栈灵活、易于扩展。缺点：运维复杂、分布式事务、服务调用开销。",codeExample:`// 简单的Spring Boot微服务
@SpringBootApplication
@RestController
public class UserService {
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        // 从数据库查询用户
        return new User(id, "张三");
    }
}

// 使用Feign调用其他微服务
@FeignClient(name = "order-service")
public interface OrderClient {
    @GetMapping("/orders/user/{userId}")
    List<Order> getOrdersByUserId(@PathVariable Long userId);
}`,tags:["微服务","架构设计"]},{id:"13",title:"Redis的数据结构有哪些？应用场景是什么？",content:"介绍Redis的主要数据结构及其应用场景，包括String、Hash、List、Set、Sorted Set等。",category:"advanced",difficulty:"medium",answer:"Redis支持String（缓存、计数器）、Hash（对象存储）、List（消息队列、栈）、Set（去重、交集）、Sorted Set（排行榜）、HyperLogLog（基数统计）、Bitmap（用户签到）、Geo（地理位置）等数据结构。",codeExample:`// String - 缓存用户信息
set user:1 "{"id":1,"name":"张三"}"

// Hash - 存储购物车
hset cart:1 product:1001 2
hset cart:1 product:1002 1

// List - 消息队列
lpush queue:order "order001"

// Sorted Set - 排行榜
zadd leaderboard 100 "user1"
zadd leaderboard 200 "user2"`,tags:["Redis","缓存"]},{id:"14",title:"什么是Spring Cloud？常用组件有哪些？",content:"介绍Spring Cloud的概念、作用以及常用的组件，如Eureka、Ribbon、Feign、Hystrix、Zuul/Gateway等。",category:"advanced",difficulty:"hard",answer:"Spring Cloud是一套微服务开发工具集，提供服务发现（Eureka/Nacos）、负载均衡（Ribbon）、服务调用（Feign）、熔断器（Hystrix/Sentinel）、网关（Zuul/Gateway）、配置中心（Config）、链路追踪（Sleuth/Zipkin）等功能。",codeExample:`// 服务注册与发现
@EnableDiscoveryClient
@SpringBootApplication
public class ServiceApplication { }

// Feign客户端
@FeignClient("user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

// 网关路由配置
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/users/**`,tags:["Spring Cloud","微服务"]},{id:"15",title:"MySQL索引原理及B+树为什么适合做索引？",content:"解释MySQL索引的底层数据结构，以及为什么InnoDB选择B+树而不是B树或红黑树。",category:"advanced",difficulty:"hard",answer:"InnoDB使用B+树作为索引结构。B+树的优点：1)节点可以存储更多key，树更矮，IO次数少；2)查询性能稳定；3)叶子节点有链表，范围查询高效；4)全表扫描更快。相比B树，B+树只有叶子节点存数据，非叶子节点只存索引，内存利用率更高。",codeExample:`-- 创建索引
CREATE INDEX idx_username ON users(username);

-- 联合索引
CREATE INDEX idx_name_age ON users(name, age);

-- 查看索引
SHOW INDEX FROM users;

-- 使用EXPLAIN分析查询
EXPLAIN SELECT * FROM users WHERE username = '张三';`,tags:["MySQL","索引"]},{id:"16",title:"JVM垃圾回收机制和常用垃圾回收器",content:"详细解释JVM垃圾回收的原理、常用算法（标记清除、复制、标记整理、分代收集）以及常用GC器。",category:"jvm",difficulty:"hard",answer:"JVM垃圾回收识别不再被引用的对象并回收内存。常用算法：标记清除（产生碎片）、复制（年轻代，无碎片但需额外空间）、标记整理（老年代）、分代收集（年轻代+老年代）。常用GC器：Serial、Parallel、CMS、G1、ZGC、Shenandoah。",codeExample:`// JVM参数配置
-XX:+UseG1GC           # 使用G1收集器
-XX:MaxGCPauseMillis=200 # 最大GC停顿时间
-XX:+HeapDumpOnOutOfMemoryError # OOM时dump堆
-Xms4g -Xmx4g         # 初始和最大堆大小

// 查看GC日志
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-Xloggc:gc.log`,tags:["JVM","GC"]},{id:"17",title:"什么是分布式事务？解决方案有哪些？",content:"解释分布式事务的概念、问题，以及常见的解决方案如2PC、3PC、TCC、Saga、本地消息表、Seata等。",category:"advanced",difficulty:"hard",answer:"分布式事务是跨多个数据库或服务的事务，需要保证ACID特性。解决方案：2PC（两阶段提交）、3PC（三阶段）、TCC（Try-Confirm-Cancel）、Saga（长期事务）、本地消息表、Seata（AT/TCC/Saga模式）等。",codeExample:`// Seata AT模式示例
@GlobalTransactional
public void createOrder(Order order) {
    // 1. 扣库存
    inventoryService.deduct(order.getProductId(), order.getCount());
    // 2. 创建订单
    orderService.create(order);
    // 3. 扣余额
    accountService.debit(order.getUserId(), order.getAmount());
}

// TCC模式
public interface TccService {
    @TwoPhaseBusinessAction(name = "tccAction", commitMethod = "commit", rollbackMethod = "rollback")
    void try(BusinessActionContext context);
    void commit(BusinessActionContext context);
    void rollback(BusinessActionContext context);
}`,tags:["分布式","事务"]},{id:"18",title:"Kafka的架构和原理是什么？",content:"介绍Kafka的核心概念（Producer、Consumer、Broker、Topic、Partition、Offset）和架构原理。",category:"advanced",difficulty:"hard",answer:"Kafka是分布式消息系统，采用发布-订阅模式。核心组件：Producer（生产者）、Consumer（消费者）、Broker（服务器）、Topic（主题）、Partition（分区）、Replica（副本）、Consumer Group（消费组）、Offset（偏移量）。特点：高吞吐、持久化、分布式。",codeExample:`// 生产者
Properties props = new Properties();
props.put("bootstrap.servers", "localhost:9092");
props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

Producer<String, String> producer = new KafkaProducer<>(props);
producer.send(new ProducerRecord<>("topic", "key", "value"));

// 消费者
@KafkaListener(topics = "topic", groupId = "group")
public void listen(String message) {
    System.out.println("收到消息: " + message);
}`,tags:["Kafka","消息队列"]},{id:"19",title:"如何保证接口的幂等性？",content:"解释幂等性的概念，以及常见的保证接口幂等性的方案（唯一索引、Token机制、悲观锁、乐观锁、分布式锁等）。",category:"advanced",difficulty:"medium",answer:"幂等性指同一请求多次执行产生的结果一致。解决方案：1)唯一索引（防止重复插入）；2)Token机制（防重复提交）；3)数据库乐观锁（version字段）；4)Redis分布式锁；5)状态机（状态只能单向变更）。",codeExample:`// 1. Token机制
@GetMapping("/token")
public String getToken() {
    String token = UUID.randomUUID().toString();
    redisTemplate.opsForValue().set(token, "1", 30, TimeUnit.SECONDS);
    return token;
}

@PostMapping("/order")
public String createOrder(@RequestHeader("token") String token, @RequestBody Order order) {
    Boolean exists = redisTemplate.delete(token);
    if (!exists) {
        return "请勿重复提交";
    }
    orderService.create(order);
    return "成功";
}

// 2. 乐观锁
@Update("UPDATE account SET balance = balance - #{amount}, version = version + 1 WHERE id = #{id} AND version = #{version}")
int deduct(@Param("id") Long id, @Param("amount") BigDecimal amount, @Param("version") Integer version);`,tags:["幂等性","高并发"]},{id:"20",title:"ThreadLocal的原理和内存泄漏问题",content:"解释ThreadLocal的工作原理、使用场景，以及为什么会产生内存泄漏，如何避免。",category:"concurrent",difficulty:"hard",answer:"ThreadLocal提供线程本地变量，每个线程都有独立副本。原理：Thread内部有ThreadLocalMap，key是ThreadLocal对象（弱引用），value是线程本地值。内存泄漏原因：key是弱引用会被GC回收，但value是强引用，线程不结束value不会回收，需手动调用remove()。",codeExample:`// ThreadLocal使用
public class UserContext {
    private static final ThreadLocal<User> USER_THREAD_LOCAL = new ThreadLocal<>();
    
    public static void setUser(User user) {
        USER_THREAD_LOCAL.set(user);
    }
    
    public static User getUser() {
        return USER_THREAD_LOCAL.get();
    }
    
    public static void clear() {
        USER_THREAD_LOCAL.remove(); // 防止内存泄漏！
    }
}

// 在过滤器中使用
public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {
    try {
        User user = getCurrentUser(request);
        UserContext.setUser(user);
        chain.doFilter(request, response);
    } finally {
        UserContext.clear(); // 必须清理！
    }
}`,tags:["并发","ThreadLocal"]},{id:"21",title:"什么是限流？常用的限流算法有哪些？",content:"解释限流的概念和作用，以及常见的限流算法（固定窗口、滑动窗口、漏桶、令牌桶）的实现原理。",category:"advanced",difficulty:"hard",answer:"限流是限制系统请求速率，防止过载。常用算法：1)固定窗口计数器（简单但有临界问题）；2)滑动窗口（更平滑）；3)漏桶（恒定速率处理）；4)令牌桶（允许突发流量）。常用实现：Guava RateLimiter、Redis + Lua脚本、Sentinel。",codeExample:`// Guava RateLimiter
RateLimiter limiter = RateLimiter.create(10.0); // 每秒10个令牌
if (limiter.tryAcquire()) {
    // 处理请求
}

// Redis + Lua 滑动窗口
local key = KEYS[1]
local window = tonumber(ARGV[1])
local limit = tonumber(ARGV[2])
local currentTime = tonumber(ARGV[3])

redis.call('ZREMRANGEBYSCORE', key, 0, currentTime - window)
local count = redis.call('ZCARD', key)
if count < limit then
    redis.call('ZADD', key, currentTime, currentTime)
    redis.call('EXPIRE', key, window + 1)
    return 1
else
    return 0
end`,tags:["限流","高并发"]},{id:"22",title:"Spring中的循环依赖问题及解决方案",content:"解释什么是循环依赖，Spring是如何解决循环依赖问题的（三级缓存）。",category:"advanced",difficulty:"hard",answer:"循环依赖是A依赖B，B又依赖A的情况。Spring通过三级缓存解决：1)一级缓存（singletonObjects）存完整Bean；2)二级缓存（earlySingletonObjects）存刚实例化的Bean；3)三级缓存（singletonFactories）存ObjectFactory。关键是在Bean完全初始化前就暴露出来让其他Bean注入。",codeExample:`// 循环依赖示例
@Service
public class A {
    @Autowired
    private B b;
}

@Service
public class B {
    @Autowired
    private A a;
}

// 三级缓存源码（DefaultSingletonBeanRegistry）
private final Map<String, Object> singletonObjects = new ConcurrentHashMap<>(256);
private final Map<String, Object> earlySingletonObjects = new HashMap<>(16);
private final Map<String, ObjectFactory<?>> singletonFactories = new HashMap<>(16);`,tags:["Spring","循环依赖"]},{id:"23",title:"如何进行SQL优化？",content:"介绍SQL优化的常用方法和技巧，包括索引优化、SQL语句优化、表结构优化等。",category:"advanced",difficulty:"medium",answer:"SQL优化方法：1)建立合适的索引（避免全表扫描）；2)避免SELECT *；3)使用JOIN代替子查询；4)避免在WHERE子句使用函数或表达式；5)使用LIMIT分页；6)EXPLAIN分析执行计划；7)读写分离；8)使用覆盖索引。",codeExample:`-- 不好的写法（索引失效）
SELECT * FROM users WHERE YEAR(create_time) = 2024;
SELECT * FROM users WHERE name LIKE '%张%';

-- 好的写法
SELECT * FROM users WHERE create_time >= '2024-01-01' AND create_time < '2025-01-01';
SELECT * FROM users WHERE name LIKE '张%';

-- 使用覆盖索引
CREATE INDEX idx_name_age ON users(name, age);
SELECT name, age FROM users WHERE name = '张三'; -- 不需要回表

-- EXPLAIN分析
EXPLAIN SELECT * FROM users WHERE id = 1;`,tags:["SQL优化","MySQL"]},{id:"24",title:"什么是ZooKeeper？有哪些应用场景？",content:"介绍ZooKeeper的概念、特点、数据结构，以及常见的应用场景（分布式锁、配置中心、服务发现、Leader选举）。",category:"advanced",difficulty:"medium",answer:"ZooKeeper是分布式协调服务，提供类似文件系统的树形数据结构。特点：有序节点、临时节点、Watcher通知、数据一致性。应用场景：分布式锁、配置中心、服务注册发现、Leader选举、分布式队列。",codeExample:`// Curator实现分布式锁
InterProcessMutex lock = new InterProcessMutex(client, "/locks/order");
try {
    if (lock.acquire(10, TimeUnit.SECONDS)) {
        // 执行业务
    }
} finally {
    lock.release();
}

// 监听节点变化
client.getData().usingWatcher((CuratorWatcher) event -> {
    System.out.println("节点变化: " + event.getType());
}).forPath("/config");`,tags:["ZooKeeper","分布式协调"]},{id:"25",title:"什么是CAP理论？BASE理论？",content:"解释CAP理论的三个要素（一致性、可用性、分区容错性），以及BASE理论（Basically Available、Soft state、Eventually consistent）。",category:"advanced",difficulty:"medium",answer:"CAP理论：分布式系统中一致性（C）、可用性（A）、分区容错性（P）三者不可兼得，只能选两个。CP系统（HBase、MongoDB）优先保证一致性，AP系统（Cassandra、Eureka）优先保证可用性。BASE理论：基本可用、软状态、最终一致，是对CAP的折中。",codeExample:`// Redis保证最终一致性（BASE）
// 写入时先缓存，异步同步到数据库
@CachePut(value = "user", key = "#user.id")
public User update(User user) {
    userDao.update(user);
    // 异步消息通知其他节点
    messageQueue.send("user:update", user.getId());
    return user;
}

// 读取时先从缓存读
@Cacheable(value = "user", key = "#id")
public User getById(Long id) {
    return userDao.findById(id);
}`,tags:["CAP","分布式理论"]},{id:"26",title:"什么是分库分表？如何实现？",content:"解释分库分表的原因、策略（水平分表、垂直分表、水平分库、垂直分库），以及常用中间件（ShardingSphere、MyCat）。",category:"advanced",difficulty:"hard",answer:"分库分表解决单库单表数据量过大的问题。策略：1)垂直分表（按列拆分）；2)水平分表（按行拆分，如哈希、范围分表）；3)垂直分库（按业务拆分库）；4)水平分库（数据分散到多个库）。常用中间件：ShardingSphere-JDBC/Proxy、MyCat。",codeExample:`// ShardingSphere配置
spring:
  shardingsphere:
    datasource:
      names: ds0,ds1
      ds0:
        jdbc-url: jdbc:mysql://localhost:3306/db0
        username: root
      ds1:
        jdbc-url: jdbc:mysql://localhost:3306/db1
        username: root
    sharding:
      tables:
        t_order:
          actual-data-nodes: ds\${0..1}.t_order_\${0..1}
          database-strategy:
            inline:
              sharding-column: user_id
              algorithm-expression: ds\${user_id % 2}
          table-strategy:
            inline:
              sharding-column: order_id
              algorithm-expression: t_order_\${order_id % 2}`,tags:["分库分表","数据库"]},{id:"27",title:"什么是MySQL的事务隔离级别？",content:"介绍SQL标准的四个事务隔离级别（读未提交、读已提交、可重复读、串行化）以及InnoDB的默认隔离级别。",category:"advanced",difficulty:"medium",answer:"四个隔离级别：1)READ UNCOMMITTED（读未提交）；2)READ COMMITTED（读已提交，Oracle默认）；3)REPEATABLE READ（可重复读，MySQL默认）；4)SERIALIZABLE（串行化）。InnoDB默认REPEATABLE READ，通过MVCC和Next-Key Lock解决幻读问题。",codeExample:`-- 设置隔离级别
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- 查询当前隔离级别
SELECT @@tx_isolation;

-- MySQL 8.0+
SELECT @@transaction_isolation;

-- 开启事务
BEGIN;
-- 执行业务操作
UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;
-- 提交事务
COMMIT;`,tags:["MySQL","事务"]},{id:"28",title:"什么是Nginx？如何配置负载均衡？",content:"介绍Nginx的功能和特点，以及如何配置Nginx实现反向代理和负载均衡。",category:"advanced",difficulty:"medium",answer:"Nginx是高性能Web服务器和反向代理服务器。支持反向代理、负载均衡、静态资源服务、SSL/TLS、限流等。负载均衡策略：轮询（默认）、加权轮询、IP hash、least_conn、url_hash等。",codeExample:`# Nginx配置
http {
    upstream backend {
        server 192.168.1.10:8080 weight=3;
        server 192.168.1.11:8080 weight=2;
        server 192.168.1.12:8080 backup;
    }

    server {
        listen 80;
        server_name example.com;

        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
    }
}`,tags:["Nginx","负载均衡"]},{id:"29",title:"什么是Docker？Dockerfile常用指令？",content:"介绍Docker的概念、核心组件（镜像、容器、仓库），以及Dockerfile常用指令。",category:"advanced",difficulty:"easy",answer:"Docker是容器化平台，将应用和依赖打包成容器。核心概念：Image（镜像）、Container（容器）、Repository（仓库）。Dockerfile常用指令：FROM、RUN、COPY、ADD、WORKDIR、EXPOSE、CMD、ENTRYPOINT、ENV、VOLUME等。",codeExample:`# Dockerfile示例
FROM openjdk:11-jre-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENV JAVA_OPTS="-Xmx512m"
ENTRYPOINT ["java", "-jar", "app.jar"]

# 构建镜像
docker build -t myapp:1.0 .

# 运行容器
docker run -d -p 8080:8080 --name myapp myapp:1.0

# Docker Compose
version: '3'
services:
  app:
    build: .
    ports:
      - "8080:8080"
  redis:
    image: redis:6
    ports:
      - "6379:6379"`,tags:["Docker","容器化"]},{id:"30",title:"什么是Netty？核心组件有哪些？",content:"介绍Netty的概念、特点、应用场景，以及核心组件（EventLoop、Channel、ChannelPipeline、ChannelHandler等）。",category:"advanced",difficulty:"hard",answer:"Netty是高性能异步事件驱动的网络框架。核心组件：1)EventLoop（事件循环，处理IO事件）；2)Channel（网络操作抽象）；3)ChannelPipeline（责任链模式）；4)ChannelHandler（业务逻辑处理）；5)ByteBuf（字节容器）。应用场景：RPC框架、游戏服务器、消息推送等。",codeExample:`// Netty服务器
ServerBootstrap bootstrap = new ServerBootstrap();
bootstrap.group(new NioEventLoopGroup(), new NioEventLoopGroup())
    .channel(NioServerSocketChannel.class)
    .childHandler(new ChannelInitializer<SocketChannel>() {
        @Override
        protected void initChannel(SocketChannel ch) {
            ch.pipeline()
                .addLast(new StringDecoder())
                .addLast(new StringEncoder())
                .addLast(new SimpleChannelInboundHandler<String>() {
                    @Override
                    protected void channelRead0(ChannelHandlerContext ctx, String msg) {
                        System.out.println("收到: " + msg);
                        ctx.writeAndFlush("收到你的消息");
                    }
                });
        }
    });
bootstrap.bind(8080).sync();`,tags:["Netty","网络编程"]},{id:"31",title:"什么是MyBatis？#{}和${}的区别是什么？",content:"解释MyBatis的概念、特点，以及#{}和${}的区别、使用场景。",category:"advanced",difficulty:"medium",answer:"MyBatis是持久层框架，避免JDBC代码。#{}是预编译处理，使用PreparedStatement，能防止SQL注入。${}是字符串替换，直接替换，有SQL注入风险。#{id} → ?，${table} → 直接替换。",codeExample:`<!-- #{}预编译，安全 -->
<select id="getUser" resultType="User">
    SELECT * FROM user WHERE id = #{id}
</select>

<!-- \${}字符串替换，需注意SQL注入 -->
<select id="getUsers" resultType="User">
    SELECT * FROM \${tableName}
</select>

<!-- 模糊查询 - 正确做法 -->
<select id="searchUser" resultType="User">
    SELECT * FROM user WHERE name LIKE CONCAT('%', #{keyword}, '%')
</select>`,tags:["MyBatis","ORM"]},{id:"32",title:"什么是RESTful API？设计原则是什么？",content:"解释RESTful API的概念、设计原则（资源、HTTP方法、状态码、URI设计等）。",category:"advanced",difficulty:"medium",answer:"RESTful是基于REST架构风格的API设计。核心原则：1)资源用URI表示；2)用HTTP动词操作（GET查、POST增、PUT改、DELETE删）；3)无状态；4)用HTTP状态码；5)HATEOAS。",codeExample:`// RESTful API示例
GET    /users              # 获取用户列表
GET    /users/1            # 获取id为1的用户
POST   /users              # 创建新用户
PUT    /users/1            # 更新用户
DELETE /users/1            # 删除用户
GET    /users/1/orders     # 获取用户的订单列表
POST   /users/1/orders     # 为用户创建订单

// HTTP状态码
200 OK                    // 成功
201 Created               // 创建成功
400 Bad Request           // 请求参数错误
401 Unauthorized          // 未授权
404 Not Found             // 资源不存在
500 Internal Server Error // 服务器错误`,tags:["RESTful","API设计"]},{id:"33",title:"什么是Redis持久化？RDB和AOF的区别？",content:"解释Redis持久化的概念、RDB和AOF两种方式的原理、优缺点对比。",category:"advanced",difficulty:"hard",answer:"Redis持久化将内存数据保存到磁盘。RDB是快照式，save/bgsave生成.rdb文件。AOF记录每次写命令，追加到.aof文件，支持重写。RDB快、文件小但可能丢数据。AOF更可靠、文件大。混合模式是推荐方案。",codeExample:`# RDB配置
save 900 1          # 900秒内1个修改
save 300 10         # 300秒内10个修改
rdbfilename dump.rdb

# AOF配置
appendonly yes
appendfsync everysec  # 每秒同步
no-appendfsync-on-rewrite yes

# 混合持久化（Redis 4.0+）
aof-use-rdb-preamble yes

# 命令
SAVE       # 同步保存
BGSAVE     # 后台保存
BGREWRITEAOF # AOF重写`,tags:["Redis","持久化"]},{id:"34",title:"什么是缓存雪崩、缓存穿透、缓存击穿？如何解决？",content:"解释这三个缓存问题的概念、原因及解决方案。",category:"advanced",difficulty:"hard",answer:"缓存雪崩：大量key同时过期。解决：过期时间加随机值。缓存穿透：查不存在的数据。解决：布隆过滤器。缓存击穿：热点key过期。解决：互斥锁、永不过期。",codeExample:`// 互斥锁解决缓存击穿
public User getUser(Long id) {
    String key = "user:" + id;
    User user = redis.get(key);
    if (user != null) {
        return user;
    }
    String lockKey = "lock:user:" + id;
    if (redis.set(lockKey, "1", "NX", "EX", 10)) {
        try {
            user = db.getUser(id);
            if (user != null) {
                redis.set(key, user, 3600);
            }
            return user;
        } finally {
            redis.del(lockKey);
        }
    } else {
        Thread.sleep(100);
        return getUser(id);
    }
}

// 布隆过滤器
BloomFilter<Long> filter = BloomFilter.create(Funnels.longFunnel(), 1000000, 0.01);
filter.put(userId);
if (filter.mightContain(userId)) {
    // 查询缓存或数据库
}`,tags:["缓存","Redis"]},{id:"35",title:"什么是JVM类加载机制？双亲委派模型？",content:"解释JVM类加载过程、类加载器、双亲委派模型的原理和优势。",category:"jvm",difficulty:"hard",answer:"类加载过程：加载、验证、准备、解析、初始化。类加载器：Bootstrap、Extension、Application、Custom。双亲委派：先父后子加载。优势：避免重复加载、保证核心类安全。",codeExample:`// 类加载器层次
Bootstrap ClassLoader   // 加载JDK核心类
     ↑
Extension ClassLoader  // 加载扩展类
     ↑
Application ClassLoader // 加载应用类
     ↑
Custom ClassLoader

// 打破双亲委派（Tomcat等）
public class MyClassLoader extends ClassLoader {
    @Override
    protected Class<?> loadClass(String name, boolean resolve) throws ClassNotFoundException {
        // 自定义加载逻辑
    }
}

// 查看类加载器
ClassLoader loader = MyClass.class.getClassLoader();
System.out.println(loader);`,tags:["JVM","类加载"]},{id:"36",title:"什么是Sentinel？有什么功能？",content:"介绍Sentinel的概念、主要功能（限流、熔断、降级）和使用场景。",category:"advanced",difficulty:"medium",answer:"Sentinel是阿里的流量控制组件。功能：1)流量控制（QPS限流、并发线程数控制）；2)熔断降级（慢调用、异常比例、异常数）；3)系统保护。比Hystrix更强大。",codeExample:`// 定义资源
try (Entry entry = SphU.entry("resourceName")) {
    // 业务逻辑
} catch (BlockException ex) {
    // 被限流/熔断
}

// 注解方式
@SentinelResource(value = "hello", blockHandler = "handleBlock")
public String hello() {
    return "Hello";
}

public String handleBlock(BlockException ex) {
    return "被限流了";
}

// 配置规则
FlowRule rule = new FlowRule();
rule.setResource("resource");
rule.setGrade(RuleConstant.FLOW_GRADE_QPS);
rule.setCount(10); // 每秒10次
FlowRuleManager.loadRules(Collections.singletonList(rule));`,tags:["Sentinel","限流熔断"]},{id:"37",title:"什么是设计模式？单例模式有几种写法？",content:"介绍设计模式概念，单例模式的多种实现方式（饿汉、懒汉、双重检查、枚举、静态内部类）。",category:"oop",difficulty:"medium",answer:"设计模式是问题解决方案的总结。单例模式：1)饿汉式（类加载初始化）；2)懒汉式（需要时创建，线程不安全）；3)双重检查（volatile + synchronized）；4)静态内部类（推荐）；5)枚举（最佳）。",codeExample:`// 1. 饿汉式
public class Singleton1 {
    private static final Singleton1 INSTANCE = new Singleton1();
    private Singleton1() {}
    public static Singleton1 getInstance() { return INSTANCE; }
}

// 2. 双重检查
public class Singleton2 {
    private static volatile Singleton2 INSTANCE;
    private Singleton2() {}
    public static Singleton2 getInstance() {
        if (INSTANCE == null) {
            synchronized (Singleton2.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Singleton2();
                }
            }
        }
        return INSTANCE;
    }
}

// 3. 静态内部类（推荐）
public class Singleton3 {
    private Singleton3() {}
    private static class Holder {
        private static final Singleton3 INSTANCE = new Singleton3();
    }
    public static Singleton3 getInstance() {
        return Holder.INSTANCE;
    }
}

// 4. 枚举（最佳）
public enum Singleton4 {
    INSTANCE;
}`,tags:["设计模式","单例"]},{id:"38",title:"什么是Nacos？服务注册与配置中心？",content:"介绍Nacos的功能、特点，以及如何实现服务注册发现和配置中心。",category:"advanced",difficulty:"medium",answer:"Nacos是阿里开源的注册中心和配置中心。功能：1)服务发现（替代Eureka）；2)配置中心（替代Config）；3)DNS服务。支持AP和CP模式。",codeExample:`// 服务注册
@SpringBootApplication
@EnableDiscoveryClient
public class App { }

// 配置文件
spring:
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
      config:
        server-addr: localhost:8848
        file-extension: yaml

// 动态配置
@RefreshScope
@RestController
public class ConfigController {
    @Value("\${app.name}")
    private String appName;
}

// Nacos API
NamingService naming = NamingFactory.createNamingService("localhost:8848");
naming.registerInstance("serviceName", "127.0.0.1", 8080);
Instance instance = naming.selectOneHealthyInstance("serviceName");`,tags:["Nacos","微服务"]},{id:"39",title:"什么是MQ？RabbitMQ的架构？",content:"介绍消息队列的概念、作用，RabbitMQ的核心组件和工作流程。",category:"advanced",difficulty:"medium",answer:"MQ是消息中间件，解耦、异步、削峰。RabbitMQ架构：Producer → Exchange（交换机）→ Queue（队列）→ Consumer。交换机类型：direct、topic、fanout、headers。",codeExample:`// 简单生产者
ConnectionFactory factory = new ConnectionFactory();
factory.setHost("localhost");
Connection connection = factory.newConnection();
Channel channel = connection.createChannel();
channel.queueDeclare("queue", false, false, false, null);
channel.basicPublish("", "queue", null, "Hello".getBytes());

// 简单消费者
channel.basicConsume("queue", true, (tag, delivery) -> {
    String msg = new String(delivery.getBody());
    System.out.println("收到: " + msg);
}, tag -> {});

// Spring Boot
@RabbitListener(queues = "queue")
public void listen(String msg) {
    System.out.println("收到: " + msg);
}

@RabbitListener(bindings = @QueueBinding(
    value = @Queue("queue"),
    exchange = @Exchange(value = "exchange", type = "topic"),
    key = "routing.key"
))`,tags:["RabbitMQ","消息队列"]},{id:"40",title:"什么是GitFlow工作流？常用Git命令？",content:"介绍GitFlow分支管理策略，以及常用Git命令。",category:"basics",difficulty:"easy",answer:"GitFlow是分支管理模型：master（生产）、develop（开发）、feature（功能）、release（发布）、hotfix（热修复）。常用命令：clone、pull、push、add、commit、merge、rebase、stash。",codeExample:`# GitFlow流程
git checkout -b feature/new-feature develop  # 新建功能分支
# 开发完成
git checkout develop
git merge --no-ff feature/new-feature
# 准备发布
git checkout -b release/1.0 develop
# 修复bug后合并到master和develop
git checkout master
git merge --no-ff release/1.0
git tag -a 1.0
git checkout develop
git merge --no-ff release/1.0
# 热修复
git checkout -b hotfix/bug master
# 修复后合并到master和develop

# 常用命令
git clone repo
git pull origin main
git add .
git commit -m "message"
git push origin main
git branch new-branch
git checkout new-branch
git merge other-branch
git rebase main
git stash`,tags:["Git","版本控制"]},{id:"dp-1",title:"单例模式的实现方式有哪些？",content:"列举单例模式的几种常见实现方式，包括饿汉式、懒汉式、双重检查锁、静态内部类、枚举等，并分析各自的优缺点。",category:"design-pattern",difficulty:"easy",answer:"单例模式确保类只有一个实例。常见实现：1)饿汉式（线程安全，类加载时初始化）；2)懒汉式（延迟加载，需同步）；3)双重检查锁（延迟加载+高性能）；4)静态内部类（延迟加载+线程安全）；5)枚举（线程安全+防止反射破坏）。推荐使用枚举或静态内部类。",codeExample:`// 1. 饿汉式
public class Singleton1 {
    private static final Singleton1 INSTANCE = new Singleton1();
    private Singleton1() {}
    public static Singleton1 getInstance() { return INSTANCE; }
}

// 2. 懒汉式（线程安全）
public class Singleton2 {
    private static Singleton2 instance;
    private Singleton2() {}
    public static synchronized Singleton2 getInstance() {
        if (instance == null) {
            instance = new Singleton2();
        }
        return instance;
    }
}

// 3. 双重检查锁（推荐）
public class Singleton3 {
    private volatile static Singleton3 instance;
    private Singleton3() {}
    public static Singleton3 getInstance() {
        if (instance == null) {
            synchronized (Singleton3.class) {
                if (instance == null) {
                    instance = new Singleton3();
                }
            }
        }
        return instance;
    }
}

// 4. 静态内部类（推荐）
public class Singleton4 {
    private Singleton4() {}
    private static class Holder {
        private static final Singleton4 INSTANCE = new Singleton4();
    }
    public static Singleton4 getInstance() {
        return Holder.INSTANCE;
    }
}

// 5. 枚举（最佳实践）
public enum Singleton5 {
    INSTANCE;
    public void doSomething() { /* ... */ }
}`,tags:["创建型","单例模式"]},{id:"dp-2",title:"工厂模式的三种形式",content:"解释简单工厂、工厂方法和抽象工厂三种模式的区别、适用场景和优缺点。",category:"design-pattern",difficulty:"medium",answer:"工厂模式用于封装对象的创建过程。1)简单工厂：一个工厂类创建所有对象，违反开闭原则；2)工厂方法：每个产品有对应的工厂，符合开闭原则；3)抽象工厂：创建一组相关对象，解决产品族问题。Spring的BeanFactory就是抽象工厂模式的应用。",codeExample:`// 1. 简单工厂
public class CarFactory {
    public static Car createCar(String type) {
        switch (type) {
            case "Benz": return new Benz();
            case "BMW": return new BMW();
            default: return null;
        }
    }
}

// 2. 工厂方法
public interface CarFactory {
    Car createCar();
}
public class BenzFactory implements CarFactory {
    public Car createCar() { return new Benz(); }
}
public class BMWFactory implements CarFactory {
    public Car createCar() { return new BMW(); }
}

// 3. 抽象工厂 - 创建产品族
public interface AbstractFactory {
    Car createCar();
    Engine createEngine();
}
public class LuxuryFactory implements AbstractFactory {
    public Car createCar() { return new LuxuryCar(); }
    public Engine createEngine() { return new V8Engine(); }
}
public class EconomyFactory implements AbstractFactory {
    public Car createCar() { return new EconomyCar(); }
    public Engine createEngine() { return new I4Engine(); }
}`,tags:["创建型","工厂模式"]},{id:"dp-3",title:"建造者模式的应用场景",content:"解释建造者模式的设计思想，分析其适用场景，并举例说明在Java中的应用。",category:"design-pattern",difficulty:"medium",answer:"建造者模式将复杂对象的构建与表示分离，使同样的构建过程可以创建不同的表示。适用场景：1)对象有多个可选属性；2)对象创建过程复杂；3)需要生成不同表示的对象。Java中的StringBuilder、Lombok的@Builder注解都是建造者模式的应用。",codeExample:`// 建造者模式实现
public class User {
    private final String name;
    private final int age;
    private final String email;
    private final String phone;
    
    private User(Builder builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
        this.phone = builder.phone;
    }
    
    public static class Builder {
        private String name;
        private int age;
        private String email;
        private String phone;
        
        public Builder name(String name) { this.name = name; return this; }
        public Builder age(int age) { this.age = age; return this; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder phone(String phone) { this.phone = phone; return this; }
        
        public User build() {
            if (name == null) throw new IllegalStateException("name is required");
            return new User(this);
        }
    }
}

// 使用
User user = new User.Builder()
    .name("张三")
    .age(28)
    .email("zhangsan@example.com")
    .phone("13800138000")
    .build();

// Lombok简化
@Builder
public class User {
    private String name;
    private int age;
    private String email;
}

// Java StringBuilder也是建造者模式
StringBuilder sb = new StringBuilder()
    .append("Hello")
    .append(" ")
    .append("World")
    .reverse();`,tags:["创建型","建造者模式"]},{id:"dp-4",title:"原型模式的深拷贝和浅拷贝",content:"解释原型模式的概念，区分浅拷贝和深拷贝，并说明如何实现深拷贝。",category:"design-pattern",difficulty:"medium",answer:"原型模式通过复制已有对象创建新对象，避免重复初始化。浅拷贝只复制基本类型和引用，不复制引用指向的对象。深拷贝会递归复制所有对象。实现方式：1)实现Cloneable接口并重写clone()方法；2)使用序列化/反序列化；3)手动递归复制。",codeExample:`// 浅拷贝
public class Person implements Cloneable {
    private String name;
    private Address address; // 引用类型
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // 浅拷贝，address引用相同
    }
}

// 深拷贝 - 方式1：重写clone()
public class Person implements Cloneable {
    private String name;
    private Address address;
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        Person clone = (Person) super.clone();
        clone.address = (Address) address.clone(); // 递归拷贝
        return clone;
    }
}

// 深拷贝 - 方式2：序列化
public class Person implements Serializable {
    private String name;
    private Address address;
    
    public Person deepCopy() {
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ObjectOutputStream oos = new ObjectOutputStream(baos);
            oos.writeObject(this);
            
            ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
            ObjectInputStream ois = new ObjectInputStream(bais);
            return (Person) ois.readObject();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}`,tags:["创建型","原型模式"]},{id:"dp-5",title:"适配器模式的两种形式",content:"解释类适配器和对象适配器的区别，分析各自的优缺点和适用场景。",category:"design-pattern",difficulty:"easy",answer:"适配器模式将一个类的接口转换成客户希望的另一个接口。类适配器使用继承，对象适配器使用组合。类适配器：优点是可以重写适配者的方法，缺点是Java只能单继承限制了灵活性。对象适配器：优点是更灵活、符合组合优于继承原则，缺点是不能重写适配者的方法。推荐使用对象适配器。",codeExample:`// 目标接口
public interface Target {
    void request();
}

// 适配者
public class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee specific request");
    }
}

// 1. 类适配器 - 使用继承
public class ClassAdapter extends Adaptee implements Target {
    @Override
    public void request() {
        specificRequest();
    }
}

// 2. 对象适配器 - 使用组合（推荐）
public class ObjectAdapter implements Target {
    private Adaptee adaptee;
    
    public ObjectAdapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    
    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

// 使用
Target target1 = new ClassAdapter();
target1.request();

Target target2 = new ObjectAdapter(new Adaptee());
target2.request();

// Java中的实际应用
// Arrays.asList() 返回的List不支持add/remove
// Collections.synchronizedList() 也是适配器模式`,tags:["结构型","适配器模式"]},{id:"dp-6",title:"装饰器模式的应用",content:"解释装饰器模式的设计思想，举例说明其在Java中的实际应用（如IO流）。",category:"design-pattern",difficulty:"medium",answer:"装饰器模式动态地给对象添加额外功能，比继承更灵活。特点：1)装饰器和被装饰者实现相同接口；2)装饰器持有被装饰者引用；3)可以嵌套多个装饰器。Java IO流是典型应用：InputStream作为抽象组件，FileInputStream是具体组件，BufferedInputStream、DataInputStream是装饰器。",codeExample:`// 抽象组件
public interface Coffee {
    double cost();
    String description();
}

// 具体组件
public class SimpleCoffee implements Coffee {
    @Override
    public double cost() { return 5.0; }
    @Override
    public String description() { return "纯咖啡"; }
}

// 抽象装饰器
public abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;
    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }
}

// 具体装饰器
public class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) { super(coffee); }
    @Override
    public double cost() { return decoratedCoffee.cost() + 2.0; }
    @Override
    public String description() { return decoratedCoffee.description() + " + 牛奶"; }
}

public class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) { super(coffee); }
    @Override
    public double cost() { return decoratedCoffee.cost() + 1.0; }
    @Override
    public String description() { return decoratedCoffee.description() + " + 糖"; }
}

// 使用 - 嵌套装饰
Coffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
System.out.println(coffee.description()); // 纯咖啡 + 牛奶 + 糖
System.out.println(coffee.cost()); // 8.0

// Java IO中的装饰器模式
InputStream is = new FileInputStream("file.txt");
is = new BufferedInputStream(is);      // 添加缓冲
is = new DataInputStream(is);          // 添加数据读取功能`,tags:["结构型","装饰器模式"]},{id:"dp-7",title:"代理模式的三种形式",content:"解释静态代理、动态代理（JDK）和CGLIB代理的区别和适用场景。",category:"design-pattern",difficulty:"hard",answer:"代理模式为其他对象提供代理以控制访问。1)静态代理：手动编写代理类，不灵活；2)JDK动态代理：基于接口，运行时生成代理类，性能较好；3)CGLIB代理：基于继承，无需接口，性能略低。Spring AOP默认使用JDK动态代理，没有接口时使用CGLIB。",codeExample:`// 1. 静态代理
public interface UserService {
    void add();
}
public class UserServiceImpl implements UserService {
    public void add() { System.out.println("添加用户"); }
}
public class UserServiceProxy implements UserService {
    private UserService target;
    public UserServiceProxy(UserService target) { this.target = target; }
    public void add() {
        System.out.println("开始事务");
        target.add();
        System.out.println("提交事务");
    }
}

// 2. JDK动态代理
public class JDKProxy implements InvocationHandler {
    private Object target;
    public JDKProxy(Object target) { this.target = target; }
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("前置增强");
        Object result = method.invoke(target, args);
        System.out.println("后置增强");
        return result;
    }
}
// 使用
UserService proxy = (UserService) Proxy.newProxyInstance(
    UserService.class.getClassLoader(),
    new Class[]{UserService.class},
    new JDKProxy(new UserServiceImpl())
);

// 3. CGLIB代理
public class CGLIBProxy implements MethodInterceptor {
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        System.out.println("前置增强");
        Object result = proxy.invokeSuper(obj, args);
        System.out.println("后置增强");
        return result;
    }
}
// 使用
Enhancer enhancer = new Enhancer();
enhancer.setSuperclass(UserServiceImpl.class);
enhancer.setCallback(new CGLIBProxy());
UserService proxy = (UserService) enhancer.create();`,tags:["结构型","代理模式","AOP"]},{id:"dp-8",title:"观察者模式的实现",content:"解释观察者模式的设计思想，说明其在Java中的应用（如JavaFX、Spring事件机制）。",category:"design-pattern",difficulty:"medium",answer:"观察者模式定义对象间一对多依赖，当主题状态改变时所有观察者自动收到通知。Java内置支持：Observable类和Observer接口（已过时）。现代应用：JavaFX的Property/Listener机制、Spring的ApplicationEventPublisher、Guava的EventBus。",codeExample:`// 自定义观察者模式
public interface Subject {
    void registerObserver(Observer observer);
    void removeObserver(Observer observer);
    void notifyObservers();
}

public interface Observer {
    void update(String message);
}

public class ConcreteSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String message;
    
    @Override
    public void registerObserver(Observer observer) {
        observers.add(observer);
    }
    
    @Override
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    }
    
    @Override
    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
    
    public void setMessage(String message) {
        this.message = message;
        notifyObservers();
    }
}

public class ConcreteObserver implements Observer {
    private String name;
    public ConcreteObserver(String name) { this.name = name; }
    @Override
    public void update(String message) {
        System.out.println(name + "收到消息: " + message);
    }
}

// 使用
Subject subject = new ConcreteSubject();
subject.registerObserver(new ConcreteObserver("张三"));
subject.registerObserver(new ConcreteObserver("李四"));
subject.setMessage("Hello World!");

// Spring事件机制
@Component
public class MyEventListener implements ApplicationListener<MyEvent> {
    @Override
    public void onApplicationEvent(MyEvent event) {
        System.out.println("收到事件: " + event.getMessage());
    }
}
// 发布事件
applicationEventPublisher.publishEvent(new MyEvent("hello"));`,tags:["行为型","观察者模式"]},{id:"dp-9",title:"策略模式的应用场景",content:"解释策略模式的设计思想，说明如何用策略模式消除大量的if-else语句。",category:"design-pattern",difficulty:"easy",answer:"策略模式定义一系列算法，封装每个算法，并使它们可以互换。策略模式让算法独立于使用它的客户。适用场景：1)有多种相似算法；2)算法需要动态切换；3)消除大量if-else分支。Java中的Comparator接口就是策略模式的应用。",codeExample:`// 策略接口
public interface PaymentStrategy {
    void pay(double amount);
}

// 具体策略
public class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    public CreditCardPayment(String cardNumber) { this.cardNumber = cardNumber; }
    @Override
    public void pay(double amount) {
        System.out.println("信用卡支付: " + amount + "元");
    }
}

public class WeChatPayment implements PaymentStrategy {
    private String openId;
    public WeChatPayment(String openId) { this.openId = openId; }
    @Override
    public void pay(double amount) {
        System.out.println("微信支付: " + amount + "元");
    }
}

public class AlipayPayment implements PaymentStrategy {
    private String account;
    public AlipayPayment(String account) { this.account = account; }
    @Override
    public void pay(double amount) {
        System.out.println("支付宝支付: " + amount + "元");
    }
}

// 上下文
public class ShoppingCart {
    private PaymentStrategy paymentStrategy;
    
    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }
    
    public void checkout(double amount) {
        paymentStrategy.pay(amount);
    }
}

// 使用
ShoppingCart cart = new ShoppingCart();
cart.setPaymentStrategy(new WeChatPayment("openid123"));
cart.checkout(100.0);

// 消除if-else对比
// 传统方式（不推荐）
if (type.equals("wechat")) { /* ... */ }
else if (type.equals("alipay")) { /* ... */ }
else if (type.equals("credit")) { /* ... */ }

// 策略模式（推荐）
Map<String, PaymentStrategy> strategies = new HashMap<>();
strategies.put("wechat", new WeChatPayment(openId));
strategies.put("alipay", new AlipayPayment(account));
strategies.get(type).pay(amount);`,tags:["行为型","策略模式"]},{id:"dp-10",title:"模板方法模式的实现",content:"解释模板方法模式的设计思想，说明其在Spring框架中的应用。",category:"design-pattern",difficulty:"medium",answer:"模板方法模式定义算法骨架，将某些步骤延迟到子类实现。父类控制算法流程，子类实现具体步骤。特点：1)父类定义算法框架；2)子类实现抽象方法；3)钩子方法可选覆盖。Spring的AbstractApplicationContext的refresh()方法就是模板方法模式的典型应用。",codeExample:`// 抽象类定义模板方法
public abstract class AbstractGame {
    // 模板方法 - 定义算法骨架
    public final void play() {
        initialize();
        startPlay();
        endPlay();
    }
    
    protected abstract void initialize();
    protected abstract void startPlay();
    protected abstract void endPlay();
    
    // 钩子方法 - 可选覆盖
    protected void pause() {
        // 默认实现为空
    }
}

// 具体类实现步骤
public class Cricket extends AbstractGame {
    @Override
    protected void initialize() {
        System.out.println("板球游戏初始化");
    }
    
    @Override
    protected void startPlay() {
        System.out.println("板球游戏开始");
    }
    
    @Override
    protected void endPlay() {
        System.out.println("板球游戏结束");
    }
}

public class Football extends AbstractGame {
    @Override
    protected void initialize() {
        System.out.println("足球游戏初始化");
    }
    
    @Override
    protected void startPlay() {
        System.out.println("足球游戏开始");
    }
    
    @Override
    protected void endPlay() {
        System.out.println("足球游戏结束");
    }
    
    @Override
    protected void pause() {
        System.out.println("足球暂停");
    }
}

// 使用
AbstractGame game = new Cricket();
game.play();

// Spring中的应用
// AbstractApplicationContext.refresh()方法定义了容器初始化的模板
// 子类实现抽象方法 customizeContext()、refreshBeanFactory()等`,tags:["行为型","模板方法模式"]},{id:"dp-11",title:"责任链模式的应用",content:"解释责任链模式的设计思想，说明其在Spring Security中的应用。",category:"design-pattern",difficulty:"medium",answer:"责任链模式将请求沿着链传递，直到有一个处理者处理它。每个处理者可以选择处理请求或传递给下一个。适用场景：1)多个对象可以处理同一请求；2)请求处理者不明确；3)动态组合处理者。Spring Security的FilterChain、Servlet的Filter链都是责任链模式的应用。",codeExample:`// 抽象处理者
public abstract class Handler {
    protected Handler next;
    
    public void setNext(Handler next) {
        this.next = next;
    }
    
    public abstract void handleRequest(String request);
}

// 具体处理者
public class AuthenticationHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        if (request.contains("auth")) {
            System.out.println("AuthenticationHandler处理请求");
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

public class AuthorizationHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        if (request.contains("authz")) {
            System.out.println("AuthorizationHandler处理请求");
        } else if (next != null) {
            next.handleRequest(request);
        }
    }
}

public class LoggingHandler extends Handler {
    @Override
    public void handleRequest(String request) {
        System.out.println("LoggingHandler记录日志");
        if (next != null) {
            next.handleRequest(request);
        }
    }
}

// 使用 - 构建责任链
Handler logger = new LoggingHandler();
Handler auth = new AuthenticationHandler();
Handler authz = new AuthorizationHandler();

logger.setNext(auth);
auth.setNext(authz);

logger.handleRequest("auth request");

// Spring Security中的责任链
// FilterChainProxy包含多个Filter，按顺序执行
// UsernamePasswordAuthenticationFilter -> BasicAuthenticationFilter -> ...`,tags:["行为型","责任链模式"]},{id:"dp-12",title:"设计模式在Spring框架中的应用",content:"列举Spring框架中使用的主要设计模式，并说明它们的具体应用场景。",category:"design-pattern",difficulty:"hard",answer:"Spring框架广泛应用设计模式：1)工厂模式（BeanFactory、ApplicationContext）；2)单例模式（默认Bean作用域）；3)代理模式（AOP）；4)策略模式（Resource、TransactionDefinition）；5)模板方法模式（JdbcTemplate、AbstractApplicationContext）；6)观察者模式（ApplicationEvent）；7)责任链模式（FilterChainProxy）；8)适配器模式（HandlerAdapter）；9)装饰器模式（BeanWrapper）。",codeExample:`// 1. 工厂模式
ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
UserService service = context.getBean(UserService.class);

// 2. 单例模式
// @Scope("singleton") - 默认
@Service
public class UserService { /* ... */ }

// 3. 代理模式 - AOP
@Aspect
@Component
public class LogAspect {
    @Around("execution(* com.example.service.*.*(..))")
    public Object log(ProceedingJoinPoint pjp) throws Throwable {
        System.out.println("方法开始");
        Object result = pjp.proceed();
        System.out.println("方法结束");
        return result;
    }
}

// 4. 策略模式 - 事务传播行为
@Transactional(propagation = Propagation.REQUIRED)
public void method() { /* ... */ }

// 5. 模板方法模式 - JdbcTemplate
jdbcTemplate.query("SELECT * FROM users", (rs, rowNum) -> 
    new User(rs.getLong("id"), rs.getString("name"))
);

// 6. 观察者模式 - 事件
applicationEventPublisher.publishEvent(new MyEvent(this, "data"));

// 7. 责任链模式 - Filter链
// SecurityFilterChain

// 8. 适配器模式 - MVC HandlerAdapter
// RequestMappingHandlerAdapter`,tags:["设计模式","Spring"]},{id:"ms-1",title:"什么是微服务架构？",content:"解释微服务架构的概念、特点，以及与单体架构的区别。",category:"microservice",difficulty:"easy",answer:"微服务架构是将应用拆分为多个小型、独立部署的服务。特点：1)服务独立部署、独立扩展；2)服务间通过API通信；3)每个服务专注单一业务；4)可使用不同技术栈。与单体架构对比：单体架构部署简单但扩展困难，微服务灵活但运维复杂。",codeExample:`// 单体架构示例 - 所有功能在一个应用中
@SpringBootApplication
public class MonolithApplication {
    // 用户模块
    @RestController
    class UserController { /* ... */ }
    
    // 订单模块
    @RestController
    class OrderController { /* ... */ }
    
    // 商品模块
    @RestController
    class ProductController { /* ... */ }
}

// 微服务架构示例 - 拆分为独立服务
// 用户服务（独立部署）
@SpringBootApplication
public class UserServiceApplication {
    @RestController
    class UserController {
        @GetMapping("/users/{id}")
        public User getUser(@PathVariable Long id) {
            return userService.findById(id);
        }
    }
}

// 订单服务（独立部署）
@SpringBootApplication
public class OrderServiceApplication {
    @RestController
    class OrderController {
        @PostMapping("/orders")
        public Order createOrder(@RequestBody OrderDTO dto) {
            // 通过Feign调用用户服务
            User user = userClient.getUser(dto.getUserId());
            return orderService.create(dto, user);
        }
    }
}

// 商品服务（独立部署）
@SpringBootApplication
public class ProductServiceApplication { /* ... */ }`,tags:["微服务","架构设计"]},{id:"ms-2",title:"Spring Cloud核心组件有哪些？",content:"列举Spring Cloud的核心组件及其作用，包括服务注册发现、配置中心、负载均衡、服务调用、网关等。",category:"microservice",difficulty:"medium",answer:"Spring Cloud核心组件：1)Eureka/Nacos（服务注册发现）；2)Config/Nacos Config（配置中心）；3)Ribbon/LoadBalancer（负载均衡）；4)Feign/OpenFeign（声明式服务调用）；5)Gateway/Zuul（API网关）；6)Hystrix/Sentinel（服务熔断降级）；7)Sleuth+Zipkin（链路追踪）。",codeExample:`// 1. Eureka服务注册中心
@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}

// application.yml
server:
  port: 8761
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false

// 2. 服务注册到Eureka
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication { /* ... */ }

// application.yml
spring:
  application:
    name: user-service
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/

// 3. Feign声明式调用
@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

@Service
public class OrderService {
    @Autowired
    private UserClient userClient;
    
    public Order createOrder(Long userId) {
        User user = userClient.getUser(userId); // 远程调用
        return new Order(user);
    }
}

// 4. Gateway网关配置
@SpringBootApplication
public class GatewayApplication { /* ... */ }

// application.yml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**`,tags:["Spring Cloud","服务治理"]},{id:"ms-3",title:"服务注册与发现的原理",content:"解释服务注册发现的工作原理，包括注册中心、服务提供者、服务消费者的交互流程。",category:"microservice",difficulty:"medium",answer:"服务注册发现流程：1)服务启动时向注册中心注册（发送服务名、IP、端口）；2)注册中心维护服务列表并定时心跳检测；3)服务消费者从注册中心获取服务列表；4)消费者通过负载均衡选择服务实例调用；5)服务下线时注册中心剔除。心跳机制保证服务列表实时更新。",codeExample:`// Eureka服务注册流程
// 1. 服务提供者注册
@RestController
@SpringBootApplication
@EnableDiscoveryClient
public class ProviderApplication {
    @Value("\${server.port}")
    private int port;
    
    @GetMapping("/hello")
    public String hello() {
        return "Hello from port: " + port;
    }
    
    // 启动时自动注册到Eureka
    // spring.application.name=provider-service
    // eureka.client.service-url.defaultZone=http://localhost:8761/eureka
}

// 2. 服务消费者发现并调用
@SpringBootApplication
@EnableDiscoveryClient
public class ConsumerApplication {
    @Autowired
    private DiscoveryClient discoveryClient;
    
    @Autowired
    private LoadBalancer loadBalancer;
    
    @GetMapping("/invoke")
    public String invoke() {
        // 从注册中心获取服务实例列表
        List<ServiceInstance> instances = discoveryClient.getInstances("provider-service");
        
        // 负载均衡选择一个实例
        ServiceInstance instance = loadBalancer.choose(instances);
        
        // 调用服务
        String url = instance.getUri() + "/hello";
        return restTemplate.getForObject(url, String.class);
    }
}

// 3. Nacos注册中心配置（推荐）
spring:
  application:
    name: user-service
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
        namespace: public
        group: DEFAULT_GROUP`,tags:["服务注册","Eureka","Nacos"]},{id:"ms-4",title:"负载均衡策略有哪些？",content:"解释客户端负载均衡和服务端负载均衡的区别，列举常见的负载均衡策略。",category:"microservice",difficulty:"medium",answer:"负载均衡分为客户端（Ribbon/LoadBalancer）和服务端（Nginx）。常见策略：1)轮询（RoundRobin）：依次调用；2)随机（Random）：随机选择；3)加权轮询：按权重分配；4)最少连接：选择连接数最少的服务；5)IP哈希：相同IP请求同一服务。Spring Cloud LoadBalancer默认轮询。",codeExample:`// Ribbon负载均衡配置（已废弃，使用Spring Cloud LoadBalancer）
// 1. 自定义负载均衡策略
@Configuration
public class LoadBalancerConfig {
    @Bean
    ReactorLoadBalancer<ServiceInstance> randomLoadBalancer(Environment environment, LoadBalancerClientFactory factory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);
        return new RandomLoadBalancer(factory.getLazyProvider(name, ServiceInstanceListSupplier.class), name);
    }
}

// 2. 使用@LoadBalancerClient指定策略
@LoadBalancerClient(name = "user-service", configuration = LoadBalancerConfig.class)
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

// 3. Nginx服务端负载均衡配置
upstream backend {
    # 轮询（默认）
    server 192.168.1.1:8080;
    server 192.168.1.2:8080;
    
    # 加权轮询
    server 192.168.1.3:8080 weight=3;
    server 192.168.1.4:8080 weight=1;
    
    # IP哈希
    ip_hash;
    server 192.168.1.5:8080;
    server 192.168.1.6:8080;
}

server {
    location /api/ {
        proxy_pass http://backend;
    }
}

// 4. 自定义负载均衡算法
public class WeightedLoadBalancer implements ReactorServiceInstanceLoadBalancer {
    private final List<ServiceInstance> instances;
    private final Map<String, Integer> weights;
    
    public Mono<Response<ServiceInstance>> choose(Request request) {
        // 根据权重选择实例
        int totalWeight = weights.values().stream().mapToInt(Integer::intValue).sum();
        int random = ThreadLocalRandom.current().nextInt(totalWeight);
        
        int current = 0;
        for (ServiceInstance instance : instances) {
            current += weights.get(instance.getInstanceId());
            if (random < current) {
                return Mono.just(new DefaultResponse(instance));
            }
        }
        return Mono.just(new DefaultResponse(instances.get(0)));
    }
}`,tags:["负载均衡","Ribbon","Nginx"]},{id:"ms-5",title:"服务熔断与降级",content:"解释服务熔断、降级的概念，说明Sentinel/Hystrix的实现原理和使用方式。",category:"microservice",difficulty:"hard",answer:"熔断：当服务异常率达到阈值时，自动切断调用，防止雪崩效应。降级：服务不可用时返回兜底响应。Sentinel原理：1)定义资源；2)配置规则（QPS、线程数、响应时间）；3)触发规则时执行降级逻辑。状态转换：关闭→开启→半开→关闭。推荐使用Sentinel（阿里巴巴开源）。",codeExample:`// Sentinel熔断降级示例
// 1. 引入依赖
// <dependency>
//     <groupId>com.alibaba.cloud</groupId>
//     <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
// </dependency>

// 2. 定义资源并配置降级逻辑
@Service
public class UserService {
    @SentinelResource(
        value = "getUser",
        fallback = "getUserFallback",      // 降级方法
        blockHandler = "getUserBlockHandler" // 熔断方法
    )
    public User getUser(Long id) {
        // 可能失败的远程调用
        return userClient.getUser(id);
    }
    
    // 降级逻辑 - 业务异常时执行
    public User getUserFallback(Long id, Throwable ex) {
        log.error("获取用户失败，执行降级", ex);
        return new User(id, "默认用户", "default@example.com");
    }
    
    // 熔断逻辑 - 触发规则时执行
    public User getUserBlockHandler(Long id, BlockException ex) {
        log.warn("触发熔断规则", ex);
        return new User(id, "熔断用户", "blocked@example.com");
    }
}

// 3. 配置熔断规则
// application.yml
spring:
  cloud:
    sentinel:
      transport:
        dashboard: localhost:8080  # Sentinel控制台

// 4. 代码配置规则
@Configuration
public class SentinelConfig {
    @PostConstruct
    public void initRules() {
        // 熔断规则：异常比例超过50%时熔断
        DegradeRule degradeRule = new DegradeRule("getUser");
        degradeRule.setGrade(CircuitBreakerStrategy.ERROR_RATIO.getType());
        degradeRule.setCount(0.5);  // 异常比例阈值
        degradeRule.setTimeWindow(10);  // 熔断持续时间10秒
        degradeRule.setMinRequestAmount(5);  // 最小请求数
        
        DegradeRuleManager.loadDegradeRules(Collections.singletonList(degradeRule));
        
        // 流控规则：QPS限制
        FlowRule flowRule = new FlowRule("getUser");
        flowRule.setCount(10);  // 每秒最多10次
        flowRule.setGrade(RuleConstant.FLOW_GRADE_QPS);
        
        FlowRuleManager.loadRules(Collections.singletonList(flowRule));
    }
}

// 5. Hystrix示例（已停止维护）
@HystrixCommand(
    fallbackMethod = "getUserFallback",
    commandProperties = {
        @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "10"),
        @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "50"),
        @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "5000")
    }
)
public User getUser(Long id) {
    return userClient.getUser(id);
}`,tags:["熔断降级","Sentinel","Hystrix"]},{id:"ms-6",title:"分布式事务解决方案",content:"解释分布式事务的问题，列举常见的解决方案（2PC、3PC、TCC、Saga、本地消息表、Seata）。",category:"microservice",difficulty:"hard",answer:"分布式事务保证跨服务数据一致性。解决方案：1)2PC（两阶段提交）：Prepare→Commit，强一致但阻塞；2)TCC（Try-Confirm-Cancel）：业务层面实现，最终一致；3)Saga：长事务拆分+补偿机制；4)本地消息表：异步确保；5)Seata：AT模式（自动补偿）、TCC模式、Saga模式。推荐使用Seata AT模式。",codeExample:`// Seata分布式事务示例
// 1. 引入依赖
// <dependency>
//     <groupId>io.seata</groupId>
//     <artifactId>seata-spring-boot-starter</artifactId>
//     <version>1.5.2</version>
// </dependency>

// 2. 配置Seata
// application.yml
seata:
  enabled: true
  tx-service-group: my_tx_group
  service:
    vgroup-mapping:
      my_tx_group: default
  registry:
    type: nacos
    nacos:
      server-addr: localhost:8848

// 3. AT模式 - 自动分布式事务
@Service
public class OrderService {
    @Autowired
    private OrderMapper orderMapper;
    
    @Autowired
    private StorageClient storageClient;
    
    @Autowired
    private AccountClient accountClient;
    
    @GlobalTransactional(name = "create-order", rollbackFor = Exception.class)
    public void createOrder(OrderDTO orderDTO) {
        // 创建订单（本地事务）
        orderMapper.insert(orderDTO);
        
        // 扣减库存（远程调用，Seata自动管理）
        storageClient.decrease(orderDTO.getProductId(), orderDTO.getCount());
        
        // 扣减余额（远程调用）
        accountClient.decrease(orderDTO.getUserId(), orderDTO.getAmount());
        
        // Seata自动生成undo_log，失败时自动回滚
    }
}

// 4. TCC模式 - 手动实现Try/Confirm/Cancel
@LocalTCC
public interface StorageTccService {
    @TwoPhaseBusinessAction(name = "prepareDecrease", commitMethod = "commit", rollbackMethod = "rollback")
    boolean prepareDecrease(@BusinessActionContextParameter(paramName = "productId") Long productId,
                            @BusinessActionContextParameter(paramName = "count") Integer count);
    
    boolean commit(BusinessActionContext context);
    
    boolean rollback(BusinessActionContext context);
}

// TCC实现
@Service
public class StorageTccServiceImpl implements StorageTccService {
    @Autowired
    private StorageMapper storageMapper;
    
    @Override
    public boolean prepareDecrease(Long productId, Integer count) {
        // Try阶段：预留库存（冻结）
        storageMapper.freezeStock(productId, count);
        return true;
    }
    
    @Override
    public boolean commit(BusinessActionContext context) {
        // Confirm阶段：真正扣减库存
        Long productId = context.getActionContext("productId");
        Integer count = context.getActionContext("count");
        storageMapper.decreaseFrozenStock(productId, count);
        return true;
    }
    
    @Override
    public boolean rollback(BusinessActionContext context) {
        // Cancel阶段：释放预留库存
        Long productId = context.getActionContext("productId");
        Integer count = context.getActionContext("count");
        storageMapper.releaseFrozenStock(productId, count);
        return true;
    }
}

// 5. 本地消息表方案
@Transactional
public void createOrder(OrderDTO orderDTO) {
    // 创建订单
    orderMapper.insert(orderDTO);
    
    // 写入本地消息表（同一事务）
    Message message = new Message();
    message.setBizId(orderDTO.getId());
    message.setTopic("order-created");
    message.setContent(JSON.toJSONString(orderDTO));
    message.setStatus("PENDING");
    messageMapper.insert(message);
}

// 定时任务扫描消息表并发送
@Scheduled(fixedDelay = 5000)
public void sendPendingMessages() {
    List<Message> messages = messageMapper.selectByStatus("PENDING");
    for (Message message : messages) {
        try {
            mqProducer.send(message.getTopic(), message.getContent());
            messageMapper.updateStatus(message.getId(), "SENT");
        } catch (Exception e) {
            // 发送失败，下次重试
        }
    }
}`,tags:["分布式事务","Seata","TCC"]},{id:"ms-7",title:"API网关的作用和实现",content:"解释API网关的核心功能，说明Spring Cloud Gateway的工作原理和配置方式。",category:"microservice",difficulty:"medium",answer:"API网关是微服务入口，核心功能：1)路由转发；2)负载均衡；3)认证鉴权；4)限流熔断；5)日志监控；6)协议转换。Spring Cloud Gateway基于WebFlux，三大核心概念：Route（路由）、Predicate（断言）、Filter（过滤器）。支持动态路由、自定义过滤器。",codeExample:`// Spring Cloud Gateway配置
// 1. 基础路由配置
@SpringBootApplication
public class GatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }
}

// application.yml
spring:
  cloud:
    gateway:
      routes:
        # 用户服务路由
        - id: user-service
          uri: lb://user-service  # 负载均衡
          predicates:
            - Path=/api/users/**  # 路径匹配
            - Method=GET,POST     # 方法限制
          filters:
            - StripPrefix=1       # 去掉/api前缀
            - AddRequestHeader=X-Request-Id, \${value}
        
        # 订单服务路由
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
            - After=2024-01-01T00:00:00+08:00  # 时间限制
          filters:
            - name: RequestRateLimiter  # 限流
              args:
                redis-rate-limiter.replenishRate: 10
                redis-rate-limiter.burstCapacity: 20
                key-resolver: "\${user.id}"

// 2. 自定义过滤器
@Component
public class AuthFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        ServerHttpRequest request = exchange.getRequest();
        
        // 获取Token
        String token = request.getHeaders().getFirst("Authorization");
        if (token == null || !validateToken(token)) {
            ServerHttpResponse response = exchange.getResponse();
            response.setStatusCode(HttpStatus.UNAUTHORIZED);
            return response.writeWith(Mono.just(response.bufferFactory().wrap("未授权".getBytes())));
        }
        
        // 验证通过，继续执行
        return chain.filter(exchange);
    }
    
    @Override
    public int getOrder() {
        return -100;  // 优先级最高
    }
    
    private boolean validateToken(String token) {
        // JWT验证逻辑
        return JwtUtil.verify(token);
    }
}

// 3. 动态路由配置
@RestController
@RequestMapping("/routes")
public class RouteController {
    @Autowired
    private RouteDefinitionLocator routeDefinitionLocator;
    
    @Autowired
    private RouteDefinitionWriter routeDefinitionWriter;
    
    @PostMapping
    public Mono<Void> addRoute(@RequestBody RouteDefinition definition) {
        return routeDefinitionWriter.save(Mono.just(definition));
    }
    
    @DeleteMapping("/{id}")
    public Mono<Void> deleteRoute(@PathVariable String id) {
        return routeDefinitionWriter.delete(Mono.just(id));
    }
}

// 4. 跨域配置
@Configuration
public class CorsConfig {
    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*");
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        
        return new CorsWebFilter(source);
    }
}`,tags:["API网关","Gateway","路由"]},{id:"ms-8",title:"分布式锁的实现方式",content:"解释分布式锁的作用，列举常见的实现方式（Redis、Zookeeper、数据库），并分析各自的优缺点。",category:"microservice",difficulty:"hard",answer:"分布式锁保证跨进程资源互斥。实现方式：1)Redis SETNX+过期时间（推荐Redlock算法）；2)Zookeeper临时顺序节点（CP强一致）；3)数据库唯一索引（简单但性能低）。Redis优点：性能高、实现简单；缺点：锁续期问题（需看门狗）、主从切换可能丢锁。推荐Redisson框架。",codeExample:`// Redis分布式锁实现
// 1. Redisson框架（推荐）
// <dependency>
//     <groupId>org.redisson</groupId>
//     <artifactId>redisson-spring-boot-starter</artifactId>
// </dependency>

@Configuration
public class RedissonConfig {
    @Bean
    public RedissonClient redissonClient() {
        Config config = new Config();
        config.useSingleServer()
            .setAddress("redis://localhost:6379")
            .setLockWatchdogTimeout(30000);  // 看门狗30秒
        return Redisson.create(config);
    }
}

@Service
public class OrderService {
    @Autowired
    private RedissonClient redissonClient;
    
    public String createOrder(Long productId) {
        // 获取分布式锁
        RLock lock = redissonClient.getLock("order:lock:" + productId);
        
        try {
            // 尝试获取锁，最多等待10秒，锁自动释放30秒
            boolean acquired = lock.tryLock(10, 30, TimeUnit.SECONDS);
            if (!acquired) {
                return "获取锁失败";
            }
            
            // 执行业务逻辑
            // 查库存、创建订单、扣库存...
            return "订单创建成功";
            
        } catch (InterruptedException e) {
            return "异常";
        } finally {
            // 释放锁（自动判断是否持有锁）
            if (lock.isHeldByCurrentThread()) {
                lock.unlock();
            }
        }
    }
}

// 2. Redis SETNX原生实现
public class RedisLock {
    @Autowired
    private StringRedisTemplate redisTemplate;
    
    public boolean tryLock(String key, String value, long expireTime) {
        // SET key value NX EX expireTime
        Boolean result = redisTemplate.opsForValue()
            .setIfAbsent(key, value, expireTime, TimeUnit.SECONDS);
        return result != null && result;
    }
    
    public void unlock(String key, String value) {
        // Lua脚本保证原子性：只有自己才能释放锁
        String script = "if redis.call('get', KEYS[1]) == ARGV[1] then " +
                        "   return redis.call('del', KEYS[1]) " +
                        "else " +
                        "   return 0 " +
                        "end";
        redisTemplate.execute(
            new DefaultRedisScript<>(script, Long.class),
            Collections.singletonList(key),
            value
        );
    }
    
    // 看门狗续期
    public void watchdog(String key, String value, long expireTime) {
        new Thread(() -> {
            while (true) {
                try {
                    Thread.sleep(expireTime / 3);
                    // 检查是否还持有锁
                    if (redisTemplate.opsForValue().get(key).equals(value)) {
                        redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
                    } else {
                        break;
                    }
                } catch (InterruptedException e) {
                    break;
                }
            }
        }).start();
    }
}

// 3. Zookeeper分布式锁
public class ZkLock {
    private final CuratorFramework client;
    
    public ZkLock(CuratorFramework client) {
        this.client = client;
    }
    
    public InterProcessMutex getLock(String path) {
        return new InterProcessMutex(client, path);
    }
    
    public void doWithLock(String path, Runnable task) throws Exception {
        InterProcessMutex lock = new InterProcessMutex(client, "/locks/" + path);
        
        if (lock.acquire(10, TimeUnit.SECONDS)) {
            try {
                task.run();
            } finally {
                lock.release();
            }
        }
    }
}`,tags:["分布式锁","Redis","Redisson"]},{id:"ms-9",title:"分布式ID生成方案",content:"解释分布式ID的要求，列举常见的生成方案（UUID、数据库自增、Redis、Snowflake、Leaf）。",category:"microservice",difficulty:"medium",answer:"分布式ID要求：全局唯一、有序、高性能、可扩展。方案：1)UUID（无序、太长）；2)数据库自增（性能低、单点）；3)Redis INCR（性能高、依赖Redis）；4)Snowflake（Twitter雪花算法，64位：时间戳+机器ID+序列号）；5)Leaf（美团，号段模式+Snowflake）。推荐Snowflake或Leaf。",codeExample:`// Snowflake雪花算法实现
public class SnowflakeIdGenerator {
    // 起始时间戳（2024-01-01）
    private final long startTimestamp = 1704038400000L;
    
    // 机器ID占5位，最多32台机器
    private final long machineIdBits = 5L;
    private final long maxMachineId = ~(-1L << machineIdBits);  // 31
    
    // 序列号占12位，每毫秒最多4096个ID
    private final long sequenceBits = 12L;
    private final long maxSequence = ~(-1L << sequenceBits);  // 4095
    
    // 机器ID左移12位
    private final long machineIdShift = sequenceBits;
    // 时间戳左移17位
    private final long timestampShift = sequenceBits + machineIdBits;
    
    private long machineId;
    private long sequence = 0L;
    private long lastTimestamp = -1L;
    
    public SnowflakeIdGenerator(long machineId) {
        if (machineId > maxMachineId || machineId < 0) {
            throw new IllegalArgumentException("机器ID超出范围");
        }
        this.machineId = machineId;
    }
    
    public synchronized long nextId() {
        long currentTimestamp = System.currentTimeMillis();
        
        // 时间回拨处理
        if (currentTimestamp < lastTimestamp) {
            throw new RuntimeException("时钟回拨");
        }
        
        // 同一毫秒内
        if (currentTimestamp == lastTimestamp) {
            sequence = (sequence + 1) & maxSequence;
            if (sequence == 0) {
                // 序列号溢出，等待下一毫秒
                currentTimestamp = waitNextMillis(lastTimestamp);
            }
        } else {
            sequence = 0L;
        }
        
        lastTimestamp = currentTimestamp;
        
        // 组装ID：时间戳 | 机器ID | 序列号
        return ((currentTimestamp - startTimestamp) << timestampShift)
                | (machineId << machineIdShift)
                | sequence;
    }
    
    private long waitNextMillis(long lastTimestamp) {
        long timestamp = System.currentTimeMillis();
        while (timestamp <= lastTimestamp) {
            timestamp = System.currentTimeMillis();
        }
        return timestamp;
    }
}

// 使用示例
SnowflakeIdGenerator generator = new SnowflakeIdGenerator(1);
long id = generator.nextId();  // 例如：1234567890123456789

// Redis生成ID
@Service
public class RedisIdGenerator {
    @Autowired
    private StringRedisTemplate redisTemplate;
    
    public Long nextId(String key) {
        return redisTemplate.opsForValue().increment(key);
    }
    
    // 带日期前缀的ID（便于按日期统计）
    public String nextIdWithDate(String key) {
        String date = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        Long seq = redisTemplate.opsForValue().increment(key + ":" + date);
        return date + String.format("%06d", seq);
    }
}

// 数据库号段模式（Leaf）
CREATE TABLE leaf_alloc (
    biz_tag VARCHAR(64) PRIMARY KEY,
    max_id BIGINT NOT NULL,
    step INT NOT NULL,
    version INT NOT NULL
);

@Service
public class LeafIdGenerator {
    @Autowired
    private LeafAllocMapper leafAllocMapper;
    
    private final Map<String, SegmentBuffer> buffers = new ConcurrentHashMap<>();
    
    public Long nextId(String bizTag) {
        SegmentBuffer buffer = buffers.computeIfAbsent(bizTag, this::initBuffer);
        return buffer.nextId();
    }
    
    private SegmentBuffer initBuffer(String bizTag) {
        // 从数据库获取号段
        LeafAlloc alloc = leafAllocMapper.selectByBizTag(bizTag);
        leafAllocMapper.updateMaxId(bizTag, alloc.getStep(), alloc.getVersion());
        
        return new SegmentBuffer(alloc.getMaxId(), alloc.getStep());
    }
}`,tags:["分布式ID","Snowflake","Leaf"]},{id:"ms-10",title:"消息队列在微服务中的应用",content:"解释消息队列在微服务中的作用（解耦、异步、削峰），对比RabbitMQ、Kafka、RocketMQ的特点。",category:"microservice",difficulty:"medium",answer:"消息队列作用：1)解耦：服务独立演进；2)异步：提升响应速度；3)削峰：应对流量高峰。对比：RabbitMQ（AMQP协议，可靠性高，适合业务消息）；Kafka（高吞吐、持久化、适合日志大数据）；RocketMQ（阿里开源，事务消息、顺序消息）。选择：可靠性选RabbitMQ，吞吐量选Kafka。",codeExample:`// RabbitMQ示例
// 1. 配置
@Configuration
public class RabbitMQConfig {
    @Bean
    public Queue orderQueue() {
        return new Queue("order.queue", true);
    }
    
    @Bean
    public DirectExchange orderExchange() {
        return new DirectExchange("order.exchange");
    }
    
    @Bean
    public Binding binding() {
        return BindingBuilder.bind(orderQueue())
            .to(orderExchange())
            .with("order.created");
    }
}

// 2. 生产者
@Service
public class OrderProducer {
    @Autowired
    private RabbitTemplate rabbitTemplate;
    
    public void sendOrderCreated(Order order) {
        rabbitTemplate.convertAndSend(
            "order.exchange",
            "order.created",
            order,
            message -> {
                message.getMessageProperties().setDeliveryMode(MessageDeliveryMode.PERSISTENT);
                return message;
            }
        );
    }
}

// 3. 消费者
@Component
@RabbitListener(queues = "order.queue")
public class OrderConsumer {
    @Autowired
    private InventoryService inventoryService;
    
    @RabbitHandler
    public void handleOrderCreated(Order order) {
        // 扣减库存
        inventoryService.decrease(order.getProductId(), order.getCount());
    }
}

// Kafka示例
// 1. 配置
@Configuration
public class KafkaConfig {
    @Bean
    public ProducerFactory<String, String> producerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.ACKS_CONFIG, "all");  // 确保可靠性
        return new DefaultKafkaProducerFactory<>(config);
    }
    
    @Bean
    public KafkaTemplate<String, String> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}

// 2. 生产者
@Service
public class LogProducer {
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
    
    public void sendLog(String topic, String message) {
        kafkaTemplate.send(topic, message)
            .addCallback(
                result -> log.info("发送成功"),
                ex -> log.error("发送失败", ex)
            );
    }
}

// 3. 消费者
@Component
public class LogConsumer {
    @KafkaListener(topics = "log-topic", groupId = "log-group")
    public void consumeLog(String message) {
        // 处理日志
        logService.save(message);
    }
    
    // 批量消费
    @KafkaListener(topics = "log-topic", batch = "true")
    public void consumeBatch(List<String> messages) {
        logService.batchSave(messages);
    }
}

// RocketMQ事务消息
@Service
public class OrderTransactionProducer {
    @Autowired
    private RocketMQTemplate rocketMQTemplate;
    
    public void sendOrderInTransaction(Order order) {
        rocketMQTemplate.sendMessageInTransaction(
            "order-group",
            MessageBuilder.withPayload(order).build(),
            null
        );
    }
}

@RocketMQTransactionListener(rocketMQTemplateBeanName = "rocketMQTemplate")
class OrderTransactionListener implements RocketMQLocalTransactionListener {
    @Override
    public RocketMQLocalTransactionState executeLocalTransaction(Message msg, Object arg) {
        try {
            // 执行本地事务
            orderService.createOrder(msg);
            return RocketMQLocalTransactionState.COMMIT;
        } catch (Exception e) {
            return RocketMQLocalTransactionState.ROLLBACK;
        }
    }
    
    @Override
    public RocketMQLocalTransactionState checkLocalTransaction(Message msg) {
        // 事务状态回查
        boolean exists = orderService.checkOrderExists(msg);
        return exists ? RocketMQLocalTransactionState.COMMIT : RocketMQLocalTransactionState.ROLLBACK;
    }
}`,tags:["消息队列","RabbitMQ","Kafka"]},{id:"ms-11",title:"服务链路追踪",content:"解释链路追踪的作用，说明Spring Cloud Sleuth + Zipkin/SkyWalking的实现原理。",category:"microservice",difficulty:"medium",answer:"链路追踪用于排查分布式系统问题。核心概念：Trace（完整调用链）、Span（单个服务调用）。实现原理：1)请求入口生成TraceId；2)每个服务调用生成SpanId；3)通过HTTP Header传递TraceId/SpanId；4)异步上报到收集器。常用工具：Zipkin（Twitter）、SkyWalking（Apache，无侵入）、Jaeger（Uber）。",codeExample:`// Spring Cloud Sleuth + Zipkin配置
// 1. 引入依赖
// <dependency>
//     <groupId>org.springframework.cloud</groupId>
//     <artifactId>spring-cloud-starter-sleuth</artifactId>
// </dependency>
// <dependency>
//     <groupId>org.springframework.cloud</groupId>
//     <artifactId>spring-cloud-sleuth-zipkin</artifactId>
// </dependency>

// 2. 配置
// application.yml
spring:
  sleuth:
    sampler:
      probability: 1.0  # 采样率100%
  zipkin:
    base-url: http://localhost:9411
    sender:
      type: web  # 或kafka/rabbit

// 3. 自动生成TraceId/SpanId
// Sleuth自动在日志中添加：
// [user-service,trace-id,span-id,parent-span-id]
log.info("处理请求");  // 输出：[user-service,abc123,def456,null] 处理请求

// 4. 手动创建Span
@Service
public class UserService {
    @Autowired
    private Tracer tracer;
    
    public User getUser(Long id) {
        Span span = tracer.nextSpan().name("db-query");
        try (Tracer.SpanInScope ws = tracer.withSpan(span.start())) {
            return userRepository.findById(id);
        } finally {
            span.finish();
        }
    }
}

// 5. Baggage额外信息传递
// 设置Baggage（会传递到下游服务）
tracer.currentSpan().baggage().put("userId", "123");

// 在下游服务获取
String userId = tracer.currentSpan().baggage().get("userId");

// SkyWalking配置（无侵入）
// 1. Agent启动
// java -javaagent=/path/to/skywalking-agent.jar 
//      -Dskywalking.agent.service_name=user-service 
//      -Dskywalking.collector.backend_service=localhost:11800 
//      -jar app.jar

// 2. 自定义追踪
@Trace
public User getUser(Long id) {
    return userRepository.findById(id);
}

@Trace(operationName = "自定义操作")
@Tags({
    @Tag(key = "userId", value = "arg[0]"),
    @Tag(key = "result", value = "returnedObj.name")
})
public User getUser(Long id) {
    return userRepository.findById(id);
}

// 3. 手动埋点
public void customTrace() {
    AbstractSpan span = ContextManager.createLocalSpan("custom-operation");
    try {
        span.tag("key", "value");
        // 业务逻辑
    } catch (Exception e) {
        span.errorOccurred().log(e);
    } finally {
        ContextManager.stopSpan();
    }
}`,tags:["链路追踪","Sleuth","Zipkin","SkyWalking"]},{id:"ms-12",title:"配置中心的作用和实现",content:"解释配置中心的作用，说明Spring Cloud Config/Nacos Config的工作原理。",category:"microservice",difficulty:"medium",answer:"配置中心统一管理微服务配置，支持动态更新。作用：1)配置集中管理；2)环境隔离（dev/test/prod）；3)动态刷新（无需重启）；4)版本管理。Nacos Config原理：1)服务启动从Nacos拉取配置；2)配置变更推送变更事件；3)应用监听事件刷新配置。推荐使用Nacos Config。",codeExample:`// Nacos配置中心示例
// 1. 引入依赖
// <dependency>
//     <groupId>com.alibaba.cloud</groupId>
//     <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
// </dependency>

// 2. bootstrap.yml配置（优先级高于application.yml）
spring:
  application:
    name: user-service
  profiles:
    active: dev
  cloud:
    nacos:
      config:
        server-addr: localhost:8848
        namespace: public
        group: DEFAULT_GROUP
        file-extension: yaml
        shared-configs:
          - data-id: common.yaml
            group: DEFAULT_GROUP
            refresh: true

// 3. Nacos配置文件
// user-service-dev.yaml
server:
  port: 8081
db:
  url: jdbc:mysql://localhost:3306/user_dev
  username: root
  password: root123

// 4. 动态刷新配置
@RestController
@RefreshScope  // 支持动态刷新
public class ConfigController {
    @Value("\${db.url}")
    private String dbUrl;
    
    @Value("\${custom.config}")
    private String customConfig;
    
    @GetMapping("/config")
    public String getConfig() {
        return "dbUrl=" + dbUrl + ", customConfig=" + customConfig;
    }
    
    // Nacos配置变更后，自动刷新，无需重启
}

// 5. 监听配置变更
@Component
public class ConfigChangeListener implements ApplicationListener<RefreshEvent> {
    @Override
    public void onApplicationEvent(RefreshEvent event) {
        log.info("配置已刷新: {}", event);
    }
}

// 6. 手动获取配置
@Service
public class ConfigService {
    @Autowired
    private ConfigService configService;
    
    public String getConfig(String dataId, String group) {
        return configService.getConfig(dataId, group, 5000);
    }
    
    public void listenConfig(String dataId, String group) {
        configService.addListener(dataId, group, new Listener() {
            @Override
            public void receiveConfigInfo(String configInfo) {
                log.info("收到配置变更: {}", configInfo);
                // 更新本地配置
            }
            
            @Override
            public Executor getExecutor() {
                return null;
            }
        });
    }
}

// Spring Cloud Config示例（Git存储）
// 1. 配置服务端
@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication { /* ... */ }

// application.yml
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          search-paths: '{application}'
          default-label: main

// 2. 客户端配置
// bootstrap.yml
spring:
  cloud:
    config:
      uri: http://localhost:8888
      name: user-service
      profile: dev
      label: main`,tags:["配置中心","Nacos","动态刷新"]}],Mm=[{name:"ChatGPT",url:"https://chat.openai.com",description:"OpenAI的智能对话AI助手，支持代码生成、写作、翻译等",icon:"🤖",color:"from-green-500 to-green-600",category:"大模型"},{name:"Claude",url:"https://claude.ai",description:"Anthropic公司开发的AI助手，擅长长文本处理和代码生成",icon:"🧠",color:"from-orange-500 to-amber-500",category:"大模型"},{name:"Gemini",url:"https://gemini.google.com",description:"Google开发的AI助手，支持多模态交互和代码生成",icon:"✨",color:"from-blue-500 to-indigo-500",category:"大模型"},{name:"通义千问",url:"https://tongyi.aliyun.com",description:"阿里云开发的AI助手，支持对话、代码、写作等功能",icon:"🦅",color:"from-orange-500 to-orange-600",category:"大模型"},{name:"文心一言",url:"https://yiyan.baidu.com",description:"百度开发的AI助手，支持对话、写作、代码生成",icon:"🐼",color:"from-red-500 to-orange-500",category:"大模型"},{name:"智谱AI",url:"https://chatglm.cn",description:"清华系开发的AI助手，支持多模态和编程",icon:"🔬",color:"from-purple-500 to-indigo-500",category:"大模型"},{name:"豆包",url:"https://www.doubao.com",description:"字节跳动开发的AI助手，支持对话、写作、代码",icon:"📦",color:"from-emerald-500 to-teal-500",category:"大模型"},{name:"GitHub Copilot",url:"https://copilot.github.com",description:"AI编程助手，自动补全代码，支持多种编程语言",icon:"🚀",color:"from-gray-700 to-gray-900",category:"编程工具"},{name:"Cursor",url:"https://cursor.so",description:"AI代码编辑器，基于GPT-4，支持代码补全、修复、重构",icon:"✏️",color:"from-blue-600 to-cyan-600",category:"编程工具"},{name:"Codeium",url:"https://codeium.com",description:"免费的AI编程助手，支持多种IDE和编程语言",icon:"💡",color:"from-yellow-500 to-orange-500",category:"编程工具"},{name:"Midjourney",url:"https://www.midjourney.com",description:"AI绘画工具，通过文字描述生成高质量图片",icon:"🎨",color:"from-purple-600 to-pink-600",category:"图像生成"},{name:"Stable Diffusion",url:"https://stability.ai",description:"开源的AI绘画模型，支持本地部署和定制",icon:"🖼️",color:"from-indigo-500 to-purple-500",category:"图像生成"},{name:"DALL-E",url:"https://openai.com/dall-e-3",description:"OpenAI开发的AI绘画工具，生成高质量图片",icon:"🖌️",color:"from-emerald-500 to-green-600",category:"图像生成"},{name:"Runway",url:"https://runwayml.com",description:"AI视频生成和编辑平台，支持多种创意工具",icon:"🎬",color:"from-pink-500 to-rose-600",category:"视频生成"},{name:"Suno",url:"https://suno.ai",description:"AI音乐生成平台，通过文字描述生成音乐",icon:"🎵",color:"from-cyan-500 to-blue-600",category:"音频生成"},{name:"Notion AI",url:"https://www.notion.so/product/ai",description:"Notion内置的AI助手，支持写作、总结、翻译等",icon:"📝",color:"from-gray-800 to-black",category:"写作工具"},{name:"DeepL",url:"https://www.deepl.com",description:"高质量的AI翻译工具，支持多种语言",icon:"🌍",color:"from-red-600 to-red-700",category:"翻译工具"},{name:"Perplexity",url:"https://www.perplexity.ai",description:"AI搜索引擎，提供带引用来源的回答",icon:"🔍",color:"from-yellow-400 to-yellow-600",category:"搜索工具"},{name:"Hugging Face",url:"https://huggingface.co",description:"AI模型库和开源社区，提供各种AI模型和工具",icon:"🤗",color:"from-yellow-500 to-amber-600",category:"开发平台"},{name:"Ollama",url:"https://ollama.com",description:"本地运行大模型的工具，支持多种开源模型",icon:"🦙",color:"from-emerald-600 to-green-700",category:"开发平台"}],Am=[{name:"IntelliJ IDEA",url:"https://www.jetbrains.com/idea/",description:"Java集成开发环境（IDE），业界公认的Java开发首选工具",usage:"安装后安装Tomcat、Spring等插件，配置Maven/Gradle项目，快速开发Java应用。支持代码提示、重构、调试等功能。",icon:"💻",color:"from-purple-500 to-indigo-500"},{name:"Spring Boot",url:"https://spring.io/projects/spring-boot",description:"Spring Framework的子项目，简化Spring应用开发",usage:"创建Spring Boot项目：访问start.spring.io生成项目结构。使用@SpringBootApplication启动应用，自动配置数据库、Web等。",icon:"🌱",color:"from-green-500 to-emerald-500"},{name:"Redis",url:"https://redis.io/",description:"高性能键值对数据库，常用于缓存和会话存储",usage:"安装Redis后，使用redis-cli连接。常用命令：SET/GET存取数据，EXPIRE设置过期，HASH存对象。Java中使用Jedis或Lettuce客户端。",icon:"🔴",color:"from-red-500 to-orange-500"},{name:"MySQL",url:"https://www.mysql.com/",description:"开源关系型数据库，Web应用最常用的数据库之一",usage:"安装MySQL后，使用mysql -u root -p登录。创建数据库：CREATE DATABASE name；创建表：CREATE TABLE；常用命令：SELECT/INSERT/UPDATE/DELETE。",icon:"🐬",color:"from-blue-500 to-cyan-500"},{name:"Maven",url:"https://maven.apache.org/",description:"Java项目管理和依赖管理工具，统一项目结构",usage:"配置pom.xml添加依赖：<dependency>标签。常用命令：mvn clean install编译项目，mvn package打包，mvn spring-boot:run运行Spring Boot项目。",icon:"🧱",color:"from-yellow-500 to-amber-500"}],jm=[{name:"Vue.js",url:"https://vuejs.org/",description:"渐进式JavaScript框架，用于构建用户界面",usage:"使用npm create vue@latest创建项目。组件结构：template写HTML，script写逻辑，style写样式。常用指令：v-if/v-for/v-model。状态管理用Pinia或Vuex。",icon:"💚",color:"from-green-400 to-emerald-400"},{name:"Node.js",url:"https://nodejs.org/",description:"基于Chrome V8引擎的JavaScript运行时，可开发后端服务",usage:'npm init初始化项目，npm install安装依赖。创建服务器：const http = require("http")。Express框架：npm install express，快速搭建Web API。',icon:"🟢",color:"from-green-600 to-green-400"},{name:"Postman",url:"https://www.postman.com/",description:"API开发和测试工具，简化HTTP请求调试",usage:"新建请求：选择GET/POST等方法，输入URL。Params设置参数，Body选择raw/JSON格式发送数据。Headers设置请求头。Collections管理多个请求。",icon:"🚀",color:"from-orange-400 to-yellow-400"}],Om=[{name:"Git",url:"https://git-scm.com/",description:"分布式版本控制系统，管理代码版本和协作开发",usage:"git init初始化仓库。git add添加文件，git commit -m提交。git push推送到远程，git pull拉取更新。git branch创建分支，git merge合并分支。",icon:"🔀",color:"from-orange-500 to-red-500"},{name:"Docker",url:"https://www.docker.com/",description:"容器化平台，实现应用及其依赖的打包和部署",usage:"Dockerfile定义镜像：FROM指定基础镜像，COPY复制文件，RUN执行命令，CMD启动命令。构建镜像：docker build -t name。运行容器：docker run -p 8080:80 name。",icon:"🐳",color:"from-blue-600 to-blue-400"}],_m=[{name:"微信小程序",url:"https://developers.weixin.qq.com/miniprogram/dev/framework/",description:"微信官方小程序开发框架，跨平台移动应用",usage:"下载微信开发者工具，创建项目。pages目录下创建页面，app.json配置路由，app.wxss写样式。调用wx.request发起网络请求，wx.setStorage存本地数据。",icon:"💬",color:"from-green-500 to-green-400"},{name:"微信小游戏",url:"https://developers.weixin.qq.com/minigame/dev/guide/",description:"微信小游戏开发平台，基于Canvas/WebGL渲染",usage:"使用微信开发者工具创建小游戏项目。LayaAir/Cocos Creator等引擎开发。小游戏使用wx.createCanvas()创建画布，通过requestAnimationFrame实现游戏循环。",icon:"🎮",color:"from-blue-400 to-cyan-400"}],Gi=({id:o,title:u,tools:s})=>p.jsxs("section",{id:o,className:"mb-12 scroll-mt-24",children:[p.jsxs("h3",{className:"text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center",children:[p.jsx("span",{className:"mr-2 sm:mr-3",children:u.split(" ")[0]}),p.jsx("span",{children:u.split(" ").slice(1).join(" ")})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:s.map(c=>p.jsxs("div",{className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover",children:[p.jsxs("div",{className:"flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4",children:[p.jsx("div",{className:`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:c.icon}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("h4",{className:"font-bold text-gray-900 mb-1 text-sm sm:text-lg",children:c.name}),p.jsx("p",{className:"text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none",children:c.description})]})]}),p.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4",children:[p.jsxs("h5",{className:"text-indigo-900 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 flex items-center",children:[p.jsx("span",{className:"mr-1",children:"📖"})," 使用方法"]}),p.jsx("p",{className:"text-indigo-800 text-xs leading-relaxed line-clamp-3",children:c.usage})]}),p.jsxs("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm shadow-lg hover:shadow-xl",children:[p.jsx("span",{className:"mr-1 sm:mr-2",children:"🌐"}),"访问官方文档",p.jsx("svg",{className:"w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]},c.name))})]}),Dm=({tool:o})=>p.jsxs("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 sm:p-5 border border-white/20 group flex items-start space-x-3 hover:scale-[1.02] card-hover",children:[p.jsx("div",{className:`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${o.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:o.icon}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center justify-between mb-1",children:[p.jsx("h4",{className:"font-bold text-gray-900 text-xs sm:text-base",children:o.name}),p.jsx("span",{className:"px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-200",children:o.category})]}),p.jsx("p",{className:"text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2",children:o.description})]})]}),Bm=()=>{const[o,u]=R.useState(!1),s=el.slice(0,10),c=()=>{const v=document.getElementById("questions");v&&v.scrollIntoView({behavior:"smooth"})},f=v=>{const C=Zi.find(L=>L.id===v);return C?C.name:v},m=v=>{switch(v){case"easy":return"difficulty-easy";case"medium":return"difficulty-medium";case"hard":return"difficulty-hard";default:return"bg-gray-100 text-gray-800"}},y=v=>{switch(v){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return v}};return p.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50",children:[p.jsx(br,{isOpen:o,onToggle:()=>u(!o),onClose:()=>u(!1)}),p.jsxs("div",{className:"md:ml-64 pb-20 sm:pb-0",children:[p.jsxs("div",{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden",children:[p.jsxs("div",{className:"absolute inset-0 opacity-10",children:[p.jsx("div",{className:"absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"}),p.jsx("div",{className:"absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"})]}),p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10",children:p.jsxs("div",{className:"text-center animate-fadeInUp",children:[p.jsx("h1",{className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6",children:"Java面试题精选"}),p.jsx("p",{className:"text-base sm:text-lg md:text-2xl text-indigo-100 mb-6 sm:mb-10 max-w-3xl mx-auto",children:"精心整理的Java面试题集，涵盖基础、集合、并发、JVM等核心知识，助您面试一臂之力！"}),p.jsx("div",{className:"flex justify-center",children:p.jsx("button",{onClick:c,className:"bg-white text-indigo-600 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover:shadow-3xl text-base sm:text-xl transform hover:scale-[1.05]",children:"🚀 开始刷题"})})]})})]}),p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16",children:[p.jsxs("section",{id:"questions",className:"mb-12 sm:mb-20 scroll-mt-24",children:[p.jsx("h2",{className:"section-title mb-6 sm:mb-10 text-center",children:"🎯 精选面试题"}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:s.map((v,C)=>p.jsxs(Me,{to:`/question/${v.id}`,className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover animate-fadeInUp",style:{animationDelay:`${C*.05}s`},children:[p.jsxs("div",{className:"flex items-start justify-between mb-2 sm:mb-3",children:[p.jsx("h3",{className:"text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors flex-1 mr-2",children:v.title}),p.jsx("span",{className:`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${m(v.difficulty)} whitespace-nowrap border`,children:y(v.difficulty)})]}),p.jsx("p",{className:"text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2",children:v.content}),p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-xs sm:text-sm text-gray-500 font-medium",children:f(v.category)}),p.jsx("div",{className:"flex flex-wrap gap-1 sm:gap-2",children:v.tags.slice(0,2).map((L,k)=>p.jsx("span",{className:"px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-200",children:L},k))})]})]},v.id))}),p.jsx("div",{className:"text-center mt-8 sm:mt-10",children:p.jsxs(Me,{to:"/category/basics",className:"inline-flex items-center text-indigo-600 hover:text-purple-600 font-bold text-sm sm:text-lg transition-all duration-300",children:["查看更多题目",p.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})})]}),p.jsxs("section",{id:"categories",className:"mb-8 sm:mb-16 scroll-mt-24",children:[p.jsx("h2",{className:"section-title mb-6 sm:mb-10 text-center",children:"📚 知识分类"}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:Zi.map((v,C)=>p.jsxs(Me,{to:`/category/${v.id}`,className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover animate-fadeInUp",style:{animationDelay:`${C*.05}s`},children:[p.jsx("div",{className:`w-12 h-12 sm:w-14 sm:h-14 ${v.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:v.icon}),p.jsx("h3",{className:"text-lg sm:text-xl font-bold text-gray-900 mb-2",children:v.name}),p.jsx("p",{className:"text-gray-600 text-sm",children:v.description})]},v.id))})]}),p.jsxs("section",{id:"docs",className:"mb-8 sm:mb-16",children:[p.jsx("h2",{className:"section-title mb-2 text-center",children:"🔧 开发工具箱"}),p.jsx("p",{className:"text-gray-600 text-center mb-6 sm:mb-10 text-sm sm:text-lg",children:"Java开发者必备的官方文档和工具，包含详细使用教程"}),p.jsx(Gi,{id:"backend",title:"🖥️ 后端开发工具",tools:Am}),p.jsx(Gi,{id:"frontend",title:"🌐 前端开发工具",tools:jm}),p.jsx(Gi,{id:"devops",title:"🔧 DevOps工具",tools:Om}),p.jsx(Gi,{id:"wechat",title:"💬 微信生态",tools:_m})]}),p.jsx("section",{id:"ai-tools",className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-8 sm:py-12 rounded-3xl shadow-2xl mb-8",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-6 sm:mb-8",children:[p.jsxs("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 flex items-center justify-center",children:[p.jsx("span",{className:"mr-2 sm:mr-3",children:"🤖"})," AI工具导航"]}),p.jsx("p",{className:"text-indigo-100 text-sm sm:text-lg md:text-xl",children:"精心整理的热门AI工具，助力开发者提升效率"})]}),p.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4",children:Mm.map(v=>p.jsx(Dm,{tool:v},v.name))})]})})]}),p.jsx("footer",{className:"bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-6 sm:py-8 border-t border-gray-700",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center",children:p.jsx("p",{className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]})},Fm=()=>{const{id:o}=zc(),[u,s]=R.useState(!1),c=Zi.find(v=>v.id===o),f=el.filter(v=>v.category===o),m=v=>{switch(v){case"easy":return"bg-green-100 text-green-800";case"medium":return"bg-yellow-100 text-yellow-800";case"hard":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},y=v=>{switch(v){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return v}};return c?p.jsxs("div",{className:"min-h-screen bg-gray-50",children:[p.jsx(br,{isOpen:u,onToggle:()=>s(!u),onClose:()=>s(!1)}),p.jsxs("div",{className:"md:ml-64 pb-20 sm:pb-0",children:[p.jsx("div",{className:`${c.color} text-white`,children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:[p.jsxs(Me,{to:"/",className:"text-blue-100 hover:text-white mb-4 inline-flex items-center text-sm sm:text-base",children:[p.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"返回首页"]}),p.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4 mt-4",children:[p.jsx("div",{className:"w-14 h-14 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl",children:c.icon}),p.jsxs("div",{children:[p.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold",children:c.name}),p.jsx("p",{className:"text-blue-100 mt-2 text-sm sm:text-base",children:c.description})]})]}),p.jsxs("div",{className:"mt-4 sm:mt-6 text-base sm:text-lg",children:["共 ",p.jsx("span",{className:"font-bold",children:f.length})," 道题目"]})]})}),p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:f.length===0?p.jsx("div",{className:"text-center py-12",children:p.jsx("p",{className:"text-gray-500 text-base sm:text-lg",children:"该分类下暂无题目"})}):p.jsx("div",{className:"space-y-3 sm:space-y-4",children:f.map(v=>p.jsxs(Me,{to:`/question/${v.id}`,className:"bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group block",children:[p.jsxs("div",{className:"flex items-start justify-between mb-2 sm:mb-3",children:[p.jsx("h3",{className:"text-base sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex-1 mr-2",children:v.title}),p.jsx("span",{className:`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${m(v.difficulty)} whitespace-nowrap`,children:y(v.difficulty)})]}),p.jsx("p",{className:"text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base",children:v.content}),p.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:v.tags.map((C,L)=>p.jsx("span",{className:"px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm",children:C},L))})]},v.id))})}),p.jsx("footer",{className:"bg-gray-900 text-gray-400 py-6 sm:py-8",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center",children:p.jsx("p",{className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]}):p.jsxs("div",{className:"min-h-screen bg-gray-50",children:[p.jsx(br,{isOpen:u,onToggle:()=>s(!u),onClose:()=>s(!1)}),p.jsx("div",{className:"md:ml-64 pb-20 sm:pb-0",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"分类不存在"}),p.jsx(Me,{to:"/",className:"text-blue-600 hover:text-blue-800 mt-4 inline-block",children:"返回首页"})]})})]})},zm=()=>{const{id:o}=zc(),[u,s]=R.useState(!1),[c,f]=R.useState(!1),m=el.find(k=>k.id===o),y=m?Zi.find(k=>k.id===m.category):void 0,v=m?el.filter(k=>k.category===m.category&&k.id!==m.id).slice(0,3):[],C=k=>{switch(k){case"easy":return"bg-green-100 text-green-800";case"medium":return"bg-yellow-100 text-yellow-800";case"hard":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},L=k=>{switch(k){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return k}};return m?p.jsxs("div",{className:"min-h-screen bg-gray-50",children:[p.jsx(br,{isOpen:c,onToggle:()=>f(!c),onClose:()=>f(!1)}),p.jsxs("div",{className:"md:ml-64 pb-20 sm:pb-0",children:[p.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:[p.jsx("div",{className:"mb-4 sm:mb-6",children:p.jsxs("div",{className:"flex items-center text-xs sm:text-sm text-gray-500 space-x-1 sm:space-x-2",children:[p.jsx(Me,{to:"/",className:"hover:text-blue-600",children:"首页"}),p.jsx("span",{children:"/"}),y&&p.jsxs(p.Fragment,{children:[p.jsx(Me,{to:`/category/${y.id}`,className:"hover:text-blue-600",children:y.name}),p.jsx("span",{children:"/"})]}),p.jsx("span",{className:"text-gray-900",children:"题目详情"})]})}),p.jsx("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100 mb-6 sm:mb-8",children:p.jsxs("div",{className:"p-4 sm:p-8",children:[p.jsx("div",{className:"flex items-start justify-between mb-3 sm:mb-4 flex-wrap gap-2",children:p.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[y&&p.jsxs("span",{className:`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white ${y.color}`,children:[y.icon," ",y.name]}),p.jsx("span",{className:`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${C(m.difficulty)}`,children:L(m.difficulty)})]})}),p.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6",children:m.title}),p.jsx("div",{className:"bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6",children:p.jsx("p",{className:"text-base sm:text-lg text-gray-800 leading-relaxed",children:m.content})}),p.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6",children:m.tags.map((k,N)=>p.jsx("span",{className:"px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm",children:k},N))}),p.jsxs("button",{onClick:()=>s(!u),className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base",children:[p.jsx("span",{children:u?"收起答案":"查看答案"}),p.jsx("svg",{className:`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${u?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]})}),u&&p.jsxs("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100 mb-6 sm:mb-8 overflow-hidden",children:[p.jsx("div",{className:"bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-8 py-3 sm:py-4",children:p.jsxs("h2",{className:"text-lg sm:text-xl font-bold flex items-center",children:[p.jsx("span",{className:"mr-2",children:"💡"})," 参考答案"]})}),p.jsxs("div",{className:"p-4 sm:p-8",children:[p.jsx("div",{className:"mb-6 sm:mb-8",children:p.jsx("p",{className:"text-gray-800 leading-relaxed text-sm sm:text-lg whitespace-pre-wrap",children:m.answer})}),m.codeExample&&p.jsxs("div",{className:"mt-6 sm:mt-8",children:[p.jsxs("h3",{className:"text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center",children:[p.jsx("span",{className:"mr-2",children:"📝"})," 代码示例"]}),p.jsx("div",{className:"bg-gray-900 rounded-lg p-3 sm:p-6 overflow-x-auto",children:p.jsx("pre",{className:"text-green-400 font-mono text-xs sm:text-sm leading-relaxed",children:p.jsx("code",{children:m.codeExample})})})]})]})]}),v.length>0&&p.jsx("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100",children:p.jsxs("div",{className:"p-4 sm:p-8",children:[p.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center",children:[p.jsx("span",{className:"mr-2",children:"📚"})," 相关题目"]}),p.jsx("div",{className:"space-y-2 sm:space-y-4",children:v.map(k=>p.jsx(Me,{to:`/question/${k.id}`,className:"block p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200",children:p.jsxs("div",{className:"flex items-start justify-between",children:[p.jsx("h3",{className:"font-medium text-gray-900 text-sm sm:text-base flex-1 mr-2",children:k.title}),p.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${C(k.difficulty)} whitespace-nowrap`,children:L(k.difficulty)})]})},k.id))})]})}),p.jsx("div",{className:"flex justify-between items-center mt-6 sm:mt-8",children:p.jsxs(Me,{to:`/category/${m.category}`,className:"text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base flex items-center",children:[p.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"返回分类"]})})]}),p.jsx("footer",{className:"bg-gray-900 text-gray-400 py-6 sm:py-8",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center",children:p.jsx("p",{className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]}):p.jsxs("div",{className:"min-h-screen bg-gray-50",children:[p.jsx(br,{isOpen:c,onToggle:()=>f(!c),onClose:()=>f(!1)}),p.jsx("div",{className:"md:ml-64 pb-20 sm:pb-0",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"题目不存在"}),p.jsx(Me,{to:"/",className:"text-blue-600 hover:text-blue-800 mt-4 inline-block",children:"返回首页"})]})})]})};function Um(){return p.jsx(wm,{children:p.jsxs(Xf,{children:[p.jsx(Ji,{path:"/",element:p.jsx(Bm,{})}),p.jsx(Ji,{path:"/category/:id",element:p.jsx(Fm,{})}),p.jsx(Ji,{path:"/question/:id",element:p.jsx(zm,{})})]})})}Xp.createRoot(document.getElementById("root")).render(p.jsx(R.StrictMode,{children:p.jsx(Um,{})}));

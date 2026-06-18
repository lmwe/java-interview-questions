(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))c(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&c(v)}).observe(document,{childList:!0,subtree:!0});function s(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(p){if(p.ep)return;p.ep=!0;const m=s(p);fetch(p.href,m)}})();var Xo={exports:{}},Pr={},Yo={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cc;function Wf(){if(cc)return Z;cc=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),v=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),R=Symbol.iterator;function I(x){return x===null||typeof x!="object"?null:(x=R&&x[R]||x["@@iterator"],typeof x=="function"?x:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,A={};function O(x,j,Y){this.props=x,this.context=j,this.refs=A,this.updater=Y||W}O.prototype.isReactComponent={},O.prototype.setState=function(x,j){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,j,"setState")},O.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function z(){}z.prototype=O.prototype;function q(x,j,Y){this.props=x,this.context=j,this.refs=A,this.updater=Y||W}var X=q.prototype=new z;X.constructor=q,V(X,O.prototype),X.isPureReactComponent=!0;var ne=Array.isArray,oe=Object.prototype.hasOwnProperty,ue={current:null},ge={key:!0,ref:!0,__self:!0,__source:!0};function Ne(x,j,Y){var ee,re={},le=null,ce=null;if(j!=null)for(ee in j.ref!==void 0&&(ce=j.ref),j.key!==void 0&&(le=""+j.key),j)oe.call(j,ee)&&!ge.hasOwnProperty(ee)&&(re[ee]=j[ee]);var ae=arguments.length-2;if(ae===1)re.children=Y;else if(1<ae){for(var me=Array(ae),Ye=0;Ye<ae;Ye++)me[Ye]=arguments[Ye+2];re.children=me}if(x&&x.defaultProps)for(ee in ae=x.defaultProps,ae)re[ee]===void 0&&(re[ee]=ae[ee]);return{$$typeof:o,type:x,key:le,ref:ce,props:re,_owner:ue.current}}function Ue(x,j){return{$$typeof:o,type:x.type,key:j,ref:x.ref,props:x.props,_owner:x._owner}}function Xe(x){return typeof x=="object"&&x!==null&&x.$$typeof===o}function Rt(x){var j={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(Y){return j[Y]})}var rt=/\/+/g;function Ae(x,j){return typeof x=="object"&&x!==null&&x.key!=null?Rt(""+x.key):j.toString(36)}function $e(x,j,Y,ee,re){var le=typeof x;(le==="undefined"||le==="boolean")&&(x=null);var ce=!1;if(x===null)ce=!0;else switch(le){case"string":case"number":ce=!0;break;case"object":switch(x.$$typeof){case o:case u:ce=!0}}if(ce)return ce=x,re=re(ce),x=ee===""?"."+Ae(ce,0):ee,ne(re)?(Y="",x!=null&&(Y=x.replace(rt,"$&/")+"/"),$e(re,j,Y,"",function(Ye){return Ye})):re!=null&&(Xe(re)&&(re=Ue(re,Y+(!re.key||ce&&ce.key===re.key?"":(""+re.key).replace(rt,"$&/")+"/")+x)),j.push(re)),1;if(ce=0,ee=ee===""?".":ee+":",ne(x))for(var ae=0;ae<x.length;ae++){le=x[ae];var me=ee+Ae(le,ae);ce+=$e(le,j,Y,me,re)}else if(me=I(x),typeof me=="function")for(x=me.call(x),ae=0;!(le=x.next()).done;)le=le.value,me=ee+Ae(le,ae++),ce+=$e(le,j,Y,me,re);else if(le==="object")throw j=String(x),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ce}function Re(x,j,Y){if(x==null)return x;var ee=[],re=0;return $e(x,ee,"","",function(le){return j.call(Y,le,re++)}),ee}function We(x){if(x._status===-1){var j=x._result;j=j(),j.then(function(Y){(x._status===0||x._status===-1)&&(x._status=1,x._result=Y)},function(Y){(x._status===0||x._status===-1)&&(x._status=2,x._result=Y)}),x._status===-1&&(x._status=0,x._result=j)}if(x._status===1)return x._result.default;throw x._result}var Se={current:null},D={transition:null},G={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:D,ReactCurrentOwner:ue};function B(){throw Error("act(...) is not supported in production builds of React.")}return Z.Children={map:Re,forEach:function(x,j,Y){Re(x,function(){j.apply(this,arguments)},Y)},count:function(x){var j=0;return Re(x,function(){j++}),j},toArray:function(x){return Re(x,function(j){return j})||[]},only:function(x){if(!Xe(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},Z.Component=O,Z.Fragment=s,Z.Profiler=p,Z.PureComponent=q,Z.StrictMode=c,Z.Suspense=E,Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Z.act=B,Z.cloneElement=function(x,j,Y){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var ee=V({},x.props),re=x.key,le=x.ref,ce=x._owner;if(j!=null){if(j.ref!==void 0&&(le=j.ref,ce=ue.current),j.key!==void 0&&(re=""+j.key),x.type&&x.type.defaultProps)var ae=x.type.defaultProps;for(me in j)oe.call(j,me)&&!ge.hasOwnProperty(me)&&(ee[me]=j[me]===void 0&&ae!==void 0?ae[me]:j[me])}var me=arguments.length-2;if(me===1)ee.children=Y;else if(1<me){ae=Array(me);for(var Ye=0;Ye<me;Ye++)ae[Ye]=arguments[Ye+2];ee.children=ae}return{$$typeof:o,type:x.type,key:re,ref:le,props:ee,_owner:ce}},Z.createContext=function(x){return x={$$typeof:v,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:m,_context:x},x.Consumer=x},Z.createElement=Ne,Z.createFactory=function(x){var j=Ne.bind(null,x);return j.type=x,j},Z.createRef=function(){return{current:null}},Z.forwardRef=function(x){return{$$typeof:y,render:x}},Z.isValidElement=Xe,Z.lazy=function(x){return{$$typeof:k,_payload:{_status:-1,_result:x},_init:We}},Z.memo=function(x,j){return{$$typeof:L,type:x,compare:j===void 0?null:j}},Z.startTransition=function(x){var j=D.transition;D.transition={};try{x()}finally{D.transition=j}},Z.unstable_act=B,Z.useCallback=function(x,j){return Se.current.useCallback(x,j)},Z.useContext=function(x){return Se.current.useContext(x)},Z.useDebugValue=function(){},Z.useDeferredValue=function(x){return Se.current.useDeferredValue(x)},Z.useEffect=function(x,j){return Se.current.useEffect(x,j)},Z.useId=function(){return Se.current.useId()},Z.useImperativeHandle=function(x,j,Y){return Se.current.useImperativeHandle(x,j,Y)},Z.useInsertionEffect=function(x,j){return Se.current.useInsertionEffect(x,j)},Z.useLayoutEffect=function(x,j){return Se.current.useLayoutEffect(x,j)},Z.useMemo=function(x,j){return Se.current.useMemo(x,j)},Z.useReducer=function(x,j,Y){return Se.current.useReducer(x,j,Y)},Z.useRef=function(x){return Se.current.useRef(x)},Z.useState=function(x){return Se.current.useState(x)},Z.useSyncExternalStore=function(x,j,Y){return Se.current.useSyncExternalStore(x,j,Y)},Z.useTransition=function(){return Se.current.useTransition()},Z.version="18.3.1",Z}var dc;function aa(){return dc||(dc=1,Yo.exports=Wf()),Yo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function Vf(){if(fc)return Pr;fc=1;var o=aa(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function v(y,E,L){var k,R={},I=null,W=null;L!==void 0&&(I=""+L),E.key!==void 0&&(I=""+E.key),E.ref!==void 0&&(W=E.ref);for(k in E)c.call(E,k)&&!m.hasOwnProperty(k)&&(R[k]=E[k]);if(y&&y.defaultProps)for(k in E=y.defaultProps,E)R[k]===void 0&&(R[k]=E[k]);return{$$typeof:u,type:y,key:I,ref:W,props:R,_owner:p.current}}return Pr.Fragment=s,Pr.jsx=v,Pr.jsxs=v,Pr}var pc;function Qf(){return pc||(pc=1,Xo.exports=Vf()),Xo.exports}var f=Qf(),N=aa(),Vl={},Zo={exports:{}},qe={},ea={exports:{}},ta={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mc;function Jf(){return mc||(mc=1,(function(o){function u(D,G){var B=D.length;D.push(G);e:for(;0<B;){var x=B-1>>>1,j=D[x];if(0<p(j,G))D[x]=G,D[B]=j,B=x;else break e}}function s(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var G=D[0],B=D.pop();if(B!==G){D[0]=B;e:for(var x=0,j=D.length,Y=j>>>1;x<Y;){var ee=2*(x+1)-1,re=D[ee],le=ee+1,ce=D[le];if(0>p(re,B))le<j&&0>p(ce,re)?(D[x]=ce,D[le]=B,x=le):(D[x]=re,D[ee]=B,x=ee);else if(le<j&&0>p(ce,B))D[x]=ce,D[le]=B,x=le;else break e}}return G}function p(D,G){var B=D.sortIndex-G.sortIndex;return B!==0?B:D.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var v=Date,y=v.now();o.unstable_now=function(){return v.now()-y}}var E=[],L=[],k=1,R=null,I=3,W=!1,V=!1,A=!1,O=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(D){for(var G=s(L);G!==null;){if(G.callback===null)c(L);else if(G.startTime<=D)c(L),G.sortIndex=G.expirationTime,u(E,G);else break;G=s(L)}}function ne(D){if(A=!1,X(D),!V)if(s(E)!==null)V=!0,We(oe);else{var G=s(L);G!==null&&Se(ne,G.startTime-D)}}function oe(D,G){V=!1,A&&(A=!1,z(Ne),Ne=-1),W=!0;var B=I;try{for(X(G),R=s(E);R!==null&&(!(R.expirationTime>G)||D&&!Rt());){var x=R.callback;if(typeof x=="function"){R.callback=null,I=R.priorityLevel;var j=x(R.expirationTime<=G);G=o.unstable_now(),typeof j=="function"?R.callback=j:R===s(E)&&c(E),X(G)}else c(E);R=s(E)}if(R!==null)var Y=!0;else{var ee=s(L);ee!==null&&Se(ne,ee.startTime-G),Y=!1}return Y}finally{R=null,I=B,W=!1}}var ue=!1,ge=null,Ne=-1,Ue=5,Xe=-1;function Rt(){return!(o.unstable_now()-Xe<Ue)}function rt(){if(ge!==null){var D=o.unstable_now();Xe=D;var G=!0;try{G=ge(!0,D)}finally{G?Ae():(ue=!1,ge=null)}}else ue=!1}var Ae;if(typeof q=="function")Ae=function(){q(rt)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Re=$e.port2;$e.port1.onmessage=rt,Ae=function(){Re.postMessage(null)}}else Ae=function(){O(rt,0)};function We(D){ge=D,ue||(ue=!0,Ae())}function Se(D,G){Ne=O(function(){D(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(D){D.callback=null},o.unstable_continueExecution=function(){V||W||(V=!0,We(oe))},o.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ue=0<D?Math.floor(1e3/D):5},o.unstable_getCurrentPriorityLevel=function(){return I},o.unstable_getFirstCallbackNode=function(){return s(E)},o.unstable_next=function(D){switch(I){case 1:case 2:case 3:var G=3;break;default:G=I}var B=I;I=G;try{return D()}finally{I=B}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(D,G){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=I;I=D;try{return G()}finally{I=B}},o.unstable_scheduleCallback=function(D,G,B){var x=o.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?x+B:x):B=x,D){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=B+j,D={id:k++,callback:G,priorityLevel:D,startTime:B,expirationTime:j,sortIndex:-1},B>x?(D.sortIndex=B,u(L,D),s(E)===null&&D===s(L)&&(A?(z(Ne),Ne=-1):A=!0,Se(ne,B-x))):(D.sortIndex=j,u(E,D),V||W||(V=!0,We(oe))),D},o.unstable_shouldYield=Rt,o.unstable_wrapCallback=function(D){var G=I;return function(){var B=I;I=G;try{return D.apply(this,arguments)}finally{I=B}}}})(ta)),ta}var hc;function Gf(){return hc||(hc=1,ea.exports=Jf()),ea.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gc;function Kf(){if(gc)return qe;gc=1;var o=aa(),u=Gf();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c=new Set,p={};function m(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(p[e]=t,e=0;e<t.length;e++)c.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),E=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},R={};function I(e){return E.call(R,e)?!0:E.call(k,e)?!1:L.test(e)?R[e]=!0:(k[e]=!0,!1)}function W(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function V(e,t,n,r){if(t===null||typeof t>"u"||W(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){O[e]=new A(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];O[t]=new A(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){O[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){O[e]=new A(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){O[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){O[e]=new A(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){O[e]=new A(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){O[e]=new A(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){O[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(z,q);O[t]=new A(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(z,q);O[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(z,q);O[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){O[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)}),O.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){O[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var l=O.hasOwnProperty(t)?O[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(V(t,n,l,r)&&(n=null),r||l===null?I(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ne=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),ue=Symbol.for("react.portal"),ge=Symbol.for("react.fragment"),Ne=Symbol.for("react.strict_mode"),Ue=Symbol.for("react.profiler"),Xe=Symbol.for("react.provider"),Rt=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),Ae=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),D=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=D&&e[D]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,x;function j(e){if(x===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);x=t&&t[1]||""}return`
`+x+e}var Y=!1;function ee(e,t){if(!e||Y)return"";Y=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(C){var r=C}Reflect.construct(e,[],t)}else{try{t.call()}catch(C){r=C}e.call(t.prototype)}else{try{throw Error()}catch(C){r=C}e()}}catch(C){if(C&&r&&typeof C.stack=="string"){for(var l=C.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,d=i.length-1;1<=a&&0<=d&&l[a]!==i[d];)d--;for(;1<=a&&0<=d;a--,d--)if(l[a]!==i[d]){if(a!==1||d!==1)do if(a--,d--,0>d||l[a]!==i[d]){var h=`
`+l[a].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=a&&0<=d);break}}}finally{Y=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?j(e):""}function re(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function le(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ge:return"Fragment";case ue:return"Portal";case Ue:return"Profiler";case Ne:return"StrictMode";case Ae:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rt:return(e.displayName||"Context")+".Consumer";case Xe:return(e._context.displayName||"Context")+".Provider";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:le(e.type)||"Memo";case We:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(t);case 8:return t===Ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ye(e){var t=me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){e._valueTracker||(e._valueTracker=Ye(e))}function ga(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ri(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ya(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ae(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function va(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function li(e,t){va(e,t);var n=ae(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ii(e,t.type,n):t.hasOwnProperty("defaultValue")&&ii(e,t.type,ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ii(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function yn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ae(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if($n(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ae(n)}}function wa(e,t){var n=ae(t.value),r=ae(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ea(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ca(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ai(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ca(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var br,ka=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(br=br||document.createElement("div"),br.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=br.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jc=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){Jc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function Na(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function Ra(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Na(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Gc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function si(e,t){if(t){if(Gc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function ui(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ci=null;function di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fi=null,vn=null,xn=null;function La(e){if(e=pr(e)){if(typeof fi!="function")throw Error(s(280));var t=e.stateNode;t&&(t=ol(t),fi(e.stateNode,e.type,t))}}function Pa(e){vn?xn?xn.push(e):xn=[e]:vn=e}function ja(){if(vn){var e=vn,t=xn;if(xn=vn=null,La(e),t)for(e=0;e<t.length;e++)La(t[e])}}function Ta(e,t){return e(t)}function Ma(){}var pi=!1;function _a(e,t,n){if(pi)return e(t,n);pi=!0;try{return Ta(e,t,n)}finally{pi=!1,(vn!==null||xn!==null)&&(Ma(),ja())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var mi=!1;if(y)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{mi=!1}function Kc(e,t,n,r,l,i,a,d,h){var C=Array.prototype.slice.call(arguments,3);try{t.apply(n,C)}catch(T){this.onError(T)}}var Gn=!1,zr=null,Fr=!1,hi=null,qc={onError:function(e){Gn=!0,zr=e}};function Xc(e,t,n,r,l,i,a,d,h){Gn=!1,zr=null,Kc.apply(qc,arguments)}function Yc(e,t,n,r,l,i,a,d,h){if(Xc.apply(this,arguments),Gn){if(Gn){var C=zr;Gn=!1,zr=null}else throw Error(s(198));Fr||(Fr=!0,hi=C)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Oa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ia(e){if(nn(e)!==e)throw Error(s(188))}function Zc(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Ia(l),e;if(i===r)return Ia(l),t;i=i.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,d=l.child;d;){if(d===n){a=!0,n=l,r=i;break}if(d===r){a=!0,r=l,n=i;break}d=d.sibling}if(!a){for(d=i.child;d;){if(d===n){a=!0,n=i,r=l;break}if(d===r){a=!0,r=i,n=l;break}d=d.sibling}if(!a)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Aa(e){return e=Zc(e),e!==null?Da(e):null}function Da(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Da(e);if(t!==null)return t;e=e.sibling}return null}var ba=u.unstable_scheduleCallback,za=u.unstable_cancelCallback,ed=u.unstable_shouldYield,td=u.unstable_requestPaint,Ee=u.unstable_now,nd=u.unstable_getCurrentPriorityLevel,gi=u.unstable_ImmediatePriority,Fa=u.unstable_UserBlockingPriority,Br=u.unstable_NormalPriority,rd=u.unstable_LowPriority,Ba=u.unstable_IdlePriority,Hr=null,St=null;function ld(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Hr,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:ad,id=Math.log,od=Math.LN2;function ad(e){return e>>>=0,e===0?32:31-(id(e)/od|0)|0}var Ur=64,$r=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var d=a&~l;d!==0?r=Kn(d):(i&=a,i!==0&&(r=Kn(i)))}else a=n&~l,a!==0?r=Kn(a):i!==0&&(r=Kn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),l=1<<n,r|=e[n],t&=~l;return r}function sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ud(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-dt(i),d=1<<a,h=l[a];h===-1?((d&n)===0||(d&r)!==0)&&(l[a]=sd(d,t)):h<=t&&(e.expiredLanes|=d),i&=~d}}function yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ha(){var e=Ur;return Ur<<=1,(Ur&4194240)===0&&(Ur=64),e}function vi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-dt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function xi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var se=0;function Ua(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var $a,Si,Wa,Va,Qa,wi=!1,Vr=[],bt=null,zt=null,Ft=null,Xn=new Map,Yn=new Map,Bt=[],dd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ja(e,t){switch(e){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yn.delete(t.pointerId)}}function Zn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=pr(t),t!==null&&Si(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function fd(e,t,n,r,l){switch(t){case"focusin":return bt=Zn(bt,e,t,n,r,l),!0;case"dragenter":return zt=Zn(zt,e,t,n,r,l),!0;case"mouseover":return Ft=Zn(Ft,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Xn.set(i,Zn(Xn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Yn.set(i,Zn(Yn.get(i)||null,e,t,n,r,l)),!0}return!1}function Ga(e){var t=rn(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=Oa(n),t!==null){e.blockedOn=t,Qa(e.priority,function(){Wa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ci=r,n.target.dispatchEvent(r),ci=null}else return t=pr(n),t!==null&&Si(t),e.blockedOn=n,!1;t.shift()}return!0}function Ka(e,t,n){Qr(e)&&n.delete(t)}function pd(){wi=!1,bt!==null&&Qr(bt)&&(bt=null),zt!==null&&Qr(zt)&&(zt=null),Ft!==null&&Qr(Ft)&&(Ft=null),Xn.forEach(Ka),Yn.forEach(Ka)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,wi||(wi=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,pd)))}function tr(e){function t(l){return er(l,e)}if(0<Vr.length){er(Vr[0],e);for(var n=1;n<Vr.length;n++){var r=Vr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(bt!==null&&er(bt,e),zt!==null&&er(zt,e),Ft!==null&&er(Ft,e),Xn.forEach(t),Yn.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Ga(n),n.blockedOn===null&&Bt.shift()}var Sn=ne.ReactCurrentBatchConfig,Jr=!0;function md(e,t,n,r){var l=se,i=Sn.transition;Sn.transition=null;try{se=1,Ei(e,t,n,r)}finally{se=l,Sn.transition=i}}function hd(e,t,n,r){var l=se,i=Sn.transition;Sn.transition=null;try{se=4,Ei(e,t,n,r)}finally{se=l,Sn.transition=i}}function Ei(e,t,n,r){if(Jr){var l=Ci(e,t,n,r);if(l===null)Bi(e,t,r,Gr,n),Ja(e,r);else if(fd(l,e,t,n,r))r.stopPropagation();else if(Ja(e,r),t&4&&-1<dd.indexOf(e)){for(;l!==null;){var i=pr(l);if(i!==null&&$a(i),i=Ci(e,t,n,r),i===null&&Bi(e,t,r,Gr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var Gr=null;function Ci(e,t,n,r){if(Gr=null,e=di(r),e=rn(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Oa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gr=e,null}function qa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nd()){case gi:return 1;case Fa:return 4;case Br:case rd:return 16;case Ba:return 536870912;default:return 16}default:return 16}}var Ht=null,ki=null,Kr=null;function Xa(){if(Kr)return Kr;var e,t=ki,n=t.length,r,l="value"in Ht?Ht.value:Ht.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Kr=l.slice(e,1<r?1-r:void 0)}function qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function Ya(){return!1}function Ze(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xr:Ya,this.isPropagationStopped=Ya,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=Ze(wn),nr=B({},wn,{view:0,detail:0}),gd=Ze(nr),Ri,Li,rr,Yr=B({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Ri=e.screenX-rr.screenX,Li=e.screenY-rr.screenY):Li=Ri=0,rr=e),Ri)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),Za=Ze(Yr),yd=B({},Yr,{dataTransfer:0}),vd=Ze(yd),xd=B({},nr,{relatedTarget:0}),Pi=Ze(xd),Sd=B({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),wd=Ze(Sd),Ed=B({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cd=Ze(Ed),kd=B({},wn,{data:0}),es=Ze(kd),Nd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ld[e])?!!t[e]:!1}function ji(){return Pd}var jd=B({},nr,{key:function(e){if(e.key){var t=Nd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ji,charCode:function(e){return e.type==="keypress"?qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Td=Ze(jd),Md=B({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ts=Ze(Md),_d=B({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ji}),Od=Ze(_d),Id=B({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ad=Ze(Id),Dd=B({},Yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bd=Ze(Dd),zd=[9,13,27,32],Ti=y&&"CompositionEvent"in window,lr=null;y&&"documentMode"in document&&(lr=document.documentMode);var Fd=y&&"TextEvent"in window&&!lr,ns=y&&(!Ti||lr&&8<lr&&11>=lr),rs=" ",ls=!1;function is(e,t){switch(e){case"keyup":return zd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Bd(e,t){switch(e){case"compositionend":return os(t);case"keypress":return t.which!==32?null:(ls=!0,rs);case"textInput":return e=t.data,e===rs&&ls?null:e;default:return null}}function Hd(e,t){if(En)return e==="compositionend"||!Ti&&is(e,t)?(e=Xa(),Kr=ki=Ht=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ns&&t.locale!=="ko"?null:t.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ud[e.type]:t==="textarea"}function ss(e,t,n,r){Pa(r),t=rl(t,"onChange"),0<t.length&&(n=new Ni("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,or=null;function $d(e){Rs(e,0)}function Zr(e){var t=Ln(e);if(ga(t))return e}function Wd(e,t){if(e==="change")return t}var us=!1;if(y){var Mi;if(y){var _i="oninput"in document;if(!_i){var cs=document.createElement("div");cs.setAttribute("oninput","return;"),_i=typeof cs.oninput=="function"}Mi=_i}else Mi=!1;us=Mi&&(!document.documentMode||9<document.documentMode)}function ds(){ir&&(ir.detachEvent("onpropertychange",fs),or=ir=null)}function fs(e){if(e.propertyName==="value"&&Zr(or)){var t=[];ss(t,or,e,di(e)),_a($d,t)}}function Vd(e,t,n){e==="focusin"?(ds(),ir=t,or=n,ir.attachEvent("onpropertychange",fs)):e==="focusout"&&ds()}function Qd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zr(or)}function Jd(e,t){if(e==="click")return Zr(t)}function Gd(e,t){if(e==="input"||e==="change")return Zr(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Kd;function ar(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!E.call(t,l)||!ft(e[l],t[l]))return!1}return!0}function ps(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ms(e,t){var n=ps(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ps(n)}}function hs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gs(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function Oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qd(e){var t=gs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hs(n.ownerDocument.documentElement,n)){if(r!==null&&Oi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ms(n,i);var a=ms(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=y&&"documentMode"in document&&11>=document.documentMode,Cn=null,Ii=null,sr=null,Ai=!1;function ys(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ai||Cn==null||Cn!==Dr(r)||(r=Cn,"selectionStart"in r&&Oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),sr&&ar(sr,r)||(sr=r,r=rl(Ii,"onSelect"),0<r.length&&(t=new Ni("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cn)))}function el(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Di={},vs={};y&&(vs=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function tl(e){if(Di[e])return Di[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vs)return Di[e]=t[n];return e}var xs=tl("animationend"),Ss=tl("animationiteration"),ws=tl("animationstart"),Es=tl("transitionend"),Cs=new Map,ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){Cs.set(e,t),m(t,[e])}for(var bi=0;bi<ks.length;bi++){var zi=ks[bi],Yd=zi.toLowerCase(),Zd=zi[0].toUpperCase()+zi.slice(1);Ut(Yd,"on"+Zd)}Ut(xs,"onAnimationEnd"),Ut(Ss,"onAnimationIteration"),Ut(ws,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(Es,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Ns(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yc(r,t,void 0,e),e.currentTarget=null}function Rs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var d=r[a],h=d.instance,C=d.currentTarget;if(d=d.listener,h!==i&&l.isPropagationStopped())break e;Ns(l,d,C),i=h}else for(a=0;a<r.length;a++){if(d=r[a],h=d.instance,C=d.currentTarget,d=d.listener,h!==i&&l.isPropagationStopped())break e;Ns(l,d,C),i=h}}}if(Fr)throw e=hi,Fr=!1,hi=null,e}function fe(e,t){var n=t[Qi];n===void 0&&(n=t[Qi]=new Set);var r=e+"__bubble";n.has(r)||(Ls(t,e,2,!1),n.add(r))}function Fi(e,t,n){var r=0;t&&(r|=4),Ls(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[nl]){e[nl]=!0,c.forEach(function(n){n!=="selectionchange"&&(ef.has(n)||Fi(n,!1,e),Fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,Fi("selectionchange",!1,t))}}function Ls(e,t,n,r){switch(qa(t)){case 1:var l=md;break;case 4:l=hd;break;default:l=Ei}n=l.bind(null,t,n,e),l=void 0,!mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var d=r.stateNode.containerInfo;if(d===l||d.nodeType===8&&d.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var h=a.tag;if((h===3||h===4)&&(h=a.stateNode.containerInfo,h===l||h.nodeType===8&&h.parentNode===l))return;a=a.return}for(;d!==null;){if(a=rn(d),a===null)return;if(h=a.tag,h===5||h===6){r=i=a;continue e}d=d.parentNode}}r=r.return}_a(function(){var C=i,T=di(n),M=[];e:{var P=Cs.get(e);if(P!==void 0){var b=Ni,H=e;switch(e){case"keypress":if(qr(n)===0)break e;case"keydown":case"keyup":b=Td;break;case"focusin":H="focus",b=Pi;break;case"focusout":H="blur",b=Pi;break;case"beforeblur":case"afterblur":b=Pi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Od;break;case xs:case Ss:case ws:b=wd;break;case Es:b=Ad;break;case"scroll":b=gd;break;case"wheel":b=bd;break;case"copy":case"cut":case"paste":b=Cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ts}var U=(t&4)!==0,Ce=!U&&e==="scroll",S=U?P!==null?P+"Capture":null:P;U=[];for(var g=C,w;g!==null;){w=g;var _=w.stateNode;if(w.tag===5&&_!==null&&(w=_,S!==null&&(_=Qn(g,S),_!=null&&U.push(dr(g,_,w)))),Ce)break;g=g.return}0<U.length&&(P=new b(P,H,null,n,T),M.push({event:P,listeners:U}))}}if((t&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",P&&n!==ci&&(H=n.relatedTarget||n.fromElement)&&(rn(H)||H[Lt]))break e;if((b||P)&&(P=T.window===T?T:(P=T.ownerDocument)?P.defaultView||P.parentWindow:window,b?(H=n.relatedTarget||n.toElement,b=C,H=H?rn(H):null,H!==null&&(Ce=nn(H),H!==Ce||H.tag!==5&&H.tag!==6)&&(H=null)):(b=null,H=C),b!==H)){if(U=Za,_="onMouseLeave",S="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(U=ts,_="onPointerLeave",S="onPointerEnter",g="pointer"),Ce=b==null?P:Ln(b),w=H==null?P:Ln(H),P=new U(_,g+"leave",b,n,T),P.target=Ce,P.relatedTarget=w,_=null,rn(T)===C&&(U=new U(S,g+"enter",H,n,T),U.target=w,U.relatedTarget=Ce,_=U),Ce=_,b&&H)t:{for(U=b,S=H,g=0,w=U;w;w=Nn(w))g++;for(w=0,_=S;_;_=Nn(_))w++;for(;0<g-w;)U=Nn(U),g--;for(;0<w-g;)S=Nn(S),w--;for(;g--;){if(U===S||S!==null&&U===S.alternate)break t;U=Nn(U),S=Nn(S)}U=null}else U=null;b!==null&&Ps(M,P,b,U,!1),H!==null&&Ce!==null&&Ps(M,Ce,H,U,!0)}}e:{if(P=C?Ln(C):window,b=P.nodeName&&P.nodeName.toLowerCase(),b==="select"||b==="input"&&P.type==="file")var $=Wd;else if(as(P))if(us)$=Gd;else{$=Qd;var Q=Vd}else(b=P.nodeName)&&b.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&($=Jd);if($&&($=$(e,C))){ss(M,$,n,T);break e}Q&&Q(e,P,C),e==="focusout"&&(Q=P._wrapperState)&&Q.controlled&&P.type==="number"&&ii(P,"number",P.value)}switch(Q=C?Ln(C):window,e){case"focusin":(as(Q)||Q.contentEditable==="true")&&(Cn=Q,Ii=C,sr=null);break;case"focusout":sr=Ii=Cn=null;break;case"mousedown":Ai=!0;break;case"contextmenu":case"mouseup":case"dragend":Ai=!1,ys(M,n,T);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":ys(M,n,T)}var J;if(Ti)e:{switch(e){case"compositionstart":var K="onCompositionStart";break e;case"compositionend":K="onCompositionEnd";break e;case"compositionupdate":K="onCompositionUpdate";break e}K=void 0}else En?is(e,n)&&(K="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(K="onCompositionStart");K&&(ns&&n.locale!=="ko"&&(En||K!=="onCompositionStart"?K==="onCompositionEnd"&&En&&(J=Xa()):(Ht=T,ki="value"in Ht?Ht.value:Ht.textContent,En=!0)),Q=rl(C,K),0<Q.length&&(K=new es(K,e,null,n,T),M.push({event:K,listeners:Q}),J?K.data=J:(J=os(n),J!==null&&(K.data=J)))),(J=Fd?Bd(e,n):Hd(e,n))&&(C=rl(C,"onBeforeInput"),0<C.length&&(T=new es("onBeforeInput","beforeinput",null,n,T),M.push({event:T,listeners:C}),T.data=J))}Rs(M,t)})}function dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Qn(e,n),i!=null&&r.unshift(dr(e,i,l)),i=Qn(e,t),i!=null&&r.push(dr(e,i,l))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var d=n,h=d.alternate,C=d.stateNode;if(h!==null&&h===r)break;d.tag===5&&C!==null&&(d=C,l?(h=Qn(n,i),h!=null&&a.unshift(dr(n,h,d))):l||(h=Qn(n,i),h!=null&&a.push(dr(n,h,d)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var tf=/\r\n?/g,nf=/\u0000|\uFFFD/g;function js(e){return(typeof e=="string"?e:""+e).replace(tf,`
`).replace(nf,"")}function ll(e,t,n){if(t=js(t),js(e)!==t&&n)throw Error(s(425))}function il(){}var Hi=null,Ui=null;function $i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wi=typeof setTimeout=="function"?setTimeout:void 0,rf=typeof clearTimeout=="function"?clearTimeout:void 0,Ts=typeof Promise=="function"?Promise:void 0,lf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ts<"u"?function(e){return Ts.resolve(null).then(e).catch(of)}:Wi;function of(e){setTimeout(function(){throw e})}function Vi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);tr(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ms(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),wt="__reactFiber$"+Rn,fr="__reactProps$"+Rn,Lt="__reactContainer$"+Rn,Qi="__reactEvents$"+Rn,af="__reactListeners$"+Rn,sf="__reactHandles$"+Rn;function rn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ms(e);e!==null;){if(n=e[wt])return n;e=Ms(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[wt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function ol(e){return e[fr]||null}var Ji=[],Pn=-1;function Wt(e){return{current:e}}function pe(e){0>Pn||(e.current=Ji[Pn],Ji[Pn]=null,Pn--)}function de(e,t){Pn++,Ji[Pn]=e.current,e.current=t}var Vt={},De=Wt(Vt),Ve=Wt(!1),ln=Vt;function jn(e,t){var n=e.type.contextTypes;if(!n)return Vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Qe(e){return e=e.childContextTypes,e!=null}function al(){pe(Ve),pe(De)}function _s(e,t,n){if(De.current!==Vt)throw Error(s(168));de(De,t),de(Ve,n)}function Os(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,ce(e)||"Unknown",l));return B({},n,r)}function sl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vt,ln=De.current,de(De,e),de(Ve,Ve.current),!0}function Is(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Os(e,t,ln),r.__reactInternalMemoizedMergedChildContext=e,pe(Ve),pe(De),de(De,e)):pe(Ve),de(Ve,n)}var Pt=null,ul=!1,Gi=!1;function As(e){Pt===null?Pt=[e]:Pt.push(e)}function uf(e){ul=!0,As(e)}function Qt(){if(!Gi&&Pt!==null){Gi=!0;var e=0,t=se;try{var n=Pt;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Pt=null,ul=!1}catch(l){throw Pt!==null&&(Pt=Pt.slice(e+1)),ba(gi,Qt),l}finally{se=t,Gi=!1}}return null}var Tn=[],Mn=0,cl=null,dl=0,lt=[],it=0,on=null,jt=1,Tt="";function an(e,t){Tn[Mn++]=dl,Tn[Mn++]=cl,cl=e,dl=t}function Ds(e,t,n){lt[it++]=jt,lt[it++]=Tt,lt[it++]=on,on=e;var r=jt;e=Tt;var l=32-dt(r)-1;r&=~(1<<l),n+=1;var i=32-dt(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,jt=1<<32-dt(t)+l|n<<l|r,Tt=i+e}else jt=1<<i|n<<l|r,Tt=e}function Ki(e){e.return!==null&&(an(e,1),Ds(e,1,0))}function qi(e){for(;e===cl;)cl=Tn[--Mn],Tn[Mn]=null,dl=Tn[--Mn],Tn[Mn]=null;for(;e===on;)on=lt[--it],lt[it]=null,Tt=lt[--it],lt[it]=null,jt=lt[--it],lt[it]=null}var et=null,tt=null,he=!1,pt=null;function bs(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,tt=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=on!==null?{id:jt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,et=e,tt=null,!0):!1;default:return!1}}function Xi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yi(e){if(he){var t=tt;if(t){var n=t;if(!zs(e,t)){if(Xi(e))throw Error(s(418));t=$t(n.nextSibling);var r=et;t&&zs(e,t)?bs(r,n):(e.flags=e.flags&-4097|2,he=!1,et=e)}}else{if(Xi(e))throw Error(s(418));e.flags=e.flags&-4097|2,he=!1,et=e}}}function Fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function fl(e){if(e!==et)return!1;if(!he)return Fs(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$i(e.type,e.memoizedProps)),t&&(t=tt)){if(Xi(e))throw Bs(),Error(s(418));for(;t;)bs(e,t),t=$t(t.nextSibling)}if(Fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=et?$t(e.stateNode.nextSibling):null;return!0}function Bs(){for(var e=tt;e;)e=$t(e.nextSibling)}function _n(){tt=et=null,he=!1}function Zi(e){pt===null?pt=[e]:pt.push(e)}var cf=ne.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var d=l.refs;a===null?delete d[i]:d[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function pl(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hs(e){var t=e._init;return t(e._payload)}function Us(e){function t(S,g){if(e){var w=S.deletions;w===null?(S.deletions=[g],S.flags|=16):w.push(g)}}function n(S,g){if(!e)return null;for(;g!==null;)t(S,g),g=g.sibling;return null}function r(S,g){for(S=new Map;g!==null;)g.key!==null?S.set(g.key,g):S.set(g.index,g),g=g.sibling;return S}function l(S,g){return S=en(S,g),S.index=0,S.sibling=null,S}function i(S,g,w){return S.index=w,e?(w=S.alternate,w!==null?(w=w.index,w<g?(S.flags|=2,g):w):(S.flags|=2,g)):(S.flags|=1048576,g)}function a(S){return e&&S.alternate===null&&(S.flags|=2),S}function d(S,g,w,_){return g===null||g.tag!==6?(g=Vo(w,S.mode,_),g.return=S,g):(g=l(g,w),g.return=S,g)}function h(S,g,w,_){var $=w.type;return $===ge?T(S,g,w.props.children,_,w.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===We&&Hs($)===g.type)?(_=l(g,w.props),_.ref=mr(S,g,w),_.return=S,_):(_=bl(w.type,w.key,w.props,null,S.mode,_),_.ref=mr(S,g,w),_.return=S,_)}function C(S,g,w,_){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=Qo(w,S.mode,_),g.return=S,g):(g=l(g,w.children||[]),g.return=S,g)}function T(S,g,w,_,$){return g===null||g.tag!==7?(g=hn(w,S.mode,_,$),g.return=S,g):(g=l(g,w),g.return=S,g)}function M(S,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vo(""+g,S.mode,w),g.return=S,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case oe:return w=bl(g.type,g.key,g.props,null,S.mode,w),w.ref=mr(S,null,g),w.return=S,w;case ue:return g=Qo(g,S.mode,w),g.return=S,g;case We:var _=g._init;return M(S,_(g._payload),w)}if($n(g)||G(g))return g=hn(g,S.mode,w,null),g.return=S,g;pl(S,g)}return null}function P(S,g,w,_){var $=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return $!==null?null:d(S,g,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case oe:return w.key===$?h(S,g,w,_):null;case ue:return w.key===$?C(S,g,w,_):null;case We:return $=w._init,P(S,g,$(w._payload),_)}if($n(w)||G(w))return $!==null?null:T(S,g,w,_,null);pl(S,w)}return null}function b(S,g,w,_,$){if(typeof _=="string"&&_!==""||typeof _=="number")return S=S.get(w)||null,d(g,S,""+_,$);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oe:return S=S.get(_.key===null?w:_.key)||null,h(g,S,_,$);case ue:return S=S.get(_.key===null?w:_.key)||null,C(g,S,_,$);case We:var Q=_._init;return b(S,g,w,Q(_._payload),$)}if($n(_)||G(_))return S=S.get(w)||null,T(g,S,_,$,null);pl(g,_)}return null}function H(S,g,w,_){for(var $=null,Q=null,J=g,K=g=0,Me=null;J!==null&&K<w.length;K++){J.index>K?(Me=J,J=null):Me=J.sibling;var ie=P(S,J,w[K],_);if(ie===null){J===null&&(J=Me);break}e&&J&&ie.alternate===null&&t(S,J),g=i(ie,g,K),Q===null?$=ie:Q.sibling=ie,Q=ie,J=Me}if(K===w.length)return n(S,J),he&&an(S,K),$;if(J===null){for(;K<w.length;K++)J=M(S,w[K],_),J!==null&&(g=i(J,g,K),Q===null?$=J:Q.sibling=J,Q=J);return he&&an(S,K),$}for(J=r(S,J);K<w.length;K++)Me=b(J,S,K,w[K],_),Me!==null&&(e&&Me.alternate!==null&&J.delete(Me.key===null?K:Me.key),g=i(Me,g,K),Q===null?$=Me:Q.sibling=Me,Q=Me);return e&&J.forEach(function(tn){return t(S,tn)}),he&&an(S,K),$}function U(S,g,w,_){var $=G(w);if(typeof $!="function")throw Error(s(150));if(w=$.call(w),w==null)throw Error(s(151));for(var Q=$=null,J=g,K=g=0,Me=null,ie=w.next();J!==null&&!ie.done;K++,ie=w.next()){J.index>K?(Me=J,J=null):Me=J.sibling;var tn=P(S,J,ie.value,_);if(tn===null){J===null&&(J=Me);break}e&&J&&tn.alternate===null&&t(S,J),g=i(tn,g,K),Q===null?$=tn:Q.sibling=tn,Q=tn,J=Me}if(ie.done)return n(S,J),he&&an(S,K),$;if(J===null){for(;!ie.done;K++,ie=w.next())ie=M(S,ie.value,_),ie!==null&&(g=i(ie,g,K),Q===null?$=ie:Q.sibling=ie,Q=ie);return he&&an(S,K),$}for(J=r(S,J);!ie.done;K++,ie=w.next())ie=b(J,S,K,ie.value,_),ie!==null&&(e&&ie.alternate!==null&&J.delete(ie.key===null?K:ie.key),g=i(ie,g,K),Q===null?$=ie:Q.sibling=ie,Q=ie);return e&&J.forEach(function($f){return t(S,$f)}),he&&an(S,K),$}function Ce(S,g,w,_){if(typeof w=="object"&&w!==null&&w.type===ge&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case oe:e:{for(var $=w.key,Q=g;Q!==null;){if(Q.key===$){if($=w.type,$===ge){if(Q.tag===7){n(S,Q.sibling),g=l(Q,w.props.children),g.return=S,S=g;break e}}else if(Q.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===We&&Hs($)===Q.type){n(S,Q.sibling),g=l(Q,w.props),g.ref=mr(S,Q,w),g.return=S,S=g;break e}n(S,Q);break}else t(S,Q);Q=Q.sibling}w.type===ge?(g=hn(w.props.children,S.mode,_,w.key),g.return=S,S=g):(_=bl(w.type,w.key,w.props,null,S.mode,_),_.ref=mr(S,g,w),_.return=S,S=_)}return a(S);case ue:e:{for(Q=w.key;g!==null;){if(g.key===Q)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){n(S,g.sibling),g=l(g,w.children||[]),g.return=S,S=g;break e}else{n(S,g);break}else t(S,g);g=g.sibling}g=Qo(w,S.mode,_),g.return=S,S=g}return a(S);case We:return Q=w._init,Ce(S,g,Q(w._payload),_)}if($n(w))return H(S,g,w,_);if(G(w))return U(S,g,w,_);pl(S,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(n(S,g.sibling),g=l(g,w),g.return=S,S=g):(n(S,g),g=Vo(w,S.mode,_),g.return=S,S=g),a(S)):n(S,g)}return Ce}var On=Us(!0),$s=Us(!1),ml=Wt(null),hl=null,In=null,eo=null;function to(){eo=In=hl=null}function no(e){var t=ml.current;pe(ml),e._currentValue=t}function ro(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){hl=e,eo=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Je=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(eo!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(hl===null)throw Error(s(308));In=e,hl.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var sn=null;function lo(e){sn===null?sn=[e]:sn.push(e)}function Ws(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,lo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(te&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Mt(e,n)}return l=r.interleaved,l===null?(t.next=t,lo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Mt(e,n)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xi(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function yl(e,t,n,r){var l=e.updateQueue;Jt=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var h=d,C=h.next;h.next=null,a===null?i=C:a.next=C,a=h;var T=e.alternate;T!==null&&(T=T.updateQueue,d=T.lastBaseUpdate,d!==a&&(d===null?T.firstBaseUpdate=C:d.next=C,T.lastBaseUpdate=h))}if(i!==null){var M=l.baseState;a=0,T=C=h=null,d=i;do{var P=d.lane,b=d.eventTime;if((r&P)===P){T!==null&&(T=T.next={eventTime:b,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var H=e,U=d;switch(P=t,b=n,U.tag){case 1:if(H=U.payload,typeof H=="function"){M=H.call(b,M,P);break e}M=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=U.payload,P=typeof H=="function"?H.call(b,M,P):H,P==null)break e;M=B({},M,P);break e;case 2:Jt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,P=l.effects,P===null?l.effects=[d]:P.push(d))}else b={eventTime:b,lane:P,tag:d.tag,payload:d.payload,callback:d.callback,next:null},T===null?(C=T=b,h=M):T=T.next=b,a|=P;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;P=d,d=P.next,P.next=null,l.lastBaseUpdate=P,l.shared.pending=null}}while(!0);if(T===null&&(h=M),l.baseState=h,l.firstBaseUpdate=C,l.lastBaseUpdate=T,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);dn|=a,e.lanes=a,e.memoizedState=M}}function Js(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var hr={},Et=Wt(hr),gr=Wt(hr),yr=Wt(hr);function un(e){if(e===hr)throw Error(s(174));return e}function oo(e,t){switch(de(yr,t),de(gr,e),de(Et,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ai(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ai(t,e)}pe(Et),de(Et,t)}function Dn(){pe(Et),pe(gr),pe(yr)}function Gs(e){un(yr.current);var t=un(Et.current),n=ai(t,e.type);t!==n&&(de(gr,e),de(Et,n))}function ao(e){gr.current===e&&(pe(Et),pe(gr))}var ye=Wt(0);function vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var so=[];function uo(){for(var e=0;e<so.length;e++)so[e]._workInProgressVersionPrimary=null;so.length=0}var xl=ne.ReactCurrentDispatcher,co=ne.ReactCurrentBatchConfig,cn=0,ve=null,Le=null,je=null,Sl=!1,vr=!1,xr=0,df=0;function be(){throw Error(s(321))}function fo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function po(e,t,n,r,l,i){if(cn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xl.current=e===null||e.memoizedState===null?hf:gf,e=n(r,l),vr){i=0;do{if(vr=!1,xr=0,25<=i)throw Error(s(301));i+=1,je=Le=null,t.updateQueue=null,xl.current=yf,e=n(r,l)}while(vr)}if(xl.current=Cl,t=Le!==null&&Le.next!==null,cn=0,je=Le=ve=null,Sl=!1,t)throw Error(s(300));return e}function mo(){var e=xr!==0;return xr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ve.memoizedState=je=e:je=je.next=e,je}function at(){if(Le===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=je===null?ve.memoizedState:je.next;if(t!==null)je=t,Le=e;else{if(e===null)throw Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},je===null?ve.memoizedState=je=e:je=je.next=e}return je}function Sr(e,t){return typeof t=="function"?t(e):t}function ho(e){var t=at(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Le,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var d=a=null,h=null,C=i;do{var T=C.lane;if((cn&T)===T)h!==null&&(h=h.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),r=C.hasEagerState?C.eagerState:e(r,C.action);else{var M={lane:T,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};h===null?(d=h=M,a=r):h=h.next=M,ve.lanes|=T,dn|=T}C=C.next}while(C!==null&&C!==i);h===null?a=r:h.next=d,ft(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ve.lanes|=i,dn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function go(e){var t=at(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);ft(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ks(){}function qs(e,t){var n=ve,r=at(),l=t(),i=!ft(r.memoizedState,l);if(i&&(r.memoizedState=l,Je=!0),r=r.queue,yo(Zs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,wr(9,Ys.bind(null,n,r,l,t),void 0,null),Te===null)throw Error(s(349));(cn&30)!==0||Xs(n,t,l)}return l}function Xs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ys(e,t,n,r){t.value=n,t.getSnapshot=r,eu(t)&&tu(e)}function Zs(e,t,n){return n(function(){eu(t)&&tu(e)})}function eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function tu(e){var t=Mt(e,1);t!==null&&yt(t,e,1,-1)}function nu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t.queue=e,e=e.dispatch=mf.bind(null,ve,e),[t.memoizedState,e]}function wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ru(){return at().memoizedState}function wl(e,t,n,r){var l=Ct();ve.flags|=e,l.memoizedState=wr(1|t,n,void 0,r===void 0?null:r)}function El(e,t,n,r){var l=at();r=r===void 0?null:r;var i=void 0;if(Le!==null){var a=Le.memoizedState;if(i=a.destroy,r!==null&&fo(r,a.deps)){l.memoizedState=wr(t,n,i,r);return}}ve.flags|=e,l.memoizedState=wr(1|t,n,i,r)}function lu(e,t){return wl(8390656,8,e,t)}function yo(e,t){return El(2048,8,e,t)}function iu(e,t){return El(4,2,e,t)}function ou(e,t){return El(4,4,e,t)}function au(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function su(e,t,n){return n=n!=null?n.concat([e]):null,El(4,4,au.bind(null,t,e),n)}function vo(){}function uu(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cu(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function du(e,t,n){return(cn&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n):(ft(n,t)||(n=Ha(),ve.lanes|=n,dn|=n,e.baseState=!0),t)}function ff(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=co.transition;co.transition={};try{e(!1),t()}finally{se=n,co.transition=r}}function fu(){return at().memoizedState}function pf(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pu(e))mu(t,n);else if(n=Ws(e,t,n,r),n!==null){var l=He();yt(n,e,r,l),hu(n,t,r)}}function mf(e,t,n){var r=Yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pu(e))mu(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,d=i(a,n);if(l.hasEagerState=!0,l.eagerState=d,ft(d,a)){var h=t.interleaved;h===null?(l.next=l,lo(t)):(l.next=h.next,h.next=l),t.interleaved=l;return}}catch{}finally{}n=Ws(e,t,l,r),n!==null&&(l=He(),yt(n,e,r,l),hu(n,t,r))}}function pu(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function mu(e,t){vr=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xi(e,n)}}var Cl={readContext:ot,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},hf={readContext:ot,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wl(4194308,4,au.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wl(4194308,4,e,t)},useInsertionEffect:function(e,t){return wl(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pf.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:vo,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=ff.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,l=Ct();if(he){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Te===null)throw Error(s(349));(cn&30)!==0||Xs(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,lu(Zs.bind(null,r,i,e),[e]),r.flags|=2048,wr(9,Ys.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ct(),t=Te.identifierPrefix;if(he){var n=Tt,r=jt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=df++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gf={readContext:ot,useCallback:uu,useContext:ot,useEffect:yo,useImperativeHandle:su,useInsertionEffect:iu,useLayoutEffect:ou,useMemo:cu,useReducer:ho,useRef:ru,useState:function(){return ho(Sr)},useDebugValue:vo,useDeferredValue:function(e){var t=at();return du(t,Le.memoizedState,e)},useTransition:function(){var e=ho(Sr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Ks,useSyncExternalStore:qs,useId:fu,unstable_isNewReconciler:!1},yf={readContext:ot,useCallback:uu,useContext:ot,useEffect:yo,useImperativeHandle:su,useInsertionEffect:iu,useLayoutEffect:ou,useMemo:cu,useReducer:go,useRef:ru,useState:function(){return go(Sr)},useDebugValue:vo,useDeferredValue:function(e){var t=at();return Le===null?t.memoizedState=e:du(t,Le.memoizedState,e)},useTransition:function(){var e=go(Sr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Ks,useSyncExternalStore:qs,useId:fu,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var kl={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),l=Yt(e),i=_t(r,l);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,l),t!==null&&(yt(t,e,l,r),gl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),l=Yt(e),i=_t(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,l),t!==null&&(yt(t,e,l,r),gl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=Yt(e),l=_t(n,r);l.tag=2,t!=null&&(l.callback=t),t=Gt(e,l,r),t!==null&&(yt(t,e,r,n),gl(t,e,r))}};function gu(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ar(n,r)||!ar(l,i):!0}function yu(e,t,n){var r=!1,l=Vt,i=t.contextType;return typeof i=="object"&&i!==null?i=ot(i):(l=Qe(t)?ln:De.current,r=t.contextTypes,i=(r=r!=null)?jn(e,l):Vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=kl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&kl.enqueueReplaceState(t,t.state,null)}function So(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},io(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ot(i):(i=Qe(t)?ln:De.current,l.context=jn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&kl.enqueueReplaceState(l,l.state,null),yl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function bn(e,t){try{var n="",r=t;do n+=re(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function wo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Eo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function xu(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ml||(Ml=!0,bo=r),Eo(e,t)},n}function Su(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Eo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Eo(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=_f.bind(null,e,t,n),t.then(e,e))}function Eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var xf=ne.ReactCurrentOwner,Je=!1;function Be(e,t,n,r){t.child=e===null?$s(t,null,n,r):On(t,e.child,n,r)}function ku(e,t,n,r,l){n=n.render;var i=t.ref;return An(t,l),r=po(e,t,n,r,i,l),n=mo(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ot(e,t,l)):(he&&n&&Ki(t),t.flags|=1,Be(e,t,r,l),t.child)}function Nu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Wo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ru(e,t,i,r,l)):(e=bl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ar,n(a,r)&&e.ref===t.ref)return Ot(e,t,l)}return t.flags|=1,e=en(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ru(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(ar(i,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Ot(e,t,l)}return Co(e,t,n,r,l)}function Lu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Fn,nt),nt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(Fn,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,de(Fn,nt),nt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,de(Fn,nt),nt|=r;return Be(e,t,l,n),t.child}function Pu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Co(e,t,n,r,l){var i=Qe(n)?ln:De.current;return i=jn(t,i),An(t,l),n=po(e,t,n,r,i,l),r=mo(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ot(e,t,l)):(he&&r&&Ki(t),t.flags|=1,Be(e,t,n,l),t.child)}function ju(e,t,n,r,l){if(Qe(n)){var i=!0;sl(t)}else i=!1;if(An(t,l),t.stateNode===null)Rl(e,t),yu(t,n,r),So(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,d=t.memoizedProps;a.props=d;var h=a.context,C=n.contextType;typeof C=="object"&&C!==null?C=ot(C):(C=Qe(n)?ln:De.current,C=jn(t,C));var T=n.getDerivedStateFromProps,M=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function";M||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==r||h!==C)&&vu(t,a,r,C),Jt=!1;var P=t.memoizedState;a.state=P,yl(t,r,a,l),h=t.memoizedState,d!==r||P!==h||Ve.current||Jt?(typeof T=="function"&&(xo(t,n,T,r),h=t.memoizedState),(d=Jt||gu(t,n,d,r,P,h,C))?(M||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=C,r=d):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vs(e,t),d=t.memoizedProps,C=t.type===t.elementType?d:mt(t.type,d),a.props=C,M=t.pendingProps,P=a.context,h=n.contextType,typeof h=="object"&&h!==null?h=ot(h):(h=Qe(n)?ln:De.current,h=jn(t,h));var b=n.getDerivedStateFromProps;(T=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(d!==M||P!==h)&&vu(t,a,r,h),Jt=!1,P=t.memoizedState,a.state=P,yl(t,r,a,l);var H=t.memoizedState;d!==M||P!==H||Ve.current||Jt?(typeof b=="function"&&(xo(t,n,b,r),H=t.memoizedState),(C=Jt||gu(t,n,C,r,P,H,h)||!1)?(T||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,H,h),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,H,h)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=H),a.props=r,a.state=H,a.context=h,r=C):(typeof a.componentDidUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&P===e.memoizedState||(t.flags|=1024),r=!1)}return ko(e,t,n,r,i,l)}function ko(e,t,n,r,l,i){Pu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Is(t,n,!1),Ot(e,t,i);r=t.stateNode,xf.current=t;var d=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=On(t,e.child,null,i),t.child=On(t,null,d,i)):Be(e,t,d,i),t.memoizedState=r.state,l&&Is(t,n,!0),t.child}function Tu(e){var t=e.stateNode;t.pendingContext?_s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_s(e,t.context,!1),oo(e,t.containerInfo)}function Mu(e,t,n,r,l){return _n(),Zi(l),t.flags|=256,Be(e,t,n,r),t.child}var No={dehydrated:null,treeContext:null,retryLane:0};function Ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function _u(e,t,n){var r=t.pendingProps,l=ye.current,i=!1,a=(t.flags&128)!==0,d;if((d=a)||(d=e!==null&&e.memoizedState===null?!1:(l&2)!==0),d?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),de(ye,l&1),e===null)return Yi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=zl(a,r,0,null),e=hn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ro(n),t.memoizedState=No,e):Lo(t,a));if(l=e.memoizedState,l!==null&&(d=l.dehydrated,d!==null))return Sf(e,t,a,r,d,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,d=l.sibling;var h={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=en(l,h),r.subtreeFlags=l.subtreeFlags&14680064),d!==null?i=en(d,i):(i=hn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ro(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=No,r}return i=e.child,e=i.sibling,r=en(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Lo(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nl(e,t,n,r){return r!==null&&Zi(r),On(t,e.child,null,n),e=Lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=wo(Error(s(422))),Nl(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=zl({mode:"visible",children:r.children},l,0,null),i=hn(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&On(t,e.child,null,a),t.child.memoizedState=Ro(a),t.memoizedState=No,i);if((t.mode&1)===0)return Nl(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var d=r.dgst;return r=d,i=Error(s(419)),r=wo(i,r,void 0),Nl(e,t,a,r)}if(d=(a&e.childLanes)!==0,Je||d){if(r=Te,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Mt(e,l),yt(r,e,l,-1))}return $o(),r=wo(Error(s(421))),Nl(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Of.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,tt=$t(l.nextSibling),et=t,he=!0,pt=null,e!==null&&(lt[it++]=jt,lt[it++]=Tt,lt[it++]=on,jt=e.id,Tt=e.overflow,on=t),t=Lo(t,r.children),t.flags|=4096,t)}function Ou(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ro(e.return,t,n)}function Po(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Iu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Be(e,t,r.children,n),r=ye.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ou(e,n,t);else if(e.tag===19)Ou(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ye,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&vl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Po(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&vl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Po(t,!0,n,null,i);break;case"together":Po(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Rl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=en(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=en(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wf(e,t,n){switch(t.tag){case 3:Tu(t),_n();break;case 5:Gs(t);break;case 1:Qe(t.type)&&sl(t);break;case 4:oo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;de(ml,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ye,ye.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?_u(e,t,n):(de(ye,ye.current&1),e=Ot(e,t,n),e!==null?e.sibling:null);de(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Iu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),de(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,Lu(e,t,n)}return Ot(e,t,n)}var Au,jo,Du,bu;Au=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},jo=function(){},Du=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,un(Et.current);var i=null;switch(n){case"input":l=ri(e,l),r=ri(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=oi(e,l),r=oi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=il)}si(n,r);var a;n=null;for(C in l)if(!r.hasOwnProperty(C)&&l.hasOwnProperty(C)&&l[C]!=null)if(C==="style"){var d=l[C];for(a in d)d.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(p.hasOwnProperty(C)?i||(i=[]):(i=i||[]).push(C,null));for(C in r){var h=r[C];if(d=l!=null?l[C]:void 0,r.hasOwnProperty(C)&&h!==d&&(h!=null||d!=null))if(C==="style")if(d){for(a in d)!d.hasOwnProperty(a)||h&&h.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in h)h.hasOwnProperty(a)&&d[a]!==h[a]&&(n||(n={}),n[a]=h[a])}else n||(i||(i=[]),i.push(C,n)),n=h;else C==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,d=d?d.__html:void 0,h!=null&&d!==h&&(i=i||[]).push(C,h)):C==="children"?typeof h!="string"&&typeof h!="number"||(i=i||[]).push(C,""+h):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(p.hasOwnProperty(C)?(h!=null&&C==="onScroll"&&fe("scroll",e),i||d===h||(i=[])):(i=i||[]).push(C,h))}n&&(i=i||[]).push("style",n);var C=i;(t.updateQueue=C)&&(t.flags|=4)}},bu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Er(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ef(e,t,n){var r=t.pendingProps;switch(qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Qe(t.type)&&al(),ze(t),null;case 3:return r=t.stateNode,Dn(),pe(Ve),pe(De),uo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(Bo(pt),pt=null))),jo(e,t),ze(t),null;case 5:ao(t);var l=un(yr.current);if(n=t.type,e!==null&&t.stateNode!=null)Du(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(e=un(Et.current),fl(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[fr]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(l=0;l<ur.length;l++)fe(ur[l],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":ya(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":Sa(r,i),fe("invalid",r)}si(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var d=i[a];a==="children"?typeof d=="string"?r.textContent!==d&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,d,e),l=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(i.suppressHydrationWarning!==!0&&ll(r.textContent,d,e),l=["children",""+d]):p.hasOwnProperty(a)&&d!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":Ar(r),xa(r,i,!0);break;case"textarea":Ar(r),Ea(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=il)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ca(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wt]=t,e[fr]=r,Au(e,t,!1,!1),t.stateNode=e;e:{switch(a=ui(n,r),n){case"dialog":fe("cancel",e),fe("close",e),l=r;break;case"iframe":case"object":case"embed":fe("load",e),l=r;break;case"video":case"audio":for(l=0;l<ur.length;l++)fe(ur[l],e);l=r;break;case"source":fe("error",e),l=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),l=r;break;case"details":fe("toggle",e),l=r;break;case"input":ya(e,r),l=ri(e,r),fe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Sa(e,r),l=oi(e,r),fe("invalid",e);break;default:l=r}si(n,l),d=l;for(i in d)if(d.hasOwnProperty(i)){var h=d[i];i==="style"?Ra(e,h):i==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ka(e,h)):i==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Wn(e,h):typeof h=="number"&&Wn(e,""+h):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(p.hasOwnProperty(i)?h!=null&&i==="onScroll"&&fe("scroll",e):h!=null&&X(e,i,h,a))}switch(n){case"input":Ar(e),xa(e,r,!1);break;case"textarea":Ar(e),Ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ae(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?yn(e,!!r.multiple,i,!1):r.defaultValue!=null&&yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)bu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=un(yr.current),un(Et.current),fl(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==n)&&(e=et,e!==null))switch(e.tag){case 3:ll(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return ze(t),null;case 13:if(pe(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&tt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Bs(),_n(),t.flags|=98560,i=!1;else if(i=fl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));i[wt]=t}else _n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else pt!==null&&(Bo(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ye.current&1)!==0?Pe===0&&(Pe=3):$o())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Dn(),jo(e,t),e===null&&cr(t.stateNode.containerInfo),ze(t),null;case 10:return no(t.type._context),ze(t),null;case 17:return Qe(t.type)&&al(),ze(t),null;case 19:if(pe(ye),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Er(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=vl(e),a!==null){for(t.flags|=128,Er(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ye,ye.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ee()>Bn&&(t.flags|=128,r=!0,Er(i,!1),t.lanes=4194304)}else{if(!r)if(e=vl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!he)return ze(t),null}else 2*Ee()-i.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,Er(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ee(),t.sibling=null,n=ye.current,de(ye,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Uo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(nt&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Cf(e,t){switch(qi(t),t.tag){case 1:return Qe(t.type)&&al(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),pe(Ve),pe(De),uo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ao(t),null;case 13:if(pe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ye),null;case 4:return Dn(),null;case 10:return no(t.type._context),null;case 22:case 23:return Uo(),null;case 24:return null;default:return null}}var Ll=!1,Fe=!1,kf=typeof WeakSet=="function"?WeakSet:Set,F=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function To(e,t,n){try{n()}catch(r){we(e,t,r)}}var zu=!1;function Nf(e,t){if(Hi=Jr,e=gs(),Oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,d=-1,h=-1,C=0,T=0,M=e,P=null;t:for(;;){for(var b;M!==n||l!==0&&M.nodeType!==3||(d=a+l),M!==i||r!==0&&M.nodeType!==3||(h=a+r),M.nodeType===3&&(a+=M.nodeValue.length),(b=M.firstChild)!==null;)P=M,M=b;for(;;){if(M===e)break t;if(P===n&&++C===l&&(d=a),P===i&&++T===r&&(h=a),(b=M.nextSibling)!==null)break;M=P,P=M.parentNode}M=b}n=d===-1||h===-1?null:{start:d,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ui={focusedElem:e,selectionRange:n},Jr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var H=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var U=H.memoizedProps,Ce=H.memoizedState,S=t.stateNode,g=S.getSnapshotBeforeUpdate(t.elementType===t.type?U:mt(t.type,U),Ce);S.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(_){we(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return H=zu,zu=!1,H}function Cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&To(t,n,i)}l=l.next}while(l!==r)}}function Pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fu(e){var t=e.alternate;t!==null&&(e.alternate=null,Fu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[fr],delete t[Qi],delete t[af],delete t[sf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function Hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=il));else if(r!==4&&(e=e.child,e!==null))for(_o(e,t,n),e=e.sibling;e!==null;)_o(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var Oe=null,ht=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Uu(e,t,n),n=n.sibling}function Uu(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Hr,n)}catch{}switch(n.tag){case 5:Fe||zn(n,t);case 6:var r=Oe,l=ht;Oe=null,Kt(e,t,n),Oe=r,ht=l,Oe!==null&&(ht?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(ht?(e=Oe,n=n.stateNode,e.nodeType===8?Vi(e.parentNode,n):e.nodeType===1&&Vi(e,n),tr(e)):Vi(Oe,n.stateNode));break;case 4:r=Oe,l=ht,Oe=n.stateNode.containerInfo,ht=!0,Kt(e,t,n),Oe=r,ht=l;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&To(n,t,a),l=l.next}while(l!==r)}Kt(e,t,n);break;case 1:if(!Fe&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){we(n,t,d)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,Kt(e,t,n),Fe=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function $u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kf),t.forEach(function(r){var l=If.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,d=a;e:for(;d!==null;){switch(d.tag){case 5:Oe=d.stateNode,ht=!1;break e;case 3:Oe=d.stateNode.containerInfo,ht=!0;break e;case 4:Oe=d.stateNode.containerInfo,ht=!0;break e}d=d.return}if(Oe===null)throw Error(s(160));Uu(i,a,l),Oe=null,ht=!1;var h=l.alternate;h!==null&&(h.return=null),l.return=null}catch(C){we(l,t,C)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),kt(e),r&4){try{Cr(3,e,e.return),Pl(3,e)}catch(U){we(e,e.return,U)}try{Cr(5,e,e.return)}catch(U){we(e,e.return,U)}}break;case 1:gt(t,e),kt(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(gt(t,e),kt(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var l=e.stateNode;try{Wn(l,"")}catch(U){we(e,e.return,U)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,d=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{d==="input"&&i.type==="radio"&&i.name!=null&&va(l,i),ui(d,a);var C=ui(d,i);for(a=0;a<h.length;a+=2){var T=h[a],M=h[a+1];T==="style"?Ra(l,M):T==="dangerouslySetInnerHTML"?ka(l,M):T==="children"?Wn(l,M):X(l,T,M,C)}switch(d){case"input":li(l,i);break;case"textarea":wa(l,i);break;case"select":var P=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?yn(l,!!i.multiple,b,!1):P!==!!i.multiple&&(i.defaultValue!=null?yn(l,!!i.multiple,i.defaultValue,!0):yn(l,!!i.multiple,i.multiple?[]:"",!1))}l[fr]=i}catch(U){we(e,e.return,U)}}break;case 6:if(gt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(U){we(e,e.return,U)}}break;case 3:if(gt(t,e),kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tr(t.containerInfo)}catch(U){we(e,e.return,U)}break;case 4:gt(t,e),kt(e);break;case 13:gt(t,e),kt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Do=Ee())),r&4&&$u(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(C=Fe)||T,gt(t,e),Fe=C):gt(t,e),kt(e),r&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!T&&(e.mode&1)!==0)for(F=e,T=e.child;T!==null;){for(M=F=T;F!==null;){switch(P=F,b=P.child,P.tag){case 0:case 11:case 14:case 15:Cr(4,P,P.return);break;case 1:zn(P,P.return);var H=P.stateNode;if(typeof H.componentWillUnmount=="function"){r=P,n=P.return;try{t=r,H.props=t.memoizedProps,H.state=t.memoizedState,H.componentWillUnmount()}catch(U){we(r,n,U)}}break;case 5:zn(P,P.return);break;case 22:if(P.memoizedState!==null){Ju(M);continue}}b!==null?(b.return=P,F=b):Ju(M)}T=T.sibling}e:for(T=null,M=e;;){if(M.tag===5){if(T===null){T=M;try{l=M.stateNode,C?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(d=M.stateNode,h=M.memoizedProps.style,a=h!=null&&h.hasOwnProperty("display")?h.display:null,d.style.display=Na("display",a))}catch(U){we(e,e.return,U)}}}else if(M.tag===6){if(T===null)try{M.stateNode.nodeValue=C?"":M.memoizedProps}catch(U){we(e,e.return,U)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===e)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===e)break e;for(;M.sibling===null;){if(M.return===null||M.return===e)break e;T===M&&(T=null),M=M.return}T===M&&(T=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:gt(t,e),kt(e),r&4&&$u(e);break;case 21:break;default:gt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wn(l,""),r.flags&=-33);var i=Hu(e);Oo(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,d=Hu(e);_o(e,d,a);break;default:throw Error(s(161))}}catch(h){we(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rf(e,t,n){F=e,Vu(e)}function Vu(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var l=F,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Ll;if(!a){var d=l.alternate,h=d!==null&&d.memoizedState!==null||Fe;d=Ll;var C=Fe;if(Ll=a,(Fe=h)&&!C)for(F=l;F!==null;)a=F,h=a.child,a.tag===22&&a.memoizedState!==null?Gu(l):h!==null?(h.return=a,F=h):Gu(l);for(;i!==null;)F=i,Vu(i),i=i.sibling;F=l,Ll=d,Fe=C}Qu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,F=i):Qu(e)}}function Qu(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Fe||Pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Js(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Js(t,a,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var C=t.alternate;if(C!==null){var T=C.memoizedState;if(T!==null){var M=T.dehydrated;M!==null&&tr(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Fe||t.flags&512&&Mo(t)}catch(P){we(t,t.return,P)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Ju(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Gu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pl(4,t)}catch(h){we(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(h){we(t,l,h)}}var i=t.return;try{Mo(t)}catch(h){we(t,i,h)}break;case 5:var a=t.return;try{Mo(t)}catch(h){we(t,a,h)}}}catch(h){we(t,t.return,h)}if(t===e){F=null;break}var d=t.sibling;if(d!==null){d.return=t.return,F=d;break}F=t.return}}var Lf=Math.ceil,jl=ne.ReactCurrentDispatcher,Io=ne.ReactCurrentOwner,st=ne.ReactCurrentBatchConfig,te=0,Te=null,ke=null,Ie=0,nt=0,Fn=Wt(0),Pe=0,kr=null,dn=0,Tl=0,Ao=0,Nr=null,Ge=null,Do=0,Bn=1/0,It=null,Ml=!1,bo=null,qt=null,_l=!1,Xt=null,Ol=0,Rr=0,zo=null,Il=-1,Al=0;function He(){return(te&6)!==0?Ee():Il!==-1?Il:Il=Ee()}function Yt(e){return(e.mode&1)===0?1:(te&2)!==0&&Ie!==0?Ie&-Ie:cf.transition!==null?(Al===0&&(Al=Ha()),Al):(e=se,e!==0||(e=window.event,e=e===void 0?16:qa(e.type)),e)}function yt(e,t,n,r){if(50<Rr)throw Rr=0,zo=null,Error(s(185));qn(e,n,r),((te&2)===0||e!==Te)&&(e===Te&&((te&2)===0&&(Tl|=n),Pe===4&&Zt(e,Ie)),Ke(e,r),n===1&&te===0&&(t.mode&1)===0&&(Bn=Ee()+500,ul&&Qt()))}function Ke(e,t){var n=e.callbackNode;ud(e,t);var r=Wr(e,e===Te?Ie:0);if(r===0)n!==null&&za(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&za(n),t===1)e.tag===0?uf(qu.bind(null,e)):As(qu.bind(null,e)),lf(function(){(te&6)===0&&Qt()}),n=null;else{switch(Ua(r)){case 1:n=gi;break;case 4:n=Fa;break;case 16:n=Br;break;case 536870912:n=Ba;break;default:n=Br}n=lc(n,Ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ku(e,t){if(Il=-1,Al=0,(te&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Hn()&&e.callbackNode!==n)return null;var r=Wr(e,e===Te?Ie:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Dl(e,r);else{t=r;var l=te;te|=2;var i=Yu();(Te!==e||Ie!==t)&&(It=null,Bn=Ee()+500,pn(e,t));do try{Tf();break}catch(d){Xu(e,d)}while(!0);to(),jl.current=i,te=l,ke!==null?t=0:(Te=null,Ie=0,t=Pe)}if(t!==0){if(t===2&&(l=yi(e),l!==0&&(r=l,t=Fo(e,l))),t===1)throw n=kr,pn(e,0),Zt(e,r),Ke(e,Ee()),n;if(t===6)Zt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Pf(l)&&(t=Dl(e,r),t===2&&(i=yi(e),i!==0&&(r=i,t=Fo(e,i))),t===1))throw n=kr,pn(e,0),Zt(e,r),Ke(e,Ee()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:mn(e,Ge,It);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Do+500-Ee(),10<t)){if(Wr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Wi(mn.bind(null,e,Ge,It),t);break}mn(e,Ge,It);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-dt(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lf(r/1960))-r,10<r){e.timeoutHandle=Wi(mn.bind(null,e,Ge,It),r);break}mn(e,Ge,It);break;case 5:mn(e,Ge,It);break;default:throw Error(s(329))}}}return Ke(e,Ee()),e.callbackNode===n?Ku.bind(null,e):null}function Fo(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(pn(e,t).flags|=256),e=Dl(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Bo(t)),e}function Bo(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function Pf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!ft(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Ao,t&=~Tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if((te&6)!==0)throw Error(s(327));Hn();var t=Wr(e,0);if((t&1)===0)return Ke(e,Ee()),null;var n=Dl(e,t);if(e.tag!==0&&n===2){var r=yi(e);r!==0&&(t=r,n=Fo(e,r))}if(n===1)throw n=kr,pn(e,0),Zt(e,t),Ke(e,Ee()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Ge,It),Ke(e,Ee()),null}function Ho(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(Bn=Ee()+500,ul&&Qt())}}function fn(e){Xt!==null&&Xt.tag===0&&(te&6)===0&&Hn();var t=te;te|=1;var n=st.transition,r=se;try{if(st.transition=null,se=1,e)return e()}finally{se=r,st.transition=n,te=t,(te&6)===0&&Qt()}}function Uo(){nt=Fn.current,pe(Fn)}function pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rf(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(qi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&al();break;case 3:Dn(),pe(Ve),pe(De),uo();break;case 5:ao(r);break;case 4:Dn();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:no(r.type._context);break;case 22:case 23:Uo()}n=n.return}if(Te=e,ke=e=en(e.current,null),Ie=nt=t,Pe=0,kr=null,Ao=Tl=dn=0,Ge=Nr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}sn=null}return e}function Xu(e,t){do{var n=ke;try{if(to(),xl.current=Cl,Sl){for(var r=ve.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Sl=!1}if(cn=0,je=Le=ve=null,vr=!1,xr=0,Io.current=null,n===null||n.return===null){Pe=1,kr=t,ke=null;break}e:{var i=e,a=n.return,d=n,h=t;if(t=Ie,d.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var C=h,T=d,M=T.tag;if((T.mode&1)===0&&(M===0||M===11||M===15)){var P=T.alternate;P?(T.updateQueue=P.updateQueue,T.memoizedState=P.memoizedState,T.lanes=P.lanes):(T.updateQueue=null,T.memoizedState=null)}var b=Eu(a);if(b!==null){b.flags&=-257,Cu(b,a,d,i,t),b.mode&1&&wu(i,C,t),t=b,h=C;var H=t.updateQueue;if(H===null){var U=new Set;U.add(h),t.updateQueue=U}else H.add(h);break e}else{if((t&1)===0){wu(i,C,t),$o();break e}h=Error(s(426))}}else if(he&&d.mode&1){var Ce=Eu(a);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),Cu(Ce,a,d,i,t),Zi(bn(h,d));break e}}i=h=bn(h,d),Pe!==4&&(Pe=2),Nr===null?Nr=[i]:Nr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var S=xu(i,h,t);Qs(i,S);break e;case 1:d=h;var g=i.type,w=i.stateNode;if((i.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(qt===null||!qt.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var _=Su(i,d,t);Qs(i,_);break e}}i=i.return}while(i!==null)}ec(n)}catch($){t=$,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Yu(){var e=jl.current;return jl.current=Cl,e===null?Cl:e}function $o(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Te===null||(dn&268435455)===0&&(Tl&268435455)===0||Zt(Te,Ie)}function Dl(e,t){var n=te;te|=2;var r=Yu();(Te!==e||Ie!==t)&&(It=null,pn(e,t));do try{jf();break}catch(l){Xu(e,l)}while(!0);if(to(),te=n,jl.current=r,ke!==null)throw Error(s(261));return Te=null,Ie=0,Pe}function jf(){for(;ke!==null;)Zu(ke)}function Tf(){for(;ke!==null&&!ed();)Zu(ke)}function Zu(e){var t=rc(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?ec(e):ke=t,Io.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Ef(n,t,nt),n!==null){ke=n;return}}else{if(n=Cf(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Pe===0&&(Pe=5)}function mn(e,t,n){var r=se,l=st.transition;try{st.transition=null,se=1,Mf(e,t,n,r)}finally{st.transition=l,se=r}return null}function Mf(e,t,n,r){do Hn();while(Xt!==null);if((te&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(cd(e,i),e===Te&&(ke=Te=null,Ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||_l||(_l=!0,lc(Br,function(){return Hn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=st.transition,st.transition=null;var a=se;se=1;var d=te;te|=4,Io.current=null,Nf(e,n),Wu(n,e),qd(Ui),Jr=!!Hi,Ui=Hi=null,e.current=n,Rf(n),td(),te=d,se=a,st.transition=i}else e.current=n;if(_l&&(_l=!1,Xt=e,Ol=l),i=e.pendingLanes,i===0&&(qt=null),ld(n.stateNode),Ke(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ml)throw Ml=!1,e=bo,bo=null,e;return(Ol&1)!==0&&e.tag!==0&&Hn(),i=e.pendingLanes,(i&1)!==0?e===zo?Rr++:(Rr=0,zo=e):Rr=0,Qt(),null}function Hn(){if(Xt!==null){var e=Ua(Ol),t=st.transition,n=se;try{if(st.transition=null,se=16>e?16:e,Xt===null)var r=!1;else{if(e=Xt,Xt=null,Ol=0,(te&6)!==0)throw Error(s(331));var l=te;for(te|=4,F=e.current;F!==null;){var i=F,a=i.child;if((F.flags&16)!==0){var d=i.deletions;if(d!==null){for(var h=0;h<d.length;h++){var C=d[h];for(F=C;F!==null;){var T=F;switch(T.tag){case 0:case 11:case 15:Cr(8,T,i)}var M=T.child;if(M!==null)M.return=T,F=M;else for(;F!==null;){T=F;var P=T.sibling,b=T.return;if(Fu(T),T===C){F=null;break}if(P!==null){P.return=b,F=P;break}F=b}}}var H=i.alternate;if(H!==null){var U=H.child;if(U!==null){H.child=null;do{var Ce=U.sibling;U.sibling=null,U=Ce}while(U!==null)}}F=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,F=a;else e:for(;F!==null;){if(i=F,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Cr(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,F=S;break e}F=i.return}}var g=e.current;for(F=g;F!==null;){a=F;var w=a.child;if((a.subtreeFlags&2064)!==0&&w!==null)w.return=a,F=w;else e:for(a=g;F!==null;){if(d=F,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Pl(9,d)}}catch($){we(d,d.return,$)}if(d===a){F=null;break e}var _=d.sibling;if(_!==null){_.return=d.return,F=_;break e}F=d.return}}if(te=l,Qt(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Hr,e)}catch{}r=!0}return r}finally{se=n,st.transition=t}}return!1}function tc(e,t,n){t=bn(n,t),t=xu(e,t,1),e=Gt(e,t,1),t=He(),e!==null&&(qn(e,1,t),Ke(e,t))}function we(e,t,n){if(e.tag===3)tc(e,e,n);else for(;t!==null;){if(t.tag===3){tc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=bn(n,e),e=Su(t,e,1),t=Gt(t,e,1),e=He(),t!==null&&(qn(t,1,e),Ke(t,e));break}}t=t.return}}function _f(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Te===e&&(Ie&n)===n&&(Pe===4||Pe===3&&(Ie&130023424)===Ie&&500>Ee()-Do?pn(e,0):Ao|=n),Ke(e,t)}function nc(e,t){t===0&&((e.mode&1)===0?t=1:(t=$r,$r<<=1,($r&130023424)===0&&($r=4194304)));var n=He();e=Mt(e,t),e!==null&&(qn(e,t,n),Ke(e,n))}function Of(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),nc(e,n)}function If(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),nc(e,n)}var rc;rc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Je=!1,wf(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,he&&(t.flags&1048576)!==0&&Ds(t,dl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Rl(e,t),e=t.pendingProps;var l=jn(t,De.current);An(t,n),l=po(null,t,r,e,l,n);var i=mo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,sl(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,io(t),l.updater=kl,t.stateNode=l,l._reactInternals=t,So(t,r,e,n),t=ko(null,t,r,!0,i,n)):(t.tag=0,he&&i&&Ki(t),Be(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Rl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Df(r),e=mt(r,e),l){case 0:t=Co(null,t,r,e,n);break e;case 1:t=ju(null,t,r,e,n);break e;case 11:t=ku(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,mt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),Co(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),ju(e,t,r,l,n);case 3:e:{if(Tu(t),e===null)throw Error(s(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Vs(e,t),yl(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=bn(Error(s(423)),t),t=Mu(e,t,r,n,l);break e}else if(r!==l){l=bn(Error(s(424)),t),t=Mu(e,t,r,n,l);break e}else for(tt=$t(t.stateNode.containerInfo.firstChild),et=t,he=!0,pt=null,n=$s(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===l){t=Ot(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Gs(t),e===null&&Yi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,$i(r,l)?a=null:i!==null&&$i(r,i)&&(t.flags|=32),Pu(e,t),Be(e,t,a,n),t.child;case 6:return e===null&&Yi(t),null;case 13:return _u(e,t,n);case 4:return oo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=On(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),ku(e,t,r,l,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,de(ml,r._currentValue),r._currentValue=a,i!==null)if(ft(i.value,a)){if(i.children===l.children&&!Ve.current){t=Ot(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var d=i.dependencies;if(d!==null){a=i.child;for(var h=d.firstContext;h!==null;){if(h.context===r){if(i.tag===1){h=_t(-1,n&-n),h.tag=2;var C=i.updateQueue;if(C!==null){C=C.shared;var T=C.pending;T===null?h.next=h:(h.next=T.next,T.next=h),C.pending=h}}i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),ro(i.return,n,t),d.lanes|=n;break}h=h.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(s(341));a.lanes|=n,d=a.alternate,d!==null&&(d.lanes|=n),ro(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Be(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,An(t,n),l=ot(l),r=r(l),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,l=mt(r,t.pendingProps),l=mt(r.type,l),Nu(e,t,r,l,n);case 15:return Ru(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),Rl(e,t),t.tag=1,Qe(r)?(e=!0,sl(t)):e=!1,An(t,n),yu(t,r,l),So(t,r,l,n),ko(null,t,r,!0,e,n);case 19:return Iu(e,t,n);case 22:return Lu(e,t,n)}throw Error(s(156,t.tag))};function lc(e,t){return ba(e,t)}function Af(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,r){return new Af(e,t,n,r)}function Wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Df(e){if(typeof e=="function")return Wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rt)return 11;if(e===Re)return 14}return 2}function en(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bl(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Wo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ge:return hn(n.children,l,i,t);case Ne:a=8,l|=8;break;case Ue:return e=ut(12,n,t,l|2),e.elementType=Ue,e.lanes=i,e;case Ae:return e=ut(13,n,t,l),e.elementType=Ae,e.lanes=i,e;case $e:return e=ut(19,n,t,l),e.elementType=$e,e.lanes=i,e;case Se:return zl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xe:a=10;break e;case Rt:a=9;break e;case rt:a=11;break e;case Re:a=14;break e;case We:a=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=ut(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function hn(e,t,n,r){return e=ut(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=ut(22,e,r,t),e.elementType=Se,e.lanes=n,e.stateNode={isHidden:!1},e}function Vo(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function bf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Jo(e,t,n,r,l,i,a,d,h){return e=new bf(e,t,n,d,h),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ut(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},io(i),e}function zf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ue,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return Vt;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(Qe(n))return Os(e,n,t)}return t}function oc(e,t,n,r,l,i,a,d,h){return e=Jo(n,r,!0,e,l,i,a,d,h),e.context=ic(null),n=e.current,r=He(),l=Yt(n),i=_t(r,l),i.callback=t??null,Gt(n,i,l),e.current.lanes=l,qn(e,l,r),Ke(e,r),e}function Fl(e,t,n,r){var l=t.current,i=He(),a=Yt(l);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(l,t,a),e!==null&&(yt(e,l,a,i),gl(e,l,a)),a}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Go(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function Ff(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ko(e){this._internalRoot=e}Hl.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Fl(e,t,null,null)},Hl.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Fl(null,e,null,null)}),t[Lt]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Va();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Ga(e)}};function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function Bf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var C=Bl(a);i.call(C)}}var a=oc(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=a,e[Lt]=a.current,cr(e.nodeType===8?e.parentNode:e),fn(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var d=r;r=function(){var C=Bl(h);d.call(C)}}var h=Jo(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=h,e[Lt]=h.current,cr(e.nodeType===8?e.parentNode:e),fn(function(){Fl(t,h,n,r)}),h}function $l(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var d=l;l=function(){var h=Bl(a);d.call(h)}}Fl(t,a,e,l)}else a=Bf(n,t,e,l,r);return Bl(a)}$a=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kn(t.pendingLanes);n!==0&&(xi(t,n|1),Ke(t,Ee()),(te&6)===0&&(Bn=Ee()+500,Qt()))}break;case 13:fn(function(){var r=Mt(e,1);if(r!==null){var l=He();yt(r,e,1,l)}}),Go(e,1)}},Si=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=He();yt(t,e,134217728,n)}Go(e,134217728)}},Wa=function(e){if(e.tag===13){var t=Yt(e),n=Mt(e,t);if(n!==null){var r=He();yt(n,e,t,r)}Go(e,t)}},Va=function(){return se},Qa=function(e,t){var n=se;try{return se=e,t()}finally{se=n}},fi=function(e,t,n){switch(t){case"input":if(li(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ol(r);if(!l)throw Error(s(90));ga(r),li(r,l)}}}break;case"textarea":wa(e,n);break;case"select":t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}},Ta=Ho,Ma=fn;var Hf={usingClientEntryPoint:!1,Events:[pr,Ln,ol,Pa,ja,Ho]},Lr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uf={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Aa(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Ff,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Hr=Wl.inject(Uf),St=Wl}catch{}}return qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hf,qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qo(t))throw Error(s(200));return zf(e,t,null,n)},qe.createRoot=function(e,t){if(!qo(e))throw Error(s(299));var n=!1,r="",l=sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Jo(e,1,!1,null,null,n,!1,r,l),e[Lt]=t.current,cr(e.nodeType===8?e.parentNode:e),new Ko(t)},qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Aa(t),e=e===null?null:e.stateNode,e},qe.flushSync=function(e){return fn(e)},qe.hydrate=function(e,t,n){if(!Ul(t))throw Error(s(200));return $l(null,e,t,!0,n)},qe.hydrateRoot=function(e,t,n){if(!qo(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=sc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=oc(t,null,e,1,n??null,l,!1,i,a),e[Lt]=t.current,cr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Hl(t)},qe.render=function(e,t,n){if(!Ul(t))throw Error(s(200));return $l(null,e,t,!1,n)},qe.unmountComponentAtNode=function(e){if(!Ul(e))throw Error(s(40));return e._reactRootContainer?(fn(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},qe.unstable_batchedUpdates=Ho,qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ul(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return $l(e,t,n,!1,r)},qe.version="18.3.1-next-f1338f8080-20240426",qe}var yc;function qf(){if(yc)return Zo.exports;yc=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Zo.exports=Kf(),Zo.exports}var vc;function Xf(){if(vc)return Vl;vc=1;var o=qf();return Vl.createRoot=o.createRoot,Vl.hydrateRoot=o.hydrateRoot,Vl}var Yf=Xf();/**
 * react-router v7.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xc="popstate";function Sc(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function Zf(o={}){function u(p,m){let{pathname:v="/",search:y="",hash:E=""}=gn(p.location.hash.substring(1));return!v.startsWith("/")&&!v.startsWith(".")&&(v="/"+v),ia("",{pathname:v,search:y,hash:E},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function s(p,m){let v=p.document.querySelector("base"),y="";if(v&&v.getAttribute("href")){let E=p.location.href,L=E.indexOf("#");y=L===-1?E:E.slice(0,L)}return y+"#"+(typeof m=="string"?m:Tr(m))}function c(p,m){xt(p.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(m)})`)}return tp(u,s,c,o)}function xe(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function xt(o,u){if(!o){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function ep(){return Math.random().toString(36).substring(2,10)}function wc(o,u){return{usr:o.state,key:o.key,idx:u,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function ia(o,u,s=null,c,p){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof u=="string"?gn(u):u,state:s,key:u&&u.key||c||ep(),mask:p}}function Tr({pathname:o="/",search:u="",hash:s=""}){return u&&u!=="?"&&(o+=u.charAt(0)==="?"?u:"?"+u),s&&s!=="#"&&(o+=s.charAt(0)==="#"?s:"#"+s),o}function gn(o){let u={};if(o){let s=o.indexOf("#");s>=0&&(u.hash=o.substring(s),o=o.substring(0,s));let c=o.indexOf("?");c>=0&&(u.search=o.substring(c),o=o.substring(0,c)),o&&(u.pathname=o)}return u}function tp(o,u,s,c={}){let{window:p=document.defaultView,v5Compat:m=!1}=c,v=p.history,y="POP",E=null,L=k();L==null&&(L=0,v.replaceState({...v.state,idx:L},""));function k(){return(v.state||{idx:null}).idx}function R(){y="POP";let O=k(),z=O==null?null:O-L;L=O,E&&E({action:y,location:A.location,delta:z})}function I(O,z){y="PUSH";let q=Sc(O)?O:ia(A.location,O,z);s&&s(q,O),L=k()+1;let X=wc(q,L),ne=A.createHref(q.mask||q);try{v.pushState(X,"",ne)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;p.location.assign(ne)}m&&E&&E({action:y,location:A.location,delta:1})}function W(O,z){y="REPLACE";let q=Sc(O)?O:ia(A.location,O,z);s&&s(q,O),L=k();let X=wc(q,L),ne=A.createHref(q.mask||q);v.replaceState(X,"",ne),m&&E&&E({action:y,location:A.location,delta:0})}function V(O){return np(O)}let A={get action(){return y},get location(){return o(p,v)},listen(O){if(E)throw new Error("A history only accepts one active listener");return p.addEventListener(xc,R),E=O,()=>{p.removeEventListener(xc,R),E=null}},createHref(O){return u(p,O)},createURL:V,encodeLocation(O){let z=V(O);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:I,replace:W,go(O){return v.go(O)}};return A}function np(o,u=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),xe(s,"No window.location.(origin|href) available to create URL");let c=typeof o=="string"?o:Tr(o);return c=c.replace(/ $/,"%20"),!u&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function Lc(o,u,s="/"){return rp(o,u,s,!1)}function rp(o,u,s,c,p){let m=typeof u=="string"?gn(u):u,v=At(m.pathname||"/",s);if(v==null)return null;let y=lp(o),E=null,L=gp(v);for(let k=0;E==null&&k<y.length;++k)E=mp(y[k],L,c);return E}function lp(o){let u=Pc(o);return ip(u),u}function Pc(o,u=[],s=[],c="",p=!1){let m=(v,y,E=p,L)=>{let k={relativePath:L===void 0?v.path||"":L,caseSensitive:v.caseSensitive===!0,childrenIndex:y,route:v};if(k.relativePath.startsWith("/")){if(!k.relativePath.startsWith(c)&&E)return;xe(k.relativePath.startsWith(c),`Absolute route path "${k.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),k.relativePath=k.relativePath.slice(c.length)}let R=vt([c,k.relativePath]),I=s.concat(k);v.children&&v.children.length>0&&(xe(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),Pc(v.children,u,I,R,E)),!(v.path==null&&!v.index)&&u.push({path:R,score:fp(R,v.index),routesMeta:I})};return o.forEach((v,y)=>{var E;if(v.path===""||!((E=v.path)!=null&&E.includes("?")))m(v,y);else for(let L of jc(v.path))m(v,y,!0,L)}),u}function jc(o){let u=o.split("/");if(u.length===0)return[];let[s,...c]=u,p=s.endsWith("?"),m=s.replace(/\?$/,"");if(c.length===0)return p?[m,""]:[m];let v=jc(c.join("/")),y=[];return y.push(...v.map(E=>E===""?m:[m,E].join("/"))),p&&y.push(...v),y.map(E=>o.startsWith("/")&&E===""?"/":E)}function ip(o){o.sort((u,s)=>u.score!==s.score?s.score-u.score:pp(u.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var op=/^:[\w-]+$/,ap=3,sp=2,up=1,cp=10,dp=-2,Ec=o=>o==="*";function fp(o,u){let s=o.split("/"),c=s.length;return s.some(Ec)&&(c+=dp),u&&(c+=sp),s.filter(p=>!Ec(p)).reduce((p,m)=>p+(op.test(m)?ap:m===""?up:cp),c)}function pp(o,u){return o.length===u.length&&o.slice(0,-1).every((c,p)=>c===u[p])?o[o.length-1]-u[u.length-1]:0}function mp(o,u,s=!1){let{routesMeta:c}=o,p={},m="/",v=[];for(let y=0;y<c.length;++y){let E=c[y],L=y===c.length-1,k=m==="/"?u:u.slice(m.length)||"/",R=Xl({path:E.relativePath,caseSensitive:E.caseSensitive,end:L},k),I=E.route;if(!R&&L&&s&&!c[c.length-1].route.index&&(R=Xl({path:E.relativePath,caseSensitive:E.caseSensitive,end:!1},k)),!R)return null;Object.assign(p,R.params),v.push({params:p,pathname:vt([m,R.pathname]),pathnameBase:Sp(vt([m,R.pathnameBase])),route:I}),R.pathnameBase!=="/"&&(m=vt([m,R.pathnameBase]))}return v}function Xl(o,u){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[s,c]=hp(o.path,o.caseSensitive,o.end),p=u.match(s);if(!p)return null;let m=p[0],v=m.replace(/(.)\/+$/,"$1"),y=p.slice(1);return{params:c.reduce((L,{paramName:k,isOptional:R},I)=>{if(k==="*"){let V=y[I]||"";v=m.slice(0,m.length-V.length).replace(/(.)\/+$/,"$1")}const W=y[I];return R&&!W?L[k]=void 0:L[k]=(W||"").replace(/%2F/g,"/"),L},{}),pathname:m,pathnameBase:v,pattern:o}}function hp(o,u=!1,s=!0){xt(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let c=[],p="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,y,E,L,k)=>{if(c.push({paramName:y,isOptional:E!=null}),E){let R=k.charAt(L+v.length);return R&&R!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(c.push({paramName:"*"}),p+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":o!==""&&o!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),c]}function gp(o){try{return o.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return xt(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),o}}function At(o,u){if(u==="/")return o;if(!o.toLowerCase().startsWith(u.toLowerCase()))return null;let s=u.endsWith("/")?u.length-1:u.length,c=o.charAt(s);return c&&c!=="/"?null:o.slice(s)||"/"}var yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function vp(o,u="/"){let{pathname:s,search:c="",hash:p=""}=typeof o=="string"?gn(o):o,m;return s?(s=Mc(s),s.startsWith("/")?m=Cc(s.substring(1),"/"):m=Cc(s,u)):m=u,{pathname:m,search:wp(c),hash:Ep(p)}}function Cc(o,u){let s=Yl(u).split("/");return o.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function na(o,u,s,c){return`Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xp(o){return o.filter((u,s)=>s===0||u.route.path&&u.route.path.length>0)}function Tc(o){let u=xp(o);return u.map((s,c)=>c===u.length-1?s.pathname:s.pathnameBase)}function sa(o,u,s,c=!1){let p;typeof o=="string"?p=gn(o):(p={...o},xe(!p.pathname||!p.pathname.includes("?"),na("?","pathname","search",p)),xe(!p.pathname||!p.pathname.includes("#"),na("#","pathname","hash",p)),xe(!p.search||!p.search.includes("#"),na("#","search","hash",p)));let m=o===""||p.pathname==="",v=m?"/":p.pathname,y;if(v==null)y=s;else{let R=u.length-1;if(!c&&v.startsWith("..")){let I=v.split("/");for(;I[0]==="..";)I.shift(),R-=1;p.pathname=I.join("/")}y=R>=0?u[R]:"/"}let E=vp(p,y),L=v&&v!=="/"&&v.endsWith("/"),k=(m||v===".")&&s.endsWith("/");return!E.pathname.endsWith("/")&&(L||k)&&(E.pathname+="/"),E}var Mc=o=>o.replace(/\/\/+/g,"/"),vt=o=>Mc(o.join("/")),Yl=o=>o.replace(/\/+$/,""),Sp=o=>Yl(o).replace(/^\/*/,"/"),wp=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Ep=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,Cp=class{constructor(o,u,s,c=!1){this.status=o,this.statusText=u||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function kp(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Np(o){let u=o.map(s=>s.route.path).filter(Boolean);return vt(u)||"/"}var _c=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Oc(o,u){let s=o;if(typeof s!="string"||!yp.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let c=s,p=!1;if(_c)try{let m=new URL(window.location.href),v=s.startsWith("//")?new URL(m.protocol+s):new URL(s),y=At(v.pathname,u);v.origin===m.origin&&y!=null?s=y+v.search+v.hash:p=!0}catch{xt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:p,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ic=["POST","PUT","PATCH","DELETE"];new Set(Ic);var Rp=["GET",...Ic];new Set(Rp);var Un=N.createContext(null);Un.displayName="DataRouter";var ti=N.createContext(null);ti.displayName="DataRouterState";var Ac=N.createContext(!1);function Lp(){return N.useContext(Ac)}var Dc=N.createContext({isTransitioning:!1});Dc.displayName="ViewTransition";var Pp=N.createContext(new Map);Pp.displayName="Fetchers";var jp=N.createContext(null);jp.displayName="Await";var ct=N.createContext(null);ct.displayName="Navigation";var _r=N.createContext(null);_r.displayName="Location";var Nt=N.createContext({outlet:null,matches:[],isDataRoute:!1});Nt.displayName="Route";var ua=N.createContext(null);ua.displayName="RouteError";var bc="REACT_ROUTER_ERROR",Tp="REDIRECT",Mp="ROUTE_ERROR_RESPONSE";function _p(o){if(o.startsWith(`${bc}:${Tp}:{`))try{let u=JSON.parse(o.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function Op(o){if(o.startsWith(`${bc}:${Mp}:{`))try{let u=JSON.parse(o.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new Cp(u.status,u.statusText,u.data)}catch{}}function Ip(o,{relative:u}={}){xe(Or(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=N.useContext(ct),{hash:p,pathname:m,search:v}=Ir(o,{relative:u}),y=m;return s!=="/"&&(y=m==="/"?s:vt([s,m])),c.createHref({pathname:y,search:v,hash:p})}function Or(){return N.useContext(_r)!=null}function Dt(){return xe(Or(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(_r).location}var zc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fc(o){N.useContext(ct).static||N.useLayoutEffect(o)}function Ap(){let{isDataRoute:o}=N.useContext(Nt);return o?Gp():Dp()}function Dp(){xe(Or(),"useNavigate() may be used only in the context of a <Router> component.");let o=N.useContext(Un),{basename:u,navigator:s}=N.useContext(ct),{matches:c}=N.useContext(Nt),{pathname:p}=Dt(),m=JSON.stringify(Tc(c)),v=N.useRef(!1);return Fc(()=>{v.current=!0}),N.useCallback((E,L={})=>{if(xt(v.current,zc),!v.current)return;if(typeof E=="number"){s.go(E);return}let k=sa(E,JSON.parse(m),p,L.relative==="path");o==null&&u!=="/"&&(k.pathname=k.pathname==="/"?u:vt([u,k.pathname])),(L.replace?s.replace:s.push)(k,L.state,L)},[u,s,m,p,o])}N.createContext(null);function Bc(){let{matches:o}=N.useContext(Nt),u=o[o.length-1];return(u==null?void 0:u.params)??{}}function Ir(o,{relative:u}={}){let{matches:s}=N.useContext(Nt),{pathname:c}=Dt(),p=JSON.stringify(Tc(s));return N.useMemo(()=>sa(o,JSON.parse(p),c,u==="path"),[o,p,c,u])}function bp(o,u){return Hc(o,u)}function Hc(o,u,s){var O;xe(Or(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=N.useContext(ct),{matches:p}=N.useContext(Nt),m=p[p.length-1],v=m?m.params:{},y=m?m.pathname:"/",E=m?m.pathnameBase:"/",L=m&&m.route;{let z=L&&L.path||"";$c(y,!L||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let k=Dt(),R;if(u){let z=typeof u=="string"?gn(u):u;xe(E==="/"||((O=z.pathname)==null?void 0:O.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${z.pathname}" was given in the \`location\` prop.`),R=z}else R=k;let I=R.pathname||"/",W=I;if(E!=="/"){let z=E.replace(/^\//,"").split("/");W="/"+I.replace(/^\//,"").split("/").slice(z.length).join("/")}let V=s&&s.state.matches.length?s.state.matches.map(z=>Object.assign(z,{route:s.manifest[z.route.id]||z.route})):Lc(o,{pathname:W});xt(L||V!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),xt(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=Up(V&&V.map(z=>Object.assign({},z,{params:Object.assign({},v,z.params),pathname:vt([E,c.encodeLocation?c.encodeLocation(z.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?E:vt([E,c.encodeLocation?c.encodeLocation(z.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),p,s);return u&&A?N.createElement(_r.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...R},navigationType:"POP"}},A):A}function zp(){let o=Jp(),u=kp(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),s=o instanceof Error?o.stack:null,c="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:c},m={padding:"2px 4px",backgroundColor:c},v=null;return console.error("Error handled by React Router default ErrorBoundary:",o),v=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:m},"ErrorBoundary")," or"," ",N.createElement("code",{style:m},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},u),s?N.createElement("pre",{style:p},s):null,v)}var Fp=N.createElement(zp,null),Uc=class extends N.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,u){return u.location!==o.location||u.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:u.error,location:u.location,revalidation:o.revalidation||u.revalidation}}componentDidCatch(o,u){this.props.onError?this.props.onError(o,u):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const s=Op(o.digest);s&&(o=s)}let u=o!==void 0?N.createElement(Nt.Provider,{value:this.props.routeContext},N.createElement(ua.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?N.createElement(Bp,{error:o},u):u}};Uc.contextType=Ac;var ra=new WeakMap;function Bp({children:o,error:u}){let{basename:s}=N.useContext(ct);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let c=_p(u.digest);if(c){let p=ra.get(u);if(p)throw p;let m=Oc(c.location,s);if(_c&&!ra.get(u))if(m.isExternal||c.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const v=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:c.replace}));throw ra.set(u,v),v}return N.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return o}function Hp({routeContext:o,match:u,children:s}){let c=N.useContext(Un);return c&&c.static&&c.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=u.route.id),N.createElement(Nt.Provider,{value:o},s)}function Up(o,u=[],s){let c=s==null?void 0:s.state;if(o==null){if(!c)return null;if(c.errors)o=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)o=c.matches;else return null}let p=o,m=c==null?void 0:c.errors;if(m!=null){let k=p.findIndex(R=>R.route.id&&(m==null?void 0:m[R.route.id])!==void 0);xe(k>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,k+1))}let v=!1,y=-1;if(s&&c){v=c.renderFallback;for(let k=0;k<p.length;k++){let R=p[k];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(y=k),R.route.id){let{loaderData:I,errors:W}=c,V=R.route.loader&&!I.hasOwnProperty(R.route.id)&&(!W||W[R.route.id]===void 0);if(R.route.lazy||V){s.isStatic&&(v=!0),y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}}let E=s==null?void 0:s.onError,L=c&&E?(k,R)=>{var I,W;E(k,{location:c.location,params:((W=(I=c.matches)==null?void 0:I[0])==null?void 0:W.params)??{},pattern:Np(c.matches),errorInfo:R})}:void 0;return p.reduceRight((k,R,I)=>{let W,V=!1,A=null,O=null;c&&(W=m&&R.route.id?m[R.route.id]:void 0,A=R.route.errorElement||Fp,v&&(y<0&&I===0?($c("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),V=!0,O=null):y===I&&(V=!0,O=R.route.hydrateFallbackElement||null)));let z=u.concat(p.slice(0,I+1)),q=()=>{let X;return W?X=A:V?X=O:R.route.Component?X=N.createElement(R.route.Component,null):R.route.element?X=R.route.element:X=k,N.createElement(Hp,{match:R,routeContext:{outlet:k,matches:z,isDataRoute:c!=null},children:X})};return c&&(R.route.ErrorBoundary||R.route.errorElement||I===0)?N.createElement(Uc,{location:c.location,revalidation:c.revalidation,component:A,error:W,children:q(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:L}):q()},null)}function ca(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $p(o){let u=N.useContext(Un);return xe(u,ca(o)),u}function Wp(o){let u=N.useContext(ti);return xe(u,ca(o)),u}function Vp(o){let u=N.useContext(Nt);return xe(u,ca(o)),u}function da(o){let u=Vp(o),s=u.matches[u.matches.length-1];return xe(s.route.id,`${o} can only be used on routes that contain a unique "id"`),s.route.id}function Qp(){return da("useRouteId")}function Jp(){var c;let o=N.useContext(ua),u=Wp("useRouteError"),s=da("useRouteError");return o!==void 0?o:(c=u.errors)==null?void 0:c[s]}function Gp(){let{router:o}=$p("useNavigate"),u=da("useNavigate"),s=N.useRef(!1);return Fc(()=>{s.current=!0}),N.useCallback(async(p,m={})=>{xt(s.current,zc),s.current&&(typeof p=="number"?await o.navigate(p):await o.navigate(p,{fromRouteId:u,...m}))},[o,u])}var kc={};function $c(o,u,s){!u&&!kc[o]&&(kc[o]=!0,xt(!1,s))}N.memo(Kp);function Kp({routes:o,manifest:u,future:s,state:c,isStatic:p,onError:m}){return Hc(o,void 0,{manifest:u,state:c,isStatic:p,onError:m})}function Gl(o){xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qp({basename:o="/",children:u=null,location:s,navigationType:c="POP",navigator:p,static:m=!1,useTransitions:v}){xe(!Or(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=o.replace(/^\/*/,"/"),E=N.useMemo(()=>({basename:y,navigator:p,static:m,useTransitions:v,future:{}}),[y,p,m,v]);typeof s=="string"&&(s=gn(s));let{pathname:L="/",search:k="",hash:R="",state:I=null,key:W="default",mask:V}=s,A=N.useMemo(()=>{let O=At(L,y);return O==null?null:{location:{pathname:O,search:k,hash:R,state:I,key:W,mask:V},navigationType:c}},[y,L,k,R,I,W,c,V]);return xt(A!=null,`<Router basename="${y}"> is not able to match the URL "${L}${k}${R}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:N.createElement(ct.Provider,{value:E},N.createElement(_r.Provider,{children:u,value:A}))}function Xp({children:o,location:u}){return bp(oa(o),u)}function oa(o,u=[]){let s=[];return N.Children.forEach(o,(c,p)=>{if(!N.isValidElement(c))return;let m=[...u,p];if(c.type===N.Fragment){s.push.apply(s,oa(c.props.children,m));return}xe(c.type===Gl,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let v={id:c.props.id||m.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(v.children=oa(c.props.children,m)),s.push(v)}),s}var Kl="get",ql="application/x-www-form-urlencoded";function ni(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Yp(o){return ni(o)&&o.tagName.toLowerCase()==="button"}function Zp(o){return ni(o)&&o.tagName.toLowerCase()==="form"}function em(o){return ni(o)&&o.tagName.toLowerCase()==="input"}function tm(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function nm(o,u){return o.button===0&&(!u||u==="_self")&&!tm(o)}var Ql=null;function rm(){if(Ql===null)try{new FormData(document.createElement("form"),0),Ql=!1}catch{Ql=!0}return Ql}var lm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function la(o){return o!=null&&!lm.has(o)?(xt(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ql}"`),null):o}function im(o,u){let s,c,p,m,v;if(Zp(o)){let y=o.getAttribute("action");c=y?At(y,u):null,s=o.getAttribute("method")||Kl,p=la(o.getAttribute("enctype"))||ql,m=new FormData(o)}else if(Yp(o)||em(o)&&(o.type==="submit"||o.type==="image")){let y=o.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let E=o.getAttribute("formaction")||y.getAttribute("action");if(c=E?At(E,u):null,s=o.getAttribute("formmethod")||y.getAttribute("method")||Kl,p=la(o.getAttribute("formenctype"))||la(y.getAttribute("enctype"))||ql,m=new FormData(y,o),!rm()){let{name:L,type:k,value:R}=o;if(k==="image"){let I=L?`${L}.`:"";m.append(`${I}x`,"0"),m.append(`${I}y`,"0")}else L&&m.append(L,R)}}else{if(ni(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Kl,c=null,p=ql,v=o}return m&&p==="text/plain"&&(v=m,m=void 0),{action:c,method:s.toLowerCase(),encType:p,formData:m,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fa(o,u){if(o===!1||o===null||typeof o>"u")throw new Error(u)}function Wc(o,u,s,c){let p=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return s?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${c}`:p.pathname=`${p.pathname}.${c}`:p.pathname==="/"?p.pathname=`_root.${c}`:u&&At(p.pathname,u)==="/"?p.pathname=`${Yl(u)}/_root.${c}`:p.pathname=`${Yl(p.pathname)}.${c}`,p}async function om(o,u){if(o.id in u)return u[o.id];try{let s=await import(o.module);return u[o.id]=s,s}catch(s){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function am(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function sm(o,u,s){let c=await Promise.all(o.map(async p=>{let m=u.routes[p.route.id];if(m){let v=await om(m,s);return v.links?v.links():[]}return[]}));return fm(c.flat(1).filter(am).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Nc(o,u,s,c,p,m){let v=(E,L)=>s[L]?E.route.id!==s[L].route.id:!0,y=(E,L)=>{var k;return s[L].pathname!==E.pathname||((k=s[L].route.path)==null?void 0:k.endsWith("*"))&&s[L].params["*"]!==E.params["*"]};return m==="assets"?u.filter((E,L)=>v(E,L)||y(E,L)):m==="data"?u.filter((E,L)=>{var R;let k=c.routes[E.route.id];if(!k||!k.hasLoader)return!1;if(v(E,L)||y(E,L))return!0;if(E.route.shouldRevalidate){let I=E.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:((R=s[0])==null?void 0:R.params)||{},nextUrl:new URL(o,window.origin),nextParams:E.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function um(o,u,{includeHydrateFallback:s}={}){return cm(o.map(c=>{let p=u.routes[c.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),s&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function cm(o){return[...new Set(o)]}function dm(o){let u={},s=Object.keys(o).sort();for(let c of s)u[c]=o[c];return u}function fm(o,u){let s=new Set;return new Set(u),o.reduce((c,p)=>{let m=JSON.stringify(dm(p));return s.has(m)||(s.add(m),c.push({key:m,link:p})),c},[])}function pa(){let o=N.useContext(Un);return fa(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function pm(){let o=N.useContext(ti);return fa(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var ma=N.createContext(void 0);ma.displayName="FrameworkContext";function ha(){let o=N.useContext(ma);return fa(o,"You must render this element inside a <HydratedRouter> element"),o}function mm(o,u){let s=N.useContext(ma),[c,p]=N.useState(!1),[m,v]=N.useState(!1),{onFocus:y,onBlur:E,onMouseEnter:L,onMouseLeave:k,onTouchStart:R}=u,I=N.useRef(null);N.useEffect(()=>{if(o==="render"&&v(!0),o==="viewport"){let A=z=>{z.forEach(q=>{v(q.isIntersecting)})},O=new IntersectionObserver(A,{threshold:.5});return I.current&&O.observe(I.current),()=>{O.disconnect()}}},[o]),N.useEffect(()=>{if(c){let A=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(A)}}},[c]);let W=()=>{p(!0)},V=()=>{p(!1),v(!1)};return s?o!=="intent"?[m,I,{}]:[m,I,{onFocus:jr(y,W),onBlur:jr(E,V),onMouseEnter:jr(L,W),onMouseLeave:jr(k,V),onTouchStart:jr(R,W)}]:[!1,I,{}]}function jr(o,u){return s=>{o&&o(s),s.defaultPrevented||u(s)}}function hm({page:o,...u}){let s=Lp(),{router:c}=pa(),p=N.useMemo(()=>Lc(c.routes,o,c.basename),[c.routes,o,c.basename]);return p?s?N.createElement(ym,{page:o,matches:p,...u}):N.createElement(vm,{page:o,matches:p,...u}):null}function gm(o){let{manifest:u,routeModules:s}=ha(),[c,p]=N.useState([]);return N.useEffect(()=>{let m=!1;return sm(o,u,s).then(v=>{m||p(v)}),()=>{m=!0}},[o,u,s]),c}function ym({page:o,matches:u,...s}){let c=Dt(),{future:p}=ha(),{basename:m}=pa(),v=N.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let y=Wc(o,m,p.unstable_trailingSlashAwareDataRequests,"rsc"),E=!1,L=[];for(let k of u)typeof k.route.shouldRevalidate=="function"?E=!0:L.push(k.route.id);return E&&L.length>0&&y.searchParams.set("_routes",L.join(",")),[y.pathname+y.search]},[m,p.unstable_trailingSlashAwareDataRequests,o,c,u]);return N.createElement(N.Fragment,null,v.map(y=>N.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...s})))}function vm({page:o,matches:u,...s}){let c=Dt(),{future:p,manifest:m,routeModules:v}=ha(),{basename:y}=pa(),{loaderData:E,matches:L}=pm(),k=N.useMemo(()=>Nc(o,u,L,m,c,"data"),[o,u,L,m,c]),R=N.useMemo(()=>Nc(o,u,L,m,c,"assets"),[o,u,L,m,c]),I=N.useMemo(()=>{if(o===c.pathname+c.search+c.hash)return[];let A=new Set,O=!1;if(u.forEach(q=>{var ne;let X=m.routes[q.route.id];!X||!X.hasLoader||(!k.some(oe=>oe.route.id===q.route.id)&&q.route.id in E&&((ne=v[q.route.id])!=null&&ne.shouldRevalidate)||X.hasClientLoader?O=!0:A.add(q.route.id))}),A.size===0)return[];let z=Wc(o,y,p.unstable_trailingSlashAwareDataRequests,"data");return O&&A.size>0&&z.searchParams.set("_routes",u.filter(q=>A.has(q.route.id)).map(q=>q.route.id).join(",")),[z.pathname+z.search]},[y,p.unstable_trailingSlashAwareDataRequests,E,c,m,k,u,o,v]),W=N.useMemo(()=>um(R,m),[R,m]),V=gm(R);return N.createElement(N.Fragment,null,I.map(A=>N.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...s})),W.map(A=>N.createElement("link",{key:A,rel:"modulepreload",href:A,...s})),V.map(({key:A,link:O})=>N.createElement("link",{key:A,nonce:s.nonce,...O,crossOrigin:O.crossOrigin??s.crossOrigin})))}function xm(...o){return u=>{o.forEach(s=>{typeof s=="function"?s(u):s!=null&&(s.current=u)})}}var Sm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sm&&(window.__reactRouterVersion="7.15.1")}catch{}function wm({basename:o,children:u,useTransitions:s,window:c}){let p=N.useRef();p.current==null&&(p.current=Zf({window:c,v5Compat:!0}));let m=p.current,[v,y]=N.useState({action:m.action,location:m.location}),E=N.useCallback(L=>{s===!1?y(L):N.startTransition(()=>y(L))},[s]);return N.useLayoutEffect(()=>m.listen(E),[m,E]),N.createElement(qp,{basename:o,children:u,location:v.location,navigationType:v.action,navigator:m,useTransitions:s})}var Vc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_e=N.forwardRef(function({onClick:u,discover:s="render",prefetch:c="none",relative:p,reloadDocument:m,replace:v,mask:y,state:E,target:L,to:k,preventScrollReset:R,viewTransition:I,defaultShouldRevalidate:W,...V},A){let{basename:O,navigator:z,useTransitions:q}=N.useContext(ct),X=typeof k=="string"&&Vc.test(k),ne=Oc(k,O);k=ne.to;let oe=Ip(k,{relative:p}),ue=Dt(),ge=null;if(y){let Re=sa(y,[],ue.mask?ue.mask.pathname:"/",!0);O!=="/"&&(Re.pathname=Re.pathname==="/"?O:vt([O,Re.pathname])),ge=z.createHref(Re)}let[Ne,Ue,Xe]=mm(c,V),Rt=Nm(k,{replace:v,mask:y,state:E,target:L,preventScrollReset:R,relative:p,viewTransition:I,defaultShouldRevalidate:W,useTransitions:q});function rt(Re){u&&u(Re),Re.defaultPrevented||Rt(Re)}let Ae=!(ne.isExternal||m),$e=N.createElement("a",{...V,...Xe,href:(Ae?ge:void 0)||ne.absoluteURL||oe,onClick:Ae?rt:u,ref:xm(A,Ue),target:L,"data-discover":!X&&s==="render"?"true":void 0});return Ne&&!X?N.createElement(N.Fragment,null,$e,N.createElement(hm,{page:oe})):$e});_e.displayName="Link";var Em=N.forwardRef(function({"aria-current":u="page",caseSensitive:s=!1,className:c="",end:p=!1,style:m,to:v,viewTransition:y,children:E,...L},k){let R=Ir(v,{relative:L.relative}),I=Dt(),W=N.useContext(ti),{navigator:V,basename:A}=N.useContext(ct),O=W!=null&&Tm(R)&&y===!0,z=V.encodeLocation?V.encodeLocation(R).pathname:R.pathname,q=I.pathname,X=W&&W.navigation&&W.navigation.location?W.navigation.location.pathname:null;s||(q=q.toLowerCase(),X=X?X.toLowerCase():null,z=z.toLowerCase()),X&&A&&(X=At(X,A)||X);const ne=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let oe=q===z||!p&&q.startsWith(z)&&q.charAt(ne)==="/",ue=X!=null&&(X===z||!p&&X.startsWith(z)&&X.charAt(z.length)==="/"),ge={isActive:oe,isPending:ue,isTransitioning:O},Ne=oe?u:void 0,Ue;typeof c=="function"?Ue=c(ge):Ue=[c,oe?"active":null,ue?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let Xe=typeof m=="function"?m(ge):m;return N.createElement(_e,{...L,"aria-current":Ne,className:Ue,ref:k,style:Xe,to:v,viewTransition:y},typeof E=="function"?E(ge):E)});Em.displayName="NavLink";var Cm=N.forwardRef(({discover:o="render",fetcherKey:u,navigate:s,reloadDocument:c,replace:p,state:m,method:v=Kl,action:y,onSubmit:E,relative:L,preventScrollReset:k,viewTransition:R,defaultShouldRevalidate:I,...W},V)=>{let{useTransitions:A}=N.useContext(ct),O=Pm(),z=jm(y,{relative:L}),q=v.toLowerCase()==="get"?"get":"post",X=typeof y=="string"&&Vc.test(y),ne=oe=>{if(E&&E(oe),oe.defaultPrevented)return;oe.preventDefault();let ue=oe.nativeEvent.submitter,ge=(ue==null?void 0:ue.getAttribute("formmethod"))||v,Ne=()=>O(ue||oe.currentTarget,{fetcherKey:u,method:ge,navigate:s,replace:p,state:m,relative:L,preventScrollReset:k,viewTransition:R,defaultShouldRevalidate:I});A&&s!==!1?N.startTransition(()=>Ne()):Ne()};return N.createElement("form",{ref:V,method:q,action:z,onSubmit:c?E:ne,...W,"data-discover":!X&&o==="render"?"true":void 0})});Cm.displayName="Form";function km(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qc(o){let u=N.useContext(Un);return xe(u,km(o)),u}function Nm(o,{target:u,replace:s,mask:c,state:p,preventScrollReset:m,relative:v,viewTransition:y,defaultShouldRevalidate:E,useTransitions:L}={}){let k=Ap(),R=Dt(),I=Ir(o,{relative:v});return N.useCallback(W=>{if(nm(W,u)){W.preventDefault();let V=s!==void 0?s:Tr(R)===Tr(I),A=()=>k(o,{replace:V,mask:c,state:p,preventScrollReset:m,relative:v,viewTransition:y,defaultShouldRevalidate:E});L?N.startTransition(()=>A()):A()}},[R,k,I,s,c,p,u,o,m,v,y,E,L])}var Rm=0,Lm=()=>`__${String(++Rm)}__`;function Pm(){let{router:o}=Qc("useSubmit"),{basename:u}=N.useContext(ct),s=Qp(),c=o.fetch,p=o.navigate;return N.useCallback(async(m,v={})=>{let{action:y,method:E,encType:L,formData:k,body:R}=im(m,u);if(v.navigate===!1){let I=v.fetcherKey||Lm();await c(I,s,v.action||y,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:k,body:R,formMethod:v.method||E,formEncType:v.encType||L,flushSync:v.flushSync})}else await p(v.action||y,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:k,body:R,formMethod:v.method||E,formEncType:v.encType||L,replace:v.replace,state:v.state,fromRouteId:s,flushSync:v.flushSync,viewTransition:v.viewTransition})},[c,p,u,s])}function jm(o,{relative:u}={}){let{basename:s}=N.useContext(ct),c=N.useContext(Nt);xe(c,"useFormAction must be used inside a RouteContext");let[p]=c.matches.slice(-1),m={...Ir(o||".",{relative:u})},v=Dt();if(o==null){m.search=v.search;let y=new URLSearchParams(m.search),E=y.getAll("index");if(E.some(k=>k==="")){y.delete("index"),E.filter(R=>R).forEach(R=>y.append("index",R));let k=y.toString();m.search=k?`?${k}`:""}}return(!o||o===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:vt([s,m.pathname])),Tr(m)}function Tm(o,{relative:u}={}){let s=N.useContext(Dc);xe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Qc("useViewTransitionState"),p=Ir(o,{relative:u});if(!s.isTransitioning)return!1;let m=At(s.currentLocation.pathname,c)||s.currentLocation.pathname,v=At(s.nextLocation.pathname,c)||s.nextLocation.pathname;return Xl(p.pathname,v)!=null||Xl(p.pathname,m)!=null}const Rc=[{id:"backend",name:"后端开发工具",icon:"🖥️",type:"tool"},{id:"frontend",name:"前端开发工具",icon:"🌐",type:"tool"},{id:"devops",name:"DevOps工具",icon:"🔧",type:"tool"},{id:"wechat",name:"微信生态",icon:"💬",type:"tool"},{id:"basics",name:"Java基础",icon:"📚",type:"question"},{id:"oop",name:"面向对象",icon:"🎯",type:"question"},{id:"collection",name:"集合框架",icon:"📦",type:"question"},{id:"concurrent",name:"并发编程",icon:"⚡",type:"question"},{id:"jvm",name:"JVM原理",icon:"🔧",type:"question"},{id:"advanced",name:"高级特性",icon:"🚀",type:"question"},{id:"design-pattern",name:"设计模式",icon:"🎨",type:"question"}],Mm=({isOpen:o,onClose:u})=>{const s=c=>{const p=document.getElementById(c);p&&(p.scrollIntoView({behavior:"smooth"}),u())};return f.jsxs(f.Fragment,{children:[o&&f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden",onClick:u}),f.jsx("aside",{className:"hidden md:block fixed left-0 top-16 h-screen w-64 bg-white shadow-xl overflow-y-auto border-r border-gray-100 z-40",children:f.jsxs("div",{className:"p-4",children:[f.jsxs("div",{className:"mb-6",children:[f.jsxs("h3",{className:"text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center",children:[f.jsx("span",{className:"mr-2",children:"🔧"})," 开发工具"]}),f.jsx("ul",{className:"space-y-1",children:Rc.filter(c=>c.type==="tool").map(c=>f.jsx("li",{children:f.jsxs("button",{onClick:()=>s(c.id),className:"w-full text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-purple-50 hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 text-sm font-medium group",children:[f.jsx("span",{className:"text-lg group-hover:scale-110 transition-transform",children:c.icon}),f.jsx("span",{children:c.name})]})},c.id))})]}),f.jsxs("div",{className:"mb-6",children:[f.jsxs("h3",{className:"text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 flex items-center",children:[f.jsx("span",{className:"mr-2",children:"📝"})," 面试题分类"]}),f.jsx("ul",{className:"space-y-1",children:Rc.filter(c=>c.type==="question").map(c=>f.jsx("li",{children:f.jsxs(_e,{to:`/category/${c.id}`,className:"block px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-purple-50 hover:text-indigo-700 transition-all duration-300 flex items-center space-x-3 text-sm font-medium group",children:[f.jsx("span",{className:"text-lg group-hover:scale-110 transition-transform",children:c.icon}),f.jsx("span",{children:c.name})]})},c.id))})]})]})}),f.jsx("nav",{className:"md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 shadow-xl",children:f.jsxs("div",{className:"flex justify-around items-center py-2",children:[f.jsxs(_e,{to:"/",className:"flex flex-col items-center text-indigo-600 p-2",children:[f.jsx("span",{className:"text-2xl mb-1",children:"🏠"}),f.jsx("span",{className:"text-xs",children:"首页"})]}),f.jsxs(_e,{to:"/category/basics",className:"flex flex-col items-center text-gray-600 p-2",children:[f.jsx("span",{className:"text-2xl mb-1",children:"📚"}),f.jsx("span",{className:"text-xs",children:"面试题"})]}),f.jsxs("a",{href:"#ai-tools",className:"flex flex-col items-center text-gray-600 p-2",onClick:c=>{c.preventDefault(),s("ai-tools")},children:[f.jsx("span",{className:"text-2xl mb-1",children:"🤖"}),f.jsx("span",{className:"text-xs",children:"AI工具"})]}),f.jsxs("a",{href:"#docs",className:"flex flex-col items-center text-gray-600 p-2",onClick:c=>{c.preventDefault(),s("docs")},children:[f.jsx("span",{className:"text-2xl mb-1",children:"🔧"}),f.jsx("span",{className:"text-xs",children:"工具箱"})]})]})})]})},Mr=({isOpen:o,onToggle:u,onClose:s})=>f.jsxs(f.Fragment,{children:[f.jsx("nav",{className:"bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 shadow-2xl sticky top-0 z-50",children:f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:f.jsxs("div",{className:"flex items-center justify-between h-16",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("button",{onClick:u,className:"md:hidden text-white hover:text-indigo-200 transition-colors",children:f.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o?f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})}),f.jsxs(_e,{to:"/",className:"flex items-center space-x-2",children:[f.jsx("span",{className:"text-2xl",children:"☕"}),f.jsx("span",{className:"text-white font-bold text-xl",children:"Java面试题"})]})]}),f.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[f.jsx(_e,{to:"/",className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium py-1",children:"首页"}),f.jsxs("a",{href:"#ai-tools",onClick:c=>{c.preventDefault();const p=document.getElementById("ai-tools");p&&p.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[f.jsx("span",{className:"mr-1",children:"🤖"}),"AI工具"]}),f.jsxs("a",{href:"#docs",onClick:c=>{c.preventDefault();const p=document.getElementById("docs");p&&p.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[f.jsx("span",{className:"mr-1",children:"🔧"}),"工具箱"]}),f.jsxs("a",{href:"#categories",onClick:c=>{c.preventDefault();const p=document.getElementById("categories");p&&p.scrollIntoView({behavior:"smooth"})},className:"text-white hover:text-indigo-200 transition-all duration-200 font-medium flex items-center",children:[f.jsx("span",{className:"mr-1",children:"📚"}),"知识分类"]})]})]})})}),f.jsx(Mm,{isOpen:o,onClose:s})]}),Zl=[{id:"basics",name:"Java基础",icon:"📚",color:"bg-blue-500",description:"Java语言的核心基础知识，包括语法、类型系统、异常处理等"},{id:"oop",name:"面向对象",icon:"🎯",color:"bg-green-500",description:"面向对象编程的三大特性：封装、继承、多态"},{id:"collection",name:"集合框架",icon:"📦",color:"bg-purple-500",description:"Java集合框架的核心实现类，如List、Map、Set等"},{id:"concurrent",name:"并发编程",icon:"⚡",color:"bg-yellow-500",description:"多线程编程、线程安全、并发工具类等"},{id:"jvm",name:"JVM原理",icon:"🔧",color:"bg-red-500",description:"Java虚拟机原理、内存模型、GC机制等"},{id:"advanced",name:"高级特性",icon:"🚀",color:"bg-indigo-500",description:"反射、注解、泛型、Lambda表达式等高级特性"},{id:"design-pattern",name:"设计模式",icon:"🎨",color:"bg-teal-500",description:"GoF设计模式：创建型、结构型、行为型模式"}],ei=[{id:"1",title:"Java中==和equals的区别是什么？",content:"请详细解释Java中==运算符和equals方法的区别，并举例说明。",category:"basics",difficulty:"easy",answer:"==用于比较基本数据类型的值是否相等，或比较引用类型的引用地址是否相同。equals方法用于比较对象的内容是否相等，默认行为与==相同，但通常被重写（如String、Integer等类）来比较内容。",codeExample:`String s1 = new String("hello");
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
// RequestMappingHandlerAdapter`,tags:["设计模式","Spring"]}],_m=[{name:"ChatGPT",url:"https://chat.openai.com",description:"OpenAI的智能对话AI助手，支持代码生成、写作、翻译等",icon:"🤖",color:"from-green-500 to-green-600",category:"大模型"},{name:"Claude",url:"https://claude.ai",description:"Anthropic公司开发的AI助手，擅长长文本处理和代码生成",icon:"🧠",color:"from-orange-500 to-amber-500",category:"大模型"},{name:"Gemini",url:"https://gemini.google.com",description:"Google开发的AI助手，支持多模态交互和代码生成",icon:"✨",color:"from-blue-500 to-indigo-500",category:"大模型"},{name:"通义千问",url:"https://tongyi.aliyun.com",description:"阿里云开发的AI助手，支持对话、代码、写作等功能",icon:"🦅",color:"from-orange-500 to-orange-600",category:"大模型"},{name:"文心一言",url:"https://yiyan.baidu.com",description:"百度开发的AI助手，支持对话、写作、代码生成",icon:"🐼",color:"from-red-500 to-orange-500",category:"大模型"},{name:"智谱AI",url:"https://chatglm.cn",description:"清华系开发的AI助手，支持多模态和编程",icon:"🔬",color:"from-purple-500 to-indigo-500",category:"大模型"},{name:"豆包",url:"https://www.doubao.com",description:"字节跳动开发的AI助手，支持对话、写作、代码",icon:"📦",color:"from-emerald-500 to-teal-500",category:"大模型"},{name:"GitHub Copilot",url:"https://copilot.github.com",description:"AI编程助手，自动补全代码，支持多种编程语言",icon:"🚀",color:"from-gray-700 to-gray-900",category:"编程工具"},{name:"Cursor",url:"https://cursor.so",description:"AI代码编辑器，基于GPT-4，支持代码补全、修复、重构",icon:"✏️",color:"from-blue-600 to-cyan-600",category:"编程工具"},{name:"Codeium",url:"https://codeium.com",description:"免费的AI编程助手，支持多种IDE和编程语言",icon:"💡",color:"from-yellow-500 to-orange-500",category:"编程工具"},{name:"Midjourney",url:"https://www.midjourney.com",description:"AI绘画工具，通过文字描述生成高质量图片",icon:"🎨",color:"from-purple-600 to-pink-600",category:"图像生成"},{name:"Stable Diffusion",url:"https://stability.ai",description:"开源的AI绘画模型，支持本地部署和定制",icon:"🖼️",color:"from-indigo-500 to-purple-500",category:"图像生成"},{name:"DALL-E",url:"https://openai.com/dall-e-3",description:"OpenAI开发的AI绘画工具，生成高质量图片",icon:"🖌️",color:"from-emerald-500 to-green-600",category:"图像生成"},{name:"Runway",url:"https://runwayml.com",description:"AI视频生成和编辑平台，支持多种创意工具",icon:"🎬",color:"from-pink-500 to-rose-600",category:"视频生成"},{name:"Suno",url:"https://suno.ai",description:"AI音乐生成平台，通过文字描述生成音乐",icon:"🎵",color:"from-cyan-500 to-blue-600",category:"音频生成"},{name:"Notion AI",url:"https://www.notion.so/product/ai",description:"Notion内置的AI助手，支持写作、总结、翻译等",icon:"📝",color:"from-gray-800 to-black",category:"写作工具"},{name:"DeepL",url:"https://www.deepl.com",description:"高质量的AI翻译工具，支持多种语言",icon:"🌍",color:"from-red-600 to-red-700",category:"翻译工具"},{name:"Perplexity",url:"https://www.perplexity.ai",description:"AI搜索引擎，提供带引用来源的回答",icon:"🔍",color:"from-yellow-400 to-yellow-600",category:"搜索工具"},{name:"Hugging Face",url:"https://huggingface.co",description:"AI模型库和开源社区，提供各种AI模型和工具",icon:"🤗",color:"from-yellow-500 to-amber-600",category:"开发平台"},{name:"Ollama",url:"https://ollama.com",description:"本地运行大模型的工具，支持多种开源模型",icon:"🦙",color:"from-emerald-600 to-green-700",category:"开发平台"}],Om=[{name:"IntelliJ IDEA",url:"https://www.jetbrains.com/idea/",description:"Java集成开发环境（IDE），业界公认的Java开发首选工具",usage:"安装后安装Tomcat、Spring等插件，配置Maven/Gradle项目，快速开发Java应用。支持代码提示、重构、调试等功能。",icon:"💻",color:"from-purple-500 to-indigo-500"},{name:"Spring Boot",url:"https://spring.io/projects/spring-boot",description:"Spring Framework的子项目，简化Spring应用开发",usage:"创建Spring Boot项目：访问start.spring.io生成项目结构。使用@SpringBootApplication启动应用，自动配置数据库、Web等。",icon:"🌱",color:"from-green-500 to-emerald-500"},{name:"Redis",url:"https://redis.io/",description:"高性能键值对数据库，常用于缓存和会话存储",usage:"安装Redis后，使用redis-cli连接。常用命令：SET/GET存取数据，EXPIRE设置过期，HASH存对象。Java中使用Jedis或Lettuce客户端。",icon:"🔴",color:"from-red-500 to-orange-500"},{name:"MySQL",url:"https://www.mysql.com/",description:"开源关系型数据库，Web应用最常用的数据库之一",usage:"安装MySQL后，使用mysql -u root -p登录。创建数据库：CREATE DATABASE name；创建表：CREATE TABLE；常用命令：SELECT/INSERT/UPDATE/DELETE。",icon:"🐬",color:"from-blue-500 to-cyan-500"},{name:"Maven",url:"https://maven.apache.org/",description:"Java项目管理和依赖管理工具，统一项目结构",usage:"配置pom.xml添加依赖：<dependency>标签。常用命令：mvn clean install编译项目，mvn package打包，mvn spring-boot:run运行Spring Boot项目。",icon:"🧱",color:"from-yellow-500 to-amber-500"}],Im=[{name:"Vue.js",url:"https://vuejs.org/",description:"渐进式JavaScript框架，用于构建用户界面",usage:"使用npm create vue@latest创建项目。组件结构：template写HTML，script写逻辑，style写样式。常用指令：v-if/v-for/v-model。状态管理用Pinia或Vuex。",icon:"💚",color:"from-green-400 to-emerald-400"},{name:"Node.js",url:"https://nodejs.org/",description:"基于Chrome V8引擎的JavaScript运行时，可开发后端服务",usage:'npm init初始化项目，npm install安装依赖。创建服务器：const http = require("http")。Express框架：npm install express，快速搭建Web API。',icon:"🟢",color:"from-green-600 to-green-400"},{name:"Postman",url:"https://www.postman.com/",description:"API开发和测试工具，简化HTTP请求调试",usage:"新建请求：选择GET/POST等方法，输入URL。Params设置参数，Body选择raw/JSON格式发送数据。Headers设置请求头。Collections管理多个请求。",icon:"🚀",color:"from-orange-400 to-yellow-400"}],Am=[{name:"Git",url:"https://git-scm.com/",description:"分布式版本控制系统，管理代码版本和协作开发",usage:"git init初始化仓库。git add添加文件，git commit -m提交。git push推送到远程，git pull拉取更新。git branch创建分支，git merge合并分支。",icon:"🔀",color:"from-orange-500 to-red-500"},{name:"Docker",url:"https://www.docker.com/",description:"容器化平台，实现应用及其依赖的打包和部署",usage:"Dockerfile定义镜像：FROM指定基础镜像，COPY复制文件，RUN执行命令，CMD启动命令。构建镜像：docker build -t name。运行容器：docker run -p 8080:80 name。",icon:"🐳",color:"from-blue-600 to-blue-400"}],Dm=[{name:"微信小程序",url:"https://developers.weixin.qq.com/miniprogram/dev/framework/",description:"微信官方小程序开发框架，跨平台移动应用",usage:"下载微信开发者工具，创建项目。pages目录下创建页面，app.json配置路由，app.wxss写样式。调用wx.request发起网络请求，wx.setStorage存本地数据。",icon:"💬",color:"from-green-500 to-green-400"},{name:"微信小游戏",url:"https://developers.weixin.qq.com/minigame/dev/guide/",description:"微信小游戏开发平台，基于Canvas/WebGL渲染",usage:"使用微信开发者工具创建小游戏项目。LayaAir/Cocos Creator等引擎开发。小游戏使用wx.createCanvas()创建画布，通过requestAnimationFrame实现游戏循环。",icon:"🎮",color:"from-blue-400 to-cyan-400"}],Jl=({id:o,title:u,tools:s})=>f.jsxs("section",{id:o,className:"mb-12 scroll-mt-24",children:[f.jsxs("h3",{className:"text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center",children:[f.jsx("span",{className:"mr-2 sm:mr-3",children:u.split(" ")[0]}),f.jsx("span",{children:u.split(" ").slice(1).join(" ")})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:s.map(c=>f.jsxs("div",{className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover",children:[f.jsxs("div",{className:"flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4",children:[f.jsx("div",{className:`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${c.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:c.icon}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("h4",{className:"font-bold text-gray-900 mb-1 text-sm sm:text-lg",children:c.name}),f.jsx("p",{className:"text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none",children:c.description})]})]}),f.jsxs("div",{className:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4",children:[f.jsxs("h5",{className:"text-indigo-900 font-semibold text-xs sm:text-sm mb-1 sm:mb-2 flex items-center",children:[f.jsx("span",{className:"mr-1",children:"📖"})," 使用方法"]}),f.jsx("p",{className:"text-indigo-800 text-xs leading-relaxed line-clamp-3",children:c.usage})]}),f.jsxs("a",{href:c.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-xs sm:text-sm shadow-lg hover:shadow-xl",children:[f.jsx("span",{className:"mr-1 sm:mr-2",children:"🌐"}),"访问官方文档",f.jsx("svg",{className:"w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})]},c.name))})]}),bm=({tool:o})=>f.jsxs("a",{href:o.url,target:"_blank",rel:"noopener noreferrer",className:"bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 sm:p-5 border border-white/20 group flex items-start space-x-3 hover:scale-[1.02] card-hover",children:[f.jsx("div",{className:`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${o.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:o.icon}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex items-center justify-between mb-1",children:[f.jsx("h4",{className:"font-bold text-gray-900 text-xs sm:text-base",children:o.name}),f.jsx("span",{className:"px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-200",children:o.category})]}),f.jsx("p",{className:"text-gray-600 text-xs sm:text-sm mt-1 line-clamp-2",children:o.description})]})]}),zm=()=>{const[o,u]=N.useState(!1),s=ei.slice(0,10),c=()=>{const y=document.getElementById("questions");y&&y.scrollIntoView({behavior:"smooth"})},p=y=>{const E=Zl.find(L=>L.id===y);return E?E.name:y},m=y=>{switch(y){case"easy":return"difficulty-easy";case"medium":return"difficulty-medium";case"hard":return"difficulty-hard";default:return"bg-gray-100 text-gray-800"}},v=y=>{switch(y){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return y}};return f.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50",children:[f.jsx(Mr,{isOpen:o,onToggle:()=>u(!o),onClose:()=>u(!1)}),f.jsxs("div",{className:"md:ml-64 pb-20 sm:pb-0",children:[f.jsxs("div",{className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden",children:[f.jsxs("div",{className:"absolute inset-0 opacity-10",children:[f.jsx("div",{className:"absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"}),f.jsx("div",{className:"absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"})]}),f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10",children:f.jsxs("div",{className:"text-center animate-fadeInUp",children:[f.jsx("h1",{className:"text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6",children:"Java面试题精选"}),f.jsx("p",{className:"text-base sm:text-lg md:text-2xl text-indigo-100 mb-6 sm:mb-10 max-w-3xl mx-auto",children:"精心整理的Java面试题集，涵盖基础、集合、并发、JVM等核心知识，助您面试一臂之力！"}),f.jsx("div",{className:"flex justify-center",children:f.jsx("button",{onClick:c,className:"bg-white text-indigo-600 px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-all duration-300 shadow-2xl hover:shadow-3xl text-base sm:text-xl transform hover:scale-[1.05]",children:"🚀 开始刷题"})})]})})]}),f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16",children:[f.jsxs("section",{id:"questions",className:"mb-12 sm:mb-20 scroll-mt-24",children:[f.jsx("h2",{className:"section-title mb-6 sm:mb-10 text-center",children:"🎯 精选面试题"}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6",children:s.map((y,E)=>f.jsxs(_e,{to:`/question/${y.id}`,className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover animate-fadeInUp",style:{animationDelay:`${E*.05}s`},children:[f.jsxs("div",{className:"flex items-start justify-between mb-2 sm:mb-3",children:[f.jsx("h3",{className:"text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors flex-1 mr-2",children:y.title}),f.jsx("span",{className:`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${m(y.difficulty)} whitespace-nowrap border`,children:v(y.difficulty)})]}),f.jsx("p",{className:"text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2",children:y.content}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-xs sm:text-sm text-gray-500 font-medium",children:p(y.category)}),f.jsx("div",{className:"flex flex-wrap gap-1 sm:gap-2",children:y.tags.slice(0,2).map((L,k)=>f.jsx("span",{className:"px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-xs font-medium border border-indigo-200",children:L},k))})]})]},y.id))}),f.jsx("div",{className:"text-center mt-8 sm:mt-10",children:f.jsxs(_e,{to:"/category/basics",className:"inline-flex items-center text-indigo-600 hover:text-purple-600 font-bold text-sm sm:text-lg transition-all duration-300",children:["查看更多题目",f.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})})]}),f.jsxs("section",{id:"categories",className:"mb-8 sm:mb-16 scroll-mt-24",children:[f.jsx("h2",{className:"section-title mb-6 sm:mb-10 text-center",children:"📚 知识分类"}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",children:Zl.map((y,E)=>f.jsxs(_e,{to:`/category/${y.id}`,className:"bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group card-hover animate-fadeInUp",style:{animationDelay:`${E*.05}s`},children:[f.jsx("div",{className:`w-12 h-12 sm:w-14 sm:h-14 ${y.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 shadow-lg`,children:y.icon}),f.jsx("h3",{className:"text-lg sm:text-xl font-bold text-gray-900 mb-2",children:y.name}),f.jsx("p",{className:"text-gray-600 text-sm",children:y.description})]},y.id))})]}),f.jsxs("section",{id:"docs",className:"mb-8 sm:mb-16",children:[f.jsx("h2",{className:"section-title mb-2 text-center",children:"🔧 开发工具箱"}),f.jsx("p",{className:"text-gray-600 text-center mb-6 sm:mb-10 text-sm sm:text-lg",children:"Java开发者必备的官方文档和工具，包含详细使用教程"}),f.jsx(Jl,{id:"backend",title:"🖥️ 后端开发工具",tools:Om}),f.jsx(Jl,{id:"frontend",title:"🌐 前端开发工具",tools:Im}),f.jsx(Jl,{id:"devops",title:"🔧 DevOps工具",tools:Am}),f.jsx(Jl,{id:"wechat",title:"💬 微信生态",tools:Dm})]}),f.jsx("section",{id:"ai-tools",className:"bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-8 sm:py-12 rounded-3xl shadow-2xl mb-8",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center mb-6 sm:mb-8",children:[f.jsxs("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 flex items-center justify-center",children:[f.jsx("span",{className:"mr-2 sm:mr-3",children:"🤖"})," AI工具导航"]}),f.jsx("p",{className:"text-indigo-100 text-sm sm:text-lg md:text-xl",children:"精心整理的热门AI工具，助力开发者提升效率"})]}),f.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4",children:_m.map(y=>f.jsx(bm,{tool:y},y.name))})]})})]}),f.jsx("footer",{className:"bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-6 sm:py-8 border-t border-gray-700",children:f.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center",children:f.jsx("p",{className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]})},Fm=()=>{const{id:o}=Bc(),[u,s]=N.useState(!1),c=Zl.find(y=>y.id===o),p=ei.filter(y=>y.category===o),m=y=>{switch(y){case"easy":return"bg-green-100 text-green-800";case"medium":return"bg-yellow-100 text-yellow-800";case"hard":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},v=y=>{switch(y){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return y}};return c?f.jsxs("div",{className:"min-h-screen bg-gray-50",children:[f.jsx(Mr,{isOpen:u,onToggle:()=>s(!u),onClose:()=>s(!1)}),f.jsxs("div",{className:"md:ml-64 pb-20 sm:pb-0",children:[f.jsx("div",{className:`${c.color} text-white`,children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:[f.jsxs(_e,{to:"/",className:"text-blue-100 hover:text-white mb-4 inline-flex items-center text-sm sm:text-base",children:[f.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"返回首页"]}),f.jsxs("div",{className:"flex items-center space-x-3 sm:space-x-4 mt-4",children:[f.jsx("div",{className:"w-14 h-14 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl",children:c.icon}),f.jsxs("div",{children:[f.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold",children:c.name}),f.jsx("p",{className:"text-blue-100 mt-2 text-sm sm:text-base",children:c.description})]})]}),f.jsxs("div",{className:"mt-4 sm:mt-6 text-base sm:text-lg",children:["共 ",f.jsx("span",{className:"font-bold",children:p.length})," 道题目"]})]})}),f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:p.length===0?f.jsx("div",{className:"text-center py-12",children:f.jsx("p",{className:"text-gray-500 text-base sm:text-lg",children:"该分类下暂无题目"})}):f.jsx("div",{className:"space-y-3 sm:space-y-4",children:p.map(y=>f.jsxs(_e,{to:`/question/${y.id}`,className:"bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group block",children:[f.jsxs("div",{className:"flex items-start justify-between mb-2 sm:mb-3",children:[f.jsx("h3",{className:"text-base sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex-1 mr-2",children:y.title}),f.jsx("span",{className:`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${m(y.difficulty)} whitespace-nowrap`,children:v(y.difficulty)})]}),f.jsx("p",{className:"text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base",children:y.content}),f.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:y.tags.map((E,L)=>f.jsx("span",{className:"px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm",children:E},L))})]},y.id))})}),f.jsx("footer",{className:"bg-gray-900 text-gray-400 py-6 sm:py-8",children:f.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center",children:f.jsx("p",{className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]}):f.jsxs("div",{className:"min-h-screen bg-gray-50",children:[f.jsx(Mr,{isOpen:u,onToggle:()=>s(!u),onClose:()=>s(!1)}),f.jsx("div",{className:"md:ml-64 pb-20 sm:pb-0",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[f.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"分类不存在"}),f.jsx(_e,{to:"/",className:"text-blue-600 hover:text-blue-800 mt-4 inline-block",children:"返回首页"})]})})]})},Bm=()=>{const{id:o}=Bc(),[u,s]=N.useState(!1),[c,p]=N.useState(!1),m=ei.find(k=>k.id===o),v=m?Zl.find(k=>k.id===m.category):void 0,y=m?ei.filter(k=>k.category===m.category&&k.id!==m.id).slice(0,3):[],E=k=>{switch(k){case"easy":return"bg-green-100 text-green-800";case"medium":return"bg-yellow-100 text-yellow-800";case"hard":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},L=k=>{switch(k){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return k}};return m?f.jsxs("div",{className:"min-h-screen bg-gray-50",children:[f.jsx(Mr,{isOpen:c,onToggle:()=>p(!c),onClose:()=>p(!1)}),f.jsxs("div",{className:"md:ml-64 pb-20 sm:pb-0",children:[f.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12",children:[f.jsx("div",{className:"mb-4 sm:mb-6",children:f.jsxs("div",{className:"flex items-center text-xs sm:text-sm text-gray-500 space-x-1 sm:space-x-2",children:[f.jsx(_e,{to:"/",className:"hover:text-blue-600",children:"首页"}),f.jsx("span",{children:"/"}),v&&f.jsxs(f.Fragment,{children:[f.jsx(_e,{to:`/category/${v.id}`,className:"hover:text-blue-600",children:v.name}),f.jsx("span",{children:"/"})]}),f.jsx("span",{className:"text-gray-900",children:"题目详情"})]})}),f.jsx("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100 mb-6 sm:mb-8",children:f.jsxs("div",{className:"p-4 sm:p-8",children:[f.jsx("div",{className:"flex items-start justify-between mb-3 sm:mb-4 flex-wrap gap-2",children:f.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[v&&f.jsxs("span",{className:`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white ${v.color}`,children:[v.icon," ",v.name]}),f.jsx("span",{className:`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${E(m.difficulty)}`,children:L(m.difficulty)})]})}),f.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6",children:m.title}),f.jsx("div",{className:"bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6",children:f.jsx("p",{className:"text-base sm:text-lg text-gray-800 leading-relaxed",children:m.content})}),f.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6",children:m.tags.map((k,R)=>f.jsx("span",{className:"px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm",children:k},R))}),f.jsxs("button",{onClick:()=>s(!u),className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base",children:[f.jsx("span",{children:u?"收起答案":"查看答案"}),f.jsx("svg",{className:`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${u?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]})]})}),u&&f.jsxs("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100 mb-6 sm:mb-8 overflow-hidden",children:[f.jsx("div",{className:"bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-8 py-3 sm:py-4",children:f.jsxs("h2",{className:"text-lg sm:text-xl font-bold flex items-center",children:[f.jsx("span",{className:"mr-2",children:"💡"})," 参考答案"]})}),f.jsxs("div",{className:"p-4 sm:p-8",children:[f.jsx("div",{className:"mb-6 sm:mb-8",children:f.jsx("p",{className:"text-gray-800 leading-relaxed text-sm sm:text-lg whitespace-pre-wrap",children:m.answer})}),m.codeExample&&f.jsxs("div",{className:"mt-6 sm:mt-8",children:[f.jsxs("h3",{className:"text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center",children:[f.jsx("span",{className:"mr-2",children:"📝"})," 代码示例"]}),f.jsx("div",{className:"bg-gray-900 rounded-lg p-3 sm:p-6 overflow-x-auto",children:f.jsx("pre",{className:"text-green-400 font-mono text-xs sm:text-sm leading-relaxed",children:f.jsx("code",{children:m.codeExample})})})]})]})]}),y.length>0&&f.jsx("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100",children:f.jsxs("div",{className:"p-4 sm:p-8",children:[f.jsxs("h2",{className:"text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center",children:[f.jsx("span",{className:"mr-2",children:"📚"})," 相关题目"]}),f.jsx("div",{className:"space-y-2 sm:space-y-4",children:y.map(k=>f.jsx(_e,{to:`/question/${k.id}`,className:"block p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200",children:f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsx("h3",{className:"font-medium text-gray-900 text-sm sm:text-base flex-1 mr-2",children:k.title}),f.jsx("span",{className:`px-2 py-1 rounded text-xs font-medium ${E(k.difficulty)} whitespace-nowrap`,children:L(k.difficulty)})]})},k.id))})]})}),f.jsx("div",{className:"flex justify-between items-center mt-6 sm:mt-8",children:f.jsxs(_e,{to:`/category/${m.category}`,className:"text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base flex items-center",children:[f.jsx("svg",{className:"w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),"返回分类"]})})]}),f.jsx("footer",{className:"bg-gray-900 text-gray-400 py-6 sm:py-8",children:f.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center",children:f.jsx("p",{className:"text-xs sm:text-sm",children:"© 2024 Java面试题. 帮助每一位开发者准备面试。"})})})]})]}):f.jsxs("div",{className:"min-h-screen bg-gray-50",children:[f.jsx(Mr,{isOpen:c,onToggle:()=>p(!c),onClose:()=>p(!1)}),f.jsx("div",{className:"md:ml-64 pb-20 sm:pb-0",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center",children:[f.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"题目不存在"}),f.jsx(_e,{to:"/",className:"text-blue-600 hover:text-blue-800 mt-4 inline-block",children:"返回首页"})]})})]})};function Hm(){return f.jsx(wm,{children:f.jsxs(Xp,{children:[f.jsx(Gl,{path:"/",element:f.jsx(zm,{})}),f.jsx(Gl,{path:"/category/:id",element:f.jsx(Fm,{})}),f.jsx(Gl,{path:"/question/:id",element:f.jsx(Bm,{})})]})})}Yf.createRoot(document.getElementById("root")).render(f.jsx(N.StrictMode,{children:f.jsx(Hm,{})}));

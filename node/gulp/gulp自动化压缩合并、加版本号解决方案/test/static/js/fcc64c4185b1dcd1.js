/*!
 * jQuery JavaScript Library v1.9.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-1-14
 */
!function(e,t){"use strict";function n(e){var t=e.length,n=ae.type(e);return!ae.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)))}
// Convert String-formatted options into Object-formatted ones and store in cache
function r(e){var t=he[e]={};return ae.each(e.match(ue)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(ae.acceptData(e)){var o,a,s=ae.expando,u="string"==typeof n,
// We have to handle DOM nodes and JS objects differently because IE6-7
// can't GC object references properly across the DOM-JS boundary
l=e.nodeType,
// Only DOM nodes need the global jQuery cache; JS object data is
// attached directly to the object so GC can occur automatically
c=l?ae.cache:e,
// Only defining an ID for JS objects if its cache already exists allows
// the code to shortcut on the same path as a DOM node with no cache
f=l?e[s]:e[s]&&s;
// Avoid doing any more work than we need to when trying to get data on an
// object that has no data at all
if(f&&c[f]&&(i||c[f].data)||!u||r!==t)
// Only DOM nodes need a new unique ID for each element since their data
// ends up in the global cache
// Avoids exposing jQuery metadata on plain JS objects when the object
// is serialized using JSON.stringify
// An object can be passed to jQuery.data instead of a key/value pair; this gets
// shallow copied over onto the existing cache
// jQuery data() is stored in a separate object inside the object's internal data
// cache in order to avoid key collisions between internal data and user-defined
// data.
// Check for both converted-to-camel and non-converted data property names
// If a data property was specified
// Test for null|undefined property data
// First Try to find as-is property data
// Try to find the camelCased property
return f||(l?e[s]=f=K.pop()||ae.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=ae.noop)),"object"!=typeof n&&"function"!=typeof n||(i?c[f]=ae.extend(c[f],n):c[f].data=ae.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[ae.camelCase(n)]=r),u?null==(a=o[n])&&(a=o[ae.camelCase(n)]):a=o,a}}function o(e,t,n){if(ae.acceptData(e)){var r,i,o,a=e.nodeType,
// See jQuery.data for more information
u=a?ae.cache:e,l=a?e[ae.expando]:ae.expando;
// If there is already no cache entry for this object, there is no
// purpose in continuing
if(u[l]){if(t&&(r=n?u[l]:u[l].data)){
// Support array or space separated string names for data keys
ae.isArray(t)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
t=t.concat(ae.map(t,ae.camelCase)):
// try the string as a key before any manipulation
t in r?t=[t]:(
// split the camel cased version by spaces unless a key with the spaces exists
t=ae.camelCase(t),t=t in r?[t]:t.split(" "));for(i=0,o=t.length;i<o;i++)delete r[t[i]];
// If there is no data left in the cache, we want to continue
// and let the cache object itself get destroyed
if(!(n?s:ae.isEmptyObject)(r))return}
// See jQuery.data for more information
(n||(delete u[l].data,s(u[l])))&&(
// Destroy the cache
a?ae.cleanData([e],!0):ae.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(r===t&&1===e.nodeType){var i="data-"+n.replace(me,"-$1").toLowerCase();if("string"==typeof(r=e.getAttribute(i))){try{r="true"===r||"false"!==r&&("null"===r?null:
// Only convert to a number if it doesn't change the string
+r+""===r?+r:ge.test(r)?ae.parseJSON(r):r)}catch(e){}
// Make sure we set the data so it isn't changed later
ae.data(e,n,r)}else r=t}return r}
// checks a cache object for emptiness
function s(e){var t;for(t in e)
// if the public data object is empty, the private is still empty
if(("data"!==t||!ae.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}
// Implement the identical functionality for filter and not
function f(e,t,n){if(
// Can't pass null or undefined to indexOf in Firefox 4
// Set to 0 to skip string check
t=t||0,ae.isFunction(t))return ae.grep(e,function(e,r){return!!t.call(e,r,e)===n});if(t.nodeType)return ae.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=ae.grep(e,function(e){return 1===e.nodeType});if(He.test(t))return ae.filter(t,r,!n);t=ae.filter(t,r)}return ae.grep(e,function(e){return ae.inArray(e,t)>=0===n})}function p(e){var t=_e.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=Ue.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}
// Mark scripts as having already been evaluated
function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)ae._data(n,"globalEval",!t||ae._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&ae.hasData(e)){var n,r,i,o=ae._data(e),a=ae._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;r<i;r++)ae.event.add(t,n,s[n][r])}
// make the cloned public data object a copy from the original
a.data&&(a.data=ae.extend({},a.data))}}function v(e,t){var n,r,i;
// We do not need to do anything for non-Elements
if(1===t.nodeType){
// IE6-8 copies events bound via attachEvent when using cloneNode.
if(n=t.nodeName.toLowerCase(),!ae.support.noCloneEvent&&t[ae.expando]){r=ae._data(t);for(i in r.events)ae.removeEvent(t,i,r.handle);
// Event data gets referenced instead of copied if the expando gets copied too
t.removeAttribute(ae.expando)}
// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),
// This path appears unavoidable for IE9. When cloning an object
// element in IE9, the outerHTML strategy above is not sufficient.
// If the src has innerHTML and the destination does not,
// copy the src.innerHTML into the dest.innerHTML. #10324
ae.support.html5Clone&&e.innerHTML&&!ae.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ie.test(e.type)?(
// IE6-8 fails to persist the checked state of a cloned checkbox
// or radio button. Worse, IE6-7 fail to give the cloned element
// a checked appearance if the defaultChecked value isn't also set
t.defaultChecked=t.checked=e.checked,
// IE6-7 get confused and end up setting the value of a cloned
// checkbox/radio button to an empty string instead of "on"
t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=void 0!==e.getElementsByTagName?e.getElementsByTagName(n||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||ae.nodeName(i,n)?a.push(i):ae.merge(a,b(i,n));return n===t||n&&ae.nodeName(e,n)?ae.merge([e],a):a}
// Used in buildFragment, fixes the defaultChecked property
function x(e){Ie.test(e.type)&&(e.defaultChecked=e.checked)}
// return a css property mapped to a potentially vendor prefixed property
function w(e,t){
// shortcut for names that are not vendor prefixed
if(t in e)return t;for(
// check for vendor prefixed names
var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=ft.length;i--;)if((t=ft[i]+n)in e)return t;return r}function T(e,t){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return e=t||e,"none"===ae.css(e,"display")||!ae.contains(e.ownerDocument,e)}function N(e,t){for(var n,r=[],i=0,o=e.length;i<o;i++)n=e[i],n.style&&(r[i]=ae._data(n,"olddisplay"),t?(
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
r[i]||"none"!==n.style.display||(n.style.display=""),
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
""===n.style.display&&T(n)&&(r[i]=ae._data(n,"olddisplay",S(n.nodeName)))):r[i]||T(n)||ae._data(n,"olddisplay",ae.css(n,"display")));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(i=0;i<o;i++)n=e[i],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function C(e,t,n){var r=it.exec(t);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===t?1:0,a=0;o<4;o+=2)
// both box models exclude margin, so add it if we want it
"margin"===n&&(a+=ae.css(e,n+ct[o],!0,i)),r?(
// border-box includes padding, so remove it if we want content
"content"===n&&(a-=ae.css(e,"padding"+ct[o],!0,i)),
// at this point, extra isn't border nor margin, so remove border
"margin"!==n&&(a-=ae.css(e,"border"+ct[o]+"Width",!0,i))):(
// at this point, extra isn't content, so add padding
a+=ae.css(e,"padding"+ct[o],!0,i),
// at this point, extra isn't content nor padding, so add border
"padding"!==n&&(a+=ae.css(e,"border"+ct[o]+"Width",!0,i)));return a}function E(e,t,n){
// Start with offset property, which is equivalent to the border-box value
var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Qe(e),a=ae.support.boxSizing&&"border-box"===ae.css(e,"boxSizing",!1,o);
// some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(i<=0||null==i){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
i=Ge(e,t,o),(i<0||null==i)&&(i=e.style[t]),ot.test(i))return i;
// we need the check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
r=a&&(ae.support.boxSizingReliable||i===e.style[t]),
// Normalize "", auto, and prepare for extra
i=parseFloat(i)||0}
// use the active box-sizing model to add/subtract irrelevant styles
return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}
// Try to determine the default display value of an element
function S(e){var t=V,n=st[e];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Store the correct default display
return n||(n=A(e,t),"none"!==n&&n||(Ke=(Ke||ae("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Ke[0].contentWindow||Ke[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=A(e,t),Ke.detach()),st[e]=n),n}
// Called ONLY from within css_defaultDisplay
function A(e,t){var n=ae(t.createElement(e)).appendTo(t.body),r=ae.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(ae.isArray(t))
// Serialize array item.
ae.each(t,function(t,i){n||pt.test(e)?
// Treat each array item as a scalar.
r(e,i):
// Item is non-scalar (array or object), encode its numeric index.
j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==ae.type(t))
// Serialize scalar item.
r(e,t);else
// Serialize object item.
for(i in t)j(e+"["+i+"]",t[i],n,r)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function D(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(ue)||[];if(ae.isFunction(n))
// For each dataType in the dataTypeExpression
for(;r=o[i++];)
// Prepend if requested
"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}
// Base inspection function for prefilters and transports
function L(e,t,n,r){function i(s){var u;return o[s]=!0,ae.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Et;return i(t.dataTypes[0])||!o["*"]&&i("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function H(e,n){var r,i,o=ae.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&ae.extend(!0,e,i),e}/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function M(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;
// Fill responseXXX fields
for(o in c)o in r&&(n[c[o]]=r[o]);
// Remove auto dataType and get content-type in the process
for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}
// Check to see if we have a response for the expected dataType
if(l[0]in r)a=l[0];else{
// Try convertible dataTypes
for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}
// Or just use first one
a=a||s}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(a)return a!==l[0]&&l.unshift(a),r[a]}
// Chain conversions given the request and the original response
function q(e,t){var n,r,i,o,a={},s=0,
// Work with a copy of dataTypes in case we need to modify it for conversion
u=e.dataTypes.slice(),l=u[0];
// Create converters map with lowercased keys
if(
// Apply the dataFilter if provided
e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];
// Convert to each sequential dataType, tolerating list modification
for(;i=u[++s];)
// There's only work to do if current dataType is non-auto
if("*"!==i){
// Convert response if prev dataType is non-auto and differs from current
if("*"!==l&&l!==i){
// If none found, seek a pair
if(!(
// Seek a direct converter
n=a[l+" "+i]||a["* "+i]))for(r in a)if(
// If conv2 outputs current
o=r.split(" "),o[1]===i&&(
// If prev can be converted to accepted input
n=a[l+" "+o[0]]||a["* "+o[0]])){
// Condense equivalence converters
n===!0?n=a[r]:a[r]!==!0&&(i=o[0],u.splice(s--,0,i));break}
// Apply converter (if not an equivalence)
if(n!==!0)
// Unless errors are allowed to bubble, catch and return them
if(n&&e.throws)t=n(t);else try{t=n(t)}catch(e){return{state:"parsererror",error:n?e:"No conversion from "+l+" to "+i}}}
// Update prev for next iteration
l=i}return{state:"success",data:t}}
// Functions to create xhrs
function _(){try{return new e.XMLHttpRequest}catch(e){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}
// Animations created synchronously will run synchronously
function O(){return setTimeout(function(){qt=t}),qt=ae.now()}function B(e,t){ae.each(t,function(t,n){for(var r=(Rt[t]||[]).concat(Rt["*"]),i=0,o=r.length;i<o;i++)if(r[i].call(e,t,n))
// we're done with this property
return})}function P(e,t,n){var r,i,o=0,a=Pt.length,s=ae.Deferred().always(function(){
// don't match elem in the :animated selector
delete u.elem}),u=function(){if(i)return!1;for(var t=qt||O(),n=Math.max(0,l.startTime+l.duration-t),
// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ae.extend({},t),opts:ae.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qt||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ae.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,
// if we are going to the end, we want to run all the tweens
// otherwise we skip this part
r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);
// resolve when we played the last frame
// otherwise, reject
return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);o<a;o++)if(r=Pt[o].call(l,e,c,l.opts))return r;
// attach callbacks from options
return B(l,c),ae.isFunction(l.opts.start)&&l.opts.start.call(e,l),ae.fx.timer(ae.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=ae.camelCase(n),i=t[r],o=e[n],ae.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ae.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'fcc64c4185b1dcd1' from above because we have the correct "name"
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){/*jshint validthis:true */
var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&T(e);
// handle queue: false promises
n.queue||(c=ae._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){
// doing this makes sure that the complete handler will be called
// before this completes
p.always(function(){c.unqueued--,ae.queue(e,"fx").length||c.empty.fire()})})),
// height/width overflow pass
1===e.nodeType&&("height"in t||"width"in t)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE does not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
n.overflow=[d.overflow,d.overflowX,d.overflowY],
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
"inline"===ae.css(e,"display")&&"none"===ae.css(e,"float")&&(
// inline-level elements accept inline-block;
// block-level elements need to be inline with layout
ae.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",ae.support.shrinkWrapBlocks||p.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));
// show/hide pass
for(r in t)if(o=t[r],Ft.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){s=ae._data(e,"fxshow")||ae._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),
// store state if its toggle - enables .stop().toggle() to "reverse"
u&&(s.hidden=!m),m?ae(e).show():p.done(function(){ae(e).hide()}),p.done(function(){var t;ae._removeData(e,"fxshow");for(t in h)ae.style(e,t,h[t])});for(r=0;r<a;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||ae.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function $(e,t,n,r,i){return new $.prototype.init(e,t,n,r,i)}
// Generate parameters to create a standard animation
function I(e,t){var n,r={height:e},i=0;for(
// if we include width, step value is 1 to do all cssExpand values,
// if we don't include width, step value is 2 to skip over Left and Right
t=t?1:0;i<4;i+=2-t)n=ct[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e){return ae.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var
// A central reference to the root jQuery(document)
X,
// The deferred used on DOM ready
U,
// Use the correct document accordingly with window argument (sandbox)
V=e.document,Y=e.location,
// Map over jQuery in case of overwrite
J=e.jQuery,
// Map over the $ in case of overwrite
G=e.$,
// [[Class]] -> type pairs
Q={},
// List of deleted data cache ids, so we can reuse them
K=[],
// Save a reference to some core methods
Z=K.concat,ee=K.push,te=K.slice,ne=K.indexOf,re=Q.toString,ie=Q.hasOwnProperty,oe="1.9.0".trim,
// Define a local copy of jQuery
ae=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
return new ae.fn.init(e,t,X)},
// Used for matching numbers
se=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
// Used for splitting on whitespace
ue=/\S+/g,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
le=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
// Match a standalone tag
ce=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,
// JSON RegExp
fe=/^[\],:{}\s]*$/,
// Used by jQuery.camelCase as callback to replace()
pe=function(e,t){return t.toUpperCase()},
// The ready event handler and self cleanup method
de=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",de,!1),ae.ready()):"complete"===V.readyState&&(
// we're here because readyState === "complete" in oldIE
// which is good enough for us to call the dom ready!
V.detachEvent("onreadystatechange",de),ae.ready())};ae.fn=ae.prototype={
// The current version of jQuery being used
jquery:"1.9.0",constructor:ae,init:function(e,n,r){var i,o;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Handle HTML strings
if("string"==typeof e){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:le.exec(e))||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);
// HANDLE: $(html) -> $(array)
if(i[1]){
// HANDLE: $(html, props)
if(n=n instanceof ae?n[0]:n,
// scripts is true for back-compat
ae.merge(this,ae.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),ce.test(i[1])&&ae.isPlainObject(n))for(i in n)
// Properties of context are called as methods if possible
ae.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if((o=V.getElementById(i[2]))&&o.parentNode){
// Handle the case where IE and Opera return items
// by name instead of ID
if(o.id!==i[2])return r.find(e);
// Otherwise, we inject the element directly into the jQuery object
this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ae.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),ae.makeArray(e,this))},
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,
// The number of elements contained in the matched element set
size:function(){return this.length},toArray:function(){return te.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return a 'clean' array
// Return just the object
return null==e?this.toArray():e<0?this[this.length+e]:this[e]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=ae.merge(this.constructor(),e);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return t.prevObject=this,t.context=this.context,t},
// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
each:function(e,t){return ae.each(this,e,t)},ready:function(e){
// Add the callback
return ae.ready.promise().done(e),this},slice:function(){return this.pushStack(te.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(ae.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ee,sort:[].sort,splice:[].splice},
// Give the init function the jQuery prototype for later instantiation
ae.fn.init.prototype=ae.fn,ae.extend=ae.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for(
// Handle a deep copy situation
"boolean"==typeof s&&(c=s,s=arguments[1]||{},
// skip the boolean and the target
u=2),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof s||ae.isFunction(s)||(s={}),
// extend jQuery itself if only one argument is passed
l===u&&(s=this,--u);u<l;u++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[u]))
// Extend the base object
for(n in e)r=s[n],i=e[n],
// Prevent never-ending loop
s!==i&&(
// Recurse if we're merging plain objects or arrays
c&&i&&(ae.isPlainObject(i)||(o=ae.isArray(i)))?(o?(o=!1,a=r&&ae.isArray(r)?r:[]):a=r&&ae.isPlainObject(r)?r:{},
// Never move original objects, clone them
s[n]=ae.extend(c,a,i)):i!==t&&(s[n]=i));
// Return the modified object
return s},ae.extend({noConflict:function(t){return e.$===ae&&(e.$=G),t&&e.jQuery===ae&&(e.jQuery=J),ae},
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(e){e?ae.readyWait++:ae.ready(!0)},
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
if(e===!0?!--ae.readyWait:!ae.isReady){
// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
if(!V.body)return setTimeout(ae.ready);
// Remember that the DOM is ready
ae.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
e!==!0&&--ae.readyWait>0||(
// If there are functions bound, to execute
U.resolveWith(V,[ae]),
// Trigger any bound ready events
ae.fn.trigger&&ae(V).trigger("ready").off("ready"))}},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(e){return"function"===ae.type(e)},isArray:Array.isArray||function(e){return"array"===ae.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):"object"==typeof e||"function"==typeof e?Q[re.call(e)]||"object":typeof e},isPlainObject:function(e){
// Must be an Object.
// Because of IE, we also have to check the presence of the constructor property.
// Make sure that DOM nodes and window objects don't pass through, as well
if(!e||"object"!==ae.type(e)||e.nodeType||ae.isWindow(e))return!1;try{
// Not own constructor property must be Object
if(e.constructor&&!ie.call(e,"constructor")&&!ie.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){
// IE8,9 Will throw exceptions on certain host objects #9897
return!1}
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
var n;for(n in e);return n===t||ie.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},
// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=ce.exec(e),i=!n&&[];
// Single tag
// Single tag
return r?[t.createElement(r[1])]:(r=ae.buildFragment([e],t,i),i&&ae(i).remove(),ae.merge([],r.childNodes))},parseJSON:function(t){
// Attempt to parse using the native JSON parser first
// Attempt to parse using the native JSON parser first
// Make sure leading/trailing whitespace is removed (IE can't handle it)
return e.JSON&&e.JSON.parse?e.JSON.parse(t):null===t?t:"string"==typeof t&&(t=ae.trim(t))&&fe.test(t.replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,"@").replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?new Function("return "+t)():void ae.error("Invalid JSON: "+t)},
// Cross-browser xml parsing
parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(// Standard
i=new DOMParser,r=i.parseFromString(n,"text/xml")):(// IE
r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(e){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||ae.error("Invalid XML: "+n),r},noop:function(){},
// Evaluates a script in a global context
// Workarounds based on findings by Jim Driscoll
// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
globalEval:function(t){t&&ae.trim(t)&&
// We use execScript on Internet Explorer
// We use an anonymous function so that context is window
// rather than jQuery in Firefox
(e.execScript||function(t){e.eval.call(e,t)})(t)},
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,pe)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},
// args is for internal usage only
each:function(e,t,r){var i=0,o=e.length,a=n(e);if(r){if(a)for(;i<o&&t.apply(e[i],r)!==!1;i++);else for(i in e)if(t.apply(e[i],r)===!1)break}else if(a)for(;i<o&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},
// Use native String.trim function wherever possible
trim:oe&&!oe.call("\ufeff ")?function(e){return null==e?"":oe.call(e)}:
// Otherwise use our own trimming functionality
function(e){return null==e?"":(e+"").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},
// results is for internal usage only
makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?ae.merge(r,"string"==typeof e?[e]:e):ee.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(ne)return ne.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)
// Skip accessing in sparse arrays
if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;o<r;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;
// Go through the array, only saving the items
// that pass the validator function
for(n=!!n;o<a;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},
// arg is for internal usage only
map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];
// Go through the array, translating each of the items to their
if(s)for(;o<a;o++)null!=(i=t(e[o],o,r))&&(u[u.length]=i);else for(o in e)null!=(i=t(e[o],o,r))&&(u[u.length]=i);
// Flatten any nested arrays
return Z.apply([],u)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(e,n){var r,i,o;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return"string"==typeof n&&(r=e[n],n=e,e=r),ae.isFunction(e)?(i=te.call(arguments,2),o=function(){return e.apply(n||this,i.concat(te.call(arguments)))},o.guid=e.guid=e.guid||ae.guid++,o):t},
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;
// Sets many values
if("object"===ae.type(r)){o=!0;for(u in r)ae.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,ae.isFunction(i)||(s=!0),c&&(
// Bulk operations run against the entire set
s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(ae(e),n)})),n))for(;u<l;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));
// Gets
return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),ae.ready.promise=function(t){if(!U)
// Catch cases where $(document).ready() is called after the browser event has already occurred.
// we once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
if(U=ae.Deferred(),"complete"===V.readyState)
// Handle it asynchronously to allow scripts the opportunity to delay ready
setTimeout(ae.ready);else if(V.addEventListener)
// Use the handy event callback
V.addEventListener("DOMContentLoaded",de,!1),
// A fallback to window.onload, that will always work
e.addEventListener("load",ae.ready,!1);else{
// Ensure firing before onload, maybe late but safe also for iframes
V.attachEvent("onreadystatechange",de),
// A fallback to window.onload, that will always work
e.attachEvent("onload",ae.ready);
// If IE and not a frame
// continually check to see if the document is ready
var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(e){}n&&n.doScroll&&function e(){if(!ae.isReady){try{
// Use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
n.doScroll("left")}catch(t){return setTimeout(e,50)}
// and execute any waiting functions
ae.ready()}}()}return U.promise(t)},
// Populate the class2type map
ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),
// All jQuery objects should point back to these
X=ae(V);
// String to Object options format cache
var he={};/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
ae.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?he[e]||r(e):ae.extend({},e);var// Last fire value (for non-forgettable lists)
n,
// Flag to know if list was already fired
i,
// Flag to know if list is currently firing
o,
// First callback to fire (used internally by add and fireWith)
a,
// End of the loop when firing
s,
// Index of currently firing callback (modified by remove if needed)
u,
// Actual callback list
l=[],
// Stack of fire calls for repeatable lists
c=!e.once&&[],
// Fire callbacks
f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&u<s;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;// To prevent further calls using add
break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},
// Actual Callbacks object
p={
// Add a callback or a collection of callbacks to the list
add:function(){if(l){
// First, we save the current length
var t=l.length;!function t(n){ae.each(n,function(n,r){var i=ae.type(r);"function"===i?e.unique&&p.has(r)||l.push(r):r&&r.length&&"string"!==i&&
// Inspect recursively
t(r)})}(arguments),
// Do we need to add the callbacks to the
// current firing batch?
o?s=l.length:n&&(a=t,f(n))}return this},
// Remove a callback from the list
remove:function(){return l&&ae.each(arguments,function(e,t){for(var n;(n=ae.inArray(t,l,n))>-1;)l.splice(n,1),
// Handle firing indexes
o&&(n<=s&&s--,n<=u&&u--)}),this},
// Control if a given callback is in the list
has:function(e){return ae.inArray(e,l)>-1},
// Remove all callbacks from the list
empty:function(){return l=[],this},
// Have the list do nothing anymore
disable:function(){return l=c=n=t,this},
// Is it disabled?
disabled:function(){return!l},
// Lock the list in its current state
lock:function(){return c=t,n||p.disable(),this},
// Is it locked?
locked:function(){return!c},
// Call all callbacks with the given context and arguments
fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},
// Call all the callbacks with the given arguments
fire:function(){return p.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!i}};return p},ae.extend({Deferred:function(e){var t=[
// action, add listener, listener list, final state
["resolve","done",ae.Callbacks("once memory"),"resolved"],["reject","fail",ae.Callbacks("once memory"),"rejected"],["notify","progress",ae.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ae.Deferred(function(n){ae.each(t,function(t,o){var a=o[0],s=ae.isFunction(e[t])&&e[t];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&ae.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?ae.extend(e,r):r}},i={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return r.pipe=r.then,ae.each(t,function(e,o){var a=o[2],s=o[3];
// promise[ done | fail | progress ] = list.add
r[o[1]]=a.add,
// Handle state
s&&a.add(function(){
// state = [ resolved | rejected ]
n=s},t[1^e][2].disable,t[2][2].lock),
// deferred[ resolve | reject | notify ]
i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},
// Deferred helper
when:function(e){var t,n,r,i=0,o=te.call(arguments),a=o.length,
// the count of uncompleted subordinates
s=1!==a||e&&ae.isFunction(e.promise)?a:0,
// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
u=1===s?e:ae.Deferred(),
// Update function for both resolve and progress values
l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?te.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};
// add listeners to Deferred subordinates; treat others as resolved
if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&ae.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;
// if we're not waiting on anything, resolve the master
return s||u.resolveWith(r,o),u.promise()}}),ae.support=function(){var t,n,r,i,o,a,s,u,l,c,f=V.createElement("div");if(
// Setup
f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
// Support tests won't run in some limited or non-browser environments
n=f.getElementsByTagName("*"),r=f.getElementsByTagName("a")[0],!n||!r||!n.length)return{};
// First batch of tests
i=V.createElement("select"),o=i.appendChild(V.createElement("option")),a=f.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={
// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
getSetAttribute:"t"!==f.className,
// IE strips leading whitespace when .innerHTML is used
leadingWhitespace:3===f.firstChild.nodeType,
// Make sure that tbody elements aren't automatically inserted
// IE will insert them into empty tables
tbody:!f.getElementsByTagName("tbody").length,
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
htmlSerialize:!!f.getElementsByTagName("link").length,
// Get the style information from getAttribute
// (IE uses .cssText instead)
style:/top/.test(r.getAttribute("style")),
// Make sure that URLs aren't manipulated
// (IE normalizes it by default)
hrefNormalized:"/a"===r.getAttribute("href"),
// Make sure that element opacity exists
// (IE uses filter instead)
// Use a regex to work around a WebKit issue. See #5145
opacity:/^0.5/.test(r.style.opacity),
// Verify style float existence
// (IE uses styleFloat instead of cssFloat)
cssFloat:!!r.style.cssFloat,
// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
checkOn:!!a.value,
// Make sure that a selected-by-default option has a working selected property.
// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
optSelected:o.selected,
// Tests for enctype support on a form (#6743)
enctype:!!V.createElement("form").enctype,
// Makes sure cloning an html5 element does not cause problems
// Where outerHTML is undefined, this still works
html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,
// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
boxModel:"CSS1Compat"===V.compatMode,
// Will be defined later
deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},
// Make sure checked status is properly cloned
a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,
// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
i.disabled=!0,t.optDisabled=!o.disabled;
// Support: IE<9
try{delete f.test}catch(e){t.deleteExpando=!1}
// Check if we can trust getAttribute("value")
a=V.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),
// Check if an input maintains its value after becoming a radio
a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,
// #11217 - WebKit loses check when the name is after the checked attribute
a.setAttribute("checked","t"),a.setAttribute("name","t"),s=V.createDocumentFragment(),s.appendChild(a),
// Check if a disconnected checkbox will retain its checked
// value of true after appended to the DOM (IE6/7)
t.appendChecked=a.checked,
// WebKit doesn't clone checked state correctly in fragments
t.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE<9
// Opera does not clone events (and typeof div.attachEvent === undefined).
// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
f.attachEvent&&(f.attachEvent("onclick",function(){t.noCloneEvent=!1}),f.cloneNode(!0).click());
// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
for(c in{submit:!0,change:!0,focusin:!0})f.setAttribute(u="on"+c,"t"),t[c+"Bubbles"]=u in e||f.attributes[u].expando===!1;
// Run tests that need a body at doc ready
// Null elements to avoid leaks in IE
return f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===f.style.backgroundClip,ae(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=V.getElementsByTagName("body")[0];a&&(n=V.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(f),
// Support: IE8
// Check if table cells still have offsetWidth/Height when they are set
// to display:none and there are still other visible table cells in a
// table row; if so, offsetWidth/Height are not reliable for use when
// determining if an element has been hidden directly using
// display:none (it is still safe to use offsets if a parent element is
// hidden; don safety goggles and see bug #4512 for more information).
f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=f.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",l=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",
// Support: IE8
// Check if empty table cells still have offsetWidth/Height
t.reliableHiddenOffsets=l&&0===i[0].offsetHeight,
// Check box-sizing and margin behavior
f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===f.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,
// Use window.getComputedStyle because jsdom on node.js will break without it.
e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(f,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(f,null)||{width:"4px"}).width,
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// Fails in WebKit before Feb 2011 nightlies
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
r=f.appendChild(V.createElement("div")),r.style.cssText=f.style.cssText=o,r.style.marginRight=r.style.width="0",f.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),void 0!==f.style.zoom&&(
// Support: IE<8
// Check if natively block-level elements act like inline-block
// elements when setting their display to 'inline' and giving
// them layout
f.innerHTML="",f.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===f.offsetWidth,
// Support: IE6
// Check if elements with layout shrink-wrap their children
f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==f.offsetWidth,
// Prevent IE 6 from affecting layout for positioned elements #11048
// Prevent IE from shrinking the body in IE 7 mode #12869
a.style.zoom=1),a.removeChild(n),
// Null elements to avoid leaks in IE
n=f=i=r=null)}),n=i=s=o=r=a=null,t}();var ge=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,me=/([A-Z])/g;ae.extend({cache:{},
// Unique for each copy of jQuery on the page
// Non-digits removed to match rinlinejQuery
expando:"jQuery"+("1.9.0"+Math.random()).replace(/\D/g,""),
// The following elements throw uncatchable exceptions if you
// attempt to add expando properties to them.
noData:{embed:!0,
// Ban all objects except for Flash (which handle expandos)
object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return!!(e=e.nodeType?ae.cache[e[ae.expando]]:e[ae.expando])&&!s(e)},data:function(e,t,n){return i(e,t,n,!1)},removeData:function(e,t){return o(e,t,!1)},
// For internal use only.
_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},
// A method for determining if a DOM node can handle the data expando
acceptData:function(e){var t=e.nodeName&&ae.noData[e.nodeName.toLowerCase()];
// nodes accept data unless otherwise specified; rejection can be conditional
return!t||t!==!0&&e.getAttribute("classid")===t}}),ae.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;
// Gets all values
if(e===t){if(this.length&&(u=ae.data(o),1===o.nodeType&&!ae._data(o,"parsedAttrs"))){for(r=o.attributes;s<r.length;s++)i=r[s].name,i.indexOf("data-")||(i=ae.camelCase(i.substring(5)),a(o,i,u[i]));ae._data(o,"parsedAttrs",!0)}return u}
// Sets multiple values
// Sets multiple values
return"object"==typeof e?this.each(function(){ae.data(this,e)}):ae.access(this,function(n){if(n===t)
// Try to fetch any internally stored data first
return o?a(o,e,ae.data(o,e)):null;this.each(function(){ae.data(this,e,n)})},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ae.removeData(this,e)})}}),ae.extend({queue:function(e,t,n){var r;if(e)
// Speed up dequeue by getting out quickly if this is just a lookup
return t=(t||"fx")+"queue",r=ae._data(e,t),n&&(!r||ae.isArray(n)?r=ae._data(e,t,ae.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ae.queue(e,t),r=n.length,i=n.shift(),o=ae._queueHooks(e,t),a=function(){ae.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// clear up the last queue stop function
delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},
// not intended for public consumption - generates a queueHooks object, or returns the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return ae._data(e,n)||ae._data(e,n,{empty:ae.Callbacks("once memory").add(function(){ae._removeData(e,t+"queue"),ae._removeData(e,n)})})}}),ae.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?ae.queue(this[0],e):n===t?this:this.each(function(){var t=ae.queue(this,e,n);
// ensure a hooks for this queue
ae._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&ae.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ae.dequeue(this,e)})},
// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
delay:function(e,t){return e=ae.fx?ae.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,n){var r,i=1,o=ae.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)(r=ae._data(a[s],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var ye,ve,be=/^(?:input|select|textarea|button|object)$/i,xe=/^(?:a|area)$/i,we=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Te=/^(?:checked|selected)$/i,Ne=ae.support.getSetAttribute,Ce=ae.support.input;ae.fn.extend({attr:function(e,t){return ae.access(this,ae.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ae.removeAttr(this,e)})},prop:function(e,t){return ae.access(this,ae.prop,e,t,arguments.length>1)},removeProp:function(e){return e=ae.propFix[e]||e,this.each(function(){
// try/catch handles cases where IE balks (such as removing a property on window)
try{this[e]=t,delete this[e]}catch(e){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(ae.isFunction(e))return this.each(function(t){ae(this).addClass(e.call(this,t,this.className))});if(u)for(
// The disjunction here is for better compressibility (see removeClass)
t=(e||"").match(ue)||[];a<s;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(/[\t\r\n]/g," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");n.className=ae.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(ae.isFunction(e))return this.each(function(t){ae(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(ue)||[];a<s;a++)if(n=this[a],
// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(/[\t\r\n]/g," "):"")){for(o=0;i=t[o++];)
// Remove *all* instances
for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?ae.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return ae.isFunction(e)?this.each(function(n){ae(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(
// toggle individual class names
var i,o=0,a=ae(this),s=t,u=e.match(ue)||[];i=u[o++];)
// check each className given, space separated list
s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else"undefined"!==n&&"boolean"!==n||(this.className&&
// store className if set
ae._data(this,"__className__",this.className),
// If the element has a class name or if we're passed "false",
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.className=this.className||e===!1?"":ae._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(/[\t\r\n]/g," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=ae.isFunction(e),this.each(function(r){var o,a=ae(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,
// Treat null/undefined as ""; convert numbers to string
null==o?o="":"number"==typeof o?o+="":ae.isArray(o)&&(o=ae.map(o,function(e){return null==e?"":e+""})),
// If set returns undefined, fall back to normal setting
(n=ae.valHooks[this.type]||ae.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)
// handle most common string cases
// handle cases where value is null/undef or number
return(n=ae.valHooks[o.type]||ae.valHooks[o.nodeName.toLowerCase()])&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(/\r/g,""):null==r?"":r)}}}),ae.extend({valHooks:{option:{get:function(e){
// attributes.value is undefined in Blackberry 4.7 but
// uses .value. See #6932
var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){
// Loop through all the selected options
for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)
// oldIE doesn't update selected after form reset (#2551)
if(n=r[u],(n.selected||u===i)&&(
// Don't return options that are disabled or in a disabled optgroup
ae.support.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!ae.nodeName(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=ae(n).val(),o)return t;
// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){var n=ae.makeArray(t);return ae(e).find("option").each(function(){this.selected=ae.inArray(ae(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;
// don't get/set attributes on text, comment and attribute nodes
if(e&&3!==s&&8!==s&&2!==s)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
// In IE9+, Flash objects don't have .getAttribute (#12945)
// Support: IE9+
return void 0===e.getAttribute?ae.prop(e,n,r):(a=1!==s||!ae.isXMLDoc(e),a&&(n=n.toLowerCase(),o=ae.attrHooks[n]||(we.test(n)?ve:ye)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:(void 0!==e.getAttribute&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):void ae.removeAttr(e,n))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ue);if(o&&1===e.nodeType)for(;n=o[i++];)r=ae.propFix[n]||n,
// Boolean attributes get special treatment (#10870)
we.test(n)?
// Set corresponding property to false for boolean attributes
// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
!Ne&&Te.test(n)?e[ae.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:ae.attr(e,n,""),e.removeAttribute(Ne?n:r)},attrHooks:{type:{set:function(e,t){if(!ae.support.radioValue&&"radio"===t&&ae.nodeName(e,"input")){
// Setting the type on a radio button after the value resets the value in IE6-9
// Reset value to default in case type is set after value during creation
var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
// don't get/set properties on text, comment and attribute nodes
if(e&&3!==s&&8!==s&&2!==s)
// Fix name and attach hooks
return a=1!==s||!ae.isXMLDoc(e),a&&(n=ae.propFix[n]||n,o=ae.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){
// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):be.test(e.nodeName)||xe.test(e.nodeName)&&e.href?0:t}}}}),
// Hook for boolean attributes
ve={get:function(e,n){var
// Use .prop to determine if this attribute is understood as boolean
r=ae.prop(e,n),
// Fetch it accordingly
i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Ce&&Ne?null!=i:
// oldIE fabricates an empty string for missing boolean attributes
// and conflates checked/selected into attroperties
Te.test(n)?e[ae.camelCase("default-"+n)]:!!i:
// fetch an attribute node for properties not recognized as boolean
e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){
// Remove boolean attributes when set to false
// IE<8 needs the *property* name
return t===!1?ae.removeAttr(e,n):Ce&&Ne||!Te.test(n)?e.setAttribute(!Ne&&ae.propFix[n]||n,n):e[ae.camelCase("default-"+n)]=e[n]=!0,n}},
// fix oldIE value attroperty
Ce&&Ne||(ae.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);
// Ignore the value *property* by using defaultValue
return ae.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,t,n){if(!ae.nodeName(e,"input"))
// Use nodeHook if defined (#1954); otherwise setAttribute is fine
return ye&&ye.set(e,t,n);
// Does not return so that setAttribute is also used
e.defaultValue=t}}),
// IE6/7 do not support getting/setting some attributes with get/setAttribute
Ne||(
// Use this for any attribute in IE6/7
// This fixes almost every IE6/7 issue
ye=ae.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){
// Set the existing or create a new attribute node
var i=e.getAttributeNode(r);
// Break association with cloned elements by also using setAttribute (#9646)
return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},
// Set contenteditable to false on removals(#10429)
// Setting to empty string throws an error as an invalid value
ae.attrHooks.contenteditable={get:ye.get,set:function(e,t,n){ye.set(e,""!==t&&t,n)}},
// Set width and height to auto instead of 0 on empty string( Bug #8150 )
// This is for removals
ae.each(["width","height"],function(e,t){ae.attrHooks[t]=ae.extend(ae.attrHooks[t],{set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}})})),
// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
ae.support.hrefNormalized||(ae.each(["href","src","width","height"],function(e,n){ae.attrHooks[n]=ae.extend(ae.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),
// href/src property should get the full normalized URL (#10299/#12915)
ae.each(["href","src"],function(e,t){ae.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),ae.support.style||(ae.attrHooks.style={get:function(e){
// Return undefined in the case of empty string
// Note: IE uppercases css property names, but if we were to .toLowerCase()
// .cssText, that would destroy case senstitivity in URL's, like in "background"
return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),
// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
ae.support.optSelected||(ae.propHooks.selected=ae.extend(ae.propHooks.selected,{get:function(e){var t=e.parentNode;
// Make sure that it also works with optgroups, see #5701
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),
// IE6/7 call enctype encoding
ae.support.enctype||(ae.propFix.enctype="encoding"),
// Radios and checkboxes getter/setter
ae.support.checkOn||ae.each(["radio","checkbox"],function(){ae.valHooks[this]={get:function(e){
// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
return null===e.getAttribute("value")?"on":e.value}}}),ae.each(["radio","checkbox"],function(){ae.valHooks[this]=ae.extend(ae.valHooks[this],{set:function(e,t){if(ae.isArray(t))return e.checked=ae.inArray(ae(e).val(),t)>=0}})});var ke=/^(?:input|select|textarea)$/i,Ee=/^key/,Se=/^(?:mouse|contextmenu)|click/,Ae=/^(?:focusinfocus|focusoutblur)$/,je=/^([^.]*)(?:\.(.+)|)$/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
ae.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,
// Don't attach events to noData or text/comment nodes (but allow plain objects)
y=3!==e.nodeType&&8!==e.nodeType&&ae._data(e);if(y){for(
// Caller can pass in an object of custom data in lieu of the handler
r.handler&&(a=r,r=a.handler,o=a.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
r.guid||(r.guid=ae.guid++),
// Init the element's event structure and main handler, if this is the first
(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0===ae||e&&ae.event.triggered===e.type?t:ae.event.dispatch.apply(s.elem,arguments)},
// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
s.elem=e),
// Handle multiple events separated by a space
// jQuery(...).bind("mouseover mouseout", fn);
n=(n||"").match(ue)||[""],c=n.length;c--;)u=je.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),
// If event changes its type, use the special event handlers for the changed type
p=ae.event.special[h]||{},
// If selector defined, determine special event api type, otherwise given type
h=(o?p.delegateType:p.bindType)||h,
// Update special based on newly reset type
p=ae.event.special[h]||{},
// handleObj is passed to all event handlers
f=ae.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&ae.expr.match.needsContext.test(o),namespace:g.join(".")},a),
// Init the event handler queue if we're the first
(d=l[h])||(d=l[h]=[],d.delegateCount=0,
// Only use addEventListener/attachEvent if the special events handler returns false
p.setup&&p.setup.call(e,i,g,s)!==!1||(
// Bind the global event handler to the element
e.addEventListener?e.addEventListener(h,s,!1):e.attachEvent&&e.attachEvent("on"+h,s))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),
// Add to the element's handler list, delegates in front
o?d.splice(d.delegateCount++,0,f):d.push(f),
// Keep track of which events have ever been used, for event optimization
ae.event.global[h]=!0;
// Nullify elem to prevent memory leaks in IE
e=null}},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=ae.hasData(e)&&ae._data(e);if(m&&(u=m.events)){for(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(ue)||[""],l=t.length;l--;)
// Unbind all events (on this namespace, if provided) for the element
if(s=je.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=ae.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||ae.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)ae.event.remove(e,d+t[l],n,r,!0);
// Remove the expando if it's no longer used
ae.isEmptyObject(u)&&(delete m.handle,
// removeData also checks for emptiness and clears the expando if empty
// so use it instead of delete
ae._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=n.type||n,g=n.namespace?n.namespace.split("."):[];
// Don't do events on text and comment nodes
if(s=u=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Ae.test(h+ae.event.triggered)&&(h.indexOf(".")>=0&&(
// Namespaced trigger; create a regexp to match event type in handle()
g=h.split("."),h=g.shift(),g.sort()),c=h.indexOf(":")<0&&"on"+h,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
n=n[ae.expando]?n:new ae.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
n.result=t,n.target||(n.target=i),
// Clone any incoming data and prepend the event, creating the handler arg list
r=null==r?[n]:ae.makeArray(r,[n]),
// Allow special events to draw outside the lines
p=ae.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!o&&!p.noBubble&&!ae.isWindow(i)){for(l=p.delegateType||h,Ae.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
u===(i.ownerDocument||V)&&d.push(u.defaultView||u.parentWindow||e)}for(
// Fire handlers on the event path
a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,
// jQuery handler
f=(ae._data(s,"events")||{})[n.type]&&ae._data(s,"handle"),f&&f.apply(s,r),(
// Native handler
f=c&&s[c])&&ae.acceptData(s)&&f.apply&&f.apply(s,r)===!1&&n.preventDefault();
// If nobody prevented the default action, do it now
if(n.type=h,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(i.ownerDocument,r)===!1)&&("click"!==h||!ae.nodeName(i,"a"))&&ae.acceptData(i)&&c&&i[h]&&!ae.isWindow(i)){
// Don't re-trigger an onFOO event when we call its FOO() method
u=i[c],u&&(i[c]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
ae.event.triggered=h;try{i[h]()}catch(e){}ae.event.triggered=t,u&&(i[c]=u)}return n.result}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
e=ae.event.fix(e);var n,r,i,o,a,s=[],u=te.call(arguments),l=(ae._data(this,"events")||{})[e.type]||[],c=ae.event.special[e.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(
// Determine handlers
s=ae.event.handlers.call(this,e,l),
// Run delegates first; they may want to stop propagation beneath us
n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or
// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
e.namespace_re&&!e.namespace_re.test(a.namespace)||(e.handleObj=a,e.data=a.data,(i=((ae.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
// Avoid non-left-click bubbling in Firefox (#3861)
if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;r<u;r++)a=n[r],
// Don't conflict with Object.prototype properties (#13203)
o=a.selector+" ",i[o]===t&&(i[o]=a.needsContext?ae(o,this).index(l)>=0:ae.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}
// Add the remaining (directly-bound) handlers
return u<n.length&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[ae.expando])return e;
// Create a writable copy of the event object and normalize some properties
var t,n,r=e,i=ae.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=new ae.Event(r),t=o.length;t--;)n=o[t],e[n]=r[n];
// Support: IE<9
// Fix target property (#1925)
// Support: Chrome 23+, Safari?
// Target should not be a text node (#504, #13143)
// Support: IE<9
// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
return e.target||(e.target=r.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){
// Add which for key events
return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;
// Calculate pageX/Y if missing and clientX/Y available
// Add relatedTarget, if necessary
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||V,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if(ae.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1}},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==V.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){if(this===V.activeElement&&this.blur)return this.blur(),!1},delegateType:"focusout"},beforeunload:{postDispatch:function(e){
// Even when returnValue equals to undefined Firefox will still show alert
e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){
// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
var i=ae.extend(new ae.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?ae.event.trigger(i,null,t):ae.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},ae.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(
// #8545, #7054, preventing memory leaks for custom events in IE6-8
// detachEvent needed property on element, by name of that event, to properly expose it to GC
void 0===e[r]&&(e[r]=null),e.detachEvent(r,n))},ae.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof ae.Event))return new ae.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,
// Put explicitly provided properties onto the event object
t&&ae.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||ae.now(),
// Mark it as fixed
this[ae.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
ae.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(
// If preventDefault exists, run it on the original event
e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(
// If stopPropagation exists, run it on the original event
e.stopPropagation&&e.stopPropagation(),
// Support: IE
// Set the cancelBubble property of the original event to true
e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
ae.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){ae.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===r||ae.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),
// IE submit delegation
ae.support.submitBubbles||(ae.event.special.submit={setup:function(){
// Only need this for delegated form submit events
if(ae.nodeName(this,"form"))return!1;
// Lazy-add a submit handler when a descendant form may potentially be submitted
ae.event.add(this,"click._submit keypress._submit",function(e){
// Node name check avoids a VML-related crash in IE (#9807)
var n=e.target,r=ae.nodeName(n,"input")||ae.nodeName(n,"button")?n.form:t;r&&!ae._data(r,"submitBubbles")&&(ae.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),ae._data(r,"submitBubbles",!0))})},postDispatch:function(e){
// If form was submitted by the user, bubble the event up the tree
e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&ae.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){
// Only need this for delegated form submit events
if(ae.nodeName(this,"form"))return!1;
// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
ae.event.remove(this,"._submit")}}),
// IE change delegation and checkbox/radio fix
ae.support.changeBubbles||(ae.event.special.change={setup:function(){if(ke.test(this.nodeName))
// IE doesn't fire change on a check/radio until blur; trigger it on click
// after a propertychange. Eat the blur-change in special.change.handle.
// This still fires onchange a second time for check/radio after blur.
return"checkbox"!==this.type&&"radio"!==this.type||(ae.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),ae.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),
// Allow triggered, simulated change events (#11500)
ae.event.simulate("change",this,e,!0)})),!1;
// Delegated event; lazy-add a change handler on descendant inputs
ae.event.add(this,"beforeactivate._change",function(e){var t=e.target;ke.test(t.nodeName)&&!ae._data(t,"changeBubbles")&&(ae.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||ae.event.simulate("change",this.parentNode,e,!0)}),ae._data(t,"changeBubbles",!0))})},handle:function(e){var t=e.target;
// Swallow native change events from checkbox/radio, we already triggered them above
if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return ae.event.remove(this,"._change"),!ke.test(this.nodeName)}}),
// Create "bubbling" focus and blur events
ae.support.focusinBubbles||ae.each({focus:"focusin",blur:"focusout"},function(e,t){
// Attach a single capturing handler while someone wants focusin/focusout
var n=0,r=function(e){ae.event.simulate(t,e.target,ae.event.fix(e),!0)};ae.event.special[t]={setup:function(){0==n++&&V.addEventListener(e,r,!0)},teardown:function(){0==--n&&V.removeEventListener(e,r,!0)}}}),ae.fn.extend({on:function(e,n,r,i,/*INTERNAL*/o){var a,s;
// Types can be a map of types/handlers
if("object"==typeof e){
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(
// ( types, fn )
i=n,r=n=t):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=r,r=t):(
// ( types, data, fn )
i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;
// Use same guid so caller can remove using origFn
return 1===o&&(a=i,i=function(e){
// Can use an empty set, since event contains the info
return ae().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=ae.guid++)),this.each(function(){ae.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return i=e.handleObj,ae(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){
// ( types-object [, selector] )
for(o in e)this.off(o,n,e[o]);return this}
// ( types [, fn] )
return n!==!1&&"function"!=typeof n||(r=n,n=t),r===!1&&(r=l),this.each(function(){ae.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){ae.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ae.event.trigger(e,t,n,!0)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
// Handle event binding
ae.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Ee.test(t)&&(ae.event.fixHooks[t]=ae.event.keyHooks),Se.test(t)&&(ae.event.fixHooks[t]=ae.event.mouseHooks)}),/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
function(e,t){/**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
function n(e){return le.test(e+"")}/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function r(){var e,t=[];return e=function(n,r){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return t.push(n+=" ")>T.cacheLength&&delete e[t.shift()],e[n]=r}}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function i(e){return e[O]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function o(e){var t=j.createElement("div");try{return e(t)}catch(e){return!1}finally{
// release memory in IE
t=null}}function a(e,t,n,r){var i,o,a,s,
// QSA vars
u,f,p,d,h,g;if((t?t.ownerDocument||t:B)!==j&&A(t),t=t||j,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!L&&!r){
// Shortcuts
if(i=ce.exec(e))
// Speed-up: Sizzle("#ID")
if(a=i[1]){if(9===s){
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(!(o=t.getElementById(a))||!o.parentNode)return n;
// Handle the case where IE, Opera, and Webkit return items
// by name instead of ID
if(o.id===a)return n.push(o),n}else
// Context is not a document
if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&_(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return V.apply(n,Y.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&P.getByClassName&&t.getElementsByClassName)return V.apply(n,Y.call(t.getElementsByClassName(a),0)),n}
// QSA path
if(P.qsa&&!H.test(e)){
// qSA works strangely on Element-rooted queries
// We can work around this by specifying an extra ID on the root
// and working up from there (Thanks to Andrew Dupont for the technique)
// IE 8 doesn't work on object elements
if(p=!0,d=O,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(f=l(e),(p=t.getAttribute("id"))?d=p.replace(de,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=f.length;u--;)f[u]=d+c(f[u]);h=ue.test(e)&&t.parentNode||t,g=f.join(",")}if(g)try{return V.apply(n,Y.call(h.querySelectorAll(g),0)),n}catch(e){}finally{p||t.removeAttribute("id")}}}
// All others
return v(e.replace(te,"$1"),t,n,r)}function s(e,t){for(var n=e&&t&&e.nextSibling;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}
// Returns a function to use in pseudos for positionals
function u(e){return i(function(t){return t=+t,i(function(n,r){
// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function l(e,t){var n,r,i,o,s,u,l,c=I[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){
// Comma and first run
n&&!(r=ne.exec(s))||(r&&(
// Don't consume trailing commas as valid
s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,
// Combinators
(r=re.exec(s))&&(n=r.shift(),i.push({value:n,
// Cast descendant combinators to space
type:r[0].replace(te," ")}),s=s.slice(n.length));
// Filters
for(o in T.filter)!(r=se[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return t?s.length:s?a.error(e):I(e,u).slice(0)}function c(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function f(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=W++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=R+" "+o;
// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[O]||(t[O]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===w)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||w,u[1]===!0)return!0}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function d(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function h(e,t,n,r,o,a){return r&&!r[O]&&(r=h(r)),o&&!o[O]&&(o=h(o,a)),i(function(i,a,s,u){var l,c,f,p=[],h=[],g=a.length,
// Get initial elements from seed or context
m=i||y(t||"*",s.nodeType?[s]:s,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
v=!e||!i&&t?m:d(m,p,e,s,u),b=n?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
o||(i?e:g||r)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
a:v;
// Apply postFilter
if(
// Find primary matches
n&&n(v,b,s,u),r)for(l=d(b,h),r(l,[],s,u),
// Un-match failing elements by moving them back to matcherIn
c=l.length;c--;)(f=l[c])&&(b[h[c]]=!(v[h[c]]=f));if(i){if(o||e){if(o){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
l=[],c=b.length;c--;)(f=b[c])&&
// Restore matcherIn since elem is not yet a final match
l.push(v[c]=f);o(null,b=[],l,u)}for(
// Move matched elements from seed to results to keep them synchronized
c=b.length;c--;)(f=b[c])&&(l=o?J.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else b=d(b===a?b.splice(g,b.length):b),o?o(null,a,b,u):V.apply(a,b)})}function g(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
u=f(function(e){return e===t},a,!0),l=f(function(e){return J.call(t,e)>-1},a,!0),d=[function(e,n,r){return!o&&(r||n!==S)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];s<i;s++)if(n=T.relative[e[s].type])d=[f(p(d),n)];else{
// Return special upon seeing a positional matcher
if(n=T.filter[e[s].type].apply(null,e[s].matches),n[O]){for(
// Find the next relative operator (if any) for proper handling
r=++s;r<i&&!T.relative[e[r].type];r++);return h(s>1&&p(d),s>1&&c(e.slice(0,s-1)).replace(te,"$1"),n,s<r&&g(e.slice(s,r)),r<i&&g(e=e.slice(r)),r<i&&c(e))}d.push(n)}return p(d)}function m(e,t){
// A counter to specify which element is currently being matched
var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,h,g=[],m=0,y="0",v=i&&[],b=null!=c,x=S,
// We must always have either seed elements or context
N=i||o&&T.find.TAG("*",c&&s.parentNode||s),
// Nested matchers should use non-integer dirruns
C=R+=null==x?1:Math.E;
// Add elements passing elementMatchers directly to results
for(b&&(S=s!==j&&s,w=n);null!=(f=N[y]);y++){if(o&&f){for(p=0;h=e[p];p++)if(h(f,s,u)){l.push(f);break}b&&(R=C,w=++n)}
// Track unmatched elements for set filters
r&&(
// They will have gone through all possible matchers
(f=!h&&f)&&m--,
// Lengthen the array for every element, matched or not
i&&v.push(f))}if(
// Apply set filters to unmatched elements
// `i` starts as a string, so matchedCount would equal "00" if there are no elements
m+=y,r&&y!==m){for(p=0;h=t[p];p++)h(v,g,s,u);if(i){
// Reintegrate element matches to eliminate the need for sorting
if(m>0)for(;y--;)v[y]||g[y]||(g[y]=U.call(l));
// Discard index placeholder values to get only actual matches
g=d(g)}
// Add matches to results
V.apply(l,g),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
b&&!i&&g.length>0&&m+t.length>1&&a.uniqueSort(l)}
// Override manipulation of globals by nested matchers
return b&&(R=C,S=x),v};return r?i(s):s}function y(e,t,n){for(var r=0,i=t.length;r<i;r++)a(e,t[r],n);return n}function v(e,t,n,r){var i,o,a,s,u,f=l(e);if(!r&&1===f.length){if(
// Take a shortcut and set the context if the root selector is an ID
o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!L&&T.relative[o[1].type]){if(!(t=T.find.ID(a.matches[0].replace(he,ge),t)[0]))return n;e=e.slice(o.shift().value.length)}
// Fetch a seed set for right-to-left matching
for(i=se.needsContext.test(e)?-1:o.length-1;i>=0&&(a=o[i],!T.relative[s=a.type]);i--)if((u=T.find[s])&&(r=u(a.matches[0].replace(he,ge),ue.test(o[0].type)&&t.parentNode||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(i,1),!(e=r.length&&c(o)))return V.apply(n,Y.call(r,0)),n;break}}
// Compile and execute a filtering function
// Provide `match` to avoid retokenization if we modified the selector above
return k(e,f)(r,t,L,n,ue.test(e)),n}
// Easy API for creating new setFilters
function b(){}var x,w,T,N,C,k,E,S,
// Local document vars
A,j,D,L,H,M,q,_,F,
// Instance-specific data
O="sizzle"+-new Date,B=e.document,P={},R=0,W=0,$=r(),I=r(),z=r(),
// Array methods
X=[],U=X.pop,V=X.push,Y=X.slice,
// Use a stripped-down indexOf if we can't use a native one
J=X.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(this[t]===e)return t;return-1},
// Regular expressions
// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
G="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/css3-syntax/#characters
Q="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Loosely modeled on CSS identifier characters
// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
K=Q.replace("w","w#"),Z="\\["+G+"*("+Q+")"+G+"*(?:([*^$|!~]?=)"+G+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+K+")|)|)"+G+"*\\]",
// Prefer arguments quoted,
//   then not containing pseudos/brackets,
//   then attribute selectors/non-parenthetical expressions,
//   then anything else
// These preferences are here to reduce the number of selectors
//   needing tokenize in the PSEUDO preFilter
ee=":("+Q+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+Z.replace(3,8)+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
te=new RegExp("^"+G+"+|((?:^|[^\\\\])(?:\\\\.)*)"+G+"+$","g"),ne=new RegExp("^"+G+"*,"+G+"*"),re=new RegExp("^"+G+"*([\\x20\\t\\r\\n\\f>+~])"+G+"*"),ie=new RegExp(ee),oe=new RegExp("^"+K+"$"),se={ID:new RegExp("^#("+Q+")"),CLASS:new RegExp("^\\.("+Q+")"),NAME:new RegExp("^\\[name=['\"]?("+Q+")['\"]?\\]"),TAG:new RegExp("^("+Q.replace("w","w*")+")"),ATTR:new RegExp("^"+Z),PSEUDO:new RegExp("^"+ee),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+G+"*(even|odd|(([+-]|)(\\d*)n|)"+G+"*(?:([+-]|)"+G+"*(\\d+)|))"+G+"*\\)|)","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+G+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+G+"*((?:-\\d)?\\d*)"+G+"*\\)|)(?=[^-]|$)","i")},ue=/[\x20\t\r\n\f]*[+~]/,le=/\{\s*\[native code\]\s*\}/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ce=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,fe=/^(?:input|select|textarea|button)$/i,pe=/^h\d$/i,de=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
he=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,ge=function(e,t){var n="0x"+t-65536;
// NaN means non-codepoint
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return n!==n?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)};
// Use a stripped-down slice if we can't use a native one
try{Y.call(D.childNodes,0)[0].nodeType}catch(e){Y=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
C=a.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
A=a.setDocument=function(e){var t=e?e.ownerDocument||e:B;
// If no document and documentElement is available, return
// If no document and documentElement is available, return
// Set our document
// Support tests
// Check if getElementsByTagName("*") returns only elements
// Check if attributes should be retrieved by attribute nodes
// Check if getElementsByClassName can be trusted
// Check if getElementById returns elements by name
// Check if getElementsByName privileges form controls or returns elements by ID
// IE6/7 return modified attributes
// ID find and filter
// Tag
// Name
// Class
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21),
// no need to also add to buggyMatches since matches checks buggyQSA
// A support test would require too much code (would include document ready)
// Build QSA regex
// Regex strategy adopted from Diego Perini
// Element contains another
// Purposefully does not implement inclusive descendent
// As in, an element does not contain itself
// Document order sorting
// Always assume the presence of duplicates if sort doesn't
// pass them to our comparison function (as in Google Chrome).
return t!==j&&9===t.nodeType&&t.documentElement?(j=t,D=t.documentElement,L=C(t),P.tagNameNoComments=o(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),P.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");
// IE8 returns a string for some attributes even when not present
return"boolean"!==t&&"string"!==t}),P.getByClassName=o(function(e){
// Opera can't find a second classname (in 9.6)
// Safari 3.2 caches class attributes and doesn't catch changes
return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!(!e.getElementsByClassName||!e.getElementsByClassName("e").length)&&(e.lastChild.className="e",2===e.getElementsByClassName("e").length)}),P.getByName=o(function(e){
// Inject content
e.id=O+0,e.innerHTML="<a name='"+O+"'></a><div name='"+O+"'></div>",D.insertBefore(e,D.firstChild);
// Test
var n=t.getElementsByName&&
// buggy browsers will return fewer than the correct 2
t.getElementsByName(O).length===2+
// buggy browsers will return more than the correct 0
t.getElementsByName(O+0).length;
// Cleanup
return P.getIdNotName=!t.getElementById(O),D.removeChild(e),n}),T.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&void 0!==e.firstChild.getAttribute&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},P.getIdNotName?(T.find.ID=function(e,t){if(void 0!==t.getElementById&&!L){var n=t.getElementById(e);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(he,ge);return function(e){return e.getAttribute("id")===t}}):(T.find.ID=function(e,t){if(void 0!==t.getElementById&&!L){var n=t.getElementById(e);/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
return n?n.id===e||void 0!==n.getAttributeNode&&n.getAttributeNode("id").value===e?[n]:void 0:[]}},T.filter.ID=function(e){var t=e.replace(he,ge);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=P.tagNameNoComments?function(e,t){if(void 0!==t.getElementsByTagName)return t.getElementsByTagName(e)}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);
// Filter out possible comments
if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},T.find.NAME=P.getByName&&function(e,t){if(void 0!==t.getElementsByName)return t.getElementsByName(name)},T.find.CLASS=P.getByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&!L)return t.getElementsByClassName(e)},M=[],H=[":focus"],(P.qsa=n(t.querySelectorAll))&&(o(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explictly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
e.innerHTML="<select><option selected=''></option></select>",
// IE8 - Some boolean attributes are not treated correctly
e.querySelectorAll("[selected]").length||H.push("\\["+G+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||H.push(":checked")}),o(function(e){
// Opera 10-12/IE8 - ^= $= *= and empty values
// Should not select anything
e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&H.push("[*^$]="+G+"*(?:\"\"|'')"),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),H.push(",.*:")})),(P.matchesSelector=n(q=D.matchesSelector||D.mozMatchesSelector||D.webkitMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&o(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
P.disconnectedMatch=q.call(e,"div"),
// This should fail with an exception
// Gecko does not error, returns false instead
q.call(e,"[s!='']:x"),M.push("!=",ee)}),H=new RegExp(H.join("|")),M=new RegExp(M.join("|")),_=n(D.contains)||D.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},F=D.compareDocumentPosition?function(e,n){var r;return e===n?(E=!0,0):(r=n.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(n))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===t||_(B,e)?-1:n===t||_(B,n)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,a=n.parentNode,u=[e],l=[n];
// The nodes are identical, we can exit early
if(e===n)return E=!0,0;if(e.sourceIndex&&n.sourceIndex)return(~n.sourceIndex||1<<31)-(_(B,e)&&~e.sourceIndex||1<<31);if(!o||!a)return e===t?-1:n===t?1:o?-1:a?1:0;if(o===a)return s(e,n);for(
// Otherwise we need full lists of their ancestors for comparison
r=e;r=r.parentNode;)u.unshift(r);for(r=n;r=r.parentNode;)l.unshift(r);
// Walk down the tree looking for a discrepancy
for(;u[i]===l[i];)i++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return i?s(u[i],l[i]):u[i]===B?-1:l[i]===B?1:0},E=!1,[0,0].sort(F),P.detectDuplicates=E,j):j},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){
// rbuggyQSA always contains :focus, so no need for an existence check
if(
// Set document vars if needed
(e.ownerDocument||e)!==j&&A(e),
// Make sure that attribute selectors are quoted
t=t.replace(/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,"='$1']"),P.matchesSelector&&!L&&(!M||!M.test(t))&&!H.test(t))try{var n=q.call(e,t);
// IE 9's matchesSelector returns false on disconnected nodes
if(n||P.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){}return a(t,j,null,[e]).length>0},a.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==j&&A(e),_(e,t)},a.attr=function(e,t){var n;
// Set document vars if needed
return(e.ownerDocument||e)!==j&&A(e),L||(t=t.toLowerCase()),(n=T.attrHandle[t])?n(e):L||P.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},
// Document sorting and removing duplicates
a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(
// Unless we *know* we can detect duplicates, assume their presence
E=!P.detectDuplicates,e.sort(F),E){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
N=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (see #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=N(e)}else if(3===i||4===i)return e.nodeValue}else
// If no nodeType, this is expected to be an array
for(;t=e[r];r++)
// Do not traverse comment nodes
n+=N(t);
// Do not include comment or processing instruction nodes
return n},T=a.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:i,match:se,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){
// Move the given value to match[3] whether quoted or unquoted
return e[1]=e[1].replace(he,ge),e[3]=(e[4]||e[5]||"").replace(he,ge),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return se.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ie.test(n)&&(t=l(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(he,ge).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=$[e+" "];return t||(t=new RegExp("(^|"+G+")"+e+"("+G+"|$)"))&&$(e,function(e){return t.test(e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t&&(i===n||i.substr(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
// Shortcut for :nth-*(n)
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){
// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
h=g="only"===e&&!h&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(h=[a?m.firstChild:m.lastChild],a&&v){for(
// Seek `elem` from a previously-cached index
c=m[O]||(m[O]={}),l=c[e]||[],d=l[0]===R&&l[1],p=l[0]===R&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(
// Fallback to seeking `elem` from the start
p=d=0)||h.pop();)
// When found, cache indexes on `parent` and break
if(1===f.nodeType&&++p&&f===t){c[e]=[R,d,p];break}}else if(v&&(l=(t[O]||(t[O]={}))[e])&&l[0]===R)p=l[1];else
// Use the same loop as above to seek `elem` from the start
for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(
// Cache the index of each encountered element
v&&((f[O]||(f[O]={}))[e]=[R,p]),f!==t)););
// Incorporate the offset, then check against cycle size
return(p-=i)===r||p%r==0&&p/r>=0}}},PSEUDO:function(e,t){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var n,r=T.pseudos[e]||T.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return r[O]?r(t):r.length>1?(n=[e,e,"",t],T.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=J.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{
// Potentially complex pseudos
not:i(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],r=k(e.replace(te,"$1"));return r[O]?i(function(e,t,n,i){
// Match elements unmatched by `matcher`
for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||N(t)).indexOf(e)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:i(function(e){
// lang value must be a valid identifider
return oe.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(he,ge).toLowerCase(),function(t){var n;do{if(n=L?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===D},focus:function(e){return e===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
//   not comment, processing instructions, or others
// Thanks to Diego Perini for the nodeName shortcut
//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},
// Element/input types
header:function(e){return pe.test(e.nodeName)},input:function(e){return fe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;
// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
// use getAttribute instead to test this case
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},
// Position-in-collection
first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[n<0?n+t:n]}),even:u(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}};
// Add button/input type pseudos
for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[x]=
// Returns a function to use in pseudos for input types
function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(x);for(x in{submit:!0,reset:!0})T.pseudos[x]=
// Returns a function to use in pseudos for buttons
function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(x);k=a.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=l(e)),n=t.length;n--;)o=g(t[n]),o[O]?r.push(o):i.push(o);
// Cache the compiled function
o=z(e,m(i,r))}return o},
// Deprecated
T.pseudos.nth=T.pseudos.eq,T.filters=b.prototype=T.pseudos,T.setFilters=new b,
// Initialize with the default document
A(),
// Override sizzle attribute retrieval
a.attr=ae.attr,ae.find=a,ae.expr=a.selectors,ae.expr[":"]=ae.expr.pseudos,ae.unique=a.uniqueSort,ae.text=a.getText,ae.isXMLDoc=a.isXML,ae.contains=a.contains}(e);var De=/Until$/,Le=/^(?:parents|prev(?:Until|All))/,He=/^.[^:#\[\.,]*$/,Me=ae.expr.match.needsContext,
// methods guaranteed to produce a unique set when starting from a unique set
qe={children:!0,contents:!0,next:!0,prev:!0};ae.fn.extend({find:function(e){var t,n,r;if("string"!=typeof e)return r=this,this.pushStack(ae(e).filter(function(){for(t=0;t<r.length;t++)if(ae.contains(r[t],this))return!0}));for(n=[],t=0;t<this.length;t++)ae.find(e,this[t],n);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return n=this.pushStack(ae.unique(n)),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=ae(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(ae.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!e&&("string"==typeof e?Me.test(e)?ae(e,this.context).index(this[0])>=0:ae.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=Me.test(e)||"string"!=typeof e?ae(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:ae.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?ae.unique(o):o)},
// Determine the position of an element within
// the matched set of elements
index:function(e){
// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?ae.inArray(this[0],ae(e)):ae.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?ae(e,t):ae.makeArray(e&&e.nodeType?[e]:e),r=ae.merge(this.get(),n);return this.pushStack(ae.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ae.fn.andSelf=ae.fn.addBack,ae.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ae.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ae.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")},nextAll:function(e){return ae.dir(e,"nextSibling")},prevAll:function(e){return ae.dir(e,"previousSibling")},nextUntil:function(e,t,n){return ae.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ae.dir(e,"previousSibling",n)},siblings:function(e){return ae.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ae.sibling(e.firstChild)},contents:function(e){return ae.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ae.merge([],e.childNodes)}},function(e,t){ae.fn[e]=function(n,r){var i=ae.map(this,t,n);return De.test(e)||(r=n),r&&"string"==typeof r&&(i=ae.filter(r,i)),i=this.length>1&&!qe[e]?ae.unique(i):i,this.length>1&&Le.test(e)&&(i=i.reverse()),this.pushStack(i)}}),ae.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?ae.find.matchesSelector(t[0],e)?[t[0]]:[]:ae.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!ae(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var _e="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Fe=new RegExp("<(?:"+_e+")[\\s/>]","i"),Oe=/^\s+/,Be=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Pe=/<([\w:]+)/,Re=/<tbody/i,We=/<|&#?\w+;/,$e=/<(?:script|style|link)/i,Ie=/^(?:checkbox|radio)$/i,
// checked="checked" or checked
ze=/checked\s*(?:[^=]|=\s*.checked.)/i,Xe=/^$|\/(?:java|ecma)script/i,Ue=/^true\/(.*)/,
// We have to close these tags to support XHTML (#13200)
Ve={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
// unless wrapped in a div with non-breaking characters in front of it.
_default:ae.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ye=p(V),Je=Ye.appendChild(V.createElement("div"));Ve.optgroup=Ve.option,Ve.tbody=Ve.tfoot=Ve.colgroup=Ve.caption=Ve.thead,Ve.th=Ve.td,ae.fn.extend({text:function(e){return ae.access(this,function(e){return e===t?ae.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(ae.isFunction(e))return this.each(function(t){ae(this).wrapAll(e.call(this,t))});if(this[0]){
// The elements to wrap the target around
var t=ae(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return ae.isFunction(e)?this.each(function(t){ae(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ae(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ae.isFunction(e);return this.each(function(n){ae(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ae.nodeName(this,"body")||ae(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},
// keepData is for internal use only--do not document
remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||ae.filter(e,[n]).length>0)&&(t||1!==n.nodeType||ae.cleanData(b(n)),n.parentNode&&(t&&ae.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){
// Remove any remaining nodes
for(
// Remove element nodes and prevent memory leaks
1===e.nodeType&&ae.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);
// If this is a select, ensure that it displays empty (#12336)
// Support: IE<9
e.options&&ae.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ae.clone(this,e,t)})},html:function(e){return ae.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g,""):t;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!$e.test(e)&&(ae.support.htmlSerialize||!Fe.test(e))&&(ae.support.leadingWhitespace||!Oe.test(e))&&!Ve[(Pe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Be,"<$1></$2>");try{for(;r<i;r++)
// Remove element nodes and prevent memory leaks
n=this[r]||{},1===n.nodeType&&(ae.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(e){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){
// Make sure that the elements are removed from the DOM before they are inserted
// this can help fix replacing a parent with child elements
return ae.isFunction(e)||"string"==typeof e||(e=ae(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;(n&&1===this.nodeType||11===this.nodeType)&&(ae(this).remove(),t?t.parentNode.insertBefore(e,t):n.appendChild(e))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){
// Flatten any nested arrays
e=Z.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=ae.isFunction(y);
// We can't cloneNode fragments that contain checked, in WebKit
if(v||!(f<=1||"string"!=typeof y||ae.support.checkClone)&&ze.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(i=ae.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){
// Use the original fragment for the last item instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(n=n&&ae.nodeName(o,"tr"),a=ae.map(b(i,"script"),h),s=a.length;c<f;c++)u=i,c!==m&&(u=ae.clone(u,!0,!0),
// Keep references to cloned scripts for later restoration
s&&ae.merge(a,b(u,"script"))),r.call(n&&ae.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],u,c);if(s)
// Evaluate executable scripts on first document insertion
for(l=a[a.length-1].ownerDocument,
// Reenable scripts
ae.map(a,g),c=0;c<s;c++)u=a[c],Xe.test(u.type||"")&&!ae._data(u,"globalEval")&&ae.contains(l,u)&&(u.src?
// Hope ajax is available...
ae.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,throws:!0}):ae.globalEval((u.text||u.textContent||u.innerHTML||"").replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,"")));
// Fix #11809: Avoid leaking memory
i=o=null}return this}}),ae.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ae.fn[e]=function(e){for(var n,r=0,i=[],o=ae(e),a=o.length-1;r<=a;r++)n=r===a?this:this.clone(!0),ae(o[r])[t](n),
// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
ee.apply(i,n.get());return this.pushStack(i)}}),ae.extend({clone:function(e,t,n){var r,i,o,a,s,u=ae.contains(e.ownerDocument,e);if(ae.support.html5Clone||ae.isXMLDoc(e)||!Fe.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(Je.innerHTML=e.outerHTML,Je.removeChild(s=Je.firstChild)),!(ae.support.noCloneEvent&&ae.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ae.isXMLDoc(e)))
// Fix all IE cloning issues
for(
// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
r=b(s),i=b(e),a=0;null!=(o=i[a]);++a)
// Ensure that the destination node is not null; Fixes #9587
r[a]&&v(o,r[a]);
// Copy the events from the original to the clone
if(t)if(n)for(i=i||b(e),r=r||b(s),a=0;null!=(o=i[a]);a++)y(o,r[a]);else y(e,s);
// Return the cloned set
// Preserve script evaluation history
return r=b(s,"script"),r.length>0&&m(r,!u&&b(e,"script")),r=i=o=null,s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,
// Ensure a safe fragment
d=p(t),h=[],g=0;g<f;g++)if((o=e[g])||0===o)
// Add nodes directly
if("object"===ae.type(o))ae.merge(h,o.nodeType?[o]:o);else if(We.test(o)){for(s=s||d.appendChild(t.createElement("div")),
// Deserialize a standard representation
a=(Pe.exec(o)||["",""])[1].toLowerCase(),u=Ve[a]||Ve._default,s.innerHTML=u[1]+o.replace(Be,"<$1></$2>")+u[2],
// Descend through wrappers to the right content
c=u[0];c--;)s=s.lastChild;
// Remove IE's autoinserted <tbody> from table fragments
if(
// Manually add leading whitespace removed by IE
!ae.support.leadingWhitespace&&Oe.test(o)&&h.push(t.createTextNode(Oe.exec(o)[0])),!ae.support.tbody)for(
// String was a <table>, *may* have spurious <tbody>
o="table"!==a||Re.test(o)?
// String was a bare <thead> or <tfoot>
"<table>"!==u[1]||Re.test(o)?0:s:s.firstChild,c=o&&o.childNodes.length;c--;)ae.nodeName(l=o.childNodes[c],"tbody")&&!l.childNodes.length&&o.removeChild(l);
// Fix #12392 for oldIE
for(ae.merge(h,s.childNodes),
// Fix #12392 for WebKit and IE > 9
s.textContent="";s.firstChild;)s.removeChild(s.firstChild);
// Remember the top-level container for proper cleanup
s=d.lastChild}else h.push(t.createTextNode(o));for(
// Fix #11356: Clear elements from fragment
s&&d.removeChild(s),
// Reset defaultChecked for any radios and checkboxes
// about to be appended to the DOM in IE 6/7 (#8060)
ae.support.appendChecked||ae.grep(b(h,"input"),x),g=0;o=h[g++];)
// #4087 - If origin and destination elements are the same, and this is
// that element, do not do anything
if((!r||ae.inArray(o,r)===-1)&&(i=ae.contains(o.ownerDocument,o),
// Append to fragment
s=b(d.appendChild(o),"script"),
// Preserve script evaluation history
i&&m(s),n))for(c=0;o=s[c++];)Xe.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,/* internal */t){for(var n,r,i,o,a=0,s=ae.expando,u=ae.cache,l=ae.support.deleteExpando,c=ae.event.special;null!=(i=e[a]);a++)if((t||ae.acceptData(i))&&(r=i[s],n=r&&u[r])){if(n.events)for(o in n.events)c[o]?ae.event.remove(i,o):ae.removeEvent(i,o,n.handle);
// Remove cache only if it was not already removed by jQuery.event.remove
u[r]&&(delete u[r],
// IE does not allow us to delete expando properties from nodes,
// nor does it have a removeAttribute function on Document nodes;
// we must handle all of these cases
l?delete i[s]:void 0!==i.removeAttribute?i.removeAttribute(s):i[s]=null,K.push(r))}}});var Ge,Qe,Ke,Ze=/alpha\([^)]*\)/i,et=/opacity\s*=\s*([^)]*)/,tt=/^(top|right|bottom|left)$/,
// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
nt=/^(none|table(?!-c[ea]).+)/,rt=/^margin/,it=new RegExp("^("+se+")(.*)$","i"),ot=new RegExp("^("+se+")(?!px)[a-z%]+$","i"),at=new RegExp("^([+-])=("+se+")","i"),st={BODY:"block"},ut={position:"absolute",visibility:"hidden",display:"block"},lt={letterSpacing:0,fontWeight:400},ct=["Top","Right","Bottom","Left"],ft=["Webkit","O","Moz","ms"];ae.fn.extend({css:function(e,n){return ae.access(this,function(e,n,r){var i,o,a={},s=0;if(ae.isArray(n)){for(i=Qe(e),o=n.length;s<o;s++)a[n[s]]=ae.css(e,n[s],!1,i);return a}return r!==t?ae.style(e,n,r):ae.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:T(this))?ae(this).show():ae(this).hide()})}}),ae.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=Ge(e,"opacity");return""===n?"1":n}}}},
// Exclude the following css properties to add px
cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{
// normalize float css property
float:ae.support.cssFloat?"cssFloat":"styleFloat"},
// Get and set the style property on a DOM Node
style:function(e,n,r,i){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var o,a,s,u=ae.camelCase(n),l=e.style;
// Check if we're setting a value
if(n=ae.cssProps[u]||(ae.cssProps[u]=w(l,u)),
// gets hook for the prefixed version
// followed by the unprefixed version
s=ae.cssHooks[n]||ae.cssHooks[u],r===t)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];
// Make sure that NaN and null values aren't set. See: #7116
if(!(a=typeof r,
// convert relative number strings (+= or -=) to relative numbers. #7345
"string"===a&&(o=at.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(ae.css(e,n)),
// Fixes bug #9237
a="number"),null==r||"number"===a&&isNaN(r)||(
// If a number was passed in, add 'px' to the (except for certain CSS properties)
"number"!==a||ae.cssNumber[u]||(r+="px"),
// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
// but it would mean to define eight (for every problematic property) identical functions
ae.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))
// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
// Fixes bug #5509
try{l[n]=r}catch(e){}}},css:function(e,n,r,i){var o,a,s,u=ae.camelCase(n);
// Return, converting to number if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// gets hook for the prefixed version
// followed by the unprefixed version
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
//convert "normal" to computed value
// Return, converting to number if forced or a qualifier was provided and val looks numeric
return n=ae.cssProps[u]||(ae.cssProps[u]=w(e.style,u)),s=ae.cssHooks[n]||ae.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=Ge(e,n,i)),"normal"===o&&n in lt&&(o=lt[n]),r?(a=parseFloat(o),r===!0||ae.isNumeric(a)?a||0:o):o},
// A method for quickly swapping in/out CSS properties to get correct calculations
swap:function(e,t,n,r){var i,o,a={};
// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);
// Revert the old values
for(o in t)e.style[o]=a[o];return i}}),
// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
e.getComputedStyle?(Qe=function(t){return e.getComputedStyle(t,null)},Ge=function(e,n,r){var i,o,a,s=r||Qe(e),
// getPropertyValue is only needed for .css('filter') in IE9, see #12537
u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;
// A tribute to the "awesome hack by Dean Edwards"
// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return s&&(""!==u||ae.contains(e.ownerDocument,e)||(u=ae.style(e,n)),ot.test(u)&&rt.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(Qe=function(e){return e.currentStyle},Ge=function(e,n,r){var i,o,a,s=r||Qe(e),u=s?s[n]:t,l=e.style;
// Avoid setting ret to empty string here
// so we don't default to auto
// From the awesome hack by Dean Edwards
// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
// If we're not dealing with a regular pixel number
// but a number that has a weird ending, we need to convert it to pixels
// but not position css attributes, as those are proportional to the parent element instead
// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return null==u&&l&&l[n]&&(u=l[n]),ot.test(u)&&!tt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),ae.each(["height","width"],function(e,t){ae.cssHooks[t]={get:function(e,n,r){if(n)
// certain elements can have dimension info if we invisibly show them
// however, it must have a current display style that would benefit from this
return 0===e.offsetWidth&&nt.test(ae.css(e,"display"))?ae.swap(e,ut,function(){return E(e,t,r)}):E(e,t,r)},set:function(e,n,r){var i=r&&Qe(e);return C(e,n,r?k(e,t,r,ae.support.boxSizing&&"border-box"===ae.css(e,"boxSizing",!1,i),i):0)}}}),ae.support.opacity||(ae.cssHooks.opacity={get:function(e,t){
// IE uses filters for opacity
return et.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=ae.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
// IE has trouble with opacity if it does not have layout
// Force it by setting the zoom level
n.zoom=1,
// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
// if value === "", then remove inline opacity #12685
(t>=1||""===t)&&""===ae.trim(o.replace(Ze,""))&&n.removeAttribute&&(
// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
// if "filter:" is present at all, clearType is disabled, we want to avoid this
// style.removeAttribute is IE Only, but so apparently is this code path...
n.removeAttribute("filter"),""===t||r&&!r.filter)||(
// otherwise, set new filter values
n.filter=Ze.test(o)?o.replace(Ze,i):o+" "+i)}}),
// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
ae(function(){ae.support.reliableMarginRight||(ae.cssHooks.marginRight={get:function(e,t){if(t)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// Work around by temporarily setting element display to inline-block
return ae.swap(e,{display:"inline-block"},Ge,[e,"marginRight"])}}),
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
!ae.support.pixelPosition&&ae.fn.position&&ae.each(["top","left"],function(e,t){ae.cssHooks[t]={get:function(e,n){if(n)
// if curCSS returns percentage, fallback to offset
return n=Ge(e,t),ot.test(n)?ae(e).position()[t]+"px":n}}})}),ae.expr&&ae.expr.filters&&(ae.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!ae.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||ae.css(e,"display"))},ae.expr.filters.visible=function(e){return!ae.expr.filters.hidden(e)}),
// These hooks are used by animate to expand properties
ae.each({margin:"",padding:"",border:"Width"},function(e,t){ae.cssHooks[e+t]={expand:function(n){for(var r=0,i={},
// assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ct[r]+t]=o[r]||o[r-2]||o[0];return i}},rt.test(e)||(ae.cssHooks[e+t].set=C)});var pt=/\[\]$/,dt=/^(?:submit|button|image|reset)$/i,ht=/^(?:input|select|textarea|keygen)/i;ae.fn.extend({serialize:function(){return ae.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=ae.prop(this,"elements");return e?ae.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is(":disabled") so that fieldset[disabled] works
return this.name&&!ae(this).is(":disabled")&&ht.test(this.nodeName)&&!dt.test(e)&&(this.checked||!Ie.test(e))}).map(function(e,t){var n=ae(this).val();return null==n?null:ae.isArray(n)?ae.map(n,function(e){return{name:t.name,value:e.replace(/\r?\n/g,"\r\n")}}):{name:t.name,value:n.replace(/\r?\n/g,"\r\n")}}).get()}}),
//Serialize an array of form elements or a set of
//key/values into a query string
ae.param=function(e,n){var r,i=[],o=function(e,t){
// If value is a function, invoke it and return its value
t=ae.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
n===t&&(n=ae.ajaxSettings&&ae.ajaxSettings.traditional),ae.isArray(e)||e.jquery&&!ae.isPlainObject(e))
// Serialize the form elements
ae.each(e,function(){o(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(r in e)j(r,e[r],n,o);
// Return the resulting serialization
return i.join("&").replace(/%20/g,"+")};var
// Document location
gt,mt,yt=ae.now(),vt=/\?/,bt=/([?&])_=[^&]*/,xt=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,// IE leaves an \r character at EOL
// #7653, #8125, #8152: local protocol detection
wt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Tt=/^(?:GET|HEAD)$/,Nt=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
// Keep a copy of the old load method
Ct=ae.fn.load,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
kt={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Et={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
St="*/".concat("*");
// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try{mt=Y.href}catch(e){
// Use the href attribute of an A element
// since IE will modify it given document.location
mt=V.createElement("a"),mt.href="",mt=mt.href}
// Segment location into parts
gt=Nt.exec(mt.toLowerCase())||[],ae.fn.load=function(e,n,r){if("string"!=typeof e&&Ct)return Ct.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),ae.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&ae.ajax({url:e,
// if "type" variable is undefined, then "GET" method will be used
type:o,dataType:"html",data:n}).done(function(e){
// Save response for use in complete callback
a=arguments,s.html(i?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ae("<div>").append(ae.parseHTML(e)).find(i):
// Otherwise use the full result
e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},
// Attach a bunch of functions for handling common AJAX events
ae.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ae.fn[t]=function(e){return this.on(t,e)}}),ae.each(["get","post"],function(e,n){ae[n]=function(e,r,i,o){
// shift arguments if data argument was omitted
return ae.isFunction(r)&&(o=o||i,i=r,r=t),ae.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),ae.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:mt,type:"GET",isLocal:wt.test(gt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":St,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":e.String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":ae.parseJSON,
// Parse text as xml
"text xml":ae.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){
// Building a settings object
// Extending ajaxSettings
return t?H(H(e,ae.ajaxSettings),t):H(ae.ajaxSettings,e)},ajaxPrefilter:D(kt),ajaxTransport:D(Et),
// Main method
ajax:function(e,n){
// Callback for when everything is done
function r(e,n,r,s){var l,f,v,b,w,N=n;
// Called once
2!==x&&(
// State is "done" now
x=2,
// Clear timeout if it exists
u&&clearTimeout(u),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
i=t,
// Cache response headers
a=s||"",
// Set readyState
T.readyState=e>0?4:0,
// Get response data
r&&(b=M(p,T,r)),
// If successful, handle type chaining
e>=200&&e<300||304===e?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
p.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(ae.lastModified[o]=w),(w=T.getResponseHeader("etag"))&&(ae.etag[o]=w)),
// If not modified
304===e?(l=!0,N="notmodified"):(l=q(p,b),N=l.state,f=l.data,v=l.error,l=!v)):(
// We extract error from statusText
// then normalize statusText and status for non-aborts
v=N,!e&&N||(N="error",e<0&&(e=0))),
// Set data for the fake xhr object
T.status=e,T.statusText=(n||N)+"",
// Success/Error
l?g.resolveWith(d,[f,N,T]):g.rejectWith(d,[T,N,v]),
// Status-dependent callbacks
T.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[T,p,l?f:v]),
// Complete
m.fireWith(d,[T,N]),c&&(h.trigger("ajaxComplete",[T,p]),
// Handle the global AJAX counter
--ae.active||ae.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(n=e,e=t),
// Force options to be an object
n=n||{};var i,
// URL without anti-cache param
o,
// Response headers
a,s,
// timeout handle
u,
// Cross-domain detection vars
l,
// To know if global events are to be dispatched
c,
// Loop variable
f,
// Create the final options object
p=ae.ajaxSetup({},n),
// Callbacks context
d=p.context||p,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
h=p.context&&(d.nodeType||d.jquery)?ae(d):ae.event,
// Deferreds
g=ae.Deferred(),m=ae.Callbacks("once memory"),
// Status-dependent callbacks
y=p.statusCode||{},
// Headers (they are sent all at once)
v={},b={},
// The jqXHR state
x=0,
// Default abort message
w="canceled",
// Fake xhr
T={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=xt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return 2===x?a:null},
// Caches the header
setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return x||(p.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(x<2)for(t in e)
// Lazy-add the new callback in a way that preserves old ones
y[t]=[y[t],e[t]];else
// Execute the appropriate callbacks
T.always(e[T.status]);return this},
// Cancel the request
abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
p.url=((e||p.url||mt)+"").replace(/#.*$/,"").replace(/^\/\//,gt[1]+"//"),
// Alias method option to type as per ticket #12004
p.type=n.method||n.type||p.method||p.type,
// Extract dataTypes list
p.dataTypes=ae.trim(p.dataType||"*").toLowerCase().match(ue)||[""],
// A cross-domain request is in order when we have a protocol:host:port mismatch
null==p.crossDomain&&(l=Nt.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===gt[1]&&l[2]===gt[2]&&(l[3]||("http:"===l[1]?80:443))==(gt[3]||("http:"===gt[1]?80:443)))),
// Convert data if not already a string
p.data&&p.processData&&"string"!=typeof p.data&&(p.data=ae.param(p.data,p.traditional)),
// Apply prefilters
L(kt,p,n,T),2===x)return T;
// We can fire global events as of now if asked to
c=p.global,
// Watch for a new set of requests
c&&0==ae.active++&&ae.event.trigger("ajaxStart"),
// Uppercase the type
p.type=p.type.toUpperCase(),
// Determine if request has content
p.hasContent=!Tt.test(p.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
o=p.url,
// More options handling for requests with no content
p.hasContent||(
// If data is available, append data to url
p.data&&(o=p.url+=(vt.test(o)?"&":"?")+p.data,
// #9682: remove data so that it's not used in an eventual retry
delete p.data),
// Add anti-cache in url if needed
p.cache===!1&&(p.url=bt.test(o)?
// If there is already a '_' parameter, set its value
o.replace(bt,"$1_="+yt++):
// Otherwise add one to the end
o+(vt.test(o)?"&":"?")+"_="+yt++)),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
p.ifModified&&(ae.lastModified[o]&&T.setRequestHeader("If-Modified-Since",ae.lastModified[o]),ae.etag[o]&&T.setRequestHeader("If-None-Match",ae.etag[o])),
// Set the correct header, if data is being sent
(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",p.contentType),
// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+St+"; q=0.01":""):p.accepts["*"]);
// Check for headers option
for(f in p.headers)T.setRequestHeader(f,p.headers[f]);
// Allow custom headers/mimetypes and early abort
if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===x))
// Abort if not done already and return
return T.abort();
// aborting is no longer a cancellation
w="abort";
// Install callbacks on deferreds
for(f in{success:1,error:1,complete:1})T[f](p[f]);
// If no transport, we auto-abort
if(
// Get transport
i=L(Et,p,n,T)){T.readyState=1,
// Send global event
c&&h.trigger("ajaxSend",[T,p]),
// Timeout
p.async&&p.timeout>0&&(u=setTimeout(function(){T.abort("timeout")},p.timeout));try{x=1,i.send(v,r)}catch(e){
// Propagate exception as error if not done
if(!(x<2))throw e;r(-1,e)}}else r(-1,"No Transport");return T},getScript:function(e,n){return ae.get(e,t,n,"script")},getJSON:function(e,t,n){return ae.get(e,t,n,"json")}}),
// Install script dataType
ae.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ae.globalEval(e),e}}}),
// Handle cache's special case and global
ae.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),
// Bind script tag hack transport
ae.ajaxTransport("script",function(e){
// This transport only deals with cross domain requests
if(e.crossDomain){var n,r=V.head||ae("head")[0]||V.documentElement;return{send:function(t,i){n=V.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,
// Attach handlers for all browsers
n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(
// Handle memory leak in IE
n.onload=n.onreadystatechange=null,
// Remove the script
n.parentNode&&n.parentNode.removeChild(n),
// Dereference the script
n=null,
// Callback if not abort
t||i(200,"success"))},
// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
// Use native DOM manipulation to avoid our domManip AJAX trickery
r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var At=[],jt=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
ae.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=At.pop()||ae.expando+"_"+yt++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
ae.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(jt.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&jt.test(n.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(u||"jsonp"===n.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return o=n.jsonpCallback=ae.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(jt,"$1"+o):n.jsonp!==!1&&(n.url+=(vt.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||ae.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){
// Restore preexisting value
e[o]=a,
// Save back as free
n[o]&&(
// make sure that re-using the options doesn't screw things around
n.jsonpCallback=r.jsonpCallback,
// save the callback name for future use
At.push(o)),
// Call if it was a function and we have a response
s&&ae.isFunction(a)&&a(s[0]),s=a=t}),"script"});var Dt,Lt,Ht=0,
// #5280: Internet Explorer will keep connections alive if we don't abort on unload
Mt=e.ActiveXObject&&function(){
// Abort all pending requests
var e;for(e in Dt)Dt[e](t,!0)};
// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
ae.ajaxSettings.xhr=e.ActiveXObject?/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
function(){return!this.isLocal&&_()||F()}:
// For all other browsers, use the standard XMLHttpRequest object
_,
// Determine support properties
Lt=ae.ajaxSettings.xhr(),ae.support.cors=!!Lt&&"withCredentials"in Lt,
// Create transport if the browser can provide an xhr
(Lt=ae.support.ajax=!!Lt)&&ae.ajaxTransport(function(n){
// Cross domain only allowed if supported through XMLHttpRequest
if(!n.crossDomain||ae.support.cors){var r;return{send:function(i,o){
// Get a new xhr
var a,s,u=n.xhr();
// Apply custom fields if provided
if(
// Open the socket
// Passing null username, generates a login popup on Opera (#2865)
n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];
// Override mime type if needed
n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
// Need an extra try/catch for cross domain requests in Firefox 3
try{for(s in i)u.setRequestHeader(s,i[s])}catch(e){}
// Do send the request
// This may raise an exception which is actually
// handled in jQuery.ajax (so no try/catch here)
u.send(n.hasContent&&n.data||null),
// Listener
r=function(e,i){var s,l,c,f,p;
// Firefox throws exceptions when accessing properties
// of an xhr when a network error occurred
// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
try{
// Was never called and is aborted or complete
if(r&&(i||4===u.readyState))
// If it's an abort
if(
// Only called once
r=t,
// Do not keep as active anymore
a&&(u.onreadystatechange=ae.noop,Mt&&delete Dt[a]),i)
// Abort it manually if needed
4!==u.readyState&&u.abort();else{f={},s=u.status,p=u.responseXML,c=u.getAllResponseHeaders(),
// Construct response list
p&&p.documentElement&&(f.xml=p),
// When requesting binary data, IE6-9 will throw an exception
// on any attempt to access responseText (#11426)
"string"==typeof u.responseText&&(f.text=u.responseText);
// Firefox throws an exception when accessing
// statusText for faulty cross-domain requests
try{l=u.statusText}catch(e){
// We normalize with Webkit giving an empty statusText
l=""}
// Filter status for non standard behaviors
// If the request is local and we have data: assume a success
// (success with no data won't get notified, that's the best we
// can do given current implementations)
s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(e){i||o(-1,e)}
// Call complete if needed
f&&o(s,l,f,c)},n.async?4===u.readyState?
// (IE6 & IE7) if it's in cache and has been
// retrieved directly we need to fire the callback
setTimeout(r):(a=++Ht,Mt&&(
// Create the active xhrs callbacks list if needed
// and attach the unload handler
Dt||(Dt={},ae(e).unload(Mt)),
// Add to list of active xhrs callbacks
Dt[a]=r),u.onreadystatechange=r):
// if we're in sync mode we fire the callback
r()},abort:function(){r&&r(t,!0)}}}});var qt,_t,Ft=/^(?:toggle|show|hide)$/,Ot=new RegExp("^(?:([+-])=|)("+se+")([a-z%]*)$","i"),Bt=/queueHooks$/,Pt=[W],Rt={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Ot.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){
// We need to compute starting value
if(n=+o[2],"px"!==(r=o[3]||(ae.cssNumber[e]?"":"px"))&&s){
// Iteratively approximate from a nonzero starting point
// Prefer the current property, because this process will be trivial if it uses the same units
// Fallback to end or a simple constant
s=ae.css(i.elem,e,!0)||n||1;do{
// If previous iteration zeroed out, double until we get *something*
// Use a string for doubling factor so we don't accidentally see scale as unchanged below
u=u||".5",
// Adjust and apply
s/=u,ae.style(i.elem,e,s+r)}while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,
// If a +=/-= token was provided, we're doing a relative animation
i.end=o[1]?s+(o[1]+1)*n:n}return i}]};ae.Animation=ae.extend(P,{tweener:function(e,t){ae.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;r<i;r++)n=e[r],Rt[n]=Rt[n]||[],Rt[n].unshift(t)},prefilter:function(e,t){t?Pt.unshift(e):Pt.push(e)}}),ae.Tween=$,$.prototype={constructor:$,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ae.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t,n=$.propHooks[this.prop];return this.options.duration?this.pos=t=ae.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t;
// passing a non empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails
// so, simple values such as "10px" are parsed to Float.
// complex values such as "rotate(1rad)" are returned as is.
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ae.css(e.elem,e.prop,"auto"),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){
// use step hook for back compat - use cssHook if its there - use .style if its
// available and use plain properties where available
ae.fx.step[e.prop]?ae.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ae.cssProps[e.prop]]||ae.cssHooks[e.prop])?ae.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},
// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes
$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ae.each(["toggle","show","hide"],function(e,t){var n=ae.fn[t];ae.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),ae.fn.extend({fadeTo:function(e,t,n,r){
// show any hidden elements after setting opacity to 0
return this.filter(T).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ae.isEmptyObject(e),o=ae.speed(t,n,r),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=P(this,ae.extend({},e),o);a.finish=function(){t.stop(!0)},
// Empty animations, or finishing resolves immediately
(i||ae._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=ae.timers,a=ae._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Bt.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
!t&&r||ae.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ae._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ae.timers,a=r?r.length:0;
// look for any active animations, and finish them
for(
// enable finishing flag on private data
n.finish=!0,
// empty the queue first
ae.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
// look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);
// turn off finishing flag
delete n.finish})}}),
// Generate shortcuts for custom animations
ae.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ae.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ae.speed=function(e,t,n){var r=e&&"object"==typeof e?ae.extend({},e):{complete:n||!n&&t||ae.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ae.isFunction(t)&&t};
// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return r.duration=ae.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ae.fx.speeds?ae.fx.speeds[r.duration]:ae.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){ae.isFunction(r.old)&&r.old.call(this),r.queue&&ae.dequeue(this,r.queue)},r},ae.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ae.timers=[],ae.fx=$.prototype.init,ae.fx.tick=function(){var e,n=ae.timers,r=0;for(qt=ae.now();r<n.length;r++)
// Checks the timer has not already been removed
(e=n[r])()||n[r]!==e||n.splice(r--,1);n.length||ae.fx.stop(),qt=t},ae.fx.timer=function(e){e()&&ae.timers.push(e)&&ae.fx.start()},ae.fx.interval=13,ae.fx.start=function(){_t||(_t=setInterval(ae.fx.tick,ae.fx.interval))},ae.fx.stop=function(){clearInterval(_t),_t=null},ae.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Back Compat <1.8 extension point
ae.fx.step={},ae.expr&&ae.expr.filters&&(ae.expr.filters.animated=function(e){return ae.grep(ae.timers,function(t){return e===t.elem}).length}),ae.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){ae.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// If we don't have gBCR, just use 0,0 rather than error
// BlackBerry 5, iOS 3 (original iPhone)
return n=a.documentElement,ae.contains(n,o)?(void 0!==o.getBoundingClientRect&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},ae.offset={setOffset:function(e,t,n){var r=ae.css(e,"position");
// set position first, in-case top/left are set even on static elem
"static"===r&&(e.style.position="relative");var i,o,a=ae(e),s=a.offset(),u=ae.css(e,"top"),l=ae.css(e,"left"),c=("absolute"===r||"fixed"===r)&&ae.inArray("auto",[u,l])>-1,f={},p={};
// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),ae.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},ae.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];
// Subtract parent offsets and element margins
// note: when an element has margin: auto the offsetLeft and marginLeft
// are the same in Safari causing offset.left to incorrectly be 0
// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
// we assume that getBoundingClientRect is available when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===ae.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ae.nodeName(e[0],"html")||(n=e.offset()),n.top+=ae.css(e[0],"borderTopWidth",!0),n.left+=ae.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-ae.css(r,"marginTop",!0),left:t.left-n.left-ae.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||V.documentElement;e&&!ae.nodeName(e,"html")&&"static"===ae.css(e,"position");)e=e.offsetParent;return e||V.documentElement})}}),
// Create scrollLeft and scrollTop methods
ae.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);ae.fn[e]=function(i){return ae.access(this,function(e,i,o){var a=z(e);if(o===t)return a?n in a?a[n]:a.document.documentElement[i]:e[i];a?a.scrollTo(r?ae(a).scrollLeft():o,r?o:ae(a).scrollTop()):e[i]=o},e,i,arguments.length,null)}}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
ae.each({Height:"height",Width:"width"},function(e,n){ae.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){
// margin is only for outerHeight, outerWidth
ae.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return ae.access(this,function(n,r,i){var o;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return ae.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?ae.css(n,r,s):ae.style(n,r,i,s)},n,a?i:t,a,null)}})}),
// Limit scope pollution from any deprecated API
// (function() {
// })();
// Expose jQuery to the global object
e.jQuery=e.$=ae,
// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return ae})}(window);
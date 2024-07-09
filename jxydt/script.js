(function(){'use strict';/*
 Copyright 2024 Blueagle

 Email: austinliu@blueagle.top
 Website: https://blueagle.top

 SPDX-License-Identifier: Proprietary

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software to use the software in its original, unmodified form, subject to the following conditions:

 Reproduction, redistribution, modification, or use in another project is permitted with full credit to the original author. This license and copyright notice must be included.

 This notice and the following disclaimer must be retained in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function d(a){var b=h;var c=(c=b.c.get(a.join(".")))?c:void 0;if(void 0!==c)return c;c=b.l;for(const e of a){if(null==c)return;c=c[e]}b.c.set(a.join("."),c);return c}function k(a,b){var c=h;if(0!==a.length){var e=c.l,g=a.pop();for(var f of a){if("object"!==typeof e[f]||null===e[f])e[f]={};e=e[f]}f=e[g];b="function"===typeof b?b(f):b;void 0===b?(delete e[g],c.c.delete(a.concat(g).join("."))):(e[g]=b,c.c.set(a.concat(g).join("."),b))}}var m=class{constructor(){this.l=l;this.c=new Map}get g(){return this.l}get i(){return JSON.stringify(this.g)}};
class n{constructor(){this.g=new Map;this.h=this.i=null}}class p{constructor(){this.g=new n}};var q;const r=$response.body?.toString();var t;try{t=JSON.parse(r||"{}")}catch(a){t={}}const l=t;q={s:r,m:$request.url,l,o:new m};const h=q.o;
var u=q.m,v=[{h(){for(const a in d(["result","rights"]))k(["result","rights",a,"enable"],"1")},j:/rights\/checkRights/},{h(){k(["result","status"],"2");k(["result","beginTime"],"1970-01-01");k(["result","endTime"],"2099-12-31")},j:/store\/(h5\/)?checkRights/},{h(){for(const a in d(["result"]))k(["result",a,"status"],"2"),k(["result",a,"beginTime"],"1970-01-01"),k(["result",a,"endTime"],"2099-12-31")},j:/store\/(h5\/)?batchCheckRights/},{h(){k(["result","topicIntro","boughtState"],"1")},j:/jxedtLive\/h5\/topicDetail/},
{h(){k(["result","beginTime"],"1970-01-01");k(["result","endTime"],"2099-12-31");k(["result","status"],"1")},j:/realPlace\/getResourceBycityId/},{h(){k(["result","buyStatus"],1);k(["result","vipStatus"],1);for(const a in d(["result","videoList"])){const b=d(["result","videoList",a,"m3u8Video"]);b&&!d(["result","videoList",a,"src"])&&(k(["result","videoList",a,"src"],b),k(["result","videoList",a,"isM3U8"],1))}},j:/exam\/place\/video\/list/}];const w=new p;
for(const a of v){var x=a.j.source,y=a.h;let b=w.g;for(const c of x)b.g.has(c)||b.g.set(c,new n),b=b.g.get(c);b.h=y}const z=[];for(const a of w.g.g.values())a.i=w.g,z.push(a);for(;0<z.length;){const a=z.shift();for(const [b,c]of a.g){const e=b,g=c;let f=a.i;for(;f&&!f.g.has(e);)f=f.i;g.i=f?f.g.get(e)||w.g:w.g;z.push(g)}}var A;a:{let a=w.g;for(const b of u){for(;a&&!a.g.has(b);)a=a.i;if(a){if(a=a.g.get(b),a.h){A=a.h;break a}}else a=w.g}A=null}const B=A;B&&B();$done({body:h.i});}).call(this);

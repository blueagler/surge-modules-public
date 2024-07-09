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
function d(a){var b=g;var c=(c=b.c.get(a.join(".")))?c:void 0;if(void 0!==c)return c;c=b.j;for(const e of a){if(null==c)return;c=c[e]}b.c.set(a.join("."),c);return c}function k(a,b){var c=g;if(0!==a.length){var e=c.j,h=a.pop();for(var f of a){if("object"!==typeof e[f]||null===e[f])e[f]={};e=e[f]}f=e[h];b="function"===typeof b?b(f):b;void 0===b?(delete e[h],c.c.delete(a.concat(h).join("."))):(e[h]=b,c.c.set(a.concat(h).join("."),b))}}var m=class{constructor(){this.j=l;this.c=new Map}get h(){return this.j}get m(){return JSON.stringify(this.h)}};
class n{constructor(){this.h=new Map;this.g=null}}class p{constructor(){this.h=new n}};var q;const r=$response.body?.toString();var t;try{t=JSON.parse(r||"{}")}catch(a){t={}}const l=t;q={s:r,l:$request.url,j:l,o:new m};const g=q.o;
var u=q.l,v=[{g(){for(const a in d(["result","rights"]))k(["result","rights",a,"enable"],"1")},i:/rights\/checkRights/},{g(){k(["result","status"],"2");k(["result","beginTime"],"1970-01-01");k(["result","endTime"],"2099-12-31")},i:/store\/(h5\/)?checkRights/},{g(){for(const a in d(["result"]))k(["result",a,"status"],"2"),k(["result",a,"beginTime"],"1970-01-01"),k(["result",a,"endTime"],"2099-12-31")},i:/store\/(h5\/)?batchCheckRights/},{g(){k(["result","topicIntro","boughtState"],"1")},i:/jxedtLive\/h5\/topicDetail/},
{g(){k(["result","beginTime"],"1970-01-01");k(["result","endTime"],"2099-12-31");k(["result","status"],"1")},i:/realPlace\/getResourceBycityId/},{g(){k(["result","buyStatus"],1);k(["result","vipStatus"],1);for(const a in d(["result","videoList"])){const b=d(["result","videoList",a,"m3u8Video"]);b&&!d(["result","videoList",a,"src"])&&(k(["result","videoList",a,"src"],b),k(["result","videoList",a,"isM3U8"],1))}},i:/exam\/place\/video\/list/}];const w=new p;
for(const a of v){var x=a.i.source,y=a.g;let b=w.h;for(const c of x)b.h.has(c)||b.h.set(c,new n),b=b.h.get(c);b.g=y}var z;a:{let a=w.h;for(const b of u){if(!a.h.has(b))break;a=a.h.get(b);if(a.g){z=a.g;break a}}z=null}const A=z;A&&A();$done({body:g.m});}).call(this);

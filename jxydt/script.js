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
function d(a){var b=h;var c=(c=b.c.get(a.join(".")))?c:void 0;if(void 0!==c)return c;c=b.i;for(const e of a){if(null==c)return;c=c[e]}b.c.set(a.join("."),c);return c}function k(a,b){var c=h;if(0!==a.length){var e=c.i,f=a.pop();for(var g of a){if("object"!==typeof e[g]||null===e[g])e[g]={};e=e[g]}g=e[f];b="function"===typeof b?b(g):b;void 0===b?(delete e[f],c.c.delete(a.concat(f).join("."))):(e[f]=b,c.c.set(a.concat(f).join("."),b))}}
var m=class{constructor(){this.i=l;this.c=new Map}get g(){return this.i}get h(){return JSON.stringify(this.g)}},p=class{constructor(a){this.g=new n;this.c=new Map;a.forEach((b,c)=>{var e=c.source;let f=this.g;for(const g of e)f.g.has(g)||f.g.set(g,new n),f=f.g.get(g);f.h.push([c,b])})}};class n{constructor(){this.g=new Map;this.h=[]}};var q;const r=$response.body?.toString();var t;try{t=JSON.parse(r||"{}")}catch(a){t={}}const l=t;q={m:r,j:$request.url,i:l,l:new m};const h=q.l;
a:{var u=new p(new Map([[/exam\/place\/video\/list/,function(){k(["result","buyStatus"],1);k(["result","vipStatus"],1);for(const a in d(["result","videoList"])){const b=d(["result","videoList",a,"m3u8Video"]);b&&!d(["result","videoList",a,"src"])&&(k(["result","videoList",a,"src"],b),k(["result","videoList",a,"isM3U8"],1))}}],[/jxedtLive\/h5\/topicDetail/,function(){k(["result","topicIntro","boughtState"],"1")}],[/realPlace\/getResourceBycityId/,function(){k(["result","beginTime"],"1970-01-01");k(["result",
"endTime"],"2099-12-31");k(["result","status"],"1")}],[/rights\/checkRights/,function(){for(const a in d(["result","rights"]))k(["result","rights",a,"enable"],"1")}],[/store\/(h5\/)?batchCheckRights/,function(){for(const a in d(["result"]))k(["result",a,"status"],"2"),k(["result",a,"beginTime"],"1970-01-01"),k(["result",a,"endTime"],"2099-12-31")}],[/store\/(h5\/)?checkRights/,function(){k(["result","status"],"2");k(["result","beginTime"],"1970-01-01");k(["result","endTime"],"2099-12-31")}]])),v=
q.j;if(u.c.has(v)){const a=u.c.get(v);a&&a()}else{var w;b:{let a=u.g;for(const b of v){if(!a.g.has(b)){w=[];break b}a=a.g.get(b)}w=a.h}var x=w;for(const a of x){const b=a[1];if(a[0].test(v)){u.c.set(v,b);b();break a}}u.c.set(v,null)}}$done({body:h.h});}).call(this);

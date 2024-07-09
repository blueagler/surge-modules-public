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
function b(a){var c=g;var d=(d=c.c.get(a.join()))?d:void 0;if(void 0!==d)return d;d=c.g;for(const e of a){if(null==d)return;d=d[e]}c.c.set(a.join(),d);return d}function k(a,c){var d=g;if(0!==a.length){var e=d.g,h=a.pop();for(var f of a){if("object"!==typeof e[f]||null===e[f])e[f]={};e=e[f]}f=e[h];c="function"===typeof c?c(f):c;void 0===c?(delete e[h],d.c.delete(a.concat(h).join())):(e[h]=c,d.c.set(a.concat(h).join(),c))}}var m=class{constructor(){this.g=l;this.c=new Map}get i(){return this.g}get j(){return JSON.stringify(this.i)}};const n=$response.body?.toString();var p;try{p=JSON.parse(n||"{}")}catch(a){p={}}const l=p,q={m:n,h:$request.url,g:l,l:new m},g=q.l;
var r=q.h,t=new Map([[/exam\/place\/video\/list/,function(){k(["result","buyStatus"],1);k(["result","vipStatus"],1);for(const a in b(["result","videoList"])){const c=b(["result","videoList",a,"m3u8Video"]);c&&!b(["result","videoList",a,"src"])&&(k(["result","videoList",a,"src"],c),k(["result","videoList",a,"isM3U8"],1))}}],[/jxedtLive\/h5\/topicDetail/,function(){k(["result","topicIntro","boughtState"],"1")}],[/realPlace\/getResourceBycityId/,function(){k(["result","beginTime"],"1970-01-01");k(["result",
"endTime"],"2099-12-31");k(["result","status"],"1")}],[/rights\/checkRights/,function(){for(const a in b(["result","rights"]))k(["result","rights",a,"enable"],"1")}],[/store\/(h5\/)?batchCheckRights/,function(){for(const a in b(["result"]))k(["result",a,"status"],"2"),k(["result",a,"beginTime"],"1970-01-01"),k(["result",a,"endTime"],"2099-12-31")}],[/store\/(h5\/)?checkRights/,function(){k(["result","status"],"2");k(["result","beginTime"],"1970-01-01");k(["result","endTime"],"2099-12-31")}]]);
for(const a of t)if(a[0].test(r)){a[1]();break}$done({body:g.j});}).call(this);

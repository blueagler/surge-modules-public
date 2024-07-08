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
function b(a){let c=e.i;for(const d of a){if(void 0===c||null===c)return;c=c[d]}return c}function g(a,c){let d=e.i;const l=a.pop();for(const f of a){if("object"!==typeof d[f]||null===d[f])d[f]={};d=d[f]}a=d[l];c="function"===typeof c?c(a):c;d[l]=c}var k=class{constructor(){this.i=h}};var m;const n=$response.body?.toString();var p;try{p=JSON.parse(n||"{}")}catch(a){p={}}const h=p;m={m:n,j:$request.url,i:h,l:new k};const e=m.l;
var q=m.j,r=[{g(){for(const a in b(["result","rights"]))g(["result","rights",a,"enable"],"1")},h:/rights\/checkRights/},{g(){g(["result","status"],"2");g(["result","beginTime"],"1970-01-01");g(["result","endTime"],"2099-12-31")},h:/store\/(h5\/)?checkRights/},{g(){for(const a in b(["result"]))g(["result",a,"status"],"2"),g(["result",a,"beginTime"],"1970-01-01"),g(["result",a,"endTime"],"2099-12-31")},h:/store\/(h5\/)?batchCheckRights/},{g(){g(["result","topicIntro","boughtState"],"1")},h:/jxedtLive\/h5\/topicDetail/},
{g(){g(["result","beginTime"],"1970-01-01");g(["result","endTime"],"2099-12-31");g(["result","status"],"1")},h:/realPlace\/getResourceBycityId/},{g(){g(["result","buyStatus"],1);g(["result","vipStatus"],1);for(const a in b(["result","videoList"])){const c=b(["result","videoList",a,"m3u8Video"]);c&&!b(["result","videoList",a,"src"])&&(g(["result","videoList",a,"src"],c),g(["result","videoList",a,"isM3U8"],1))}},h:/exam\/place\/video\/list/}];for(const a of r)if(a.h.test(q)){a.g();break}
var t=$done,u;u=JSON.stringify(e.i);t({body:u});}).call(this);

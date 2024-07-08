(function(){'use strict';/*
 Copyright 2024 Blueagle
 SPDX-License-Identifier: BSD-3-Clause

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.

 Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.

 THIS IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 OUT OF THE USE OF THIS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function b(a){let c=e.i;for(const d of a){if(void 0===c||null===c)return;c=c[d]}return c}function g(a,c){let d=e.i;const l=a.pop();for(const f of a){if("object"!==typeof d[f]||null===d[f])d[f]={};d=d[f]}a=d[l];c="function"===typeof c?c(a):c;d[l]=c}var k=class{constructor(){this.i=h}};var m;const n=$response.body?.toString();var p;try{p=JSON.parse(n||"{}")}catch(a){p={}}const h=p;m={m:n,j:$request.url,i:h,l:new k};const e=m.l;
var q=m.j,r=[{g(){for(const a in b(["result","rights"]))g(["result","rights",a,"enable"],"1")},h:/rights\/checkRights/},{g(){g(["result","status"],"2");g(["result","beginTime"],"1970-01-01");g(["result","endTime"],"2099-12-31")},h:/store\/(h5\/)?checkRights/},{g(){for(const a in b(["result"]))g(["result",a,"status"],"2"),g(["result",a,"beginTime"],"1970-01-01"),g(["result",a,"endTime"],"2099-12-31")},h:/store\/(h5\/)?batchCheckRights/},{g(){g(["result","topicIntro","boughtState"],"1")},h:/jxedtLive\/h5\/topicDetail/},
{g(){g(["result","beginTime"],"1970-01-01");g(["result","endTime"],"2099-12-31");g(["result","status"],"1")},h:/realPlace\/getResourceBycityId/},{g(){g(["result","buyStatus"],1);g(["result","vipStatus"],1);for(const a in b(["result","videoList"])){const c=b(["result","videoList",a,"m3u8Video"]);c&&!b(["result","videoList",a,"src"])&&(g(["result","videoList",a,"src"],c),g(["result","videoList",a,"isM3U8"],1))}},h:/exam\/place\/video\/list/}];for(const a of r)if(a.h.test(q)){a.g();break}
var t=$done,u;u=JSON.stringify(e.i);t({body:u});}).call(this);

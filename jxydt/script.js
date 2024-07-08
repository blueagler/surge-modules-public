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
const b=$response.body?.toString();var e;try{e=JSON.parse(b||"{}")}catch(a){e={}}
const h=e,k={s:b,l:$request.url,A:h,o:{u(){return h},j(a){let c=h;for(const d of a){if(void 0===c||null===c)return;c=c[d]}return c},v(a){if(0===a.length)return!1;let c=h;const d=a.pop();for(const f of a){if(void 0===c[f])return!1;c=c[f]}return d in c?(delete c[d],!0):!1},g(a,c){let d=h;const f=a.pop();for(const g of a){if("object"!==typeof d[g]||null===d[g])d[g]={};d=d[g]}a=d[f];c="function"===typeof c?c(a):c;return d[f]=c},m(){return JSON.stringify(h)}}},l=k.o;
var m=k.l,n=[{h(){for(const a in l.j(["result","rights"]))l.g(["result","rights",a,"enable"],"1")},i:/rights\/checkRights/},{h(){l.g(["result","status"],"2");l.g(["result","beginTime"],"1970-01-01");l.g(["result","endTime"],"2099-12-31")},i:/store\/(h5\/)?checkRights/},{h(){for(const a in l.j(["result"]))l.g(["result",a,"status"],"2"),l.g(["result",a,"beginTime"],"1970-01-01"),l.g(["result",a,"endTime"],"2099-12-31")},i:/store\/(h5\/)?batchCheckRights/},{h(){l.g(["result","topicIntro","boughtState"],
"1")},i:/jxedtLive\/h5\/topicDetail/},{h(){l.g(["result","beginTime"],"1970-01-01");l.g(["result","endTime"],"2099-12-31");l.g(["result","status"],"1")},i:/realPlace\/getResourceBycityId/},{h(){l.g(["result","buyStatus"],1);l.g(["result","vipStatus"],1);for(const a in l.j(["result","videoList"])){const c=l.j(["result","videoList",a,"m3u8Video"]);c&&!l.j(["result","videoList",a,"src"])&&(l.g(["result","videoList",a,"src"],c),l.g(["result","videoList",a,"isM3U8"],1))}},i:/exam\/place\/video\/list/}];
for(const a of n)if(a.i.test(m)){a.h();break}$done({body:l.m()});}).call(this);

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
function a(d){if(0!==d.length){var b=f.g,c=d.pop();for(const e of d){if(void 0===b[e])return;b=b[e]}c in b&&delete b[c]}}function h(d,b){let c=f.g;const e=d.pop();for(const g of d){if("object"!==typeof c[g]||null===c[g])c[g]={};c=c[g]}d=c[e];b="function"===typeof b?b(d):b;c[e]=b}var l=class{constructor(){this.g=k}};const m=$response.body?.toString();var n;try{n=JSON.parse(m||"{}")}catch(d){n={}}const k=n,f=new l;h(["content","tier","added"],"1970-01-08T19:05:42.540Z");h(["content","tier","level"],"genius");h(["content","scope"],["free:solution","paid:solution","trial:solution","mypedia:solution","wip:basic"]);h(["content","subscription","autoRenewing"],!0);h(["content","subscription","expiry"],"2099-01-15T19:07:03.000Z");h(["content","subscription","inGracePeriod"],!1);
h(["content","subscription","orderId"],"320000813070599");h(["content","subscription","packageName"],"com.microblink.PhotoMath");h(["content","subscription","productId"],"com.microblink.PhotoMath.purchase.genius.one_year");h(["content","subscription","started"],"1970-01-08T19:07:03.000Z");h(["content","subscription","status"],"active");h(["content","rewardVideoAdCounter"],3);a(["content","subscriptionSharing"]);a(["content","NotationOne"]);a(["content","freeSunday"]);a(["content","freeSundayVariant"]);
var p=$done,q;q=JSON.stringify(f.g);p({body:q});}).call(this);

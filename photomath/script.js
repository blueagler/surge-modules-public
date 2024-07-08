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
const b=$response.body?.toString();var e;try{e=JSON.parse(b||"{}")}catch(d){e={}}const h=e,k={j(){return h},l(d){let a=h;for(const c of d){if(void 0===a||null===a)return;a=a[c]}return a},h(d){if(0===d.length)return!1;let a=h;const c=d.pop();for(const f of d){if(void 0===a[f])return!1;a=a[f]}return c in a?(delete a[c],!0):!1},g(d,a){let c=h;const f=d.pop();for(const g of d){if("object"!==typeof c[g]||null===c[g])c[g]={};c=c[g]}d=c[f];a="function"===typeof a?a(d):a;return c[f]=a},i(){return JSON.stringify(h)}};
k.g(["content","tier","added"],"1970-01-08T19:05:42.540Z");k.g(["content","tier","level"],"genius");k.g(["content","scope"],["free:solution","paid:solution","trial:solution","mypedia:solution","wip:basic"]);k.g(["content","subscription","autoRenewing"],!0);k.g(["content","subscription","expiry"],"2099-01-15T19:07:03.000Z");k.g(["content","subscription","inGracePeriod"],!1);k.g(["content","subscription","orderId"],"320000813070599");k.g(["content","subscription","packageName"],"com.microblink.PhotoMath");
k.g(["content","subscription","productId"],"com.microblink.PhotoMath.purchase.genius.one_year");k.g(["content","subscription","started"],"1970-01-08T19:07:03.000Z");k.g(["content","subscription","status"],"active");k.g(["content","rewardVideoAdCounter"],3);k.h(["content","subscriptionSharing"]);k.h(["content","NotationOne"]);k.h(["content","freeSunday"]);k.h(["content","freeSundayVariant"]);$done({body:k.i()});}).call(this);

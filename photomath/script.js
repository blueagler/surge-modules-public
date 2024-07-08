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
function a(d){if(0!==d.length){var b=f.g,c=d.pop();for(const e of d){if(void 0===b[e])return;b=b[e]}c in b&&delete b[c]}}function h(d,b){let c=f.g;const e=d.pop();for(const g of d){if("object"!==typeof c[g]||null===c[g])c[g]={};c=c[g]}d=c[e];b="function"===typeof b?b(d):b;c[e]=b}var l=class{constructor(){this.g=k}};const m=$response.body?.toString();var n;try{n=JSON.parse(m||"{}")}catch(d){n={}}const k=n,f=new l;h(["content","tier","added"],"1970-01-08T19:05:42.540Z");h(["content","tier","level"],"genius");h(["content","scope"],["free:solution","paid:solution","trial:solution","mypedia:solution","wip:basic"]);h(["content","subscription","autoRenewing"],!0);h(["content","subscription","expiry"],"2099-01-15T19:07:03.000Z");h(["content","subscription","inGracePeriod"],!1);
h(["content","subscription","orderId"],"320000813070599");h(["content","subscription","packageName"],"com.microblink.PhotoMath");h(["content","subscription","productId"],"com.microblink.PhotoMath.purchase.genius.one_year");h(["content","subscription","started"],"1970-01-08T19:07:03.000Z");h(["content","subscription","status"],"active");h(["content","rewardVideoAdCounter"],3);a(["content","subscriptionSharing"]);a(["content","NotationOne"]);a(["content","freeSunday"]);a(["content","freeSundayVariant"]);
var p=$done,q;q=JSON.stringify(f.g);p({body:q});}).call(this);

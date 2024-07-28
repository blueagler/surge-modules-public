/*
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
function a(b,d){var g=h;if(0!==b.length){var c=g.g,f=b.pop();for(var e of b){if("object"!==typeof c[e]||null===c[e])c[e]={};c=c[e]}e=c[f];d="function"===typeof d?d(e):d;void 0===d?(delete c[f],g.c.delete(b.concat(f).join())):(c[f]=d,g.c.set(b.concat(f).join(),d))}}var l=class{constructor(){this.g=k;this.c=new Map}get i(){return this.g}get j(){return JSON.stringify(this.i)}};const m=$response.body?.toString();var n;try{n=JSON.parse(m||"{}")}catch(b){n={}}const k=n,p={m,h:$request.url,g:k,l:new l},h=p.l;
var q=p.h,r=new Map([[/p\/v1\/vip_info/,function(){a(["vip","expires_time"],"4102415999");a(["vip","is_auto_renewal"],!0);a(["svip","expires_time"],"4102415999");a(["svip","is_auto_renewal"],!0)}],[/v2\/user/,function(){a(["result","is_auto_renewal"],!0);a(["result","is_vip"],!0);a(["result","is_xy_auto_renewal"],!0);a(["result","is_xy_vip"],!0);a(["result","svip_expired_at"],4102415999);a(["result","svip_given"],1);a(["result","svip_take_effect"],1);a(["result","vip_expired_at"],4102415999);a(["result",
"vip_take_effect"],1);a(["result","vip_type"],"svip");a(["result","wt","vip","enabled"],!0);a(["result","wt","vip","expired_at"],4102415999);a(["result","wt","vip","is_auto_renewal"],!0);a(["result","xy_svip_expire"],4102415999);a(["result","xy_vip_expire"],4102415999)}]]);for(const b of r)if(b[0].test(q)){b[1]();break}$done({body:h.j});

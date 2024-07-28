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
function b(a,d){var g=h;if(0!==a.length){var c=g.g,f=a.pop();for(var e of a){if("object"!==typeof c[e]||null===c[e])c[e]={};c=c[e]}e=c[f];d="function"===typeof d?d(e):d;void 0===d?(delete c[f],g.c.delete(a.concat(f).join())):(c[f]=d,g.c.set(a.concat(f).join(),d))}}var l=class{constructor(){this.g=k;this.c=new Map}get i(){return this.g}get j(){return JSON.stringify(this.i)}};const m=$response.body?.toString();var n;try{n=JSON.parse(m||"{}")}catch(a){n={}}const k=n,p={m,h:$request.url,g:k,l:new l},h=p.l;var q=p.h,r=new Map([[/p\/v1\/vip_info/,function(){b(["svip","expires_time"],"4102415999");b(["svip","is_auto_renewal"],!0)}],[/v2\/user/,function(){b(["result","is_auto_renewal"],!0);b(["result","svip_expired_at"],4102415999);b(["result","svip_given"],730);b(["result","svip_take_effect"],1);b(["result","vip_type"],"s");b(["result","xy_svip_expire"],4102415999)}]]);
for(const a of r)if(a[0].test(q)){a[1]();break}$done({body:h.j});

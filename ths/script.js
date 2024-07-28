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
function d(b,c){var f=h;if(0!==b.length){var a=f.g,g=b.pop();for(var e of b){if("object"!==typeof a[e]||null===a[e])a[e]={};a=a[e]}e=a[g];c="function"===typeof c?c(e):c;void 0===c?(delete a[g],f.c.delete(b.concat(g).join())):(a[g]=c,f.c.set(b.concat(g).join(),c))}}var l=class{constructor(){this.g=k;this.c=new Map}get h(){return this.g}get i(){return JSON.stringify(this.h)}};const m=$response.body?.toString();var n;try{n=JSON.parse(m||"{}")}catch(b){n={}}const k=n,h=new l,p=["levelInfo","receivedInfo"],q=["jzbdgwtx","jzbddwtx",...["jzbd","qsqr","zjqr","zcgz"].flatMap(b=>[`${b}01001`,`${b}01002`])];
for(const b of p){const c=["data",b,"rights"];for(const f of q){const a=[...c,f];d([...a,"expireTime"],"2099-01-01 00:00:00");d([...a,"preReceive"],"0");d([...a,"receiveTime"],"1970-01-01 00:00:00");d([...a,"renewal"],"1");d([...a,"rightsId"],"");d([...a,"rightsSource"],"2");d([...a,"rightsTime"],"365")}}$done({body:h.i});

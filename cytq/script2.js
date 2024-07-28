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
function g(a,c){var f=h;if(0!==a.length){var b=f.g,e=a.pop();for(var d of a){if("object"!==typeof b[d]||null===b[d])b[d]={};b=b[d]}d=b[e];c="function"===typeof c?c(d):c;void 0===c?(delete b[e],f.c.delete(a.concat(e).join())):(b[e]=c,f.c.set(a.concat(e).join(),c))}}const h=new class{constructor(a){this.g=a;this.c=new Map}get h(){return this.g}}($request.headers);
var k=$request.url,l=new Map([[/v1\/(satellite|nafp\/origin_images)/,function(){g(["device-token"],"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uIjoiNjYyNzQxMzVkYWM3MGMwMDE4YzFlNDBmIiwidXNlcl9pZCI6IjVmNWJmYzU3ZDJjNjg5MDAxNGUyNmJiOCIsInZlcnNpb24iOjIsImV4cCI6MTcyMTYyNDYyOSwidmlwX2V4cGlyZWRfYXQiOjAsImlzcyI6IndlYXRoZXIiLCJpYXQiOjE3MTM4NDg2MjksInN2aXBfZXhwaXJlZF9hdCI6MTg1NjY4NTAzMSwicHJpbWFyeSI6dHJ1ZX0.bBT3vbfATa-LF1G34j4VjPTYtwcKHfG3oHIkFlmg1dY");g(["user-id"],"5f5bfc57d2c6890014e26bb8")}]]);
for(const a of l)if(a[0].test(k)){a[1]();break}$done({headers:h.h});

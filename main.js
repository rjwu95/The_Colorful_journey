!function(t){var o={};function r(h){if(o[h])return o[h].A;var s=o[h]={i:h,l:!1,A:{}};return t[h].call(s.A,s,s.A,r),s.l=!0,s.A}r.m=t,r.c=o,r.d=function(t,o,h){r.o(t,o)||Object.defineProperty(t,o,{M:!0,get:h})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"O",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.O)return t;var h=Object.create(null);if(r.r(h),Object.defineProperty(h,"default",{M:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)r.d(h,s,function(o){return t[o]}.bind(null,s));return h},r.n=function(t){var o=t&&t.O?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=1)}([function(t,o){function r(){this.S=function(t){for(var o=0;o<24;o++)this[String.fromCharCode(97+o)]=t[o]||0;this.c<.01&&(this.c=.01);var r=this.b+this.c+this.e;if(r<.18){var h=.18/r;this.b*=h,this.c*=h,this.e*=h}}}var h=new function(){var t,o,h,s,i,x,y,c,e,n,w,l;this.$=new r,this.reset=function(){var t=this.$;s=100/(t.f*t.f+.001),i=100/(t.g*t.g+.001),x=1-t.h*t.h*t.h*.01,y=-t.i*t.i*t.i*1e-6,t.a||(w=.5-t.n/2,l=5e-5*-t.o),c=1+t.l*t.l*(t.l>0?-.9:10),e=0,n=1==t.m?0:(1-t.m)*(1-t.m)*2e4+32},this.N=function(){this.reset();var r=this.$;return t=r.b*r.b*1e5,o=r.c*r.c*1e5,h=r.e*r.e*1e5+12,3*((t+o+h)/3|0)},this.C=function(r,a){var b=this.$,u=1!=b.s||b.v,g=b.v*b.v*.1,f=1+3e-4*b.w,d=b.s*b.s*b.s*.1,p=1+1e-4*b.t,v=1!=b.s,m=b.x*b.x,k=b.g,A=b.q||b.r,M=b.r*b.r*b.r*.2,O=b.q*b.q*(b.q<0?-1020:1020),S=b.p?32+((1-b.p)*(1-b.p)*2e4|0):0,j=b.d,E=b.j/2,$=b.k*b.k*.01,N=b.a,C=t,J=1/t,G=1/o,L=1/h,P=5/(1+b.u*b.u*20)*(.01+d);P>.8&&(P=.8),P=1-P;for(var R,_,U,T,Y,B,D=!1,I=0,V=0,q=0,z=0,F=0,H=0,K=0,Q=0,W=0,X=0,Z=new Array(1024),tt=new Array(32),ot=Z.length;ot--;)Z[ot]=0;for(ot=tt.length;ot--;)tt[ot]=2*Math.random()-1;for(ot=0;ot<a;ot++){if(D)return ot;if(S&&++W>=S&&(W=0,this.reset()),n&&++e>=n&&(n=0,s*=c),(s*=x+=y)>i&&(s=i,k>0&&(D=!0)),_=s,E>0&&(X+=$,_*=1+Math.sin(X)*E),(_|=0)<8&&(_=8),N||((w+=l)<0?w=0:w>.5&&(w=.5)),++V>C)switch(V=0,++I){case 1:C=o;break;case 2:C=h}switch(I){case 0:q=V*J;break;case 1:q=1+2*(1-V*G)*j;break;case 2:q=1-V*L;break;case 3:q=0,D=!0}A&&((U=0|(O+=M))<0?U=-U:U>1023&&(U=1023)),u&&f&&((g*=f)<1e-5?g=1e-5:g>.1&&(g=.1)),B=0;for(var rt=8;rt--;){if(++K>=_&&(K%=_,3==N))for(var ht=tt.length;ht--;)tt[ht]=2*Math.random()-1;switch(N){case 0:Y=K/_<w?.5:-.5;break;case 1:Y=1-K/_*2;break;case 2:Y=.225*(((Y=1.27323954*(T=6.28318531*((T=K/_)>.5?T-1:T))+.405284735*T*T*(T<0?1:-1))<0?-1:1)*Y*Y-Y)+Y;break;case 3:Y=tt[Math.abs(32*K/_|0)]}u&&(R=H,(d*=p)<0?d=0:d>.1&&(d=.1),v?(F+=(Y-H)*d,F*=P):(H=Y,F=0),z+=(H+=F)-R,Y=z*=1-g),A&&(Z[Q%1024]=Y,Y+=Z[(Q-U+1024)%1024],Q++),B+=Y}B*=.125*q*m,r[ot]=B>=1?32767:B<=-1?-32768:32767*B|0}return a}};window.jsfxr=function(t){h.$.S(t);var o=h.N(),r=new Uint8Array(4*((o+1)/2|0)+44),s=2*h.C(new Uint16Array(r.buffer,44),o),i=new Uint32Array(r.buffer,0,44);i[0]=1179011410,i[1]=s+36,i[2]=1163280727,i[3]=544501094,i[4]=16,i[5]=65537,i[6]=44100,i[7]=88200,i[8]=1048578,i[9]=1635017060,i[10]=s,s+=44;for(var x=0,y="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c="data:audio/wav;base64,";x<s;x+=3){var e=r[x]<<16|r[x+1]<<8|r[x+2];c+=y[e>>18]+y[e>>12&63]+y[e>>6&63]+y[63&e]}return c}},function(t,o,r){"use strict";r.r(o);r(0);const h=window.innerHeight,s=1.8*h,i=32,x=58,y=s/x,c=h/i,e=y,n=6*y,w=6*c,l=s/70,a=l/2,b=2*y,u=4*c,g={r:113,g:107,b:107},f="GAME_READY",d="GAME_PLAYING",p="GAME_OVER",v="GAME_CLEAR",m="STAGE_CLEAR",k=["rgb(216, 39, 53)","rgb(255, 161, 53)","rgb(255, 203, 53)","rgb(255, 249, 53)","","rgb(0, 158, 71)","rgb(22, 221, 53)","rgb(0, 169, 252)","rgb(189, 122, 246)","pink"],A=Math.floor(s/35),M=t=>0===t.r&&0===t.g&&0===t.b,O=t=>M(t)?`rgb(${g.r}, ${g.g}, ${g.b})`:`rgb(${t.r}, ${t.g}, ${t.b})`,S=s/35,j=h/20,E=S/74,$=S/66,N=.8*S,C=document.createElement("canvas").getContext("2d");let J=Array(10).fill(!0),G=!0;var L=class{constructor(t){this.context=t}load(t,o){const r=s*t.width,h=s*t.height;C.canvas.width=r,C.canvas.height=h,this.J=o.map((({x:t,y:o,w:r,h:h,color:s})=>({x:t*y,y:o*c,w:r*y,h:h*c,color:s}))),C.clearRect(0,0,r,h),this.J.forEach((({x:t,y:o,w:r,h:h,color:s="black"})=>{C.fillStyle=s,C.fillRect(t,o,r,h)}))}G(t,o){const{x:r,y:h,w:s,h:i}=o;return t.x<r&&r<t.x+S&&h<t.y+j&&h+i>t.y&&t.L>0}P(t,o){const{x:r,y:h,w:s,h:i}=o;return t.x+S>r+s&&r+s>t.x&&h<t.y+j&&h+i>t.y&&t.L<0}R(t,o){const{x:r,y:h,w:s,h:i}=o;return r<t.x+S&&r+s>t.x&&t.y<h&&h<t.y+j&&t._>0}U(t,o){const{x:r,y:h,w:s,h:i}=o;return r<t.x+S&&r+s>t.x&&h+i>t.y&&t.y+j>h+i&&t._<0}update(t,o){const r=O(o);this.J.forEach(((o,h)=>{const{x:s,y:i,w:x,h:y,color:c}=o;c!==r&&(this.G(t,o)&&J[h]?this.R(t,o)?(J[h]=!1,t.y=i-j):t.x=s-S:this.P(t,o)&&J[h]?this.R(t,o)?(J[h]=!1,t.y=i-j,t.T=!1):t.x=s+x:this.R(t,o)?(J[h]=!1,t.y=i-j,t.T=!1):this.U(t,o)?(J[h]=!1,t.y=i+y):J[h]=!0)}))}Y(t,o){const r=O(o);t.forEach((t=>{let o=!1,h=t.B;this.J.forEach((({x:o,y:r,w:h})=>{t.y+w>r&&t.y<r&&t.x+n>o&&o+h>t.x&&(t.y=r-w)})),O(t.color)!==r&&(h.x<t.x&&t.x<h.x+S&&t.y<h.y+j&&t.y+w>h.y&&G?(this.J.forEach((({x:r,y:h,h:s})=>{t.x<r&&r<t.x+n&&h<t.y+w&&h+s>t.y&&(o=!0)})),o?h.x=t.x-S-1:t.x=h.x+S):h.x+S>t.x+n&&t.x+n>h.x&&t.y<h.y+j&&t.y+w>h.y&&G?(this.J.forEach((({x:r,y:h,h:s})=>{t.x>r&&r>t.x-n&&h<t.y+w&&h+s>t.y&&(o=!0)})),o?h.x=t.x+n+1:t.x=h.x-n):t.x<h.x+S&&t.x+n>h.x&&h.y<t.y&&t.y<h.y+j?(G=!1,h.y=t.y-j,h.T=!1):t.x<h.x+S&&t.x+n>h.x&&t.y+w>h.y&&h.y+j>t.y+w?(G=!1,h.y=t.y+w):G=!0)}))}D(t,o){this.context.drawImage(C.canvas,-t,-o)}};const P=[0,,.206,,.2703,.318,,.2576,,,,,,.048,,,,,.6197,,,,,.5],R=[3,,.0901,,.2965,.6998,,-.357,,,,,,,,,,,1,,,.237,,.5],_=[0,,.0165,.5581,.4642,.8848,,,,,,.2933,.6229,,,,,,1,,,,,.5],U=[0,,.3172,,.4898,.476,,.4106,,,,,,.1458,,.6758,,,1,,,,,.5];let T;var Y=class{constructor(t,o,r){this.L=0,this._=0,this.x=t*y,this.y=o*y,this.T=!1,this.I=!0,T=s*r.width}move(t){if(t.V&&!1===this.T){const t=jsfxr(P),o=new Audio;o.src=t,o.play(),this._-=N,this.T=!0}t.left&&(this.L-=E),t.right&&(this.L+=E)}update(){this.x<0&&(this.x=0,this.L=0),this.x+S>T&&(this.x=T-S,this.L=0),this.y<0&&(this.y=0,this._=0),this.x+=this.L,this.y+=this._,this._+=$,this.L*=.9,this._*=.9}stop(){this.T=!1,this._=0}D(t,o,r){const{x:h,y:s}=this;r.save(),r.fillStyle="black",r.fillRect(h-t,s-o,S,.3*j),r.fillRect(h-t,s-o+.4*j,S,.6*j),r.fillRect(h-t,s-o+.4*j,S,.6*j),r.fillRect(h-t,s-o+.4*j,S,.6*j),r.strokeStyle="black",r.fillStyle="white",r.beginPath(),r.ellipse(h-t+S/3,s-o+.1*j,.05*S,.1*j,0,0,2*Math.PI),r.ellipse(h-t+S/3*2,s-o+.1*j,.05*S,.1*j,0,0,2*Math.PI),r.stroke(),r.fill(),r.restore()}F(t){this.x=t.x,this.y=t.y,this.I=!0}H(t){const o=jsfxr(R),r=new Audio;r.src=o,r.play(),this.F(t)}};var B=class{constructor(t){this.left=!1,this.right=!1,this.V=!1,this.K=document.getElementsByTagName("t")[0],this.W=document.getElementById("o"),this.X=t}init(t){window.addEventListener("keydown",(o=>{const r=!t.Z.classList.contains("r"),h=!t.tt.classList.contains("r");"Escape"===o.code?h||this.X.state===v||(r?t.hide():t.show()):r||h||this.ot(o)})),window.addEventListener("keyup",(t=>this.ot(t)))}ot(t){const o="keydown"==t.type;switch(t.code){case"ArrowLeft":this.left=o;break;case"ArrowRight":this.right=o;break;case"Space":this.V=o}}};let D,I;var V=class{constructor(){this.cx=0}init(t){D=s*t.width,I=h*t.height}update(t,o){const r=D-s,i=I-h;this.cx=t-s/3,this.cy=o-.5*h,this.cx<0&&(this.cx=0),this.cx>r&&(this.cx=r),this.cy<0&&(this.cy=0),this.cy>i&&(this.cy=i)}};var q=class{constructor(t,o,r,h,s){this.x=t,this.y=o,this.rt=h,this.color=r,this.B=s,this.show=!0,this.ht=!1,this.st=!0}update(){const{x:t,y:o,B:r,color:h}=this;if(t-e<r.x+S&&t+e>r.x&&o-e<r.y+j&&o+e>r.y){if(this.show){const t=jsfxr(_),o=new Audio;o.src=t,o.play()}this.show=!1,JSON.stringify(h)===JSON.stringify(g)&&(this.ht=!0)}}D(t,o){const{rt:r,x:h,y:s,color:i}=this;if(this.show){const x=O(i);JSON.stringify(i)!==JSON.stringify(g)&&(r.strokeStyle="black"),r.beginPath(),r.arc(h-t,s-o,e,0,2*Math.PI),r.stroke(),r.fillStyle=x,r.fill()}}};var z=class extends q{constructor(t,o,r,h,s){super(t,o,r,h,s),this._=0}update(){this._+=$,this._*=.9,this.y+=this._}D(t,o){const{rt:r,x:h,y:s,color:i}=this;this.show&&(r.fillStyle=`rgb(${i.r}, ${i.g}, ${i.b})`,r.fillRect(h-t,s-o,n,w))}};const F=[{buffer:{width:2,height:1},map:[{x:0,y:15,w:6,h:17},{x:6,y:20,w:7,h:12},{x:40,y:24,w:6,h:2},{x:106,y:13,w:10,h:2},{x:13,y:26,w:116,h:6}],items:[{x:82,y:24,color:{r:200,g:0,b:0}},{x:111,y:24,color:{r:0,g:0,b:200}}],it:[{x:100,y:20,color:{r:200,g:0,b:0}}],xt:[{x:86,y:26}],yt:{x:111,y:9},ct:{x:2,y:6}},{buffer:{width:2,height:1},map:[{x:25,y:21,w:1,h:4,color:"rgb(200, 0, 0)"},{x:25,y:20,w:5,h:1,color:"rgb(200, 0, 0)"},{x:0,y:0,w:4,h:i},{x:4,y:25,w:116,h:12},{x:37,y:20,w:3,h:5,color:"rgb(200, 200, 0)"},{x:45,y:15,w:3,h:10},{x:54,y:15,w:3,h:10,color:"rgb(200, 0, 200)"},{x:63,y:15,w:3,h:10},{x:72,y:15,w:3,h:10,color:"rgb(200, 0, 200)"},{x:81,y:15,w:3,h:10}],it:[{x:100,y:19,color:{r:160,g:82,b:45}}],xt:[{x:41,y:25},{x:49.5,y:25},{x:58.5,y:25},{x:67.5,y:25},{x:76.5,y:25},{x:84,y:25},{x:87.5,y:25},{x:91,y:25}],yt:{x:112,y:9},ct:{x:5,y:15},items:[{x:14,y:23,color:{r:200,g:0,b:0}},{x:28,y:23,color:{r:0,g:200,b:0}},{x:46.5,y:11,color:{r:0,g:0,b:200}},{x:82.5,y:13.5,color:{r:160,g:82,b:45}},{x:82.5,y:11,color:g}]},{buffer:{width:2,height:2},map:[{x:0,y:0,w:4,h:64},{x:4,y:22,w:4,h:2},{x:4,y:38,w:8,h:4,color:"rgb(0, 0, 200)"},{x:4,y:36,w:4,h:2,color:"rgb(113, 107, 107)"},{x:8,y:42,w:4,h:2,color:"rgb(113, 107, 107)"},{x:4,y:49,w:4,h:2,color:"rgb(113, 107, 107)"},{x:12,y:0,w:4,h:28},{x:16,y:0,w:8,h:24},{x:12,y:32,w:4,h:14},{x:16,y:34,w:10,h:4},{x:21,y:42,w:27,h:4},{x:31,y:34,w:12,h:8},{x:26,y:34,w:5,h:4,color:"rgb(200, 0, 0)"},{x:16,y:38,w:15,h:4,color:"rgb(200, 0, 0)"},{x:16,y:42,w:5,h:4,color:"rgb(200, 0, 0)"},{x:27,y:27,w:4,h:2},{x:32,y:22,w:4,h:2},{x:37,y:17,w:4,h:2},{x:31,y:12,w:4,h:2},{x:24,y:7,w:4,h:2},{x:43,y:0,w:5,h:10},{x:43,y:14,w:5,h:28},{x:48,y:0,w:6,h:10},{x:48,y:14,w:6,h:32},{x:43,y:10,w:1,h:4,color:"rgb(0, 0, 200)"},{x:32,y:54,w:7,h:2},{x:54,y:44,w:4,h:2},{x:60,y:50,w:4,h:2},{x:75,y:46,w:4,h:10},{x:79,y:40,w:4,h:16},{x:83,y:34,w:4,h:22},{x:87,y:28,w:4,h:28},{x:91,y:22,w:4,h:34},{x:95,y:16,w:8,h:40},{x:99,y:0,w:4,h:16,color:"rgb(200, 0, 200)"},{x:103,y:0,w:4,h:16,color:"rgb(200, 0, 200)"},{x:103,y:10,w:4,h:46},{x:0,y:56,w:116,h:8}],items:[{x:26,y:5,color:{r:200,g:0,b:0}},{x:49,y:49,color:{...g}},{x:56,y:42,color:{r:0,g:0,b:200}},{x:47,y:12,color:{r:200,g:0,b:0}}],it:[{x:69,y:50,color:{...g}}],ct:{x:5,y:0},xt:[{x:28,y:56},{x:40,y:56,color:O(g)},{x:44,y:56,color:"rgb(0, 0, 200)"},{x:48,y:56,color:O(g)},{x:52,y:56,color:"rgb(0, 0, 200)"},{x:56,y:56,color:O(g)},{x:31,y:34},{x:107,y:56},{x:111,y:56},{x:115,y:56}],yt:{x:112,y:8}},{buffer:{width:2,height:2},map:[{x:0,y:0,w:4,h:64},{x:4,y:57,w:108,h:7},{x:112,y:0,w:4,h:64},{x:19,y:51,w:13,h:2},{x:4,y:45,w:12,h:2},{x:8,y:40,w:8,h:5,color:"rgb(200, 0, 0)"},{x:17,y:34,w:8,h:5,color:"rgb(200, 0, 0)"},{x:49,y:51,w:14,h:2},{x:63,y:45,w:2,h:20},{x:17,y:39,w:12,h:2},{x:4,y:33,w:12,h:2},{x:19,y:27,w:9,h:2},{x:28,y:21,w:4,h:30},{x:29,y:26,w:49,h:8},{x:78,y:15,w:4,h:19},{x:82,y:19,w:12,h:3},{x:100,y:25,w:12,h:3},{x:82,y:31,w:12,h:3},{x:100,y:37,w:12,h:3},{x:49,y:33,w:3,h:12},{x:91,y:34,w:3,h:10,color:"rgb(200, 0, 0)"},{x:52,y:43,w:13,h:2},{x:65,y:43,w:13,h:2,color:"rgb(200, 200, 0)"},{x:78,y:43,w:16,h:2},{x:86,y:49,w:30,h:2},{x:86,y:51,w:2,h:6,color:"rgb(200, 200, 0)"}],ct:{x:5,y:49},yt:{x:106,y:53},items:[{x:60,y:48,color:{r:200,g:0,b:0}},{x:6,y:42,color:{r:0,g:0,b:200}},{x:30,y:19,color:{r:0,g:200,b:0}},{x:75,y:24,color:{r:0,g:0,b:200}},{x:108,y:47,color:{r:200,g:0,b:0}},{x:55,y:40,color:{r:0,g:200,b:0}},{x:23,y:25,color:{...g}},{x:34,y:24,color:{...g}},{x:88,y:17,color:{...g}}],it:[{x:60,y:20,color:{r:0,g:200,b:0}}],xt:[{x:78.5,y:15,color:"rgb(0, 200, 200)"}]},{buffer:{width:2,height:3},map:[{x:0,y:0,w:4,h:26},{x:0,y:26,w:106,h:8},{x:12,y:10,w:8,h:16},{x:4,y:19,w:4,h:2,color:O(g)},{x:8,y:12,w:4,h:2,color:O(g)},{x:20,y:7,w:6,h:19},{x:32,y:10,w:4,h:2},{x:38,y:4,w:4,h:2},{x:38,y:16,w:4,h:2},{x:44,y:12,w:4,h:2},{x:46,y:19,w:6,h:2,color:"rgb(0, 0, 200)"},{x:53,y:0,w:12,h:6,color:"rgb(200, 200, 200)"},{x:53,y:19,w:4,h:7},{x:53,y:6,w:4,h:9},{x:57,y:6,w:8,h:20},{x:65,y:8,w:24,h:2,color:O(g)},{x:89,y:0,w:27,h:11},{x:80,y:52,w:6,h:6,color:O(g)},{x:74,y:48,w:6,h:10},{x:57,y:46,w:4,h:2,color:"rgb(200, 0, 0)"},{x:44,y:46,w:4,h:2,color:"rgb(0, 200, 200)"},{x:14,y:58,w:102,h:8},{x:18,y:82,w:4,h:2},{x:22,y:76,w:3,h:8},{x:22,y:84,w:3,h:5,color:"rgb(200, 200, 0)"},{x:25,y:76,w:30,h:5},{x:52,y:81,w:3,h:8,color:"rgb(200, 0, 0)"},{x:65,y:66,w:3,h:24,color:"rgb(200, 200, 0)"},{x:80,y:84,w:4,h:2,color:O(g)},{x:87,y:79,w:4,h:2,color:"rgb(0, 0, 200)"},{x:94,y:74,w:4,h:2,color:"rgb(0, 200, 200)"},{x:108,y:79,w:8,h:18},{x:0,y:89,w:116,h:8}],items:[{x:10,y:24,color:{r:0,g:0,b:200}},{x:40,y:2,color:g},{x:40,y:14,color:{r:0,g:200,b:0}},{x:54,y:17,color:{r:200,g:0,b:0}},{x:93,y:56,color:g},{x:97,y:56,color:{r:200,g:0,b:0}},{x:101,y:56,color:{r:0,g:200,b:0}},{x:76,y:40,color:{r:0,g:0,b:200}},{x:82,y:82,color:{r:0,g:0,b:200}},{x:89,y:77,color:{r:0,g:200,b:0}},{x:96,y:72,color:{r:200,g:0,b:0}},{x:62,y:87,color:{r:200,g:0,b:0}},{x:27,y:87,color:{r:0,g:200,b:0}},{x:74,y:87,color:g},{x:20,y:80,color:g},{x:86,y:6,color:g}],it:[{x:74,y:42,color:{r:200,g:200,b:0}}],ct:{x:5,y:5},xt:[{x:26,y:26},{x:30,y:26},{x:34,y:26},{x:38,y:26},{x:42,y:26},{x:46,y:26},{x:50,y:26},{x:65,y:26},{x:69,y:26},{x:73,y:26},{x:77,y:26},{x:81,y:26},{x:85,y:26},{x:70,y:58},{x:66,y:58},{x:62,y:58},{x:58,y:58},{x:54,y:58},{x:50,y:58},{x:46,y:58},{x:42,y:58},{x:38,y:58},{x:34,y:58},{x:30,y:58},{x:76,y:89}],yt:{x:112,y:75}}];var H=class extends q{constructor(t,o,r,h,s){super(t,o,r,h,s)}update(t){const{x:o,y:r,B:h,color:s}=this,i=O(t);o-a<h.x+S&&o+a+3*l>h.x&&r<h.y+j&&r+l>h.y&&s!==i&&(h.I=!1)}D(t,o){const{rt:r,x:h,y:s,color:i}=this;r.beginPath(),r.fillStyle=i||"black";for(let i=0;i<4;i++)r.moveTo(h-t+l*i,s-o),r.lineTo(h-t+a+l*i,s-o-l),r.lineTo(h-t+2*a+l*i,s-o),r.fill()}};var K=class extends q{constructor(t,o,r){const{x:h,y:s,color:i}=t;super(h*y,s*c,i,o,r),this.et=!1}update(){const{x:t,y:o,B:r}=this;t<r.x+r.L+S&&t+b>r.x+r.L&&o<r.y+j+r._&&o+u>r.y+r._&&(this.et=!0)}D(t,o){const{rt:r,x:h,y:s}=this;this.show&&(r.fillStyle="white",r.beginPath(),r.arc(h-t+b/2,s-o,b/2,0,2*Math.PI),r.stroke(),r.fill(),r.fillRect(h-t,s-o,b,u))}};var Q=class{constructor(t){this.X=t,this.B=null,this.Z=document.getElementById("menu"),this.tt=document.getElementById("intro"),this.nt=document.getElementById("c"),this.wt=document.getElementById("s"),this.lt=document.getElementById("n"),this.lt.addEventListener("click",(()=>{this.tt.classList.add("r")})),this.nt.addEventListener("click",(()=>{this.hide()})),this.wt.addEventListener("click",(()=>{this.hide(),this.B.I=!1}))}show(){this.Z.classList.remove("r")}hide(){this.Z.classList.add("r")}};let W;function X(){W.D(),window.requestAnimationFrame(X)}W=new class{init(){this.canvas=document.getElementById("canvas"),this.canvas.width=s,this.canvas.height=h,this.context=this.canvas.getContext("2d"),this.state=f,this.at=0,this.bt={...g},this.ut=new V,this.map=new L(this.context),this.control=new B(this),this.gt=new Q(this),this.control.init(this.gt),this.state===f&&(this.load(this.at),this.state=d)}load(t){const{map:o,context:r,ut:h}=this;this.ft=F[t],o.load(this.ft.buffer,this.ft.map),h.init(this.ft.buffer),this.B=new Y(this.ft.ct.x,this.ft.ct.y,this.ft.buffer),this.gt.B=this.B,this.yt=new K(this.ft.yt,this.context,this.B),this.items=this.ft.items.map((({x:t,y:o,color:h})=>new q(t*y,o*c,h,r,this.B))),this.it=this.ft.it.map((({x:t,y:o,color:h})=>new z(t*y,o*c,h,r,this.B))),this.xt=this.ft.xt.map((({x:t,y:o,color:h})=>new H(t*y,o*c,h,r,this.B)))}update(){const{B:t,ut:o,control:r,ft:h,items:s,it:i,map:x,xt:y,yt:c,bt:e}=this;if(t.move(r),t.update(h.map),o.update(t.x,t.y),c.update(),s.forEach((t=>{t.update(),!t.show&&t.st&&(JSON.stringify(e)===JSON.stringify(g)||JSON.stringify(t.color)===JSON.stringify(g)?(e.r=t.color.r,e.g=t.color.g,e.b=t.color.b):((t,o)=>{const{r:r,g:h,b:s}=o;t.r+=r,t.g+=h,t.b+=s})(e,t.color),t.st=!1)})),i.forEach((t=>{t.update(e,x)})),y.forEach((t=>{t.update(e)})),x.update(t,e),x.Y(i,e),t.I||(this.state=p,t.H(h.ct)),this.yt.et){const t=jsfxr(U),o=new Audio;o.src=t,o.play(),4===this.at?this.state=v:(this.state=m,this.at+=1)}}D(){const{state:t,context:o,map:r,B:i,ut:x,items:y,it:c,xt:e,yt:n,bt:w}=this;switch(t!==v&&(o.clearRect(0,0,s,h),M(w)||(o.fillStyle=`rgb(${w.r}, ${w.g}, ${w.b})`,o.fillRect(0,0,s,h))),t){case d:this.update(),r.D(x.cx,x.cy),y.forEach((t=>{t.D(x.cx,x.cy)})),c.forEach((t=>{t.D(x.cx,x.cy)})),e.forEach((t=>{t.D(x.cx,x.cy)})),i.D(x.cx,x.cy,o),n.D(x.cx,x.cy);break;case m:case p:(l=w).r=0,l.g=0,l.b=0,this.load(this.at),this.state=d;break;case v:setTimeout((()=>{o.clearRect(0,0,s,h),o.font=`${A}px Comic Sans MS`,o.textAlign="center","GAME CLEAR".split("").forEach(((t,r)=>{o.fillStyle=k[r],o.fillText(t,s/2-9*(A-10)/2+r*(A-10),h/2-120)}))}),200)}var l}},W.init(),window.requestAnimationFrame(X)}]);
var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(o)}function s(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}const u="undefined"!=typeof window;let a=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const d=new Set;function h(t){d.forEach(n=>{n.c(t)||(d.delete(n),n.f())}),0!==d.size&&f(h)}function p(t,n){t.appendChild(n)}function m(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function v(){return $(" ")}function _(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function C(t,n){n=""+n,t.data!==n&&(t.data=n)}const x=new Set;let w,T=0;function E(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),T-=r,T||f(()=>{T||(x.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),x.clear())}))}function D(t){w=t}const R=[],k=[],q=[],j=[],A=Promise.resolve();let O=!1;function S(t){q.push(t)}let N=!1;const F=new Set;function P(){if(!N){N=!0;do{for(let t=0;t<R.length;t+=1){const n=R[t];D(n),z(n.$$)}for(R.length=0;k.length;)k.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];F.has(n)||(F.add(n),n())}q.length=0}while(R.length);for(;j.length;)j.pop()();O=!1,N=!1,F.clear()}}function z(t){if(null!==t.fragment){t.update(),c(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}let L;function M(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const B=new Set;let X;function G(t,n){t&&t.i&&(B.delete(t),t.i(n))}function H(t,n,e,o){if(t&&t.o){if(B.has(t))return;B.add(t),X.c.push(()=>{B.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const I={duration:0};function J(e,o,r){let c,i,l=o(e,r),u=!1,p=0;function m(){c&&E(e,c)}function g(){const{delay:o=0,duration:r=300,easing:s=n,tick:g=t,css:$}=l||I;$&&(c=function(t,n,e,o,r,c,s,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*c(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${i}`,d=t.ownerDocument;x.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(y("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${a}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${o}ms linear ${r}ms 1 both`,T+=1,f}(e,0,1,r,o,s,$,p++)),g(0,1);const v=a()+o,_=v+r;i&&i.abort(),u=!0,S(()=>M(e,!0,"start")),i=function(t){let n;return 0===d.size&&f(h),{promise:new Promise(e=>{d.add(n={c:t,f:e})}),abort(){d.delete(n)}}}(t=>{if(u){if(t>=_)return g(1,0),M(e,!0,"end"),m(),u=!1;if(t>=v){const n=s((t-v)/r);g(n,1-n)}}return u})}let $=!1;return{start(){$||(E(e),s(l)?(l=l(),(L||(L=Promise.resolve(),L.then(()=>{L=null})),L).then(g)):g())},invalidate(){$=!1},end(){u&&(m(),u=!1)}}}function K(t,n,e){const{fragment:r,on_mount:i,on_destroy:l,after_update:u}=t.$$;r&&r.m(n,e),S(()=>{const n=i.map(o).filter(s);l?l.push(...n):c(n),t.$$.on_mount=[]}),u.forEach(S)}function Q(t,n){const e=t.$$;null!==e.fragment&&(c(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function U(t,n){-1===t.$$.dirty[0]&&(R.push(t),O||(O=!0,A.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function V(n,e,o,s,i,l,u=[-1]){const a=w;D(n);const f=e.props||{},d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:r(),dirty:u};let h=!1;if(d.ctx=o?o(n,f,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),h&&U(n,t)),e}):[],d.update(),h=!0,c(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();e.intro&&G(n.$$.fragment),K(n,e.target,e.anchor),P()}D(a)}class W{$destroy(){Q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const Y=[];function Z(n,e=t){let o;const r=[];function c(t){if(i(n,t)&&(n=t,o)){const t=!Y.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),Y.push(e,n)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,i=t){const l=[s,i];return r.push(l),1===r.length&&(o=e(c)||t),s(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const tt={subscribe:Z([],(function(t){return fetch("https://api.covid19api.com/summary").then(t=>t.json()).then(n=>{t(n.Countries)}),function(){}})).subscribe};function nt(t,{delay:e=0,duration:o=400,easing:r=n}){const c=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*c}}function et(n){let e,o,r,i,l,u,a,f,d,h,x,w,T,E,D,R,k,q,j,A,O,N,F,P,z,L,M,B,X=n[0].Country+"",G=n[0].TotalConfirmed+"",H=n[0].TotalDeaths+"",I=n[0].TotalRecovered+"",K=(n[0].TotalDeaths/n[0].TotalRecovered*50).toFixed(2)+"";return{c(){e=y("div"),o=v(),r=y("div"),i=y("h1"),l=$(X),u=v(),a=y("div"),f=y("span"),d=$("Confirmed: "),h=$(G),x=v(),w=y("span"),T=$("Dead: "),E=$(H),D=v(),R=y("div"),k=y("span"),q=$("Recovered: "),j=$(I),A=v(),O=y("span"),N=$("Mortality: "),F=$(K),P=$("%"),z=v(),L=y("div"),L.textContent="X",b(e,"class","overlay svelte-qxheqr"),b(L,"class","close svelte-qxheqr"),b(r,"class","popup svelte-qxheqr")},m(t,g,y){m(t,e,g),m(t,o,g),m(t,r,g),p(r,i),p(i,l),p(r,u),p(r,a),p(a,f),p(f,d),p(f,h),p(a,x),p(a,w),p(w,T),p(w,E),p(r,D),p(r,R),p(R,k),p(k,q),p(k,j),p(R,A),p(R,O),p(O,N),p(O,F),p(O,P),p(r,z),p(r,L),y&&c(B),B=[_(e,"click",(function(){s(n[1])&&n[1].apply(this,arguments)})),_(L,"click",(function(){s(n[1])&&n[1].apply(this,arguments)}))]},p(t,[e]){n=t,1&e&&X!==(X=n[0].Country+"")&&C(l,X),1&e&&G!==(G=n[0].TotalConfirmed+"")&&C(h,G),1&e&&H!==(H=n[0].TotalDeaths+"")&&C(E,H),1&e&&I!==(I=n[0].TotalRecovered+"")&&C(j,I),1&e&&K!==(K=(n[0].TotalDeaths/n[0].TotalRecovered*50).toFixed(2)+"")&&C(F,K)},i(t){M||S(()=>{M=J(r,nt,{}),M.start()})},o:t,d(t){t&&g(e),t&&g(o),t&&g(r),c(B)}}}function ot(t,n,e){let{country:o}=n,{onClose:r}=n;return t.$set=t=>{"country"in t&&e(0,o=t.country),"onClose"in t&&e(1,r=t.onClose)},[o,r]}class rt extends W{constructor(t){super(),V(this,t,ot,et,i,{country:0,onClose:1})}}function ct(t,n,e){const o=t.slice();return o[4]=n[e],o}function st(t){let n,e,o,r,c,i,l,u,a,f,d,h,x,w,T=t[4].Country+"",E=t[4].TotalConfirmed+"",D=t[4].TotalDeaths+"";return{c(){n=y("div"),e=y("span"),o=y("span"),r=$(T),c=v(),i=y("span"),l=$("Confirmed: "),u=$(E),a=v(),f=y("span"),d=$("Dead: "),h=$(D),x=v(),b(e,"class","country svelte-fnjjf9")},m(g,y,$){m(g,n,y),p(n,e),p(e,o),p(o,r),p(e,c),p(e,i),p(i,l),p(i,u),p(e,a),p(e,f),p(f,d),p(f,h),p(n,x),$&&w(),w=_(e,"click",(function(){s(t[2](t[4]))&&t[2](t[4]).apply(this,arguments)}))},p(n,e){t=n,2&e&&T!==(T=t[4].Country+"")&&C(r,T),2&e&&E!==(E=t[4].TotalConfirmed+"")&&C(u,E),2&e&&D!==(D=t[4].TotalDeaths+"")&&C(h,D)},d(t){t&&g(n),w()}}}function it(t){let n;const o=[{onClose:t[3],country:t[0]}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const c=new rt({props:r});return{c(){var t;(t=c.$$.fragment)&&t.c()},m(t,e){K(c,t,e),n=!0},p(t,n){const e=9&n?function(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],i=n[c];if(i){for(const t in s)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[c]=i}else for(const t in s)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(o,[{onClose:t[3],country:t[0]}]):{};c.$set(e)},i(t){n||(G(c.$$.fragment,t),n=!0)},o(t){H(c.$$.fragment,t),n=!1},d(t){Q(c,t)}}}function lt(t){let n,e,o,r,s=t[1],i=[];for(let n=0;n<s.length;n+=1)i[n]=st(ct(t,s,n));let l=t[0]&&it(t);return{c(){n=y("div");for(let t=0;t<i.length;t+=1)i[t].c();e=v(),l&&l.c(),o=$("")},m(t,c){m(t,n,c);for(let t=0;t<i.length;t+=1)i[t].m(n,null);m(t,e,c),l&&l.m(t,c),m(t,o,c),r=!0},p(t,[e]){if(6&e){let o;for(s=t[1],o=0;o<s.length;o+=1){const r=ct(t,s,o);i[o]?i[o].p(r,e):(i[o]=st(r),i[o].c(),i[o].m(n,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=s.length}t[0]?l?(l.p(t,e),1&e&&G(l,1)):(l=it(t),l.c(),G(l,1),l.m(o.parentNode,o)):l&&(X={r:0,c:[],p:X},H(l,1,1,()=>{l=null}),X.r||c(X.c),X=X.p)},i(t){r||(G(l),r=!0)},o(t){H(l),r=!1},d(t){t&&g(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(i,t),t&&g(e),l&&l.d(t),t&&g(o)}}}function ut(t,n,e){let o;l(t,tt,t=>e(1,o=t));let r=null;return[r,o,t=>()=>e(0,r=t),()=>{e(0,r=!1)}]}return new class extends W{constructor(t){super(),V(this,t,ut,lt,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map

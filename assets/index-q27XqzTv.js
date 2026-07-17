const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BOmUl4M8.js","assets/animations-BKpTpv2F.js","assets/vendor-BwtP0Q5w.js","assets/SEO-aw1op927.js","assets/Button-Bx8l7Oua.js","assets/Utils-BOPZYCmp.js","assets/award-Be7AAlvx.js","assets/About-CYxk8891.js","assets/Projects-DKwW0wQP.js","assets/Contact-CH0oeJAp.js"])))=>i.map(i=>d[i]);
import{j as e,A as v,m as C}from"./animations-BKpTpv2F.js";import{a as A,r as i,L as w,N as f,H as T,B as M,u as R,R as S,b as p}from"./vendor-BwtP0Q5w.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();var N,y=A;N=y.createRoot,y.hydrateRoot;const O="modulepreload",I=function(a){return"/"+a},g={},u=function(n,o,l){let t=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));t=Promise.allSettled(o.map(m=>{if(m=I(m),m in g)return;g[m]=!0;const x=m.endsWith(".css"),b=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${b}`))return;const h=document.createElement("link");if(h.rel=x?"stylesheet":O,x||(h.as="script"),h.crossOrigin="",h.href=m,c&&h.setAttribute("nonce",c),document.head.appendChild(h),x)return new Promise((P,_)=>{h.addEventListener("load",P),h.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${m}`)))})}))}function r(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return t.then(s=>{for(const c of s||[])c.status==="rejected"&&r(c.reason);return n().catch(r)})},z=i.createContext(void 0),D=({children:a})=>{const[n,o]=i.useState(()=>{const t=localStorage.getItem("theme");return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});i.useEffect(()=>{const t=window.document.documentElement;n==="dark"?t.classList.add("dark"):t.classList.remove("dark"),localStorage.setItem("theme",n)},[n]);const l=()=>{o(t=>t==="light"?"dark":"light")};return e.jsx(z.Provider,{value:{theme:n,toggleTheme:l},children:a})},B=()=>{const a=i.useContext(z);if(!a)throw new Error("useTheme must be used within a ThemeProvider");return a};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E=(...a)=>a.filter((n,o,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===o).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var H={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=i.forwardRef(({color:a="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:t="",children:r,iconNode:s,...c},m)=>i.createElement("svg",{ref:m,...H,width:n,height:n,stroke:a,strokeWidth:l?Number(o)*24/Number(n):o,className:E("lucide",t),...c},[...s.map(([x,b])=>i.createElement(x,b)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=(a,n)=>{const o=i.forwardRef(({className:l,...t},r)=>i.createElement(V,{ref:r,iconNode:n,className:E(`lucide-${$(a)}`,l),...t}));return o.displayName=`${a}`,o};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=d("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=d("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=d("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=d("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=d("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=d("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=d("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=d("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=d("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=d("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=d("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Y=()=>{const{theme:a,toggleTheme:n}=B(),[o,l]=i.useState(!1),t=[{name:"Home",path:"/",icon:G},{name:"About",path:"/about",icon:K},{name:"Projects",path:"/projects",icon:U},{name:"Contact",path:"/contact",icon:L}];return e.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 glassmorphism border-b border-zinc-200/50 dark:border-zinc-800/50",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-20 items-center justify-between",children:[e.jsx(w,{to:"/",className:"flex items-center space-x-2 group",children:e.jsx("span",{className:"bg-gradient-to-r from-brand-primary to-brand-neonPurple bg-clip-text text-2xl font-extrabold tracking-wider text-transparent group-hover:opacity-85 transition-opacity",children:"JOEL.DEV"})}),e.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[t.map(r=>{const s=r.icon;return e.jsxs(f,{to:r.path,className:({isActive:c})=>`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-brand-primary ${c?"text-brand-primary border-b-2 border-brand-primary pb-1":"text-zinc-600 dark:text-zinc-300"}`,children:[e.jsx(s,{className:"h-4 w-4"}),e.jsx("span",{children:r.name})]},r.path)}),e.jsx("button",{onClick:n,className:"rounded-full p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none","aria-label":"Toggle theme",children:a==="dark"?e.jsx(k,{className:"h-5 w-5 text-amber-500"}):e.jsx(j,{className:"h-5 w-5 text-indigo-600"})})]}),e.jsxs("div",{className:"flex items-center space-x-4 md:hidden",children:[e.jsx("button",{onClick:n,className:"rounded-full p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none","aria-label":"Toggle theme",children:a==="dark"?e.jsx(k,{className:"h-5 w-5 text-amber-500"}):e.jsx(j,{className:"h-5 w-5 text-indigo-600"})}),e.jsx("button",{onClick:()=>l(!o),className:"rounded-lg p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none","aria-label":"Toggle mobile menu",children:o?e.jsx(W,{className:"h-6 w-6"}):e.jsx(J,{className:"h-6 w-6"})})]})]})}),e.jsx(v,{children:o&&e.jsx(C.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.3},className:"md:hidden border-t border-zinc-200/50 dark:border-zinc-800/50 glassmorphism",children:e.jsx("div",{className:"space-y-1 px-4 py-4 sm:px-6",children:t.map(r=>{const s=r.icon;return e.jsxs(f,{to:r.path,onClick:()=>l(!1),className:({isActive:c})=>`flex items-center space-x-2 rounded-lg px-3 py-3 text-base font-medium transition-all ${c?"bg-brand-primary/10 text-brand-primary":"text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"}`,children:[e.jsx(s,{className:"h-5 w-5"}),e.jsx("span",{children:r.name})]},r.path)})})})})]})},Z=()=>{const a=new Date().getFullYear(),n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"relative border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-brand-dark/50 py-12 transition-colors duration-300",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex flex-col items-center justify-between gap-6 md:flex-row",children:[e.jsx(w,{to:"/",className:"group",children:e.jsx("span",{className:"bg-gradient-to-r from-brand-primary to-brand-neonPurple bg-clip-text text-xl font-bold tracking-wider text-transparent group-hover:opacity-85 transition-opacity",children:"JOEL.DEV"})}),e.jsxs("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:["© ",a," Joel Santhosh Raja. All rights reserved."]}),e.jsxs("div",{className:"flex space-x-6",children:[e.jsx("a",{href:"https://github.com/joelsanthosh",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-500 hover:text-brand-primary transition-colors dark:text-zinc-400 dark:hover:text-brand-primary","aria-label":"GitHub",children:e.jsx(X,{className:"h-5 w-5"})}),e.jsx("a",{href:"https://linkedin.com/in/joel-santhosh-raja",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-500 hover:text-brand-primary transition-colors dark:text-zinc-400 dark:hover:text-brand-primary","aria-label":"LinkedIn",children:e.jsx(F,{className:"h-5 w-5"})}),e.jsx("a",{href:"mailto:myemail@email.com",className:"text-zinc-500 hover:text-brand-primary transition-colors dark:text-zinc-400 dark:hover:text-brand-primary","aria-label":"Email",children:e.jsx(L,{className:"h-5 w-5"})})]})]})}),e.jsx("button",{onClick:n,className:"absolute bottom-6 right-6 rounded-full bg-brand-primary/10 p-2.5 text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 dark:bg-brand-primary/20","aria-label":"Scroll to top",children:e.jsx(q,{className:"h-4 w-4"})})]})},Q=i.lazy(()=>u(()=>import("./Home-BOmUl4M8.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),ee=i.lazy(()=>u(()=>import("./About-CYxk8891.js"),__vite__mapDeps([7,1,2,3,5,4,6]))),te=i.lazy(()=>u(()=>import("./Projects-DKwW0wQP.js"),__vite__mapDeps([8,1,2,3,5]))),re=i.lazy(()=>u(()=>import("./Contact-CH0oeJAp.js"),__vite__mapDeps([9,1,2,3,4]))),ae=()=>{const a=R();return e.jsx(v,{mode:"wait",children:e.jsx(i.Suspense,{fallback:e.jsx("div",{className:"flex h-[calc(100vh-80px)] items-center justify-center bg-brand-light dark:bg-brand-dark",children:e.jsx("div",{className:"h-12 w-12 animate-spin rounded-full border-4 border-brand-primary border-t-transparent"})}),children:e.jsxs(S,{location:a,children:[e.jsx(p,{path:"/",element:e.jsx(Q,{})}),e.jsx(p,{path:"/about",element:e.jsx(ee,{})}),e.jsx(p,{path:"/projects",element:e.jsx(te,{})}),e.jsx(p,{path:"/contact",element:e.jsx(re,{})}),e.jsx(p,{path:"*",element:e.jsxs("div",{className:"flex h-[60vh] flex-col items-center justify-center space-y-4",children:[e.jsx("h1",{className:"text-6xl font-bold text-brand-primary",children:"404"}),e.jsx("p",{className:"text-xl text-zinc-500",children:"Page not found"}),e.jsx("a",{href:"/",className:"rounded-full bg-brand-primary px-6 py-2 text-white hover:bg-brand-primaryHover transition-all",children:"Go Home"})]})})]},a.pathname)})})},ne=()=>e.jsx(T,{children:e.jsx(D,{children:e.jsx(M,{children:e.jsxs("div",{className:"flex min-h-screen flex-col bg-brand-light dark:bg-brand-dark text-zinc-800 dark:text-zinc-100 transition-colors duration-300",children:[e.jsx(Y,{}),e.jsx("main",{className:"flex-grow pt-20",children:e.jsx(ae,{})}),e.jsx(Z,{})]})})})});N(document.getElementById("root")).render(e.jsx(i.StrictMode,{children:e.jsx(ne,{})}));export{U as B,X as G,F as L,L as M,W as X,d as c};

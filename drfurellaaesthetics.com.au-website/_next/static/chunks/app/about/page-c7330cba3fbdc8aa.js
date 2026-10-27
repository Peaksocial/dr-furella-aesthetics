(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{81:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CountUp:()=>g,Enter:()=>p,ParallaxImage:()=>u,Reveal:()=>d,RevealImage:()=>m,RevealLines:()=>h});var a=i(5155),n=i(8310),r=i(622),o=i(8324),s=i(3602),l=i(2115);let c=[.22,1,.36,1];function d({children:e,delay:t=0,y:i=24,className:o,as:s="div"}){let l=(0,n.I)(),p=r.P[s];return(0,a.jsx)(p,{className:o,initial:l?{opacity:0}:{opacity:0,y:i},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10% 0px -10% 0px"},transition:{duration:.8,ease:c,delay:t},children:e})}function p({children:e,delay:t=0,y:i=26,className:o}){let s=(0,n.I)();return(0,a.jsx)(r.P.div,{className:o,initial:s?{opacity:0}:{opacity:0,y:i},animate:{opacity:1,y:0},transition:{duration:.9,ease:c,delay:t},children:e})}function h({lines:e,className:t,lineClassName:i,delay:o=0,whileInView:s=!1}){let l=(0,n.I)(),d={hidden:{y:l?0:"110%",opacity:+!l},show:{y:"0%",opacity:1,transition:{duration:.85,ease:c}}};return(0,a.jsx)(r.P.span,{className:t,style:{display:"block"},variants:{hidden:{},show:{transition:{staggerChildren:.12,delayChildren:o}}},initial:"hidden",...s?{whileInView:"show",viewport:{once:!0,margin:"-12%"}}:{animate:"show"},children:e.map((e,t)=>(0,a.jsx)("span",{style:{display:"block",overflow:"hidden",paddingBottom:"0.06em"},children:(0,a.jsx)(r.P.span,{className:i,style:{display:"block",willChange:"transform"},variants:d,children:e})},t))})}function u({src:e,alt:t,className:i,imgClassName:c,amount:d=60,priority:p=!1}){let h=(0,n.I)(),m=(0,l.useRef)(null),{scrollYProgress:g}=(0,o.L)({target:m,offset:["start end","end start"]}),b=(0,s.G)(g,[0,1],[-d,d]);return(0,a.jsx)("div",{ref:m,className:i,style:{overflow:"hidden",width:"100%",height:"100%"},children:(0,a.jsx)(r.P.img,{src:e,alt:t,loading:p?"eager":"lazy",style:{y:h?0:b,scale:1.14,width:"100%",height:"100%",objectFit:"cover",display:"block",willChange:"transform"},className:c})})}function m({src:e,alt:t,className:i,priority:o=!1}){let s=(0,n.I)();return(0,a.jsx)(r.P.div,{className:i,style:{overflow:"hidden"},initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"-8%"},transition:{duration:.6,ease:c},children:(0,a.jsx)(r.P.img,{src:e,alt:t,loading:o?"eager":"lazy",initial:s?{scale:1}:{scale:1.18},whileInView:{scale:1},viewport:{once:!0,margin:"-8%"},transition:{duration:1.3,ease:c},style:{width:"100%",height:"100%",objectFit:"cover",display:"block",willChange:"transform"}})})}function g({value:e,suffix:t=""}){let i=(0,n.I)(),c=(0,l.useRef)(null),{scrollYProgress:d}=(0,o.L)({target:c,offset:["start 0.9","start 0.5"]}),p=(0,s.G)(d,i=>`${Math.round(i*e)}${t}`);return i?(0,a.jsxs)("span",{ref:c,children:[e,t]}):(0,a.jsx)(r.P.span,{ref:c,children:p})}},3414:(e,t,i)=>{"use strict";i.d(t,{default:()=>o});var a=i(5155),n=i(2115),r=i(81);function o({bio:e,lead:t=3}){let[i,s]=(0,n.useState)(!1),l=e.length-t>=2,c=l?e.slice(0,t):e,d=l?e.slice(t):[];return(0,a.jsxs)("div",{className:"team-bio",style:{marginTop:20},children:[(0,a.jsx)("div",{className:"team-bio-stack",children:c.map((e,t)=>(0,a.jsx)(r.Reveal,{delay:.1+.06*t,children:(0,a.jsx)("p",{className:"type-body",children:e})},t))}),l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:`team-bio-collapse${i?" open":""}`,"aria-hidden":!i,children:(0,a.jsx)("div",{className:"team-bio-collapse-inner",children:(0,a.jsx)("div",{className:"team-bio-stack",style:{paddingTop:14},children:d.map((e,t)=>(0,a.jsx)("p",{className:"type-body",children:e},t))})})}),(0,a.jsxs)("button",{type:"button",className:"team-bio-toggle",onClick:()=>s(e=>!e),"aria-expanded":i,children:[(0,a.jsx)("span",{children:i?"Show less":"Show more"}),(0,a.jsx)("svg",{className:"tbt-chev",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M2.5 4.25 6 7.75l3.5-3.5",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),(0,a.jsx)("style",{children:`
        .team-bio-stack { display: flex; flex-direction: column; gap: 14px; }

        /* Smooth height via the grid-rows technique (animates cleanly, no JS measuring). */
        .team-bio-collapse {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows .55s cubic-bezier(.22,.7,.16,1), opacity .4s ease;
        }
        .team-bio-collapse.open { grid-template-rows: 1fr; opacity: 1; }
        .team-bio-collapse-inner { overflow: hidden; }

        .team-bio-toggle {
          display: inline-flex; align-items: center; gap: 9px;
          margin-top: 22px; padding: 0;
          background: none; border: none; cursor: pointer;
          font-family: var(--font-body);
          font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; font-weight: 600;
          color: var(--rose);
        }
        .team-bio-toggle > span {
          padding-bottom: 4px;
          background-image: linear-gradient(var(--rose), var(--rose));
          background-repeat: no-repeat;
          background-position: 0 100%;
          background-size: 100% 1.2px;
          transition: background-size .4s cubic-bezier(.22,.7,.16,1);
        }
        .team-bio-toggle:hover > span { background-size: 0% 1.2px; background-position: 100% 100%; }
        .tbt-chev { transition: transform .45s cubic-bezier(.22,.7,.16,1); }
        .team-bio-toggle[aria-expanded="true"] .tbt-chev { transform: rotate(180deg); }

        @media (prefers-reduced-motion: reduce) {
          .team-bio-collapse, .team-bio-toggle > span, .tbt-chev { transition: none; }
        }
      `})]})}},3602:(e,t,i)=>{"use strict";i.d(t,{G:()=>p});var a=i(180),n=i(2115),r=i(3641),o=i(4866),s=i(8819),l=i(4524),c=i(5080);function d(e,t){let i=function(e){let t=(0,s.M)(()=>(0,r.OQ)(e)),{isStatic:i}=(0,n.useContext)(o.Q);if(i){let[,i]=(0,n.useState)(e);(0,n.useEffect)(()=>t.on("change",i),[])}return t}(t()),a=()=>i.set(t());return a(),(0,l.E)(()=>{let t=()=>c.Gt.preRender(a,!1,!0),i=e.map(e=>e.on("change",t));return()=>{i.forEach(e=>e()),(0,c.WG)(a)}}),i}function p(e,t,i,n){if("function"==typeof e){let t;return r.bt.current=[],e(),t=d(r.bt.current,e),r.bt.current=void 0,t}let o="function"==typeof t?t:function(...e){var t;let i,n=!Array.isArray(e[0]),r=n?0:-1,o=e[0+r],s=e[1+r],l=e[2+r],c=e[3+r],d=(0,a.G)(s,l,{mixer:(i=t=l[0])&&"object"==typeof i&&i.mix?t.mix:void 0,...c});return n?d(o):d}(t,i,n);return Array.isArray(e)?h(e,o):h([e],([e])=>o(e))}function h(e,t){let i=(0,s.M)(()=>[]);return d(e,()=>{i.length=0;let a=e.length;for(let t=0;t<a;t++)i[t]=e[t].get();return t(i)})}},9299:(e,t,i)=>{Promise.resolve().then(i.bind(i,81)),Promise.resolve().then(i.bind(i,3414)),Promise.resolve().then(i.t.bind(i,8500,23))}},e=>{e.O(0,[326,500,441,794,358],()=>e(e.s=9299)),_N_E=e.O()}]);
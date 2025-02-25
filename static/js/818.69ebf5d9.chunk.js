"use strict";(self.webpackChunkno_thin_project_landing=self.webpackChunkno_thin_project_landing||[]).push([[818],{6818:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var s=n(5741),o=n(7798),a=n(1674),i=n(5043),r=n(1591),c=n(6596),l=n(579);const d=["assets/svg/beer.svg","assets/svg/bolt.svg","assets/svg/briefcase.svg","assets/svg/car.svg","assets/svg/circle.svg","assets/svg/cloud.svg","assets/svg/code.svg","assets/svg/cow.svg","assets/svg/cross.svg","assets/svg/gear.svg","assets/svg/heart.svg","assets/svg/house.svg","assets/svg/martini.svg","assets/svg/pig.svg","assets/svg/smile.svg","assets/svg/star.svg","assets/svg/tree.svg","assets/svg/triangle.svg","assets/svg/umbrella.svg"],h=()=>{const e=Math.floor(Math.random()*d.length);return d[e]},m=async e=>{try{const t=await fetch(e),n=await t.text(),s=new DOMParser,o=s.parseFromString(n,"image/svg+xml").querySelectorAll("path");return Array.from(o).map((e=>e.getAttribute("d")))}catch(t){return console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f SVG:",t),[]}},g=e=>{const t=e.getTotalLength(),n=Math.max(100,Math.floor(t/2));let s=1/0,o=-1/0,a=1/0,i=-1/0;for(let r=0;r<=n;r++){const c=e.getPointAtLength(t*r/n);s=Math.min(s,c.x),o=Math.max(o,c.x),a=Math.min(a,c.y),i=Math.max(i,c.y)}return{minX:s,maxX:o,minY:a,maxY:i,centerX:(s+o)/2,centerY:(a+i)/2}},f={numMetaballs:100,metaballSize:50,randomAccel:.02,damping:.99,speedLimit:.5,minSpeed:.3,repulsionCoeff:5e-4,attractionCoeff:1e-4,startImpulseMin:0,startImpulseMax:0,formationAttractionFactor:.05,formationGatheringSpeed:1.3,formationSizeFactor:.1,formationSizeSpeed:.06,desiredSvgSize:400,bondThreshold:50,bondStrength:.001,formationDelay:200,metaballColor:[0,0,0,1],threshold:.99},u=e=>{let{isMobile:t}=e;const n=(0,i.useRef)(null),s={numMetaballs:t?50:f.numMetaballs,randomAccel:f.randomAccel,damping:f.damping,speedLimit:f.speedLimit,minSpeed:f.minSpeed,repulsionCoeff:f.repulsionCoeff,attractionCoeff:f.attractionCoeff,startImpulseMin:f.startImpulseMin,startImpulseMax:f.startImpulseMax};return(0,i.useEffect)((()=>{t&&(f.metaballSize=30,f.formationSizeFactor=.3);const e=n.current;let o=e.width=window.innerWidth,a=e.height=window.innerHeight;const i=e.getContext("webgl");if(!i)return void console.error("WebGL \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f");const r=((e,t,n)=>{const s=[];for(let o=0;o<e;o++){const e=10+Math.random()*f.metaballSize,o={x:t/2+5*(Math.random()-.5),y:n/2+5*(Math.random()-.5),vx:0,vy:0,r:e,baseR:e,formation:!1,targetX:0,targetY:0};if(Math.random()<.5){const e=Math.floor(4*Math.random());let t=0,n=0;0===e?(t=-1,n=-1):1===e?(t=1,n=-1):2===e?(t=-1,n=1):(t=1,n=1);const s=(f.startImpulseMin+Math.random()*(f.startImpulseMax-f.startImpulseMin))*f.speedLimit;o.vx=t*s,o.vy=n*s}else o.vx=(Math.random()-.5)*f.speedLimit*.2,o.vy=(Math.random()-.5)*f.speedLimit*.2;s.push(o)}return s})(s.numMetaballs,o,a);let l=!1,d=null,u=[],p={},x={x:0,y:0};const v=t=>{const n=e.getBoundingClientRect();x.x=t.clientX-n.left,x.y=a-(t.clientY-n.top),d=setTimeout((async()=>{l=!0;const e=Math.floor(r.length*(1+.1*Math.random())),t=Array.from({length:r.length},((e,t)=>t));for(let o=t.length-1;o>0;o--){const e=Math.floor(Math.random()*(o+1));[t[o],t[e]]=[t[e],t[o]]}u=t.slice(0,e);const n=h(),s=await m(n);if(s.length>0){const e=s[Math.floor(Math.random()*s.length)],t=new c.N(e),n=g(t),o=n.maxX-n.minX,a=n.maxY-n.minY,i=f.desiredSvgSize/Math.max(o,a),l=t.getTotalLength();u.forEach(((e,s)=>{const o=t.getPointAtLength(l*s/u.length),a=(o.x-n.centerX)*i,c=-(o.y-n.centerY)*i;p[e]={x:a,y:c},r[e].formation=!0,r[e].targetX=x.x+a,r[e].targetY=x.y+c}))}else console.warn("SVG \u0434\u0430\u043d\u0456 \u043d\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e")}),f.formationDelay)},j=t=>{const n=e.getBoundingClientRect();x.x=t.clientX-n.left,x.y=a-(t.clientY-n.top),l&&u.forEach((e=>{const t=p[e];t&&(r[e].targetX=x.x+t.x,r[e].targetY=x.y+t.y)}))},y=()=>{d&&(clearTimeout(d),d=null),l&&(u.forEach((e=>{r[e].formation=!1})),l=!1,u=[],p={})},b=t=>{l&&t.preventDefault();const n=t.touches[0],s=e.getBoundingClientRect();x.x=n.clientX-s.left,x.y=a-(n.clientY-s.top),d=setTimeout((async()=>{l=!0;const e=Math.floor(r.length*(1+.1*Math.random())),t=Array.from({length:r.length},((e,t)=>t));for(let o=t.length-1;o>0;o--){const e=Math.floor(Math.random()*(o+1));[t[o],t[e]]=[t[e],t[o]]}u=t.slice(0,e);const n=h(),s=await m(n);if(s.length>0){const e=s[Math.floor(Math.random()*s.length)],t=new c.N(e),n=g(t),o=n.maxX-n.minX,a=n.maxY-n.minY,i=f.desiredSvgSize/Math.max(o,a),l=t.getTotalLength();u.forEach(((e,s)=>{const o=t.getPointAtLength(l*s/u.length),a=(o.x-n.centerX)*i,c=-(o.y-n.centerY)*i;p[e]={x:a,y:c},r[e].formation=!0,r[e].targetX=x.x+a,r[e].targetY=x.y+c}))}else console.warn("SVG \u0434\u0430\u043d\u0456 \u043d\u0435 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043e")}),f.formationDelay)},w=t=>{l&&t.preventDefault();const n=t.touches[0],s=e.getBoundingClientRect();x.x=n.clientX-s.left,x.y=a-(n.clientY-s.top),l&&u.forEach((e=>{const t=p[e];t&&(r[e].targetX=x.x+t.x,r[e].targetY=x.y+t.y)}))},N=e=>{e.preventDefault(),d&&(clearTimeout(d),d=null),l&&(u.forEach((e=>{r[e].formation=!1})),l=!1,u=[],p={})};e.addEventListener("mousedown",v),e.addEventListener("mousemove",j),e.addEventListener("mouseup",y),e.addEventListener("mouseleave",y),e.addEventListener("touchstart",b,{passive:!1}),e.addEventListener("touchmove",w,{passive:!1}),e.addEventListener("touchend",N,{passive:!1}),e.addEventListener("touchcancel",N,{passive:!1});const M="\n      #ifdef GL_ES\n      precision highp float;\n      #endif\n      const float WIDTH = ".concat(o,".0;\n      const float HEIGHT = ").concat(a,".0;\n      uniform float threshold;\n      uniform vec3 metaballs[").concat(s.numMetaballs,"];\n      uniform vec4 metaballColor;\n      void main() {\n        float x = gl_FragCoord.x;\n        float y = gl_FragCoord.y;\n        float sum = 0.0;\n        for (int i = 0; i < ").concat(s.numMetaballs,"; i++) {\n          vec3 mb = metaballs[i];\n          float dx = mb.x - x;\n          float dy = mb.y - y;\n          float r = mb.z;\n          sum += (r * r) / (dx * dx + dy * dy);\n        }\n        float smoothVal = smoothstep(threshold - 0.02, threshold + 0.02, sum);\n        gl_FragColor = mix(vec4(1.0), metaballColor, smoothVal);\n      }\n    "),S=(e,t)=>{const n=i.createShader(t);if(i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw new Error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043a\u043e\u043c\u043f\u0456\u043b\u044f\u0446\u0456\u0457 \u0448\u0435\u0439\u0434\u0435\u0440\u0430: "+i.getShaderInfoLog(n));return n},A=S("\n      attribute vec2 position;\n      void main() {\n        gl_Position = vec4(position, 0.0, 1.0);\n      }\n    ",i.VERTEX_SHADER),E=S(M,i.FRAGMENT_SHADER),C=i.createProgram();if(i.attachShader(C,A),i.attachShader(C,E),i.linkProgram(C),!i.getProgramParameter(C,i.LINK_STATUS))throw new Error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0432\u2019\u044f\u0437\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438: "+i.getProgramInfoLog(C));i.useProgram(C);const L=new Float32Array([-1,1,-1,-1,1,1,1,-1]),T=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,T),i.bufferData(i.ARRAY_BUFFER,L,i.STATIC_DRAW);const P=i.getAttribLocation(C,"position");i.enableVertexAttribArray(P),i.vertexAttribPointer(P,2,i.FLOAT,!1,0,0);const I=i.getUniformLocation(C,"metaballs"),k=i.getUniformLocation(C,"metaballColor"),R=i.getUniformLocation(C,"threshold"),Y=()=>{((e,t,n)=>{const s=.001*performance.now();for(let o=0;o<e.length;o++)for(let t=o+1;t<e.length;t++){const n=e[t].x-e[o].x,s=e[t].y-e[o].y,a=Math.sqrt(n*n+s*s)+1e-4,i=1.5*(e[o].r+e[t].r);let r=0;a<i?r=-f.repulsionCoeff*(i-a):a<1.5*i&&(r=f.attractionCoeff*(a-i));const c=n/a*r,l=s/a*r;if(e[o].vx+=c,e[o].vy+=l,e[t].vx-=c,e[t].vy-=l,e[o].formation&&e[t].formation&&a<f.bondThreshold){const i=f.bondStrength*(f.bondThreshold-a),r=n/a*i,c=s/a*i;e[o].vx+=r,e[o].vy+=c,e[t].vx-=r,e[t].vy-=c}}e.forEach(((e,o)=>{e.vx+=(Math.random()-.5)*f.randomAccel+.001*Math.sin(s+o),e.vy+=(Math.random()-.5)*f.randomAccel+.001*Math.cos(s+o),e.vx*=f.damping,e.vy*=f.damping,e.formation&&(e.vx+=(e.targetX-e.x)*f.formationAttractionFactor*f.formationGatheringSpeed-f.damping*e.vx,e.vy+=(e.targetY-e.y)*f.formationAttractionFactor*f.formationGatheringSpeed-f.damping*e.vy);const a=Math.sqrt(e.vx*e.vx+e.vy*e.vy);if(a<f.minSpeed)if(a>1e-4){const t=f.minSpeed/a;e.vx*=t,e.vy*=t}else{const t=2*Math.random()*Math.PI;e.vx=Math.cos(t)*f.minSpeed,e.vy=Math.sin(t)*f.minSpeed}e.x+=e.vx,e.y+=e.vy;const i=e.formation?e.baseR*f.formationSizeFactor:e.baseR;e.r+=(i-e.r)*f.formationSizeSpeed,e.x<e.r?(e.x=e.r,e.vx*=-1):e.x>t-e.r&&(e.x=t-e.r,e.vx*=-1),e.y<e.r?(e.y=e.r,e.vy*=-1):e.y>n-e.r&&(e.y=n-e.r,e.vy*=-1)}))})(r,o,a);const e=new Float32Array(3*s.numMetaballs);r.forEach(((t,n)=>{const s=3*n;e[s]=t.x,e[s+1]=t.y,e[s+2]=t.r})),i.useProgram(C),i.uniform3fv(I,e),i.uniform4fv(k,f.metaballColor),i.uniform1f(R,f.threshold),i.viewport(0,0,o,a),i.clearColor(1,1,1,1),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_STRIP,0,4),requestAnimationFrame(Y)};Y();const _=()=>{o=window.innerWidth,a=window.innerHeight,e.width=o,e.height=a};return window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),e.removeEventListener("mousedown",v),e.removeEventListener("mousemove",j),e.removeEventListener("mouseup",y),e.removeEventListener("mouseleave",y),e.removeEventListener("touchstart",b),e.removeEventListener("touchmove",w),e.removeEventListener("touchend",N),e.removeEventListener("touchcancel",N)}}),[t]),(0,l.jsx)("canvas",{ref:n,className:"metaballs-canvas",style:{display:"block",backgroundColor:"white"}})};var p=n(2555);const x=e=>{let{delay:t=.2,opacityY:n=20,duration:s=.5}=e;return{initial:{opacity:0,y:n},whileInView:{opacity:1,y:0},transition:{delay:t,duration:s},viewport:{once:!0}}};const v=function(){return(0,l.jsx)(a.P.a,{href:"https://www.paypal.com/donate/?hosted_button_id=FFPAVCYLTSZV6",target:"_blank",rel:"noopener noreferrer",children:(0,l.jsxs)("button",{className:"fancy-button",children:["Contribute ",(0,l.jsx)("span",{children:"\u2192"})]})})},j=e=>{let{scrollToSection:t,logoOpacity:n,logoY:s,isMobile:o,showDebugButtons:r,handleStop:c,handleContinue:d,handlePrev:h,handleNext:m,showHubButton:g,showDonateButton:f}=e;const[u,j]=(0,i.useState)(!1),y=e=>{t(e),j(!1)};return(0,i.useEffect)((()=>{const e=e=>{!u||e.target.closest(".mobile-nav")||e.target.closest(".hamburger")||j(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[u]),(0,i.useEffect)((()=>{u?(document.body.classList.add("menu-open"),n.set(1),s.set(0)):(document.body.classList.remove("menu-open"),0===window.scrollY?n.set(0):n.set(1),s.set(0))}),[u]),(0,l.jsxs)("header",{className:"landing-header ".concat(u?"menu-open":""),children:[(0,l.jsx)(a.P.a,{className:"logo",href:"#section1",onClick:e=>{e.preventDefault(),t("section1")},style:{opacity:n,y:s},children:(0,l.jsxs)("h1",{className:"logo-text",children:["no.thing",(0,l.jsx)("br",{}),(0,l.jsx)("span",{className:"logo-sub",children:"project"})]})}),o?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"hamburger",onClick:()=>{j((e=>!e))},children:u?"CLOSE":"MENU"}),(0,l.jsxs)("nav",{className:"mobile-nav ".concat(u?"open":""),children:[(0,l.jsx)("div",{className:"mobile-nav-footer",children:(0,l.jsx)(v,{})}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#section2",onClick:()=>y("section2"),children:"About"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#section3",onClick:()=>y("section3"),children:"Nothing"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#section4",onClick:()=>y("section4"),children:"Stories"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#support",onClick:()=>y("support"),children:"Join the movement"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#section6",onClick:()=>y("section6"),children:"Connect"})})]})]})]}):(0,l.jsx)("nav",{className:"landing-nav",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#section2",onClick:e=>{e.preventDefault(),t("section2")},children:"About"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#section3",onClick:e=>{e.preventDefault(),t("section3")},children:"Nothing"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#section4",onClick:e=>{e.preventDefault(),t("section4")},children:"Stories"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#support",onClick:e=>{e.preventDefault(),t("support")},children:"Join the movement"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#section6",onClick:e=>{e.preventDefault(),t("section6")},children:"Connect"})})]})}),(0,l.jsxs)("div",{className:"header-buttons-wrapper",children:[r&&(0,l.jsxs)(a.P.div,(0,p.A)((0,p.A)({className:"header-buttons"},x({opacityY:-50,duration:.7})),{},{children:[(0,l.jsx)("button",{onClick:c,children:"Stop"}),(0,l.jsx)("button",{onClick:d,children:"Continue"}),(0,l.jsx)("button",{onClick:h,children:"<"}),(0,l.jsx)("button",{onClick:m,children:">"})]})),g&&(0,l.jsx)(a.P.div,(0,p.A)((0,p.A)({className:"header-hub-button"},x({opacityY:-50,duration:.7})),{},{children:(0,l.jsx)("a",{href:"https://external-resource.com",target:"_blank",rel:"noopener noreferrer",children:"no.thing | HUB"})})),f&&(0,l.jsx)(v,{})]})]})};var y=n(3546);const b=()=>{const[e,t]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=setTimeout((()=>{t(!0)}),2e3);return()=>clearTimeout(e)}),[]),(0,i.useEffect)((()=>{if(e){const e=setTimeout((()=>{t(!1)}),8e3);return()=>clearTimeout(e)}}),[e]),(0,l.jsx)(y.N,{children:e&&(0,l.jsx)(a.P.div,{initial:{opacity:0,y:-20,filter:"blur(10px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0},transition:{duration:.5},style:{position:"absolute",top:"90%",right:"0%",backgroundColor:"rgba(0,0,0,0.6)",color:"white",padding:"10px 20px",borderRadius:"20px",fontSize:"1rem",zIndex:1001,pointerEvents:"none"},children:"Press and hold to create Everything!"})})},w=()=>(0,l.jsxs)("section",{id:"section1",className:"page-section first-screen inverting-text","data-section-id":"1",children:[(0,l.jsxs)("div",{className:"section-wrapper first-screen-content",style:{isolation:"isolate",position:"relative"},children:[(0,l.jsx)(a.P.h1,(0,p.A)((0,p.A)({className:"first-screen-title"},x(.2)),{},{children:"No.Thing Project"})),(0,l.jsx)(a.P.p,(0,p.A)((0,p.A)({className:"first-screen-description"},x(.4)),{},{children:"Start with Nothing. Create Everything"}))]}),(0,l.jsx)(b,{})]}),N=()=>(0,l.jsx)("section",{id:"section2",className:"page-section second-screen inverting-text","data-section-id":"2",children:(0,l.jsxs)("div",{className:"section-wrapper left-align second-screen-content",children:[(0,l.jsx)(a.P.h1,(0,p.A)((0,p.A)({className:"second-screen-title"},x),{},{children:"ABOUT"})),(0,l.jsx)(a.P.p,(0,p.A)((0,p.A)({className:"second-screen-description"},x({delay:.4})),{},{children:"No.Thing Project is a movement, a mindset, and a platform for transformation"})),(0,l.jsx)(a.P.p,(0,p.A)((0,p.A)({className:"second-screen-description"},x({delay:.6})),{},{children:"It is the idea that nothing is not emptiness but a starting point\u2014a space where creativity, innovation, and change can emerge."})),(0,l.jsx)(a.P.p,(0,p.A)((0,p.A)({className:"second-screen-description"},x({delay:.8})),{},{children:"We embrace minimalism as a tool for clarity and inspiration, proving that even from nothing, something extraordinary can be built."}))]})});var M=n(13);const S=()=>{const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return e.charAt(Math.floor(26*Math.random()))},A=e=>{let{text:t,speed:n=100}=e;const[s,o]=(0,i.useState)((e=>e.split("").map((e=>" "===e?" ":S())).join(""))(t)),[r,c]=(0,i.useState)(0),d=(0,i.useRef)(null),h=(0,M.W)(d,{once:!0});return(0,i.useEffect)((()=>{if(!h)return;const e=setTimeout((()=>{const e=setInterval((()=>{o((e=>{let n="";for(let s=0;s<t.length;s++)n+=s<r?t[s]:" "===t[s]?" ":S();return n})),c((n=>n>=t.length?(clearInterval(e),n):n+1))}),n)}),200);return()=>clearTimeout(e)}),[h,r,t,n]),(0,l.jsx)(a.P.span,{ref:d,style:{display:"inline-block"},children:s})},E=e=>{let{isMobile:t}=e;if(t)return(0,l.jsx)("section",{id:"section3",className:"page-section section3 inverting-text","data-section-id":"3",children:(0,l.jsx)("div",{className:"section-wrapper",children:(0,l.jsx)(a.P.h2,(0,p.A)((0,p.A)({className:"section3-title"},x(.2)),{},{style:{writingMode:"vertical-rl",textOrientation:"upright",margin:"auto",height:"auto",paddingBottom:"500px"},children:(0,l.jsx)(A,{text:"NOTHING"})}))})});return(0,l.jsx)("section",{id:"section3",className:"page-section section3 inverting-text","data-section-id":"3",children:(0,l.jsx)("div",{className:"section-wrapper right-align",children:(0,l.jsx)(a.P.h2,(0,p.A)((0,p.A)({className:"section3-title"},x(.2)),{},{children:"WHAT IS NOTHING FOR YOU?".split(" ").map(((e,t)=>(0,l.jsx)("a",{style:{display:"block"},children:"NOTHING"===e?(0,l.jsx)(A,{text:"NOTHING"}):e},t)))}))})})},C=[{name:"Someone",img:"/assets/images/someone_userphoto_id.png",text:"Nothing - It is a breath before a thought.\n    A space before a step.\n    A silence before a song.\n    \n    Nothing is not absence.\n    It is freedom from what does not matter.\n    It is the weight that was never there.\n    \n    I do not fear nothing.\n    I live in it. I move with it.\n    And in nothing, I find everything."},{name:"Noone",img:"/assets/images/noone_userphoto_id.png",text:"Nothing - is the space where meaning begins.\n    Nothing is silence before a song, the blank page before a story, the deep breath before the first step.\n\n    People fear Nothing. They think it\u2019s a void, a dead end. But I see it as freedom.\n    Freedom from expectations. Freedom to create, to reinvent, to become."}],L=()=>(0,l.jsx)("section",{id:"section4",className:"page-section section4","data-section-id":"4",children:(0,l.jsx)("div",{className:"section-wrapper",children:(0,l.jsx)("div",{className:"stories-container inverting-text",children:C.map(((e,t)=>(0,l.jsx)("div",{className:"story",children:(0,l.jsxs)("div",{className:"story-content",children:[(0,l.jsx)("div",{className:"story-photo",children:(0,l.jsx)("img",{src:e.img,alt:e.name})}),(0,l.jsxs)("div",{className:"story-text",children:[(0,l.jsx)("h3",{className:"story-name inverting-text",children:e.name}),(0,l.jsx)("p",{className:"story-description inverting-text",children:e.text})]})]})},t)))})})});var T=n(9927),P=n(948);const I=e=>{let{calcTextWidth:t,interestingRef:n}=e;const s=(0,T.s)(),o=(0,P.d)(-t),r=t/20,c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.get();const n=Math.abs(-t-e)/r;s.start({x:-t,transition:{duration:n,ease:"linear",repeat:1/0,repeatType:"loop"}})};(0,i.useEffect)((()=>{c()}),[t]);const[d,h]=(0,i.useState)(!1),[m,g]=(0,i.useState)({x:0,y:0});return(0,l.jsx)("section",{id:"section5",className:"page-section section5 inverting-text","data-section-id":"5",children:(0,l.jsx)("div",{className:"section-wrapper-full",children:(0,l.jsxs)("div",{className:"interesting-container",children:[(0,l.jsx)(a.P.div,{className:"interesting-wrapper",drag:"x",dragConstraints:{left:-t,right:0},onDragStart:()=>{s.stop()},onDragEnd:(e,t)=>{c(o.get())},animate:s,style:{x:o},onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),onMouseMove:e=>g({x:e.clientX+20,y:e.clientY+10}),children:(0,l.jsx)("span",{ref:n,className:"interesting-text","data-text":"INTERESTING?",children:"INTERESTING?"})}),(0,l.jsx)(y.N,{children:d&&(0,l.jsx)(a.P.div,{className:"drag-tooltip",style:{position:"fixed",left:m.x,top:m.y,pointerEvents:"none"},initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0},transition:{type:"spring",stiffness:300,damping:20},children:"Swipe"})})]})})})},k=()=>(0,l.jsx)("section",{id:"section6",className:"page-section section6 inverting-text","data-section-id":"6",children:(0,l.jsx)("div",{className:"section-wrapper left-align",children:(0,l.jsxs)("div",{className:"second-screen-content",children:[(0,l.jsx)(a.P.h1,(0,p.A)((0,p.A)({className:"second-screen-title"},x({delay:.2})),{},{children:"CONNECT"})),(0,l.jsxs)("div",{className:"contacts",children:[(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"mailto:someone@nothingproject.io",children:"someone@nothingproject.io"})}),(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:"mailto:noone@nothingproject.io",children:"noone@nothingproject.io"})}),(0,l.jsxs)("div",{className:"social-icons",children:[(0,l.jsx)(a.P.a,{href:"https://t.me/no_thing_project",target:"_blank",rel:"noopener noreferrer",className:"social-icon",whileHover:{scale:1,color:"#7f44ff"},transition:{duration:.1,ease:"easeInOut"},children:(0,l.jsx)("i",{className:"fab fa-telegram"})}),(0,l.jsx)(a.P.a,{href:"https://www.instagram.com/no.thing.project",target:"_blank",rel:"noopener noreferrer",className:"social-icon",whileHover:{scale:1,color:"#7f44ff"},transition:{duration:.1,ease:"easeInOut"},children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)(a.P.a,{href:"https://x.com/nooneonnothing",target:"_blank",rel:"noopener noreferrer",className:"social-icon",whileHover:{scale:1,color:"#7f44ff"},transition:{duration:.1,ease:"easeInOut"},children:(0,l.jsx)("i",{className:"fab fa-x-twitter"})}),(0,l.jsx)(a.P.a,{href:"https://www.linkedin.com/company/no-thing-project",target:"_blank",rel:"noopener noreferrer",className:"social-icon",whileHover:{scale:1,color:"#7f44ff"},transition:{duration:.1,ease:"easeInOut"},children:(0,l.jsx)("i",{className:"fab fa-linkedin"})}),(0,l.jsx)(a.P.a,{href:"https://www.behance.net/nothingproject",target:"_blank",rel:"noopener noreferrer",className:"social-icon",whileHover:{scale:1,color:"#7f44ff"},transition:{duration:.1,ease:"easeInOut"},children:(0,l.jsx)("i",{className:"fab fa-behance"})})]})]})]})})}),R=()=>(0,l.jsx)("footer",{className:"landing-footer inverting-text",children:(0,l.jsxs)(a.P.div,(0,p.A)((0,p.A)({className:"footer-content"},x({delay:.2})),{},{children:[(0,l.jsxs)("p",{children:["\xa9 2025 ",(0,l.jsx)("span",{className:"brand",children:"no.thing.project"})]}),(0,l.jsx)("p",{className:"rights",children:"ALL RIGHTS RESERVED"}),(0,l.jsxs)("p",{className:"footer-links",children:[(0,l.jsx)("a",{href:"/privacy-policy",className:"footer-link",children:"Privacy Policy"})," ","|"," ",(0,l.jsx)("a",{href:"/terms-of-use",className:"footer-link",children:"Terms of Use"})]})]}))}),Y=()=>{const e=(0,i.useRef)(null),t=(0,i.useRef)(null),n=(0,P.d)(0),s=(0,P.d)(0);return(0,i.useEffect)((()=>{const o=o=>{if(!e.current||!t.current)return;const a=e.current.getBoundingClientRect();if(o.clientX<a.left||o.clientX>a.right||o.clientY<a.top||o.clientY>a.bottom)return n.set(0),void s.set(0);const i=t.current.getBoundingClientRect(),r=o.clientX-i.left,c=o.clientY-i.top,l=i.width/2,d=i.height/2,h=(d-c)/d*5,m=(r-l)/l*5;n.set(h),s.set(m)},a=()=>{n.set(0),s.set(0)};return window.addEventListener("mousemove",o),window.addEventListener("mouseleave",a),()=>{window.removeEventListener("mousemove",o),window.removeEventListener("mouseleave",a)}}),[n,s]),(0,l.jsx)("section",{id:"support",className:"support-section",ref:e,children:(0,l.jsx)(a.P.button,{ref:t,className:"support-button",style:{perspective:1e3,rotateX:n,rotateY:s},whileHover:{scale:1.06},transition:{type:"spring",stiffness:300,damping:20},children:"Join the movement"})})},_=e=>{let{showDebugButtons:t,showHubButton:n,showDonateButton:c,isMobile:d}=e;const{scrollY:h}=(0,s.N)(),[m,g]=(0,i.useState)(0),f=(0,i.useRef)(null);(0,i.useEffect)((()=>{f.current&&g(f.current.offsetWidth)}),[]);const p=(0,o.G)(h,[0,700],[0,1]),x=(0,o.G)(h,[0,700],[-50,0]),v=(0,i.useCallback)((e=>{const t=document.getElementById(e);if(t){!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800;const n=window.scrollY,s=e-n;let o=null;const a=e=>{o||(o=e);const i=e-o,r=Math.min(i/t,1),c=r<.5?2*r*r:(4-2*r)*r-1;window.scrollTo(0,n+s*c),i<t&&requestAnimationFrame(a)};requestAnimationFrame(a)}(t.getBoundingClientRect().top+window.scrollY,1e3)}}),[]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.m,{children:(0,l.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"})}),(0,l.jsxs)(a.P.div,{className:"landing-container",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[(0,l.jsx)("div",{className:"background-container",children:(0,l.jsx)(u,{isMobile:d})}),(0,l.jsx)(j,{scrollToSection:v,logoOpacity:p,logoY:x,isMobile:d,showDebugButtons:t,showHubButton:n,showDonateButton:c}),(0,l.jsxs)("div",{className:"sections-wrapper",children:[(0,l.jsx)(w,{scrollToSection:v}),(0,l.jsx)(N,{}),(0,l.jsx)(E,{isMobile:d}),(0,l.jsx)(L,{}),(0,l.jsx)(I,{calcTextWidth:m,interestingRef:f}),(0,l.jsx)(Y,{}),(0,l.jsx)(k,{}),(0,l.jsx)(R,{})]})]})]})}}}]);
//# sourceMappingURL=818.69ebf5d9.chunk.js.map
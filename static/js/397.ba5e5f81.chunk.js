"use strict";(self.webpackChunkwebsite_landing=self.webpackChunkwebsite_landing||[]).push([[397],{8397:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var i=n(5043),o=n(5741),s=n(7798),r=n(3411),a=n(8659),c=n(1591),l=n(9435),d=n(9408);const u=[[{position:new l.Pq0(0,.32,0),rotation:new l.O9p(0,0,0)},{position:new l.Pq0(0,0,0),rotation:new l.O9p(0,0,0)},{position:new l.Pq0(-.15,0,0),rotation:new l.O9p(0,0,l.cj9.degToRad(-20))},{position:new l.Pq0(.15,0,0),rotation:new l.O9p(0,0,l.cj9.degToRad(20))},{position:new l.Pq0(-.11,-.4,0),rotation:new l.O9p(0,0,l.cj9.degToRad(-15))},{position:new l.Pq0(.11,-.4,0),rotation:new l.O9p(0,0,l.cj9.degToRad(15))}]];var h=n(6064),p=n(453),m=n(1053),w=n(9612),g=n(217),f=n(8368),y=n(579);const v={debug:{enable:!0,showDebugCursorCollision:!1,debugCursorColor:16711935,showDebugOBB:!1,showDebugSphere:!1},boundary:{collisionType:"OBB",sphereScale:1},speed:{objectSpeedMultiplier:1,stateLerpSpeed:.5},performance:{enablePostProcessing:!1,pixelRatio:.5,enableShadows:!1,antialias:!1},constants:{CURSOR_IMPULSE_MULTIPLIER:.05},controls:{enableScrollRotation:!1,toggleKey:"r",enableScrollImpulse:!0,toggleImpulseKey:"i"},camera:{fov:20}};function x(e){e.updateWorldMatrix(!0,!1),e.geometry.computeBoundingBox();const t=e.geometry.boundingBox,n=new l.Pq0;t.getSize(n);const i=n.multiplyScalar(.5),o=new l.Pq0;t.getCenter(o),o.applyMatrix4(e.matrixWorld);const s=new f.W;s.center.copy(o),s.halfSize.copy(i);const r=(new l.dwI).setFromMatrix4(e.matrixWorld);return s.rotation.copy(r),s}function b(e){const t=[];for(let r=0;r<8;r++){const n=1&r?1:-1,i=2&r?1:-1,o=4&r?1:-1,s=new l.Pq0(n*e.halfSize.x,i*e.halfSize.y,o*e.halfSize.z);s.applyMatrix3(e.rotation),s.add(e.center),t.push(s)}const n=[0,1,0,2,0,4,1,3,1,5,2,3,2,6,3,7,4,5,4,6,5,7,6,7],i=new l.LoY,o=new Float32Array(3*n.length);for(let r=0;r<n.length;r++){const e=t[n[r]];o[3*r]=e.x,o[3*r+1]=e.y,o[3*r+2]=e.z}i.setAttribute("position",new l.THS(o,3));const s=new l.mrM({color:65280,depthTest:!1,transparent:!0,opacity:1});return new l.DXC(i,s)}function j(e){const t=2*Math.tan(l.cj9.degToRad(e.fov/2))*Math.abs(e.position.z);return{frustumWidth:t*e.aspect,frustumHeight:t}}const N=(0,i.forwardRef)(((e,t)=>{let{hdrTexture:n,showDebugButtons:o}=e;const s=(0,i.useRef)(null),r=(0,i.useRef)(null),a=(0,i.useRef)([]),c=(0,i.useRef)([]),f=(0,i.useRef)([]),N=(0,i.useRef)([]),S=(0,i.useRef)(!0),P=(0,i.useRef)(null),M=(0,i.useRef)(null),R=(0,i.useRef)(null),q=(0,i.useRef)(new l.YJl),I=(0,i.useRef)(u),C=(0,i.useRef)(0),E=(0,i.useRef)(new l.I9Y),T=(0,i.useRef)(!1),L=(0,i.useRef)(null),z=(0,i.useRef)(v.controls.enableScrollRotation),O=(0,i.useRef)(v.controls.enableScrollImpulse),H=(0,i.useRef)(!1),B=(0,i.useRef)(new l.Pq0);function k(){const e=a.current;e&&e.length&&(c.current=e.map((e=>e.velocity.clone())),f.current=e.map((e=>e.rotationSpeed.clone())),N.current=e.map((e=>e.mass)),e.forEach((e=>{e.mass=0,e.velocity.set(0,0,0),e.rotationSpeed.set(0,0,0)})))}function D(){const e=a.current;if(!e||!e.length)return;S.current=!1,setTimeout((()=>{S.current=!0}),500);const t=B.current||new l.Pq0(0,0,0);e.forEach((e=>{e.mass=1;let n=e.position.clone().sub(t),i=n.length();i<.001&&(n=new l.Pq0(Math.random()-.5,Math.random()-.5,Math.random()-.5),i=n.length()),n.normalize();let o=1/(i+.5);o*=.8+.4*Math.random(),e.velocity.copy(n.multiplyScalar(o));const s=.1+.3*Math.random();e.rotationSpeed.set((Math.random()-.5)*s,(Math.random()-.5)*s,(Math.random()-.5)*s),e.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2)}))}function A(){const e=a.current;null!==e&&void 0!==e&&e.length&&(C.current++,C.current>=I.current.length&&(C.current=0),console.log("\u0417\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0444\u0456\u0433\u0443\u0440\u0430, state index:",C.current),W())}function V(){const e=a.current;null!==e&&void 0!==e&&e.length&&(C.current--,C.current<0&&(C.current=I.current.length-1),W())}function W(){const e=a.current,t=C.current,n=I.current;n[t]&&n[t].forEach(((t,n)=>{const{position:i,rotation:o}=t,s=e[n];s.startPos=s.position.clone(),s.startRot=(new l.O9p).copy(s.rotation),s.targetPos=i.clone(),s.targetRot=new l.O9p(o.x,o.y,o.z),s.lerpAlpha=0,s.isLerpingToState=!0}))}return(0,i.useEffect)((()=>{function e(e){const t=e.key.toLowerCase();t===v.controls.toggleKey.toLowerCase()&&(z.current=!z.current,console.log("Scroll rotation toggled:",z.current)),t===v.controls.toggleImpulseKey.toLowerCase()&&(O.current=!O.current,console.log("Scroll impulse toggled:",O.current))}window.addEventListener("keydown",e);const t=new l.Z58;P.current=t;const i=new l.YJl;if(q.current=i,t.add(i),v.debug.enable&&v.debug.showDebugCursorCollision){const e=new l.eaF(new l.Gu$(.05,8,8),new l.V9B({color:v.debug.debugCursorColor,wireframe:!0}));e.visible=!1,t.add(e),L.current=e}const o=new l.ubm(v.camera.fov,s.current.clientWidth/s.current.clientHeight,.1,1e3);o.position.z=5,M.current=o;const{frustumWidth:c,frustumHeight:u}=j(o),f={halfWidth:c/2,halfHeight:u/2,halfDepth:.5};if(v.debug.enable&&v.debug.showDebugSphere){const e=new l.eaF(new l.iNn(2*f.halfWidth,2*f.halfHeight,2*f.halfDepth),new l.V9B({color:16711680,wireframe:!1,transparent:!0,opacity:.2}));e.position.set(0,0,0),t.add(e)}const y=new d.JeP({antialias:v.performance.antialias,alpha:!0,premultipliedAlpha:!1});let N;if(y.setSize(s.current.clientWidth,s.current.clientHeight),y.setPixelRatio(v.performance.pixelRatio),y.shadowMap.enabled=v.performance.enableShadows,y.shadowMap.type=l.Wk7,y.toneMapping=l.FV,y.toneMappingExposure=1,s.current.appendChild(y.domElement),R.current=y,v.performance.enablePostProcessing){N=new p.s(y),r.current=N;const e=new m.A(t,o);if(N.addPass(e),1===y.getPixelRatio()){const e=new w.I(window.innerWidth,window.innerHeight);N.addPass(e)}const n=new g.X;N.addPass(n)}y.physicallyCorrectLights=!0;const S=new d.BdL(y);if(S.compileEquirectangularShader(),n){const e=S.fromEquirectangular(n).texture;t.environment=e,S.dispose()}else(new h.Y).setPath("hdr_maps/").load("poly_haven_studio_1k.hdr",(e=>{const n=S.fromEquirectangular(e).texture;t.environment=n,e.dispose(),S.dispose()}));const I=new l.$p8(16777215,.5);t.add(I);const C=new l.ZyN(16777215,1.5);C.position.set(2,2,2),C.castShadow=v.performance.enableShadows,C.shadow.mapSize.width=2048,C.shadow.mapSize.height=2048,C.shadow.camera.near=.1,C.shadow.camera.far=20,C.shadow.camera.left=-5,C.shadow.camera.right=5,C.shadow.camera.top=5,C.shadow.camera.bottom=-5,t.add(C);function B(e){let{geometry:n,color:o,x:s,y:r,speed:c=.05,rotation:d,isStatic:u=!1}=e;n.computeBoundingSphere();const h=new l.uSd({color:o,metalness:.5,roughness:.3,clearcoat:1,clearcoatRoughness:.1,sheen:.5,transmission:.2,opacity:1,transparent:!0}),p=new l.eaF(n,h);p.castShadow=v.performance.enableShadows,p.receiveShadow=v.performance.enableShadows,u?(p.rotationSpeed=new l.Pq0(0,0,0),p.velocity=new l.Pq0(0,0,0)):(p.rotationSpeed=new l.Pq0((Math.random()-.5)*c*v.speed.objectSpeedMultiplier,(Math.random()-.5)*c*v.speed.objectSpeedMultiplier,(Math.random()-.5)*c*v.speed.objectSpeedMultiplier),p.velocity=new l.Pq0((Math.random()-.5)*c*v.speed.objectSpeedMultiplier,(Math.random()-.5)*c*v.speed.objectSpeedMultiplier,(Math.random()-.5)*c*v.speed.objectSpeedMultiplier)),p.initialVelocity=p.velocity.clone(),p.initialRotationSpeed=p.rotationSpeed.clone(),p.mass=1,p.position.set(s,r,0),p.boundingRadius=n.boundingSphere.radius*v.boundary.sphereScale,p.isLerpingToState=!1,p.lerpAlpha=0,p.startPos=new l.Pq0,p.targetPos=new l.Pq0,p.startRot=new l.O9p,p.targetRot=new l.O9p,d&&p.rotation.copy(d),"OBB"===v.boundary.collisionType&&"CapsuleGeometry"===n.type&&v.debug.enable&&v.debug.showDebugOBB&&(p.obbHelper=b(x(p)),t.add(p.obbHelper)),i.add(p),a.current.push(p)}a.current=[];B({geometry:new l.Gu$(.1,50,50),color:0,x:10*(Math.random()-.5),y:10*(Math.random()-.5),isStatic:!1});for(let n=0;n<5;n++)B({geometry:new l.qU7(.03,.35,50,50),color:0,x:10*(Math.random()-.5),y:10*(Math.random()-.5)});let k=window.scrollY;const D=function(e,t){let n=0;return function(){const i=Date.now();if(!(i-n<t))return n=i,e(...arguments)}}((function(){const e=window.scrollY,t=e-k;k=e,z.current&&q.current&&(q.current.rotation.y=.001*e),O.current&&a.current.forEach((e=>{e.velocity.y+=-2e-4*-t}))}),16);function A(e){const t=s.current.getBoundingClientRect(),n=new l.I9Y((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1);E.current.copy(n),T.current=!0}window.addEventListener("scroll",D),window.addEventListener("mousemove",A);const V=new l.zD7;function W(){o.aspect=s.current.clientWidth/s.current.clientHeight,o.updateProjectionMatrix(),y.setSize(s.current.clientWidth,s.current.clientHeight);const{frustumWidth:e,frustumHeight:t}=j(o);f.halfWidth=e/2,f.halfHeight=t/2}return function e(){requestAnimationFrame(e);const n=V.getDelta();if(a.current.forEach((e=>{e.collisionCount=0})),a.current.forEach((e=>{if(e.isLerpingToState){e.lerpAlpha+=n*v.speed.stateLerpSpeed;const t=Math.min(e.lerpAlpha,1);e.position.lerpVectors(e.startPos,e.targetPos,t);const i=(new l.PTz).setFromEuler(e.startRot),o=(new l.PTz).setFromEuler(e.targetRot),s=(new l.PTz).slerpQuaternions(i,o,t);e.rotation.setFromQuaternion(s),t>=1&&(e.isLerpingToState=!1)}else e.rotation.x+=e.rotationSpeed.x*n,e.rotation.z+=e.rotationSpeed.z*n,e.position.x+=e.velocity.x*n,e.position.y+=e.velocity.y*n,e.position.z+=e.velocity.z*n;const t=e.boundingRadius||0;if(e.position.x+t>f.halfWidth&&(e.position.x=f.halfWidth-t,e.velocity.x*=-1),e.position.x-t<-f.halfWidth&&(e.position.x=-f.halfWidth+t,e.velocity.x*=-1),e.position.y+t>f.halfHeight&&(e.position.y=f.halfHeight-t,e.velocity.y*=-1),e.position.y-t<-f.halfHeight&&(e.position.y=-f.halfHeight+t,e.velocity.y*=-1),e.position.z+t>f.halfDepth&&(e.position.z=f.halfDepth-t,e.velocity.z*=-1),e.position.z-t<-f.halfDepth&&(e.position.z=-f.halfDepth+t,e.velocity.z*=-1),e.obbHelper&&v.debug.enable&&v.debug.showDebugOBB){const t=b(x(e));e.obbHelper.geometry.dispose(),e.obbHelper.geometry=t.geometry}})),T.current&&!H.current){const e=new l.tBo;e.setFromCamera(E.current,M.current);const t=e.ray;let n=!1;a.current.forEach((e=>{const i=new l.iyt(e.position,e.boundingRadius);if(t.intersectsSphere(i)){const i=new l.Pq0;t.closestPointToPoint(e.position,i);if(i.distanceTo(e.position)<e.boundingRadius){const t=(new l.Pq0).subVectors(e.position,i).normalize(),o=v.constants.CURSOR_IMPULSE_MULTIPLIER;e.velocity.add(t.clone().multiplyScalar(o));const s=new l.Pq0(t.y,0,-t.x).multiplyScalar(.5*o);e.rotationSpeed.add(s),e.collisionCount=(e.collisionCount||0)+1,v.debug.enable&&v.debug.showDebugCursorCollision&&L.current&&(L.current.position.copy(i),L.current.visible=!0),n=!0}}})),L.current&&!n&&(L.current.visible=!1)}a.current.forEach((e=>{const t=.99*(1-Math.min(.05*(e.collisionCount||0),.5)),n=e.velocity.length()*t,i=e.initialVelocity?e.initialVelocity.length():0,o=Math.max(n,i);e.velocity.length()>0&&e.velocity.setLength(o);const s=e.rotationSpeed.length()*t,r=e.initialRotationSpeed?e.initialRotationSpeed.length():0,a=Math.max(s,r);e.rotationSpeed.length()>0&&e.rotationSpeed.setLength(a)})),v.performance.enablePostProcessing&&r.current?r.current.render(n):y.render(t,o)}(),window.addEventListener("resize",W),()=>{window.removeEventListener("resize",W),window.removeEventListener("mousemove",A),window.removeEventListener("scroll",D),window.removeEventListener("keydown",e),s.current.removeChild(y.domElement),y.dispose()}}),[n]),(0,i.useEffect)((()=>{let e=!1,t=!1,n=null;function i(i){e=!0;const o=s.current.getBoundingClientRect(),r=new l.I9Y((i.clientX-o.left)/o.width*2-1,-(i.clientY-o.top)/o.height*2+1),c=new l.tBo;c.setFromCamera(r,M.current);const d=new l.Zcv(new l.Pq0(0,0,1),0),u=new l.Pq0;c.ray.intersectPlane(d,u),B.current=u.clone(),H.current=!0,n=setTimeout((()=>{if(e){t=!0;const e=I.current[Math.floor(Math.random()*I.current.length)];C.current=e,e.forEach(((e,t)=>{const n=a.current[t];n&&(n.startPos=n.position.clone(),n.startRot=(new l.O9p).copy(n.rotation),n.targetPos=e.position.clone().add(B.current),n.targetRot=new l.O9p(e.rotation.x,e.rotation.y,e.rotation.z),n.lerpAlpha=0,n.isLerpingToState=!0)})),k()}}),500)}function o(){e&&(e=!1,n&&(clearTimeout(n),n=null),t&&(D(),t=!1),setTimeout((()=>{H.current=!1}),1e3))}return window.addEventListener("mousedown",i),window.addEventListener("mouseup",o),()=>{window.removeEventListener("mousedown",i),window.removeEventListener("mouseup",o)}}),[]),(0,i.useImperativeHandle)(t,(()=>({stopObjects:k,continueObjects:D,showNextState:A,showPreviousState:V}))),(0,y.jsx)("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",overflow:"hidden",pointerEvents:"none"}})})),S=e=>{let{hdrTexture:t,showDebugButtons:n,showHubButton:l,isMobile:d}=e;const u=(0,i.useRef)(null),{scrollY:h}=((0,i.useRef)(null),(0,o.N)()),p=((0,s.G)(h,[0,400,700,1400,1800,2500],["0vw","0vw","50vw","50vw","10vw","10vw"]),(0,s.G)(h,[0,390,700,800,1510,1800,2650,2700],[1,1,1,1,1,1,1,0]),(0,i.useRef)(null)),[m,w]=(0,i.useState)(1500);(0,i.useEffect)((()=>{p.current&&w(p.current.offsetWidth)}),[]);const g=(0,s.G)(h,(e=>(0,a.L)(0,-m,.5*-e)));const f=(0,i.useCallback)((e=>{const t=document.getElementById(e);if(t){!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:800;const n=window.scrollY,i=e-n;let o=null;requestAnimationFrame((function e(s){o||(o=s);const r=s-o,a=Math.min(r/t,1),c=a<.5?2*a*a:(4-2*a)*a-1;window.scrollTo(0,n+i*c),r<t&&requestAnimationFrame(e)}))}(t.getBoundingClientRect().top+window.scrollY,1e3)}}),[]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c.m,{children:(0,y.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"})}),(0,y.jsxs)(r.P.div,{className:"landing-container",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[!d&&(0,y.jsxs)("div",{className:"background-container",children:[(0,y.jsx)(i.Suspense,{fallback:(0,y.jsx)("div",{children:"Loading 3D scene..."}),children:(0,y.jsx)("div",{className:"scene-wrapper",children:(0,y.jsx)(N,{ref:u,hdrTexture:t,showDebugButtons:n,isMobile:d})})}),(0,y.jsx)("div",{className:"glass-overlay"})]}),(0,y.jsxs)("header",{className:"landing-header",children:[(0,y.jsx)(r.P.a,{className:"logo",href:"#section1",onClick:e=>{e.preventDefault(),f("section1")},initial:{opacity:0,y:-50},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0},children:(0,y.jsxs)("h1",{className:"logo-text",children:["no.thing",(0,y.jsx)("br",{}),(0,y.jsx)("span",{className:"logo-sub",children:"project"})]})}),!d&&(0,y.jsx)("nav",{className:"landing-nav",children:(0,y.jsxs)("ul",{children:[(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"#section2",onClick:e=>{e.preventDefault(),f("section2")},children:"What is"})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"#section3",onClick:e=>{e.preventDefault(),f("section3")},children:"Nothing"})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"#section4",onClick:e=>{e.preventDefault(),f("section4")},children:"For You?"})}),(0,y.jsx)("li",{children:(0,y.jsx)("a",{href:"#section6",onClick:e=>{e.preventDefault(),f("section6")},children:"Contact Us"})})]})}),(0,y.jsxs)("div",{className:"header-buttons-wrapper",children:[n&&(0,y.jsxs)(r.P.div,{className:"header-buttons",initial:{opacity:0,y:-50},whileInView:{opacity:1,y:0},transition:{duration:.7},viewport:{once:!0},children:[(0,y.jsx)("button",{onClick:()=>{var e;return null===(e=u.current)||void 0===e?void 0:e.stopObjects()},children:"Stop"}),(0,y.jsx)("button",{onClick:()=>{var e;return null===(e=u.current)||void 0===e?void 0:e.continueObjects()},children:"Continue"}),(0,y.jsx)("button",{onClick:()=>{var e;return null===(e=u.current)||void 0===e?void 0:e.showPreviousState()},children:"<"}),(0,y.jsx)("button",{onClick:()=>{var e;return null===(e=u.current)||void 0===e?void 0:e.showNextState()},children:">"})]}),l&&(0,y.jsx)(r.P.div,{className:"header-hub-button",initial:{opacity:0,y:-50},whileInView:{opacity:1,y:0},transition:{duration:.7},viewport:{once:!0},children:(0,y.jsx)("a",{href:"https://external-resource.com",target:"_blank",rel:"noopener noreferrer",children:"no.thing | HUB"})})]})]}),(0,y.jsx)("section",{id:"section1",className:"page-section first-screen","data-section-id":"1",children:(0,y.jsxs)("div",{className:"first-screen-content",children:[(0,y.jsx)(r.P.h1,{className:"first-screen-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2,duration:.5},viewport:{once:!0},children:"No.Thing Project"}),(0,y.jsx)(r.P.p,{className:"first-screen-description",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.4,duration:.5},viewport:{once:!0},children:"start with Nothing, create Everything"}),(0,y.jsx)(r.P.p,{className:"first-screen-description",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.4,duration:.5},viewport:{once:!0}})]})}),(0,y.jsx)("section",{id:"section2",className:"page-section second-screen","data-section-id":"2",children:(0,y.jsxs)("div",{className:"second-screen-content",children:[(0,y.jsx)(r.P.h1,{className:"second-screen-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2,duration:.5},viewport:{once:!0},children:"WHAT IS"}),(0,y.jsx)(r.P.p,{className:"second-screen-description",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.4,duration:.5},viewport:{once:!0},children:"No.Thing Project is a movement, a mindset, and a platform for transformation"}),(0,y.jsx)(r.P.p,{className:"second-screen-description",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.6,duration:.5},viewport:{once:!0},children:"It is the idea that nothing is not emptiness but a starting point\u2014a space where creativity, innovation, and change can emerge."}),(0,y.jsx)(r.P.p,{className:"second-screen-description",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.6,duration:.5},viewport:{once:!0},children:"We embrace minimalism as a tool for clarity and inspiration, proving that even from nothing, something extraordinary can be built."})]})}),(0,y.jsx)("section",{id:"section3",className:"page-section section3","data-section-id":"3",children:(0,y.jsx)(r.P.h2,{className:"section3-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2,duration:.5},viewport:{once:!0},children:"WHAT IS NOTHING FOR YOU?".split(" ").map(((e,t)=>(0,y.jsx)("a",{style:{display:"block"},children:e},t)))})}),(0,y.jsx)("section",{id:"section4",className:"page-section section4","data-section-id":"4",children:(0,y.jsxs)("div",{className:"stories-container",children:[(0,y.jsx)("div",{className:"story",children:(0,y.jsxs)("div",{className:"story-content",children:[(0,y.jsx)("div",{className:"story-photo",children:(0,y.jsx)("img",{src:"/someone-photo.png",alt:"Someone"})}),(0,y.jsxs)("div",{className:"story-text",children:[(0,y.jsx)("h3",{className:"story-name",children:"Someone"}),(0,y.jsx)("p",{className:"story-description",children:"Nothing is not emptiness. It is a breath before a thought. A space before a step. A silence before a song. Nothing is not absence. It is freedom from what does not matter. It is the weight that was never there. I do not fear nothing. I live in it. I move with it. And in nothing, I find everything."})]})]})}),(0,y.jsx)("div",{className:"story",children:(0,y.jsxs)("div",{className:"story-content",children:[(0,y.jsx)("div",{className:"story-photo",children:(0,y.jsx)("img",{src:"/noone-photo.png",alt:"Noone"})}),(0,y.jsxs)("div",{className:"story-text",children:[(0,y.jsx)("h3",{className:"story-name",children:"Noone"}),(0,y.jsx)("p",{className:"story-description",children:"For me, Nothing is not empty. It\u2019s not the absence of meaning, but the space where meaning begins. Nothing is silence before a song, the blank page before a story, the deep breath before the first step. People fear Nothing. They think it\u2019s a void, a dead end. But I see it as freedom. Freedom from expectations. Freedom to create, to reinvent, to become. I am No One. And I\u2019ve built everything from Nothing."})]})]})}),(0,y.jsx)("div",{className:"story",children:(0,y.jsxs)("div",{className:"story-content",children:[(0,y.jsx)("div",{className:"story-photo",children:(0,y.jsx)("img",{src:"/yuliia_date_photo.png",alt:"Yuliia"})}),(0,y.jsxs)("div",{className:"story-text",children:[(0,y.jsx)("h3",{className:"story-name",children:"Yuliia"}),(0,y.jsx)("p",{className:"story-description",children:"Lorem ipsum dolor sit amet consectetur. Nunc donec morbi ac tellus. Malesuada tristique tempus quis viverra vivamus a. Mollis facilisi senectus penatibus laoreet neque mauris suscipit tempus vitae. Ultrices ac pharetra ut dui. Maecenas arcu non proin ante facilisis. Tortor a amet et ultricies. Nunc eu felis sit amet nisi porta. Eget magnis eu vestibulum adipiscing tellus pretium augue. Vel sed sit neque enim. Odio nunc enim quisque tellus. Nibh aliquam proin non sapien sed tempus erat pellentesque in. Cursus quis cras morbi leo proin elit ut. At dui dolor porta auctor in nec. Mauris ac pretium nunc feugiat purus."})]})]})}),(0,y.jsx)("div",{className:"story",children:(0,y.jsxs)("div",{className:"story-content",children:[(0,y.jsx)("div",{className:"story-photo",children:(0,y.jsx)("img",{src:"/sophia_date_photo.png",alt:"Sophia"})}),(0,y.jsxs)("div",{className:"story-text",children:[(0,y.jsx)("h3",{className:"story-name",children:"Sophia"}),(0,y.jsx)("p",{className:"story-description",children:"Lorem ipsum dolor sit amet consectetur. Nunc donec morbi ac tellus. Malesuada tristique tempus quis viverra vivamus a. Mollis facilisi senectus penatibus laoreet neque mauris suscipit tempus vitae. Ultrices ac pharetra ut dui. Maecenas arcu non proin ante facilisis. Tortor a amet et ultricies. Nunc eu felis sit amet nisi porta. Eget magnis eu vestibulum adipiscing tellus pretium augue. Vel sed sit neque enim. Odio nunc enim quisque tellus. Nibh aliquam proin non sapien sed tempus erat pellentesque in. Cursus quis cras morbi leo proin elit ut. At dui dolor porta auctor in nec. Mauris ac pretium nunc feugiat purus."})]})]})}),(0,y.jsx)("div",{className:"story",children:(0,y.jsxs)("div",{className:"story-content",children:[(0,y.jsx)("div",{className:"story-photo",children:(0,y.jsx)("img",{src:"/andrii_date_photo.png",alt:"Andrii"})}),(0,y.jsxs)("div",{className:"story-text",children:[(0,y.jsx)("h3",{className:"story-name",children:"Andrii"}),(0,y.jsx)("p",{className:"story-description",children:"Lorem ipsum dolor sit amet consectetur. Nunc donec morbi ac tellus. Malesuada tristique tempus quis viverra vivamus a. Mollis facilisi senectus penatibus laoreet neque mauris suscipit tempus vitae. Ultrices ac pharetra ut dui. Maecenas arcu non proin ante facilisis. Tortor a amet et ultricies. Nunc eu felis sit amet nisi porta. Eget magnis eu vestibulum adipiscing tellus pretium augue. Vel sed sit neque enim. Odio nunc enim quisque tellus. Nibh aliquam proin non sapien sed tempus erat pellentesque in. Cursus quis cras morbi leo proin elit ut. At dui dolor porta auctor in nec. Mauris ac pretium nunc feugiat purus."})]})]})})]})}),(0,y.jsx)("section",{id:"section5",className:"page-section section5","data-section-id":"5",children:(0,y.jsx)("div",{className:"interesting-container",children:(0,y.jsxs)(r.P.div,{className:"interesting-wrapper",style:{x:g},children:[(0,y.jsx)("a",{ref:p,className:"interesting-text",children:"INTERESTING?"}),(0,y.jsx)("a",{className:"interesting-text",children:"INTERESTING?"})]})})}),(0,y.jsx)("section",{id:"section6",className:"page-section section6","data-section-id":"6",children:(0,y.jsxs)("div",{className:"second-screen-content",children:[(0,y.jsx)(r.P.h1,{className:"second-screen-title",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2,duration:.5},viewport:{once:!0},children:"CONTACT US"}),(0,y.jsxs)("div",{className:"contacts",children:[(0,y.jsx)("p",{children:(0,y.jsx)("a",{href:"mailto:someone@nothingproject.io",children:"someone@nothingproject.io"})}),(0,y.jsx)("p",{children:(0,y.jsx)("a",{href:"mailto:noone@nothingproject.io",children:"noone@nothingproject.io"})}),(0,y.jsxs)("div",{className:"social-icons",children:[(0,y.jsx)(r.P.a,{href:"https://t.me/no_thing_project",target:"_blank",rel:"noopener noreferrer",className:"social-icon",whileHover:{scale:1,color:"#7f44ff"},transition:{duration:.1,ease:"easeInOut"},children:(0,y.jsx)("i",{className:"fab fa-telegram"})}),(0,y.jsx)(r.P.a,{href:"https://www.instagram.com/no.thing.project",target:"_blank",rel:"noopener noreferrer",className:"social-icon",whileHover:{scale:1,color:"#7f44ff"},transition:{duration:.1,ease:"easeInOut"},children:(0,y.jsx)("i",{className:"fab fa-instagram"})})]})]})]})}),(0,y.jsx)("footer",{className:"landing-footer",children:(0,y.jsxs)(r.P.div,{className:"footer-content",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.8,duration:.5},viewport:{once:!0},children:[(0,y.jsxs)("p",{children:["\xa9 2025 ",(0,y.jsx)("span",{className:"brand",children:"no.thing.project"})]}),(0,y.jsx)("p",{className:"rights",children:"ALL.RIGHTS.RESERVED"})]})})]})]})}}}]);
//# sourceMappingURL=397.ba5e5f81.chunk.js.map
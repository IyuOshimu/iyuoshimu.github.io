(()=>{var b=window.StackEnhancements||{};function v(e,t){return new Promise((n,r)=>{let c=document.querySelector(`script[data-stack-key="${t}"]`);if(c?.dataset.loaded==="true"){n();return}if(c){c.addEventListener("load",()=>n(),{once:!0}),c.addEventListener("error",()=>r(new Error(`Failed to load ${e}`)),{once:!0});return}let o=document.createElement("script");o.src=e,o.defer=!0,o.dataset.stackKey=t,o.addEventListener("load",()=>{o.dataset.loaded="true",n()},{once:!0}),o.addEventListener("error",()=>r(new Error(`Failed to load ${e}`)),{once:!0}),document.head.appendChild(o)})}function I(){return document.documentElement.dataset.scheme==="light"?"light":"dark"}function T(e){return I()==="light"?e?.lightTheme||"light":e?.darkTheme||"dark_dimmed"}async function H(){let e=b.musicPlayer;if(!e?.enabled||window.__stackMusicPlayer||(await v("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js","aplayer"),!window.APlayer||!e.tracks?.length))return;let t=document.getElementById("global-music-player");t||(t=document.createElement("div"),t.id="global-music-player",document.body.appendChild(t)),window.__stackMusicPlayer=new window.APlayer({container:t,fixed:e.fixed??!0,autoplay:e.autoplay??!1,loop:e.loop??"all",order:e.order??"list",preload:e.preload??"metadata",volume:e.volume??.7,mutex:e.mutex??!0,listFolded:e.listFolded??!0,listMaxHeight:e.listMaxHeight??"240px",audio:e.tracks}),W()}function W(){let e=window.__stackMusicPlayer;if(!e)return;let t=async()=>{try{if(typeof e.play=="function"){e.play();return}let r=e.audio||e.list?.audios?.[0]||document.querySelector(".aplayer audio");r&&await r.play()}catch{}};if(t(),window.__stackMusicAutoplayBound)return;window.__stackMusicAutoplayBound=!0;let n=async()=>{await t(),document.removeEventListener("pointerdown",n),document.removeEventListener("keydown",n),document.removeEventListener("touchstart",n)};document.addEventListener("pointerdown",n,{passive:!0}),document.addEventListener("keydown",n,{passive:!0}),document.addEventListener("touchstart",n,{passive:!0})}async function q(){let e=b.live2d;if(!e?.enabled||window.__stackLive2DLoaded||window.innerWidth<(e.minWidth??768))return;let t=e.cssPath||"https://letere-gzj.github.io/hugo-stack/live2d/waifu.css";if(!document.querySelector('link[data-stack-key="live2d-css"]')){let r=document.createElement("link");r.rel="stylesheet",r.href=t,r.dataset.stackKey="live2d-css",document.head.appendChild(r)}await v(e.live2dCorePath||"https://letere-gzj.github.io/hugo-stack/live2d-v3/live2dcubismcore.js","live2d-core"),await v(e.live2dSdkPath||"https://letere-gzj.github.io/hugo-stack/live2d-v3/live2d-sdk.js","live2d-sdk"),await v(e.tipsJsPath||"https://letere-gzj.github.io/hugo-stack/live2d-v3/waifu-tips.js","live2d-tips"),window.initWidget&&(window.initWidget({homePath:e.homePath||b.basePath||"/",waifuPath:e.tipsJsonPath||"https://letere-gzj.github.io/hugo-stack/live2d/my-waifu-tips.json",cdnPath:e.modelPath||"https://letere-gzj.github.io/hugo-stack/live2d-moc3/",tools:e.tools||["hitokoto","asteroids","express","photo","info","quit"],dragEnable:e.dragEnable??!1,dragDirection:e.dragDirection||["x"],switchType:e.switchType||"order"}),window.__stackLive2DLoaded=!0)}function A(){let e=document.querySelector("iframe.giscus-frame");e?.contentWindow&&e.contentWindow.postMessage({giscus:{setConfig:{theme:T(b.comments?.giscus)}}},"https://giscus.app")}function N(){let e=b.comments,t=e?.giscus,n=document.getElementById("giscus-container");if(!e?.enabled||e.provider!=="giscus"||!n||!t||!t.repoID||!t.categoryID||t.repoID.startsWith("REPLACE_")||t.categoryID.startsWith("REPLACE_"))return;n.innerHTML="";let r=document.createElement("script");r.src="https://giscus.app/client.js",r.async=!0,r.crossOrigin="anonymous",r.setAttribute("data-repo",t.repo||""),r.setAttribute("data-repo-id",t.repoID||""),r.setAttribute("data-category",t.category||""),r.setAttribute("data-category-id",t.categoryID||""),r.setAttribute("data-mapping",t.mapping||"pathname"),r.setAttribute("data-strict",String(t.strict??0)),r.setAttribute("data-reactions-enabled",String(t.reactionsEnabled??1)),r.setAttribute("data-emit-metadata",String(t.emitMetadata??0)),r.setAttribute("data-input-position",t.inputPosition||"top"),r.setAttribute("data-theme",T(t)),r.setAttribute("data-lang",t.lang||"zh-CN"),r.setAttribute("data-loading",t.loading||"lazy"),n.appendChild(r)}function F(e){e&&e.querySelectorAll("script").forEach(t=>{if(t.dataset.stackKey)return;let n=document.createElement("script");Array.from(t.attributes).forEach(r=>{n.setAttribute(r.name,r.value)}),n.textContent=t.textContent,t.replaceWith(n)})}function M(){F(document.querySelector(".main-container")),X(),window.Stack?.init?.(),N(),A(),R(),Y(),O(),V(),G(),K(),$().catch(e=>{console.error("[stack-cursor]",e)})}function R(){let e=document.getElementById("vercount_value_page_pv");if(!e)return;e.textContent="0",document.querySelectorAll('script[data-stack-key="vercount-runtime"]').forEach(n=>{n.remove()});let t=document.createElement("script");t.src="https://events.vercount.one/js",t.async=!0,t.defer=!0,t.dataset.stackKey="vercount-runtime",document.body.appendChild(t)}function C(){if(window.__stackPageLoaderDone||window.__stackPageLoaderStarted)return;let e=document.querySelector(".stack-page-loader");if(!e){window.__stackPageLoaderDone=!0;return}if(window.__stackPageLoaderStarted=!0,!document.documentElement.classList.contains("stack-first-load")){e.remove(),window.__stackPageLoaderDone=!0;return}window.setTimeout(()=>{e.classList.add("is-leaving"),document.documentElement.classList.remove("stack-first-load"),window.setTimeout(()=>{e.remove(),window.__stackPageLoaderDone=!0},650)},450)}function j(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",C,{once:!0});return}C()}function D(){let e=window.__stackPjaxProgressEl;return e?.isConnected||(e=document.createElement("div"),e.className="stack-pjax-progress",document.body.appendChild(e),window.__stackPjaxProgressEl=e),e}function U(){let e=D();window.__stackPjaxProgressTimer&&window.clearInterval(window.__stackPjaxProgressTimer),e.style.setProperty("--progress","0.08"),e.classList.add("is-active");let t=.08;window.__stackPjaxProgressTimer=window.setInterval(()=>{t=Math.min(.9,t+(1-t)*.08),e.style.setProperty("--progress",t.toFixed(3))},140)}function L(){let e=D();window.__stackPjaxProgressTimer&&(window.clearInterval(window.__stackPjaxProgressTimer),window.__stackPjaxProgressTimer=null),e.style.setProperty("--progress","1"),e.classList.add("is-finishing"),window.setTimeout(()=>{e.classList.remove("is-active","is-finishing"),e.style.setProperty("--progress","0")},320)}function X(){let e=document.querySelector(".main-container");if(!e)return;let t=(e.dataset.bodyClass||"").replace(/\s+/g," ").trim().split(" ").filter(Boolean),n=Array.from(document.body.classList).filter(r=>r.startsWith("pjax-"));document.body.className="",n.forEach(r=>{document.body.classList.add(r)}),t.forEach(r=>{document.body.classList.add(r)})}function Y(){let e=document.querySelector(".stack-site-background-video");if(!e)return;let t=e.dataset.landscapeSrc||"",n=e.dataset.portraitSrc||"",r=window.matchMedia("(orientation: landscape)"),c=()=>r.matches?t||n:n||t,o=async()=>{e.muted=!0,e.defaultMuted=!0,e.volume=0,e.playsInline=!0,e.loop=!0,e.setAttribute("muted",""),e.setAttribute("playsinline",""),e.setAttribute("preload","none");let i=c();if(!i){e.pause();return}if((!e.currentSrc||!e.currentSrc.endsWith(i))&&(e.pause(),e.src=i,e.load()),!document.hidden)try{await e.play()}catch{}},a=()=>{if(document.hidden){e.pause();return}o().catch(()=>{})};if(o().catch(()=>{}),window.__stackBackgroundMediaBound)return;window.__stackBackgroundMediaBound=!0;let s=()=>{o().catch(()=>{})};typeof r.addEventListener=="function"?r.addEventListener("change",s):r.addListener(s),document.addEventListener("visibilitychange",a)}function O(){document.querySelectorAll(".article-content .highlight, .article-content > pre").forEach(t=>{if(t.dataset.stackEnhanced==="true")return;t.dataset.stackEnhanced="true";let n=t.matches("pre")?t:t.querySelector("pre");if(!n)return;t.querySelectorAll(".stack-codeblock-header, .stack-codeblock-toggle").forEach(i=>i.remove()),t.classList.remove("stack-codeblock","is-collapsible","is-collapsed");let r=n.querySelector("code[data-lang], code[class*='language-'], code");if(!r)return;let c=Array.from(t.querySelectorAll(".copyCodeButton")),o=c.shift()??document.createElement("button");if(c.forEach(i=>i.remove()),o.isConnected||(o.type="button",o.className="copyCodeButton",t.appendChild(o)),o.dataset.stackBound!=="true"&&(o.dataset.stackBound="true",o.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(r.textContent||""),o.textContent="Copied!",window.setTimeout(()=>{o.textContent="Copy"},1e3)}catch(i){console.error("[stack-code-copy]",i),o.textContent="Failed",window.setTimeout(()=>{o.textContent="Copy"},1e3)}})),o.textContent="Copy",(r.textContent||"").split(`
`).filter((i,u,g)=>!(u===g.length-1&&i==="")).length<=16)return;t.classList.add("is-collapsible","is-collapsed");let s=document.createElement("button");s.type="button",s.className="stack-codeblock-toggle",s.textContent="\u5C55\u5F00\u4EE3\u7801",s.addEventListener("click",()=>{let i=t.classList.toggle("is-collapsed");s.textContent=i?"\u5C55\u5F00\u4EE3\u7801":"\u6536\u8D77\u4EE3\u7801"}),t.matches("pre")?t.insertAdjacentElement("afterend",s):t.appendChild(s)})}function V(){document.querySelectorAll(".stack-toc-widget details, .article-toc details").forEach(e=>{if(e.dataset.stackEnhanced==="true")return;e.dataset.stackEnhanced="true";let t=e.querySelector("summary");if(!t)return;let n=()=>{e.classList.toggle("is-open",e.open),t.setAttribute("aria-expanded",e.open?"true":"false")};e.addEventListener("toggle",n),n()})}function G(){document.querySelectorAll(".subsection-list").forEach(e=>{if(e.dataset.stackDragScroll==="true")return;e.dataset.stackDragScroll="true";let t=!1,n=!1,r=0,c=0;e.addEventListener("pointerdown",a=>{a.button===0&&(t=!0,n=!1,r=a.clientX,c=e.scrollLeft,e.setPointerCapture(a.pointerId))}),e.addEventListener("pointermove",a=>{if(!t)return;let s=a.clientX-r;!n&&Math.abs(s)>4&&(n=!0),n&&(e.scrollLeft=c-s,a.preventDefault())});let o=a=>{t&&e.hasPointerCapture(a.pointerId)&&e.releasePointerCapture(a.pointerId),window.setTimeout(()=>{n=!1},0),t=!1};e.addEventListener("pointerup",o),e.addEventListener("pointercancel",o),e.addEventListener("click",a=>{n&&(a.preventDefault(),a.stopPropagation())},!0),e.addEventListener("wheel",a=>{Math.abs(a.deltaY)<=Math.abs(a.deltaX)||(e.scrollLeft+=a.deltaY,a.preventDefault())},{passive:!1})})}function K(){let e=document.querySelector(".stack-back-to-top");e||(e=document.createElement("button"),e.type="button",e.className="stack-back-to-top",e.innerHTML=`
            <span class="stack-back-to-top-icon" aria-hidden="true">\u2191</span>
            <span class="stack-back-to-top-text">TOP</span>
        `,e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),document.body.appendChild(e));let t=()=>{e?.classList.toggle("is-visible",window.scrollY>360)};t(),!window.__stackBackToTopBound&&(window.__stackBackToTopBound=!0,window.addEventListener("scroll",t,{passive:!0}))}async function J(){window.__stackPjax||(await v("https://cdn.jsdelivr.net/npm/pjax/pjax.min.js","pjax"),window.Pjax&&(window.__stackPjax=new window.Pjax({elements:"a[href]:not([href^='#']):not([target]):not([download]):not([data-no-pjax])",selectors:["title","meta[name='description']",".main-container"],cacheBust:!1,scrollTo:0}),document.addEventListener("pjax:send",()=>{document.body.classList.add("pjax-loading"),U()}),document.addEventListener("pjax:complete",()=>{document.body.classList.remove("pjax-loading"),L(),M()}),document.addEventListener("pjax:error",()=>{document.body.classList.remove("pjax-loading"),L()})))}function k(e,t){return String.fromCharCode(e.getUint8(t),e.getUint8(t+1),e.getUint8(t+2),e.getUint8(t+3))}function E(e,t){return e.getUint32(t,!0)}function P(e,t){return e.getUint16(t,!0)}function Q(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength);if(k(t,0)!=="RIFF"||k(t,8)!=="ACON")throw new Error("Invalid ANI file");let n=12,r=[],c=[],o=[],a=6;for(;n+8<=e.byteLength;){let s=k(t,n),i=E(t,n+4),u=n+8,g=u+i;if(s==="anih")a=E(t,u+28);else if(s==="rate")for(let d=u;d<g;d+=4)c.push(E(t,d));else if(s==="seq ")for(let d=u;d<g;d+=4)o.push(E(t,d));else if(s==="LIST"&&k(t,u)==="fram"){let d=u+4;for(;d+8<=g;){let w=k(t,d),h=E(t,d+4),f=d+8,y=f+h;w==="icon"&&r.push({bytes:e.slice(f,y)}),d=y+h%2}}n=g+i%2}if(!r.length)throw new Error("ANI frame not found");return c.length||(c=r.map(()=>a)),o.length||(o=r.map((s,i)=>i)),{frames:r,rate:c,seq:o,displayRate:a}}function Z(e){let t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=t.getUint8(6),r=t.getUint8(7),c=P(t,10),o=P(t,12),a="";return e.forEach(i=>{a+=String.fromCharCode(i)}),{url:`data:image/x-icon;base64,${window.btoa(a)}`,hotspotX:c,hotspotY:o,width:n===0?256:n,height:r===0?256:r}}async function ee(e,t,n,r,c,o=48){let a=new Image;a.decoding="sync",await new Promise((f,y)=>{a.onload=()=>f(),a.onerror=()=>y(new Error("Failed to decode cursor image")),a.src=e});let s=Math.min(1,o/Math.max(t,n)),i=Math.max(16,Math.round(t*s)),u=Math.max(16,Math.round(n*s)),g=document.createElement("canvas");g.width=i,g.height=u;let d=g.getContext("2d");if(!d)return{url:e,hotspotX:r,hotspotY:c,width:t,height:n,image:a};d.imageSmoothingEnabled=!1,d.clearRect(0,0,i,u),d.drawImage(a,0,0,i,u);let w=g.toDataURL("image/png"),h=new Image;return h.decoding="async",h.src=w,{url:w,hotspotX:Math.max(0,Math.round(r*s)),hotspotY:Math.max(0,Math.round(c*s)),width:i,height:u,image:h}}async function te(e){let t=await fetch(e),n=new Uint8Array(await t.arrayBuffer()),r=Q(n);return{frames:await Promise.all(r.frames.map(async({bytes:o})=>{let a=Z(o);return ee(a.url,a.width,a.height,a.hotspotX,a.hotspotY)})),rate:r.rate,seq:r.seq}}async function m(e){let t=await te(e),n=t.seq[0]??0,r=t.frames[n]??t.frames[0];if(!r)throw new Error(`Cursor frame missing: ${e}`);return{url:r.url,hotspotX:r.hotspotX,hotspotY:r.hotspotY}}function p(e,t="auto"){return`url("${e.url.replace(/"/g,'\\"')}") ${e.hotspotX} ${e.hotspotY}, ${t}`}async function $(){if(window.__stackCursorReady||window.matchMedia("(pointer: coarse)").matches)return;let e=(b.basePath||"/").replace(/\/+$/,""),t=`${window.location.origin}${e}/mouse/here`,n={default:`${t}/pointer.ani`,pointer:`${t}/link.ani`,text:`${t}/text.ani`,help:`${t}/help.ani`,progress:`${t}/working.ani`,busy:`${t}/busy.ani`,disabled:`${t}/unavailable.ani`,move:`${t}/move.ani`,resizeEW:`${t}/horz.ani`,resizeNS:`${t}/vert.ani`,resizeNESW:`${t}/dgn2.ani`,resizeNWSE:`${t}/dgn1.ani`,crosshair:`${t}/cross.ani`,handwriting:`${t}/handwriting.ani`,alternate:`${t}/alternate.ani`};window.__stackAniCursorElement?.remove(),window.__stackAniCursorElement=null,window.__stackAniCursorImageElement=null,window.__stackAniCursorTimer&&(window.clearTimeout(window.__stackAniCursorTimer),window.__stackAniCursorTimer=null),window.__stackAniCursorRaf&&(window.cancelAnimationFrame(window.__stackAniCursorRaf),window.__stackAniCursorRaf=null),document.documentElement.classList.remove("ani-cursor-enabled"),window.__stackCursorStyle?.remove();let[r,c,o,a,s,i,u,g,d,w,h,f,y,z,B]=await Promise.all([m(n.default),m(n.pointer),m(n.text),m(n.help),m(n.progress),m(n.busy),m(n.disabled),m(n.move),m(n.resizeEW),m(n.resizeNS),m(n.resizeNESW),m(n.resizeNWSE),m(n.crosshair),m(n.handwriting),m(n.alternate)]),l={default:r,pointer:c,text:o,help:a,progress:s,busy:i,disabled:u,move:g,resizeEW:d,resizeNS:w,resizeNESW:h,resizeNWSE:f,crosshair:y,handwriting:z,alternate:B},_=document.createElement("style");_.dataset.stackCursor="static",_.textContent=`
html,
body,
body * {
    cursor: ${p(l.default)} !important;
}

a,
button,
summary,
[role="button"],
.copyCodeButton,
#dark-mode-toggle,
#i18n-switch,
#i18n-switch select,
.menu li a,
.menu-social a,
.article-list--compact.links article a,
.widget a,
.search-form button,
.aplayer,
.aplayer *,
select {
    cursor: ${p(l.pointer,"pointer")} !important;
}

input,
textarea,
[contenteditable="true"],
.search-form input {
    cursor: ${p(l.text,"text")} !important;
}

[title],
abbr,
.cursor-help {
    cursor: ${p(l.help,"help")} !important;
}

body.pjax-loading,
body.pjax-loading * {
    cursor: ${p(l.progress,"progress")} !important;
}

:disabled,
.disabled,
[aria-disabled="true"] {
    cursor: ${p(l.disabled,"not-allowed")} !important;
}

[draggable="true"],
.cursor-move {
    cursor: ${p(l.move,"move")} !important;
}

[data-cursor="wait"] {
    cursor: ${p(l.busy,"wait")} !important;
}

[data-cursor="ew-resize"] {
    cursor: ${p(l.resizeEW,"ew-resize")} !important;
}

[data-cursor="ns-resize"] {
    cursor: ${p(l.resizeNS,"ns-resize")} !important;
}

[data-cursor="nesw-resize"] {
    cursor: ${p(l.resizeNESW,"nesw-resize")} !important;
}

[data-cursor="nwse-resize"] {
    cursor: ${p(l.resizeNWSE,"nwse-resize")} !important;
}

[data-cursor="crosshair"] {
    cursor: ${p(l.crosshair,"crosshair")} !important;
}

[data-cursor="handwriting"] {
    cursor: ${p(l.handwriting,"text")} !important;
}

[data-cursor="alternate"] {
    cursor: ${p(l.alternate,"alias")} !important;
}
`,document.head.appendChild(_),window.__stackCursorStyle=_,window.__stackCursorReady=!0}function ne(){window.__stackThemeListenerBound||(window.addEventListener("onColorSchemeChange",A),window.__stackThemeListenerBound=!0)}async function re(){ne(),j(),await Promise.all([H(),q(),J(),$()]),M()}j();var x=!1;function S(){x||(x=!0,re().catch(e=>{console.error("[stack-enhancements]",e)}))}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S,{once:!0}):S();})();

var z=Object.defineProperty;var u=(e,t)=>z(e,"name",{value:t,configurable:!0});import{_ as S,$ as W,a as L}from"./index.module.ce129092.js";import{r as o}from"./index.ea646b62.js";import{r as F}from"./index.ef4481b2.js";import{j as b,F as k,a as K}from"./jsx-runtime.474e4f80.js";import{I as q,r as X}from"./IconBase.esm.cbcda0d3.js";import{T as Y}from"./Text.62373c53.js";import"./iframe.4acd6ff0.js";import"./clsx.m.256e9345.js";function H(e,t){const n=o.exports.createContext(t);function r(s){const{children:d,...l}=s,a=o.exports.useMemo(()=>l,Object.values(l));return o.exports.createElement(n.Provider,{value:a},d)}u(r,"Provider");function c(s){const d=o.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${s}\` must be used within \`${e}\``)}return u(c,"useContext"),r.displayName=e+"Provider",[r,c]}u(H,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function Z(e,t=[]){let n=[];function r(s,d){const l=o.exports.createContext(d),a=n.length;n=[...n,d];function i(f){const{scope:p,children:x,...$}=f,E=(p==null?void 0:p[e][a])||l,P=o.exports.useMemo(()=>$,Object.values($));return o.exports.createElement(E.Provider,{value:P},x)}u(i,"Provider");function h(f,p){const x=(p==null?void 0:p[e][a])||l,$=o.exports.useContext(x);if($)return $;if(d!==void 0)return d;throw new Error(`\`${f}\` must be used within \`${s}\``)}return u(h,"useContext"),i.displayName=s+"Provider",[i,h]}u(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const c=u(()=>{const s=n.map(d=>o.exports.createContext(d));return u(function(l){const a=(l==null?void 0:l[e])||s;return o.exports.useMemo(()=>({[`__scope${e}`]:{...l,[e]:a}}),[l,a])},"useScope")},"createScope");return c.scopeName=e,[r,G(c,...t)]}u(Z,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function G(...e){const t=e[0];if(e.length===1)return t;const n=u(()=>{const r=e.map(c=>({useScope:c(),scopeName:c.scopeName}));return u(function(s){const d=r.reduce((l,{useScope:a,scopeName:i})=>{const f=a(s)[`__scope${i}`];return{...l,...f}},{});return o.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}u(G,"$c512c27ab02ef895$var$composeContextScopes");function w(e,t,{checkForDefaultPrevented:n=!0}={}){return u(function(c){if(e==null||e(c),n===!1||!c.defaultPrevented)return t==null?void 0:t(c)},"handleEvent")}u(w,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function M(e){const t=o.exports.useRef(e);return o.exports.useEffect(()=>{t.current=e}),o.exports.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}u(M,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function J({prop:e,defaultProp:t,onChange:n=u(()=>{},"onChange")}){const[r,c]=Q({defaultProp:t,onChange:n}),s=e!==void 0,d=s?e:r,l=M(n),a=o.exports.useCallback(i=>{if(s){const f=typeof i=="function"?i(e):i;f!==e&&l(f)}else c(i)},[s,e,c,l]);return[d,a]}u(J,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Q({defaultProp:e,onChange:t}){const n=o.exports.useState(e),[r]=n,c=o.exports.useRef(r),s=M(t);return o.exports.useEffect(()=>{c.current!==r&&(s(r),c.current=r)},[r,c,s]),n}u(Q,"$71cd76cc60e0454e$var$useUncontrolledState");function V(e){const t=o.exports.useRef({value:e,previous:e});return o.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}u(V,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const A=Boolean(globalThis==null?void 0:globalThis.document)?o.exports.useLayoutEffect:()=>{};function ee(e){const[t,n]=o.exports.useState(void 0);return A(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const s=c[0];let d,l;if("borderBoxSize"in s){const a=s.borderBoxSize,i=Array.isArray(a)?a[0]:a;d=i.inlineSize,l=i.blockSize}else d=e.offsetWidth,l=e.offsetHeight;n({width:d,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}u(ee,"$db6c3485150b8e66$export$1ab7ae714698c4b8");const te=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],I=te.reduce((e,t)=>{const n=o.exports.forwardRef((r,c)=>{const{asChild:s,...d}=r,l=s?W:t;return o.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),o.exports.createElement(l,S({},d,{ref:c}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),ne="Label",[Pe,oe]=H(ne,{id:void 0,controlRef:{current:null}}),re=u(e=>{const t=oe("LabelConsumer"),{controlRef:n}=t;return o.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function ce(e,t){return o.exports.useReducer((n,r)=>{const c=t[n][r];return c!=null?c:n},e)}u(ce,"$fe963b355347cc68$export$3e6543de14f8614f");const T=u(e=>{const{present:t,children:n}=e,r=se(t),c=typeof n=="function"?n({present:r.isPresent}):o.exports.Children.only(n),s=L(r.ref,c.ref);return typeof n=="function"||r.isPresent?o.exports.cloneElement(c,{ref:s}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");T.displayName="Presence";function se(e){const[t,n]=o.exports.useState(),r=o.exports.useRef({}),c=o.exports.useRef(e),s=o.exports.useRef("none"),d=e?"mounted":"unmounted",[l,a]=ce(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.exports.useEffect(()=>{const i=N(r.current);s.current=l==="mounted"?i:"none"},[l]),A(()=>{const i=r.current,h=c.current;if(h!==e){const p=s.current,x=N(i);e?a("MOUNT"):x==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(h&&p!==x?"ANIMATION_OUT":"UNMOUNT"),c.current=e}},[e,a]),A(()=>{if(t){const i=u(f=>{const x=N(r.current).includes(f.animationName);f.target===t&&x&&F.exports.flushSync(()=>a("ANIMATION_END"))},"handleAnimationEnd"),h=u(f=>{f.target===t&&(s.current=N(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:o.exports.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}u(se,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}u(N,"$921a889cee6df7e8$var$getAnimationName");const B="Checkbox",[ae,_e]=Z(B),[ie,ue]=ae(B),de=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":r,name:c,checked:s,defaultChecked:d,required:l,disabled:a,value:i="on",onCheckedChange:h,...f}=e,[p,x]=o.exports.useState(null),$=L(t,m=>x(m)),E=re(p),P=r||E,_=o.exports.useRef(!1),O=p?Boolean(p.closest("form")):!0,[y=!1,j]=J({prop:s,defaultProp:d,onChange:h});return o.exports.createElement(ie,{scope:n,state:y,disabled:a},o.exports.createElement(I.button,S({type:"button",role:"checkbox","aria-checked":v(y)?"mixed":y,"aria-labelledby":P,"aria-required":l,"data-state":D(y),"data-disabled":a?"":void 0,disabled:a,value:i},f,{ref:$,onKeyDown:w(e.onKeyDown,m=>{m.key==="Enter"&&m.preventDefault()}),onClick:w(e.onClick,m=>{j(R=>v(R)?!0:!R),O&&(_.current=m.isPropagationStopped(),_.current||m.stopPropagation())})})),O&&o.exports.createElement(pe,{control:p,bubbles:!_.current,name:c,value:i,checked:y,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),le="CheckboxIndicator",fe=o.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...c}=e,s=ue(le,n);return o.exports.createElement(T,{present:r||v(s.state)||s.state===!0},o.exports.createElement(I.span,S({"data-state":D(s.state),"data-disabled":s.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),pe=u(e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=o.exports.useRef(null),d=V(n),l=ee(t);return o.exports.useEffect(()=>{const a=s.current,i=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(i,"checked").set;if(d!==n&&f){const p=new Event("click",{bubbles:r});a.indeterminate=v(n),f.call(a,v(n)?!1:n),a.dispatchEvent(p)}},[d,n,r]),o.exports.createElement("input",S({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},c,{tabIndex:-1,ref:s,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}u(v,"$e698a72e93240346$var$isIndeterminate");function D(e){return v(e)?"indeterminate":e?"checked":"unchecked"}u(D,"$e698a72e93240346$var$getState");const be=de,he=fe;var C=new Map;C.set("bold",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return b(k,{children:b("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var xe=u(function(t,n){return X(t,n,C)},"renderPath"),U=o.exports.forwardRef(function(e,t){return b(q,{...Object.assign({ref:t},e,{renderPath:xe})})});U.displayName="Check";const $e=U;function g({}){return b(be,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:b(he,{asChild:!0,children:b($e,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}u(g,"Checkbox");try{g.displayName="Checkbox",g.__docgenInfo={description:"",displayName:"Checkbox",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.tsx#Checkbox"]={docgenInfo:g.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox/Checkbox.tsx#Checkbox"})}catch{}const Ae={title:"Components/Checkbox",component:g,args:{},decorators:[e=>K("div",{className:"flex items-center gap-2",children:[e(),b(Y,{size:"sm",children:"Lembrar de mim por 30 dias"})]})]},Oe={},Re=["Default"];export{Oe as Default,Re as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Checkbox.stories.2a4ab29d.js.map

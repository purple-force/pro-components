(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[4673],{38524:function(b,h,t){"use strict";t.r(h);var s=t(76868),u=t(11527);h.default=function(){return(0,u.jsx)("div",{style:{background:"#fafafa",padding:24},children:(0,u.jsx)(s.ZP,{type:"descriptions"})})}},62133:function(b,h,t){"use strict";t.r(h);var s=t(76868),u=t(11527);h.default=function(){return(0,u.jsx)("div",{style:{background:"#fafafa",padding:24},children:(0,u.jsx)(s.ZP,{statistic:2,type:"list"})})}},89461:function(b,h,t){"use strict";t.r(h);var s=t(76868),u=t(11527);h.default=function(){return(0,u.jsx)("div",{style:{background:"#fafafa",padding:24},children:(0,u.jsx)(s.ZP,{type:"list"})})}},55015:function(b,h,t){"use strict";t.r(h);var s=t(76868),u=t(11527);h.default=function(){return(0,u.jsx)("div",{style:{background:"#fafafa",padding:24},children:(0,u.jsx)(s.ZP,{type:"result"})})}},76868:function(b,h,t){"use strict";t.d(h,{Yk:function(){return U},dX:function(){return x},cg:function(){return o},nq:function(){return p},TL:function(){return E},SM:function(){return c},uk:function(){return N},DJ:function(){return R},hM:function(){return A},ZP:function(){return K}});var s=t(57213),u=t.n(s),m=t(12342),O=t.n(m),j=t(50959),a=t(65221),M=t(18655),f=t(98284),v=t(51048),y=t(76775),e=t(11527),Z=function(i){var n=i.padding;return(0,e.jsx)("div",{style:{padding:n||"0 24px"},children:(0,e.jsx)(v.Z,{style:{margin:0}})})},r={xs:2,sm:2,md:4,lg:4,xl:6,xxl:6},d=function(i){var n=i.size,l=i.active,g=(0,j.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),B=M.ZP.useBreakpoint()||g,I=Object.keys(B).filter(function(C){return B[C]===!0})[0]||"md",w=n===void 0?r[I]||6:n,L=function(D){return D===0?0:w>2?42:16};return(0,e.jsx)(f.Z,{bordered:!1,style:{marginBlockEnd:16},children:(0,e.jsx)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(w).fill(null).map(function(C,D){return(0,e.jsxs)("div",{style:{borderInlineStart:w>2&&D===1?"1px solid rgba(0,0,0,0.06)":void 0,paddingInlineStart:L(D),flex:1,marginInlineEnd:D===0?16:0},children:[(0,e.jsx)(a.Z,{active:l,paragraph:!1,title:{width:100,style:{marginBlockStart:0}}}),(0,e.jsx)(a.Z.Button,{active:l,style:{height:48}})]},D)})})})},p=function(i){var n=i.active;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(f.Z,{bordered:!1,style:{borderRadius:0},bodyStyle:{padding:24},children:(0,e.jsxs)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,e.jsx)("div",{style:{maxWidth:"100%",flex:1},children:(0,e.jsx)(a.Z,{active:n,title:{width:100,style:{marginBlockStart:0}},paragraph:{rows:1,style:{margin:0}}})}),(0,e.jsx)(a.Z.Button,{active:n,size:"small",style:{width:165,marginBlockStart:12}})]})}),(0,e.jsx)(Z,{})]})},o=function(i){var n=i.size,l=i.active,g=l===void 0?!0:l,B=i.actionButton;return(0,e.jsxs)(f.Z,{bordered:!1,bodyStyle:{padding:0},children:[new Array(n).fill(null).map(function(I,w){return(0,e.jsx)(p,{active:!!g},w)}),B!==!1&&(0,e.jsx)(f.Z,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},bodyStyle:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)(a.Z.Button,{style:{width:102},active:g,size:"small"})})]})},c=function(i){var n=i.active;return(0,e.jsxs)("div",{style:{marginBlockEnd:16},children:[(0,e.jsx)(a.Z,{paragraph:!1,title:{width:185}}),(0,e.jsx)(a.Z.Button,{active:n,size:"small"})]})},E=function(i){var n=i.active;return(0,e.jsx)(f.Z,{bordered:!1,style:{borderBottomRightRadius:0,borderBottomLeftRadius:0},bodyStyle:{paddingBlockEnd:8},children:(0,e.jsxs)(y.Z,{style:{width:"100%",justifyContent:"space-between"},children:[(0,e.jsx)(a.Z.Button,{active:n,style:{width:200},size:"small"}),(0,e.jsxs)(y.Z,{children:[(0,e.jsx)(a.Z.Button,{active:n,size:"small",style:{width:120}}),(0,e.jsx)(a.Z.Button,{active:n,size:"small",style:{width:80}})]})]})})},S=function(i){var n=i.active,l=n===void 0?!0:n,g=i.statistic,B=i.actionButton,I=i.toolbar,w=i.pageHeader,L=i.list,C=L===void 0?5:L;return(0,e.jsxs)("div",{style:{width:"100%"},children:[w!==!1&&(0,e.jsx)(c,{active:l}),g!==!1&&(0,e.jsx)(d,{size:g,active:l}),(I!==!1||C!==!1)&&(0,e.jsxs)(f.Z,{bordered:!1,bodyStyle:{padding:0},children:[I!==!1&&(0,e.jsx)(E,{active:l}),C!==!1&&(0,e.jsx)(o,{size:C,active:l,actionButton:B})]})]})},x=S,z={xs:1,sm:2,md:3,lg:3,xl:3,xxl:4},P=function(i){var n=i.active;return(0,e.jsxs)("div",{style:{marginBlockStart:32},children:[(0,e.jsx)(a.Z.Button,{active:n,size:"small",style:{width:100,marginBlockEnd:16}}),(0,e.jsxs)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:[(0,e.jsxs)("div",{style:{flex:1,marginInlineEnd:24,maxWidth:300},children:[(0,e.jsx)(a.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,e.jsx)(a.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:8}}}),(0,e.jsx)(a.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:8}}})]}),(0,e.jsx)("div",{style:{flex:1,alignItems:"center",justifyContent:"center"},children:(0,e.jsxs)("div",{style:{maxWidth:300,margin:"auto"},children:[(0,e.jsx)(a.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,e.jsx)(a.Z,{active:n,paragraph:!1,title:{style:{marginBlockStart:8}}})]})})]})]})},W=function(i){var n=i.size,l=i.active,g=(0,j.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),B=M.ZP.useBreakpoint()||g,I=Object.keys(B).filter(function(L){return B[L]===!0})[0]||"md",w=n===void 0?z[I]||3:n;return(0,e.jsx)("div",{style:{width:"100%",justifyContent:"space-between",display:"flex"},children:new Array(w).fill(null).map(function(L,C){return(0,e.jsxs)("div",{style:{flex:1,paddingInlineStart:C===0?0:24,paddingInlineEnd:C===w-1?0:24},children:[(0,e.jsx)(a.Z,{active:l,paragraph:!1,title:{style:{marginBlockStart:0}}}),(0,e.jsx)(a.Z,{active:l,paragraph:!1,title:{style:{marginBlockStart:8}}}),(0,e.jsx)(a.Z,{active:l,paragraph:!1,title:{style:{marginBlockStart:8}}})]},C)})})},R=function(i){var n=i.active,l=i.header,g=l===void 0?!1:l,B=(0,j.useMemo)(function(){return{lg:!0,md:!0,sm:!1,xl:!1,xs:!1,xxl:!1}},[]),I=M.ZP.useBreakpoint()||B,w=Object.keys(I).filter(function(C){return I[C]===!0})[0]||"md",L=z[w]||3;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{display:"flex",background:g?"rgba(0,0,0,0.02)":"none",padding:"24px 8px"},children:[new Array(L).fill(null).map(function(C,D){return(0,e.jsx)("div",{style:{flex:1,paddingInlineStart:g&&D===0?0:20,paddingInlineEnd:32},children:(0,e.jsx)(a.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:24,width:g?"75px":"100%"}}})},D)}),(0,e.jsx)("div",{style:{flex:3,paddingInlineStart:32},children:(0,e.jsx)(a.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:24,width:g?"75px":"100%"}}})})]}),(0,e.jsx)(Z,{padding:"0px 0px"})]})},A=function(i){var n=i.active,l=i.size,g=l===void 0?4:l;return(0,e.jsxs)(f.Z,{bordered:!1,children:[(0,e.jsx)(a.Z.Button,{active:n,size:"small",style:{width:100,marginBlockEnd:16}}),(0,e.jsx)(R,{header:!0,active:n}),new Array(g).fill(null).map(function(B,I){return(0,e.jsx)(R,{active:n},I)}),(0,e.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",paddingBlockStart:16},children:(0,e.jsx)(a.Z,{active:n,paragraph:!1,title:{style:{margin:0,height:32,float:"right",maxWidth:"630px"}}})})]})},U=function(i){var n=i.active;return(0,e.jsxs)(f.Z,{bordered:!1,style:{borderStartEndRadius:0,borderTopLeftRadius:0},children:[(0,e.jsx)(a.Z.Button,{active:n,size:"small",style:{width:100,marginBlockEnd:16}}),(0,e.jsx)(W,{active:n}),(0,e.jsx)(P,{active:n})]})},_=function(i){var n=i.active,l=n===void 0?!0:n,g=i.pageHeader,B=i.list;return(0,e.jsxs)("div",{style:{width:"100%"},children:[g!==!1&&(0,e.jsx)(c,{active:l}),(0,e.jsx)(U,{active:l}),B!==!1&&(0,e.jsx)(Z,{}),B!==!1&&(0,e.jsx)(A,{active:l,size:B})]})},k=_,H=function(i){var n=i.active,l=n===void 0?!0:n,g=i.pageHeader;return(0,e.jsxs)("div",{style:{width:"100%"},children:[g!==!1&&(0,e.jsx)(c,{active:l}),(0,e.jsx)(f.Z,{children:(0,e.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:128},children:[(0,e.jsx)(a.Z.Avatar,{size:64,style:{marginBlockEnd:32}}),(0,e.jsx)(a.Z.Button,{active:l,style:{width:214,marginBlockEnd:8}}),(0,e.jsx)(a.Z.Button,{active:l,style:{width:328},size:"small"}),(0,e.jsxs)(y.Z,{style:{marginBlockStart:24},children:[(0,e.jsx)(a.Z.Button,{active:l,style:{width:116}}),(0,e.jsx)(a.Z.Button,{active:l,style:{width:116}})]})]})})]})},G=H,X=["type"],N=function(i){var n=i.type,l=n===void 0?"list":n,g=O()(i,X);return l==="result"?(0,e.jsx)(G,u()({},g)):l==="descriptions"?(0,e.jsx)(k,u()({},g)):(0,e.jsx)(x,u()({},g))},K=N},82938:function(b,h,t){"use strict";t.d(h,{T:function(){return u},n:function(){return s}});function s(m){return["small","middle","large"].includes(m)}function u(m){return m?typeof m=="number"&&!Number.isNaN(m):!1}},69605:function(b,h,t){"use strict";t.d(h,{Z:function(){return u}});var s=t(50959);function u(){const[,m]=s.useReducer(O=>O+1,0);return m}},1537:function(b,h,t){"use strict";t.d(h,{ZP:function(){return a},c4:function(){return m},m9:function(){return M}});var s=t(50959),u=t(48170);const m=["xxl","xl","lg","md","sm","xs"],O=f=>({xs:`(max-width: ${f.screenXSMax}px)`,sm:`(min-width: ${f.screenSM}px)`,md:`(min-width: ${f.screenMD}px)`,lg:`(min-width: ${f.screenLG}px)`,xl:`(min-width: ${f.screenXL}px)`,xxl:`(min-width: ${f.screenXXL}px)`}),j=f=>{const v=f,y=[].concat(m).reverse();return y.forEach((e,Z)=>{const r=e.toUpperCase(),d=`screen${r}Min`,p=`screen${r}`;if(!(v[d]<=v[p]))throw new Error(`${d}<=${p} fails : !(${v[d]}<=${v[p]})`);if(Z<y.length-1){const o=`screen${r}Max`;if(!(v[p]<=v[o]))throw new Error(`${p}<=${o} fails : !(${v[p]}<=${v[o]})`);const E=`screen${y[Z+1].toUpperCase()}Min`;if(!(v[o]<=v[E]))throw new Error(`${o}<=${E} fails : !(${v[o]}<=${v[E]})`)}}),f};function a(){const[,f]=(0,u.Z)(),v=O(j(f));return s.useMemo(()=>{const y=new Map;let e=-1,Z={};return{matchHandlers:{},dispatch(r){return Z=r,y.forEach(d=>d(Z)),y.size>=1},subscribe(r){return y.size||this.register(),e+=1,y.set(e,r),r(Z),e},unsubscribe(r){y.delete(r),y.size||this.unregister()},unregister(){Object.keys(v).forEach(r=>{const d=v[r],p=this.matchHandlers[d];p==null||p.mql.removeListener(p==null?void 0:p.listener)}),y.clear()},register(){Object.keys(v).forEach(r=>{const d=v[r],p=c=>{let{matches:E}=c;this.dispatch(Object.assign(Object.assign({},Z),{[r]:E}))},o=window.matchMedia(d);o.addListener(p),this.matchHandlers[d]={mql:o,listener:p},p(o)})},responsiveMap:v}},[f])}const M=(f,v)=>{if(v&&typeof v=="object")for(let y=0;y<m.length;y++){const e=m[y];if(f[e]&&v[e]!==void 0)return v[e]}}},51048:function(b,h,t){"use strict";t.d(h,{Z:function(){return Z}});var s=t(50959),u=t(84875),m=t.n(u),O=t(73359),j=t(91205),a=t(50706),M=t(58049);const f=r=>{const{componentCls:d,sizePaddingEdgeHorizontal:p,colorSplit:o,lineWidth:c,textPaddingInline:E,orientationMargin:S,verticalMarginInline:x}=r;return{[d]:Object.assign(Object.assign({},(0,j.Wf)(r)),{borderBlockStart:`${c}px solid ${o}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:x,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${c}px solid ${o}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${r.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${d}-with-text`]:{display:"flex",alignItems:"center",margin:`${r.dividerHorizontalWithTextGutterMargin}px 0`,color:r.colorTextHeading,fontWeight:500,fontSize:r.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${o}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${c}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${d}-with-text-left`]:{"&::before":{width:`${S*100}%`},"&::after":{width:`${100-S*100}%`}},[`&-horizontal${d}-with-text-right`]:{"&::before":{width:`${100-S*100}%`},"&::after":{width:`${S*100}%`}},[`${d}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:E},"&-dashed":{background:"none",borderColor:o,borderStyle:"dashed",borderWidth:`${c}px 0 0`},[`&-horizontal${d}-with-text${d}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${d}-dashed`]:{borderInlineStartWidth:c,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${d}-with-text`]:{color:r.colorText,fontWeight:"normal",fontSize:r.fontSize},[`&-horizontal${d}-with-text-left${d}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${d}-inner-text`]:{paddingInlineStart:p}},[`&-horizontal${d}-with-text-right${d}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${d}-inner-text`]:{paddingInlineEnd:p}}})}};var v=(0,a.Z)("Divider",r=>{const d=(0,M.TS)(r,{dividerHorizontalWithTextGutterMargin:r.margin,dividerHorizontalGutterMargin:r.marginLG,sizePaddingEdgeHorizontal:0});return[f(d)]},r=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:r.marginXS})),y=function(r,d){var p={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&d.indexOf(o)<0&&(p[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(r);c<o.length;c++)d.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(r,o[c])&&(p[o[c]]=r[o[c]]);return p},Z=r=>{const{getPrefixCls:d,direction:p,divider:o}=s.useContext(O.E_),{prefixCls:c,type:E="horizontal",orientation:S="center",orientationMargin:x,className:z,rootClassName:P,children:W,dashed:R,plain:A,style:U}=r,_=y(r,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),k=d("divider",c),[H,G]=v(k),X=S.length>0?`-${S}`:S,N=!!W,K=S==="left"&&x!=null,$=S==="right"&&x!=null,i=m()(k,o==null?void 0:o.className,G,`${k}-${E}`,{[`${k}-with-text`]:N,[`${k}-with-text${X}`]:N,[`${k}-dashed`]:!!R,[`${k}-plain`]:!!A,[`${k}-rtl`]:p==="rtl",[`${k}-no-default-orientation-margin-left`]:K,[`${k}-no-default-orientation-margin-right`]:$},z,P),n=s.useMemo(()=>typeof x=="number"?x:/^\d+$/.test(x)?Number(x):x,[x]),l=Object.assign(Object.assign({},K&&{marginLeft:n}),$&&{marginRight:n});return H(s.createElement("div",Object.assign({className:i,style:Object.assign(Object.assign({},o==null?void 0:o.style),U)},_,{role:"separator"}),W&&E!=="vertical"&&s.createElement("span",{className:`${k}-inner-text`,style:l},W)))}},31936:function(b,h,t){"use strict";var s=t(50959),u=t(19891),m=t(69605),O=t(1537);function j(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const M=(0,s.useRef)({}),f=(0,m.Z)(),v=(0,O.ZP)();return(0,u.Z)(()=>{const y=v.subscribe(e=>{M.current=e,a&&f()});return()=>v.unsubscribe(y)},[]),M.current}h.Z=j},18655:function(b,h,t){"use strict";var s=t(31936);function u(){return(0,s.Z)()}h.ZP={useBreakpoint:u}},76775:function(b,h,t){"use strict";t.d(h,{Z:function(){return o}});var s=t(50959),u=t(84875),m=t.n(u),O=t(78880),j=t(82938),a=t(73359),M=t(96570);const f=s.createContext({latestIndex:0}),v=f.Provider;var e=c=>{let{className:E,index:S,children:x,split:z,style:P}=c;const{latestIndex:W}=s.useContext(f);return x==null?null:s.createElement(s.Fragment,null,s.createElement("div",{className:E,style:P},x),S<W&&z&&s.createElement("span",{className:`${E}-split`},z))},Z=t(46150),r=function(c,E){var S={};for(var x in c)Object.prototype.hasOwnProperty.call(c,x)&&E.indexOf(x)<0&&(S[x]=c[x]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var z=0,x=Object.getOwnPropertySymbols(c);z<x.length;z++)E.indexOf(x[z])<0&&Object.prototype.propertyIsEnumerable.call(c,x[z])&&(S[x[z]]=c[x[z]]);return S};const p=s.forwardRef((c,E)=>{var S,x;const{getPrefixCls:z,space:P,direction:W}=s.useContext(a.E_),{size:R=(P==null?void 0:P.size)||"small",align:A,className:U,rootClassName:_,children:k,direction:H="horizontal",prefixCls:G,split:X,style:N,wrap:K=!1,classNames:$,styles:i}=c,n=r(c,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[l,g]=Array.isArray(R)?R:[R,R],B=(0,j.n)(g),I=(0,j.n)(l),w=(0,j.T)(g),L=(0,j.T)(l),C=(0,O.Z)(k,{keepEmpty:!0}),D=A===void 0&&H==="horizontal"?"center":A,T=z("space",G),[te,ne]=(0,Z.Z)(T),ie=m()(T,P==null?void 0:P.className,ne,`${T}-${H}`,{[`${T}-rtl`]:W==="rtl",[`${T}-align-${D}`]:D,[`${T}-gap-row-${g}`]:B,[`${T}-gap-col-${l}`]:I},U,_),ee=m()(`${T}-item`,(S=$==null?void 0:$.item)!==null&&S!==void 0?S:(x=P==null?void 0:P.classNames)===null||x===void 0?void 0:x.item);let Q=0;const re=C.map((F,Y)=>{var J,q;F!=null&&(Q=Y);const se=F&&F.key||`${ee}-${Y}`;return s.createElement(e,{className:ee,key:se,index:Y,split:X,style:(J=i==null?void 0:i.item)!==null&&J!==void 0?J:(q=P==null?void 0:P.styles)===null||q===void 0?void 0:q.item},F)}),ae=s.useMemo(()=>({latestIndex:Q}),[Q]);if(C.length===0)return null;const V={};return K&&(V.flexWrap="wrap"),!I&&L&&(V.columnGap=l),!B&&w&&(V.rowGap=g),te(s.createElement("div",Object.assign({ref:E,className:ie,style:Object.assign(Object.assign(Object.assign({},V),P==null?void 0:P.style),N)},n),s.createElement(v,{value:ae},re)))});p.Compact=M.ZP;var o=p},12342:function(b,h,t){var s=t(20006);function u(m,O){if(m==null)return{};var j=s(m,O),a,M;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(m);for(M=0;M<f.length;M++)a=f[M],!(O.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(m,a)&&(j[a]=m[a])}return j}b.exports=u,b.exports.__esModule=!0,b.exports.default=b.exports},20006:function(b){function h(t,s){if(t==null)return{};var u={},m=Object.keys(t),O,j;for(j=0;j<m.length;j++)O=m[j],!(s.indexOf(O)>=0)&&(u[O]=t[O]);return u}b.exports=h,b.exports.__esModule=!0,b.exports.default=b.exports}}]);
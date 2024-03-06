import{a as ft,d as pt,e as ht}from"./chunk-5BO62TKT.js";import{A as He,Ba as ct,C as Ze,Ca as at,D as X,Da as ut,E as We,G as Xe,Ga as dt,H as me,Ha as lt,I as Y,K as J,L as Ye,M as Je,Q as A,S as m,T as S,U as I,V as Qe,W as et,X as Q,Y as tt,Z as nt,_ as ee,a as x,aa as rt,b as F,c as Rn,da as it,e as D,ea as te,f as $e,fa as ye,g as H,ga as ge,h as ze,ha as ne,i as Z,j as Le,k as W,m as pe,ma as ot,o as Ve,p as C,sa as st,t as he,u as N,v as Be,w as qe,wa as re,x as Ke,y as Ge}from"./chunk-JWQOHT4L.js";var mt=[{path:"login",loadChildren:()=>import("./chunk-BUVK2VL5.js").then(e=>e.authRoutes)},{path:"dashboard",loadChildren:()=>import("./chunk-R2DW7VYS.js").then(e=>e.UserProfileRoutes)},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"**",redirectTo:"dashboard",pathMatch:"full"}];function $(e,t){let o=!t?.manualCleanup;o&&!t?.injector&&nt($);let n=o?t?.injector?.get(ge)??I(ge):null,r;t?.requireSync?r=ye({kind:0}):r=ye({kind:1,value:t?.initialValue});let i=e.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{if(t?.rejectErrors)throw s;r.set({kind:2,error:s})}});return n?.onDestroy(i.unsubscribe.bind(i)),te(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new Ye(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var In={};var L="@ngrx/store/init",w=(()=>{let t=class t extends H{constructor(){super({type:L})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),xn=[w],jt=new m("@ngrx/store Internal Root Guard"),yt=new m("@ngrx/store Internal Initial State"),V=new m("@ngrx/store Initial State"),Ft=new m("@ngrx/store Reducer Factory"),gt=new m("@ngrx/store Internal Reducer Factory Provider"),Dt=new m("@ngrx/store Initial Reducers"),Se=new m("@ngrx/store Internal Initial Reducers"),zr=new m("@ngrx/store Store Features"),St=new m("@ngrx/store Internal Store Reducers"),Lr=new m("@ngrx/store Internal Feature Reducers"),Vr=new m("@ngrx/store Internal Feature Configs"),Br=new m("@ngrx/store Internal Store Features"),qr=new m("@ngrx/store Internal Feature Reducers Token"),Kr=new m("@ngrx/store Feature Reducers"),Rt=new m("@ngrx/store User Provided Meta Reducers"),ie=new m("@ngrx/store Meta Reducers"),Et=new m("@ngrx/store Internal Resolved Meta Reducers"),vt=new m("@ngrx/store User Runtime Checks Config"),It=new m("@ngrx/store Internal User Runtime Checks Config"),z=new m("@ngrx/store Internal Runtime Checks"),kt=new m("@ngrx/store Check if Action types are unique"),xt=new m("@ngrx/store Root Store Provider"),Gr=new m("@ngrx/store Feature State Provider");function bn(e,t={}){let o=Object.keys(e),n={};for(let i=0;i<o.length;i++){let s=o[i];typeof e[s]=="function"&&(n[s]=e[s])}let r=Object.keys(n);return function(s,u){s=s===void 0?t:s;let l=!1,d={};for(let c=0;c<r.length;c++){let a=r[c],h=n[a],E=s[a],p=h(E,u);d[a]=p,l=l||p!==E}return l?d:s}}function On(e,t){return Object.keys(e).filter(o=>o!==t).reduce((o,n)=>Object.assign(o,{[n]:e[n]}),{})}function Mt(...e){return function(t){if(e.length===0)return t;let o=e[e.length-1];return e.slice(0,-1).reduceRight((r,i)=>i(r),o(t))}}function Nt(e,t){return Array.isArray(t)&&t.length>0&&(e=Mt.apply(null,[...t,e])),(o,n)=>{let r=e(o);return(i,s)=>(i=i===void 0?n:i,r(i,s))}}function Tn(e){let t=Array.isArray(e)&&e.length>0?Mt(...e):o=>o;return(o,n)=>(o=t(o),(r,i)=>(r=r===void 0?n:r,o(r,i)))}var k=class extends D{},_=class extends w{},oe="@ngrx/store/update-reducers",Re=(()=>{let t=class t extends H{get currentReducers(){return this.reducers}constructor(n,r,i,s){super(s(i,r)),this.dispatcher=n,this.initialState=r,this.reducers=i,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let r=n.reduce((i,{reducers:s,reducerFactory:u,metaReducers:l,initialState:d,key:c})=>{let a=typeof s=="function"?Tn(l)(s,d):Nt(u,l)(s,d);return i[c]=a,i},{});this.addReducers(r)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(r=>r.key))}addReducer(n,r){this.addReducers({[n]:r})}addReducers(n){this.reducers=x(x({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(r=>{this.reducers=On(this.reducers,r)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:oe,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(r){return new(r||t)(S(_),S(V),S(Dt),S(Ft))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),An=[Re,{provide:k,useExisting:Re},{provide:_,useExisting:w}],B=(()=>{let t=class t extends $e{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=ee(t)))(i||t)}})(),t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),wn=[B],U=class extends D{},bt=(()=>{let t=class t extends H{constructor(n,r,i,s){super(s);let l=n.pipe(W(Z)).pipe(J(r)),d={state:s},c=l.pipe(X(Cn,d));this.stateSubscription=c.subscribe(({state:a,action:h})=>{this.next(a),i.next(h)}),this.state=$(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=L,t.\u0275fac=function(r){return new(r||t)(S(w),S(k),S(B),S(V))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})();function Cn(e={state:void 0},[t,o]){let{state:n}=e;return{state:o(n,t),action:t}}var jn=[bt,{provide:U,useExisting:bt}],q=(()=>{let t=class t extends D{constructor(n,r,i){super(),this.actionsObserver=r,this.reducerManager=i,this.source=n,this.state=n.state}select(n,...r){return Dn.call(null,n,...r)(this)}selectSignal(n,r){return te(()=>n(this.state()),r)}lift(n){let r=new t(this,this.actionsObserver,this.reducerManager);return r.operator=n,r}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,r){this.reducerManager.addReducer(n,r)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(r){return new(r||t)(S(U),S(w),S(Re))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),Fn=[q];function Dn(e,t,...o){return function(r){let i;if(typeof e=="string"){let s=[t,...o].filter(Boolean);i=r.pipe(Ze(e,...s))}else if(typeof e=="function")i=r.pipe(C(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(He())}}var xe="https://ngrx.io/guide/store/configuration/runtime-checks";function Ot(e){return e===void 0}function Tt(e){return e===null}function _t(e){return Array.isArray(e)}function kn(e){return typeof e=="string"}function Mn(e){return typeof e=="boolean"}function Nn(e){return typeof e=="number"}function Ut(e){return typeof e=="object"&&e!==null}function _n(e){return Ut(e)&&!_t(e)}function Un(e){if(!_n(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Ee(e){return typeof e=="function"}function Pn(e){return Ee(e)&&e.hasOwnProperty("\u0275cmp")}function $n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function At(e,t){return e===t}function zn(e,t,o){for(let n=0;n<e.length;n++)if(!o(e[n],t[n]))return!0;return!1}function Pt(e,t=At,o=At){let n=null,r=null,i;function s(){n=null,r=null}function u(c=void 0){i={result:c}}function l(){i=void 0}function d(){if(i!==void 0)return i.result;if(!n)return r=e.apply(null,arguments),n=arguments,r;if(!zn(arguments,n,t))return r;let c=e.apply(null,arguments);return n=arguments,o(r,c)?r:(r=c,c)}return{memoized:d,reset:s,setResult:u,clearResult:l}}function $t(...e){return Vn(Pt)(...e)}function Ln(e,t,o,n){if(o===void 0){let i=t.map(s=>s(e));return n.memoized.apply(null,i)}let r=t.map(i=>i(e,o));return n.memoized.apply(null,[...r,o])}function Vn(e,t={stateFn:Ln}){return function(...o){let n=o;if(Array.isArray(n[0])){let[c,...a]=n;n=[...c,...a]}else n.length===1&&Bn(n[0])&&(n=qn(n[0]));let r=n.slice(0,n.length-1),i=n[n.length-1],s=r.filter(c=>c.release&&typeof c.release=="function"),u=e(function(...c){return i.apply(null,c)}),l=Pt(function(c,a){return t.stateFn.apply(null,[c,r,a,u])});function d(){l.reset(),u.reset(),s.forEach(c=>c.release())}return Object.assign(l.memoized,{release:d,projector:u.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function Bn(e){return!!e&&typeof e=="object"&&Object.values(e).every(t=>typeof t=="function")}function qn(e){let t=Object.values(e),o=Object.keys(e),n=(...r)=>o.reduce((i,s,u)=>F(x({},i),{[s]:r[u]}),{});return[...t,n]}function Kn(e){return e instanceof m?I(e):e}function Gn(e){return typeof e=="function"?e():e}function Hn(e,t){return e.concat(t)}function Zn(){if(I(q,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Wn(e,t){return function(o,n){let r=t.action(n)?ve(n):n,i=e(o,r);return t.state()?ve(i):i}}function ve(e){Object.freeze(e);let t=Ee(e);return Object.getOwnPropertyNames(e).forEach(o=>{if(!o.startsWith("\u0275")&&$n(e,o)&&(!t||o!=="caller"&&o!=="callee"&&o!=="arguments")){let n=e[o];(Ut(n)||Ee(n))&&!Object.isFrozen(n)&&ve(n)}}),e}function Xn(e,t){return function(o,n){if(t.action(n)){let i=Ie(n);wt(i,"action")}let r=e(o,n);if(t.state()){let i=Ie(r);wt(i,"state")}return r}}function Ie(e,t=[]){return(Ot(e)||Tt(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,r)=>{if(n)return n;let i=e[r];return Pn(i)?n:Ot(i)||Tt(i)||Nn(i)||Mn(i)||kn(i)||_t(i)?!1:Un(i)?Ie(i,[...t,r]):{path:[...t,r],value:i}},!1)}function wt(e,t){if(e===!1)return;let o=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${o}". ${xe}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=o,n}function Yn(e,t){return function(o,n){if(t.action(n)&&!ne.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${xe}#strictactionwithinngzone`);return e(o,n)}}function Jn(e){return re()?x({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Qn({strictActionSerializability:e,strictStateSerializability:t}){return o=>e||t?Xn(o,{action:n=>e&&!be(n),state:()=>t}):o}function er({strictActionImmutability:e,strictStateImmutability:t}){return o=>e||t?Wn(o,{action:n=>e&&!be(n),state:()=>t}):o}function be(e){return e.type.startsWith("@ngrx")}function tr({strictActionWithinNgZone:e}){return t=>e?Yn(t,{action:o=>e&&!be(o)}):t}function nr(e){return[{provide:It,useValue:e},{provide:vt,useFactory:ir,deps:[It]},{provide:z,deps:[vt],useFactory:Jn},{provide:ie,multi:!0,deps:[z],useFactory:er},{provide:ie,multi:!0,deps:[z],useFactory:Qn},{provide:ie,multi:!0,deps:[z],useFactory:tr}]}function rr(){return[{provide:kt,multi:!0,deps:[z],useFactory:or}]}function ir(e){return e}function or(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(In).filter(([,o])=>o>1).map(([o])=>o);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(o=>`"${o}"`).join(", ")}. ${xe}#strictactiontypeuniqueness`)}function sr(e={},t={}){return[{provide:jt,useFactory:Zn},{provide:yt,useValue:t.initialState},{provide:V,useFactory:Gn,deps:[yt]},{provide:Se,useValue:e},{provide:St,useExisting:e instanceof m?e:Se},{provide:Dt,deps:[Se,[new Qe(St)]],useFactory:Kn},{provide:Rt,useValue:t.metaReducers?t.metaReducers:[]},{provide:Et,deps:[ie,Rt],useFactory:Hn},{provide:gt,useValue:t.reducerFactory?t.reducerFactory:bn},{provide:Ft,deps:[gt,Et],useFactory:Nt},xn,An,wn,jn,Fn,nr(t.runtimeChecks),rr()]}function cr(){I(w),I(k),I(B),I(q),I(jt,{optional:!0}),I(kt,{optional:!0})}var ar=[{provide:xt,useFactory:cr},{provide:et,multi:!0,useFactory(){return()=>I(xt)}}];function zt(e,t){return Q([...sr(e,t),ar])}function Lt(e,...t){let o=new Map;for(let n of t)for(let r of n.types){let i=o.get(r);if(i){let s=(u,l)=>n.reducer(i(u,l),l);o.set(r,s)}else o.set(r,n.reducer)}return function(n=e,r){let i=o.get(r.type);return i?i(n,r):n}}var ur={loading:!1},Bt=Lt(ur);var qt={root:Bt},Kt=re()?[]:[];var G="PERFORM_ACTION",dr="REFRESH",Yt="RESET",Jt="ROLLBACK",Qt="COMMIT",en="SWEEP",tn="TOGGLE_ACTION",lr="SET_ACTIONS_ACTIVE",nn="JUMP_TO_STATE",rn="JUMP_TO_ACTION",Ue="IMPORT_STATE",on="LOCK_CHANGES",sn="PAUSE_RECORDING",P=class{constructor(t,o){if(this.action=t,this.timestamp=o,this.type=G,typeof t.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},Oe=class{constructor(){this.type=dr}},Te=class{constructor(t){this.timestamp=t,this.type=Yt}},Ae=class{constructor(t){this.timestamp=t,this.type=Jt}},we=class{constructor(t){this.timestamp=t,this.type=Qt}},Ce=class{constructor(){this.type=en}},je=class{constructor(t){this.id=t,this.type=tn}};var Fe=class{constructor(t){this.index=t,this.type=nn}},De=class{constructor(t){this.actionId=t,this.type=rn}},ke=class{constructor(t){this.nextLiftedState=t,this.type=Ue}},Me=class{constructor(t){this.status=t,this.type=on}},Ne=class{constructor(t){this.status=t,this.type=sn}};var ue=new m("@ngrx/store-devtools Options"),Gt=new m("@ngrx/store-devtools Initial Config");function cn(){return null}var fr="NgRx Store DevTools";function pr(e){let t={maxAge:!1,monitor:cn,actionSanitizer:void 0,stateSanitizer:void 0,name:fr,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},o=typeof e=="function"?e():e,n=o.logOnly?{pause:!0,export:!0,test:!0}:!1,r=o.features||n||t.features;r.import===!0&&(r.import="custom");let i=Object.assign({},t,{features:r},o);if(i.maxAge&&i.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${i.maxAge}`);return i}function Ht(e,t){return e.filter(o=>t.indexOf(o)<0)}function an(e){let{computedStates:t,currentStateIndex:o}=e;if(o>=t.length){let{state:r}=t[t.length-1];return r}let{state:n}=t[o];return n}function K(e){return new P(e,+Date.now())}function hr(e,t){return Object.keys(t).reduce((o,n)=>{let r=Number(n);return o[r]=un(e,t[r],r),o},{})}function un(e,t,o){return F(x({},t),{action:e(t.action,o)})}function mr(e,t){return t.map((o,n)=>({state:dn(e,o.state,n),error:o.error}))}function dn(e,t,o){return e(t,o)}function ln(e){return e.predicate||e.actionsSafelist||e.actionsBlocklist}function yr(e,t,o,n){let r=[],i={},s=[];return e.stagedActionIds.forEach((u,l)=>{let d=e.actionsById[u];d&&(l&&Pe(e.computedStates[l],d,t,o,n)||(i[u]=d,r.push(u),s.push(e.computedStates[l])))}),F(x({},e),{stagedActionIds:r,actionsById:i,computedStates:s})}function Pe(e,t,o,n,r){let i=o&&!o(e,t.action),s=n&&!t.action.type.match(n.map(l=>Zt(l)).join("|")),u=r&&t.action.type.match(r.map(l=>Zt(l)).join("|"));return i||s||u}function Zt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function fn(e){return{ngZone:e?I(ne):null,connectInZone:e}}var de=(()=>{let t=class t extends w{};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=ee(t)))(i||t)}})(),t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),se={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},_e=new m("@ngrx/store-devtools Redux Devtools Extension"),pn=(()=>{let t=class t{constructor(n,r,i){this.config=r,this.dispatcher=i,this.zoneConfig=fn(this.config.connectInZone),this.devtoolsExtension=n,this.createActionStreams()}notify(n,r){if(this.devtoolsExtension)if(n.type===G){if(r.isLocked||r.isPaused)return;let i=an(r);if(ln(this.config)&&Pe(i,n,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let s=this.config.stateSanitizer?dn(this.config.stateSanitizer,i,r.currentStateIndex):i,u=this.config.actionSanitizer?un(this.config.actionSanitizer,n,r.nextActionId):n;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,s))}else{let i=F(x({},r),{stagedActionIds:r.stagedActionIds,actionsById:this.config.actionSanitizer?hr(this.config.actionSanitizer,r.actionsById):r.actionsById,computedStates:this.config.stateSanitizer?mr(this.config.stateSanitizer,r.computedStates):r.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,i,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new D(n=>{let r=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=r,r.init(),r.subscribe(i=>n.next(i)),r.unsubscribe}):Le}createActionStreams(){let n=this.createChangesObservable().pipe(We()),r=n.pipe(N(c=>c.type===se.START)),i=n.pipe(N(c=>c.type===se.STOP)),s=n.pipe(N(c=>c.type===se.DISPATCH),C(c=>this.unwrapAction(c.payload)),qe(c=>c.type===Ue?this.dispatcher.pipe(N(a=>a.type===oe),Ve(1e3),Ke(1e3),C(()=>c),Be(()=>pe(c)),Ge(1)):pe(c))),l=n.pipe(N(c=>c.type===se.ACTION),C(c=>this.unwrapAction(c.payload))).pipe(Y(i)),d=s.pipe(Y(i));this.start$=r.pipe(Y(i)),this.actions$=this.start$.pipe(me(()=>l)),this.liftedActions$=this.start$.pipe(me(()=>d))}unwrapAction(n){return typeof n=="string"?(0,eval)(`(${n})`):n}getExtensionConfig(n){let r={name:n.name,features:n.features,serialize:n.serialize,autoPause:n.autoPause??!1,trace:n.trace??!1,traceLimit:n.traceLimit??75};return n.maxAge!==!1&&(r.maxAge=n.maxAge),r}sendToReduxDevtools(n){try{n()}catch(r){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",r)}}};t.\u0275fac=function(r){return new(r||t)(S(_e),S(ue),S(de))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),ae={type:L},gr="@ngrx/store-devtools/recompute",Sr={type:gr};function hn(e,t,o,n,r){if(n)return{state:o,error:"Interrupted by an error up the chain"};let i=o,s;try{i=e(o,t)}catch(u){s=u.toString(),r.handleError(u)}return{state:i,error:s}}function ce(e,t,o,n,r,i,s,u,l){if(t>=e.length&&e.length===i.length)return e;let d=e.slice(0,t),c=i.length-(l?1:0);for(let a=t;a<c;a++){let h=i[a],E=r[h].action,p=d[a-1],f=p?p.state:n,O=p?p.error:void 0,T=s.indexOf(h)>-1?p:hn(o,E,f,O,u);d.push(T)}return l&&d.push(e[e.length-1]),d}function Rr(e,t){return{monitorState:t(void 0,{}),nextActionId:1,actionsById:{0:K(ae)},stagedActionIds:[0],skippedActionIds:[],committedState:e,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Er(e,t,o,n,r={}){return i=>(s,u)=>{let{monitorState:l,actionsById:d,nextActionId:c,stagedActionIds:a,skippedActionIds:h,committedState:E,currentStateIndex:p,computedStates:f,isLocked:O,isPaused:v}=s||t;s||(d=Object.create(d));function T(R){let g=R,j=a.slice(1,g+1);for(let b=0;b<j.length;b++)if(f[b+1].error){g=b,j=a.slice(1,g+1);break}else delete d[j[b]];h=h.filter(b=>j.indexOf(b)===-1),a=[0,...a.slice(g+1)],E=f[g].state,f=f.slice(g),p=p>g?p-g:0}function M(){d={0:K(ae)},c=1,a=[0],h=[],E=f[p].state,p=0,f=[]}let y=0;switch(u.type){case on:{O=u.status,y=1/0;break}case sn:{v=u.status,v?(a=[...a,c],d[c]=new P({type:"@ngrx/devtools/pause"},+Date.now()),c++,y=a.length-1,f=f.concat(f[f.length-1]),p===a.length-2&&p++,y=1/0):M();break}case Yt:{d={0:K(ae)},c=1,a=[0],h=[],E=e,p=0,f=[];break}case Qt:{M();break}case Jt:{d={0:K(ae)},c=1,a=[0],h=[],p=0,f=[];break}case tn:{let{id:R}=u;h.indexOf(R)===-1?h=[R,...h]:h=h.filter(j=>j!==R),y=a.indexOf(R);break}case lr:{let{start:R,end:g,active:j}=u,b=[];for(let fe=R;fe<g;fe++)b.push(fe);j?h=Ht(h,b):h=[...h,...b],y=a.indexOf(R);break}case nn:{p=u.index,y=1/0;break}case rn:{let R=a.indexOf(u.actionId);R!==-1&&(p=R),y=1/0;break}case en:{a=Ht(a,h),h=[],p=Math.min(p,a.length-1);break}case G:{if(O)return s||t;if(v||s&&Pe(s.computedStates[p],u,r.predicate,r.actionsSafelist,r.actionsBlocklist)){let g=f[f.length-1];f=[...f.slice(0,-1),hn(i,u.action,g.state,g.error,o)],y=1/0;break}r.maxAge&&a.length===r.maxAge&&T(1),p===a.length-1&&p++;let R=c++;d[R]=u,a=[...a,R],y=a.length-1;break}case Ue:{({monitorState:l,actionsById:d,nextActionId:c,stagedActionIds:a,skippedActionIds:h,committedState:E,currentStateIndex:p,computedStates:f,isLocked:O,isPaused:v}=u.nextLiftedState);break}case L:{y=0,r.maxAge&&a.length>r.maxAge&&(f=ce(f,y,i,E,d,a,h,o,v),T(a.length-r.maxAge),y=1/0);break}case oe:{if(f.filter(g=>g.error).length>0)y=0,r.maxAge&&a.length>r.maxAge&&(f=ce(f,y,i,E,d,a,h,o,v),T(a.length-r.maxAge),y=1/0);else{if(!v&&!O){p===a.length-1&&p++;let g=c++;d[g]=new P(u,+Date.now()),a=[...a,g],y=a.length-1,f=ce(f,y,i,E,d,a,h,o,v)}f=f.map(g=>F(x({},g),{state:i(g.state,Sr)})),p=a.length-1,r.maxAge&&a.length>r.maxAge&&T(a.length-r.maxAge),y=1/0}break}default:{y=1/0;break}}return f=ce(f,y,i,E,d,a,h,o,v),l=n(l,u),{monitorState:l,actionsById:d,nextActionId:c,stagedActionIds:a,skippedActionIds:h,committedState:E,currentStateIndex:p,computedStates:f,isLocked:O,isPaused:v}}}var Wt=(()=>{let t=class t{constructor(n,r,i,s,u,l,d,c){let a=Rr(d,c.monitor),h=Er(d,a,l,c.monitor,c),E=he(he(r.asObservable().pipe(Xe(1)),s.actions$).pipe(C(K)),n,s.liftedActions$).pipe(W(Z)),p=i.pipe(C(h)),f=fn(c.connectInZone),O=new ze(1);this.liftedStateSubscription=E.pipe(J(p),Xt(f),X(({state:M},[y,R])=>{let g=R(M,y);return y.type!==G&&ln(c)&&(g=yr(g,c.predicate,c.actionsSafelist,c.actionsBlocklist)),s.notify(y,g),{state:g,action:y}},{state:a,action:null})).subscribe(({state:M,action:y})=>{if(O.next(M),y.type===G){let R=y.action;u.next(R)}}),this.extensionStartSubscription=s.start$.pipe(Xt(f)).subscribe(()=>{this.refresh()});let v=O.asObservable(),T=v.pipe(C(an));Object.defineProperty(T,"state",{value:$(T,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=n,this.liftedState=v,this.state=T}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(n){this.dispatcher.next(n)}next(n){this.dispatcher.next(n)}error(n){}complete(){}performAction(n){this.dispatch(new P(n,+Date.now()))}refresh(){this.dispatch(new Oe)}reset(){this.dispatch(new Te(+Date.now()))}rollback(){this.dispatch(new Ae(+Date.now()))}commit(){this.dispatch(new we(+Date.now()))}sweep(){this.dispatch(new Ce)}toggleAction(n){this.dispatch(new je(n))}jumpToAction(n){this.dispatch(new De(n))}jumpToState(n){this.dispatch(new Fe(n))}importState(n){this.dispatch(new ke(n))}lockChanges(n){this.dispatch(new Me(n))}pauseRecording(n){this.dispatch(new Ne(n))}};t.\u0275fac=function(r){return new(r||t)(S(de),S(w),S(k),S(pn),S(B),S(rt),S(V),S(ue))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})();function Xt({ngZone:e,connectInZone:t}){return o=>t?new D(n=>o.subscribe({next:r=>e.run(()=>n.next(r)),error:r=>e.run(()=>n.error(r)),complete:()=>e.run(()=>n.complete())})):o}var vr=new m("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Ir(e,t){return!!e||t.monitor!==cn}function xr(){let e="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[e]<"u"?window[e]:null}function mn(e={}){return Q([pn,de,Wt,{provide:Gt,useValue:e},{provide:vr,deps:[_e,ue],useFactory:Ir},{provide:_e,useFactory:xr},{provide:ue,deps:[Gt],useFactory:pr},{provide:U,deps:[Wt],useFactory:br},{provide:_,useExisting:de}])}function br(e){return e.state}var yn={providers:[dt(mt,lt()),zt(qt,{metaReducers:Kt}),{provide:ct,useClass:ht,multi:!0},mn({maxAge:25,autoPause:!0,trace:!0,traceLimit:25}),tt(pt.forRoot(x({},ft.auth0)))]};var le={};Rn(le,{selectFeature:()=>gn,selectLoading:()=>Or});var gn=e=>e.root,Or=$t(gn,e=>e.loading);var Sn=(()=>{let t=class t{constructor(n){this.store=n,this.count$=this.store.select(le.selectFeature);let r=this.count$.subscribe(i=>console.log("state:",i))}};t.\u0275fac=function(r){return new(r||t)(it(q))},t.\u0275cmp=Je({type:t,selectors:[["app-root"]],standalone:!0,features:[st],decls:1,vars:0,template:function(r,i){r&1&&ot(0,"router-outlet")},dependencies:[ut]});let e=t;return e})();at(Sn,yn).catch(e=>console.error(e));
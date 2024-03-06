import{c as lt,d as ft,e as pt}from"./chunk-7L4PFRRU.js";import{A as Ze,Ba as ct,C as He,Ca as at,D as X,Da as ut,E as We,G as Xe,Ga as dt,H as me,I as Y,K as J,L as Ye,M as Je,Q as A,S as m,T as E,U as I,V as Qe,W as et,X as Q,Y as tt,Z as nt,_ as ee,a as T,aa as rt,b as F,c as En,da as it,e as D,ea as te,f as ze,fa as ye,g as Z,ga as ge,h as $e,ha as ne,i as H,j as Le,k as W,m as pe,ma as ot,o as Ve,p as C,sa as st,t as he,u as N,v as Be,w as qe,wa as re,x as Ke,y as Ge}from"./chunk-WN4KPU5D.js";var ht=[{path:"login",title:"Eat planner-login",loadChildren:()=>import("./chunk-QMNFH3NG.js").then(e=>e.authRoutes)},{path:"dashboard",title:"Eat planner-dashboard",component:pt},{path:"dashboard",title:"Eat planner-dashboard",loadChildren:()=>import("./chunk-HM2XJPVB.js").then(e=>e.UserProfileRoutes)},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"**",redirectTo:"dashboard",pathMatch:"full"}];function z(e,t){let o=!t?.manualCleanup;o&&!t?.injector&&nt(z);let n=o?t?.injector?.get(ge)??I(ge):null,r;t?.requireSync?r=ye({kind:0}):r=ye({kind:1,value:t?.initialValue});let i=e.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{if(t?.rejectErrors)throw s;r.set({kind:2,error:s})}});return n?.onDestroy(i.unsubscribe.bind(i)),te(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new Ye(601,"`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.")}})}var vn={};var L="@ngrx/store/init",w=(()=>{let t=class t extends Z{constructor(){super({type:L})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),In=[w],Ct=new m("@ngrx/store Internal Root Guard"),mt=new m("@ngrx/store Internal Initial State"),V=new m("@ngrx/store Initial State"),jt=new m("@ngrx/store Reducer Factory"),yt=new m("@ngrx/store Internal Reducer Factory Provider"),Ft=new m("@ngrx/store Initial Reducers"),Ee=new m("@ngrx/store Internal Initial Reducers"),$r=new m("@ngrx/store Store Features"),gt=new m("@ngrx/store Internal Store Reducers"),Lr=new m("@ngrx/store Internal Feature Reducers"),Vr=new m("@ngrx/store Internal Feature Configs"),Br=new m("@ngrx/store Internal Store Features"),qr=new m("@ngrx/store Internal Feature Reducers Token"),Kr=new m("@ngrx/store Feature Reducers"),Et=new m("@ngrx/store User Provided Meta Reducers"),ie=new m("@ngrx/store Meta Reducers"),St=new m("@ngrx/store Internal Resolved Meta Reducers"),Rt=new m("@ngrx/store User Runtime Checks Config"),vt=new m("@ngrx/store Internal User Runtime Checks Config"),$=new m("@ngrx/store Internal Runtime Checks"),Dt=new m("@ngrx/store Check if Action types are unique"),It=new m("@ngrx/store Root Store Provider"),Gr=new m("@ngrx/store Feature State Provider");function xn(e,t={}){let o=Object.keys(e),n={};for(let i=0;i<o.length;i++){let s=o[i];typeof e[s]=="function"&&(n[s]=e[s])}let r=Object.keys(n);return function(s,u){s=s===void 0?t:s;let l=!1,d={};for(let c=0;c<r.length;c++){let a=r[c],h=n[a],R=s[a],p=h(R,u);d[a]=p,l=l||p!==R}return l?d:s}}function bn(e,t){return Object.keys(e).filter(o=>o!==t).reduce((o,n)=>Object.assign(o,{[n]:e[n]}),{})}function kt(...e){return function(t){if(e.length===0)return t;let o=e[e.length-1];return e.slice(0,-1).reduceRight((r,i)=>i(r),o(t))}}function Mt(e,t){return Array.isArray(t)&&t.length>0&&(e=kt.apply(null,[...t,e])),(o,n)=>{let r=e(o);return(i,s)=>(i=i===void 0?n:i,r(i,s))}}function On(e){let t=Array.isArray(e)&&e.length>0?kt(...e):o=>o;return(o,n)=>(o=t(o),(r,i)=>(r=r===void 0?n:r,o(r,i)))}var k=class extends D{},_=class extends w{},oe="@ngrx/store/update-reducers",Se=(()=>{let t=class t extends Z{get currentReducers(){return this.reducers}constructor(n,r,i,s){super(s(i,r)),this.dispatcher=n,this.initialState=r,this.reducers=i,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let r=n.reduce((i,{reducers:s,reducerFactory:u,metaReducers:l,initialState:d,key:c})=>{let a=typeof s=="function"?On(l)(s,d):Mt(u,l)(s,d);return i[c]=a,i},{});this.addReducers(r)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(r=>r.key))}addReducer(n,r){this.addReducers({[n]:r})}addReducers(n){this.reducers=T(T({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(r=>{this.reducers=bn(this.reducers,r)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:oe,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(r){return new(r||t)(E(_),E(V),E(Ft),E(jt))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),Tn=[Se,{provide:k,useExisting:Se},{provide:_,useExisting:w}],B=(()=>{let t=class t extends ze{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=ee(t)))(i||t)}})(),t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),An=[B],U=class extends D{},xt=(()=>{let t=class t extends Z{constructor(n,r,i,s){super(s);let l=n.pipe(W(H)).pipe(J(r)),d={state:s},c=l.pipe(X(wn,d));this.stateSubscription=c.subscribe(({state:a,action:h})=>{this.next(a),i.next(h)}),this.state=z(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=L,t.\u0275fac=function(r){return new(r||t)(E(w),E(k),E(B),E(V))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})();function wn(e={state:void 0},[t,o]){let{state:n}=e;return{state:o(n,t),action:t}}var Cn=[xt,{provide:U,useExisting:xt}],q=(()=>{let t=class t extends D{constructor(n,r,i){super(),this.actionsObserver=r,this.reducerManager=i,this.source=n,this.state=n.state}select(n,...r){return Fn.call(null,n,...r)(this)}selectSignal(n,r){return te(()=>n(this.state()),r)}lift(n){let r=new t(this,this.actionsObserver,this.reducerManager);return r.operator=n,r}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,r){this.reducerManager.addReducer(n,r)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(r){return new(r||t)(E(U),E(w),E(Se))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),jn=[q];function Fn(e,t,...o){return function(r){let i;if(typeof e=="string"){let s=[t,...o].filter(Boolean);i=r.pipe(He(e,...s))}else if(typeof e=="function")i=r.pipe(C(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(Ze())}}var xe="https://ngrx.io/guide/store/configuration/runtime-checks";function bt(e){return e===void 0}function Ot(e){return e===null}function Nt(e){return Array.isArray(e)}function Dn(e){return typeof e=="string"}function kn(e){return typeof e=="boolean"}function Mn(e){return typeof e=="number"}function _t(e){return typeof e=="object"&&e!==null}function Nn(e){return _t(e)&&!Nt(e)}function _n(e){if(!Nn(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function Re(e){return typeof e=="function"}function Un(e){return Re(e)&&e.hasOwnProperty("\u0275cmp")}function Pn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Tt(e,t){return e===t}function zn(e,t,o){for(let n=0;n<e.length;n++)if(!o(e[n],t[n]))return!0;return!1}function Ut(e,t=Tt,o=Tt){let n=null,r=null,i;function s(){n=null,r=null}function u(c=void 0){i={result:c}}function l(){i=void 0}function d(){if(i!==void 0)return i.result;if(!n)return r=e.apply(null,arguments),n=arguments,r;if(!zn(arguments,n,t))return r;let c=e.apply(null,arguments);return n=arguments,o(r,c)?r:(r=c,c)}return{memoized:d,reset:s,setResult:u,clearResult:l}}function Pt(...e){return Ln(Ut)(...e)}function $n(e,t,o,n){if(o===void 0){let i=t.map(s=>s(e));return n.memoized.apply(null,i)}let r=t.map(i=>i(e,o));return n.memoized.apply(null,[...r,o])}function Ln(e,t={stateFn:$n}){return function(...o){let n=o;if(Array.isArray(n[0])){let[c,...a]=n;n=[...c,...a]}else n.length===1&&Vn(n[0])&&(n=Bn(n[0]));let r=n.slice(0,n.length-1),i=n[n.length-1],s=r.filter(c=>c.release&&typeof c.release=="function"),u=e(function(...c){return i.apply(null,c)}),l=Ut(function(c,a){return t.stateFn.apply(null,[c,r,a,u])});function d(){l.reset(),u.reset(),s.forEach(c=>c.release())}return Object.assign(l.memoized,{release:d,projector:u.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function Vn(e){return!!e&&typeof e=="object"&&Object.values(e).every(t=>typeof t=="function")}function Bn(e){let t=Object.values(e),o=Object.keys(e),n=(...r)=>o.reduce((i,s,u)=>F(T({},i),{[s]:r[u]}),{});return[...t,n]}function qn(e){return e instanceof m?I(e):e}function Kn(e){return typeof e=="function"?e():e}function Gn(e,t){return e.concat(t)}function Zn(){if(I(q,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Hn(e,t){return function(o,n){let r=t.action(n)?ve(n):n,i=e(o,r);return t.state()?ve(i):i}}function ve(e){Object.freeze(e);let t=Re(e);return Object.getOwnPropertyNames(e).forEach(o=>{if(!o.startsWith("\u0275")&&Pn(e,o)&&(!t||o!=="caller"&&o!=="callee"&&o!=="arguments")){let n=e[o];(_t(n)||Re(n))&&!Object.isFrozen(n)&&ve(n)}}),e}function Wn(e,t){return function(o,n){if(t.action(n)){let i=Ie(n);At(i,"action")}let r=e(o,n);if(t.state()){let i=Ie(r);At(i,"state")}return r}}function Ie(e,t=[]){return(bt(e)||Ot(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,r)=>{if(n)return n;let i=e[r];return Un(i)?n:bt(i)||Ot(i)||Mn(i)||kn(i)||Dn(i)||Nt(i)?!1:_n(i)?Ie(i,[...t,r]):{path:[...t,r],value:i}},!1)}function At(e,t){if(e===!1)return;let o=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${o}". ${xe}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=o,n}function Xn(e,t){return function(o,n){if(t.action(n)&&!ne.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${xe}#strictactionwithinngzone`);return e(o,n)}}function Yn(e){return re()?T({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Jn({strictActionSerializability:e,strictStateSerializability:t}){return o=>e||t?Wn(o,{action:n=>e&&!be(n),state:()=>t}):o}function Qn({strictActionImmutability:e,strictStateImmutability:t}){return o=>e||t?Hn(o,{action:n=>e&&!be(n),state:()=>t}):o}function be(e){return e.type.startsWith("@ngrx")}function er({strictActionWithinNgZone:e}){return t=>e?Xn(t,{action:o=>e&&!be(o)}):t}function tr(e){return[{provide:vt,useValue:e},{provide:Rt,useFactory:rr,deps:[vt]},{provide:$,deps:[Rt],useFactory:Yn},{provide:ie,multi:!0,deps:[$],useFactory:Qn},{provide:ie,multi:!0,deps:[$],useFactory:Jn},{provide:ie,multi:!0,deps:[$],useFactory:er}]}function nr(){return[{provide:Dt,multi:!0,deps:[$],useFactory:ir}]}function rr(e){return e}function ir(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(vn).filter(([,o])=>o>1).map(([o])=>o);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(o=>`"${o}"`).join(", ")}. ${xe}#strictactiontypeuniqueness`)}function or(e={},t={}){return[{provide:Ct,useFactory:Zn},{provide:mt,useValue:t.initialState},{provide:V,useFactory:Kn,deps:[mt]},{provide:Ee,useValue:e},{provide:gt,useExisting:e instanceof m?e:Ee},{provide:Ft,deps:[Ee,[new Qe(gt)]],useFactory:qn},{provide:Et,useValue:t.metaReducers?t.metaReducers:[]},{provide:St,deps:[ie,Et],useFactory:Gn},{provide:yt,useValue:t.reducerFactory?t.reducerFactory:xn},{provide:jt,deps:[yt,St],useFactory:Mt},In,Tn,An,Cn,jn,tr(t.runtimeChecks),nr()]}function sr(){I(w),I(k),I(B),I(q),I(Ct,{optional:!0}),I(Dt,{optional:!0})}var cr=[{provide:It,useFactory:sr},{provide:et,multi:!0,useFactory(){return()=>I(It)}}];function zt(e,t){return Q([...or(e,t),cr])}function $t(e,...t){let o=new Map;for(let n of t)for(let r of n.types){let i=o.get(r);if(i){let s=(u,l)=>n.reducer(i(u,l),l);o.set(r,s)}else o.set(r,n.reducer)}return function(n=e,r){let i=o.get(r.type);return i?i(n,r):n}}var ar={loading:!1},Vt=$t(ar);var Bt={root:Vt},qt=re()?[]:[];var G="PERFORM_ACTION",ur="REFRESH",Xt="RESET",Yt="ROLLBACK",Jt="COMMIT",Qt="SWEEP",en="TOGGLE_ACTION",dr="SET_ACTIONS_ACTIVE",tn="JUMP_TO_STATE",nn="JUMP_TO_ACTION",Ue="IMPORT_STATE",rn="LOCK_CHANGES",on="PAUSE_RECORDING",P=class{constructor(t,o){if(this.action=t,this.timestamp=o,this.type=G,typeof t.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},Oe=class{constructor(){this.type=ur}},Te=class{constructor(t){this.timestamp=t,this.type=Xt}},Ae=class{constructor(t){this.timestamp=t,this.type=Yt}},we=class{constructor(t){this.timestamp=t,this.type=Jt}},Ce=class{constructor(){this.type=Qt}},je=class{constructor(t){this.id=t,this.type=en}};var Fe=class{constructor(t){this.index=t,this.type=tn}},De=class{constructor(t){this.actionId=t,this.type=nn}},ke=class{constructor(t){this.nextLiftedState=t,this.type=Ue}},Me=class{constructor(t){this.status=t,this.type=rn}},Ne=class{constructor(t){this.status=t,this.type=on}};var ue=new m("@ngrx/store-devtools Options"),Kt=new m("@ngrx/store-devtools Initial Config");function sn(){return null}var lr="NgRx Store DevTools";function fr(e){let t={maxAge:!1,monitor:sn,actionSanitizer:void 0,stateSanitizer:void 0,name:lr,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},o=typeof e=="function"?e():e,n=o.logOnly?{pause:!0,export:!0,test:!0}:!1,r=o.features||n||t.features;r.import===!0&&(r.import="custom");let i=Object.assign({},t,{features:r},o);if(i.maxAge&&i.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${i.maxAge}`);return i}function Gt(e,t){return e.filter(o=>t.indexOf(o)<0)}function cn(e){let{computedStates:t,currentStateIndex:o}=e;if(o>=t.length){let{state:r}=t[t.length-1];return r}let{state:n}=t[o];return n}function K(e){return new P(e,+Date.now())}function pr(e,t){return Object.keys(t).reduce((o,n)=>{let r=Number(n);return o[r]=an(e,t[r],r),o},{})}function an(e,t,o){return F(T({},t),{action:e(t.action,o)})}function hr(e,t){return t.map((o,n)=>({state:un(e,o.state,n),error:o.error}))}function un(e,t,o){return e(t,o)}function dn(e){return e.predicate||e.actionsSafelist||e.actionsBlocklist}function mr(e,t,o,n){let r=[],i={},s=[];return e.stagedActionIds.forEach((u,l)=>{let d=e.actionsById[u];d&&(l&&Pe(e.computedStates[l],d,t,o,n)||(i[u]=d,r.push(u),s.push(e.computedStates[l])))}),F(T({},e),{stagedActionIds:r,actionsById:i,computedStates:s})}function Pe(e,t,o,n,r){let i=o&&!o(e,t.action),s=n&&!t.action.type.match(n.map(l=>Zt(l)).join("|")),u=r&&t.action.type.match(r.map(l=>Zt(l)).join("|"));return i||s||u}function Zt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ln(e){return{ngZone:e?I(ne):null,connectInZone:e}}var de=(()=>{let t=class t extends w{};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=ee(t)))(i||t)}})(),t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),se={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},_e=new m("@ngrx/store-devtools Redux Devtools Extension"),fn=(()=>{let t=class t{constructor(n,r,i){this.config=r,this.dispatcher=i,this.zoneConfig=ln(this.config.connectInZone),this.devtoolsExtension=n,this.createActionStreams()}notify(n,r){if(this.devtoolsExtension)if(n.type===G){if(r.isLocked||r.isPaused)return;let i=cn(r);if(dn(this.config)&&Pe(i,n,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let s=this.config.stateSanitizer?un(this.config.stateSanitizer,i,r.currentStateIndex):i,u=this.config.actionSanitizer?an(this.config.actionSanitizer,n,r.nextActionId):n;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,s))}else{let i=F(T({},r),{stagedActionIds:r.stagedActionIds,actionsById:this.config.actionSanitizer?pr(this.config.actionSanitizer,r.actionsById):r.actionsById,computedStates:this.config.stateSanitizer?hr(this.config.stateSanitizer,r.computedStates):r.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,i,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new D(n=>{let r=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=r,r.init(),r.subscribe(i=>n.next(i)),r.unsubscribe}):Le}createActionStreams(){let n=this.createChangesObservable().pipe(We()),r=n.pipe(N(c=>c.type===se.START)),i=n.pipe(N(c=>c.type===se.STOP)),s=n.pipe(N(c=>c.type===se.DISPATCH),C(c=>this.unwrapAction(c.payload)),qe(c=>c.type===Ue?this.dispatcher.pipe(N(a=>a.type===oe),Ve(1e3),Ke(1e3),C(()=>c),Be(()=>pe(c)),Ge(1)):pe(c))),l=n.pipe(N(c=>c.type===se.ACTION),C(c=>this.unwrapAction(c.payload))).pipe(Y(i)),d=s.pipe(Y(i));this.start$=r.pipe(Y(i)),this.actions$=this.start$.pipe(me(()=>l)),this.liftedActions$=this.start$.pipe(me(()=>d))}unwrapAction(n){return typeof n=="string"?(0,eval)(`(${n})`):n}getExtensionConfig(n){let r={name:n.name,features:n.features,serialize:n.serialize,autoPause:n.autoPause??!1,trace:n.trace??!1,traceLimit:n.traceLimit??75};return n.maxAge!==!1&&(r.maxAge=n.maxAge),r}sendToReduxDevtools(n){try{n()}catch(r){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",r)}}};t.\u0275fac=function(r){return new(r||t)(E(_e),E(ue),E(de))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})(),ae={type:L},yr="@ngrx/store-devtools/recompute",gr={type:yr};function pn(e,t,o,n,r){if(n)return{state:o,error:"Interrupted by an error up the chain"};let i=o,s;try{i=e(o,t)}catch(u){s=u.toString(),r.handleError(u)}return{state:i,error:s}}function ce(e,t,o,n,r,i,s,u,l){if(t>=e.length&&e.length===i.length)return e;let d=e.slice(0,t),c=i.length-(l?1:0);for(let a=t;a<c;a++){let h=i[a],R=r[h].action,p=d[a-1],f=p?p.state:n,b=p?p.error:void 0,O=s.indexOf(h)>-1?p:pn(o,R,f,b,u);d.push(O)}return l&&d.push(e[e.length-1]),d}function Er(e,t){return{monitorState:t(void 0,{}),nextActionId:1,actionsById:{0:K(ae)},stagedActionIds:[0],skippedActionIds:[],committedState:e,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function Sr(e,t,o,n,r={}){return i=>(s,u)=>{let{monitorState:l,actionsById:d,nextActionId:c,stagedActionIds:a,skippedActionIds:h,committedState:R,currentStateIndex:p,computedStates:f,isLocked:b,isPaused:v}=s||t;s||(d=Object.create(d));function O(S){let g=S,j=a.slice(1,g+1);for(let x=0;x<j.length;x++)if(f[x+1].error){g=x,j=a.slice(1,g+1);break}else delete d[j[x]];h=h.filter(x=>j.indexOf(x)===-1),a=[0,...a.slice(g+1)],R=f[g].state,f=f.slice(g),p=p>g?p-g:0}function M(){d={0:K(ae)},c=1,a=[0],h=[],R=f[p].state,p=0,f=[]}let y=0;switch(u.type){case rn:{b=u.status,y=1/0;break}case on:{v=u.status,v?(a=[...a,c],d[c]=new P({type:"@ngrx/devtools/pause"},+Date.now()),c++,y=a.length-1,f=f.concat(f[f.length-1]),p===a.length-2&&p++,y=1/0):M();break}case Xt:{d={0:K(ae)},c=1,a=[0],h=[],R=e,p=0,f=[];break}case Jt:{M();break}case Yt:{d={0:K(ae)},c=1,a=[0],h=[],p=0,f=[];break}case en:{let{id:S}=u;h.indexOf(S)===-1?h=[S,...h]:h=h.filter(j=>j!==S),y=a.indexOf(S);break}case dr:{let{start:S,end:g,active:j}=u,x=[];for(let fe=S;fe<g;fe++)x.push(fe);j?h=Gt(h,x):h=[...h,...x],y=a.indexOf(S);break}case tn:{p=u.index,y=1/0;break}case nn:{let S=a.indexOf(u.actionId);S!==-1&&(p=S),y=1/0;break}case Qt:{a=Gt(a,h),h=[],p=Math.min(p,a.length-1);break}case G:{if(b)return s||t;if(v||s&&Pe(s.computedStates[p],u,r.predicate,r.actionsSafelist,r.actionsBlocklist)){let g=f[f.length-1];f=[...f.slice(0,-1),pn(i,u.action,g.state,g.error,o)],y=1/0;break}r.maxAge&&a.length===r.maxAge&&O(1),p===a.length-1&&p++;let S=c++;d[S]=u,a=[...a,S],y=a.length-1;break}case Ue:{({monitorState:l,actionsById:d,nextActionId:c,stagedActionIds:a,skippedActionIds:h,committedState:R,currentStateIndex:p,computedStates:f,isLocked:b,isPaused:v}=u.nextLiftedState);break}case L:{y=0,r.maxAge&&a.length>r.maxAge&&(f=ce(f,y,i,R,d,a,h,o,v),O(a.length-r.maxAge),y=1/0);break}case oe:{if(f.filter(g=>g.error).length>0)y=0,r.maxAge&&a.length>r.maxAge&&(f=ce(f,y,i,R,d,a,h,o,v),O(a.length-r.maxAge),y=1/0);else{if(!v&&!b){p===a.length-1&&p++;let g=c++;d[g]=new P(u,+Date.now()),a=[...a,g],y=a.length-1,f=ce(f,y,i,R,d,a,h,o,v)}f=f.map(g=>F(T({},g),{state:i(g.state,gr)})),p=a.length-1,r.maxAge&&a.length>r.maxAge&&O(a.length-r.maxAge),y=1/0}break}default:{y=1/0;break}}return f=ce(f,y,i,R,d,a,h,o,v),l=n(l,u),{monitorState:l,actionsById:d,nextActionId:c,stagedActionIds:a,skippedActionIds:h,committedState:R,currentStateIndex:p,computedStates:f,isLocked:b,isPaused:v}}}var Ht=(()=>{let t=class t{constructor(n,r,i,s,u,l,d,c){let a=Er(d,c.monitor),h=Sr(d,a,l,c.monitor,c),R=he(he(r.asObservable().pipe(Xe(1)),s.actions$).pipe(C(K)),n,s.liftedActions$).pipe(W(H)),p=i.pipe(C(h)),f=ln(c.connectInZone),b=new $e(1);this.liftedStateSubscription=R.pipe(J(p),Wt(f),X(({state:M},[y,S])=>{let g=S(M,y);return y.type!==G&&dn(c)&&(g=mr(g,c.predicate,c.actionsSafelist,c.actionsBlocklist)),s.notify(y,g),{state:g,action:y}},{state:a,action:null})).subscribe(({state:M,action:y})=>{if(b.next(M),y.type===G){let S=y.action;u.next(S)}}),this.extensionStartSubscription=s.start$.pipe(Wt(f)).subscribe(()=>{this.refresh()});let v=b.asObservable(),O=v.pipe(C(cn));Object.defineProperty(O,"state",{value:z(O,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=n,this.liftedState=v,this.state=O}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(n){this.dispatcher.next(n)}next(n){this.dispatcher.next(n)}error(n){}complete(){}performAction(n){this.dispatch(new P(n,+Date.now()))}refresh(){this.dispatch(new Oe)}reset(){this.dispatch(new Te(+Date.now()))}rollback(){this.dispatch(new Ae(+Date.now()))}commit(){this.dispatch(new we(+Date.now()))}sweep(){this.dispatch(new Ce)}toggleAction(n){this.dispatch(new je(n))}jumpToAction(n){this.dispatch(new De(n))}jumpToState(n){this.dispatch(new Fe(n))}importState(n){this.dispatch(new ke(n))}lockChanges(n){this.dispatch(new Me(n))}pauseRecording(n){this.dispatch(new Ne(n))}};t.\u0275fac=function(r){return new(r||t)(E(de),E(w),E(k),E(fn),E(B),E(rt),E(V),E(ue))},t.\u0275prov=A({token:t,factory:t.\u0275fac});let e=t;return e})();function Wt({ngZone:e,connectInZone:t}){return o=>t?new D(n=>o.subscribe({next:r=>e.run(()=>n.next(r)),error:r=>e.run(()=>n.error(r)),complete:()=>e.run(()=>n.complete())})):o}var Rr=new m("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function vr(e,t){return!!e||t.monitor!==sn}function Ir(){let e="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[e]<"u"?window[e]:null}function hn(e={}){return Q([fn,de,Ht,{provide:Kt,useValue:e},{provide:Rr,deps:[_e,ue],useFactory:vr},{provide:_e,useFactory:Ir},{provide:ue,deps:[Kt],useFactory:fr},{provide:U,deps:[Ht],useFactory:xr},{provide:_,useExisting:de}])}function xr(e){return e.state}var mn={providers:[dt(ht),zt(Bt,{metaReducers:qt}),{provide:ct,useClass:ft,multi:!0},hn({maxAge:25,autoPause:!0,trace:!0,traceLimit:25}),tt(lt.forRoot({domain:"dev-ivf3mcbcwdgnwslt.us.auth0.com",clientId:"qac63ExsInZpZzCMaP6EEb766Upaqs3o",authorizationParams:{redirect_uri:window.location.origin},httpInterceptor:{allowedList:[""]}}))]};var le={};En(le,{selectFeature:()=>yn,selectLoading:()=>br});var yn=e=>e.root,br=Pt(yn,e=>e.loading);var gn=(()=>{let t=class t{constructor(n){this.store=n,this.count$=this.store.select(le.selectFeature);let r=this.count$.subscribe(i=>console.log("state:",i))}};t.\u0275fac=function(r){return new(r||t)(it(q))},t.\u0275cmp=Je({type:t,selectors:[["app-root"]],standalone:!0,features:[st],decls:1,vars:0,template:function(r,i){r&1&&ot(0,"router-outlet")},dependencies:[ut]});let e=t;return e})();at(gn,mn).catch(e=>console.error(e));

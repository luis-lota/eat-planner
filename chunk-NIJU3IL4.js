import{a as C,b as S,c as R}from"./chunk-2S6KIBJK.js";import{Aa as _,Fa as M,Ha as A,M as f,O as y,P as w,ba as T,ca as l,da as g,ia as d,ja as c,ka as n,la as o,ma as h,na as I,oa as k,pa as E,qa as a,ra as D,sa as b,ta as p,ua as m,ya as v,za as x}from"./chunk-WN4KPU5D.js";function B(i,e){if(i&1){let s=I();n(0,"button",13),k("click",function(){y(s);let t=E();return w(t.loginWidthRedirect())}),a(1,"login"),o()}}function J(i,e){if(i&1){let s=I();n(0,"button",14),k("click",function(){y(s);let t=E();return w(t.logoutRedirect())}),a(1,"logout"),o()}}var P=(()=>{let e=class e{constructor(r){this.auth=r,this.user="",console.log("logging out",window.location.origin+"/eat-planner/"),console.log("ambiente:",C),this.auth.user$.subscribe(t=>{t&&(this.user=t)})}loginWidthRedirect(){this.auth.loginWithRedirect()}logoutRedirect(){console.log("logging out",window.location.origin+"/eat-planner/"),this.auth.logout(),C.production?this.auth.logout({clientId:C.auth0.clientId,logoutParams:{returnTo:window.location.origin}}):this.auth.logout()}};e.\u0275fac=function(t){return new(t||e)(g(S))},e.\u0275cmp=f({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[b],decls:19,vars:6,consts:[[1,"navbar","navbar-expand-lg","navbar-light","bg-light"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],["routerLink","./profile-details",1,"nav-link"],[1,"d-flex"],["class","btn btn-outline-success",3,"click",4,"ngIf"],["class","btn btn-outline-danger",3,"click",4,"ngIf"],[1,"btn","btn-outline-success",3,"click"],[1,"btn","btn-outline-danger",3,"click"]],template:function(t,u){t&1&&(n(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"Navbar"),o(),n(4,"button",3),h(5,"span",4),o(),n(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),a(10,"Home"),o()(),n(11,"li",7)(12,"a",9),a(13,"profile details"),o()()(),n(14,"form",10),d(15,B,2,0,"button",11),p(16,"async"),d(17,J,2,0,"button",12),p(18,"async"),o()()()()),t&2&&(l(15),c("ngIf",m(16,2,u.auth.isAuthenticated$)===!1),l(2),c("ngIf",m(18,4,u.auth.isAuthenticated$)))},dependencies:[A,M,_,v,x]});let i=e;return i})();function W(i,e){if(i&1&&(n(0,"div")(1,"div",1)(2,"div",2),h(3,"img",3),o(),n(4,"div",4)(5,"h2"),a(6),o(),n(7,"p",5),a(8),o()()()()),i&2){let s=e.ngIf;l(3),c("src",s.picture,T),l(3),D(s.name),l(2),D(s.email)}}var V=(()=>{let e=class e{constructor(r){this.auth=r,this.profileJson="",this.auth.user$.subscribe(t=>{t&&(this.profileJson=JSON.stringify(t,null,2))})}};e.\u0275fac=function(t){return new(t||e)(g(S))},e.\u0275cmp=f({type:e,selectors:[["app-profile-details"]],standalone:!0,features:[b],decls:6,vars:3,consts:[[4,"ngIf"],[1,"row","align-items-center","profile-header"],[1,"col-md-2","mb-3"],["alt","testing",1,"rounded-circle","img-fluid","profile-picture",3,"src"],[1,"col-md","text-center","text-md-left"],[1,"lead","text-muted"]],template:function(t,u){t&1&&(n(0,"h2"),a(1,"Protected by token id"),o(),n(2,"p"),a(3,"profile-details works!"),o(),d(4,W,9,3,"div",0),p(5,"async")),t&2&&(l(4),c("ngIf",m(5,1,u.auth.user$)))},dependencies:[_,v,x]});let i=e;return i})();var X=[{path:"",title:"Eat planner-dashboard",component:P},{path:"profile-details",title:"Eat planner-profile-details",component:V,canActivate:[R]},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"**",redirectTo:"dashboard",pathMatch:"full"}];export{X as UserProfileRoutes};

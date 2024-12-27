import{a as X,b as z,d as $}from"./chunk-ZGPSUPTI.js";import{l as Y,m as Q,o as Z}from"./chunk-OEB6COJ7.js";import{Q as j,Va as q,Wa as J,Xa as K,d as W,ra as U,sa as G}from"./chunk-6INVB3O7.js";import{$b as C,Ba as d,Ca as m,Ea as k,Eb as v,Gb as A,Hb as s,Hc as F,Ia as N,Jb as l,Lb as y,Oc as H,Sb as M,Xb as p,Yb as g,Zb as E,_b as h,a as T,bc as V,ec as B,ed as L,gc as c,kd as R,lb as a,mb as S,na as O,pc as f,qc as b,tb as I,ub as x,vb as w,w as _,wb as D}from"./chunk-VOOW2245.js";var ne=(t=>(t[t.Side=1]="Side",t[t.Shortcut=2]="Shortcut",t))(ne||{}),re=(n=>(n[n.Calendar=1]="Calendar",n[n.OffWork=2]="OffWork",n[n.Runtime=3]="Runtime",n[n.Image=4]="Image",n[n.Countdown=5]="Countdown",n[n.HTML=6]="HTML",n[n.Holiday=7]="Holiday",n))(re||{});var ee=class e{constructor(i){this.sanitized=i}transform(i){return this.sanitized.bypassSecurityTrustHtml(i)}static \u0275fac=function(t){return new(t||e)(S(W,16))};static \u0275pipe=D({name:"safeHtml",type:e,pure:!0})};function ie(e,i){if(e&1&&(h(0),f(1),C()),e&2){let t=c(3);a(),b(t.nzTitle)}}function ae(e,i){if(e&1&&(p(0,"div",7),s(1,ie,2,1,"ng-container",9),g()),e&2){let t=c(2);a(),l("nzStringTemplateOutlet",t.nzTitle)}}function se(e,i){if(e&1&&(h(0),f(1),C()),e&2){let t=c(2);a(),b(t.nzContent)}}function le(e,i){if(e&1&&(p(0,"div",2)(1,"div",3)(2,"div",4),E(3,"span",5),g(),p(4,"div",6)(5,"div"),s(6,ae,2,1,"div",7),p(7,"div",8),s(8,se,2,1,"ng-container",9),g()()()()()),e&2){let t=c();y("ant-popover-rtl",t.dir==="rtl"),l("ngClass",t._classMap)("ngStyle",t.nzOverlayStyle)("@.disabled",!!(t.noAnimation!=null&&t.noAnimation.nzNoAnimation))("nzNoAnimation",t.noAnimation==null?null:t.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),a(6),M(t.nzTitle?6:-1),a(2),l("nzStringTemplateOutlet",t.nzContent)}}var pe="popover",Ae=(()=>{class e extends X{getProxyPropertyMap(){return T({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}constructor(){super(te),this._nzModuleName=pe,this.trigger="hover",this.placement="top",this.nzPopoverBackdrop=!1,this.visibleChange=new N}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275dir=w({type:e,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(o,r){o&2&&y("ant-popover-open",r.visible)},inputs:{arrowPointAtCenter:[2,"nzPopoverArrowPointAtCenter","arrowPointAtCenter",H],title:[0,"nzPopoverTitle","title"],content:[0,"nzPopoverContent","content"],directiveTitle:[0,"nz-popover","directiveTitle"],trigger:[0,"nzPopoverTrigger","trigger"],placement:[0,"nzPopoverPlacement","placement"],origin:[0,"nzPopoverOrigin","origin"],visible:[0,"nzPopoverVisible","visible"],mouseEnterDelay:[0,"nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:[0,"nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:[0,"nzPopoverOverlayClassName","overlayClassName"],overlayStyle:[0,"nzPopoverOverlayStyle","overlayStyle"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[A,v]})}}return _([j()],e.prototype,"nzPopoverBackdrop",void 0),e})(),te=(()=>{class e extends ${constructor(){super(...arguments),this._prefix="ant-popover"}get hasBackdrop(){return this.nzTrigger==="click"?this.nzBackdrop:!1}isEmpty(){return z(this.nzTitle)&&z(this.nzContent)}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=k(e)))(r||e)}})()}static{this.\u0275cmp=I({type:e,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[v],decls:2,vars:6,consts:[["overlay","cdkConnectedOverlay"],["cdkConnectedOverlay","","nzConnectedOverlay","",3,"overlayOutsideClick","detach","positionChange","cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter"],[1,"ant-popover",3,"ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],[1,"ant-popover-title"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"]],template:function(o,r){if(o&1){let u=V();s(0,le,9,9,"ng-template",1,0,F),B("overlayOutsideClick",function(n){return d(u),m(r.onClickOutside(n))})("detach",function(){return d(u),m(r.hide())})("positionChange",function(n){return d(u),m(r.onPositionChange(n))})}o&2&&l("cdkConnectedOverlayHasBackdrop",r.hasBackdrop)("cdkConnectedOverlayOrigin",r.origin)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayOpen",r._visible)("cdkConnectedOverlayPush",r.cdkConnectedOverlayPush)("nzArrowPointAtCenter",r.nzArrowPointAtCenter)},dependencies:[G,U,Q,Y,L,R,Z,K,J],encapsulation:2,data:{animation:[q]},changeDetection:0})}}return e})(),Me=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=x({type:e})}static{this.\u0275inj=O({imports:[te]})}}return e})();export{ne as a,re as b,ee as c,Ae as d,Me as e};

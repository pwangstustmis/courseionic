(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{z0lq:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",(function(){return u}));var i=o("mrSG"),r=o("Twl7"),n=(o("ttJE"),o("wSPg"),o("FX7f")),s=(o("ocqh"),o("CTpc")),a=o("Jky2"),p=o("v7+D"),l=o("YNVt"),c=function(e,t){var o="top",i="left",r=e.querySelector(".popover-content"),s=r.getBoundingClientRect(),a=s.width,p=s.height,l=e.ownerDocument.defaultView.innerWidth,c=e.ownerDocument.defaultView.innerHeight,h=t&&t.target&&t.target.getBoundingClientRect(),m=null!=h&&"top"in h?h.top:c/2-p/2,f=null!=h&&"left"in h?h.left:l/2,u=h&&h.width||0,v=h&&h.height||0,b=e.querySelector(".popover-arrow"),g=b.getBoundingClientRect(),w=g.width,y=g.height;null==h&&(b.style.display="none");var x={top:m+v,left:f+u/2-w/2},j={top:m+v+(y-1),left:f+u/2-a/2},O=!1,D=!1;j.left<d+25?(O=!0,j.left=d):a+d+j.left+25>l&&(D=!0,j.left=l-a-d,i="right"),m+v+p>c&&m-p>0?(x.top=m-(y+1),j.top=m-p-(y-1),e.className=e.className+" popover-bottom",o="bottom"):m+v+p>c&&(r.style.bottom=d+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",r.style.top=j.top+"px",r.style.left=j.left+"px",O&&(r.style.left="calc("+j.left+"px + var(--ion-safe-area-left, 0px))"),D&&(r.style.left="calc("+j.left+"px - var(--ion-safe-area-right, 0px))"),r.style.transformOrigin=o+" "+i;var P=Object(n.a)(),k=Object(n.a)(),E=Object(n.a)();return k.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.08),E.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),P.addElement(e).easing("ease").duration(100).addAnimation([k,E])},d=5,h=function(e){var t=Object(n.a)(),o=Object(n.a)(),i=Object(n.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.08,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},m=function(e,t){var o=e.ownerDocument,i="rtl"===o.dir,r="top",s=i?"right":"left",a=e.querySelector(".popover-content"),p=a.getBoundingClientRect(),l=p.width,c=p.height,d=o.defaultView.innerWidth,h=o.defaultView.innerHeight,m=t&&t.target&&t.target.getBoundingClientRect(),f=null!=m&&"bottom"in m?m.bottom:h/2-c/2,u=m&&m.height||0,v={top:f,left:null!=m&&"left"in m?i?m.left-l+m.width:m.left:d/2-l/2};v.left<12?(v.left=12,s="left"):l+12+v.left>d&&(v.left=d-l-12,s="right"),f+u+c>h&&f-c>0?(v.top=f-c-u,e.className=e.className+" popover-bottom",r="bottom"):f+u+c>h&&(a.style.bottom="12px");var b=Object(n.a)(),g=Object(n.a)(),w=Object(n.a)(),y=Object(n.a)(),x=Object(n.a)();return g.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),w.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),y.addElement(a).beforeStyles({top:v.top+"px",left:v.left+"px","transform-origin":r+" "+s}).fromTo("transform","scale(0.001)","scale(1)"),x.addElement(e.querySelector(".popover-viewport")).fromTo("opacity",.01,1),b.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([g,w,y,x])},f=function(e){var t=Object(n.a)(),o=Object(n.a)(),i=Object(n.a)();return o.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(e).easing("ease").duration(500).addAnimation([o,i])},u=function(){function e(e){var t=this;Object(r.l)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,s.a)},this.onLifecycle=function(e){var o=t.usersElement,i=v[e.type];if(o&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(r)}},Object(s.e)(this.el),this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return Object(i.b)(this,void 0,void 0,(function(){var e,t,o;return Object(i.e)(this,(function(i){switch(i.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign(Object.assign({},this.componentProps),{popover:this.el}),o=this,[4,Object(p.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=i.sent(),[4,Object(l.a)(this.usersElement)];case 2:return i.sent(),[2,Object(s.f)(this,"popoverEnter",c,m,this.event)]}}))}))},e.prototype.dismiss=function(e,t){return Object(i.b)(this,void 0,void 0,(function(){var o;return Object(i.e)(this,(function(i){switch(i.label){case 0:return[4,Object(s.g)(this,e,t,"popoverLeave",h,f,this.event)];case 1:return(o=i.sent())?[4,Object(p.b)(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,o]}}))}))},e.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,t=Object(r.e)(this),o=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(a.b)(this.cssClass)),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:o,onIonPopoverWillPresent:o,onIonPopoverWillDismiss:o,onIonPopoverDidDismiss:o,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),e}(),v={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);
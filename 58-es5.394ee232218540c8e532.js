(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{Voy3:function(i,t,e){"use strict";e.r(t),e.d(t,"ion_loading",(function(){return h}));var n=e("mrSG"),o=e("Twl7"),a=e("ttJE"),s=(e("wSPg"),e("FX7f")),r=e("CTpc"),d=e("Jky2"),c=e("zwjO"),l=function(i){var t=Object(s.a)(),e=Object(s.a)(),n=Object(s.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},p=function(i){var t=Object(s.a)(),e=Object(s.a)(),n=Object(s.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.3,0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},m=function(i){var t=Object(s.a)(),e=Object(s.a)(),n=Object(s.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},g=function(i){var t=Object(s.a)(),e=Object(s.a)(),n=Object(s.a)();return e.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.32,0),n.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),t.addElement(i).easing("ease-in-out").duration(200).addAnimation([e,n])},h=function(){function i(i){var t=this;Object(o.l)(this,i),this.presented=!1,this.mode=Object(o.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){t.dismiss(void 0,r.a)},Object(r.e)(this.el),this.didPresent=Object(o.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(o.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(o.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(o.d)(this,"ionLoadingDidDismiss",7)}return i.prototype.componentWillLoad=function(){if(void 0===this.spinner){var i=Object(o.e)(this);this.spinner=a.b.get("loadingSpinner",a.b.get("spinner","ios"===i?"lines":"crescent"))}},i.prototype.present=function(){return Object(n.b)(this,void 0,void 0,(function(){var i=this;return Object(n.e)(this,(function(t){switch(t.label){case 0:return[4,Object(r.f)(this,"loadingEnter",l,m,void 0)];case 1:return t.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return i.dismiss()}),this.duration+10)),[2]}}))}))},i.prototype.dismiss=function(i,t){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(r.g)(this,i,t,"loadingLeave",p,g)},i.prototype.onDidDismiss=function(){return Object(r.h)(this.el,"ionLoadingDidDismiss")},i.prototype.onWillDismiss=function(){return Object(r.h)(this.el,"ionLoadingWillDismiss")},i.prototype.render=function(){var i,t=this.message,e=this.spinner,n=Object(o.e)(this);return Object(o.i)(o.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(d.b)(this.cssClass)),(i={},i[n]=!0,i["loading-translucent"]=this.translucent,i))},Object(o.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(o.i)("div",{class:"loading-wrapper",role:"dialog"},e&&Object(o.i)("div",{class:"loading-spinner"},Object(o.i)("ion-spinner",{name:e})),t&&Object(o.i)("div",{class:"loading-content",innerHTML:Object(c.a)(t)})))},Object.defineProperty(i.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(i,"style",{get:function(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:!0,configurable:!0}),i}()}}]);
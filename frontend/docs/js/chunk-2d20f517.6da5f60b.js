(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f517"],{b2b3:function(e,t,s){"use strict";s.r(t),s.d(t,"StorageWeb",(function(){return r}));var i=s("1547");class r extends i["b"]{constructor(){super(...arguments),this.group="CapacitorStorage"}async configure({group:e}){"string"===typeof e&&(this.group=e)}async get(e){const t=this.impl.getItem(this.applyPrefix(e.key));return{value:t}}async set(e){this.impl.setItem(this.applyPrefix(e.key),e.value)}async remove(e){this.impl.removeItem(this.applyPrefix(e.key))}async keys(){const e=this.rawKeys().map(e=>e.substring(this.prefix.length));return{keys:e}}async clear(){for(const e of this.rawKeys())this.impl.removeItem(e)}async migrate(){var e;const t=[],s=[],i="_cap_",r=Object.keys(this.impl).filter(e=>0===e.indexOf(i));for(const n of r){const r=n.substring(i.length),a=null!==(e=this.impl.getItem(n))&&void 0!==e?e:"",{value:p}=await this.get({key:r});"string"===typeof p?s.push(r):(await this.set({key:r,value:a}),t.push(r))}return{migrated:t,existing:s}}get impl(){return window.localStorage}get prefix(){return"NativeStorage"===this.group?"":this.group+"."}rawKeys(){return Object.keys(this.impl).filter(e=>0===e.indexOf(this.prefix))}applyPrefix(e){return this.prefix+e}}}}]);
//# sourceMappingURL=chunk-2d20f517.6da5f60b.js.map
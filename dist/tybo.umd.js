!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@hotwired/stimulus"),require("@rails/request.js"),require("tom-select")):"function"==typeof define&&define.amd?define(["exports","@hotwired/stimulus","@rails/request.js","tom-select"],e):e((t||self).tyboJs={},t.Stimulus,t.request_js,t.tomSelect)}(this,function(t,e,r,n){function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=/*#__PURE__*/o(n);function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}var a=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return u(e,t),e.prototype.toggle=function(t){try{var e=this;t.preventDefault();var n=new r.FetchRequest(e.methodValue,e.urlValue,{responseKind:"turbo-stream",body:{attachment_id:e.attachmentIdValue}});return Promise.resolve(n.perform()).then(function(t){})}catch(t){return Promise.reject(t)}},e}(e.Controller);a.values={url:String,method:String,attachmentId:Number};var c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var r=e.prototype;return r.toggle=function(){this.menuTarget.classList.toggle("hidden")},r.hide=function(t){this.element.contains(t.target)||this.menuTarget.classList.contains("hidden")||this.menuTarget.classList.add("hidden")},e}(e.Controller);c.targets=["menu"];var l=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return u(e,t),e.prototype.dismiss=function(){this.element.remove()},e}(e.Controller),f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var r=e.prototype;return r.search=function(){var t=this,e=document.getElementById("exportBtn"),r=e.getAttribute("href");if(e){r=r.split("?")[0];var n=this.getQueryParams();e.setAttribute("href",r+"?"+n)}clearTimeout(this.timeout),this.timeout=setTimeout(function(){t.formTarget.requestSubmit()},200)},r.getQueryParams=function(){var t=new FormData(this.formTarget);return new URLSearchParams(t).toString()},r.setBooleanField=function(t){var e=t.target.getAttribute("data-value"),r=t.target.getAttribute("data-target-id");document.getElementById(r).value=e,this.formTarget.requestSubmit()},e}(e.Controller);f.targets=["form"];var h=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.connect=function(){var t=this;new i.default(this.element,{plugins:["clear_button"],valueField:"value",load:function(e,r){return t.search(e,r)}})},n.search=function(t,e){try{return Promise.resolve(r.get(this.urlValue,{query:{q:t},responseKind:"json"})).then(function(t){var r=function(){if(t.ok)return Promise.resolve(t.json).then(function(t){e(t)});e()}();if(r&&r.then)return r.then(function(){})})}catch(t){return Promise.reject(t)}},e}(e.Controller);h.values={url:String};var m=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return u(e,t),e.prototype.connect=function(){new i.default(this.element,{create:!1,plugins:["remove_button"]})},e}(e.Controller);t.Attachments=a,t.Dropdown=c,t.Flash=l,t.SearchForm=f,t.TsSearch=h,t.TsSelect=m});
//# sourceMappingURL=tybo.umd.js.map

!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(11),i=n(2);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?i(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(12);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(8);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(10)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(9)(!1)).push([t.i,"",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var s=t[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],e))}else{for(var s=[];a<r.parts.length;a++)s.push(m(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function p(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(t,e){var n,r,i;if(e.singleton){var o=v++;n=h||(h=u(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=u(e),r=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=s(t,e);return l(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],u=i[a.id];u&&(u.refs--,r.push(u))}t&&l(s(t,e),e);for(var c=0;c<r.length;c++){var d=r[c];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete i[d.id]}}}}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){"use strict";n.r(e);n(7);var r=n(3),i=n.n(r),o=n(0),a=n.n(o),s=n(1),l=n.n(s);function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach((function(e){i()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d=function(){function t(e){if(a()(this,t),this.name=e,!localStorage[this.name]){localStorage[this.name]=JSON.stringify({todos:[]})}this.observable=[]}return l()(t,[{key:"addObservable",value:function(t){this.observable.push(t)}},{key:"notify",value:function(){this.observable.forEach((function(t){return t()}))}},{key:"getAllTasks",value:function(){return JSON.parse(localStorage[this.name]).todos}},{key:"getTask",value:function(t){var e=JSON.parse(localStorage[this.name]).todos.find((function(e){return Number(e.id)===Number(t)}));return e||!1}},{key:"save",value:function(t,e){var n,r=JSON.parse(localStorage[this.name]);if(e){var i=r.todos.map((function(r){return Number(r.id)===Number(e)?n=c({},r,{},t):r}));r.todos=i,localStorage[this.name]=JSON.stringify(r)}else n=c({},{id:(new Date).getTime()},{},t),r.todos.push(n),localStorage[this.name]=JSON.stringify(r);return n}},{key:"remove",value:function(t){var e=JSON.parse(localStorage[this.name]);e.todos.forEach((function(n,r){Number(n.id)===Number(t)&&e.todos.splice(r,1)})),localStorage[this.name]=JSON.stringify(e),this.notify()}}]),t}(),f=n(4),p=n.n(f),h=n(5),v=n.n(h),m=n(6),y=n.n(m),b=function(){function t(){a()(this,t),this.events={}}return l()(t,[{key:"on",value:function(t,e){return(this.events[t]||(this.events[t]=[])).push(e),this}},{key:"emit",value:function(t,e){(this.events[t]||[]).slice().forEach((function(t){return t(e)}))}}]),t}(),g=function(t){function e(t){var n;return a()(this,e),(n=p()(this,v()(e).call(this))).storage=t,n}return y()(e,t),l()(e,[{key:"createTask",value:function(t){var e={title:t.title,description:t.description,priority:t.priority,status:!0};return this.storage.save(e)}},{key:"removeTask",value:function(t){this.storage.remove(t)}},{key:"getTask",value:function(t){return this.storage.getTask(t)}},{key:"getAll",value:function(){return this.storage.getAllTasks()}},{key:"updateTask",value:function(t,e){return this.storage.save(t,e)}},{key:"filter",value:function(t){var e=t.status,n=t.priority,r=this.getAll(),i=this.parseStatusValue(e),o=[];switch(this.getFilterField(i,n)){case"all":o=r;break;case"priority":o=r.filter((function(t){return t.priority===n}));break;case"status":o=r.filter((function(t){return t.status===i}));break;case"both":o=r.filter((function(t){return t.priority===n&&t.status===i}));break;default:o=[]}return o}}]),e}(b);g.prototype.getFilterField=function(t,e){return"all"===e&&"all"===t?"all":"all"!==e&&"all"===t?"priority":"all"!==t&&"all"===e?"status":"both"},g.prototype.parseStatusValue=function(t){return"open"===t||"done"!==t&&"all"};var k=g,S=n(2),_=n.n(S),w=function(t){function e(){var t;a()(this,e),t=p()(this,v()(e).call(this)),i()(_()(t),"handleSave",(function(e,n){return function(r){r.preventDefault();var i=document.getElementById("createForm"),o=i.title,a=i.description,s=i.priority,l={title:o.value,description:a.value,priority:s.value};"edit"===e?t.emit("edit",{newData:l,id:n}):"add"===e&&t.emit("add",l),t.removeForm()}})),i()(_()(t),"handleToggleStatusTask",(function(e){return function(n){var r=n.target,i=e.dataset.id,o=r.checked;t.emit("toggle",{id:i,status:o})}})),i()(_()(t),"handleDeleteTask",(function(e){return function(){t.emit("delete",e.dataset.id)}})),i()(_()(t),"showCreateEditForm",(function(e,n){return function(){t.bg.classList.remove("_hidden");var r=t.createFormInit();r.cancel.addEventListener("cancel",t.removeForm.bind(_()(t))),"edit"===e?r.addEventListener("submit",t.handleSave(e,n)):"add"===e&&r.addEventListener("submit",t.handleSave(e)),t.root.appendChild(r)}})),t.root=document.getElementById("root"),t.showCreateFormBtn=document.getElementById("showCreateForm"),t.searchAndFilterForm=document.forms.searchAndFilterForm,t.createForm=document.forms.createForm,t.bg=document.getElementById("bg"),t.listContainer=document.createElement("section"),t.listContainer.className="list-container container";var n=t.searchAndFilterForm,r=n.search,o=n.statusFilter,s=n.priorityFilter;return t.showCreateFormBtn.addEventListener("click",t.showCreateEditForm("add")),r.addEventListener("change",t.handleSearchTask.bind(_()(t))),o.addEventListener("change",t.handleFiltering.bind(_()(t))),s.addEventListener("change",t.handleFiltering.bind(_()(t))),t.root.appendChild(t.listContainer),t}return y()(e,t),l()(e,[{key:"getItem",value:function(t){return this.listContainer.querySelector('[data-id="'.concat(t,'"]'))}},{key:"show",value:function(t){var e=this;if(this.listContainer.innerHTML=null,!t){var n=document.createElement("h2");n.textContent="No tasks...",this.listContainer.appendChild(n)}t.forEach((function(t){var n=e.createListItem(t);e.listContainer.appendChild(n)}))}},{key:"handleSearchTask",value:function(t){t.target}},{key:"handleFiltering",value:function(){var t=this.searchAndFilterForm,e=t.status,n=t.priority;this.emit("filter",{status:e.value,priority:n.value})}},{key:"createListItem",value:function(t){var e=t.id,n=t.title,r=t.description,i=t.priority,o=t.status,a=document.createElement("div");return a.className="list-item",o?a.classList.remove("status-done"):a.classList.add("status-done"),a.dataset.id=e,a.innerHTML='\n      <h2 class="list__title">'.concat(n,'</h2>\n      <p class="list__description">').concat(r,'</p>\n      <span class="list__priority">').concat(i,'</span>\n      <button class="list__edit-btn _toggle btn">...</button>\n      <div class="list__edit-container _hidden">\n        <ul class="list__edit-nav">\n          <li class="list__edit-item">\n            <label class="_status">\n              <span>').concat(o?"Done task":"Open task",'</span>\n              <input type="checkbox" name="status" ').concat(o?"checked":"",'>\n            </label>\n          </li>\n          <li class="list__edit-item">\n            <button class="list__edit-btn _edit btn">Edit</button>\n          </li>\n          <li class="list__edit-item">\n          <button class="list__edit-btn _delete btn">Delete</button>\n          </li>\n        </ul>\n      </div>\n    '),this.addEventListeners(a)}},{key:"addEventListeners",value:function(t){var e=t.querySelector("button._toggle"),n=t.querySelector("._status"),r=t.querySelector("button._edit"),i=t.querySelector("button._delete"),o=t.dataset.id;return e.addEventListener("click",this.toggleDropdownMenu(t)),n.addEventListener("change",this.handleToggleStatusTask(t)),r.addEventListener("click",this.showCreateEditForm("edit",o)),i.addEventListener("click",this.handleDeleteTask(t)),t}},{key:"createFormInit",value:function(){var t=document.createElement("form");return t.id="createForm",t.innerHTML='\n        <label>\n          <input type="text" name="title" placeholder="Title" required />\n        </label>\n        <label>\n          <textarea name="description" placeholder="Description"></textarea>\n        </label>\n        <label>\n          <select name="priority">\n            <option value="high">High</option>\n            <option value="normal" selected>Normal</option>\n            <option value="Low">Low</option>\n          </select>\n        </label>\n        <button name="cancel" type="reset" class="btn">Cancel</button>\n        <button name="save" class="btn">Save</button>\n    ',t}},{key:"removeForm",value:function(){var t=document.getElementById("createForm");this.root.removeChild(t),this.bg.classList.add("_hidden")}},{key:"addTask",value:function(t){var e=this.createListItem(t);this.listContainer.appendChild(e),this.clearForm(this.createForm)}},{key:"toggleStatus",value:function(t){var e=t.id,n=this.getItem(e),r=n.querySelector("._status"),i=r.querySelector("span");r.querySelector('[type="checkbox"]').checked?(i.textContent="Done task",n.classList.remove("status-done")):(i.textContent="Open task",n.classList.add("status-done")),this.toggleDropdownMenu(n)()}},{key:"deleteTask",value:function(t){var e=this.getItem(t);this.listContainer.removeChild(e)}},{key:"editTask",value:function(t,e){var n=t.title,r=t.description,i=t.priority,o=this.getItem(e),a=o.querySelector(".list__title"),s=o.querySelector(".list__description"),l=o.querySelector(".list__priority");a.textContent=n,s.textContent=r,l.textContent=i}}]),e}(b);w.prototype.toggleDropdownMenu=function(t){return function(){t.querySelector(".list__edit-container").classList.toggle("_hidden")}},w.prototype.clearForm=function(t){Array.from(t.elements).forEach((function(t){"SELECT"!==t.nodeName?t.value=null:"priority"===t.name&&(t.value="normal")}))};var T=w,O=function(){function t(e,n){a()(this,t),this.model=e,this.view=n,n.on("add",this.addTask.bind(this)),n.on("toggle",this.toggleStatus.bind(this)),n.on("delete",this.deleteTask.bind(this)),n.on("edit",this.editTask.bind(this)),n.on("filter",this.filter.bind(this)),n.show(e.getAll())}return l()(t,[{key:"addTask",value:function(t){var e=t.title,n=t.description,r=t.priority,i=this.model.createTask({title:e,description:n,priority:r});this.view.addTask(i)}},{key:"toggleStatus",value:function(t){var e=t.id,n=t.status,r=this.model.updateTask({status:n},e);this.view.toggleStatus(r)}},{key:"deleteTask",value:function(t){this.model.removeTask(t),this.view.deleteTask(t)}},{key:"editTask",value:function(t){var e=t.newData,n=t.id,r=this.model.updateTask(e,n);this.view.editTask(r,n)}},{key:"filter",value:function(t){var e=t.status,n=t.priority,r=this.model.filter({status:e,priority:n});this.view.show(r)}}]),t}();document.addEventListener("DOMContentLoaded",(function(){var t=new d("local"),e=new k(t),n=new T;new O(e,n)}))}]);
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./main-bg.jpg */ "./src/main-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inter:500);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Vollkorn:900);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --header: rgba(0, 0, 0, 0.6);\r\n  --main: rgba(0, 0, 0, 0.5);\r\n  --nav-highlight: rgb(255, 255, 255);\r\n  --transparent: rgba(0, 0, 0, 0);\r\n  --blur: blur(10px);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nbody {\r\n  -ms-overflow-style: none;\r\n  scrollbar-width: none;\r\n}\r\n\r\n#content {\r\n  font-family: 'Inter', sans-serif;\r\n  color: white;\r\n  display: grid;\r\n  height: 100vh;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: 1fr;\r\n  grid-template-areas:\r\n    \"main\";\r\n}\r\n\r\n.header {\r\n  background-color: var(--header);\r\n  backdrop-filter: var(--blur);\r\n  position: absolute;\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 0px 20px;\r\n  align-items: center;\r\n  z-index: 1;\r\n}\r\n\r\n.logo {\r\n  font-family: 'Vollkorn', serif;\r\n  font-size: 3rem;\r\n}\r\n\r\n.nav {\r\n  font-size: 1.2rem;\r\n  list-style: none;\r\n  margin-left: auto;\r\n  display: flex;\r\n  gap: 30px;\r\n  z-index: 10;\r\n}\r\n\r\n.nav li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid var(--transparent);\r\n}\r\n\r\n.nav li:hover {\r\n  border-bottom: 2px solid var(--nav-highlight);\r\n}\r\n\r\n.nav li[aria-selected='true'] {\r\n  border-bottom: 2px solid var(--nav-highlight);\r\n}\r\n\r\n.main {\r\n  grid-area: main;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  background-position: bottom;\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.home {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.slide-container {\r\n  height: calc(100vh - 2rem);\r\n  width: 100%;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: scroll;\r\n  scroll-behavior: smooth;\r\n  scrollbar-width: none;\r\n}\r\n\r\n.slide-container::-webkit-scrollbar {\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slide {\r\n  padding: 25px;\r\n  width: 100vw;\r\n  flex: 1 0 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.definition {\r\n  background-color: var(--main);\r\n  backdrop-filter: var(--blur);\r\n  width: 700px;\r\n  height: 400px;\r\n  padding: 25px;\r\n}\r\n\r\n.definition .term {\r\n  font-family: 'Vollkorn', serif;\r\n  font-size: 6rem;\r\n}\r\n\r\n.definition .description {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.slide-arrow {\r\n  position: absolute;\r\n  display: flex;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  height: 4rem;\r\n  background-color: white;\r\n  border: none;\r\n  width: 2rem;\r\n  font-size: 3rem;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  opacity: 0.5;\r\n  transition: opacity 100ms;\r\n}\r\n.slide-arrow:hover,\r\n.slide-arrow:focus {\r\n  opacity: 1;\r\n}\r\n#slide-arrow-prev {\r\n  left: 0;\r\n  padding-left: 0.25rem;\r\n  border-radius: 0 2rem 2rem 0;\r\n}\r\n#slide-arrow-next {\r\n  right: 0;\r\n  padding-left: 0.75rem;\r\n  border-radius: 2rem 0 0 2rem;\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  gap: 30px;\r\n  justify-content: space-evenly;\r\n  padding: 90px 20px 20px 20px;\r\n}\r\n\r\n.item {\r\n  background-color: var(--main);\r\n  backdrop-filter: var(--blur);\r\n  width: 500px;\r\n  height: 250px;\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n}\r\n\r\n.item .detail {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.item .name {\r\n  font-size: 3rem;\r\n  font-family: Vollkorn, serif;\r\n}\r\n\r\n.item .price {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.item .image {\r\n  height: 90%;\r\n  margin-left: auto;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main);\r\n  backdrop-filter: var(--blur);\r\n  font-size: 1.5rem;\r\n  width: 500px;\r\n  height: 250px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.country {\r\n  font-family: 'Vollkorn', serif;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;EACE,4BAA4B;EAC5B,0BAA0B;EAC1B,mCAAmC;EACnC,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,0BAA0B;EAC1B;UACQ;AACV;;AAEA;EACE,+BAA+B;EAC/B,4BAA4B;EAC5B,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,SAAS;EACT,WAAW;AACb;;AAEA;EACE,eAAe;EACf,2CAA2C;AAC7C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,eAAe;EACf,mDAAgC;EAChC,sBAAsB;EACtB,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;EAC1B,WAAW;EACX,aAAa;EACb,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,aAAa;AACf;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,MAAM;EACN,SAAS;EACT,YAAY;EACZ,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,eAAe;EACf,UAAU;EACV,eAAe;EACf,YAAY;EACZ,yBAAyB;AAC3B;AACA;;EAEE,UAAU;AACZ;AACA;EACE,OAAO;EACP,qBAAqB;EACrB,4BAA4B;AAC9B;AACA;EACE,QAAQ;EACR,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,6BAA6B;EAC7B,4BAA4B;AAC9B;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;EAC7B,4BAA4B;EAC5B,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,aAAa;EACb,wBAAwB;EACxB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Inter:500');\r\n@import url('https://fonts.googleapis.com/css?family=Vollkorn:900');\r\n\r\n:root {\r\n  --header: rgba(0, 0, 0, 0.6);\r\n  --main: rgba(0, 0, 0, 0.5);\r\n  --nav-highlight: rgb(255, 255, 255);\r\n  --transparent: rgba(0, 0, 0, 0);\r\n  --blur: blur(10px);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\nbody {\r\n  -ms-overflow-style: none;\r\n  scrollbar-width: none;\r\n}\r\n\r\n#content {\r\n  font-family: 'Inter', sans-serif;\r\n  color: white;\r\n  display: grid;\r\n  height: 100vh;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: 1fr;\r\n  grid-template-areas:\r\n    \"main\";\r\n}\r\n\r\n.header {\r\n  background-color: var(--header);\r\n  backdrop-filter: var(--blur);\r\n  position: absolute;\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 0px 20px;\r\n  align-items: center;\r\n  z-index: 1;\r\n}\r\n\r\n.logo {\r\n  font-family: 'Vollkorn', serif;\r\n  font-size: 3rem;\r\n}\r\n\r\n.nav {\r\n  font-size: 1.2rem;\r\n  list-style: none;\r\n  margin-left: auto;\r\n  display: flex;\r\n  gap: 30px;\r\n  z-index: 10;\r\n}\r\n\r\n.nav li {\r\n  cursor: pointer;\r\n  border-bottom: 2px solid var(--transparent);\r\n}\r\n\r\n.nav li:hover {\r\n  border-bottom: 2px solid var(--nav-highlight);\r\n}\r\n\r\n.nav li[aria-selected='true'] {\r\n  border-bottom: 2px solid var(--nav-highlight);\r\n}\r\n\r\n.main {\r\n  grid-area: main;\r\n  background: url('./main-bg.jpg');\r\n  background-size: cover;\r\n  background-position: bottom;\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.home {\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.slide-container {\r\n  height: calc(100vh - 2rem);\r\n  width: 100%;\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: scroll;\r\n  scroll-behavior: smooth;\r\n  scrollbar-width: none;\r\n}\r\n\r\n.slide-container::-webkit-scrollbar {\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slide {\r\n  padding: 25px;\r\n  width: 100vw;\r\n  flex: 1 0 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.definition {\r\n  background-color: var(--main);\r\n  backdrop-filter: var(--blur);\r\n  width: 700px;\r\n  height: 400px;\r\n  padding: 25px;\r\n}\r\n\r\n.definition .term {\r\n  font-family: 'Vollkorn', serif;\r\n  font-size: 6rem;\r\n}\r\n\r\n.definition .description {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.slide-arrow {\r\n  position: absolute;\r\n  display: flex;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n  height: 4rem;\r\n  background-color: white;\r\n  border: none;\r\n  width: 2rem;\r\n  font-size: 3rem;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  opacity: 0.5;\r\n  transition: opacity 100ms;\r\n}\r\n.slide-arrow:hover,\r\n.slide-arrow:focus {\r\n  opacity: 1;\r\n}\r\n#slide-arrow-prev {\r\n  left: 0;\r\n  padding-left: 0.25rem;\r\n  border-radius: 0 2rem 2rem 0;\r\n}\r\n#slide-arrow-next {\r\n  right: 0;\r\n  padding-left: 0.75rem;\r\n  border-radius: 2rem 0 0 2rem;\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  gap: 30px;\r\n  justify-content: space-evenly;\r\n  padding: 90px 20px 20px 20px;\r\n}\r\n\r\n.item {\r\n  background-color: var(--main);\r\n  backdrop-filter: var(--blur);\r\n  width: 500px;\r\n  height: 250px;\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: start;\r\n  align-items: center;\r\n}\r\n\r\n.item .detail {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.item .name {\r\n  font-size: 3rem;\r\n  font-family: Vollkorn, serif;\r\n}\r\n\r\n.item .price {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.item .image {\r\n  height: 90%;\r\n  margin-left: auto;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main);\r\n  backdrop-filter: var(--blur);\r\n  font-size: 1.5rem;\r\n  width: 500px;\r\n  height: 250px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-flow: column nowrap;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n.country {\r\n  font-family: 'Vollkorn', serif;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildAbout": () => (/* binding */ buildAbout)
/* harmony export */ });


function buildAbout() {
  const main = document.querySelector('.main');
  main.childNodes.forEach(child => child.remove());

  const country = document.createElement('span');
  country.className = 'country';
  country.textContent = 'Philippines';

  const about = document.createElement('p');
  about.className = 'about';
  about.textContent = 'Made with ❤️ from the ';
  about.append(country);

  const contact = document.createElement('p');
  contact.className = 'contact';
  contact.textContent = 'villiamrose@gmail.com';
  
  const card = document.createElement('div');
  card.className = 'card';
  card.append(about, contact);
  
  const mainElement = document.querySelector('.main');
  mainElement.append(card);
}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHomepage": () => (/* binding */ buildHomepage)
/* harmony export */ });
/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.js */ "./src/items.js");




function buildHomepage() {
  const main = document.querySelector('.main');
  main.childNodes.forEach(child => child.remove());

  const slideContainer = document.createElement('div');
  slideContainer.className = 'slide-container';
  slideContainer.id = 'slide-container';
  appendSlides(slideContainer);

  const prevBtn = document.createElement('button');
  prevBtn.className = 'slide-arrow';
  prevBtn.id = 'slide-arrow-prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.addEventListener('click', () => scrollSlide('left'));

  const nextBtn = document.createElement('button');
  nextBtn.className = 'slide-arrow';
  nextBtn.id = 'slide-arrow-next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.addEventListener('click', () => scrollSlide('right'));
  
  const home = document.createElement('div');
  home.className = 'home';
  home.append(prevBtn, nextBtn, slideContainer);

  main.append(home);

  initializeSlides();
}

let isSlidesNotYetInitialized = true;

function initializeSlides() {
  if (isSlidesNotYetInitialized) {
    animateSlides();
    isSlidesNotYetInitialized = false;
  }
}

function animateSlides() {
  const items = (0,_items_js__WEBPACK_IMPORTED_MODULE_0__.getItems)();
  let count = 1;

  setInterval(() => {
    const home = document.querySelector('.home');
    if (home) {
      if (count < items.length) {
        scrollSlide('right');
        count = count + 1;
      } else {
        resetSlides();
        count = 1;
      }
    } else {
      count = 1;
    }
  }, 8000);
}

function scrollSlide(direction) {
  const slideContainer = document.getElementById('slide-container');
  const slide = document.querySelector('.slide');
  const slideWidth = slide.clientWidth;
  if (direction === 'right') {
    slideContainer.scrollLeft += slideWidth
  } else if (direction === 'left') {
    slideContainer.scrollLeft -= slideWidth
  };
}

function resetSlides() {
  const slideContainer = document.getElementById('slide-container');
  const slide = document.querySelector('.slide');
  const slideCount = slideContainer.childNodes.length;
  const slideWidth = slide.clientWidth * slideCount;
  slideContainer.scrollLeft -= slideWidth;
}

function appendSlides(container) {
  const items = (0,_items_js__WEBPACK_IMPORTED_MODULE_0__.getItems)();
  
  items.forEach((item) => {
    const slide = buildSlide(item);
    container.append(slide);
  });
}

function buildSlide(item) {
  const termElement = document.createElement('h1');
  termElement.className = 'term';
  termElement.textContent = item.name;

  const descElement = document.createElement('p');
  descElement.className = 'description';
  descElement.textContent = item.definition;

  const defElement = document.createElement('div');
  defElement.className = 'definition';
  defElement.append(termElement, descElement);

  const slideElement = document.createElement('div');
  slideElement.className = 'slide';
  slideElement.append(defElement);

  return slideElement;
}

/***/ }),

/***/ "./src/img sync recursive ^\\.\\/.*\\.jpg$":
/*!*************************************!*\
  !*** ./src/img/ sync ^\.\/.*\.jpg$ ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./adobo.jpg": "./src/img/adobo.jpg",
	"./balbacua.jpg": "./src/img/balbacua.jpg",
	"./dinuguan.jpg": "./src/img/dinuguan.jpg",
	"./humba.jpg": "./src/img/humba.jpg",
	"./kaldereta.jpg": "./src/img/kaldereta.jpg",
	"./kare-kare.jpg": "./src/img/kare-kare.jpg",
	"./laing.jpg": "./src/img/laing.jpg",
	"./nilaga.jpg": "./src/img/nilaga.jpg",
	"./papaitan.jpg": "./src/img/papaitan.jpg",
	"./pinakbet.jpg": "./src/img/pinakbet.jpg",
	"./sinigang.jpg": "./src/img/sinigang.jpg",
	"./tinola.jpg": "./src/img/tinola.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync recursive ^\\.\\/.*\\.jpg$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");



(0,_main__WEBPACK_IMPORTED_MODULE_1__.buildMain)();

/***/ }),

/***/ "./src/items.js":
/*!**********************!*\
  !*** ./src/items.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItems": () => (/* binding */ getItems)
/* harmony export */ });


function getItems() {
  return [
    {
      name: 'Kare-Kare',
      price: 90.00,
      definition: `Kare-kare is a Philippine stew that features a thick savory 
        peanut sauce. It is generally made from a base of stewed oxtail, beef 
        tripe, pork hocks, calves' feet, pig's feet or trotters, various cuts 
        of pork, beef stew meat, and occasionally offal.`
    },
    {
      name: 'Sinigang',
      price: 70.00,
      definition: `Sinigang is a Filipino soup or stew characterized by its sour 
        and savory taste. It is most often associated with tamarind, although it 
        can use other sour fruits and leaves as the souring agent. It is one of 
        the more popular dishes in Filipino cuisine.`
    },
    {
      name: 'Adobo',
      price: 50.00,
      definition: `Adobo is a popular Filipino dish that involves meat, seafood, 
        or vegetables marinated in vinegar, soy sauce, garlic, bay leaves, and 
        black peppercorns, which is browned in oil, and simmered in the marinade.`
    },
    {
      name: 'Balbacua',
      price: 40.00,
      definition: `Balbacua is a Filipino beef stew made from beef, collagen-rich 
        beef parts (oxtail, skin, and joints), and various spices cooked for 
        several hours until very tender. It is typically served with white rice 
        or misua or miki noodles.`
    },
    {
      name: 'Dinuguan',
      price: 45.00,
      definition: `Dinuguan is a Filipino savory stew usually of pork offal 
        (typically lungs, kidneys, intestines, ears, heart and snout) and/or 
        meat simmered in a rich, spicy dark gravy of pig blood, garlic, chili 
        (most often siling haba), and vinegar.`
    },
    {
      name: 'Humba',
      price: 50.00,
      definition: `Humba is a Filipino braised pork dish. It traditionally 
        uses pork belly slow-cooked until very tender in soy sauce, vinegar, 
        black peppercorns, garlic, bay leaves, and fermented black beans (tausi) 
        sweetened with muscovado sugar.`
    },
    {
      name: 'Kaldereta',
      price: 80.00,
      definition: `Kaldereta meat stew from the Philippines. Variations of the 
        dish use beef, chicken, pork, or goat meat. Commonly, the meat is stewed 
        with vegetables and liver paste. Vegetables may include tomatoes, potatoes, 
        olives, bell peppers, and hot peppers.`
    },
    {
      name: 'Laing',
      price: 40.00,
      definition: `Laing, is a Filipino dish of shredded or whole taro leaves 
        with meat or seafood cooked in thick coconut milk spiced with labuyo 
        chili, lemongrass, garlic, shallots, ginger, and shrimp paste.`
    },
    {
      name: 'Nilaga',
      price: 70.00,
      definition: `Nilaga is a traditional meat stew or soup from the Philippines, 
        made with boiled beef or pork mixed with various vegetables. It is typically 
        eaten with white rice and is served with soy sauce, patis, labuyo chilis, 
        and calamansi on the side.`
    },
    {
      name: 'Papaitan',
      price: 60.00,
      definition: `Papaitan is a Filipino soup which consists of goat or cow innards, 
        simmered alongside various spices. The most important part of the dish is bile 
        - a bitter liquid extracted from animal livers, giving the soup its distinctive 
        sour flavor and a light yellow color.`
    },
    {
      name: 'Pinakbet',
      price: 45.00,
      definition: `Pinakbet is a Filipino dish made from mixed vegetables sautéed 
        in fish or shrimp sauce. The dish usually includes bitter melon. Other 
        vegetables used include eggplant, tomato, okra, string beans, chili peppers, 
        parda, winged beans, and others.`
    },
    {
      name: 'Tinola',
      price: 50.00,
      definition: `Tinola is a hearty Filipino soup prepared with a flavorful broth 
        infused with garlic, ginger, and fish sauce. Most commonly, the soups are made 
        with chicken, but pork and seafood varieties are also popular.`
    }
  ]
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildMain": () => (/* binding */ buildMain)
/* harmony export */ });
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");






let isMainNotYetBuilt = true;

function buildMain() {
  if (isMainNotYetBuilt) {
    const homeNav = document.createElement('li');
    homeNav.className = 'home-nav';
    homeNav.textContent = 'Home';
    homeNav.ariaSelected = 'true';

    const menuNav = document.createElement('li');
    menuNav.className = 'menu-nav';
    menuNav.textContent = 'Menu';

    const aboutNav = document.createElement('li');
    aboutNav.className = 'about-nav';
    aboutNav.textContent = 'About';

    const nav = document.createElement('ul');
    nav.className = 'nav';
    nav.append(homeNav, menuNav, aboutNav);

    const logo = document.createElement('p');
    logo.className = 'logo';
    logo.textContent = 'Yang′s';

    const header = document.createElement('div');
    header.className = 'header';
    header.append(logo, nav);

    const main = document.createElement('div');
    main.className = 'main';

    const content = document.querySelector('#content');
    content.append(header, main);

    addEventListeners();
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.buildHomepage)();

    isMainNotYetBuilt = false;
  }
}

function addEventListeners() {
  const home = document.querySelector('.home-nav');
  const menu = document.querySelector('.menu-nav');
  const about = document.querySelector('.about-nav');
  
  home.addEventListener('click', () => {
    selectNav(home);
    (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.buildHomepage)();
  });
  menu.addEventListener('click', () => {
    selectNav(menu);
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.buildMenu)();
  });
  about.addEventListener('click', () => {
    selectNav(about);
    (0,_about_js__WEBPACK_IMPORTED_MODULE_2__.buildAbout)();
  })
}

function selectNav(nav) {
  const selectedNav = document.querySelector('.nav [aria-selected="true"]');
  selectedNav.ariaSelected = false;
  nav.ariaSelected = true;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildMenu": () => (/* binding */ buildMenu)
/* harmony export */ });
/* harmony import */ var _items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.js */ "./src/items.js");




function buildMenu() {
  const main = document.querySelector('.main');
  main.childNodes.forEach(child => child.remove());

  const menu = document.createElement('div');
  menu.className = 'menu';
  appendItems(menu);

  main.append(menu);
}

function appendItems(menu) {
  const items = (0,_items_js__WEBPACK_IMPORTED_MODULE_0__.getItems)();

  items.forEach(item => {
    const itemElement = buildItem(item);
    menu.append(itemElement);
  });
}

function buildItem(item) {
  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = item.name;

  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = `P${item.price.toFixed(2)}`;
  
  const detail = document.createElement('div');
  detail.className = 'detail';
  detail.append(name, price);

  const img = document.createElement('img');
  img.className = 'image';
  img.alt = item.name;
  img.src = __webpack_require__("./src/img sync recursive ^\\.\\/.*\\.jpg$")(`./${item.name.toLowerCase()}.jpg`);

  const itemElement = document.createElement('div');
  itemElement.className = 'item';
  itemElement.append(detail, img);

  return itemElement;
}

/***/ }),

/***/ "./src/img/adobo.jpg":
/*!***************************!*\
  !*** ./src/img/adobo.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "db71f29679bafe6bbd43.jpg";

/***/ }),

/***/ "./src/img/balbacua.jpg":
/*!******************************!*\
  !*** ./src/img/balbacua.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4f00910485b8a33a66d7.jpg";

/***/ }),

/***/ "./src/img/dinuguan.jpg":
/*!******************************!*\
  !*** ./src/img/dinuguan.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0c5298f85adaff1cc266.jpg";

/***/ }),

/***/ "./src/img/humba.jpg":
/*!***************************!*\
  !*** ./src/img/humba.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "531545765c56ecd98287.jpg";

/***/ }),

/***/ "./src/img/kaldereta.jpg":
/*!*******************************!*\
  !*** ./src/img/kaldereta.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d5a554e11a460d082546.jpg";

/***/ }),

/***/ "./src/img/kare-kare.jpg":
/*!*******************************!*\
  !*** ./src/img/kare-kare.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e9661573dc328b370cd6.jpg";

/***/ }),

/***/ "./src/img/laing.jpg":
/*!***************************!*\
  !*** ./src/img/laing.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "765e10fa7db83972e032.jpg";

/***/ }),

/***/ "./src/img/nilaga.jpg":
/*!****************************!*\
  !*** ./src/img/nilaga.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "38034c09e463a2e63c1a.jpg";

/***/ }),

/***/ "./src/img/papaitan.jpg":
/*!******************************!*\
  !*** ./src/img/papaitan.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "708435447ba3bb21da11.jpg";

/***/ }),

/***/ "./src/img/pinakbet.jpg":
/*!******************************!*\
  !*** ./src/img/pinakbet.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "166f2330213ccf5f0b83.jpg";

/***/ }),

/***/ "./src/img/sinigang.jpg":
/*!******************************!*\
  !*** ./src/img/sinigang.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4beb3eb02b22eb318050.jpg";

/***/ }),

/***/ "./src/img/tinola.jpg":
/*!****************************!*\
  !*** ./src/img/tinola.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a218fe36b19435f682f2.jpg";

/***/ }),

/***/ "./src/main-bg.jpg":
/*!*************************!*\
  !*** ./src/main-bg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe6d19b20659c1cbbb58.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1EQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzQkFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQVEsR0FBTyxFQUFFLHdCQUF3QixLQUFLLENBQUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbWcvIHN5bmMgXlxcLlxcLy4qXFwuanBnJCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2l0ZW1zLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21haW4tYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUludGVyOjUwMCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Vm9sbGtvcm46OTAwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0taGVhZGVyOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAtLW1haW46IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIC0tbmF2LWhpZ2hsaWdodDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgLS10cmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gIC0tYmx1cjogYmx1cigxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIm1haW5cXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlcik7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJsdXIpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMHB4IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdWb2xsa29ybicsIHNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGxpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS10cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYgbGk6aG92ZXIge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW5hdi1oaWdobGlnaHQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IGxpW2FyaWEtc2VsZWN0ZWQ9J3RydWUnXSB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmF2LWhpZ2hsaWdodCk7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGdyaWQtYXJlYTogbWFpbjtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUge1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGZsZXg6IDEgMCAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmluaXRpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJsdXIpO1xcclxcbiAgd2lkdGg6IDcwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWZpbml0aW9uIC50ZXJtIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVm9sbGtvcm4nLCBzZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmluaXRpb24gLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUtYXJyb3cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcztcXHJcXG59XFxyXFxuLnNsaWRlLWFycm93OmhvdmVyLFxcclxcbi5zbGlkZS1hcnJvdzpmb2N1cyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4jc2xpZGUtYXJyb3ctcHJldiB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAycmVtIDJyZW0gMDtcXHJcXG59XFxyXFxuI3NsaWRlLWFycm93LW5leHQge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtIDAgMCAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcGFkZGluZzogOTBweCAyMHB4IDIwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJsdXIpO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC5kZXRhaWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAubmFtZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LWZhbWlseTogVm9sbGtvcm4sIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAucHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC5pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmx1cik7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50cnkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdWb2xsa29ybicsIHNlcmlmO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCO1VBQ1E7QUFDVjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixtREFBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGFBQWE7RUFDYixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixNQUFNO0VBQ04sU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsT0FBTztFQUNQLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFFBQVE7RUFDUixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtFQUN4Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUludGVyOjUwMCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Vm9sbGtvcm46OTAwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1oZWFkZXI6IHJnYmEoMCwgMCwgMCwgMC42KTtcXHJcXG4gIC0tbWFpbjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgLS1uYXYtaGlnaGxpZ2h0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAtLXRyYW5zcGFyZW50OiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgLS1ibHVyOiBibHVyKDEwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXHJcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwibWFpblxcXCI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmx1cik7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAwcHggMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBmb250LWZhbWlseTogJ1ZvbGxrb3JuJywgc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbi5uYXYgbGkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRyYW5zcGFyZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdiBsaTpob3ZlciB7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmF2LWhpZ2hsaWdodCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYgbGlbYXJpYS1zZWxlY3RlZD0ndHJ1ZSddIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1uYXYtaGlnaGxpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgZ3JpZC1hcmVhOiBtYWluO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCcuL21haW4tYmcuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUge1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGZsZXg6IDEgMCAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmluaXRpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJsdXIpO1xcclxcbiAgd2lkdGg6IDcwMHB4O1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZWZpbml0aW9uIC50ZXJtIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVm9sbGtvcm4nLCBzZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlZmluaXRpb24gLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUtYXJyb3cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGhlaWdodDogNHJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcztcXHJcXG59XFxyXFxuLnNsaWRlLWFycm93OmhvdmVyLFxcclxcbi5zbGlkZS1hcnJvdzpmb2N1cyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG4jc2xpZGUtYXJyb3ctcHJldiB7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAycmVtIDJyZW0gMDtcXHJcXG59XFxyXFxuI3NsaWRlLWFycm93LW5leHQge1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtIDAgMCAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgcGFkZGluZzogOTBweCAyMHB4IDIwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLWJsdXIpO1xcclxcbiAgd2lkdGg6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC5kZXRhaWwge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAubmFtZSB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LWZhbWlseTogVm9sbGtvcm4sIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbSAucHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5pdGVtIC5pbWFnZSB7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tYmx1cik7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdW50cnkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdWb2xsa29ybicsIHNlcmlmO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IGJ1aWxkQWJvdXQgfTtcclxuXHJcbmZ1bmN0aW9uIGJ1aWxkQWJvdXQoKSB7XHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgbWFpbi5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucmVtb3ZlKCkpO1xyXG5cclxuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gIGNvdW50cnkuY2xhc3NOYW1lID0gJ2NvdW50cnknO1xyXG4gIGNvdW50cnkudGV4dENvbnRlbnQgPSAnUGhpbGlwcGluZXMnO1xyXG5cclxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBhYm91dC5jbGFzc05hbWUgPSAnYWJvdXQnO1xyXG4gIGFib3V0LnRleHRDb250ZW50ID0gJ01hZGUgd2l0aCDinaTvuI8gZnJvbSB0aGUgJztcclxuICBhYm91dC5hcHBlbmQoY291bnRyeSk7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29udGFjdC5jbGFzc05hbWUgPSAnY29udGFjdCc7XHJcbiAgY29udGFjdC50ZXh0Q29udGVudCA9ICd2aWxsaWFtcm9zZUBnbWFpbC5jb20nO1xyXG4gIFxyXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjYXJkLmNsYXNzTmFtZSA9ICdjYXJkJztcclxuICBjYXJkLmFwcGVuZChhYm91dCwgY29udGFjdCk7XHJcbiAgXHJcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gIG1haW5FbGVtZW50LmFwcGVuZChjYXJkKTtcclxufSIsImltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi9pdGVtcy5qcyc7XHJcblxyXG5leHBvcnQgeyBidWlsZEhvbWVwYWdlIH07XHJcblxyXG5mdW5jdGlvbiBidWlsZEhvbWVwYWdlKCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gIG1haW4uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnJlbW92ZSgpKTtcclxuXHJcbiAgY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzbGlkZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2xpZGUtY29udGFpbmVyJztcclxuICBzbGlkZUNvbnRhaW5lci5pZCA9ICdzbGlkZS1jb250YWluZXInO1xyXG4gIGFwcGVuZFNsaWRlcyhzbGlkZUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBwcmV2QnRuLmNsYXNzTmFtZSA9ICdzbGlkZS1hcnJvdyc7XHJcbiAgcHJldkJ0bi5pZCA9ICdzbGlkZS1hcnJvdy1wcmV2JztcclxuICBwcmV2QnRuLmlubmVySFRNTCA9ICcmIzgyNDk7JztcclxuICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsU2xpZGUoJ2xlZnQnKSk7XHJcblxyXG4gIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBuZXh0QnRuLmNsYXNzTmFtZSA9ICdzbGlkZS1hcnJvdyc7XHJcbiAgbmV4dEJ0bi5pZCA9ICdzbGlkZS1hcnJvdy1uZXh0JztcclxuICBuZXh0QnRuLmlubmVySFRNTCA9ICcmIzgyNTA7JztcclxuICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsU2xpZGUoJ3JpZ2h0JykpO1xyXG4gIFxyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob21lLmNsYXNzTmFtZSA9ICdob21lJztcclxuICBob21lLmFwcGVuZChwcmV2QnRuLCBuZXh0QnRuLCBzbGlkZUNvbnRhaW5lcik7XHJcblxyXG4gIG1haW4uYXBwZW5kKGhvbWUpO1xyXG5cclxuICBpbml0aWFsaXplU2xpZGVzKCk7XHJcbn1cclxuXHJcbmxldCBpc1NsaWRlc05vdFlldEluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVTbGlkZXMoKSB7XHJcbiAgaWYgKGlzU2xpZGVzTm90WWV0SW5pdGlhbGl6ZWQpIHtcclxuICAgIGFuaW1hdGVTbGlkZXMoKTtcclxuICAgIGlzU2xpZGVzTm90WWV0SW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVTbGlkZXMoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBnZXRJdGVtcygpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcblxyXG4gIHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG4gICAgaWYgKGhvbWUpIHtcclxuICAgICAgaWYgKGNvdW50IDwgaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgc2Nyb2xsU2xpZGUoJ3JpZ2h0Jyk7XHJcbiAgICAgICAgY291bnQgPSBjb3VudCArIDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzZXRTbGlkZXMoKTtcclxuICAgICAgICBjb3VudCA9IDE7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvdW50ID0gMTtcclxuICAgIH1cclxuICB9LCA4MDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsU2xpZGUoZGlyZWN0aW9uKSB7XHJcbiAgY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGUtY29udGFpbmVyJyk7XHJcbiAgY29uc3Qgc2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUnKTtcclxuICBjb25zdCBzbGlkZVdpZHRoID0gc2xpZGUuY2xpZW50V2lkdGg7XHJcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgc2xpZGVDb250YWluZXIuc2Nyb2xsTGVmdCArPSBzbGlkZVdpZHRoXHJcbiAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgc2xpZGVDb250YWluZXIuc2Nyb2xsTGVmdCAtPSBzbGlkZVdpZHRoXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRTbGlkZXMoKSB7XHJcbiAgY29uc3Qgc2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGUtY29udGFpbmVyJyk7XHJcbiAgY29uc3Qgc2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUnKTtcclxuICBjb25zdCBzbGlkZUNvdW50ID0gc2xpZGVDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGg7XHJcbiAgY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlLmNsaWVudFdpZHRoICogc2xpZGVDb3VudDtcclxuICBzbGlkZUNvbnRhaW5lci5zY3JvbGxMZWZ0IC09IHNsaWRlV2lkdGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZFNsaWRlcyhjb250YWluZXIpIHtcclxuICBjb25zdCBpdGVtcyA9IGdldEl0ZW1zKCk7XHJcbiAgXHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3Qgc2xpZGUgPSBidWlsZFNsaWRlKGl0ZW0pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZChzbGlkZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkU2xpZGUoaXRlbSkge1xyXG4gIGNvbnN0IHRlcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICB0ZXJtRWxlbWVudC5jbGFzc05hbWUgPSAndGVybSc7XHJcbiAgdGVybUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcblxyXG4gIGNvbnN0IGRlc2NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGRlc2NFbGVtZW50LmNsYXNzTmFtZSA9ICdkZXNjcmlwdGlvbic7XHJcbiAgZGVzY0VsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLmRlZmluaXRpb247XHJcblxyXG4gIGNvbnN0IGRlZkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkZWZFbGVtZW50LmNsYXNzTmFtZSA9ICdkZWZpbml0aW9uJztcclxuICBkZWZFbGVtZW50LmFwcGVuZCh0ZXJtRWxlbWVudCwgZGVzY0VsZW1lbnQpO1xyXG5cclxuICBjb25zdCBzbGlkZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBzbGlkZUVsZW1lbnQuY2xhc3NOYW1lID0gJ3NsaWRlJztcclxuICBzbGlkZUVsZW1lbnQuYXBwZW5kKGRlZkVsZW1lbnQpO1xyXG5cclxuICByZXR1cm4gc2xpZGVFbGVtZW50O1xyXG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2Fkb2JvLmpwZ1wiOiBcIi4vc3JjL2ltZy9hZG9iby5qcGdcIixcblx0XCIuL2JhbGJhY3VhLmpwZ1wiOiBcIi4vc3JjL2ltZy9iYWxiYWN1YS5qcGdcIixcblx0XCIuL2RpbnVndWFuLmpwZ1wiOiBcIi4vc3JjL2ltZy9kaW51Z3Vhbi5qcGdcIixcblx0XCIuL2h1bWJhLmpwZ1wiOiBcIi4vc3JjL2ltZy9odW1iYS5qcGdcIixcblx0XCIuL2thbGRlcmV0YS5qcGdcIjogXCIuL3NyYy9pbWcva2FsZGVyZXRhLmpwZ1wiLFxuXHRcIi4va2FyZS1rYXJlLmpwZ1wiOiBcIi4vc3JjL2ltZy9rYXJlLWthcmUuanBnXCIsXG5cdFwiLi9sYWluZy5qcGdcIjogXCIuL3NyYy9pbWcvbGFpbmcuanBnXCIsXG5cdFwiLi9uaWxhZ2EuanBnXCI6IFwiLi9zcmMvaW1nL25pbGFnYS5qcGdcIixcblx0XCIuL3BhcGFpdGFuLmpwZ1wiOiBcIi4vc3JjL2ltZy9wYXBhaXRhbi5qcGdcIixcblx0XCIuL3BpbmFrYmV0LmpwZ1wiOiBcIi4vc3JjL2ltZy9waW5ha2JldC5qcGdcIixcblx0XCIuL3NpbmlnYW5nLmpwZ1wiOiBcIi4vc3JjL2ltZy9zaW5pZ2FuZy5qcGdcIixcblx0XCIuL3Rpbm9sYS5qcGdcIjogXCIuL3NyYy9pbWcvdGlub2xhLmpwZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWcgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanBnJFwiOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBidWlsZE1haW4gfSBmcm9tICcuL21haW4nO1xyXG5cclxuYnVpbGRNYWluKCk7IiwiZXhwb3J0IHsgZ2V0SXRlbXMgfVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbXMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0thcmUtS2FyZScsXHJcbiAgICAgIHByaWNlOiA5MC4wMCxcclxuICAgICAgZGVmaW5pdGlvbjogYEthcmUta2FyZSBpcyBhIFBoaWxpcHBpbmUgc3RldyB0aGF0IGZlYXR1cmVzIGEgdGhpY2sgc2F2b3J5IFxyXG4gICAgICAgIHBlYW51dCBzYXVjZS4gSXQgaXMgZ2VuZXJhbGx5IG1hZGUgZnJvbSBhIGJhc2Ugb2Ygc3Rld2VkIG94dGFpbCwgYmVlZiBcclxuICAgICAgICB0cmlwZSwgcG9yayBob2NrcywgY2FsdmVzJyBmZWV0LCBwaWcncyBmZWV0IG9yIHRyb3R0ZXJzLCB2YXJpb3VzIGN1dHMgXHJcbiAgICAgICAgb2YgcG9yaywgYmVlZiBzdGV3IG1lYXQsIGFuZCBvY2Nhc2lvbmFsbHkgb2ZmYWwuYFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1NpbmlnYW5nJyxcclxuICAgICAgcHJpY2U6IDcwLjAwLFxyXG4gICAgICBkZWZpbml0aW9uOiBgU2luaWdhbmcgaXMgYSBGaWxpcGlubyBzb3VwIG9yIHN0ZXcgY2hhcmFjdGVyaXplZCBieSBpdHMgc291ciBcclxuICAgICAgICBhbmQgc2F2b3J5IHRhc3RlLiBJdCBpcyBtb3N0IG9mdGVuIGFzc29jaWF0ZWQgd2l0aCB0YW1hcmluZCwgYWx0aG91Z2ggaXQgXHJcbiAgICAgICAgY2FuIHVzZSBvdGhlciBzb3VyIGZydWl0cyBhbmQgbGVhdmVzIGFzIHRoZSBzb3VyaW5nIGFnZW50LiBJdCBpcyBvbmUgb2YgXHJcbiAgICAgICAgdGhlIG1vcmUgcG9wdWxhciBkaXNoZXMgaW4gRmlsaXBpbm8gY3Vpc2luZS5gXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnQWRvYm8nLFxyXG4gICAgICBwcmljZTogNTAuMDAsXHJcbiAgICAgIGRlZmluaXRpb246IGBBZG9ibyBpcyBhIHBvcHVsYXIgRmlsaXBpbm8gZGlzaCB0aGF0IGludm9sdmVzIG1lYXQsIHNlYWZvb2QsIFxyXG4gICAgICAgIG9yIHZlZ2V0YWJsZXMgbWFyaW5hdGVkIGluIHZpbmVnYXIsIHNveSBzYXVjZSwgZ2FybGljLCBiYXkgbGVhdmVzLCBhbmQgXHJcbiAgICAgICAgYmxhY2sgcGVwcGVyY29ybnMsIHdoaWNoIGlzIGJyb3duZWQgaW4gb2lsLCBhbmQgc2ltbWVyZWQgaW4gdGhlIG1hcmluYWRlLmBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdCYWxiYWN1YScsXHJcbiAgICAgIHByaWNlOiA0MC4wMCxcclxuICAgICAgZGVmaW5pdGlvbjogYEJhbGJhY3VhIGlzIGEgRmlsaXBpbm8gYmVlZiBzdGV3IG1hZGUgZnJvbSBiZWVmLCBjb2xsYWdlbi1yaWNoIFxyXG4gICAgICAgIGJlZWYgcGFydHMgKG94dGFpbCwgc2tpbiwgYW5kIGpvaW50cyksIGFuZCB2YXJpb3VzIHNwaWNlcyBjb29rZWQgZm9yIFxyXG4gICAgICAgIHNldmVyYWwgaG91cnMgdW50aWwgdmVyeSB0ZW5kZXIuIEl0IGlzIHR5cGljYWxseSBzZXJ2ZWQgd2l0aCB3aGl0ZSByaWNlIFxyXG4gICAgICAgIG9yIG1pc3VhIG9yIG1pa2kgbm9vZGxlcy5gXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRGludWd1YW4nLFxyXG4gICAgICBwcmljZTogNDUuMDAsXHJcbiAgICAgIGRlZmluaXRpb246IGBEaW51Z3VhbiBpcyBhIEZpbGlwaW5vIHNhdm9yeSBzdGV3IHVzdWFsbHkgb2YgcG9yayBvZmZhbCBcclxuICAgICAgICAodHlwaWNhbGx5IGx1bmdzLCBraWRuZXlzLCBpbnRlc3RpbmVzLCBlYXJzLCBoZWFydCBhbmQgc25vdXQpIGFuZC9vciBcclxuICAgICAgICBtZWF0IHNpbW1lcmVkIGluIGEgcmljaCwgc3BpY3kgZGFyayBncmF2eSBvZiBwaWcgYmxvb2QsIGdhcmxpYywgY2hpbGkgXHJcbiAgICAgICAgKG1vc3Qgb2Z0ZW4gc2lsaW5nIGhhYmEpLCBhbmQgdmluZWdhci5gXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnSHVtYmEnLFxyXG4gICAgICBwcmljZTogNTAuMDAsXHJcbiAgICAgIGRlZmluaXRpb246IGBIdW1iYSBpcyBhIEZpbGlwaW5vIGJyYWlzZWQgcG9yayBkaXNoLiBJdCB0cmFkaXRpb25hbGx5IFxyXG4gICAgICAgIHVzZXMgcG9yayBiZWxseSBzbG93LWNvb2tlZCB1bnRpbCB2ZXJ5IHRlbmRlciBpbiBzb3kgc2F1Y2UsIHZpbmVnYXIsIFxyXG4gICAgICAgIGJsYWNrIHBlcHBlcmNvcm5zLCBnYXJsaWMsIGJheSBsZWF2ZXMsIGFuZCBmZXJtZW50ZWQgYmxhY2sgYmVhbnMgKHRhdXNpKSBcclxuICAgICAgICBzd2VldGVuZWQgd2l0aCBtdXNjb3ZhZG8gc3VnYXIuYFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0thbGRlcmV0YScsXHJcbiAgICAgIHByaWNlOiA4MC4wMCxcclxuICAgICAgZGVmaW5pdGlvbjogYEthbGRlcmV0YSBtZWF0IHN0ZXcgZnJvbSB0aGUgUGhpbGlwcGluZXMuIFZhcmlhdGlvbnMgb2YgdGhlIFxyXG4gICAgICAgIGRpc2ggdXNlIGJlZWYsIGNoaWNrZW4sIHBvcmssIG9yIGdvYXQgbWVhdC4gQ29tbW9ubHksIHRoZSBtZWF0IGlzIHN0ZXdlZCBcclxuICAgICAgICB3aXRoIHZlZ2V0YWJsZXMgYW5kIGxpdmVyIHBhc3RlLiBWZWdldGFibGVzIG1heSBpbmNsdWRlIHRvbWF0b2VzLCBwb3RhdG9lcywgXHJcbiAgICAgICAgb2xpdmVzLCBiZWxsIHBlcHBlcnMsIGFuZCBob3QgcGVwcGVycy5gXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnTGFpbmcnLFxyXG4gICAgICBwcmljZTogNDAuMDAsXHJcbiAgICAgIGRlZmluaXRpb246IGBMYWluZywgaXMgYSBGaWxpcGlubyBkaXNoIG9mIHNocmVkZGVkIG9yIHdob2xlIHRhcm8gbGVhdmVzIFxyXG4gICAgICAgIHdpdGggbWVhdCBvciBzZWFmb29kIGNvb2tlZCBpbiB0aGljayBjb2NvbnV0IG1pbGsgc3BpY2VkIHdpdGggbGFidXlvIFxyXG4gICAgICAgIGNoaWxpLCBsZW1vbmdyYXNzLCBnYXJsaWMsIHNoYWxsb3RzLCBnaW5nZXIsIGFuZCBzaHJpbXAgcGFzdGUuYFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ05pbGFnYScsXHJcbiAgICAgIHByaWNlOiA3MC4wMCxcclxuICAgICAgZGVmaW5pdGlvbjogYE5pbGFnYSBpcyBhIHRyYWRpdGlvbmFsIG1lYXQgc3RldyBvciBzb3VwIGZyb20gdGhlIFBoaWxpcHBpbmVzLCBcclxuICAgICAgICBtYWRlIHdpdGggYm9pbGVkIGJlZWYgb3IgcG9yayBtaXhlZCB3aXRoIHZhcmlvdXMgdmVnZXRhYmxlcy4gSXQgaXMgdHlwaWNhbGx5IFxyXG4gICAgICAgIGVhdGVuIHdpdGggd2hpdGUgcmljZSBhbmQgaXMgc2VydmVkIHdpdGggc295IHNhdWNlLCBwYXRpcywgbGFidXlvIGNoaWxpcywgXHJcbiAgICAgICAgYW5kIGNhbGFtYW5zaSBvbiB0aGUgc2lkZS5gXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUGFwYWl0YW4nLFxyXG4gICAgICBwcmljZTogNjAuMDAsXHJcbiAgICAgIGRlZmluaXRpb246IGBQYXBhaXRhbiBpcyBhIEZpbGlwaW5vIHNvdXAgd2hpY2ggY29uc2lzdHMgb2YgZ29hdCBvciBjb3cgaW5uYXJkcywgXHJcbiAgICAgICAgc2ltbWVyZWQgYWxvbmdzaWRlIHZhcmlvdXMgc3BpY2VzLiBUaGUgbW9zdCBpbXBvcnRhbnQgcGFydCBvZiB0aGUgZGlzaCBpcyBiaWxlIFxyXG4gICAgICAgIC0gYSBiaXR0ZXIgbGlxdWlkIGV4dHJhY3RlZCBmcm9tIGFuaW1hbCBsaXZlcnMsIGdpdmluZyB0aGUgc291cCBpdHMgZGlzdGluY3RpdmUgXHJcbiAgICAgICAgc291ciBmbGF2b3IgYW5kIGEgbGlnaHQgeWVsbG93IGNvbG9yLmBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdQaW5ha2JldCcsXHJcbiAgICAgIHByaWNlOiA0NS4wMCxcclxuICAgICAgZGVmaW5pdGlvbjogYFBpbmFrYmV0IGlzIGEgRmlsaXBpbm8gZGlzaCBtYWRlIGZyb20gbWl4ZWQgdmVnZXRhYmxlcyBzYXV0w6llZCBcclxuICAgICAgICBpbiBmaXNoIG9yIHNocmltcCBzYXVjZS4gVGhlIGRpc2ggdXN1YWxseSBpbmNsdWRlcyBiaXR0ZXIgbWVsb24uIE90aGVyIFxyXG4gICAgICAgIHZlZ2V0YWJsZXMgdXNlZCBpbmNsdWRlIGVnZ3BsYW50LCB0b21hdG8sIG9rcmEsIHN0cmluZyBiZWFucywgY2hpbGkgcGVwcGVycywgXHJcbiAgICAgICAgcGFyZGEsIHdpbmdlZCBiZWFucywgYW5kIG90aGVycy5gXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVGlub2xhJyxcclxuICAgICAgcHJpY2U6IDUwLjAwLFxyXG4gICAgICBkZWZpbml0aW9uOiBgVGlub2xhIGlzIGEgaGVhcnR5IEZpbGlwaW5vIHNvdXAgcHJlcGFyZWQgd2l0aCBhIGZsYXZvcmZ1bCBicm90aCBcclxuICAgICAgICBpbmZ1c2VkIHdpdGggZ2FybGljLCBnaW5nZXIsIGFuZCBmaXNoIHNhdWNlLiBNb3N0IGNvbW1vbmx5LCB0aGUgc291cHMgYXJlIG1hZGUgXHJcbiAgICAgICAgd2l0aCBjaGlja2VuLCBidXQgcG9yayBhbmQgc2VhZm9vZCB2YXJpZXRpZXMgYXJlIGFsc28gcG9wdWxhci5gXHJcbiAgICB9XHJcbiAgXVxyXG59IiwiaW1wb3J0IHsgYnVpbGRIb21lcGFnZSB9IGZyb20gJy4vaG9tZXBhZ2UuanMnO1xyXG5pbXBvcnQgeyBidWlsZE1lbnUgfSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgeyBidWlsZEFib3V0IH0gZnJvbSAnLi9hYm91dC5qcyc7XHJcblxyXG5leHBvcnQgeyBidWlsZE1haW4gfTtcclxuXHJcbmxldCBpc01haW5Ob3RZZXRCdWlsdCA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiBidWlsZE1haW4oKSB7XHJcbiAgaWYgKGlzTWFpbk5vdFlldEJ1aWx0KSB7XHJcbiAgICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGhvbWVOYXYuY2xhc3NOYW1lID0gJ2hvbWUtbmF2JztcclxuICAgIGhvbWVOYXYudGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgICBob21lTmF2LmFyaWFTZWxlY3RlZCA9ICd0cnVlJztcclxuXHJcbiAgICBjb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIG1lbnVOYXYuY2xhc3NOYW1lID0gJ21lbnUtbmF2JztcclxuICAgIG1lbnVOYXYudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcblxyXG4gICAgY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgYWJvdXROYXYuY2xhc3NOYW1lID0gJ2Fib3V0LW5hdic7XHJcbiAgICBhYm91dE5hdi50ZXh0Q29udGVudCA9ICdBYm91dCc7XHJcblxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIG5hdi5jbGFzc05hbWUgPSAnbmF2JztcclxuICAgIG5hdi5hcHBlbmQoaG9tZU5hdiwgbWVudU5hdiwgYWJvdXROYXYpO1xyXG5cclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdsb2dvJztcclxuICAgIGxvZ28udGV4dENvbnRlbnQgPSAnWWFuZ+KAsnMnO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xyXG4gICAgaGVhZGVyLmFwcGVuZChsb2dvLCBuYXYpO1xyXG5cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1haW4uY2xhc3NOYW1lID0gJ21haW4nO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyLCBtYWluKTtcclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgYnVpbGRIb21lcGFnZSgpO1xyXG5cclxuICAgIGlzTWFpbk5vdFlldEJ1aWx0ID0gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtbmF2Jyk7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW5hdicpO1xyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0LW5hdicpO1xyXG4gIFxyXG4gIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzZWxlY3ROYXYoaG9tZSk7XHJcbiAgICBidWlsZEhvbWVwYWdlKCk7XHJcbiAgfSk7XHJcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHNlbGVjdE5hdihtZW51KTtcclxuICAgIGJ1aWxkTWVudSgpO1xyXG4gIH0pO1xyXG4gIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc2VsZWN0TmF2KGFib3V0KTtcclxuICAgIGJ1aWxkQWJvdXQoKTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3ROYXYobmF2KSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2IFthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXScpO1xyXG4gIHNlbGVjdGVkTmF2LmFyaWFTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIG5hdi5hcmlhU2VsZWN0ZWQgPSB0cnVlO1xyXG59IiwiaW1wb3J0IHsgZ2V0SXRlbXMgfSBmcm9tICcuL2l0ZW1zLmpzJztcclxuXHJcbmV4cG9ydCB7IGJ1aWxkTWVudSB9O1xyXG5cclxuZnVuY3Rpb24gYnVpbGRNZW51KCkge1xyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gIG1haW4uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnJlbW92ZSgpKTtcclxuXHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1lbnUuY2xhc3NOYW1lID0gJ21lbnUnO1xyXG4gIGFwcGVuZEl0ZW1zKG1lbnUpO1xyXG5cclxuICBtYWluLmFwcGVuZChtZW51KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kSXRlbXMobWVudSkge1xyXG4gIGNvbnN0IGl0ZW1zID0gZ2V0SXRlbXMoKTtcclxuXHJcbiAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gYnVpbGRJdGVtKGl0ZW0pO1xyXG4gICAgbWVudS5hcHBlbmQoaXRlbUVsZW1lbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZEl0ZW0oaXRlbSkge1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuYW1lLmNsYXNzTmFtZSA9ICduYW1lJztcclxuICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG5cclxuICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSc7XHJcbiAgcHJpY2UudGV4dENvbnRlbnQgPSBgUCR7aXRlbS5wcmljZS50b0ZpeGVkKDIpfWA7XHJcbiAgXHJcbiAgY29uc3QgZGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGV0YWlsLmNsYXNzTmFtZSA9ICdkZXRhaWwnO1xyXG4gIGRldGFpbC5hcHBlbmQobmFtZSwgcHJpY2UpO1xyXG5cclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBpbWcuY2xhc3NOYW1lID0gJ2ltYWdlJztcclxuICBpbWcuYWx0ID0gaXRlbS5uYW1lO1xyXG4gIGltZy5zcmMgPSByZXF1aXJlKGAuL2ltZy8ke2l0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpfS5qcGdgKTtcclxuXHJcbiAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBpdGVtRWxlbWVudC5jbGFzc05hbWUgPSAnaXRlbSc7XHJcbiAgaXRlbUVsZW1lbnQuYXBwZW5kKGRldGFpbCwgaW1nKTtcclxuXHJcbiAgcmV0dXJuIGl0ZW1FbGVtZW50O1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
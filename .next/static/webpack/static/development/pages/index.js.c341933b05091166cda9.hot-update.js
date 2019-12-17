webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/runner/components/Map.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AnyReactComponent = function AnyReactComponent(_ref) {
  var text = _ref.text;
  return __jsx("img", {
    src: "https://img.icons8.com/ios-glyphs/30/000000/kick-scooter.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  });
};

var Map = function Map(props) {
  var defaultProps = {
    center: {
      lat: 1.3607474,
      lng: 103.7986503
    },
    zoom: 10
  }; // Important! Always set the container height explicitly

  return __jsx("div", {
    style: {
      height: '100vh',
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyDj2btNw6ysoYKUb68lFis1Zrj1gROEKaU"
    },
    defaultCenter: defaultProps.center,
    defaultZoom: defaultProps.zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(AnyReactComponent, {
    lat: 1.3607474,
    lng: 103.7986503,
    text: "My Marker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })));
};

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/runner/components/Search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var Search = function Search(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Enter No. of Scooters",
    onChange: props.setNumberOfScooters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Enter Radius in KM",
    onChange: props.setRadius,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Enter Latitude",
    onChange: props.setLatitude,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Enter Longitude",
    onChange: props.setLongitude,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
var _jsxFileName = "/home/runner/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100),
      radius = _useState[0],
      setRadius = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      numberOfScooters = _useState2[0],
      setNumberOfScooters = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      latitude = _useState3[0],
      setLatitude = _useState3[1];

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_components_Search__WEBPACK_IMPORTED_MODULE_2__["Search"], {
    setRadius: setRadius,
    setNumberOfScooters: setNumberOfScooters,
    setCoordinates: setCoordinates,
    setLatitude: setLangitude,
    setLongitude: setLongitude,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_1__["Map"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.c341933b05091166cda9.hot-update.js.map
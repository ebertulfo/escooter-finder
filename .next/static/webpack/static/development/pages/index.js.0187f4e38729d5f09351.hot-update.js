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


var Scooter = function Scooter(_ref) {
  var text = _ref.text;
  return __jsx("div", {
    style: {
      height: "10px",
      width: "10px",
      border: "1px solid black"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("img", {
    src: "https://img.icons8.com/ios-glyphs/30/000000/kick-scooter.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
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
      lineNumber: 26
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
      lineNumber: 27
    },
    __self: this
  }, __jsx(Scooter, {
    lat: 1.3607474,
    lng: 103.7986503,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.0187f4e38729d5f09351.hot-update.js.map
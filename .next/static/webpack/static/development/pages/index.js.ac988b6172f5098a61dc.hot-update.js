webpackHotUpdate("static/development/pages/index.js",{

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
    onChange: function onChange(e) {
      return props.setNumberOfScooters(val.tar);
    },
    value: props.numberOfScooters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Enter Radius in KM",
    onChange: props.setRadius,
    value: props.radius,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Enter Latitude",
    onChange: props.setLatitude,
    value: props.latitude,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Enter Longitude",
    onChange: props.setLongitude,
    value: props.longitude,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.ac988b6172f5098a61dc.hot-update.js.map
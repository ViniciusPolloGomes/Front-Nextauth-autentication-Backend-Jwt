"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ DashBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/apiClient */ \"./services/apiClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction DashBoard() {\n    _s();\n    var user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext).user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _services_apiClient__WEBPACK_IMPORTED_MODULE_3__.api.get('/me').then(function(response) {\n            return console.log(response);\n        }).catch(function(err) {\n            return console.log(err);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            \"Dashboard: \",\n            user === null || user === void 0 ? void 0 : user.email\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this));\n};\n_s(DashBoard, \"JbBhDNbQxaOSU9sVqxopHRzBnnw=\");\n_c = DashBoard;\nvar _c;\n$RefreshReg$(_c, \"DashBoard\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDUTtBQUNSOzs7QUFLNUIsUUFBUSxDQUFDSSxTQUFTLEdBQUUsQ0FBQzs7SUFDaEMsR0FBSyxDQUFFQyxJQUFJLEdBQUlMLGlEQUFVLENBQUNFLDhEQUFXLEVBQTlCRyxJQUFJO0lBRVhKLGdEQUFTLENBQUMsUUFDYixHQURpQixDQUFDO1FBQ1pFLHdEQUFPLENBQUMsQ0FBSyxNQUFFSSxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsUUFBUTtZQUFJQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRO1dBQ2xERyxLQUFLLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztZQUFJSCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHOztJQUNqQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSw2RUFDREMsQ0FBRTs7WUFBQyxDQUFXO1lBQUNSLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFKQSxDQUFXLEdBQVhBLElBQUksQ0FBRVMsS0FBSzs7Ozs7OztBQUVuQyxDQUFDO0dBWHVCVixTQUFTO0tBQVRBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLnRzeD9kN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0F1dGhDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaUNsaWVudFwiO1xyXG5pbXBvcnQgeyB3aXRoU1NSQXV0aCB9IGZyb20gJy4vLi4vdXRpbHMvd2l0aFNTUkF1dGgnO1xyXG5pbXBvcnQgeyBzZXR1cEFwaUNsaWVudCB9IGZyb20gJy4vLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHsgQXV0aFRva2VuRXJyb3IgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2Vycm9yL0F1dGhUb2tlbkVycm9yJztcclxuIFxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoQm9hcmQoKXtcclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICBhcGkuZ2V0KCcvbWUnKS50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGgxPkRhc2hib2FyZDoge3VzZXI/LmVtYWlsfTwvaDE+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd2l0aFNTUkF1dGgoYXN5bmMgKGN0eCk9PiB7XHJcbiAgICBjb25zdCBhcGlDbGllbnQgPSBzZXR1cEFwaUNsaWVudChjdHgpXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQuZ2V0KCcvbWUnKTtcclxuICAgIH0gY2F0Y2ggKGVycil7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICBkZXN0cm95XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICByZWRpcmVjdDp7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy8nLFxyXG4gICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7fVxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiQXV0aENvbnRleHQiLCJhcGkiLCJEYXNoQm9hcmQiLCJ1c2VyIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiaDEiLCJlbWFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n");

/***/ })

});
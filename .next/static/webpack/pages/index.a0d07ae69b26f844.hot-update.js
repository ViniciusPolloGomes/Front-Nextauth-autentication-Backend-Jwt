"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/home.module.scss */ \"./styles/home.module.scss\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), password = ref1[0], setPassword = ref1[1];\n    var signIn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext).signIn;\n    function handleSubmit(event) {\n        return _handleSubmit.apply(this, arguments);\n    }\n    function _handleSubmit() {\n        _handleSubmit = _asyncToGenerator(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var data;\n            return C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        data = {\n                            email: email,\n                            password: password\n                        };\n                        _ctx.next = 4;\n                        return signIn(data);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _handleSubmit.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: function(e) {\n                    return setPassword(e.target.value);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Entrar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n};\n_s(Home, \"p6Gy69OpC/0EpRUhBUuwbTbnwpM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDQTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyxRQUFRLENBQUNJLElBQUksR0FBSSxDQUFDOztJQUM3QixHQUFLLENBQW9CSCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE3QkksS0FBSyxHQUFhSixHQUFZLEtBQXhCSyxRQUFRLEdBQUlMLEdBQVk7SUFDckMsR0FBSyxDQUEyQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBcENNLFFBQVEsR0FBaUJOLElBQVksS0FBM0JPLFdBQVcsR0FBSVAsSUFBWTtJQUU1QyxHQUFLLENBQUdRLE1BQU0sR0FBSVQsaURBQVUsQ0FBQ0UsOERBQVcsRUFBaENPLE1BQU07YUFDQ0MsWUFBWSxDQUFDQyxLQUFpQjtlQUE5QkQsYUFBWTs7YUFBWkEsYUFBWTtRQUFaQSxhQUFZLHdMQUEzQixRQUFRLFNBQW9CQyxLQUFpQixFQUFDLENBQUM7Z0JBR3JDQyxJQUFJOzs7O3dCQUZWRCxLQUFLLENBQUNFLGNBQWM7d0JBRWRELElBQUksR0FBQyxDQUFDOzRCQUNQUCxLQUFLLEVBQUxBLEtBQUs7NEJBQ0xFLFFBQVEsRUFBUkEsUUFBUTt3QkFDYixDQUFDOzsrQkFDS0UsTUFBTSxDQUFDRyxJQUFJOzs7Ozs7UUFDckIsQ0FBQztlQVJjRixhQUFZOztJQVUzQixNQUFNLDZFQUNESSxDQUFJO1FBQUNDLFFBQVEsRUFBRUwsWUFBWTtRQUFFTSxTQUFTLEVBQUViLDJFQUFnQjs7d0ZBQ3BEZSxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTztnQkFBQ0MsS0FBSyxFQUFFZixLQUFLO2dCQUFFZ0IsUUFBUSxFQUFFQyxRQUFRLENBQVJBLENBQUM7b0JBQUloQixNQUFNLENBQU5BLFFBQVEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7O3dGQUN2RUYsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQVU7Z0JBQUNDLEtBQUssRUFBRWIsUUFBUTtnQkFBRWMsUUFBUSxFQUFFQyxRQUFRLENBQVJBLENBQUM7b0JBQUlkLE1BQU0sQ0FBTkEsV0FBVyxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozt3RkFDaEZJLENBQU07Z0JBQUNMLElBQUksRUFBQyxDQUFROzBCQUFDLENBQU07Ozs7Ozs7Ozs7OztBQUl4QyxDQUFDO0dBdkJ1QmYsSUFBSTtLQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBGb3JtRXZlbnQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi8uLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSggKSB7XHJcbiAgICBjb25zdCBbZW1haWwsc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkICxzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuICAgIGNvbnN0ICB7c2lnbklufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50IDogRm9ybUV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhPXtcclxuICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IHNpZ25JbihkYXRhKTtcclxuICAgIH1cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9ID5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudHJhcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT4gXHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZXMgPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuXHJcbiAgICBpZihjb29raWVzWyduZXh0YXV0aC50b2tlbiddKXtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OntcclxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOicvZGFzaGJvYXJkJyxcclxuICAgICAgICAgICAgICAgIHBlcm1hbmVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwcm9wczp7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0Iiwic3R5bGVzIiwiSG9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2lnbkluIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});
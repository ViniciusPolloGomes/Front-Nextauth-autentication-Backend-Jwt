"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/apiClient */ \"./services/apiClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.token');\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.refreshToken');\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n}\nfunction AuthProvider(param1) {\n    var children = param1.children;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), user = ref1[0], setUser = ref1[1];\n    var isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(), token = ref['nextauth.token'];\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.get('/me').then(function(response) {\n                var _data = response.data, email = _data.email, permissions = _data.permissions, roles = _data.roles;\n                setUser({\n                    email: email,\n                    permissions: permissions,\n                    roles: roles\n                });\n            }).catch(function() {\n                if (process) {\n                    signOut();\n                }\n            });\n        }\n    }, []);\n    function signIn(_) {\n        return _signIn.apply(this, arguments);\n    }\n    function _signIn() {\n        _signIn = _asyncToGenerator(C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var email, password, response, _data, token, refreshToken, permissions, roles;\n            return C_Users_ADMIN_Desktop_rocketseat_nextauth_autentication_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = param.email, password = param.password;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.post('sessions', {\n                            email: email,\n                            password: password\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _data = response.data, token = _data.token, refreshToken = _data.refreshToken, permissions = _data.permissions, roles = _data.roles;\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.token', token, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.refreshToken', refreshToken, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: '/'\n                        });\n                        setUser({\n                            email: email,\n                            permissions: permissions,\n                            roles: roles\n                        });\n                        _services_apiClient__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _signIn.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn: signIn,\n            isAuthenticated: isAuthenticated,\n            user: user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 93,\n        columnNumber: 9\n    }, this));\n}\n_s(AuthProvider, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFHLENBQXVCLHdCQUFFbUIsWUFBWSxFQUFFLENBQUM7NEJBQzFERSxNQUFNLEVBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRTs0QkFDbEJDLElBQUksRUFBRSxDQUFHO3dCQUNiLENBQUM7d0JBRURqQixPQUFPLENBQUMsQ0FBQzs0QkFDTE8sS0FBSyxFQUFMQSxLQUFLOzRCQUNMQyxXQUFXLEVBQVhBLFdBQVc7NEJBQ1hDLEtBQUssRUFBTEEsS0FBSzt3QkFDVCxDQUFDO3dCQUVEakIsbUZBQW9DLEdBQUssQ0FBTyxTQUFRLE9BQU5VLEtBQUs7d0JBRXZEZCx1REFBVyxDQUFDLENBQVk7Ozs7Ozt3QkFFeEJnQyxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRW5CLENBQUM7ZUE5QmNULE9BQU07O0lBZ0NyQixNQUFNLDZFQUNEbkIsV0FBVyxDQUFDNkIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQ1g7WUFBQUEsTUFBTSxFQUFOQSxNQUFNO1lBQUNYLGVBQWUsRUFBZkEsZUFBZTtZQUFDRixJQUFJLEVBQUpBLElBQUk7UUFBQSxDQUFDO2tCQUNyREQsUUFBUTs7Ozs7O0FBR3JCLENBQUM7R0EzRGdCRCxZQUFZO0tBQVpBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvQXV0aENvbnRleHQudHN4PzZkODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtzZXRDb29raWUscGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2FwaUNsaWVudCc7XHJcblxyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcclxuICAgIHJvbGVzOnN0cmluZ1tdO1xyXG59O1xyXG5cclxudHlwZSBTaWduSW5DcmVkZW50aWFscyAgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZyA7XHJcblxyXG59XHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9e1xyXG4gICAgc2lnbkluKGNyZWRlbnRpYWxzIDogU2lnbkluQ3JlZGVudGlhbHMpIDogUHJvbWlzZSA8dm9pZD4gO1xyXG4gICAgdXNlcjpVc2VyO1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcz17XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpe1xyXG4gICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsJ25leHRhdXRoLnRva2VuJylcclxuICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKVxyXG5cclxuICAgIFJvdXRlci5wdXNoKCcvJylcclxufVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIgKHtjaGlsZHJlbn0gOiBBdXRoUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdFt1c2VyLCBzZXRVc2VyXT0gdXNlU3RhdGU8VXNlcj4oKSAgICBcclxuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB7J25leHRhdXRoLnRva2VuJzp0b2tlbn0gPSBwYXJzZUNvb2tpZXMoKVxyXG5cclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgIGFwaS5nZXQoJy9tZScpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtlbWFpbCxwZXJtaXNzaW9ucyxyb2xlc30gPSByZXNwb25zZS5kYXRhXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoe2VtYWlsLHBlcm1pc3Npb25zLHJvbGVzfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2Nlc3Mpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHNpZ25JbiAoe2VtYWlsLHBhc3N3b3JkfSA6IFNpZ25JbkNyZWRlbnRpYWxzKXtcclxuICAgICAgICB0cnl7ICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCdzZXNzaW9ucycgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdHt0b2tlbiwgcmVmcmVzaFRva2VuLCBwZXJtaXNzaW9ucywgcm9sZXN9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNldENvb2tpZSh1bmRlZmluZWQgLCAnbmV4dGF1dGgudG9rZW4nLCB0b2tlbix7XHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQqMzAsIC8vMSBtb250aFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldENvb2tpZSh1bmRlZmluZWQgLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJywgcmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQqMzAsIC8vMSBtb250aFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnMsXHJcbiAgICAgICAgICAgICAgICByb2xlcyxcclxuICAgICAgICAgICAgfSkgICBcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NpZ25Jbixpc0F1dGhlbnRpY2F0ZWQsdXNlcn19PiBcclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsInNldENvb2tpZSIsInBhcnNlQ29va2llcyIsImRlc3Ryb3lDb29raWUiLCJhcGkiLCJBdXRoQ29udGV4dCIsInNpZ25PdXQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInRva2VuIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImVtYWlsIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsImNhdGNoIiwicHJvY2VzcyIsInNpZ25JbiIsInBhc3N3b3JkIiwicmVmcmVzaFRva2VuIiwicG9zdCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ })

});
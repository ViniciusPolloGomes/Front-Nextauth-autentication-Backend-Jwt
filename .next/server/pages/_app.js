/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    async function signIn({ email , password  }) {\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post('sessions', {\n                email,\n                password\n            });\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nexttauth.token', token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: '/'\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nexttauth.refreshToken', refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: '/'\n            });\n            setUser({\n                email,\n                permissions,\n                roles\n            });\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn,\n            isAuthenticated,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ25CO0FBQ0w7QUFDQztBQXdCMUIsS0FBSyxDQUFDSyxXQUFXLGlCQUFHTCxvREFBYSxDQUFDLENBQUMsQ0FBQztBQUVuQyxTQUFTTSxZQUFZLENBQUUsQ0FBQ0MsQ0FBQUEsUUFBUSxFQUFvQixDQUFDLEVBQUMsQ0FBQztJQUMzRCxLQUFXLE1BQUxDLElBQUksTUFBRUMsT0FBTyxNQUFHUiwrQ0FBUTtJQUM5QixLQUFLLENBQUNTLGVBQWUsS0FBS0YsSUFBSTttQkFFZkcsTUFBTSxDQUFFLENBQUNDLENBQUFBLEtBQUssR0FBQ0MsUUFBUSxFQUFvQixDQUFDLEVBQUMsQ0FBQztRQUN6RCxHQUFHLEVBQUM7WUFDQSxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNaLG1EQUFRLENBQUMsQ0FBVSxXQUFHLENBQUM7Z0JBQ3RDVSxLQUFLO2dCQUNMQyxRQUFRO1lBQ2hCLENBQUM7WUFFRCxLQUFZLENBQVAsQ0FBQ0csQ0FBQUEsS0FBSyxHQUFFQyxZQUFZLEdBQUVDLFdBQVcsR0FBRUMsS0FBSyxHQUFDLEdBQUdMLFFBQVEsQ0FBQ00sSUFBSTtZQUU5RGhCLGtEQUFTLENBQUNpQixTQUFTLEVBQUcsQ0FBaUIsa0JBQUVMLEtBQUssRUFBQyxDQUFDO2dCQUM1Q00sTUFBTSxFQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUU7Z0JBQ2xCQyxJQUFJLEVBQUUsQ0FBRztZQUNiLENBQUM7WUFDRG5CLGtEQUFTLENBQUNpQixTQUFTLEVBQUcsQ0FBd0IseUJBQUVKLFlBQVksRUFBRSxDQUFDO2dCQUMzREssTUFBTSxFQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUU7Z0JBQ2xCQyxJQUFJLEVBQUUsQ0FBRztZQUNiLENBQUM7WUFFRGQsT0FBTyxDQUFDLENBQUM7Z0JBQ0xHLEtBQUs7Z0JBQ0xNLFdBQVc7Z0JBQ1hDLEtBQUs7WUFDVCxDQUFDO1lBQ0RoQix1REFBVyxDQUFDLENBQVk7UUFDNUIsQ0FBQyxDQUFDLEtBQUssRUFBQ3NCLEdBQUcsRUFBQyxDQUFDO1lBQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHO1FBQ25CLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSw2RUFDRHBCLFdBQVcsQ0FBQ3VCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUNsQjtZQUFBQSxNQUFNO1lBQUNELGVBQWU7WUFBQ0YsSUFBSTtRQUFBLENBQUM7a0JBQ3JERCxRQUFROzs7Ozs7QUFHckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGVudGljYXRpb24vLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/NmQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge3NldENvb2tpZX0gZnJvbSAnbm9va2llcydcclxuXHJcbnR5cGUgVXNlciA9IHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwZXJtaXNzaW9uczogc3RyaW5nW107XHJcbiAgICByb2xlczpzdHJpbmdbXTtcclxufTtcclxuXHJcbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgO1xyXG5cclxufVxyXG5cclxudHlwZSBBdXRoQ29udGV4dERhdGEgPXtcclxuICAgIHNpZ25JbihjcmVkZW50aWFscyA6IFNpZ25JbkNyZWRlbnRpYWxzKSA6IFByb21pc2UgPHZvaWQ+IDtcclxuICAgIHVzZXI6VXNlcjtcclxuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHM9e1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTsgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIgKHtjaGlsZHJlbn0gOiBBdXRoUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdFt1c2VyLCBzZXRVc2VyXT0gdXNlU3RhdGU8VXNlcj4oKSAgICBcclxuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduSW4gKHtlbWFpbCxwYXNzd29yZH0gOiBTaWduSW5DcmVkZW50aWFscyl7XHJcbiAgICAgICAgdHJ5eyAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnc2Vzc2lvbnMnICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3R7dG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHR0YXV0aC50b2tlbicsIHRva2VuLHtcclxuICAgICAgICAgICAgICAgIG1heEFnZTo2MCo2MCoyNCozMCwgLy8xIG1vbnRoXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnLydcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCAsICduZXh0dGF1dGgucmVmcmVzaFRva2VuJywgcmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6NjAqNjAqMjQqMzAsIC8vMSBtb250aFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnMsXHJcbiAgICAgICAgICAgICAgICByb2xlcyxcclxuICAgICAgICAgICAgfSkgICBcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICB9IGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2lnbkluLGlzQXV0aGVudGljYXRlZCx1c2VyfX0+IFxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiYXBpIiwiUm91dGVyIiwic2V0Q29va2llIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwic2lnbkluIiwiZW1haWwiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsInRva2VuIiwicmVmcmVzaFRva2VuIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsImRhdGEiLCJ1bmRlZmluZWQiLCJtYXhBZ2UiLCJwYXRoIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29EO0FBQ3RCO1NBRXJCQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLDZFQUNISCwrREFBWTs4RkFDVkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBQ0QsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRlbnRpY2F0aW9uLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7QXV0aFByb3ZpZGVyfSBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLnNjc3MnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXI+ICAgICAgICAgIFxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+ICBcclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRWxCLEtBQUssQ0FBRUMsR0FBRyxHQUFHRCxtREFBWSxDQUFDLENBQUM7SUFDOUJHLE9BQU8sRUFBRSxDQUF1QjtBQUNwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0ZW50aWNhdGlvbi8uL3NlcnZpY2VzL2FwaS50cz80YmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgIGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMzMzJ1xyXG59KTsiXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider({ children  }) {\n    const isAuthenticated = false;\n    async function signIn({ email , password  }) {\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post('sessions', {\n                email,\n                password\n            });\n            console.log(response.data);\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn,\n            isAuthenticated\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEM7QUFDVDtBQWlCOUIsS0FBSyxDQUFDRSxXQUFXLGlCQUFHRixvREFBYSxDQUFDLENBQUMsQ0FBQztBQUVuQyxTQUFTRyxZQUFZLENBQUUsQ0FBQ0MsQ0FBQUEsUUFBUSxFQUFvQixDQUFDLEVBQUMsQ0FBQztJQUMzRCxLQUFLLENBQUNDLGVBQWUsR0FBRyxLQUFLO21CQUVkQyxNQUFNLENBQUUsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFDQyxRQUFRLEVBQW9CLENBQUMsRUFBQyxDQUFDO1FBQ3pELEdBQUcsRUFBQztZQUNBLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ1IsbURBQVEsQ0FBQyxDQUFVLFdBQUcsQ0FBQztnQkFDdENNLEtBQUs7Z0JBQ0xDLFFBQVE7WUFDWixDQUFDO1lBQ0RHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUNJLElBQUk7UUFHakMsQ0FBQyxDQUFDLEtBQUssRUFBQ0MsR0FBRyxFQUFDLENBQUM7WUFDVEgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUc7UUFDbkIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLDZFQUNEWixXQUFXLENBQUNhLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUNWO1lBQUFBLE1BQU07WUFBQ0QsZUFBZTtRQUFBLENBQUM7a0JBQ2hERCxRQUFROzs7Ozs7QUFHckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGVudGljYXRpb24vLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/NmQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuXHJcbnR5cGUgU2lnbkluQ3JlZGVudGlhbHMgID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgO1xyXG5cclxufVxyXG5cclxudHlwZSBBdXRoQ29udGV4dERhdGEgPXtcclxuICAgIHNpZ25JbihjcmVkZW50aWFscyA6IFNpZ25JbkNyZWRlbnRpYWxzKSA6IFByb21pc2UgPHZvaWQ+IDtcclxuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxufTtcclxuXHJcbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHM9e1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZTsgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIgKHtjaGlsZHJlbn0gOiBBdXRoUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduSW4gKHtlbWFpbCxwYXNzd29yZH0gOiBTaWduSW5DcmVkZW50aWFscyl7XHJcbiAgICAgICAgdHJ5eyAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnc2Vzc2lvbnMnICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NpZ25Jbixpc0F1dGhlbnRpY2F0ZWR9fT4gXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiYXBpIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzQXV0aGVudGljYXRlZCIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImVyciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

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
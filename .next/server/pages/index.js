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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/home.module.scss":
/*!*********************************!*\
  !*** ./styles/home.module.scss ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"home_container__U_vei\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGVudGljYXRpb24vLi9zdHlsZXMvaG9tZS5tb2R1bGUuc2Nzcz8xNTVhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImhvbWVfY29udGFpbmVyX19VX3ZlaVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/home.module.scss\n");

/***/ }),

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    async function signIn({ email , password  }) {\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post('sessions', {\n                email,\n                password\n            });\n            const { permissions , roles  } = response.data;\n            setUser({\n                email,\n                permissions,\n                roles\n            });\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn,\n            isAuthenticated,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNuQjtBQUNMO0FBd0J6QixLQUFLLENBQUNJLFdBQVcsaUJBQUdKLG9EQUFhLENBQUMsQ0FBQyxDQUFDO0FBRW5DLFNBQVNLLFlBQVksQ0FBRSxDQUFDQyxDQUFBQSxRQUFRLEVBQW9CLENBQUMsRUFBQyxDQUFDO0lBQzNELEtBQVcsTUFBTEMsSUFBSSxNQUFFQyxPQUFPLE1BQUdQLCtDQUFRO0lBQzlCLEtBQUssQ0FBQ1EsZUFBZSxLQUFLRixJQUFJO21CQUVmRyxNQUFNLENBQUUsQ0FBQ0MsQ0FBQUEsS0FBSyxHQUFDQyxRQUFRLEVBQW9CLENBQUMsRUFBQyxDQUFDO1FBQ3pELEdBQUcsRUFBQztZQUNBLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ1gsbURBQVEsQ0FBQyxDQUFVLFdBQUcsQ0FBQztnQkFDdENTLEtBQUs7Z0JBQ0xDLFFBQVE7WUFDaEIsQ0FBQztZQUVELEtBQWtCLENBQWIsQ0FBQ0csQ0FBQUEsV0FBVyxHQUFFQyxLQUFLLEdBQUMsR0FBR0gsUUFBUSxDQUFDSSxJQUFJO1lBRXpDVCxPQUFPLENBQUMsQ0FBQztnQkFDTEcsS0FBSztnQkFDTEksV0FBVztnQkFDWEMsS0FBSztZQUNULENBQUM7WUFDRGIsdURBQVcsQ0FBQyxDQUFZO1FBQzVCLENBQUMsQ0FBQyxLQUFLLEVBQUNnQixHQUFHLEVBQUMsQ0FBQztZQUNUQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRztRQUNuQixDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sNkVBQ0RmLFdBQVcsQ0FBQ2tCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUNiO1lBQUFBLE1BQU07WUFBQ0QsZUFBZTtZQUFDRixJQUFJO1FBQUEsQ0FBQztrQkFDckRELFFBQVE7Ozs7OztBQUdyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0ZW50aWNhdGlvbi8uL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD82ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG50eXBlIFVzZXIgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGVybWlzc2lvbnM6IHN0cmluZ1tdO1xyXG4gICAgcm9sZXM6c3RyaW5nW107XHJcbn07XHJcblxyXG50eXBlIFNpZ25JbkNyZWRlbnRpYWxzICA9IHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nIDtcclxuXHJcbn1cclxuXHJcbnR5cGUgQXV0aENvbnRleHREYXRhID17XHJcbiAgICBzaWduSW4oY3JlZGVudGlhbHMgOiBTaWduSW5DcmVkZW50aWFscykgOiBQcm9taXNlIDx2b2lkPiA7XHJcbiAgICB1c2VyOlVzZXI7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIEF1dGhQcm92aWRlclByb3BzPXtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7IFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0RGF0YSlcclxuXHJcbiBleHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyICh7Y2hpbGRyZW59IDogQXV0aFByb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3RbdXNlciwgc2V0VXNlcl09IHVzZVN0YXRlPFVzZXI+KCkgICAgXHJcbiAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSAhIXVzZXI7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbkluICh7ZW1haWwscGFzc3dvcmR9IDogU2lnbkluQ3JlZGVudGlhbHMpe1xyXG4gICAgICAgIHRyeXsgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ3Nlc3Npb25zJyAsIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0e3Blcm1pc3Npb25zLCByb2xlc30gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zLFxyXG4gICAgICAgICAgICAgICAgcm9sZXMsXHJcbiAgICAgICAgICAgIH0pICAgXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3NpZ25Jbixpc0F1dGhlbnRpY2F0ZWQsdXNlcn19PiBcclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsImFwaSIsIlJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXNwb25zZSIsInBvc3QiLCJwZXJtaXNzaW9ucyIsInJvbGVzIiwiZGF0YSIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/home.module.scss */ \"./styles/home.module.scss\");\n/* harmony import */ var _styles_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { signIn  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    async function handleSubmit(event) {\n        event.preventDefault();\n        const data = {\n            email,\n            password\n        };\n        await signIn(data);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: (_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                value: email,\n                onChange: (e)=>setEmail(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                value: password,\n                onChange: (e)=>setPassword(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Entrar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ0E7QUFDUjtBQUVoQyxRQUFRLENBQUNJLElBQUksR0FBSSxDQUFDO0lBQzdCLEtBQUssTUFBRUMsS0FBSyxNQUFDQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsQ0FBRTtJQUNwQyxLQUFLLE1BQUVNLFFBQVEsTUFBRUMsV0FBVyxNQUFJUCwrQ0FBUSxDQUFDLENBQUU7SUFFM0MsS0FBSyxDQUFFLENBQUNRLENBQUFBLE1BQU0sR0FBQyxHQUFHVCxpREFBVSxDQUFDRSw4REFBVzttQkFDekJRLFlBQVksQ0FBQ0MsS0FBaUIsRUFBQyxDQUFDO1FBQzNDQSxLQUFLLENBQUNDLGNBQWM7UUFFcEIsS0FBSyxDQUFDQyxJQUFJLEdBQUMsQ0FBQztZQUNQUixLQUFLO1lBQ0xFLFFBQVE7UUFDYixDQUFDO1FBQ0QsS0FBSyxDQUFDRSxNQUFNLENBQUNJLElBQUk7SUFDckIsQ0FBQztJQUVELE1BQU0sNkVBQ0RDLENBQUk7UUFBQ0MsUUFBUSxFQUFFTCxZQUFZO1FBQUVNLFNBQVMsRUFBRWIsMkVBQWdCOzt3RkFDcERlLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFPO2dCQUFDQyxLQUFLLEVBQUVmLEtBQUs7Z0JBQUVnQixRQUFRLEdBQUVDLENBQUMsR0FBSWhCLFFBQVEsQ0FBQ2dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7d0ZBQ3ZFRixDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBVTtnQkFBQ0MsS0FBSyxFQUFFYixRQUFRO2dCQUFFYyxRQUFRLEdBQUVDLENBQUMsR0FBSWQsV0FBVyxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3dGQUNoRkksQ0FBTTtnQkFBQ0wsSUFBSSxFQUFDLENBQVE7MEJBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O0FBSXhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRlbnRpY2F0aW9uLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbiB9IGZyb20gXCJjcnlwdG9cIjtcclxuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoICkge1xyXG4gICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCAsc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcbiAgICBjb25zdCAge3NpZ25Jbn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCA6IEZvcm1FdmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YT17XHJcbiAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBzaWduSW4oZGF0YSk7XHJcbiAgICB9XHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSA+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnRyYXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+IFxyXG5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0Iiwic3R5bGVzIiwiSG9tZSIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2lnbkluIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333'\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRWxCLEtBQUssQ0FBRUMsR0FBRyxHQUFHRCxtREFBWSxDQUFDLENBQUM7SUFDOUJHLE9BQU8sRUFBRSxDQUF1QjtBQUNwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0ZW50aWNhdGlvbi8uL3NlcnZpY2VzL2FwaS50cz80YmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgY29uc3QgIGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMzMzJ1xyXG59KTsiXSwibmFtZXMiOlsiYXhpb3MiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
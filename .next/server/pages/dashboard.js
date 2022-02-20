"use strict";
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
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"signOut\": () => (/* binding */ signOut),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.token');\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, 'nextauth.refreshToken');\n    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');\n}\nfunction AuthProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { 'nextauth.token': token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        if (token) {\n            _services_api__WEBPACK_IMPORTED_MODULE_2__.api.get('/me').then((response)=>{\n                const { email , permissions , roles  } = response.data;\n                setUser({\n                    email,\n                    permissions,\n                    roles\n                });\n            }).catch(()=>{\n                signOut();\n            });\n        }\n    }, []);\n    async function signIn({ email , password  }) {\n        try {\n            const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post('sessions', {\n                email,\n                password\n            });\n            const { token , refreshToken , permissions , roles  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.token', token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: '/'\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, 'nextauth.refreshToken', refreshToken, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: '/'\n            });\n            setUser({\n                email,\n                permissions,\n                roles\n            });\n            _services_api__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.Authorization = `Bearer ${token}`;\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/dashboard');\n        } catch (err) {\n            console.log(err);\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn,\n            isAuthenticated,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 91,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b250ZXh0LnRzeD82ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtzZXRDb29raWUscGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgeyBkZWZhdWx0TWF4TGlzdGVuZXJzIH0gZnJvbSBcImV2ZW50c1wiO1xyXG5cclxudHlwZSBVc2VyID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcclxuICAgIHJvbGVzOnN0cmluZ1tdO1xyXG59O1xyXG5cclxudHlwZSBTaWduSW5DcmVkZW50aWFscyAgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZyA7XHJcblxyXG59XHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9e1xyXG4gICAgc2lnbkluKGNyZWRlbnRpYWxzIDogU2lnbkluQ3JlZGVudGlhbHMpIDogUHJvbWlzZSA8dm9pZD4gO1xyXG4gICAgdXNlcjpVc2VyO1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcz17XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpe1xyXG4gICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsJ25leHRhdXRoLnRva2VuJylcclxuICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKVxyXG5cclxuICAgIFJvdXRlci5wdXNoKCcvJylcclxufVxyXG5cclxuIGV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIgKHtjaGlsZHJlbn0gOiBBdXRoUHJvdmlkZXJQcm9wcyl7XHJcbiAgICBjb25zdFt1c2VyLCBzZXRVc2VyXT0gdXNlU3RhdGU8VXNlcj4oKSAgICBcclxuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCB7J25leHRhdXRoLnRva2VuJzp0b2tlbn0gPSBwYXJzZUNvb2tpZXMoKVxyXG5cclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgIGFwaS5nZXQoJy9tZScpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHtlbWFpbCxwZXJtaXNzaW9ucyxyb2xlc30gPSByZXNwb25zZS5kYXRhXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXIoe2VtYWlsLHBlcm1pc3Npb25zLHJvbGVzfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzaWduSW4gKHtlbWFpbCxwYXNzd29yZH0gOiBTaWduSW5DcmVkZW50aWFscyl7XHJcbiAgICAgICAgdHJ5eyAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnc2Vzc2lvbnMnICwge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgY29uc3R7dG9rZW4sIHJlZnJlc2hUb2tlbiwgcGVybWlzc2lvbnMsIHJvbGVzfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4se1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlZnJlc2hUb2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zLFxyXG4gICAgICAgICAgICAgICAgcm9sZXMsXHJcbiAgICAgICAgICAgIH0pICAgXHJcblxyXG4gICAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tzaWduSW4saXNBdXRoZW50aWNhdGVkLHVzZXJ9fT4gXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGkiLCJSb3V0ZXIiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJkZXN0cm95Q29va2llIiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImVtYWlsIiwicGVybWlzc2lvbnMiLCJyb2xlcyIsImRhdGEiLCJjYXRjaCIsInNpZ25JbiIsInBhc3N3b3JkIiwicG9zdCIsInJlZnJlc2hUb2tlbiIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/dashboard.tsx":
/*!*****************************!*\
  !*** ./pages/dashboard.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DashBoard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./services/api.ts\");\n\n\n\n\nfunction DashBoard() {\n    const { user  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get('/me').then((response)=>console.log(response)\n        ).catch((err)=>console.log(err)\n        );\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: [\n            \"Dashboard: \",\n            user === null || user === void 0 ? void 0 : user.email\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ADMIN\\\\Desktop\\\\rocketseat\\\\nextauth\\\\autentication\\\\pages\\\\dashboard.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1E7QUFDZDtBQUV0QixRQUFRLENBQUNJLFNBQVMsR0FBRSxDQUFDO0lBQ2hDLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxJQUFJLEdBQUMsR0FBR0wsaURBQVUsQ0FBQ0UsOERBQVc7SUFFckNELGdEQUFTLEtBQUssQ0FBQztRQUNYRSxrREFBTyxDQUFDLENBQUssTUFBRUksSUFBSSxFQUFDQyxRQUFRLEdBQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRO1VBQ25ERyxLQUFLLEVBQUNDLEdBQUcsR0FBSUgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUc7O0lBQ2pDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFFSixNQUFNLDZFQUNEQyxDQUFFOztZQUFDLENBQVc7WUFBQ1IsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBVyxHQUFYQSxJQUFJLENBQUpBLENBQVcsR0FBWEEsSUFBSSxDQUFFUyxLQUFLOzs7Ozs7O0FBRW5DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRlbnRpY2F0aW9uLy4vcGFnZXMvZGFzaGJvYXJkLnRzeD9kN2Y2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0F1dGhDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaEJvYXJkKCl7XHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFwaS5nZXQoJy9tZScpLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8aDE+RGFzaGJvYXJkOiB7dXNlcj8uZW1haWx9PC9oMT5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkF1dGhDb250ZXh0IiwiYXBpIiwiRGFzaEJvYXJkIiwidXNlciIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImgxIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n\n\n\nlet cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nlet isRefreshing = false;\nlet failedRequestsQueue = [];\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: 'http://localhost:3333',\n    headers: {\n        Authorization: `Bearer ${cookies['nextauth.token']}`\n    }\n});\napi.interceptors.response.use((response)=>{\n    return response;\n}, (error)=>{\n    if (error.response.status === 401) {\n        var ref;\n        if (((ref = error.response.data) === null || ref === void 0 ? void 0 : ref.code) === 'token.expired') {\n            cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n            const { 'nextauth.refreshToken': refreshToken  } = cookies;\n            const originalConfig = error.config;\n            if (!isRefreshing) {\n                isRefreshing = true;\n                api.post('/refresh', {\n                    refreshToken\n                }).then((response)=>{\n                    const { token  } = response.data;\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(undefined, 'nextauth.token', token, {\n                        maxAge: 60 * 60 * 24 * 30,\n                        path: '/'\n                    });\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(undefined, 'nextauth.refreshToken', response.data.refreshToken, {\n                        maxAge: 60 * 60 * 24 * 30,\n                        path: '/'\n                    });\n                    api.defaults.headers['Authorization'] = `Bearer ${token}`;\n                    failedRequestsQueue.forEach((request)=>request.onSuccess(token)\n                    );\n                    failedRequestsQueue = [];\n                }).catch((err)=>{\n                    failedRequestsQueue.forEach((request)=>request.onFailure(err)\n                    );\n                    failedRequestsQueue = [];\n                }).finally(()=>{\n                    isRefreshing = false;\n                });\n            }\n            return new Promise((resolve, reject)=>{\n                failedRequestsQueue.push({\n                    onSuccess: (token)=>{\n                        originalConfig.headers['Authorization'] = `Bearer ${token}`;\n                        resolve(api(originalConfig));\n                    },\n                    onFailure: (err)=>{\n                        reject(err);\n                    }\n                });\n            });\n        } else {\n            (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n        }\n    }\n    return Promise.reject(error);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sR0FBRyxDQUFDO2dCQUNsQ2hDLG1CQUFtQixDQUFDaUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCUixTQUFTLEdBQUdQLEtBQVksR0FBRyxDQUFDO3dCQUN4QkosY0FBYyxDQUFDVixPQUFPLENBQUMsQ0FBZSxtQkFBSyxPQUFPLEVBQUVjLEtBQUs7d0JBRXpEYSxPQUFPLENBQUM5QixHQUFHLENBQUNhLGNBQWM7b0JBQzlCLENBQUM7b0JBQ0RjLFNBQVMsR0FBR0QsR0FBZSxHQUFHLENBQUM7d0JBQzNCSyxNQUFNLENBQUNMLEdBQUc7b0JBQ2QsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsTUFBSSxDQUFDO1lBQ0Y5Qiw4REFBTztRQUNYLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDaUMsT0FBTyxDQUFDRSxNQUFNLENBQUN2QixLQUFLO0FBQy9CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRlbnRpY2F0aW9uLy4vc2VydmljZXMvYXBpLnRzPzRiZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHBhcnNlQ29va2llcyAsc2V0Q29va2llfSBmcm9tICdub29raWVzJztcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuXHJcbmxldCBjb29raWVzPSBwYXJzZUNvb2tpZXMoKTtcclxubGV0IGlzUmVmcmVzaGluZyA9IGZhbHNlO1xyXG5sZXQgZmFpbGVkUmVxdWVzdHNRdWV1ZSA9IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbiAgICBoZWFkZXJzOntcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1snbmV4dGF1dGgudG9rZW4nXX1gIFxyXG4gICAgfVxyXG59KTtcclxuXHJcbmFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlPT57XHJcbiAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+e1xyXG4gICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSl7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5kYXRhPy5jb2RlID09PSAndG9rZW4uZXhwaXJlZCcpeyAgLy9yZW5vdmFyIHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgY29va2llcyA9IHBhcnNlQ29va2llcygpOyBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7J25leHRhdXRoLnJlZnJlc2hUb2tlbic6IHJlZnJlc2hUb2tlbn0gPSBjb29raWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxDb25maWc9IGVycm9yLmNvbmZpZ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZighaXNSZWZyZXNoaW5nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWZyZXNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnBvc3QoJy9yZWZyZXNoJyx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge3Rva2VufSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCAsICduZXh0YXV0aC50b2tlbicsIHRva2VuLHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4QWdlOjYwKjYwKjI0KjMwLCAvLzEgbW9udGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogJy8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkICwgJ25leHRhdXRoLnJlZnJlc2hUb2tlbicsIHJlc3BvbnNlLmRhdGEucmVmcmVzaFRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEFnZTo2MCo2MCoyNCozMCwgLy8xIG1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbGVkUmVxdWVzdHNRdWV1ZS5mb3JFYWNoKHJlcXVlc3QgPT4gcmVxdWVzdC5vblN1Y2Nlc3ModG9rZW4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxlZFJlcXVlc3RzUXVldWUgPSBbXSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFpbGVkUmVxdWVzdHNRdWV1ZS5mb3JFYWNoKHJlcXVlc3QgPT4gcmVxdWVzdC5vbkZhaWx1cmUoZXJyKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsZWRSZXF1ZXN0c1F1ZXVlID0gW10gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVmcmVzaGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbGVkUmVxdWVzdHNRdWV1ZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogKHRva2VuOnN0cmluZyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbENvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFwaShvcmlnaW5hbENvbmZpZykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlOiAoZXJyOiBBeGlvc0Vycm9yKT0+eyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZGVzbG9nYXIgdXN1w6FyaW9cclxuICAgICAgICAgICAgICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTsgICAgXHJcbiAgICAgICAgfSAgICAgICBcclxuKSJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsInNldENvb2tpZSIsInNpZ25PdXQiLCJjb29raWVzIiwiaXNSZWZyZXNoaW5nIiwiZmFpbGVkUmVxdWVzdHNRdWV1ZSIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwiY29kZSIsInJlZnJlc2hUb2tlbiIsIm9yaWdpbmFsQ29uZmlnIiwiY29uZmlnIiwicG9zdCIsInRoZW4iLCJ0b2tlbiIsInVuZGVmaW5lZCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImZvckVhY2giLCJyZXF1ZXN0Iiwib25TdWNjZXNzIiwiY2F0Y2giLCJlcnIiLCJvbkZhaWx1cmUiLCJmaW5hbGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.tsx"));
module.exports = __webpack_exports__;

})();
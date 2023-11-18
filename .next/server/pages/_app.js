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

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"authContext\": () => (/* binding */ authContext),\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth),\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/firebase */ \"./firebase/firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n}\nconst AuthProvider = ({ children  })=>{\n    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: isUserLoading , 1: setIsUserLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUser = async ()=>{\n            _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged(async (user)=>{\n                setIsUserLoading(true);\n                console.log(\"Authetication state s changing...\");\n                await _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__.firestore.collection(\"users\").doc(user?.uid).get().then((doc)=>{\n                    const data = doc.data();\n                    console.log(\"User context: \" + data);\n                    setCurrentUser(data || undefined);\n                    //add check if data is undefined\n                    setIsUserLoading(false);\n                });\n            });\n        };\n        getUser();\n    }, []);\n    const value = {\n        currentUser,\n        isUserLoading\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(authContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Github\\\\React\\\\Nextjs\\\\Internship-system-app\\\\context\\\\UserContext.js\",\n        lineNumber: 38,\n        columnNumber: 10\n    }, undefined);\n};\nfunction useAuthContext() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1VzZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXVFO0FBQ2hCO0FBRWhELE1BQU1NLFdBQVcsaUJBQUdOLG9EQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsU0FBU08sT0FBTyxHQUFHO0lBQ3hCLE9BQU9OLGlEQUFVLENBQUNLLFdBQVcsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFDTSxNQUFNRSxZQUFZLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUM1QyxNQUFNLEtBQUNDLFdBQVcsTUFBRUMsY0FBYyxNQUFJUiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUNwRCxNQUFNLEtBQUNTLGFBQWEsTUFBRUMsZ0JBQWdCLE1BQUlWLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBRXhERCxnREFBUyxDQUFDLElBQU07UUFDZCxNQUFNWSxPQUFPLEdBQUcsVUFBWTtZQUMxQlYsdUVBQXVCLENBQUMsT0FBT1ksSUFBSSxHQUFLO2dCQUN0Q0gsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2dCQUN0QkksT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLENBQUM7Z0JBQ2hELE1BQU1iLG9FQUNPLENBQUMsT0FBTyxDQUFDLENBQ25CZSxHQUFHLENBQUNKLElBQUksRUFBRUssR0FBRyxDQUFDLENBQ2RDLEdBQUcsRUFBRSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0gsR0FBRyxHQUFLO29CQUNuQixNQUFNSSxJQUFJLEdBQUdKLEdBQUcsQ0FBQ0ksSUFBSSxFQUFFO29CQUMzQlAsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUdNLElBQUksQ0FBQyxDQUFDO29CQUNyQ2IsY0FBYyxDQUFDYSxJQUFJLElBQUlDLFNBQVMsQ0FBQyxDQUFDO29CQUNsQyxnQ0FBZ0M7b0JBQ2hDWixnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQztZQUVOLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNEQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLE1BQU1ZLEtBQUssR0FBRztRQUNaaEIsV0FBVztRQUNaRSxhQUFhO0tBQ2I7SUFHRCxxQkFBTyw4REFBQ04sV0FBVyxDQUFDcUIsUUFBUTtRQUFDRCxLQUFLLEVBQUVBLEtBQUs7a0JBQUdqQixRQUFROzs7OztpQkFBd0IsQ0FBQztBQUMvRSxDQUFDLENBQUM7QUFDSyxTQUFTbUIsY0FBYyxHQUFHO0lBRTdCLE9BQU8zQixpREFBVSxDQUFDSyxXQUFXLENBQUMsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnVzLWJvb2tpbmctYXBwLy4vY29udGV4dC9Vc2VyQ29udGV4dC5qcz84NmU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmViYXNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbn1cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc1VzZXJMb2FkaW5nLCBzZXRJc1VzZXJMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoYXN5bmMgKHVzZXIpID0+IHtcclxuICAgICAgICBzZXRJc1VzZXJMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGhldGljYXRpb24gc3RhdGUgcyBjaGFuZ2luZy4uLicpXHJcbiAgICAgICAgYXdhaXQgZmlyZXN0b3JlXHJcbiAgICAgICAgICAuY29sbGVjdGlvbihcInVzZXJzXCIpXHJcbiAgICAgICAgICAuZG9jKHVzZXI/LnVpZClcclxuICAgICAgICAgIC5nZXQoKS50aGVuKChkb2MpID0+IHsgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBjb250ZXh0OiBcIiArIGRhdGEpO1xyXG4gICAgICAgIHNldEN1cnJlbnRVc2VyKGRhdGEgfHwgdW5kZWZpbmVkKTtcclxuICAgICAgICAvL2FkZCBjaGVjayBpZiBkYXRhIGlzIHVuZGVmaW5lZFxyXG4gICAgICAgIHNldElzVXNlckxvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXRVc2VyKCk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgY3VycmVudFVzZXIsXHJcbiAgIGlzVXNlckxvYWRpbmdcclxuICB9O1xyXG4gXHJcblxyXG4gIHJldHVybiA8YXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57Y2hpbGRyZW59PC9hdXRoQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoQ29udGV4dCgpIHtcclxuICAgXHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChhdXRoQ29udGV4dCk7XHJcbiAgfVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGgiLCJmaXJlc3RvcmUiLCJhdXRoQ29udGV4dCIsInVzZUF1dGgiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJpc1VzZXJMb2FkaW5nIiwic2V0SXNVc2VyTG9hZGluZyIsImdldFVzZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1aWQiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInVuZGVmaW5lZCIsInZhbHVlIiwiUHJvdmlkZXIiLCJ1c2VBdXRoQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/UserContext.js\n");

/***/ }),

/***/ "./firebase/env.js":
/*!*************************!*\
  !*** ./firebase/env.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst firebaseConfig = {\n    apiKey: \"AIzaSyALGjwkYUUehwwkDU7cCUTQOTMJFxvjAzI\",\n    authDomain: \"internhipsystem.firebaseapp.com\",\n    projectId: \"internhipsystem\",\n    storageBucket: \"internhipsystem.appspot.com\",\n    messagingSenderId: \"413571173443\",\n    appId: \"1:413571173443:web:3191d818d11e411f9018f6\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseConfig);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9lbnYuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGNBQWMsR0FBRztJQUVyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLGlDQUFpQztJQUM3Q0MsU0FBUyxFQUFFLGlCQUFpQjtJQUM1QkMsYUFBYSxFQUFFLDZCQUE2QjtJQUM1Q0MsaUJBQWlCLEVBQUUsY0FBYztJQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztDQUVuRDtBQUdELGlFQUFlTixjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXMtYm9va2luZy1hcHAvLi9maXJlYmFzZS9lbnYuanM/MDkwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuXHJcbiAgYXBpS2V5OiBcIkFJemFTeUFMR2p3a1lVVWVod3drRFU3Y0NVVFFPVE1KRnh2akF6SVwiLFxyXG4gIGF1dGhEb21haW46IFwiaW50ZXJuaGlwc3lzdGVtLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJpbnRlcm5oaXBzeXN0ZW1cIixcclxuICBzdG9yYWdlQnVja2V0OiBcImludGVybmhpcHN5c3RlbS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQxMzU3MTE3MzQ0M1wiLFxyXG4gIGFwcElkOiBcIjE6NDEzNTcxMTczNDQzOndlYjozMTkxZDgxOGQxMWU0MTFmOTAxOGY2XCJcclxuXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2VDb25maWc7Il0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/env.js\n");

/***/ }),

/***/ "./firebase/firebase.js":
/*!******************************!*\
  !*** ./firebase/firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"firestore\": () => (/* binding */ firestore),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/firestore */ \"firebase/compat/firestore\");\n/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/storage */ \"firebase/compat/storage\");\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env */ \"./firebase/env.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nif (!firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apps.length) {\n    firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(_env__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n}\nconst firestore = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore();\nconst auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth();\nconst storage = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].storage();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNiO0FBQ0s7QUFDRjtBQUNFO0FBRW5DLElBQUksQ0FBQ0EsdUVBQW9CLEVBQUU7SUFDdkJBLHlFQUFzQixDQUFDQyw0Q0FBYyxDQUFDO0FBQzFDLENBQUM7QUFDRCxNQUFNSSxTQUFTLEdBQUdMLHFFQUFrQixFQUFFO0FBQ3RDLE1BQU1NLElBQUksR0FBR04sZ0VBQWEsRUFBRTtBQUM1QixNQUFNTyxPQUFPLEdBQUdQLG1FQUFnQixFQUFFO0FBR0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXMtYm9va2luZy1hcHAvLi9maXJlYmFzZS9maXJlYmFzZS5qcz9lNzY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvY29tcGF0L2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvYXV0aFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9jb21wYXQvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L3N0b3JhZ2UnO1xyXG5pbXBvcnQgZmlyZWJhc2VDb25maWcgZnJvbSAnLi9lbnYnO1xyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcclxufVxyXG5jb25zdCBmaXJlc3RvcmUgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcclxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcclxuXHJcblxyXG5leHBvcnQgeyBmaXJlc3RvcmUsIGF1dGgsc3RvcmFnZSB9OyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBwcyIsImxlbmd0aCIsImluaXRpYWxpemVBcHAiLCJmaXJlc3RvcmUiLCJhdXRoIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase/firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_UserContext__WEBPACK_IMPORTED_MODULE_1__]);\n_context_UserContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_UserContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Dev\\\\Github\\\\React\\\\Nextjs\\\\Internship-system-app\\\\pages\\\\_app.js\",\n            lineNumber: 5,\n            columnNumber: 24\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Dev\\\\Github\\\\React\\\\Nextjs\\\\Internship-system-app\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXFEO0FBQ3ZCO0FBRTlCLFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUFPLDhEQUFDSCw4REFBWTtrQkFBQyw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUFlO0FBQ2xFLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1cy1ib29raW5nLWFwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1VzZXJDb250ZXh0J1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8QXV0aFByb3ZpZGVyPjxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz48L0F1dGhQcm92aWRlcj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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

/***/ }),

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/compat/firestore":
/*!********************************************!*\
  !*** external "firebase/compat/firestore" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/firestore");;

/***/ }),

/***/ "firebase/compat/storage":
/*!******************************************!*\
  !*** external "firebase/compat/storage" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
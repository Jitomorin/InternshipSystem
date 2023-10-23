"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/jobs",{

/***/ "./pages/jobs.js":
/*!***********************!*\
  !*** ./pages/jobs.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/UserContext */ \"./context/UserContext.js\");\n/* harmony import */ var _public_loading_anim_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/loading_anim.webp */ \"./public/loading_anim.webp\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase/firestore */ \"./firebase/firestore.js\");\n/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase/firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Jobs = function() {\n    _s();\n    var ref = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext)(), currentUser = ref.currentUser, isUserLoading = ref.isUserLoading;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), amount = ref1[0], setAmount = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date()), date = ref2[0], setDate = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref3[0], setLoading = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), jobs = ref4[0], setJobs = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), selectedFrom = ref5[0], setSelectedFrom = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), selectedTo = ref6[0], setSelectedTo = ref6[1];\n    var route_uid;\n    var getOptions = function() {\n        var options = jobs.map(function(stop) {\n            return {\n                value: stop.name,\n                label: stop.name\n            };\n        });\n        return options;\n    };\n    // const isUserLoggedIn = () => {\n    //   if (authContext.user) {\n    //   } else {\n    //     routes.push(\"/login\");\n    //   }\n    // };\n    var getRoutes = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        setLoading(true);\n                        return [\n                            4,\n                            _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__.firestore.collection(\"routes\").where(\"from.name\", \"==\", selectedFrom).where(\"to.name\", \"==\", selectedTo).get().then(function(snapshot) {\n                                var data = [];\n                                snapshot.docs.forEach(function(doc) {\n                                    data = doc.data();\n                                });\n                                route_uid = data.uid;\n                            })\n                        ];\n                    case 1:\n                        _state.sent();\n                        setLoading(false);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function getRoutes() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (!isUserLoading && !currentUser) {\n            console.log(\"something is wrong\");\n            console.log(isUserLoading);\n            console.log(currentUser);\n            router.push(\"/\");\n        }\n        var getStopsList = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(function() {\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                _firebase_firebase__WEBPACK_IMPORTED_MODULE_7__.firestore.collection(\"jobs\").get().then(function(snapshot) {\n                                    var data = [];\n                                    snapshot.docs.forEach(function(doc) {\n                                        data.push(doc.data());\n                                    });\n                                    setJobs(data);\n                                })\n                            ];\n                        case 1:\n                            _state.sent();\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function getStopsList() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getStopsList();\n    // setToOptions(getToOptions());\n    // getToOptions().then((options) => {\n    //   console.log(options);\n    //   setToOptions(options);\n    // });\n    }, [\n        currentUser,\n        isUserLoading\n    ]);\n    var options = getOptions();\n    // function timeout(delay) {\n    //   return new Promise((res) => setTimeout(res, delay));\n    // }\n    // isUserLoggedIn();\n    if (isUserLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                src: _public_loading_anim_webp__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                alt: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Dev\\\\Github\\\\Nextjs\\\\Internship-system-app\\\\pages\\\\jobs.js\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Dev\\\\Github\\\\Nextjs\\\\Internship-system-app\\\\pages\\\\jobs.js\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, _this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-h-screen w-screen\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Github\\\\Nextjs\\\\Internship-system-app\\\\pages\\\\jobs.js\",\n                    lineNumber: 97,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"my-14\",\n                    id: \"how_section\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-screen bg-gray-400\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Dev\\\\Github\\\\Nextjs\\\\Internship-system-app\\\\pages\\\\jobs.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Dev\\\\Github\\\\Nextjs\\\\Internship-system-app\\\\pages\\\\jobs.js\",\n                    lineNumber: 99,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Dev\\\\Github\\\\Nextjs\\\\Internship-system-app\\\\pages\\\\jobs.js\",\n            lineNumber: 96,\n            columnNumber: 5\n        }, _this);\n    }\n};\n_s(Jobs, \"wJpOgwGNjkrKoynEnMaijWECTgA=\", false, function() {\n    return [\n        _context_UserContext__WEBPACK_IMPORTED_MODULE_3__.useAuthContext,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = Jobs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jobs);\nvar _c;\n$RefreshReg$(_c, \"Jobs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO1FBQ2pCLHFCQUNFLDhEQUFDc0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsb0RBQW9EO3NCQUNqRSw0RUFBQ2hELG1EQUFLO2dCQUFDaUQsR0FBRyxFQUFFbEQsaUVBQWU7Z0JBQUVtRCxHQUFHLEVBQUMsWUFBWTs7Ozs7cUJBQUc7Ozs7O2lCQUM1QyxDQUNOO0lBQ0osT0FBTztRQUNMLHFCQUNBLDhEQUFDSCxLQUFHO1lBQUNDLFNBQVMsRUFBQyx1QkFBdUI7OzhCQUNwQyw4REFBQ3JELDBEQUFNOzs7O3lCQUFHOzhCQUVWLDhEQUFDd0QsU0FBTztvQkFBQ0gsU0FBUyxFQUFDLE9BQU87b0JBQUNJLEVBQUUsRUFBQyxhQUFhOzhCQUNqQyw0RUFBQ0wsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLCtCQUErQjs7Ozs7NkJBRWhEOzs7Ozt5QkFDRTs7Ozs7O2lCQUNOLENBQ047SUFDRixDQUFDO0FBQ0gsQ0FBQztHQTdGS3pDLElBQUk7O1FBQzZCVixnRUFBYztRQUNwQ1Esa0RBQVM7OztBQUZwQkUsS0FBQUEsSUFBSTtBQStGViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2pvYnMuanM/ZWQ5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3REYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCB7IGF1dGhDb250ZXh0LCB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJyZWFjdC1kYXRlcGlja2VyXCI7XHJcbmltcG9ydCBMb2FkaW5nQW5pbWF0b24gZnJvbSBcIi4uL3B1YmxpYy9sb2FkaW5nX2FuaW0ud2VicFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgZ2V0U3RvcHMsIHNldFN0b3BzIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwiLi4vZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcblxyXG5jb25zdCBKb2JzID0gKCkgPT4ge1xyXG4gIGNvbnN0ICB7Y3VycmVudFVzZXIsaXNVc2VyTG9hZGluZ30gPSB1c2VBdXRoQ29udGV4dCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2pvYnMsIHNldEpvYnNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEZyb20sIHNldFNlbGVjdGVkRnJvbV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUbywgc2V0U2VsZWN0ZWRUb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB2YXIgcm91dGVfdWlkXHJcblxyXG4gIGNvbnN0IGdldE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gam9icy5tYXAoKHN0b3ApID0+IHtcclxuICAgICAgcmV0dXJuIHsgdmFsdWU6IHN0b3AubmFtZSwgbGFiZWw6IHN0b3AubmFtZSB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9O1xyXG4gIC8vIGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCkgPT4ge1xyXG4gIC8vICAgaWYgKGF1dGhDb250ZXh0LnVzZXIpIHtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHJvdXRlcy5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH07XHJcblxyXG4gIGNvbnN0IGdldFJvdXRlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBhd2FpdCBmaXJlc3RvcmVcclxuICAgICAgLmNvbGxlY3Rpb24oXCJyb3V0ZXNcIilcclxuICAgICAgLndoZXJlKFwiZnJvbS5uYW1lXCIsIFwiPT1cIiwgc2VsZWN0ZWRGcm9tKVxyXG4gICAgICAud2hlcmUoXCJ0by5uYW1lXCIsIFwiPT1cIiwgc2VsZWN0ZWRUbylcclxuICAgICAgLmdldCgpXHJcbiAgICAgIC50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICAgICAgZGF0YSA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJvdXRlX3VpZCA9IGRhdGEudWlkO1xyXG4gICAgICB9KTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgXHJcbiAgICBpZiAoIWlzVXNlckxvYWRpbmcgJiYgIWN1cnJlbnRVc2VyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgaXMgd3JvbmcnKVxyXG4gICAgICBjb25zb2xlLmxvZyhpc1VzZXJMb2FkaW5nKVxyXG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBnZXRTdG9wc0xpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IGZpcmVzdG9yZVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKFwiam9ic1wiKVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChzbmFwc2hvdCkge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBzZXRKb2JzKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGdldFN0b3BzTGlzdCgpO1xyXG4gICAgLy8gc2V0VG9PcHRpb25zKGdldFRvT3B0aW9ucygpKTtcclxuICAgIC8vIGdldFRvT3B0aW9ucygpLnRoZW4oKG9wdGlvbnMpID0+IHtcclxuICAgIC8vICAgY29uc29sZS5sb2cob3B0aW9ucyk7XHJcbiAgICAvLyAgIHNldFRvT3B0aW9ucyhvcHRpb25zKTtcclxuICAgIC8vIH0pO1xyXG4gIH0sIFtjdXJyZW50VXNlcixpc1VzZXJMb2FkaW5nXSk7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IGdldE9wdGlvbnMoKTtcclxuICAvLyBmdW5jdGlvbiB0aW1lb3V0KGRlbGF5KSB7XHJcbiAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlcykgPT4gc2V0VGltZW91dChyZXMsIGRlbGF5KSk7XHJcbiAgLy8gfVxyXG4gIC8vIGlzVXNlckxvZ2dlZEluKCk7XHJcbiAgaWYgKGlzVXNlckxvYWRpbmcpIHsgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e0xvYWRpbmdBbmltYXRvbn0gYWx0PVwiTG9hZGluZy4uLlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHctc2NyZWVuXCI+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm15LTE0XCIgaWQ9XCJob3dfc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpvYnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0RGF0ZVBpY2tlciIsIkhlYWRlciIsImF1dGhDb250ZXh0IiwidXNlQXV0aENvbnRleHQiLCJEYXRlUGlja2VyIiwiTG9hZGluZ0FuaW1hdG9uIiwiSW1hZ2UiLCJnZXRTdG9wcyIsInNldFN0b3BzIiwiZmlyZXN0b3JlIiwiU2VsZWN0IiwidXNlUm91dGVyIiwiQWxlcnQiLCJKb2JzIiwiY3VycmVudFVzZXIiLCJpc1VzZXJMb2FkaW5nIiwicm91dGVyIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiRGF0ZSIsImRhdGUiLCJzZXREYXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJqb2JzIiwic2V0Sm9icyIsInNlbGVjdGVkRnJvbSIsInNldFNlbGVjdGVkRnJvbSIsInNlbGVjdGVkVG8iLCJzZXRTZWxlY3RlZFRvIiwicm91dGVfdWlkIiwiZ2V0T3B0aW9ucyIsIm9wdGlvbnMiLCJtYXAiLCJzdG9wIiwidmFsdWUiLCJuYW1lIiwibGFiZWwiLCJnZXRSb3V0ZXMiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJkYXRhIiwiZG9jcyIsImZvckVhY2giLCJkb2MiLCJ1aWQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImdldFN0b3BzTGlzdCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInNlY3Rpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/jobs.js\n"));

/***/ })

});
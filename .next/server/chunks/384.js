"use strict";
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 8384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eu": () => (/* binding */ useAuthContext),
/* harmony export */   "Ho": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* unused harmony exports authContext, useAuth */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6307);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__]);
_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const authContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useAuth() {
    return useContext(authContext);
}
const AuthProvider = ({ children  })=>{
    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: isUserLoading , 1: setIsUserLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getUser = async ()=>{
            _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* .auth.onAuthStateChanged */ .I8.onAuthStateChanged(async (user)=>{
                setIsUserLoading(true);
                console.log("Authetication state s changing...");
                await _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* .firestore.collection */ .RZ.collection("users").doc(user?.uid).get().then((doc)=>{
                    const data = doc.data();
                    console.log("User context: " + data);
                    setCurrentUser(data || undefined);
                    //add check if data is undefined
                    setIsUserLoading(false);
                });
            });
        };
        getUser();
    }, []);
    const value = {
        currentUser,
        isUserLoading
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(authContext.Provider, {
        value: value,
        children: children
    });
};
function useAuthContext() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(authContext);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
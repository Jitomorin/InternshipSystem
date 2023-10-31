"use strict";
exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 6559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EC": () => (/* binding */ deleteBus),
/* harmony export */   "Kd": () => (/* binding */ editRoute),
/* harmony export */   "WO": () => (/* binding */ addBus),
/* harmony export */   "cg": () => (/* binding */ addRoutes),
/* harmony export */   "d$": () => (/* binding */ cancelBooking),
/* harmony export */   "jT": () => (/* binding */ approveBooking),
/* harmony export */   "mS": () => (/* binding */ editBus),
/* harmony export */   "mv": () => (/* binding */ addBooking),
/* harmony export */   "qW": () => (/* binding */ deleteRoute)
/* harmony export */ });
/* unused harmony exports addUser, getAllUsers, getUserDetails, getStops, getAllJobsSlugs, getJobBySlug */
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6307);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__]);
([_firebase__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function addUser(email, uid, fullname, IDnum, isAdmin) {
    firestore.collection("users").doc(uid).set({
        admin: isAdmin,
        IDnum: IDnum,
        email: email,
        fullname: fullname,
        uid: uid
    });
}
function getAllUsers() {
    firestore.collection("users").get().then(function(snapshot) {
        snapshot.forEach(function(cSnapshot) {
            return cSnapshot;
        });
    });
}
function getUserDetails(uid) {
    firestore.collection("users").doc(uid).get().then((snapshot)=>{
        console.log(snapshot.data());
    });
}
async function deleteRoute(uid) {
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("routes").doc(uid).delete().then(()=>{
        console.log("route deleted");
    });
}
async function deleteBus(uid) {
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("busses").doc(uid).delete().then(()=>{
        console.log("bus deleted");
    });
}
async function cancelBooking(uid) {
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("bookings").doc(uid).delete().then(()=>{
        console.log("route deleted");
    });
}
async function approveBooking(uid) {
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("bookings").doc(uid).update({
        paid: true
    }).then(()=>{
        console.log("Booking payment approved");
    }).catch((error)=>{
        console.log(error);
    });
}
function addBooking(userID, busID, routeID, departure_time, num_of_tickets, total_price, date) {
    const uid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("bookings").doc(uid).set({
        uid: uid,
        user_uid: userID,
        bus_id: busID,
        route_id: routeID,
        departure_time: departure_time,
        number_of_tickets: num_of_tickets,
        total_price: total_price,
        date: date,
        paid: false
    }).then(()=>{
        console.log("booking made");
    }).catch((error)=>{
        console.log(error);
    });
}
// function editBooking( uid,busID, routeID, departure_time,num_of_tickets,date) {
//   firestore.collection("bookings").doc(uid).update({
//     bus_id: busID,
//     route_id: routeID,
//     departure_time: departure_time,
//     number_of_tickets: num_of_tickets,
//     total_price: num_of_tickets*1000,
//     date: date,
//   }).then(() => {
//     console.log("booking changes made")
//   }).catch((error) => {
//     console.log(error)
//   })
// }
async function getAllJobsSlugs() {
    let slugs = [];
    firestore.collection("jobs").get().then((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
            let uid = doc.data().uid;
            let slug = generateSlug(uid);
            slugs.push(slug);
        });
        return slugs.map((slug)=>{
            slug;
        });
    });
}
async function getJobBySlug(slug) {
    // let slugs=[]
    console.log(slug);
    firestore.collection("jobs").where("uid", slug).get().then((snapshot)=>{
        return snapshot.docs.map((doc)=>{
            doc.data();
        });
    });
}
async function addBus(dep_time, seats, num_plate, routeID) {
    const uid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("busses").doc(uid).set({
        departure_time: dep_time,
        number_of_seats: seats,
        number_plate: num_plate,
        routes_uid: routeID,
        uid: uid
    }).then(()=>{
        console.log("bus added");
    }).catch((error)=>{
        console.log(error);
    });
}
async function editBus(uid, dep_time, seats, num_plate, routeID) {
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("busses").doc(uid).update({
        departure_time: dep_time,
        number_of_seats: seats,
        number_plate: num_plate,
        routes_uid: routeID
    }).then(()=>{
        console.log("bus changes made");
    }).catch((error)=>{
        console.log(error);
    });
}
async function addRoutes(from, to) {
    let isPresent = false;
    const uid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("routes").where("from.name", "==", from.name).where("to.name", "==", to.name).get().then((snapshot)=>{
        isPresent = !snapshot.empty;
        if (isPresent) {
            console.log("route already exists");
        } else {
            _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("routes").doc(uid).set({
                from: from,
                to: to,
                uid: uid
            }).then(()=>{
                console.log("Route added");
            }).catch((error)=>{
                console.log(error);
            });
        }
    });
}
async function editRoute(uid, from, to) {
    _firebase__WEBPACK_IMPORTED_MODULE_0__/* .firestore.collection */ .RZ.collection("routes").doc(uid).update({
        from: from,
        to: to
    }).then(()=>{
        console.log("Route changes made");
    }).catch((error)=>{
        console.log(error);
    });
}
async function getStops() {
    firestore.collection("stops").get().then(function(snapshot) {
        console.log(snapshot);
        return snapshot;
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
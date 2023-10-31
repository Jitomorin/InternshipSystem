"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964,459];
exports.modules = {

/***/ 8144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/bus-solid.3369ab7f.svg","height":512,"width":512});

/***/ }),

/***/ 4760:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/route-solid.76779d23.svg","height":512,"width":512});

/***/ }),

/***/ 9559:
/***/ (() => {

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/ticket-solid.0f08e8dc.svg","height":512,"width":576});

/***/ }),

/***/ 603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6307);
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3661);
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6559);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__]);
([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















// const DailogBox = (props) => {
//   const [routes, setRoutes] = useState([]);
//   const [busses, setBusses] = useState([]);
//   const [selectedFrom, setSelectedFrom] = useState();
//   const [selectedTo, setSelectedTo] = useState();
//   const departureTimes = [
//     { value: "10:00", label: "10:00" },
//     { value: "11:00", label: "11:00" },
//     { value: "13:00", label: "13:00" },
//     { value: "15:00", label: "15:00" },
//   ];
//   const [numberPlate, setNumberPlate] = useState();
//   const [seats, setSeats] = useState();
//   const [selectedRouteID, setSelectedRouteID] = useState();
//   const [selectedDepTime, setSelectedDepTime] = useState();
//   useEffect(() => {
//     const getRoutesList = async () => {
//       await firestore
//         .collection("routes")
//         .get()
//         .then(function (snapshot) {
//           const data = [];
//           snapshot.docs.forEach((doc) => {
//             data.push(doc.data());
//           });
//           setRoutes(data);
//         });
//     };
//     getRoutesList();
//   }, []);
//   return (
//     <Dialog
//       sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
//       maxWidth="xs"
//       open={props.open}
//     >
//       <DialogTitle>Add Bus</DialogTitle>
//       <DialogContent dividers>
//         <div className="flex flex-col space-y-4">
//           <TextField
//             placeholder={"Number plate"}
//             onChange={(value) => {
//               setNumberPlate(value.target.value);
//             }}
//           />
//           <TextField
//             placeholder={"Number of seats"}
//             onChange={(value) => {
//               setSeats(value.target.value);
//             }}
//           />
//           <div>
//             <InputLabel>Route</InputLabel>
//             <Select
//               onChange={(e) => {
//                 setSelectedRouteID(e.target.value);
//               }}
//             >
//               {routes.map((route) => {
//                 return (
//                   <MenuItem key={route.uid} value={route.uid}>
//                     <div>
//                       {route.from.name} - {route.to.name}
//                     </div>
//                   </MenuItem>
//                 );
//               })}
//             </Select>
//           </div>
//           <div>
//             <InputLabel>Departure Time</InputLabel>
//             <Select
//               onChange={(e) => {
//                 setSelectedDepTime(e.target.value);
//               }}
//             >
//               {departureTimes.map((time) => {
//                 return (
//                   <MenuItem key={time.label} value={time.value}>
//                     <div>{time.label}</div>
//                   </MenuItem>
//                 );
//               })}
//             </Select>
//           </div>
//         </div>
//       </DialogContent>
//       <DialogActions className="bg-pink_red text-white underline font-bold">
//         <button autoFocus onClick={props.onClose}>
//           Cancel
//         </button>
//         <button
//           onClick={() => {
//             // console.log(selectedRouteID);
//             props.addBus(numberPlate, seats, selectedRouteID, selectedDepTime);
//           }}
//         >
//           Add
//         </button>
//       </DialogActions>
//     </Dialog>
//   );
// };
const Bookings = ()=>{
    const { 0: bookings , 1: setBookings  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: change , 1: setChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentUID , 1: setCurrentID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // const [from, setFrom] = useState();
    // const [to, setTo] = useState();
    // const [id, setId] = useState();
    // const [editMode, setEditMode] = useState(false);
    const refresh = ()=>{
        setChange(!change);
    };
    const closeDialog = ()=>{
        setOpen(false);
        refresh();
    };
    const handleEdit = (uid, date, busID, departure_time, number_of_tickets, routeID)=>{
        //when edit button is clicked
        setCurrentID(uid);
        (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__.editBooking)(uid, busID, routeID, departure_time, number_of_tickets, date);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getBookings = async ()=>{
            await _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* .firestore.collection */ .RZ.collection("bookings").get().then(function(snapshot) {
                const data = [];
                snapshot.docs.forEach((doc)=>{
                    data.push(doc.data());
                });
                console.log(data);
                setBookings(data);
            });
        };
        getBookings();
    }, [
        change
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold pl-4 text-left",
                children: "Bookings"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default()), {
                    component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default()),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            minWidth: 650
                        },
                        size: "small",
                        "aria-label": "a dense table",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9___default()), {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default()), {
                                    sx: {
                                        bgcolor: "#B97375",
                                        color: "white"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "1.4rem",
                                                textAlign: "left"
                                            },
                                            children: "Date"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "1.4rem",
                                                textAlign: "left"
                                            },
                                            align: "right",
                                            children: "Number of Tickets"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "1.4rem",
                                                textAlign: "left"
                                            },
                                            align: "right",
                                            children: "Departure Time"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "1.4rem",
                                                textAlign: "left"
                                            },
                                            align: "right",
                                            children: "Status"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "1.4rem",
                                                textAlign: "left"
                                            },
                                            align: "right",
                                            children: "Route ID"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "1.4rem",
                                                textAlign: "left"
                                            },
                                            children: "ID"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            sx: {
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "1.4rem",
                                                textAlign: "left"
                                            },
                                            children: "Total"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default()), {
                                children: bookings.map((booking)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        sx: {
                                            "&:last-child td, &:last-child th": {
                                                border: 0
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                component: "th",
                                                scope: "row",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: booking.date
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: booking.number_of_tickets
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: booking.departure_time
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                children: !booking.paid ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: "Not paid"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: "Paid"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: booking.route_id
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: booking.uid
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                    children: booking.total_price
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>{
                                                        (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__/* .approveBooking */ .jT)(booking.uid).then(()=>{
                                                            refresh();
                                                        });
                                                    },
                                                    className: "underline text-pink_red",
                                                    children: "Approve Payment"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                align: "left",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>{
                                                        (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__/* .cancelBooking */ .d$)(booking.uid).then(()=>{
                                                            refresh();
                                                        });
                                                    },
                                                    className: "underline text-pink_red",
                                                    children: "Cancel"
                                                })
                                            })
                                        ]
                                    }, booking.uid))
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bookings);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9915:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6307);
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3661);
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6559);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__]);
([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const DailogBox = (props)=>{
    const { 0: routes , 1: setRoutes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedFrom , 1: setSelectedFrom  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: selectedTo , 1: setSelectedTo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const departureTimes = [
        {
            value: "10:00",
            label: "10:00"
        },
        {
            value: "11:00",
            label: "11:00"
        },
        {
            value: "13:00",
            label: "13:00"
        },
        {
            value: "15:00",
            label: "15:00"
        }, 
    ];
    const { 0: numberPlate , 1: setNumberPlate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: seats , 1: setSeats  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: selectedRouteID , 1: setSelectedRouteID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: selectedDepTime , 1: setSelectedDepTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getRoutesList = async ()=>{
            await _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* .firestore.collection */ .RZ.collection("routes").get().then(function(snapshot) {
                const data = [];
                snapshot.docs.forEach((doc)=>{
                    data.push(doc.data());
                });
                setRoutes(data);
            });
        };
        getRoutesList();
    }, []);
    if (props.type === "add") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
            sx: {
                "& .MuiDialog-paper": {
                    width: "80%",
                    maxHeight: 435
                }
            },
            maxWidth: "xs",
            open: props.open,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogTitle, {
                    children: "Add Bus"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContent, {
                    dividers: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.TextField, {
                                placeholder: "Number plate",
                                onChange: (value)=>{
                                    setNumberPlate(value.target.value);
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.TextField, {
                                placeholder: "Number of seats",
                                onChange: (value)=>{
                                    setSeats(value.target.value);
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.InputLabel, {
                                        children: "Route"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Select, {
                                        onChange: (e)=>{
                                            setSelectedRouteID(e.target.value);
                                        },
                                        children: routes.map((route)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.MenuItem, {
                                                value: route.uid,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        route.from.name,
                                                        " - ",
                                                        route.to.name
                                                    ]
                                                })
                                            }, route.uid);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.InputLabel, {
                                        children: "Departure Time"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Select, {
                                        onChange: (e)=>{
                                            setSelectedDepTime(e.target.value);
                                        },
                                        children: departureTimes.map((time)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.MenuItem, {
                                                value: time.value,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: time.label
                                                })
                                            }, time.label);
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogActions, {
                    className: "bg-pink_red text-white underline font-bold",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            autoFocus: true,
                            onClick: props.onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                // console.log(selectedRouteID);
                                props.addBus(numberPlate, seats, selectedRouteID, selectedDepTime);
                                props.onClose();
                            },
                            children: "Add"
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
            sx: {
                "& .MuiDialog-paper": {
                    width: "80%",
                    maxHeight: 435
                }
            },
            maxWidth: "xs",
            open: props.open,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogTitle, {
                    children: "Edit Bus"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContent, {
                    dividers: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col space-y-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.TextField, {
                                placeholder: "Number plate",
                                onChange: (value)=>{
                                    setNumberPlate(value.target.value);
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.TextField, {
                                placeholder: "Number of seats",
                                onChange: (value)=>{
                                    setSeats(value.target.value);
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.InputLabel, {
                                        children: "Route"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Select, {
                                        onChange: (e)=>{
                                            setSelectedRouteID(e.target.value);
                                        },
                                        children: routes.map((route)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.MenuItem, {
                                                value: route.uid,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        route.from.name,
                                                        " - ",
                                                        route.to.name
                                                    ]
                                                })
                                            }, route.uid);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.InputLabel, {
                                        children: "Departure Time"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Select, {
                                        onChange: (e)=>{
                                            setSelectedDepTime(e.target.value);
                                        },
                                        children: departureTimes.map((time)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.MenuItem, {
                                                value: time.value,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: time.label
                                                })
                                            }, time.label);
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogActions, {
                    className: "bg-pink_red text-white underline font-bold",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            autoFocus: true,
                            onClick: props.onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                // console.log(selectedRouteID);
                                (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__/* .editBus */ .mS)(props.uid, selectedDepTime, seats, numberPlate, selectedRouteID).then(()=>{
                                    props.onClose();
                                });
                            },
                            children: "Save"
                        })
                    ]
                })
            ]
        });
    }
};
const Busses = (props)=>{
    const { 0: busses , 1: setBusses  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: change , 1: setChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: currentUID , 1: setCurrentUID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const closeDialog = ()=>{
        setOpen(false);
        refresh();
    };
    const refresh = ()=>{
        setChange(!change);
    };
    const addBusToDb = (numberPlate, seats, selectedRouteID, selectedDepTime)=>{
        (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__/* .addBus */ .WO)(selectedDepTime, seats, numberPlate, selectedRouteID).then(()=>{
            setOpen(false);
            refresh();
        });
    };
    const handleEdit = (id)=>{
    //shen edit button is clicked
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getBusses = async ()=>{
            await _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* .firestore.collection */ .RZ.collection("busses").get().then(function(snapshot) {
                const data = [];
                snapshot.docs.forEach((doc)=>{
                    data.push(doc.data());
                });
                console.log(data);
                setBusses(data);
            });
        };
        getBusses();
    }, [
        change
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold pl-4 text-left",
                children: "Busses"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default()), {
                        component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default()),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                minWidth: 650
                            },
                            size: "small",
                            "aria-label": "a dense table",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        sx: {
                                            bgcolor: "#B97375",
                                            color: "white"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                    textAlign: "left"
                                                },
                                                children: "Number Plate"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                    textAlign: "left"
                                                },
                                                align: "right",
                                                children: "Number of Seats"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                    textAlign: "left"
                                                },
                                                align: "right",
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                    textAlign: "left"
                                                },
                                                align: "right",
                                                children: "Route ID"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                    textAlign: "left"
                                                },
                                                children: "Departure Time"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>{
                                                        setType("add");
                                                        setOpen(true);
                                                    },
                                                    className: "underline text-white",
                                                    children: "Add"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    children: busses.map((bus)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            sx: {
                                                "&:last-child td, &:last-child th": {
                                                    border: 0
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    component: "th",
                                                    scope: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: bus.number_plate
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: bus.number_of_seats
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: bus.uid
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: bus.routes_uid
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: bus.departure_time
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>{
                                                            setType("edit");
                                                            setCurrentUID(bus.uid);
                                                            setOpen(true);
                                                        },
                                                        className: "underline text-pink_red",
                                                        children: "Edit"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>{
                                                            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__/* .deleteBus */ .EC)(bus.uid).then(()=>{
                                                                refresh();
                                                            });
                                                        },
                                                        className: "underline text-pink_red",
                                                        children: "Delete"
                                                    })
                                                })
                                            ]
                                        }, bus.uid))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DailogBox, {
                        open: open,
                        type: type,
                        uid: currentUID,
                        onClose: closeDialog,
                        addBus: addBusToDb
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Busses);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6307);
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3661);
/* harmony import */ var _mui_material_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6146);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1168);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6559);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__]);
([_firebase_firebase__WEBPACK_IMPORTED_MODULE_2__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const DailogBox = (props)=>{
    const { 0: stops , 1: setStops  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: selectedFrom , 1: setSelectedFrom  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: selectedTo , 1: setSelectedTo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleOk = ()=>{
        onClose(value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getStopsList = async ()=>{
            await _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* .firestore.collection */ .RZ.collection("stops").get().then(function(snapshot) {
                const data = [];
                snapshot.docs.forEach((doc)=>{
                    data.push(doc.data());
                });
                setStops(data);
            });
        };
        getStopsList();
    }, []);
    if (props.type === "add") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
            sx: {
                "& .MuiDialog-paper": {
                    width: "80%",
                    maxHeight: 435
                }
            },
            maxWidth: "xs",
            open: props.open,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogTitle, {
                    children: "Add Route"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContent, {
                    dividers: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex space-x-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.InputLabel, {
                                children: "From"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Select, {
                                placeholder: "From",
                                onChange: (e)=>{
                                    setSelectedFrom(e.target.value);
                                },
                                children: stops.map((stop)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.MenuItem, {
                                        value: stop,
                                        children: stop.name
                                    }, stop.uid);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.InputLabel, {
                                children: "To"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Select, {
                                placeholder: "To",
                                onChange: (e)=>{
                                    setSelectedTo(e.target.value);
                                },
                                children: stops.map((stop)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.MenuItem, {
                                        value: stop,
                                        children: stop.name
                                    }, stop.uid);
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogActions, {
                    className: "bg-pink_red text-white underline font-bold",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            autoFocus: true,
                            onClick: props.onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__/* .addRoutes */ .cg)(selectedFrom, selectedTo).then(()=>{
                                    props.onClose();
                                });
                            },
                            children: "Add"
                        })
                    ]
                })
            ]
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Dialog, {
            sx: {
                "& .MuiDialog-paper": {
                    width: "80%",
                    maxHeight: 435
                }
            },
            maxWidth: "xs",
            open: props.open,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogTitle, {
                    children: "Edit Route"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogContent, {
                    dividers: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex space-x-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.InputLabel, {
                                children: "From"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Select, {
                                placeholder: "From",
                                onChange: (e)=>{
                                    setSelectedFrom(e.target.value);
                                },
                                children: stops.map((stop)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.MenuItem, {
                                        value: stop,
                                        children: stop.name
                                    }, stop.uid);
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.InputLabel, {
                                children: "To"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.Select, {
                                placeholder: "To",
                                onChange: (e)=>{
                                    setSelectedTo(e.target.value);
                                },
                                children: stops.map((stop)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_14__.MenuItem, {
                                        value: stop,
                                        children: stop.name
                                    }, stop.uid);
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__.DialogActions, {
                    className: "bg-pink_red text-white underline font-bold",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            autoFocus: true,
                            onClick: props.onClose,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>{
                                (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__/* .editRoute */ .Kd)(props.uid, selectedFrom, selectedTo).then(()=>{
                                    props.onClose();
                                });
                            },
                            children: "Save"
                        })
                    ]
                })
            ]
        });
    }
};
const Routes = (props)=>{
    const { 0: routes , 1: setRoutes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: change , 1: setChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: currentUID , 1: setCurrentUID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: dialogType , 1: setDialogType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // const [to, setTo] = useState();
    // const [id, setId] = useState();
    // const [editMode, setEditMode] = useState(false);
    const closeDialog = ()=>{
        setOpen(false);
        refresh();
    };
    const refresh = ()=>{
        setChange(!change);
    };
    const handleEdit = (id)=>{};
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getRoutesList = async ()=>{
            await _firebase_firebase__WEBPACK_IMPORTED_MODULE_2__/* .firestore.collection */ .RZ.collection("routes").get().then(function(snapshot) {
                const data = [];
                snapshot.docs.forEach((doc)=>{
                    data.push(doc.data());
                });
                console.log(data);
                setRoutes(data);
            });
        };
        getRoutesList();
    }, [
        change
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "h-full w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold pl-4 text-left",
                children: "Routes"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_8___default()), {
                        component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_11___default()),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default()), {
                            sx: {
                                minWidth: 650
                            },
                            size: "small",
                            "aria-label": "a dense table",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default()), {
                                        sx: {
                                            bgcolor: "#B97375",
                                            color: "white"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                    textAlign: "left"
                                                },
                                                children: "From"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                    textAlign: "left"
                                                },
                                                align: "right",
                                                children: "To"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                sx: {
                                                    color: "white",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                    textAlign: "left"
                                                },
                                                align: "right",
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: ()=>{
                                                        setDialogType("add");
                                                        setOpen(true);
                                                    },
                                                    className: "underline text-white",
                                                    children: "Add"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    children: routes.map((route)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_10___default()), {
                                            sx: {
                                                "&:last-child td, &:last-child th": {
                                                    border: 0
                                                }
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    component: "th",
                                                    scope: "row",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: route.from.name
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: route.to.name
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: route.uid
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>{
                                                            setCurrentUID(route.uid);
                                                            setDialogType("edit");
                                                            setOpen(true);
                                                        },
                                                        className: "underline text-pink_red",
                                                        children: "Edit"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    align: "left",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: ()=>{
                                                            (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_13__/* .deleteRoute */ .qW)(route.uid).then(()=>{
                                                                refresh();
                                                            });
                                                        },
                                                        className: "underline text-pink_red",
                                                        children: "Delete"
                                                    })
                                                })
                                            ]
                                        }, route.uid))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DailogBox, {
                        open: open,
                        onClose: closeDialog,
                        type: dialogType,
                        uid: currentUID
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2626:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(482);
/* harmony import */ var _public_bus_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8144);
/* harmony import */ var _public_route_solid_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4760);
/* harmony import */ var _public_ticket_solid_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9559);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4683);
/* harmony import */ var _components_busses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9915);
/* harmony import */ var _components_bookings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(603);
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8384);
/* harmony import */ var _public_loading_anim_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7302);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_routes__WEBPACK_IMPORTED_MODULE_3__, _components_header__WEBPACK_IMPORTED_MODULE_7__, _components_busses__WEBPACK_IMPORTED_MODULE_8__, _components_bookings__WEBPACK_IMPORTED_MODULE_9__, _context_UserContext__WEBPACK_IMPORTED_MODULE_10__]);
([_components_routes__WEBPACK_IMPORTED_MODULE_3__, _components_header__WEBPACK_IMPORTED_MODULE_7__, _components_busses__WEBPACK_IMPORTED_MODULE_8__, _components_bookings__WEBPACK_IMPORTED_MODULE_9__, _context_UserContext__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Admin = ()=>{
    const { currentUser , isUserLoading  } = (0,_context_UserContext__WEBPACK_IMPORTED_MODULE_10__/* .useAuthContext */ .Eu)();
    if (isUserLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col items-center justify-center h-screen",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: _public_loading_anim_webp__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                alt: "Loading..."
            })
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "min-h-screen w-screen",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-1/3 px-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_routes__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-1/3 px-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_busses__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-1/3 px-10 mb-10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_bookings__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                })
            ]
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6146:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Add");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 3661:
/***/ ((module) => {

module.exports = require("@mui/material/Fab");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 7986:
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3773:
/***/ ((module) => {

module.exports = import("firebase/compat/app");;

/***/ }),

/***/ 4826:
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ 741:
/***/ ((module) => {

module.exports = import("firebase/compat/firestore");;

/***/ }),

/***/ 451:
/***/ ((module) => {

module.exports = import("firebase/compat/storage");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,307,384,305,302,683,559], () => (__webpack_exec__(2626)));
module.exports = __webpack_exports__;

})();
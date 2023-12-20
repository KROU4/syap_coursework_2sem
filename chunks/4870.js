"use strict";
exports.id = 4870;
exports.ids = [4870];
exports.modules = {

/***/ 4870:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_pathChecking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2824);
/* harmony import */ var _carousel_testimonial_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7008);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_carousel_testimonial_carousel__WEBPACK_IMPORTED_MODULE_2__]);
_carousel_testimonial_carousel__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Testimonial = ({ bg_jacerta  })=>{
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: bg_jacerta ? "testimonial-section bg-light-base py-24 dark:bg-jacarta-800" : `testimonial-section ${(0,_utils_pathChecking__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(route.asPath, "/home/home_10") ? "bg-white" : "bg-light-base"} py-24 dark:bg-jacarta-900`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container relative overflow-hidden xl:left-[calc((100vw-1202px)/4)] xl:max-w-[calc(1202px+((100vw-1202px)/2))] xl:pr-[calc((100vw-1176px)/2)]",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto mb-12 max-w-sm text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white",
                                children: "Satisfied Customers"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg dark:text-jacarta-300",
                                children: "10,000k+ Customers those who already tried our services."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_carousel_testimonial_carousel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonial);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 8297;
exports.ids = [8297];
exports.modules = {

/***/ 8297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dao_TrustedPartner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/dao/Partner1.jsx

const Partner1 = ()=>{
    const partnerItem = [
        "partner_dao_1",
        "partner_dao_2",
        "partner_dao_3",
        "partner_dao_4",
        "partner_dao_5",
        "partner_dao_6",
        "partner_dao_7",
        "partner_dao_1",
        "partner_dao_2",
        "partner_dao_3",
        "partner_dao_4",
        "partner_dao_5",
        "partner_dao_6",
        "partner_dao_7", 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: partnerItem.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `/images/dao/${item}.jpg`,
                    alt: "partner item"
                })
            }, i)
        )
    });
};
/* harmony default export */ const dao_Partner1 = (Partner1);

;// CONCATENATED MODULE: ./components/dao/Partner2.jsx

const Partner2 = ()=>{
    const partnerItem = [
        "partner_dao_8",
        "partner_dao_9",
        "partner_dao_10",
        "partner_dao_11",
        "partner_dao_12",
        "partner_dao_13",
        "partner_dao_14",
        "partner_dao_8",
        "partner_dao_9",
        "partner_dao_10",
        "partner_dao_11",
        "partner_dao_12",
        "partner_dao_13",
        "partner_dao_14", 
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: partnerItem.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100 bg-white p-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: `/images/dao/${item}.jpg`,
                    alt: "partner item"
                })
            }, i)
        )
    });
};
/* harmony default export */ const dao_Partner2 = (Partner2);

;// CONCATENATED MODULE: ./components/dao/TrustedPartner.jsx



const TrustedPartner = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "overflow-hidden py-24 dark:bg-jacarta-900",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-auto mb-14 max-w-xl text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white",
                                children: "They trust Us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-lg dark:text-jacarta-300",
                                children: "NFTs can be used to represent items such as photos, videos, audio, and other types of digital files."
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-8 flex animate-marqueeRight space-x-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(dao_Partner1, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex animate-marquee space-x-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(dao_Partner2, {})
                })
            ]
        })
    });
};
/* harmony default export */ const dao_TrustedPartner = (TrustedPartner);


/***/ })

};
;
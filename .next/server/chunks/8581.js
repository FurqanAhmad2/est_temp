"use strict";
exports.id = 8581;
exports.ids = [8581];
exports.modules = {

/***/ 8581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ App_About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/data/App/about.json
var about = __webpack_require__(9153);
;// CONCATENATED MODULE: ./src/data/App/about-rtl.json
const about_rtl_namespaceObject = JSON.parse('{"features":[{"icon":"fas fa-tag","title":"تصفية الملاحظات باستخدام الكلمات الرئيسية المتطابقة"},{"icon":"fas fa-sync","title":"مزامنة تلقائية في الوقت الحقيقي"},{"icon":"fas fa-text-width","title":"محرر الملاحظات الكامل مع خيارات النص المنسق"}],"accordions":[{"id":1,"title":"إنشاء وحفظ الملاحظات الخاصة بك مع الوسائط المتعددة","content":"يتم دعم الصور ومقاطع الفيديو وملفات PDF والملفات الصوتية. قم بإنشاء تعبيرات رياضية ومخططات مباشرة من التطبيق. التقط صورًا باستخدام تطبيق الهاتف المحمول واحفظها في ملاحظة."},{"id":2,"title":"ملحق Web Clipper","content":"يتم دعم الصور ومقاطع الفيديو وملفات PDF والملفات الصوتية. قم بإنشاء تعبيرات رياضية ومخططات مباشرة من التطبيق. التقط صورًا باستخدام تطبيق الهاتف المحمول واحفظها في ملاحظة."},{"id":3,"title":"حماية ملاحظتك مع القفل","content":"يتم دعم الصور ومقاطع الفيديو وملفات PDF والملفات الصوتية. قم بإنشاء تعبيرات رياضية ومخططات مباشرة من التطبيق. التقط صورًا باستخدام تطبيق الهاتف المحمول واحفظها في ملاحظة."}],"thirdFeatures":[{"active":false,"title":"تصفية الملاحظات باستخدام الكلمات الرئيسية المتطابقة"},{"active":true,"title":"8 موضوعات جميلة لتختارها"},{"active":false,"title":"وفر الطاقة لجهازك"},{"active":false,"title":"من السهل التبديل بين الوضع الفاتح والداكن"}],"integrations":["/assets/img/about/intg1.png","/assets/img/about/intg5.png","/assets/img/about/intg4.png","/assets/img/about/intg3.png","/assets/img/about/intg2.png"]}');
;// CONCATENATED MODULE: ./src/components/App/About/FirstContent.jsx

const FirstContent = ({ features , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content frs-content",
        id: "about",
        "data-scroll-index": "2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img mb-30 mb-lg-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/ipad.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-head style-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "title_small",
                                                children: rtl ? "نوتيرو - تطبيق مذكرة سهل الاستخدام" : "Notero - Easy Notes App"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mb-30",
                                                children: [
                                                    rtl ? "تطبيق لاصحاب" : "The Notero For",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            " ",
                                                            rtl ? "الابداع" : "Creatives",
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "text mb-40",
                                        children: [
                                            rtl && "حافظ على تركيزك وإنتاجيتك مع مساحة  خالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ.",
                                            !rtl && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                children: [
                                                    "Stay focused and productive with a clean and clutter-free note ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    " space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: features.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "d-flex align-items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: item.icon
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-bold",
                                                        children: item.title
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "page-contact-5.html",
                                        className: "btn rounded-pill bg-blue4 fw-bold text-white mt-50",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                            children: " Free Register "
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s4_lines.png",
                alt: "",
                className: "lines"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s4_bubble.png",
                alt: "",
                className: "bubble"
            })
        ]
    });
};
/* harmony default export */ const About_FirstContent = (FirstContent);

;// CONCATENATED MODULE: ./src/components/App/About/SecondContent.jsx

const SecondContent = ({ accordions , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "section4",
        className: "content sec-content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5 order-2 order-lg-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "section-head style-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "title_small",
                                                children: rtl ? "إدارة أفضل للملاحظات" : "Better Note Management"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                                className: "mb-30",
                                                children: [
                                                    rtl ? "ملاحظاتك" : "Our Web ",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            " ",
                                                            rtl ? "في امان" : "Services",
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text mb-40",
                                        children: rtl ? "يتزامن تلقائيًا عبر جميع أجهزتك. يمكنك أيضًا الوصول إلى الملاحظات وكتابتها بدون اتصال بالإنترنت" : "Build your websites with us."
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "faq style-3 style-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "accordion",
                                            id: "accordionExample",
                                            children: accordions.map((accordion, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "accordion-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "accordion-header",
                                                            id: `heading${accordion.id}`,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                className: `accordion-button ${index !== 0 ? "collapsed" : ""}`,
                                                                type: "button",
                                                                "data-bs-toggle": "collapse",
                                                                "data-bs-target": `#collapse${accordion.id}`,
                                                                "aria-expanded": "true",
                                                                "aria-controls": `collapse${accordion.id}`,
                                                                children: accordion.title
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            id: `collapse${accordion.id}`,
                                                            className: `accordion-collapse collapse ${index === 0 ? "show" : ""}`,
                                                            "aria-labelledby": `heading${accordion.id}`,
                                                            "data-bs-parent": "#accordionExample",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "accordion-body",
                                                                children: accordion.content
                                                            })
                                                        })
                                                    ]
                                                }, index))
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 order-0 order-lg-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img mb-30 mb-lg-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/2mobiles.png",
                                    alt: ""
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "section5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s4_bubble2.png",
                alt: "",
                className: "bubble2"
            })
        ]
    });
};
/* harmony default export */ const About_SecondContent = (SecondContent);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/App/About/ThirdContent.jsx


const ThirdContent = ({ features , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content trd-content",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "img mb-30 mb-lg-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/assets/img/about/about_s4_img3.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "section-head style-4",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                                            className: "mb-30",
                                            children: [
                                                rtl ? "ركز أكثر مع" : "Our Designing ",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: rtl ? "المظهر الداكن" : "Services include"
                                                }),
                                                " "
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text mb-40",
                                        children: rtl ? "قم بتطبيق سمات نوتيرو الأنيقة حسب ذوقك. تعمل السمات المظلمة بشكل ممتاز لأولئك الذين يفضلون الوضع الخالي من الإلهاء." : "we have team of expert graphic designers"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: features.map((feature, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: `d-flex align-items-center ${feature.active ? "" : "op-4"}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "bi bi-dot fs-2 me-2 lh-1 color-blue4"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                        className: "fw-bold",
                                                        children: feature.title
                                                    })
                                                ]
                                            }, index))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/page-contact-app",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "btn rounded-pill bg-blue4 fw-bold text-white mt-50",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                children: rtl ? "اكتشف الآن" : "Discovery Now"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/about_s4_bubble.png",
                alt: "",
                className: "bubble"
            })
        ]
    });
};
/* harmony default export */ const About_ThirdContent = (ThirdContent);

;// CONCATENATED MODULE: ./src/components/App/About/Integration.jsx

const Integration = ({ integrations , rtl  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "integration pt-60",
        "data-scroll-index": "3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section-head text-center style-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                        className: "title_small",
                        children: rtl ? "دفعة لمرة واحدة" : "One-Time Payment"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        className: "mb-20",
                        children: [
                            rtl ? "متوافق مع" : "Integration With",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: rtl ? "التطبيقات الشعبية" : "Popular Apps"
                            }),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: rtl ? "نوتيرو يتكامل مع التطبيقات الشعبية. تساعدك على التواصل والتعاون بسهولة" : "Notero intergrate with popular apps. Help you easy to connect and collaboration"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "content",
                    children: integrations.map((integration, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "img",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: integration,
                                alt: "",
                                className: "mt-30"
                            })
                        }, index))
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/assets/img/about/intg_back.png",
                alt: "",
                className: "intg-back"
            })
        ]
    });
};
/* harmony default export */ const About_Integration = (Integration);

;// CONCATENATED MODULE: ./src/components/App/About/index.jsx







const About = ({ noFirstContent , noIntegration , noWave , rtl  })=>{
    const data = rtl ? about_rtl_namespaceObject : about;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: `about ${noWave ? "" : "section-padding"} style-4`,
        children: [
            !noFirstContent && /*#__PURE__*/ jsx_runtime_.jsx(About_FirstContent, {
                features: data.features,
                rtl: rtl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About_SecondContent, {
                accordions: data.accordions,
                rtl: rtl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(About_ThirdContent, {
                features: data.thirdFeatures,
                rtl: rtl
            }),
            !noIntegration && /*#__PURE__*/ jsx_runtime_.jsx(About_Integration, {
                integrations: data.integrations,
                rtl: rtl
            }),
            !noWave && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/about/about_s4_wave.png",
                        alt: "",
                        className: "top-wave"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "/assets/img/about/about_s4_wave.png",
                        alt: "",
                        className: "bottom-wave"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const App_About = (About);


/***/ })

};
;
exports.id = "component---src-pages-contact-tsx";
exports.ids = ["component---src-pages-contact-tsx"];
exports.modules = {

/***/ "./src/components/footer.tsx":
/*!***********************************!*\
  !*** ./src/components/footer.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "sticky-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-around align-items-center bg-light p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.linkedin.com/in/logan-chester-259807149/",
    target: "_blank",
    className: "fa fa-linkedin fa-2x text-decoration-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/loganchester/loganchester.github.io",
    target: "_blank",
    className: "fa fa-github fa-2x text-decoration-none"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.instagram.com/loganjchester_/?hl=en",
    target: "_blank",
    className: "fa fa-instagram fa-2x text-decoration-none"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/header.tsx":
/*!***********************************!*\
  !*** ./src/components/header.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Header = ({
  title
}) => {
  const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(title);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("header", {
    className: "sticky-top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    className: "navbar-brand",
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", {
    className: "m-0 text-primary"
  }, "Logan Chester")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "true",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
    className: "navbar-nav me-auto mb-2 mb-lg-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/",
    className: `nav-link${active === 'About' ? ' active' : ''}`
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/blogs",
    className: `nav-link${active === 'Blogs' ? ' active' : ''}`
  }, "Travel Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/projects",
    className: `nav-link${active === 'Projects' ? ' active' : ''}`
  }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/resume",
    className: `nav-link${active === 'Resume' ? ' active' : ''}`
  }, "Resume")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
    to: "/contact",
    className: `nav-link${active === 'Contact' ? ' active' : ''}`
  }, "Contact")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/header.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/components/footer.tsx");



const Layout = ({
  children,
  header = true,
  title,
  footer = true
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-column min-vh-100"
  }, header && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title !== null && title !== void 0 ? title : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container flex-grow-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row my-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-primary"
  }, title), children))), footer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/contact.tsx?export=default":
/*!**********************************************!*\
  !*** ./src/pages/contact.tsx?export=default ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.tsx");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);



const AboutPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    method: "post",
    id: "contactform",
    name: "contactform",
    action: "https://formspree.io/f/xzbkyenv"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control mb-3",
    type: "text",
    name: "first_name",
    placeholder: "Your first name..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control mb-3",
    type: "text",
    name: "last_name",
    placeholder: "Your last name..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form-control mb-3",
    type: "text",
    name: "_replyto",
    placeholder: "Your email address..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "form-control mb-3",
    name: "message",
    placeholder: "Your message..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "btn btn-primary",
    type: "submit",
    value: "Send"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "_next",
    value: "//loganchester.github.io"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "_subject",
    value: "Website Submission"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "_gotcha",
    style: {
      display: "none"
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutPage);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-contact-tsx.js.map
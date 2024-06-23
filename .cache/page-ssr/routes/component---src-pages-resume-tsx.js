exports.id = "component---src-pages-resume-tsx";
exports.ids = ["component---src-pages-resume-tsx"];
exports.modules = {

/***/ "./src/files/resume.pdf":
/*!******************************!*\
  !*** ./src/files/resume.pdf ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/resume-e1068f326668bc6dc7826be62d10d05a.pdf");

/***/ }),

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

/***/ "./src/data/resume/index.ts":
/*!**********************************!*\
  !*** ./src/data/resume/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   experience: () => (/* binding */ experience),
/* harmony export */   skills: () => (/* binding */ skills)
/* harmony export */ });
const experience = [{
  company: "Bitformations Inc.",
  role: "Software Engineer (Full-Stack)",
  duration: "September, 2023 - Present"
}, {
  company: "Bitformations Inc.",
  role: "Junior Software Engineer (Full-Stack)",
  duration: "September, 2021 - August, 2023"
}, {
  company: "Rosewood Therapy",
  role: "Website Designer",
  duration: "March, 2021 - June, 2021"
}, {
  company: "Kontrol Energy Corp.",
  role: "Junior Full-Stack Developer (Co-op)",
  duration: "September, 2020 - December, 2020"
}, {
  company: "Ontario Shores",
  role: "Developer & Business Analyst (Co-op)",
  duration: "September, 2018 - April, 2019"
}, {
  company: "University of Toronto",
  role: "Teaching Assistant",
  duration: "May, 2018 - August, 2018"
}];
const skills = [{
  category: "Programming Languages",
  items: ["Python", "Java", "C#"]
}, {
  category: "Web Development",
  items: ["TypeScript", "JavaScript", "HTML", "CSS"]
}, {
  category: "Frameworks",
  items: ["React", "Angular", "ASP.NET", "Django", "Spring"]
}, {
  category: "Database Management",
  items: ["PostgreSQL", "SQLite"]
}, {
  category: "Software Development Tools",
  items: ["Git", "Gitlab", "Bitbucket", "Jira", "Asana", "Figma"]
}, {
  category: "CI/CD Tools",
  items: ["Docker", "Jenkins", "AWS", "Traefik"]
}];

/***/ }),

/***/ "./src/pages/resume.tsx?export=default":
/*!*********************************************!*\
  !*** ./src/pages/resume.tsx?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.tsx");
/* harmony import */ var _data_resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/resume */ "./src/data/resume/index.ts");
/* harmony import */ var _files_resume_pdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../files/resume.pdf */ "./src/files/resume.pdf");





const ResourcesPage = () => {
  const [activeTab, setActiveTab] = react__WEBPACK_IMPORTED_MODULE_0___default().useState("experience");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Resume"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "nav nav-pills nav-fill mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `nav-link ${activeTab === "experience" ? "active" : ""}`,
    onClick: () => setActiveTab("experience")
  }, "Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: `nav-link ${activeTab === "skills" ? "active" : ""}`,
    onClick: () => setActiveTab("skills")
  }, "Skills")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "nav-link",
    href: _files_resume_pdf__WEBPACK_IMPORTED_MODULE_4__["default"],
    download: true
  }, "Download ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fa fa-download"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-12"
  }, activeTab === "experience" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Employer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Duration"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, _data_resume__WEBPACK_IMPORTED_MODULE_3__.experience.map(e => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, e.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, e.role), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, e.duration));
  })))), activeTab === "skills" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table table-striped table-hover"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Skill"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, _data_resume__WEBPACK_IMPORTED_MODULE_3__.skills.map(s => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, s.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "list-group list-group-horizontal"
    }, s.items.map(i => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        className: "list-group-item"
      }, i);
    }))));
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResourcesPage);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-resume-tsx.js.map
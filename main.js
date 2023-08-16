/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accord-list.js":
/*!***********************************!*\
  !*** ./js/modules/accord-list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordList)\n/* harmony export */ });\nfunction initAccordList() {\n  var accordList = document.querySelectorAll('[data-animation=\"accordList\"] dt');\n  var active = \"ativo\";\n  if (accordList.length) {\n    accordList[0].classList.add(active);\n    accordList[0].nextElementSibling.classList.add(active);\n  }\n  function activeAcc() {\n    this.classList.toggle(active);\n    this.nextElementSibling.classList.toggle(active);\n  }\n  accordList.forEach(function (item) {\n    item.addEventListener(\"click\", activeAcc);\n  });\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/accord-list.js?");

/***/ }),

/***/ "./js/modules/animation-number.js":
/*!****************************************!*\
  !*** ./js/modules/animation-number.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAniNumber)\n/* harmony export */ });\nfunction initAniNumber() {\n  /* Node de numeros */\n  var numeros = document.querySelectorAll(\"[data-number]\");\n  function aniNumbers() {\n    numeros.forEach(function (numero) {\n      var start = 0;\n      var total = +numero.innerText;\n      var inc = Math.floor(total / 100);\n      var timer = setInterval(function () {\n        start += inc;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 50 * Math.random());\n    });\n  }\n\n  /* Observer */\n  var observerTarget = document.querySelector(\".number\");\n  var observer;\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      aniNumbers();\n    }\n  }\n  observer = new MutationObserver(handleMutation);\n  observer.observe(observerTarget, {\n    attributes: true\n  });\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/animation-number.js?");

/***/ }),

/***/ "./js/modules/dark-mode.js":
/*!*********************************!*\
  !*** ./js/modules/dark-mode.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDarkMode)\n/* harmony export */ });\nfunction initDarkMode() {\n  var moon = document.querySelector('[data-mode=\"light\"] a');\n  var sections = document.querySelectorAll(\"[data-dark]\");\n  var eventos = [\"click\", \"touchstart\"];\n  moon.style.fontSize = \"1.2rem\";\n  function changeMode() {\n    sections.forEach(function (e) {\n      if (e.dataset.dark === \"off\") {\n        e.dataset.dark = \"on\";\n      } else if (e.dataset.dark === \"on\") {\n        e.dataset.dark = \"off\";\n      }\n    });\n  }\n  function changeIcon(event) {\n    event.preventDefault();\n    if (moon.innerText === \"🌕\") {\n      moon.innerText = \"🌑\";\n      changeMode();\n    } else {\n      moon.innerText = \"🌕\";\n      changeMode();\n    }\n  }\n  eventos.forEach(function (event) {\n    moon.addEventListener(event, changeIcon);\n  });\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/dark-mode.js?");

/***/ }),

/***/ "./js/modules/date.js":
/*!****************************!*\
  !*** ./js/modules/date.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDateObject)\n/* harmony export */ });\nfunction initDateObject() {\n  var now = new Date();\n  var span = document.querySelectorAll(\"[date-year]\");\n  var animesYears = [{\n    name: \"Samurai Champloo\",\n    year: 2005\n  }, {\n    name: \"Cowboy Bepop\",\n    year: 1999\n  }, {\n    name: \"Neon Genesis Evangelion\",\n    year: 1995\n  }, {\n    name: \"Ghost in the Shell\",\n    year: 1995\n  }, {\n    name: \"Akira\",\n    year: 1998\n  }, {\n    name: \"Soul Eater\",\n    year: 2003\n  }];\n  animesYears.forEach(function (item, index) {\n    var Anos = now.getFullYear() - item.year;\n    span[index].innerText = \"\".concat(Anos, \" anos atr\\xE1s\");\n  });\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/date.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initDropDownMenu() {\n  // Selecionar os nodes do dropMenu\n  var dropDownMenus = document.querySelectorAll(\"[data-dropdown]\");\n  // Para mudar as sections dos animes\n  var tabDropMenu = document.querySelectorAll(\".dropdown-menu li\");\n  var tabContent = document.querySelectorAll(\"[data-tab='content'] section\");\n  var eventos = [\"touchstart\", \"click\", \"mousemove\"];\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.toggle(\"ativo\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, eventos, function () {\n      _this.classList.remove(\"ativo\");\n    });\n  }\n  dropDownMenus.forEach(function (menu) {\n    [\"touchstart\", \"click\", \"mousemove\"].forEach(function (userEvent) {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n  function activeTab(index) {\n    tabContent.forEach(function (section) {\n      section.classList.remove(\"ativo\");\n    });\n    var direction = tabContent[index].dataset.anime;\n    tabContent[index].classList.add(\"ativo\", direction);\n  }\n  function switchAnimes() {\n    if (tabDropMenu.length && tabContent.length) {\n      tabDropMenu.forEach(function (itemMenu, index) {\n        itemMenu.addEventListener(\"click\", function () {\n          activeTab(index);\n        });\n        itemMenu.addEventListener(\"touchstart\", function () {\n          activeTab(index);\n        });\n      });\n    }\n  }\n  switchAnimes();\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimes.js":
/*!***********************************!*\
  !*** ./js/modules/fetchAnimes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimes)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _animation_number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-number.js */ \"./js/modules/animation-number.js\");\n\n\n\nfunction initFetchAnimes() {\n  function createAnime(anime) {\n    var div = document.createElement(\"div\");\n    div.classList.add(\"number-anime\");\n    div.innerHTML = \"<h3>\".concat(anime.title, \"</h3> <span data-number>\").concat(anime.total, \"</span>\");\n    return div;\n  }\n  function fetchAnimes(_x) {\n    return _fetchAnimes.apply(this, arguments);\n  }\n  function _fetchAnimes() {\n    _fetchAnimes = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animesResponse, animesJson, numberGrid;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(url);\n          case 3:\n            animesResponse = _context.sent;\n            _context.next = 6;\n            return animesResponse.json();\n          case 6:\n            animesJson = _context.sent;\n            numberGrid = document.querySelector(\".number-grid\");\n            animesJson.forEach(function (anime) {\n              var divAnime = createAnime(anime);\n              numberGrid.appendChild(divAnime);\n            });\n            (0,_animation_number_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n            _context.next = 15;\n            break;\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 12]]);\n    }));\n    return _fetchAnimes.apply(this, arguments);\n  }\n  fetchAnimes(\"./animesApi.json\");\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/fetchAnimes.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initMenu() {\n  var eventos = [\"click\", \"touchstart\"];\n  var menuHamburguer = document.querySelector(\".hMenu\");\n  var menu = document.querySelector(\".menu\");\n  var navMenu = document.querySelector(\".listLinks\");\n  var bar = document.querySelector(\".last\");\n  menuHamburguer.addEventListener(\"click\", function () {\n    menu.classList.toggle(\"ativo\");\n    menuHamburguer.classList.toggle(\"ativo\");\n    navMenu.classList.toggle(\"ativo\");\n    bar.classList.toggle(\"ativo\");\n  });\n  document.querySelectorAll(\".link\").forEach(function (n) {\n    return n.addEventListener(\"click\", function () {\n      menuHamburguer.classList.remove(\"ativo\");\n      navMenu.classList.remove(\"ativo\");\n      menu.classList.remove(\"ativo\");\n      bar.classList.remove(\"ativo\");\n    });\n  });\n  menuHamburguer.addEventListener(\"click\", function () {\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(navMenu, eventos, function () {\n      menuHamburguer.classList.remove(\"ativo\");\n      navMenu.classList.remove(\"ativo\");\n      menu.classList.remove(\"ativo\");\n      bar.classList.remove(\"ativo\");\n    });\n  });\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal-register.js":
/*!**************************************!*\
  !*** ./js/modules/modal-register.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModalRegister)\n/* harmony export */ });\nfunction initModalRegister() {\n  var bOpen = document.querySelector(\"[data-modal='openR']\");\n  var bClose = document.querySelector(\"[data-modal='closeR']\");\n  var bInto = document.querySelector(\"[data-modal='intoR']\");\n  var containerModalR = document.querySelector(\"[data-modal='containerR']\");\n  function toggleModalR(event) {\n    event.preventDefault();\n    containerModalR.classList.toggle(\"ativo\");\n    var ModalHeight = document.getElementById(\"modalR\").offsetHeight.toString();\n    document.getElementById(\"bg-register\").setAttribute(\"style\", \"height:\".concat(ModalHeight, \"px\"));\n  }\n  function clickOutModalR(event) {\n    if (event.target === this) {\n      toggleModalR(event);\n    }\n  }\n  function intoModalR() {}\n  if (bOpen && bClose && containerModalR) {\n    bOpen.addEventListener(\"click\", toggleModalR);\n    bClose.addEventListener(\"click\", toggleModalR);\n    bInto.addEventListener(\"click\", intoModalR);\n    containerModalR.addEventListener(\"click\", clickOutModalR);\n  }\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/modal-register.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\n  var bOpen = document.querySelector(\"[data-modal='open']\");\n  var bClose = document.querySelector(\"[data-modal='close']\");\n  var bInto = document.querySelector(\"[data-modal='into']\");\n  var containerModal = document.querySelector(\"[data-modal='container']\");\n  var containerModalR = document.querySelector(\"[data-modal='containerR']\");\n  var registerModal = document.querySelector(\"[data-modal='openRegisterIntoLogin']\");\n  var eyeIcon = document.getElementById(\"eyeIcon\");\n  var password = document.getElementById(\"password\");\n  function showPassword() {\n    eyeIcon.onclick = function passworClick() {\n      if (password.type === \"password\") {\n        password.type = \"text\";\n        eyeIcon.src = \"./img/eye-open.png\";\n      } else {\n        password.type = \"password\";\n        eyeIcon.src = \"./img/eye-close.png\";\n      }\n    };\n  }\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle(\"ativo\");\n  }\n  function clickOutModal(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  function intoModal() {}\n  function LoginToRegister(event) {\n    event.preventDefault();\n    containerModal.classList.toggle(\"ativo\");\n    containerModalR.classList.toggle(\"ativo\");\n    var ModalHeight = document.getElementById(\"modalR\").offsetHeight.toString();\n    document.getElementById(\"bg-register\").setAttribute(\"style\", \"height:\".concat(ModalHeight, \"px\"));\n  }\n  if (bOpen && bClose && containerModal) {\n    bOpen.addEventListener(\"click\", toggleModal);\n    bClose.addEventListener(\"click\", toggleModal);\n    bInto.addEventListener(\"click\", intoModal);\n    containerModal.addEventListener(\"click\", clickOutModal);\n    registerModal.addEventListener(\"click\", LoginToRegister);\n    showPassword();\n  }\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = \"data-outside\";\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, \"\");\n  }\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animation.js":
/*!****************************************!*\
  !*** ./js/modules/scroll-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScroll)\n/* harmony export */ });\nfunction initAnimationScroll() {\n  var sections = document.querySelectorAll(\"[data-animation='scroll']\");\n  var animationInZoom = 0.8;\n  var windowScreenSplit = window.innerHeight * animationInZoom;\n  function animationScroll() {\n    var ZoomLevel = Math.round(window.devicePixelRatio * 100);\n    if (ZoomLevel <= 68) {\n      animationInZoom = 1.1;\n    } else if (ZoomLevel > 100) {\n      animationInZoom = 0;\n    } else {\n      animationInZoom = 0.8;\n    }\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - windowScreenSplit < 0;\n      if (isSectionVisible) {\n        section.classList.add(\"ativo\");\n      } else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n  if (sections.length) {\n    animationScroll();\n    window.addEventListener(\"scroll\", animationScroll);\n  }\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/scroll-animation.js?");

/***/ }),

/***/ "./js/modules/scroll-smooth.js":
/*!*************************************!*\
  !*** ./js/modules/scroll-smooth.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSmooth)\n/* harmony export */ });\nfunction initScrollSmooth() {\n  var linksInternos = document.querySelectorAll('[data-menu=\"smooth\"] a[href^=\"#\"]');\n  function scrollToSection(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute(\"href\");\n    var section = document.querySelector(href);\n    var topSection = section.offsetTop;\n    if (href === \"#animes\") {\n      topSection = 0;\n    }\n    if (href === \"#cm\") {\n      topSection *= 0.8;\n    }\n    window.scrollTo({\n      top: topSection,\n      behavior: \"smooth\"\n    });\n  }\n  var eventos = [\"click\", \"touchstart\"];\n  eventos.forEach(function (evento) {\n    linksInternos.forEach(function (link) {\n      link.addEventListener(evento, scrollToSection);\n    });\n  });\n  // linksInternos.forEach((link) => {\n  //   link.addEventListener(\"click\",scrollToSection)\n  // });\n  // linksInternos.forEach((link) => {\n  //   link.addEventListener(\"touchstart\",scrollToSection)\n  // });\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/scroll-smooth.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\n  var tabMenu = document.querySelectorAll(\"[data-tab='menu'] li\");\n  var tabContent = document.querySelectorAll(\"[data-tab='content'] section\");\n  function activeTab(index) {\n    tabContent.forEach(function (section) {\n      section.classList.remove(\"ativo\");\n    });\n    var direction = tabContent[index].dataset.anime;\n    tabContent[index].classList.add(\"ativo\", direction);\n  }\n  if (tabMenu.length && tabContent.length) {\n    tabContent[0].classList.add(\"ativo\");\n    tabMenu.forEach(function (itemMenu, index) {\n      itemMenu.addEventListener(\"click\", function () {\n        activeTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  var tooltips = document.querySelectorAll(\"[data-tooltip\");\n  var onMouseMove = {\n    handleEvent: function handleEvent(event) {\n      this.toolTipBox.style.top = \"\".concat(event.pageY + 20, \"px\");\n      this.toolTipBox.style.left = \"\".concat(event.pageX + 20, \"px\");\n    }\n  };\n  var onMouseLeave = {\n    toolTipBox: \"\",\n    element: \"\",\n    handleEvent: function handleEvent() {\n      this.toolTipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    }\n  };\n  function createToolTipBox(elemenent) {\n    var toolTipBox = document.createElement(\"div\");\n    var textToolTip = elemenent.getAttribute(\"aria-label\");\n    toolTipBox.classList.add(\"tooltip\");\n    toolTipBox.innerHTML = textToolTip;\n    document.body.appendChild(toolTipBox);\n    return toolTipBox;\n  }\n  function onMouseOver() {\n    var toolTipBox = createToolTipBox(this);\n    onMouseMove.toolTipBox = toolTipBox;\n    this.addEventListener(\"mousemove\", onMouseMove);\n    onMouseLeave.toolTipBox = toolTipBox;\n    onMouseLeave.element = this;\n    this.addEventListener(\"mouseleave\", onMouseLeave);\n  }\n  tooltips.forEach(function (item) {\n    item.addEventListener(\"mouseover\", onMouseOver);\n  });\n}\n\n//# sourceURL=webpack://artinanime/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-smooth.js */ \"./js/modules/scroll-smooth.js\");\n/* harmony import */ var _modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animation.js */ \"./js/modules/scroll-animation.js\");\n/* harmony import */ var _modules_accord_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accord-list.js */ \"./js/modules/accord-list.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_modal_register_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/modal-register.js */ \"./js/modules/modal-register.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_date_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/date.js */ \"./js/modules/date.js\");\n/* harmony import */ var _modules_fetchAnimes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetchAnimes.js */ \"./js/modules/fetchAnimes.js\");\n/* harmony import */ var _modules_dark_mode_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/dark-mode.js */ \"./js/modules/dark-mode.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_accord_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_scroll_smooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_modal_register_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_date_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_fetchAnimes_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n(0,_modules_dark_mode_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n//# sourceURL=webpack://artinanime/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorRuntime() {\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n    Op = Object.prototype,\n    hasOwn = Op.hasOwnProperty,\n    defineProperty = Object.defineProperty || function (obj, key, desc) {\n      obj[key] = desc.value;\n    },\n    $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n      generator = Object.create(protoGenerator.prototype),\n      context = new Context(tryLocsList || []);\n    return defineProperty(generator, \"_invoke\", {\n      value: makeInvokeMethod(innerFn, self, context)\n    }), generator;\n  }\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n          value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n      reject(record.arg);\n    }\n    var previousPromise;\n    defineProperty(this, \"_invoke\", {\n      value: function value(method, arg) {\n        function callInvokeWithMethodAndArg() {\n          return new PromiseImpl(function (resolve, reject) {\n            invoke(method, arg, resolve, reject);\n          });\n        }\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n      }\n    });\n  }\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = \"suspendedStart\";\n    return function (method, arg) {\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\n      if (\"completed\" === state) {\n        if (\"throw\" === method) throw arg;\n        return {\n          value: void 0,\n          done: !0\n        };\n      }\n      for (context.method = method, context.arg = arg;;) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n          context.dispatchException(context.arg);\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n        state = \"executing\";\n        var record = tryCatch(innerFn, self, context);\n        if (\"normal\" === record.type) {\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n          return {\n            value: record.arg,\n            done: context.done\n          };\n        }\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n      }\n    };\n  }\n  function maybeInvokeDelegate(delegate, context) {\n    var methodName = context.method,\n      method = delegate.iterator[methodName];\n    if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel;\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n  function values(iterable) {\n    if (iterable || \"\" === iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n          next = function next() {\n            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n            return next.value = undefined, next.done = !0, next;\n          };\n        return next.next = next;\n      }\n    }\n    throw new TypeError(_typeof(iterable) + \" is not iterable\");\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\n    value: GeneratorFunctionPrototype,\n    configurable: !0\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\n    value: GeneratorFunction,\n    configurable: !0\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (val) {\n    var object = Object(val),\n      keys = [];\n    for (var key in object) keys.push(key);\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n          record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://artinanime/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://artinanime/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://artinanime/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n      args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack://artinanime/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
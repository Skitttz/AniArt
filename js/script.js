import ScrollSmooth from "./modules/scroll-smooth.js";
import AccordList from "./modules/accord-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";

import initAnimationScroll from "./modules/scroll-animation.js";
import initMenu from "./modules/menuMobile.js";
import initModalRegister from "./modules/modal-register.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initDateObject from "./modules/date.js";
import initDarkMode from "./modules/dark-mode.js";

import fetchAnimes from "./modules/fetchAnimes.js";

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new AccordList('[data-animation="accordList"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='into']",
  "[data-modal='container']",
  "[data-modal='containerR']",
  "[data-modal='openRegisterIntoLogin']",
  "eyeIcon",
  "password"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initMenu();
initDropDownMenu();
initAnimationScroll();
initModalRegister();
initDateObject();
initDarkMode();

fetchAnimes("../../animesApi.json", ".number-grid");

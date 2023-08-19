import ScrollSmooth from "./modules/scroll-smooth.js";
import AccordList from "./modules/accord-list.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import ScrollAnimation from "./modules/scroll-animation.js";
import DropDownMenu from "./modules/dropdown-menu.js";

import MenuMobile from "./modules/menuMobile.js";
import initModalRegister from "./modules/modal-register.js";

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

const scrollAnimation = new ScrollAnimation("[data-animation='scroll']");
scrollAnimation.init();

const dropDownMenu = new DropDownMenu(
  "[data-dropdown]",
  ".dropdown-menu li",
  "[data-tab='content'] section"
);
dropDownMenu.init();

const menuMobile = new MenuMobile(
  ".hMenu",
  ".menu",
  ".listLinks",
  ".clickedLink",
  ".last"
);
menuMobile.init();

initModalRegister();
initDateObject();
initDarkMode();

fetchAnimes("./animesApi.json", ".number-grid");

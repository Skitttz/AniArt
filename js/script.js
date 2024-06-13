import ScrollSmooth from './modules/scroll-smooth.js';
import AccordList from './modules/accord-list.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import ModalRegister from './modules/modal-register.js';
import Tooltip from './modules/tooltip.js';
import ScrollAnimation from './modules/scroll-animation.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menuMobile.js';
import DateObject from './modules/date.js';
import DarkMode from './modules/dark-mode.js';

import fetchAnimes from './modules/fetchAnimes.js';

const scrollSmooth = new ScrollSmooth('[data-menu="smooth"] a[href^="#"]');
scrollSmooth.init();

const accordion = new AccordList('[data-animation="accordList"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabNav.init();

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='into']",
  "[data-modal='container']",
  "[data-modal='containerR']",
  "[data-modal='openRegisterIntoLogin']",
  'eyeIcon',
  'password',
);
modal.init();

const modalRegister = new ModalRegister(
  "[data-modal='openR']",
  "[data-modal='closeR']",
  "[data-modal='intoR']",
  "[data-modal='containerR']",
);
modalRegister.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnimation = new ScrollAnimation("[data-animation='scroll']");
scrollAnimation.init();

const dropDownMenu = new DropDownMenu(
  '[data-dropdown]',
  '.dropdown-menu li',
  "[data-tab='content'] section",
);
dropDownMenu.init();

const menuMobile = new MenuMobile(
  '.hMenu',
  '.menu',
  '.navUl',
  '.clickedLink',
  '.last',
);
menuMobile.init();

const dateObject = new DateObject('[date-year]', [
  { name: 'Samurai Champloo', year: 2005 },
  { name: 'Cowboy Bepop', year: 1999 },
  { name: 'Neon Genesis Evangelion', year: 1995 },
  { name: 'Ghost in the Shell', year: 1995 },
  { name: 'Akira', year: 1998 },
  { name: 'Soul Eater', year: 2003 },
]);
dateObject.init();

const darkMode = new DarkMode('[data-mode="light"] a', '[data-dark]');
darkMode.init();

fetchAnimes('./animesApi.json', '.number-grid');

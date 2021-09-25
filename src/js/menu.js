import menuCardsTemplate from '../templates/menu-cards.hbs';
import menuArr from '../menu.json';

const menuItems = menuCardsTemplate(menuArr);
const menu = document.querySelector('.js-menu');

menu.innerHTML = menuItems;

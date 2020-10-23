import './styles.css';
import toggleTheme from './js/theme.js';
import makeMenu from './templates/menu.handlebars';
import menu from './menu.json';


const input = document.querySelector('#theme-switch-toggle');

input.addEventListener('click', toggleTheme);

menu.forEach(el => {
    document.body.querySelector('.js-menu').innerHTML += makeMenu(el);
});

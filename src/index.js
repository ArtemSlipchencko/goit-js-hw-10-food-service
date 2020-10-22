import './styles.css';
import toggleTheme from './js/theme.js';


const input = document.querySelector('#theme-switch-toggle');

input.addEventListener('click', toggleTheme);
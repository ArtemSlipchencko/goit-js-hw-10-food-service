const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const input = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

if(localStorage.getItem('currentTheme') === Theme.DARK) {
    input.setAttribute('checked', '');
};

body.classList.add('light-theme');
body.classList.add(`${localStorage.getItem('currentTheme')}`);

const toggleTheme = function() {
    if (body.classList.contains(`${Theme.LIGHT}`)) {
        body.classList.remove(`${Theme.LIGHT}`);
        body.classList.add(`${Theme.DARK}`);
        localStorage.setItem('currentTheme', `${Theme.DARK}`);
    } else {
        body.classList.remove(`${Theme.DARK}`);
        body.classList.add(`${Theme.LIGHT}`);
        localStorage.setItem('currentTheme', `${Theme.LIGHT}`);
    }

};

export default toggleTheme;


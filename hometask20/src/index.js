import './styles/main.css';
import { drawHtmlLayout } from './modules/draw-layout.js';
import {
  categoriesDrop,
  logoutBtn,
  loginBtn,
  themeBtn,
  theme,
  errorBtn,
} from './modules/variables.js';
import { changeTheme } from './modules/change-theme';
import { setTheme } from './modules/set-theme';
import { loginUser } from './modules/login-user';
import { logoutUser } from './modules/logout-user';
import { showGreetings } from './modules/showGreetings';
import { hideError } from './modules/hide-error.js';

window.onload = async () => {
  const fn = await import('./modules/fetch.js'); // dynamical import

  fn.fetchData('https://api.publicapis.org/categories').then((result) =>
    drawHtmlLayout(result)
  );

  if (theme) {
    setTheme(theme);
    themeBtn.innerHTML = `Switch theme`;
  } else {
    localStorage.setItem('theme', 'light');
    setTheme('light');
    themeBtn.innerHTML = `Dark theme`;
  }

  if (localStorage.getItem('user')) {
    showGreetings(localStorage.getItem('user'));
  }
};

categoriesDrop.onchange = async () => {
  const category = categoriesDrop.value;
  const fn = await import('./modules/fetch.js'); // dynamical import

  fn.fetchData(
    `https://api.publicapis.org/entries?category=${category}&title`
  ).then((result) => drawHtmlLayout(result));
};

themeBtn.onclick = changeTheme;

loginBtn.onclick = loginUser;

errorBtn.onclick = hideError;

logoutBtn.onclick = logoutUser;

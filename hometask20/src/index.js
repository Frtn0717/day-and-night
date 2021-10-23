import './styles/main.css';
import { drawHtmlLayout } from './modules/draw-layout.js';
import { categoriesDrop } from './modules/variables.js';
import { saveUser } from './modules/save-logged-in-user.js';
import { changeTheme } from './modules/change-theme';
import { setTheme } from './modules/set-theme';
import { createStylesLink } from './modules/create-link';
import { loginBtn, themeBtn, theme } from './modules/variables.js';

loginBtn.onclick = saveUser;

window.onload = async () => {
  const fn = await import('./modules/fetch.js'); // dynamical import

  fn.fetchData('https://api.publicapis.org/categories').then((result) =>
    drawHtmlLayout(result)
  );

  createStylesLink();

  if (theme) {
    setTheme(theme);
  } else {
    localStorage.setItem('theme', 'light');
    setTheme('light');
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

import { setTheme } from './set-theme.js';
import { themeBtn } from './variables';

export const changeTheme = () => {
  if (localStorage.getItem('theme') === 'light') {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
    themeBtn.innerHTML = `Light theme`;
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light');
    setTheme('light');
    themeBtn.innerHTML = `Dark theme`;
  }
};

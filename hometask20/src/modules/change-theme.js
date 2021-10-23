import { setTheme } from './set-theme.js';

export const changeTheme = () => {
  if (localStorage.getItem('theme') === 'light') {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'dark');
    setTheme('dark');
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light');
    setTheme('light');
  }

  console.log('theme has been changed');
};

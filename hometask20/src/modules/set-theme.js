import { main } from './variables.js';

export const setTheme = (curTheme) => {
  main.className = '';
  main.classList.add(`main-${curTheme}`);
};

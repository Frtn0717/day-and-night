import { main } from './variables';

export const createStylesLink = () => {
  const newLink = document.createElement('link');
  const link = main.appendChild(newLink);
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.id = 'styles-link';
};

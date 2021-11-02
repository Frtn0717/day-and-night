import { greetingsText, loginBlock, logoutBlock } from './variables';

export const showGreetings = () => {
  const user = localStorage.getItem('user');
  greetingsText.innerHTML = `Hello, ${user}!`;
  loginBlock.classList.toggle('show');
  logoutBlock.classList.toggle('show');
};

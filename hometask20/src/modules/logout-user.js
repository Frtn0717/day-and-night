import { loginBlock, logoutBlock } from './variables';

export const logoutUser = () => {
  loginBlock.classList.toggle('show');
  logoutBlock.classList.toggle('show');
  localStorage.removeItem('user');
};

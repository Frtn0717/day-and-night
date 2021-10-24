import { errorMsg, loginBlock, errorBlock, userInput } from './variables';

export const hideError = () => {
  errorMsg.style.color = '#FFF';
  loginBlock.classList.toggle('show');
  errorBlock.classList.toggle('show');
  userInput.value = '';
};

import { userInput, errorMsg, errorBlock, loginBlock } from './variables';
import { showGreetings } from './showGreetings';

export const loginUser = () => {
  const userName = userInput.value;
  const errorMessage = errorMsg;

  if (userName.trim() === '') {
    errorMessage.innerHTML = `Enter your name, please.`;
    errorMessage.style.color = '#FA0';
    loginBlock.classList.toggle('show');
    errorBlock.classList.toggle('show');

    return;
  }

  localStorage.setItem('user', userName);

  showGreetings();

  userInput.value = '';
};

import { userInput } from './variables.js';
import { storageData } from './storage-wrapper';

export const saveUser = () => {
  const name = userInput.value;
  return storageData(name);
};

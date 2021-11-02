const vars = {
  userInput: document.querySelector('.login-input'),
  loginBtn: document.querySelector('.login-btn'),
  wrap: document.querySelector('.wrapper'),
  titleBtn: document.querySelector('.title-btn'),
  categoryBtn: document.querySelector('.category-btn'),
  dropdown: document.querySelector('.dropdown'),
  categoryDrop: document.querySelector('.dropdown-category'),
  categoriesDrop: document.querySelector('.dropdown-categories'),
  titlesDrop: document.querySelector('.dropdown-titles'),
  titleResult: document.querySelector('.title-result'),
  resultWrap: document.querySelector('.result-wrapper'),
  themeBtn: document.querySelector('.theme-btn'),
  main: document.querySelector('main'),
  theme: localStorage.getItem('theme'),
  user: localStorage.getItem('user'),
  greetingsText: document.querySelector('.logout-text'),
  loginBlock: document.querySelector('.login'),
  logoutBlock: document.querySelector('.logout'),
  logoutBtn: document.querySelector('.logout-btn'),
  errorBlock: document.querySelector('.error-wrap'),
  errorMsg: document.querySelector('.error-message'),
  errorBtn: document.querySelector('.error-escape-btn'),
};

export const userInput = vars.userInput;
export const loginBtn = vars.loginBtn;
export const wrap = vars.wrap;
export const titleBtn = vars.titleBtn;
export const categoryBtn = vars.categoryBtn;
export const dropdown = vars.dropdown;
export const categoryDrop = vars.categoryDrop;
export const titleResult = vars.titleResult;
export const resultWrap = vars.resultWrap;
export const categoriesDrop = vars.categoriesDrop;
export const titlesDrop = vars.titlesDrop;
export const themeBtn = vars.themeBtn;
export const main = vars.main;
export const theme = vars.theme;
export const user = vars.user;
export const greetingsText = vars.greetingsText;
export const loginBlock = vars.loginBlock;
export const logoutBlock = vars.logoutBlock;
export const logoutBtn = vars.logoutBtn;
export const errorBlock = vars.errorBlock;
export const errorMsg = vars.errorMsg;
export const errorBtn = vars.errorBtn;

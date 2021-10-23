export const setTheme = (curTheme) => {
  const link = document.getElementById('styles-link');
  link.href = `../styles/${curTheme}.css`;
};

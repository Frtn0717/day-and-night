export const storageData = (name) => {
  console.log(name);

  const storage = localStorage;
  storage.setItem('loggedUser', name);
};

export const setLocalStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

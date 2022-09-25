export const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const args = arguments;
    const context = this;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

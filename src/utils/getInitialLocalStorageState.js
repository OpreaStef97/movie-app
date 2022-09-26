export const getInitialLocalStorageState = (key, type) => {
  try {
    const data = JSON.parse(localStorage.getItem(key)) ?? [];
    switch (type) {
      case "array":
        if (Array.isArray(data)) {
          return data;
        }
        return [];

      case "boolean":
        if (typeof data === "boolean") {
          return data;
        }
        return false;
      default:
        return;
    }
  } catch (error) {
    console.error(error);
    return type === "array" ? [] : false;
  }
};

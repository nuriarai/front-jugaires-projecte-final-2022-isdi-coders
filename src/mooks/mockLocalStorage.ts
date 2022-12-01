const localStorageMock = (function () {
  let store = {} as Storage;

  return {
    getItem(key: string) {
      return store[key];
    },

    removeItem(key: string) {
      delete store[key];
    },
  };
})();

export default localStorageMock;

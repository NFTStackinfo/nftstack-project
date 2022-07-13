class LocalStorage {
    static  getItem(key) {
      return localStorage.getItem(key);
    };
    static  setItem(key, val) {
        return localStorage.setItem(key, val);
    };
    static  removeItem(key) {
        return localStorage.setItem(key);
    };
    static  clear() {
        return localStorage.clear();
    };

}

export default LocalStorage;

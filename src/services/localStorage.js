class LocalStorage {
    static getItem(key) {
        return localStorage.getItem(key);
    };
    static async setItem(key, val) {
        return localStorage.setItem(key, val);
    };
    static async removeItem(key) {
        return localStorage.setItem(key);
    };
    static async clear() {
        return localStorage.clear();
    };

}

export default LocalStorage;

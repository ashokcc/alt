export default {
  setItem: (key, value) => {
    localStorage.setItem(key, value);
  },
  getItem: (key) => {
    return localStorage.getItem(key);
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
  },
  getUserInfo: () => {
    const t = localStorage.getItem("token");
    if (t) {
      const { email, role, iat, exp } = JSON.parse(atob(t.split(".")[1]));
      return { email, role, iat, exp };
    }
  },
  refreshToken: function () {
    const { exp } = this.getUserInfo() || { exp: 123 };
    const curr = new Date().getTime();
    if (curr > exp && this.getItem("token")) {
      localStorage.removeItem("token");
    }
  },
  deleteToken: () => {
    localStorage.removeItem("token");
  },
};

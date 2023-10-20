import axios from "axios";

const usersAxiosInstance = axios.create({
  headers: { "API-KEY": "f393e6a5-d32c-411c-a410-899d8aadbdbc" },
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(elemsCount, currentPage) {
    return usersAxiosInstance.get(
      `users?count=${elemsCount}&page=${currentPage}`
    );
  },
  followUser(userId) {
    return usersAxiosInstance.post(`follow/${userId}`);
  },
  unfollowUser(userId) {
    return usersAxiosInstance.delete(`follow/${userId}`)
  },
};
export const authAPI = {
  authMe() {
    return usersAxiosInstance.get(
      `https://social-network.samuraijs.com/api/1.0/auth/me`
    )
  },
  login(email = null, password = null, rememberMe = false) {
    return usersAxiosInstance.post(
      `https://social-network.samuraijs.com/api/1.0/auth/login?email=${email}&password=${password}&rememberMe=${rememberMe}`
    )
  },
  logout() {
    return usersAxiosInstance.delete(
      `https://social-network.samuraijs.com/api/1.0/auth/login`
    )
  }
};
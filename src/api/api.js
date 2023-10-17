import axios from "axios";

const usersAxiosInstance = axios.create({
  headers: { "API-KEY": "5993f006-5d9b-410b-9451-ce201e1aeb3c" },
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
    let email = "mis.viktoriya@hotmail.com";
    let password = "root";
    return axios.post(
      `https://social-network.samuraijs.com/api/1.0/auth/login?email=${email}&password=${password}`
    )
  },
};

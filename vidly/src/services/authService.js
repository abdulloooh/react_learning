import JwtDecode from "jwt-decode";
import http from "./httpService";
import { apiEndPoint } from "../config.json";

const loginApiEndpoint = apiEndPoint + "/auth";
const token = "vidly_token";

export async function login(email, password) {
  const { data: jwt } = await http.post(loginApiEndpoint, {
    email: email,
    password: password,
  });
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const user = JwtDecode(localStorage.getItem("token"));
    return user;
  } catch (ex) {
    return null;
  }
}

export function loginWithJWT(jwt) {
  localStorage.setItem("token", jwt);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJWT,
};

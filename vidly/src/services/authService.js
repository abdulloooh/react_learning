import JwtDecode from "jwt-decode";
import http from "./httpService";
import { apiEndPoint } from "../config.json";

const loginApiEndpoint = apiEndPoint + "/auth";
const tokenKey = "vidly_token";

export async function login(email, password) {
  const { data: jwt } = await http.post(loginApiEndpoint, {
    email: email,
    password: password,
  });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    return JwtDecode(localStorage.getItem(tokenKey));
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function loginWithJWT(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export default {
  login,
  loginWithJWT,
  logout,
  getCurrentUser,
  getJwt,
};

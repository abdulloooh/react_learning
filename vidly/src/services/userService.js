import http from "./httpService";
import { apiEndPoint } from "../config.json";

const registerApiEndpoint = `${apiEndPoint}/users`;
const loginApiEndpoint = apiEndPoint + "/auth";

export function register(user) {
  return http.post(registerApiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}

export function login(email, password) {
  return http.post(loginApiEndpoint, {
    email: email,
    password: password,
  });
}

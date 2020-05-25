import http from "./httpService";
import { apiEndPoint } from "../config.json";

const registerApiEndpoint = `${apiEndPoint}/users`;

export function register(user) {
  return http.post(registerApiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}

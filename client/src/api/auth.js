/* eslint-disable import/no-anonymous-default-export */
import client from "./client";
import routes from "./routes";

const login = (email, password) =>
  client.post(routes.login, { email, password });

const register = (username, email, password) =>
  client.post(routes.register, { username, email, password });

export default {
  login,
  register,
};

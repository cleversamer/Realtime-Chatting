/* eslint-disable import/no-anonymous-default-export */
import client from "./client";
import routes from "./routes";

const login = (username, password) =>
  client.post(routes.login, { username, password });

const register = (username, password) =>
  client.post(routes.register, { username, password });

export default {
  login,
  register,
};

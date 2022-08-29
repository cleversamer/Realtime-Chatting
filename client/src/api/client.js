import axios from "axios";
import settings from "config/settings";

const client = axios.create({
  baseURL: settings.apiUrl,
  // timeout: 1000,
});

export default client;

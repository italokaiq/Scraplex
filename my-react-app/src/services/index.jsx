import axios from "axios";

const api = axios.create({
  baseURL: "https://scrap-fake-api.onrender.com",
  timeout: 8 * 1000,
});

export { api };

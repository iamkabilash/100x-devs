import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL || "http://localhost:8989",
  allowAbsoluteUrls: false,
});

export default api;

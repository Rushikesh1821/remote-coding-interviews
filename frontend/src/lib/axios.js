import axios from "axios";

const axiosInstance = axios.create({
  // Use VITE_API_URL if set, otherwise default to /api for same-origin requests
  baseURL: import.meta.env.VITE_API_URL || "/api",
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

export default axiosInstance;

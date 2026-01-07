import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

// 🔐 Attach access token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access"); // ✅ FIXED KEY
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🚨 Handle 401 cleanly (NO reload)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      // Let React Router handle navigation
      window.location.href = "/login"; // temporary, safe
    }
    return Promise.reject(error);
  }
);

export default api;

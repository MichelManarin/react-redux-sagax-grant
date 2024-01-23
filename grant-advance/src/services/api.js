import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5187",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 400) {
      return { data: { error: true, message: error.response.data.message } };
    } else {
      const baseUrl = window.location.origin;
      const url = baseUrl + "/ops";
      window.location.href = url;
    }
  }
);

export default api;

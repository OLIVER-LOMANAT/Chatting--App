import axios from 'axios'; // ← THIS MUST BE AT THE TOP

export const axiosInstance = axios.create({
  baseURL: "https://chatting-app-backend-k39g.onrender.com/api",
  withCredentials: true,
});
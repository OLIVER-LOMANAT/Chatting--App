// FIXED VERSION:
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "https://chatting-app-backend-k39g.onrender.com/api", // ← Use your actual backend URL
  withCredentials: true,
});
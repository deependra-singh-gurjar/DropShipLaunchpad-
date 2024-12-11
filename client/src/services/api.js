import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/ai",
});

export const generateContent = (productDetails) => {
  return api.post("/generate", { productDetails });
};

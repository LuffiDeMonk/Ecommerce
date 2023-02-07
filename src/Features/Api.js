import axios from "axios";

export const getShop = axios.create({
  baseURL: "https://fakestoreapi.com",
});

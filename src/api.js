import axios from "axios";

const API = axios.create({
  baseURL: "https://citcampusconnect.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});
console.log(API.defaults.baseURL);

export default API;

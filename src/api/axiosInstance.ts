import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://rem-rest-api.herokuapp.com/api",
  withCredentials: true,
});

// Раскомментировать, если REM REST API не работает
//export const axiosInstance = axios.create({
//  baseURL: "https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api",
//});

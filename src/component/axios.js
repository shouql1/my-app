//the axios fille 
import axios from "axios";
const BASEURL = axios.create({
  baseURL: "http://localhost:4000/",
});

BASEURL.interceptors.request.use(async function (config) {
  config.headers["Content-Type"] = "application/json";
  return config;
});//here it is constant


//call the API here
export const registrationApi = (data) => {
    return BASEURL.post("api/v1/registration", data)
}
export const category = (data) => {
  return BASEURL.post("api/v1/category", data)
}
export const MoviesApi = (data) => {
  return BASEURL.get("api/v1/findmovies", data)
}
 

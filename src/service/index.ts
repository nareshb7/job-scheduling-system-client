import axios from "axios";

export type FetchMethod = "GET" | "POST" | "DELETE" | "PUT";

export const BASE_URL = "http://localhost:3001/api";

const get = async (url: string) => {
  return axios
    .get(BASE_URL + url)
    .then((dt) => dt)
    .catch((err) => err.message);
};
const post = async (url: string, body: any) => {
  return axios
    .post(BASE_URL + url, body)
    .then((dt) => dt)
    .catch((err) => {
      throw new Error(err.response.data);
    });
};

const httpMethods = {
  get,
  post,
};

export default httpMethods;

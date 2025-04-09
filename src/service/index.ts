import axios from "axios";

export type FetchMethod = "GET" | "POST" | "DELETE" | "PUT";

export interface APIResponse {
  success: boolean;
  data: any;
  message?: string;
}

export const BASE_URL = "http://localhost:3001/api";

const get = async (url: string) => {
  return axios
    .get(BASE_URL + url)
    .then((dt) => dt.data)
    .catch((err) => {
      throw new Error(err.response.data);
    });
};
const post = async (url: string, body: any): Promise<APIResponse> => {
  return axios
    .post(BASE_URL + url, body)
    .then((dt) => dt.data)
    .catch((err) => {
      throw new Error(err.response.data);
    });
};

const httpMethods = {
  get,
  post,
};

export default httpMethods;

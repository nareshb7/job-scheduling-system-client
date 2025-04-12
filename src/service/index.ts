import axios from "axios";

export type FetchMethod = "GET" | "POST" | "DELETE" | "PUT";

export interface APIResponse {
  success: boolean;
  data: any;
  message?: string;
}

export const BASE_URL = "http://localhost:3001/api";

const get = async (url: string, headers: Object = {}) => {
  return axios
    .get(BASE_URL + url, headers)
    .then((dt) => dt.data)
    .catch((err) => {
      throw new Error(err.response.data);
    });
};
const post = async (
  url: string,
  body: any,
  contentType: string = "application/json"
): Promise<APIResponse> => {
  return axios
    .post(BASE_URL + url, body, {
      headers: {
        "Content-Type": contentType,
      },
    })
    .then((dt) => dt.data)
    .catch((err) => {
      throw new Error(err.response.data);
    });
};

const deleteMethod = async (url: string) => {
  return axios
    .delete(BASE_URL + url)
    .then((dt) => dt.data)
    .catch((err) => {
      throw new Error(err.response.data);
    });
};

const httpMethods = {
  get,
  post,
  deleteMethod,
};

export default httpMethods;

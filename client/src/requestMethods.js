import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
// const BASE_URL = "http://192.168.2.59:5001/api/";
let TOKEN;

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = () =>
  axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
  });

export default function newUserReq(tkn) {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${tkn}`,
    },
  });
}

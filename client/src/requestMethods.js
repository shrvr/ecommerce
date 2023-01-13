import axios from "axios";

export const BASE_URL = "https://fashion-point-backend.onrender.com/api/";
// export const BASE_URL = "http://localhost:5001/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// export const userRequest = () =>
//   axios.create({
//     baseURL: BASE_URL,
//     headers: { token: `Bearer ${TOKEN}` },
//   });

export default function newUserReq(tkn) {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      token: `Bearer ${tkn}`,
    },
  });
}

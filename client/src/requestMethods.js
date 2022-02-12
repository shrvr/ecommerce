import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmRhMWM1ZjcxMDliNDI4M2VkNjE0NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDE4MzI3OCwiZXhwIjoxNjQ0NDQyNDc4fQ.UeNT7HL3nLZL4_0ZAtViIIvbXAjVdDPx9J3om5YW5TQ";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

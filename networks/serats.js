import axios from "axios";

const kasusastran = axios.create({
  baseURL: process.env.KASUSASTRAN_API_URL,
  timeout: 1000,
});

export async function getSerats() {
  const response = await kasusastran.get("/v1/serats");
  return response.data;
}

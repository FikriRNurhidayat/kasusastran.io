import axios from "axios";

const kasusastran = axios.create({
  baseURL: process.env.KASUSASTRAN_API_URL,
  timeout: 1000,
});

export async function listSerats(page = 1) {
  const response = await kasusastran.get("/v1/serats", {
    params: {
      "pagination.page": page,
      "pagination.page_size": 12,
    },
  });

  return response.data;
}

import axios from "axios";

const kasusastran = axios.create({
  baseURL: process.env.NEXT_PUBLIC_KASUSASTRAN_API_URL,
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

export async function getSerat(id) {
  const response = await kasusastran.get(`/v1/serats/${id}`);
  return response.data;
}

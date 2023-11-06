import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // * YOUR_API_URL HERE
  headers: {
    "Content-Type": "application/json",
  },
});

export const getDataFn = async (url) => {
  try {
    const { data } = await httpClient.get(`/${url.queryKey[0]}`);
    return data;
  } catch (error) {
    if (error.response.data[0]) throw Error(error.response.data[0]);
    else throw Error(error.message);
  }
};

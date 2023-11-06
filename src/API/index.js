import axios from "axios";

export const getCategories = async (url) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/${url.queryKey[0]}`
    );
    return data;
  } catch (error) {
    console.log("getGategories error", error);
  }
};

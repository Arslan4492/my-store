import { Domain } from "../config";
import axios from "axios";

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`http://localhost:7000/men/western`);
    return data;
  } catch (error) {
    console.log("getGategories error", error);
  }
};

export const getUnStictedMenClothes = async () => {
  try {
    const { data } = await axios.get(`http://localhost:7000/men/unstitch`);
    return data;
  } catch (error) {
    console.log("getGategories error", error);
  }
};

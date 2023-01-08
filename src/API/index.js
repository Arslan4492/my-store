import { Domain } from "../config"
import axios from 'axios';

export const getCategories = async () => {
    try {
        const {data} = await axios.get(`${Domain}/Categories`);
        return data;
    } catch (error) {
        console.log("getGategories error",error);
    }
}
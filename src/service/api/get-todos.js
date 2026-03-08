import axios from "axios";
import { REDEV_URL } from "../constans";

export const fetchTodos = async () => {
    try {
        const response = await axios.get(`${REDEV_URL}/todos`)
        return response.data
    } catch (error) {
        console.error(error)
    }
}
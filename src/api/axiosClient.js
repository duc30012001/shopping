import axios from "axios";
import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosClient;

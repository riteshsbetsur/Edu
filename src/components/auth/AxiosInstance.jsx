import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

export default AxiosInstance;

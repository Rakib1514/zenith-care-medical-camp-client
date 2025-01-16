import axios from "axios";
// https://zenith-server.vercel.app
// http://localhost:5000
const axiosPublic = axios.create({
  baseURL: 'http://localhost:5000',
})

export default axiosPublic;
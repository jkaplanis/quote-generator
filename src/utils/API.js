import axios from "axios";
export default {
  getAirports: () => {
    return axios.get("/api/airports");
  }
};

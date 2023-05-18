import axios from "axios";
import qs from "qs";
import { MY_DASHBOARD_ORIGIN } from "../../../../shared/constants";

const myDbdApiIns = axios.create({
  baseURL: MY_DASHBOARD_ORIGIN
    ? new URL("/api", MY_DASHBOARD_ORIGIN).href
    : "/api",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: "brackets" });
  },
});

export { myDbdApiIns };

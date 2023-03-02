import Axios from "./request";

export function login(params) {
  return Axios.post("/login/", params);
}
// export function getmap() {
//     return axios.get("/")
// }

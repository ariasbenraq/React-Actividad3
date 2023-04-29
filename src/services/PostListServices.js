import data from "../PostList.json"
import axios from "axios";

export function getList() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, Math.random() * 1000);
    });
}


export function login(username, password) {
    return axios
      .post("https://three-points.herokuapp.com/api/login", { username, password })
      .then((response) => response.data);
  }



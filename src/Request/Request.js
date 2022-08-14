import axios from "axios";

let Request = {
  sendRequest(options) {
    return new Promise((resolve, reject) => {
      return axios
        .request(options)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error); // server err
        });
    });
  },
};
export default Request;

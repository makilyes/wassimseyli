import axios from "axios";

axios.interceptors.request.use(
  (request) => {
    if (
      !request.url.includes("signin") ||
      !request.url.includes("signup") ||
      !request.url.includes("resetPassword") ||
      !request.url == 'http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/fileupload'
    ) {
      request.headers["Authorization"] = `Bearer ${sessionStorage.getItem(
        "token"
      )}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;

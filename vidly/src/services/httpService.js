import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  // Unexpected (Network down, server down, db down, bug in code)
  // log the error
  // Display a generic and friendly error message eg unexpected error encountered
  if (!expectedError) {
    toast.error("Unexpected error encountered");
    // toast.error("Second Unexpected error encountered", { containerId: "B" });
    logger.log(error);
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  path: axios.patch,
};

import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-orcin-six.vercel.app",
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("log out user");
        if (error.response.status === 401 || error.response.status === 403) {
          logOut();
        }
      }
    );
  }, [logOut]);

  return axiosSecure;
};

export default UseAxiosSecure;

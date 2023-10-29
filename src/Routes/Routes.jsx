import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <SignUp></SignUp>
      },
    ],
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";

import Root from "./Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import SignUp from "../Pages/signup/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";

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
      {
        path:'/checkout/:id',
        element:<CheckOut></CheckOut>,
        loader: ({params})=> fetch(`https://car-doctor-server-orcin-six.vercel.app/services/${params.id}`)
      }

    ],
  },
]);
export default router;

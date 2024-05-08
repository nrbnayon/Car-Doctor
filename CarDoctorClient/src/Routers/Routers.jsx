import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import img from "/404.gif";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <img src={img} className="w-full " />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
    ],
  },
]);
export default router;

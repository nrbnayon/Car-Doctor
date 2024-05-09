import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import img from "/404.gif";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Root />,
    errorElement: <img src={img} className="w-full " />,
    children: [
      {
        path: "/", // Home path
        element: <Home />,
      },
      {
        path: "/login", // Login path
        element: <Login />,
      },
      {
        path: "/register", // Register path
        element: <Register />,
      },
      {
        path: "/checkout/:id", // Checkout path
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ), // Wrap Checkout component with PrivateRoute
        loader: ({ params }) =>
          fetch(`http://localhost:8080/services/${params.id}`),
      },
      {
        path: "/bookings", // Bookings path
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ), // Wrap Bookings component with PrivateRoute
      },
    ],
  },
]);

export default router;

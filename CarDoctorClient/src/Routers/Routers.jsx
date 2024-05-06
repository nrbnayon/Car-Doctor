import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import img from "/404.gif";

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
    ],
  },
]);
export default router;

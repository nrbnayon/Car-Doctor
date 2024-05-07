import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="h-20">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

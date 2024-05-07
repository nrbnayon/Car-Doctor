import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import gif from "/gif.gif";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <img src={gif} alt="" />
    </div>
  );
};

export default Home;

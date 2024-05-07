import Img1 from "../../assets/images/banner/1.jpg";
import Img2 from "../../assets/images/banner/2.jpg";
import Img3 from "../../assets/images/banner/3.jpg";
import Img4 from "../../assets/images/banner/4.jpg";
// import Img5 from "../../assets/images/banner/5.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={Img1} className="w-full rounded-lg" />
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex items-center h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
            <div className="text-white space-y-3 ml-5">
              <h3 className="text-3xl md:text-5xl font-bold">
                Affordable Price <br /> For Car Servicing
              </h3>
              <p className="md:w-[70%]">
                There are many variable of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-accent mr-4">Discount</button>
              <button className="btn btn-primary">Discount</button>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Img2} className="w-full rounded-lg" />
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex items-center h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
            <div className="text-white space-y-3 ml-5">
              <h3 className="text-3xl md:text-5xl font-bold">
                Affordable Price <br /> For Car Servicing
              </h3>
              <p className="md:w-[70%]">
                There are many variable of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-accent mr-4">Discount</button>
              <button className="btn btn-primary">Discount</button>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Img3} className="w-full rounded-lg" />
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex items-center h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
            <div className="text-white space-y-3 ml-5">
              <h3 className="text-3xl md:text-5xl font-bold">
                Affordable Price <br /> For Car Servicing
              </h3>
              <p className="md:w-[70%]">
                There are many variable of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-accent mr-4">Discount</button>
              <button className="btn btn-primary">Discount</button>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={Img4} className="w-full rounded-lg" />
          <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex items-center h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-lg">
            <div className="text-white space-y-3 ml-5">
              <h3 className="text-3xl md:text-5xl font-bold">
                Affordable Price <br /> For Car Servicing
              </h3>
              <p className="md:w-[70%]">
                There are many variable of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <button className="btn btn-accent mr-4">Discount</button>
              <button className="btn btn-primary">Discount</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

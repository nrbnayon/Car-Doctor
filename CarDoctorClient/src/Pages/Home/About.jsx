import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-1/2 relative">
          <img
            src={person}
            alt="person"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            alt="parts"
            className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-10 border-8 border-white"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-orange-500 font-bold text-3xl">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            vitae?
          </p>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            vitae?
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

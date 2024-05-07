import { useEffect } from "react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-4">
      <div className="text-center space-y-3">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h3 className="text-5xl ">Our Services Area</h3>
        <p className="md:w-[60%] mx-auto p-2">
          The Majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look ever slightly believable
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div
            key={service._id}
            className="relative rounded overflow-hidden shadow-lg border transition-transform duration-300 hover:border-secondary hover:scale-105"
          >
            <div className="p-4 w-full h-64">
              <img
                className="w-full h-full rounded-xl hover:scale-105 transition-transform duration-300"
                src={service.img}
                alt={service.title}
              />
            </div>
            <div className="px-6 pb-4">
              <div className="font-bold text-xl mb-2">{service.title}</div>
              <p className="text-gray-700 text-base">
                {service.description.slice(0, 100)}...
              </p>
            </div>
            <p className="px-6 text-xl font-bold text-orange-700">
              Price: ${service.price}
            </p>
            <div className="px-6 py-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <Typewriter
                words={[`${service.title}`, "Service", "Explore"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>

            <Link
              to={{
                pathname: `/services/${service.title}`,
                state: { serviceName: service.title },
              }}
              className="absolute bottom-4 right-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
            >
              BUY NOW
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

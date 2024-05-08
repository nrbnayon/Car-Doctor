import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    serviceName: title,
    serviceId: _id,
    image: img,
    customerName: user?.displayName,
    email: user?.email,
    address: "",
    city: "",
    zipCode: "",
    country: "",
    date: "",
    mobileNumber: "",
    price: price,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Booked successfully");

        // Clear form data after successful submission
        setFormData({
          serviceName: title,
          serviceId: _id,
          image: img,
          customerName: user?.displayName,
          email: user?.email,
          address: "",
          city: "",
          zipCode: "",
          country: "",
          date: "",
          mobileNumber: "",
          price: price,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error if necessary
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-8 border rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Book Service: {title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="customerName" className="block mb-1 font-medium">
              Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-1 font-medium">
              Amount
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={`$${formData.price}`}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Date */}
          <div className="mb-4">
            <label htmlFor="date" className="block mb-1 font-medium">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* Mobile Number */}
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block mb-1 font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              pattern="[0-9]{11}"
              placeholder="Format: 01xxxxxxxxx"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-1 font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label htmlFor="city" className="block mb-1 font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="zipCode" className="block mb-1 font-medium">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block mb-1 font-medium">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;

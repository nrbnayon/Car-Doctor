import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { createUser } = useContext(AuthContext);
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await createUser(formData);
      console.log(user);
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setError(
          "The password is too weak. Please choose a stronger password."
        );
      } else if (error.code === "auth/email-already-in-use") {
        setError("The email address is already in use.");
      } else {
        setError(`An error occurred while registering.${error}`);
      }
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full lg:flex-row">
        <div className="md:w-1/2">
          <div className="">
            <img src={LoginImg} alt="LoginImg" />
          </div>
        </div>
        <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
          <h1 className="text-3xl md:text-5xl mt-4 text-center font-bold">
            Register now!
          </h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              {error && (
                <button className="btn btn-outline w-full text-red-500">
                  {error}
                </button>
              )}
            </div>
            <div className="form-control ">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="flex justify-center ">
              <p className="text-sm">Already have an account?</p>
              <Link to="/login" className="ml-1 text-primary font-bold">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

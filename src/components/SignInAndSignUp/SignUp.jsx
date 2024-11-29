import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, hundleGoogleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;
    const photo = event.target.photo.value.trim();

    if (!validateEmail(email)) {
      alert("Invalid email address!");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        alert("Successfully Signed Up!");
        navigate(`/profile`);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
            alert("This email is already in use!");
            break;
          case "auth/weak-password":
            alert("Password should be at least 6 characters!");
            break;
          default:
            alert("Something went wrong. Try again!");
        }
        console.error("ERROR:", err.message);
      });
  };

  const hundleGoogleSingUp = () => {
    hundleGoogleAuth()
      .then((res) => {
        console.log(res.user);
        navigate(`/profile`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-100 to-cyan-100">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl max-w-5xl overflow-hidden">
        {/* Left Side: Form */}
        <div className="lg:w-1/2 w-full p-10">
          <form onSubmit={handleRegister} className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Sign Up</h1>
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-gray-600">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            {/* Photo URL Field */}
            <div className="space-y-2">
              <label className="text-gray-600">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
            </div>
            {/* Password Field */}
            <div className="space-y-2 relative">
              <label className="text-gray-600">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-teal-500 hover:text-teal-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-all"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign-Up */}
          <button
            onClick={hundleGoogleSingUp}
            className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-all"
          >
            <FcGoogle className="mr-3" /> Sign Up with Google
          </button>

          {/* Redirect to Sign In */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link to={`/signIn`} className="text-teal-500 font-semibold">
              Sign In
            </Link>
          </p>
        </div>

        {/* Right Side: Information Section */}
        <div className="lg:w-1/2 w-full p-10 bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
          <h2 className="text-4xl font-bold mb-4">Join Postify Today!</h2>
          <p className="text-lg mb-6">
            Create an account to manage and share your posts effortlessly. Get
            started with Postify now and make your posts stand out!
          </p>
          <p className="text-sm text-teal-200">
            Sign up now and take the first step towards efficient post
            management.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, handleGoogleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    signInUser(email, password)
      .then(() => {
        console.log("Successfully Signed In!");
        navigate("/profile");
      })
      .catch((err) => {
        if (
          err.code === "auth/wrong-password" ||
          err.code === "auth/user-not-found"
        ) {
          alert("Invalid email or password!");
        } else {
          alert("Something went wrong. Please try again!");
        }
        console.error("ERROR:", err.message);
      });
  };

  const hundleGoogleSingIn = () => {
    handleGoogleAuth()
      .then(() => {
        navigate(`/profile`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-100">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-xl max-w-5xl overflow-hidden">
        {/* Left Side: Form */}
        <div className="lg:w-1/2 w-full p-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg mb-6">
            Sign in to Postify and start managing your posts with ease. If you
            don’t have an account, join us today!
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 w-full p-10">
          <form onSubmit={handleSignIn} className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Sign In</h1>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-indigo-500 hover:text-indigo-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-all"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Sign In With Google */}
          <button
            onClick={hundleGoogleSingIn}
            className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition-all"
          >
            <FcGoogle className="mr-3" /> Sign In with Google
          </button>

          {/* Redirect to Sign Up */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link to={`/`} className="text-indigo-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

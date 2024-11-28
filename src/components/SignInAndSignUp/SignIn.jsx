import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = useContext(AuthContext);
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
      .then((res) => {
        alert("Successfully Signed In!");
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

  return (
    <div>
      <div className="hero-content my-10 flex-col mx-auto">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-2xl font-bold text-gray-600 text-center">
              Sign In Now!
            </h1>
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password Field */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-12 text-blue-500 hover:text-blue-700 transition-all duration-300"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-gray-100">
                <span>Sign In</span>
              </button>
            </div>
          </form>
          {/* Sign Up With Google*/}
          <div className=" w-10/12 mx-auto mb-5">
            <button className="btn text-lg w-full font-semibold text-center">
              <FcGoogle /> Sign In With Google
            </button>
          </div>
          {/* Redirect to Sign Up */}
          <p className="text-center mb-5">
            Don't have an account?{" "}
            <Link to={`/`}>
              <span className="text-red-500 font-semibold">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);

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
        console.log("User Created:", res.user);

        // Optionally, you can update the user's profile with name and photo here
        // res.user.updateProfile({
        //   displayName: name,
        //   photoURL: photo,
        // });

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
      })
  };

  return (
    <div>
      <div className="hero-content my-10 flex-col mx-auto">
        <div className="text-center lg:text-left">
          <h1
            className="text-transparent bg-clip-text text-3xl font-bold bg-gradient-to-r"
          >
            Sign Up Now!
          </h1>
        </div>
        <div
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          data-aos="zoom-in"
        >
          <div>
            <button
              className="btn text-lg font-semibold w-full text-center "
            >
              <FcGoogle /> SignUp With Google
            </button>
          </div>
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-2xl font-bold text-gray-600 text-center">Or</h1>
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Photo Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
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
              <button
                type="submit"
                className="btn bg-slate-100"
              >
                Sign Up
              </button>
            </div>
          </form>
          {/* Redirect to Login */}
          <p className="text-center mb-5">
            Already have an account?{" "}
            <Link to={`/signIn`}>
              <span className="text-red-500 font-semibold">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

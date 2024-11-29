import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

function Navber() {
  const { signOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate(`/signIn`);
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      {user && (
        <>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `hover:text-blue-400 ${
                  isActive ? "text-blue-400 font-bold" : "text-gray-400"
                }`
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userHome"
              className={({ isActive }) =>
                `hover:text-blue-400 ${
                  isActive ? "text-blue-400 font-bold" : "text-gray-400"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/video"
              className={({ isActive }) =>
                `hover:text-blue-400 ${
                  isActive ? "text-blue-400 font-bold" : "text-gray-400"
                }`
              }
            >
              Video
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                `hover:text-blue-400 ${
                  isActive ? "text-blue-400 font-bold" : "text-gray-400"
                }`
              }
            >
              Notification
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="py-4 navbar px-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg">
      {/* Left Side */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-white"
            aria-label="menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 text-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl text-blue-500 font-bold"
        >
          Postify
        </Link>
      </div>

      {/* Center: Navbar Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-gray-700 hover:bg-gray-600 text-blue-400 font-semibold border border-gray-500"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/signUp"
            className="btn bg-blue-600 hover:bg-blue-500 text-white font-semibold border-blue-400"
          >
            Sign Up
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navber;

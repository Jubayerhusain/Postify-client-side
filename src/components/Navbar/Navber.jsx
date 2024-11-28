import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

function Navber() {
  const { signOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const link = (
    <>
      <li>
        {user && (
          <Link
            to="/profile"
            className={`${
              isActive("/profile") ? "text-blue-400 font-bold" : "text-gray-400"
            } hover:text-blue-300`}
          >
            Profile
          </Link>
        )}
      </li>
      <li>
        {user && (
          <Link
            to="/userHome"
            className={`${
              isActive("/home") ? "text-blue-400 font-bold" : "text-gray-400"
            } hover:text-blue-300`}
          >
            Home
          </Link>
        )}
      </li>
      <li>
        {user && (
          <Link
            to="/video"
            className={`${
              isActive("/video") ? "text-blue-400 font-bold" : "text-gray-400"
            } hover:text-blue-300`}
          >
            Video
          </Link>
        )}
      </li>
      <li>
        {user && (
          <Link
            to="/notification"
            className={`${
              isActive("/notification")
                ? "text-blue-400 font-bold"
                : "text-gray-400"
            } hover:text-blue-300`}
          >
            Notification
          </Link>
        )}
      </li>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        navigate(`/signIn`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-4 navbar px-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 text-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl text-blue-500 font-bold">
          Postify
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-gray-700 hover:bg-gray-600 text-blue-400 font-semibold border-blue-400"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to={"/"}
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

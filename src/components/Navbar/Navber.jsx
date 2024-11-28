import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

function Navber() {
  const {signOutUser} = useContext(AuthContext)
  const navigate = useNavigate()
  const link = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Profile</Link>
      </li>
      <li>
        <Link>Video</Link>
      </li>
      <li>
        <Link>Notification</Link>
      </li>
    </>
  );
  const hundleSignOut =()=>{
    signOutUser()
    .then(res=>{
      navigate(`/signIn`)
    })
    .catch(error=>console.log(error))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Postify</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {link}
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={hundleSignOut} className="btn">SingUp</a>
      </div>
    </div>
  );
}

export default Navber;

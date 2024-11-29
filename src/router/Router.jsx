import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./../components/Home/Home";
import SignUp from "../components/SignInAndSignUp/SignUp";
import SignIn from "../components/SignInAndSignUp/SignIn";
import Profile from "./../components/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UserHome from './../UserHome/UserHome';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <SignUp></SignUp>,
          },
          {
            path: "/signIn",
            element: <SignIn></SignIn>,
          },
        ],
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      
      {
        path: "/userHome",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

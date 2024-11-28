import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from './../components/Home/Home';
import SignUp from "../components/SignInAndSignUp/SignUp";
import SignIn from "../components/SignInAndSignUp/SignIn";
import Profile from './../components/Profile/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
            children:[
                {
                    path:'/',
                    element: <SignUp></SignUp>,
                },
                {
                    path:'/signIn',
                    element: <SignIn></SignIn>
                }
            ]
        },
        {
            path:'/profile',
            element: <Profile></Profile>,
        }
    ]
  },
]);

export default router;
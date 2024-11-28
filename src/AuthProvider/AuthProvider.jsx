import React, { createContext } from "react";
import { auth } from "./../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  // SIGNUP: create user  Function
  const createUser = async (email, password) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } finally {
    }
  };

  // SIGNIN: User SignIn Function
  const signInUser = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } finally {
    }
  };
  //SIGNOUT: User SignOut Function
  const signOutUser = async () => {
    try {
      return await signOut(auth);
    } finally {
    }
  };
  const authInfo = {
    name: "jubayer",
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

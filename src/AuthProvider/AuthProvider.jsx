import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
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
  //GOOOGLE AUTH: User SignUp With google authProvider
  const googleProvider = new GoogleAuthProvider();
  const hundleGoogleAuth = async () => {
    try {
      return await signInWithPopup(auth, googleProvider);
    } finally {
    }
  };
  // get the current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // console.log(currentUser);
      } else {
        setUser(null);
        // console.log("Current user not found!");
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    name: "jubayer",
    user,
    createUser,
    signInUser,
    signOutUser,
    hundleGoogleAuth,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import auth from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (formData) => {
    setLoading(true);
    const { email, password, username } = formData;

    // Password regex: at least one capital letter, one small letter, and minimum 6 characters
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    try {
      // Validate password strength
      if (!strongPasswordRegex.test(password)) {
        throw new Error(
          "Password must contain at least one capital letter, one small letter, and be minimum 6 characters long."
        );
      }

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Update user profile with display name
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      // Set user state
      setUser(userCredential.user);
      setLoading(false);

      return userCredential.user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loading, createUser, logIn, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;

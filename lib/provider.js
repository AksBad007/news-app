import { createContext, useContext, useState, useEffect } from "react";
import { Provider } from "react-redux";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { store } from "./store";
import { auth } from "../app/firebase";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logout }}>
      <Provider store={store}>{children}</Provider>
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);

export default AuthContextProvider;

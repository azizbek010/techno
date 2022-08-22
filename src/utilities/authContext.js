import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    setCurrentUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("banana"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const value = { currentUser, setCurrentUser, logout };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;

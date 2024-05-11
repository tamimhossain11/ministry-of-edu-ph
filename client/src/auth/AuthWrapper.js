import { createContext, useContext, useEffect, useState } from "react";
import { RenderHeader } from "../Components/structure/Header";
import { RenderMenu, RenderRoutes } from "../Components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({ children }) => {
  const [user, setUser] = useState({ name: "", isAuthenticated: false, portals: [] });
  const [sessionTimeout, setSessionTimeout] = useState(null);

  // Define username-password-portals pairs
  const users = [
    { username: "user1", password: "password1", route: "/portal1", portals: ["portal1"] },
    { username: "user2", password: "password2", route: "/portal2", portals: ["portal2"] },
    // Add more users as needed
  ];

  const login = (username, password, route) => {
    return new Promise((resolve, reject) => {
      // Find the user in the list of users
      const userFound = users.find(
        (user) => user.username === username && user.password === password
      );
      if (userFound) {
        setUser({ name: username, isAuthenticated: true, portals: userFound.portals });
        setSessionTimeout(setTimeout(logout, 30 * 60 * 1000)); // Set session timeout for 30 minutes
        resolve(userFound.route);
      } else {
        reject("Invalid username or password");
      }
    });
  };

  const logout = () => {
    clearTimeout(sessionTimeout); // Clear session timeout
    setUser({ name: "", isAuthenticated: false, portals: [] });
  };

  useEffect(() => {
    // Check for existing session on component mount
    const existingSession = JSON.parse(localStorage.getItem("session"));
    if (existingSession && existingSession.isAuthenticated) {
      setUser(existingSession);
      setSessionTimeout(setTimeout(logout, 30 * 60 * 1000)); // Set session timeout for 30 minutes
    }
  }, []);

  useEffect(() => {
    // Store user session in localStorage
    localStorage.setItem("session", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <>
        <RenderHeader />
        <RenderMenu user={user} />
        <RenderRoutes user={user} />
      </>
    </AuthContext.Provider>
  );
};

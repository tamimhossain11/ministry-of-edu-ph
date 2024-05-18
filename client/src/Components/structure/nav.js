import { About } from "../../Pages/About";
import { Account } from "../../Pages/Account";
import { Home } from "../../Pages/Home/Home";
import { Login } from "../../Pages/Login";
import { Portal1 } from "../../Pages/Portal1/Portal1";
import { Portal2 } from "../../Pages/Portal2/Portal2";
import { SchoolFinder } from "../../Pages/SchoolFinder/SchoolFinder";

export const nav = (user) => {
  const nav = [
    { path:   "/",              name: "Home",             element: <Home />,         isMenu: true,   isPrivate: false },
    { path:   "/about",         name: "About",            element: <About />,        isMenu: true,   isPrivate: false },
    { path:   "/school_finder", name: "School Finder",    element: <SchoolFinder />, isMenu: true,   isPrivate: false },
    { path:   "/login",         name: "Explore Portals",  element: <Login />,        isMenu: false,  isPrivate: false },
    { path:   "/account",       name: "Account",          element: <Account />,      isMenu: true,   isPrivate: true },
  ];

  if (user.isAuthenticated) {
    user.portals.forEach((portal) => {
      nav.push({
        path: `/${portal}`,
        name: portal.charAt(0).toUpperCase() + portal.slice(1),
        element: portal === "portal1" ? <Portal1 /> : <Portal2 />,
        isMenu: true,
        isPrivate: true,
      });
    });
  }

  return nav;
};

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../resources/images/logo_d.png'
import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./nav";
import './header.css'
export const RenderRoutes = () => {
    const { user } = AuthData();
    const navItems = nav(user);

    return (
        <Routes>
            {navItems.map((r, i) => {
                if (r.isPrivate && user.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element} />;
                } else if (!r.isPrivate) {
                    return <Route key={i} path={r.path} element={r.element} />;
                } else return false;
            })}
        </Routes>
    );
};

export const RenderHeader = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const { user, logout } = AuthData();
    const navItems = nav(user);
    const MenuItem = ({ r }) => {

        return (
            <div className="nav-item">
                <Link to={r.path}>{r.name}</Link>
            </div>
        );
    };

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    {navItems.map((r, i) => {
                        if (!r.isPrivate && r.isMenu) {
                            return <MenuItem key={i} r={r} />;
                        } else if (user.isAuthenticated && r.isMenu) {
                            return <MenuItem key={i} r={r} />;
                        } else return false;
                    })}

                    {user.isAuthenticated ? (
                        <div className="nav-item">
                            <Link to="#" onClick={logout}>
                                Log out
                            </Link>
                        </div>
                    ) : (
                        <div className="nav-item">
                            <Link to={"login"}>Explore Portal</Link>
                        </div>
                    )}
                </ul>
            </nav>
        </div>
    )
}
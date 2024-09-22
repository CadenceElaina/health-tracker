import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavbarContext } from "../../context/NavbarContext";
import "./navigation.css";

const Navigation = () => {
    const { activeTab } = useNavbarContext();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300); // When user leaves the link / dropdown give them an opportunity to keep it open to avoid rerendering / annoyance
        setTimeoutId(id);
    };

    const handleDropdownMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
    };

    const handleDropdownMouseLeave = () => {
        const id = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300); // Same delay as before
        setTimeoutId(id);
    };

    return (
        <nav className="navigation">
            <div>
                <ul className="navigation-list">
                    {activeTab !== 'home' && (
                        <Link to={"/"}>
                            <li>Home</li>
                        </Link>
                    )}
                    <li
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        Login
                        {isDropdownOpen && (
                            <div
                                className={`dropdown ${isDropdownOpen ? 'visible' : ''}`}
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <form>
                                    <input type="text" placeholder="Username" required />
                                    <input type="password" placeholder="Password" required />
                                    <button type="submit">Sign In</button>
                                </form>
                                <Link to="/register">Register</Link>
                                <Link to="/reset-password">Reset Password</Link>
                            </div>
                        )}

                    </li>
                    {activeTab !== 'dashboard' && (
                        <Link to={"/dashboard"}>
                            <li>My dashboard</li>
                        </Link>
                    )}
                    {activeTab !== 'about' && (
                        <Link to={"/about"}>
                            <li>About</li>
                        </Link>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

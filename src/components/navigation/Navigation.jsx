import React from "react";
import { Link } from "react-router-dom";
import { useNavbarContext } from "../../context/NavbarContext";
import "./navigation.css";

const Navigation = () => {
    const { activeTab } = useNavbarContext();

    return (
        <>
            <nav className="navigation">
                <div>
                    <ul className="navigation-list">
                        {activeTab !== 'home' && (
                            <Link to={"/"}>
                                <li>Home</li>
                            </Link>
                        )}
                        {activeTab !== 'login' && (
                            <Link to={"/login"}>
                                <li>Login</li>
                            </Link>
                        )}
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
        </>
    );
};

export default Navigation;

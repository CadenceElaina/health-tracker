import React from "react";
import Navigation from "../components/navigation/Navigation";
import Login from "../components/login/LoginForm";

const UserAuthenticationPage = () => {
    return (
        <>
            <div className="login-page-wrapper">
                <Navigation />
                <div>
                    <Login />
                </div>
            </div>
        </>

    )
};

export default UserAuthenticationPage;

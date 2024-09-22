import React from "react";
import Navigation from "../components/navigation/Navigation";
import RegisterForm from "../components/register/RegisterForm";
import '../components/register/register.css'
const UserAuthenticationPage = () => {
    return (
        <>
            <div className="login-page-wrapper">
                <Navigation />
                <div>
                    <RegisterForm />
                </div>
            </div>
        </>

    )
};

export default UserAuthenticationPage;

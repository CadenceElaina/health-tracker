import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <>
            <div className="login-wrapper">
                <div className="login-container">
                    <form className="login-form">
                        <h2>Login</h2>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                        <div className="form-links">
                            <a href="/register" className="register-link">Register</a>
                            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use href="#gentle-wave" x="48" y="0" fill="rgba(255, 183, 197, 0.7)" />
                    <use href="#gentle-wave" x="48" y="3" fill="rgba(255, 140, 105, 0.5)" />
                    <use href="#gentle-wave" x="48" y="5" fill="rgba(191, 114, 228, 0.3)" />
                    <use href="#gentle-wave" x="48" y="7" fill="#F57C00" />
                </g>
            </svg>
        </>
    );
}

export default LoginForm;

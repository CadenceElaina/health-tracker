import React, { useState } from 'react';
import "../login/loginform.css"
import './register.css'

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        customGender: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // send formData to the backend
        console.log('Form submitted:', formData);
    };

    return (
        <>
            <div className="login-wrapper">
                <div className="register-container">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="woman">Woman</option>
                                <option value="man">Man</option>
                                <option value="non-binary">Non-binary</option>
                                <option value="genderqueer">Genderqueer</option>
                                <option value="transgender">Transgender</option>
                                <option value="not-listed">Not listed</option>
                                <option value="prefer-no-answer">Prefer not to answer</option>
                            </select>
                        </div>
                        {formData.gender === 'not-listed' && (
                            <div className="input-group">
                                <label htmlFor="customGender">Please specify</label>
                                <input
                                    type="text"
                                    id="customGender"
                                    name="customGender"
                                    value={formData.customGender}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        )}
                        <button type="submit" className="login-button">Register</button>
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
};

export default RegisterForm;

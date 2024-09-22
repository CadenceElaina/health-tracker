import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const NavbarContext = createContext();

export const useNavbarContext = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') {
            setActiveTab('home');
        } else if (path === '/login') {
            setActiveTab('login');
        } else if (path === '/dashboard') {
            setActiveTab('dashboard');
        } else if (path === '/about') {
            setActiveTab('about');
        }
    }, [location]);

    return (
        <NavbarContext.Provider value={{ activeTab }}>
            {children}
        </NavbarContext.Provider>
    );
};

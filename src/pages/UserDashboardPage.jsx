import React, { useState } from 'react';
import UserDashboard from '../components/userdashboard/UserDashboard';
import Navigation from '../components/navigation/Navigation';
import DateTimeDisplay from '../components/datetimedisplay/DateTimeDisplay';
import '../components/datetimedisplay/datetimedisplay.css';
import { ThemeProvider } from '../context/ThemeContext';
import Sidebar from '../components/sidebar/sidebar';
import Journal from '../components/userdashboard/Journal';
import MoodTracker from '../components/userdashboard/MoodTracker';

const UserDashboardPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTool, setActiveTool] = useState('home');

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const handleSelectTool = (tool) => {
        setActiveTool(tool); 
    };

    return (
        <ThemeProvider>
            <div className="dashboard-page">
                <Navigation />
                <DateTimeDisplay />
                <div className={`dashboard-layout-${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
                    <Sidebar
                        isSidebarOpen={isSidebarOpen}
                        toggleSidebar={toggleSidebar}
                        handleSelectTool={handleSelectTool} 
                        activeTool={activeTool}
                    />

                    {activeTool === 'home' ? (
                        <UserDashboard /> 
                    ) : (
                        <>
                            {activeTool === 'journal' && <Journal />}
                            {activeTool === 'moodTracker' && <MoodTracker />} 
                        </>
                    )}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default UserDashboardPage;

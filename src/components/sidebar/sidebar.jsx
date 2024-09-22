import React from 'react';
import { FaUser, FaHome } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = ({ isSidebarOpen, toggleSidebar, handleSelectTool, activeTool }) => {
    const navigationLinks = [
        { id: 1, title: 'Home', icon: <FaHome />, tool: 'home' },
        { id: 2, title: 'Journal', icon: <FaUser />, tool: 'journal' },
        { id: 3, title: 'MoodTracker', icon: <IoSettingsSharp />, tool: 'moodTracker' },
    ];

    return (
        <aside className={`sidebar ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
            <div className="user-info">
                <div className="info-img img-fit-cover">
                    {/* Placeholder for profile image */}
                </div>
                {isSidebarOpen && <span className="info-name">alice-doe</span>}
            </div>

            <nav className="sidebar-navigation">
                <ul className="sidebar-navigation-list">
                    {navigationLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`sidebar-navigation-item ${activeTool === link.tool ? 'active' : ''}`}
                            onClick={() => handleSelectTool(link.tool)}
                        >
                            <div className="sidebar-navigation-link">
                                {link.icon}
                                {isSidebarOpen && <span className="sidebar-navigation-link-text">{link.title}</span>}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>

            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
        </aside>
    );
};

export default Sidebar;

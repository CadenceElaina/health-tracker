import React from 'react'
import './userdashboard.css'
import Journal from './Journal'
import MoodTracker from './MoodTracker'
import { RxDashboard } from "react-icons/rx";
import { FaCalendar, FaSun, FaUser } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';

const UserDashboard = () => {
    return (
        <div className="dashboard-cards-container">
            <div className="card">
                <div className="card-icon"><FaCalendar /></div>
                <h3 className="card-title">Calendar</h3>
                <p className="card-description">Stay organized with your daily tasks</p>
            </div>
            <div className="card">
                <div className="card-icon"><FaUser /></div>
                <h3 className="card-title">Journal</h3>
                <p className="card-description"><Journal /></p>
            </div>
            <div className="card">
                <div className="card-icon"><IoSettingsSharp /></div>
                <h3 className="card-title">Mood Tracker</h3>
                <p className="card-description">Track your emotions daily</p>
            </div>
            <div className="card">
                <div className="card-icon"><FaSun /></div>
                <h3 className="card-title">Affirmations</h3>
                <p className="card-description">Start your day with positivity</p>
            </div>
        </div>
    )
}

export default UserDashboard;
import React, { useState } from 'react';
import { PiNotePencilThin } from "react-icons/pi";

const Journal = () => {
    const [journalIsOpen, setJournalIsOpen] = useState(false);
    const [gratitude, setGratitude] = useState('');
    const [dailyTargets, setDailyTargets] = useState('');
    const [longTermGoals, setLongTermGoals] = useState('');
    const [affirmations, setAffirmations] = useState('');

    // Handle input changes and form submissions here

    return (
        <>
            <div class="journal">
                <div class="journal-header">
                    <h1>My Journal</h1>
                    <p>Write your thoughts here...</p>
                </div>
                <textarea class="journal-content" placeholder="Start writing..."></textarea>
            </div>

        </>
    );
};

export default Journal;
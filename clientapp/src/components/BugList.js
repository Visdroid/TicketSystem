import React, { useEffect, useState } from 'react';
import { getBugs } from '../services/bugService'; // Adjust the path based on your actual directory structure

const BugList = () => {
    useEffect(() => {
        const fetchBugs = async () => {
            try {
                const bugs = await getBugs();
                console.log(bugs);
                // Handle bugs data
            } catch (error) {
                console.error('Error fetching bugs:', error);
            }
        };

        fetchBugs();
    }, []);

    return (
        <div>
            {/* Render bug list */}
        </div>
    );
};

export default BugList;
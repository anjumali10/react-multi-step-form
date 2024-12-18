import React from 'react';
import bgSidebarDesktop from '../assets/bg-sidebar-desktop.svg'; // Correct image import
import Nav_item from './Nav_item';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation(); // Get the current location (route)

    // Helper function to check if the route matches the step number
    const isStepActive = (stepNumber) => {
        const path = location.pathname.toLowerCase(); // Current path (e.g., '/plan', '/addson')
        switch (stepNumber) {
            case 1:
                return path === '/'; // Match root path for step 1
            case 2:
                return path === '/plan'; // Match '/plan' for step 2
            case 3:
                return path === '/addson'; // Match '/addson' for step 3
            case 4:
                return path === '/summary'; // Match '/summary' for step 4
            default:
                return false;
        }
    };
    return (
        <div className="nav relative w-[26%]">
            {/* Background Image */}
            <img src={bgSidebarDesktop} alt="Background Sidebar" className="w-full h-auto" />
            {/* Steps Section */}
            <div className="step items-center h-auto absolute top-0 left-0 p-7 flex flex-col align-middle gap-5">
                <Nav_item color="text-white" number={1} name="Your info" isActive={isStepActive(1)} />
                <Nav_item number={2} name="Select plan" isActive={isStepActive(2)} />
                <Nav_item number={3} name="Add-ons" isActive={isStepActive(3)} />
                <Nav_item number={4} name="Summary" isActive={isStepActive(4)} />
            </div>
        </div>
    );
};

export default Navbar;

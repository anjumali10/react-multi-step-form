import React, { useState, useEffect } from 'react';
import bgSidebarDesktop from '../assets/bg-sidebar-desktop.svg';
import bgSidebarMobile from '../assets/bg-sidebar-mobile.svg';
import Nav_item from './Nav_item';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Check screen size on resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isStepActive = (stepNumber) => {
        const path = location.pathname.toLowerCase();
        switch (stepNumber) {
            case 1:
                return path === '/';
            case 2:
                return path === '/plan';
            case 3:
                return path === '/addson';
            case 4:
                return path === '/summary';
            default:
                return false;
        }
    };

    return (
        <div className="nav relative w-full sm:w-[75%]">
            {/* Background Image */}
            <img
                src={isMobile ? bgSidebarMobile : bgSidebarDesktop}
                alt="Background Sidebar"
                className="w-full h-auto"
            />

            {/* Steps Section */}
            <div className="step items-center h-auto absolute top-0 left-12 sm:left-0 p-5 sm:p-7 flex flex-row sm:flex-col gap-4">
                <Nav_item color="text-white" number={1} name="Your info" isActive={isStepActive(1)} />
                <Nav_item number={2} name="Select plan" isActive={isStepActive(2)} />
                <Nav_item number={3} name="Add-ons" isActive={isStepActive(3)} />
                <Nav_item number={4} name="Summary" isActive={isStepActive(4)} />
            </div>
        </div>
    );
};

export default Navbar;

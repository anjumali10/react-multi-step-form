import React from 'react';
import bgSidebarDesktop from '../assets/bg-sidebar-desktop.svg'; // Correct image import
import Nav_item from './Nav_item';

const Navbar = () => {
    return (
        <div className="nav relative w-[20vw]">
            {/* Background Image */}
            <img src={bgSidebarDesktop} alt="Background Sidebar" className="w-full h-auto" />
            {/* Steps Section */}
            <div className="step items-center h-auto absolute top-0 left-0 p-7 flex flex-col align-middle gap-5">
                <Nav_item number='1' name='Your info' />
                <Nav_item number='2' name='Select plan' />
                <Nav_item number='3' name='Add-ons' />
                <Nav_item number='4' name='Summary' />
            </div>
        </div>
    );
};

export default Navbar;

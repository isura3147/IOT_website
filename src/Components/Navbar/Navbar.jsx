
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/newlogowithoutbg.png';
import menuicon from '../../assets/menu-icon.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsDarkBackground(true);
            } else {
                setIsDarkBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Adjust this value based on your navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        closeMenu();
    };

    const menuItems = [
        { id: "background1", text: "Home" },
        { id: "aboutus", text: "About" },
        { id: "services1", text: "Services" },
        { id: "projects1", text: "Projects"},
        { id: "contactus", text: "Contact Us"}
    ];

    return (
        <nav className={isDarkBackground ? 'dark-nav' : ''}>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                <img src={menuicon} alt="Menu Icon" style={{ width: '100%', height: '100%', maxWidth: '20px', maxHeight: '20px' }} />
            </div>

            <ul className={`${menuOpen ? 'open' : 'hide-mobile-menu'} ${isDarkBackground ? 'dark-nav' : ''}`}>
                {menuItems.map((item, index) => (
                    <li key={item.text} onClick={() => scrollToSection(item.id)} style={{ transitionDelay: `${index * 0.1}s` }}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;


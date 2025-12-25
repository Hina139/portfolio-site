import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

import { FaLaptopCode } from 'react-icons/fa'; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = ['home', 'about', 'projects', 'skills', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    {/* --- Logo Text ki jagah Laptop Icon --- */}
                    <a 
                        href="#home" 
                        className="logo-icon-wrapper" 
                        onClick={(e) => { 
                            e.preventDefault(); 
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Top par jane ke liye
                        }}
                        title="Back to Top"
                    >
                        <FaLaptopCode className="nav-logo-icon" />
                    </a>

                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    
                        <a 
                            href="#about" 
                            className={activeSection === 'about' ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                        >About</a>
                        <a 
                            href="#projects" 
                            className={activeSection === 'projects' ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                        >Projects</a>
                        <a 
                            href="#skills" 
                            className={activeSection === 'skills' ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                        >Skills</a>
                        <a 
                            href="#contact" 
                            className={activeSection === 'contact' ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                        >Contact</a>
                    </div>

                    <button 
                        className="menu-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
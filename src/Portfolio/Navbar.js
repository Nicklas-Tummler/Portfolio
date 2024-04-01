import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import the faBars icon

const Navbar = () => {
    const [showFaBarsIcon, setShowFaBarsIcon] = useState(false);

    const toggleFaBar = () => {
        setShowFaBarsIcon(prevValue => !prevValue);
    };

    const scrollToHome = () => {
        const HomeSection = document.getElementById("home"); 
        if (HomeSection) {
            HomeSection.scrollIntoView({ behavior: 'smooth' });
            toggleFaBar(); 
        }
    };

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about"); 
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            toggleFaBar(); 
        }
    };
    const scrollToSkills = () => {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
            toggleFaBar(); 
        }
    };
    const scrollToProject = () => {
        const ProjectSection = document.getElementById("project"); 
        if (ProjectSection) {
            ProjectSection.scrollIntoView({ behavior: 'smooth' });
            toggleFaBar(); 
        }
    };
    const scrollToContact = () => {
        const ContactSection = document.getElementById("contact"); 
        if (ContactSection) {
            ContactSection.scrollIntoView({ behavior: 'smooth' });
            toggleFaBar(); 
        }
    };

    return (
        <header>
            <main className="main-navbar">
                <div className="div-navbar">
                    <ul className="animate__animated animate__zoomInUp"> 
                        <li><a href="#" onClick={scrollToHome}>Home</a></li>
                        <li><a href="#" onClick={scrollToAbout}>About</a></li>
                        <li><a href="#" onClick={scrollToSkills}>Skills</a></li>
                        <li><a href="#" onClick={scrollToProject}>Projects</a></li>
                        <li><a href="#" onClick={scrollToContact}>Contact</a></li>
                    </ul>
                    <FontAwesomeIcon className="bars-icon" onClick={toggleFaBar} icon={faBars} />
                </div>
                <ul className={`fa-bar-navbar ${showFaBarsIcon ? 'show' : ''}`}> 
                    <li><a href="#">Home</a></li>
                    <li><a href="#" onClick={scrollToAbout}>About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </main>
        </header>
    );
};

export default Navbar;

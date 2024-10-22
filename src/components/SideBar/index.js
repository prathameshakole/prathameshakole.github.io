import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoP from '../../assets/images/logo-p.png';
import LogoSubTitle from '../../assets/images/logo-sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCode, faDiagramProject, faEnvelope, faHome, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect } from 'react';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 770);
            if (window.innerWidth > 770) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className={`nav-bar ${isMobile ? 'mobile' : ''}`}>
                <Link className='logo' to='/'>
                    <img src={LogoP} alt='logo' />
                    <img className='sub-logo' src={LogoSubTitle} alt='logosub' />
                </Link>
                <nav>
                    <NavLink exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                        <FontAwesomeIcon icon={faNewspaper} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                        <FontAwesomeIcon icon={faDiagramProject} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                </nav>
                <ul>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/prathamesh-akole/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://leetcode.com/u/akole/'>
                            <FontAwesomeIcon icon={faCode} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://twitter.com/AkolePrathamesh'>
                            <FontAwesomeIcon icon={faTwitter} color='#4d4d4e'/>
                        </a>
                    </li>
                </ul>
            </div>

            {isMobile && (
                <FontAwesomeIcon 
                    icon={sidebarOpen ? faTimes : faBars} 
                    className={`hamburger-icon ${sidebarOpen ? 'open' : ''}`} 
                    onClick={handleToggleSidebar} 
                />
            )}

            {sidebarOpen && (
                <div className={`temporary-sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <nav>
                        <NavLink exact="true" activeclassname="active" to="/" onClick={handleToggleSidebar}>
                            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                            <span>Home</span>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={handleToggleSidebar}>
                            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                            <span>About</span>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume" onClick={handleToggleSidebar}>
                            <FontAwesomeIcon icon={faNewspaper} color='#4d4d4e' />
                            <span>Resume</span>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="project-link" to="/projects" onClick={handleToggleSidebar}>
                            <FontAwesomeIcon icon={faDiagramProject} color='#4d4d4e' />
                            <span>Projects</span>
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={handleToggleSidebar}>
                            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                            <span>Contact</span>
                        </NavLink>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Sidebar;
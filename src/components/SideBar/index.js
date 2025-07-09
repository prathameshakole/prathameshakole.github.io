import { Link, NavLink, useLocation } from 'react-router-dom';
import './index.scss';
import LogoP from '../../assets/images/logo-p.png';
import LogoSubTitle from '../../assets/images/logo-sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCode, faDiagramProject, faEnvelope, faHome, faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useState, useEffect, useCallback } from 'react';
import { useSection } from '../../SectionContext';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);
    const location = useLocation();
    const { currentSection } = useSection();

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

    const handleSectionClick = useCallback((e, sectionId) => {
        e.preventDefault();
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', sectionId === 'home' ? '/' : `/#${sectionId}`);
        } else if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.pushState(null, '', '/');
        }
    }, []);

    return (
        <>
            <div className={`nav-bar ${isMobile ? 'mobile' : ''}`}>
                <Link className='logo' to='/'>
                    <img src={LogoP} alt='logo' />
                    <img className='sub-logo' src={LogoSubTitle} alt='logosub' />
                </Link>
                <nav>
                    <a href='/' className={location.pathname === '/' && currentSection === 'home' ? 'active' : ''} onClick={e => handleSectionClick(e, 'home')}>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </a>
                    <a href='/#about' className={`about-link ${location.pathname === '/' && currentSection === 'about' ? 'active' : ''}`} onClick={e => handleSectionClick(e, 'about')}>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </a>
                    <a href='/#projects' className={`project-link ${location.pathname === '/' && currentSection === 'projects' ? 'active' : ''}`} onClick={e => handleSectionClick(e, 'projects')}>
                        <FontAwesomeIcon icon={faDiagramProject} color='#4d4d4e' />
                    </a>
                </nav>
                <ul>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/prathamesh-akole/'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://leetcode.com/u/akole/'>
                            <FontAwesomeIcon icon={faCode} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' rel='noreferrer' href='https://twitter.com/AkolePrathamesh'>
                            <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' />
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
                        <NavLink exact="true" to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleToggleSidebar}>
                            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                            <span>Home</span>
                        </NavLink>
                        <NavLink exact="true" to="/about" className={`about-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={handleToggleSidebar}>
                            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                            <span>About</span>
                        </NavLink>
                        <NavLink exact="true" to="/projects" className={`project-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={handleToggleSidebar}>
                            <FontAwesomeIcon icon={faDiagramProject} color='#4d4d4e' />
                            <span>Projects</span>
                        </NavLink>
                        <NavLink exact="true" to="/contact" className={`contact-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleToggleSidebar}>
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
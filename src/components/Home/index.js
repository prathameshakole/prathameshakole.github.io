import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from 'react-loaders';
import Footer from '../../components/Footer';
import Intro from './sections/Intro/Intro';
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import { Box } from '@mui/material';
import { useSection } from '../../SectionContext';

const MainContainer = Box;

const Home = () => {
    const location = useLocation();
    const [numPages, setNumPages] = useState(null);
    const { setCurrentSection } = useSection();

    useEffect(() => {
        if (location.hash === "#about") {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        } else if (location.hash === "#resume") {
            document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
        } else if (location.hash === '#projects') {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        } else if (location.hash === "#contact") {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        } else {
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'home', offset: 0 },
                { id: 'about', offset: 0 },
                { id: 'projects', offset: 0 },
            ];
            let current = 'home';
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100) {
                        current = section.id;
                    }
                }
            }
            setCurrentSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [setCurrentSection]);

    return (
        <>
            <MainContainer>
                <Intro />
                <About />
                <Projects />
            </MainContainer>
            <Loader type="pacman" />
            <Footer />
        </>
    );
};

export default Home;





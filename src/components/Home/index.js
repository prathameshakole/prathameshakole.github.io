import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { styled, keyframes, width } from '@mui/system';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import Footer from '../../components/Footer';
import Logo from './Logo';
import LogoP from '../../assets/images/logo-p.png';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiPython,
    SiPostgresql,
    SiAmazonaws,
    SiMysql,
    SiSpringboot,
    SiCplusplus,
    SiC,
    SiTypescript,
    SiTerraform,
    SiDocker,
    SiGit,
    SiKubernetes,
    SiJenkins,
    SiPostman,
} from 'react-icons/si';
import { FaHandshake, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';


const rotateIn = keyframes`
  from {
    transform: rotate(-200deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;


const MainContainer = styled(Box)({
    height: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
        width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        borderRadius: '10px',
    },
});


const HomeSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20%',
    boxSizing: 'border-box',
    backgroundColor: 'black',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '20px 10%',
    },
}));

const HomeLeft = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',
    },
}));

const HomeRight = styled(Box)(({ theme }) => ({
    width: '40%',
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '50vh',
        marginTop: '20px',
    },
}));

const AnimatedImage = styled('img')({
    marginLeft: '20px',
    marginRight: '-5px',
    marginBottom: '-5px',
    opacity: 0,
    width: '50px',
    height: '55px',
    animation: `${rotateIn} 1s linear both`,
    animationDelay: '1.4s',
});

const StyledButton = styled(Button)(({ theme }) => ({
    color: '#ffd700',
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '2px',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    padding: '10px',
    border: '1px solid #ffd700',
    marginTop: '25px',
    marginRight: '5px',
    whiteSpace: 'nowrap',
    animation: `${fadeIn} 1s 1.8s backwards`,
    '&:hover': {
        backgroundColor: '#ffd700',
        color: '#333',
    },
}));

const AboutSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '8%',
    boxSizing: 'border-box',
    backgroundColor: '#111',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '10%',
    },
}));

const AboutLeft = styled(Box)(({ theme }) => ({
    width: '100%',
    paddingRight: '5%',
    textAlign: 'justify',
    animation: `${fadeIn} 1s ease-in-out both`,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',

    },
}));

const AboutRight = styled(Box)(({ theme }) => ({
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    animation: `${fadeIn} 1s ease-in-out both`,
    [theme.breakpoints.down('md')]: {
        paddingTop: '0',
        width: '100%',
        alignItems: 'center',
    },
}));

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#about") {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        } else {
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <>
            <MainContainer>
                <HomeSection id="home">
                    <HomeLeft>
                        <Typography
                            variant="h1"
                            sx={{
                                color: '#fff',
                                fontSize: '56px',
                                lineHeight: '53px',
                                fontFamily: 'Coolvetica',
                                fontWeight: 400,
                            }}
                        >
                            Hi, <br />
                            I'm <AnimatedImage src={LogoP} alt="developer" />rathamesh Akole,
                            <br />
                            Software Engineer.
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#8d8d8d',
                                marginTop: '20px',
                                fontWeight: 400,
                                fontSize: '11px',
                                fontFamily: 'sans-serif',
                                letterSpacing: '3px',
                            }}
                        >
                            Java / Backend / Full-Stack / DevOps / Machine Learning
                        </Typography>
                        <Box sx={{ marginTop: '25px' }}>
                            <StyledButton component={Link} to="/contact">
                                <FaHandshake size={20} />
                            </StyledButton>
                            <StyledButton
                                component={Link}
                                to="https://www.linkedin.com/in/prathamesh-akole/"
                                target="_blank"
                            >
                                <FaLinkedin size={20} />
                            </StyledButton>
                            <StyledButton
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=akoleprathamesh@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaEnvelope size={20} />
                            </StyledButton>
                            <StyledButton
                                component={Link}
                                to="https://x.com/AkolePrathamesh"
                                target="_blank"
                            >
                                <FaTwitter size={20} />
                            </StyledButton>
                        </Box>
                    </HomeLeft>
                    <HomeRight>
                        <Logo />
                    </HomeRight>
                </HomeSection>

                <AboutSection id="about">
                    <AboutLeft>
                        <Typography
                            variant="h1"
                            sx={{
                                color: '#ffd700',
                                fontFamily: 'Coolvetica',
                                fontWeight: 400,
                                mb: 2,
                            }}
                        >
                            About Me
                        </Typography>

                        <Typography variant="h4" sx={{ color: '#fff', fontFamily: 'Coolvetica', mb: 2, lineHeight: 1 }}>
                            Hi, I'm Prathamesh Akole, a Computer Science grad student at Northeastern University.
                            My journey started in India, where I completed my Bachelor's in Information Technology
                            before diving into professional software development as an SDE Intern at IDeaS Revenue Solutions,
                            a leading provider of Revenue Management Solutions for the hospitality industry.
                            There, I worked with Java 8, Spring MVC, and JUnit to develop and test web applications and APIs for hotel booking and pricing.
                        </Typography>
                        <Typography variant="h4" sx={{ color: '#fff', fontFamily: 'Coolvetica', mb: 2, lineHeight: 1 }}>
                            I'm passionate about software development and have worked on projects ranging from a Learning Management System to an AI-enabled rental platform.
                            My work has led to two publications in computer vision and deep learning, reflecting my interest in cutting-edge technology.
                            I specialize in Java, Spring Boot, JavaScript and cloud technologies, always focusing on building solutions that solve real problems.
                            Currently, I'm exploring new technologies while pursuing my Master's, aiming to create software that makes a meaningful impact.
                        </Typography>
                        <Typography variant="h4" sx={{ color: '#fff', fontFamily: 'Coolvetica', mb: 2, lineHeight: 1 }}>
                            Beyond coding, I've had quite a diverse journey. I competed nationally in Fencing at the under-14 level,
                            and my artwork was featured in international exhibitions in Melbourne and Japan when I was only 12 years old.
                            In my downtime, you'll find me immersed in fiction, crafting poems, or exploring world cinema.
                            I believe these varied interests bring a unique perspective to my problem-solving approach in tech.
                        </Typography>
                    </AboutLeft>
                    <AboutRight>
                        <SiHtml5 size={40} color="#fff" />
                        <SiCss3 size={40} color="#fff" />
                        <SiJavascript size={40} color="#fff" />
                        <SiTypescript size={40} color="#fff" />
                        <SiReact size={40} color="#fff" />
                        <SiNextdotjs size={40} color="#fff" />
                        <SiCplusplus size={40} color="#fff" />
                        <SiC size={40} color="#fff" />
                        <SiPython size={40} color="#fff" />
                        <SiMongodb size={40} color="#fff" />
                        <SiPostgresql size={40} color="#fff" />
                        <SiAmazonaws size={40} color="#fff" />
                        <SiMysql size={40} color="#fff" />
                        <SiSpringboot size={40} color="#fff" />
                        <SiGit size={40} color="#fff" />
                        <SiDocker size={40} color="#fff" />
                        <SiKubernetes size={40} color="#fff" />
                        <SiTerraform size={40} color="#fff" />
                        <SiJenkins size={40} color="#fff" />
                        <SiPostman size={40} color="#fff" />
                    </AboutRight>
                </AboutSection>

            </MainContainer>
            <Loader type="pacman" />
            <Footer />
        </>

    );
};

export default Home;





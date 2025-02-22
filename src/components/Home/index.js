import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Button, Grid, TextField } from '@mui/material';
import { styled, keyframes, width } from '@mui/system';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import Footer from '../../components/Footer';
import Logo from './Logo';
import LogoP from '../../assets/images/logo-p.png';
import celtics from '../../assets/images/celtics3.png';
import pinpoint from '../../assets/images/ss1-pinpoint.png';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from '../../assets/resume/feb_25.pdf';
import { Card, CardMedia, CardContent, CardActions } from '@mui/material';
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

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


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

const ResumeSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}));

const ResumeLeft = styled(Box)(({ theme }) => ({
    width: '20%',
    animation: `${fadeIn} 1s ease-in-out both`,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',

    },
}));

const ResumeRight = styled(Box)(({ theme }) => ({
    alignContent: 'center',
    paddingLeft: '5%',
    animation: `${fadeIn} 1s ease-in-out both`,
    [theme.breakpoints.down('md')]: {
        paddingTop: '0',
        width: '100%',
        alignItems: 'center',
    },
}));

const ProjectsSection = styled(Box)(({ theme }) => ({
    backgroundColor: '#222',
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingBottom: '8%',
    paddingTop: '2%',
    boxSizing: 'border-box',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
        padding: '10%',
    },
}));

const ContactSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    backgroundColor: '#111',
    padding: '5%',
    textAlign: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '10%',
    },
}));

const ContactLeft = styled(Box)(({ theme }) => ({
    width: '50%',
    alignContent: 'center',
    animation: `${fadeIn} 1s ease-in-out both`,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        textAlign: 'center',

    },
}));

const ContactRight = styled(Box)(({ theme }) => ({
    alignContent: 'center',
    [theme.breakpoints.down('md')]: {
        paddingTop: '0',
        width: '100%',
        alignItems: 'center',
    },
}));

const Home = () => {
    const location = useLocation();
    const [numPages, setNumPages] = useState(null);

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

    const projects = [
        {
            title: 'Celtics Game Tracker',
            description:
                'A chrome extension that tracks the scores, games and ranking of the Boston Celtics, providing real-time updates and a user-friendly interface for game enthusiasts.',
            imageUrl: celtics,
            link: 'https://github.com/prathameshakole/celtics',
        },
        {
            title: 'PinPoint - A GeoGuesser Social Media',
            description:
                'Developed using the MERN stack, Pinpoint combines visual puzzles with location-based challenges. Users can upload geo-tagged photos and create quizzes for others.',
            imageUrl: pinpoint,
            link: 'https://pinpoint.prathameshakole.com',
        },
        {
            title: 'Kanbas Learning Management Software',
            description:
                'A comprehensive LMS inspired by Canvas. It offers robust authentication, secure data protection, and interactive features for an engaging online classroom experience.',
            imageUrl: LogoP,
            link: 'https://kanbas.prathameshakole.com',
        },
        {
            title: 'Image Processing Software',
            description:
                'A Java-based image processing application with a user-friendly Swing interface. It offers various filters, image compression, and a preview option for efficient editing.',
            imageUrl: LogoP,
        },
        {
            title: 'Real-Time Mask Detection System',
            description:
                'An automated face mask detection system using deep learning to monitor public safety compliance in real time, reducing manual monitoring requirements.',
            imageUrl: LogoP,
            link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003342755-6/real-time-cnn-based-face-mask-detection-system-suvarna-pawar-mrudul-jain-prathamesh-akole-suyog-mahagaonkar-rupesh-kapse',
        },
        {
            title: 'Real Time CCTV Violence Detection System',
            description:
                'An automated violence detection system leveraging CNNs and LSTMs for real-time analysis of video feeds, enhancing public safety and rapid incident response.',
            imageUrl: LogoP,
            link: 'https://ieeexplore.ieee.org/document/10099886',
        },
    ];


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
                            I'm<AnimatedImage src={LogoP} alt="developer" />rathamesh Akole.
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
                        <Typography variant="h1" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 400, mb: 2, }}>
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

                <ResumeSection id="resume">
                    <ResumeLeft>
                        <Typography variant="h1" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 400, mb: 2 }}>
                            Resume
                        </Typography>
                        <StyledButton variant="contained" sx={{ backgroundColor: '#ffd700', color: '#111', mb: 3 }} href={resumePDF} download>
                            Download Resume
                        </StyledButton>
                    </ResumeLeft>
                    <ResumeRight>
                        <Box sx={{ maxWidth: '900px', overflow: 'auto', border: '1px solid #fff', padding: '10px', maxHeight: '100vh', scale: '0.8' }}>
                            <Document file={resumePDF} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
                                {Array.from(new Array(numPages), (el, index) => (
                                    <Page pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false} />

                                ))}
                            </Document>
                        </Box>
                    </ResumeRight>
                </ResumeSection>

                <ProjectsSection id="projects">
                    <Typography variant="h1" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 400, mb: 4 }}>
                        Projects
                    </Typography>
                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        border: '2px solid #ffd700',
                                        backgroundColor: '#333',
                                        color: '#fff',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    {project.imageUrl && (
                                        <CardMedia
                                            component="img"
                                            height="425"
                                            image={project.imageUrl}
                                            alt={project.title}
                                        />
                                    )}
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h4" component="div" sx={{ color: '#ffd700', fontFamily: 'Coolvetica' }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body1" color="white" fontFamily={'Coolvetica'}>
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                    {project.link && (
                                        <CardActions>
                                            <Button size="xl" sx={{ color: '#ffd700' }} href={project.link} target="_blank">
                                                Learn More
                                            </Button>
                                        </CardActions>
                                    )}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </ProjectsSection>

                <ContactSection id="contact">
                    <ContactLeft>
                        <Typography variant="h1" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 400, mb: 2 }}>Contact Me</Typography>
                    </ContactLeft>
                    <ContactRight>
                            <TextField
                                halfWidth
                                label="Name"
                                variant="filled"
                                sx={{ mb: 2, backgroundColor: '#fff' }}
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                variant="filled"
                                sx={{ mb: 2, backgroundColor: '#fff' }}
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                variant="filled"
                                multiline
                                rows={4}
                                sx={{ mb: 2, backgroundColor: '#fff' }}
                            />
                            <StyledButton variant="contained" type="submit" sx={{ backgroundColor: '#ffd700', color: '#333' }}>
                                Send Message
                            </StyledButton>
                    </ContactRight>
                </ContactSection>

            </MainContainer>
            <Loader type="pacman" />
            <Footer />
        </>

    );
};

export default Home;





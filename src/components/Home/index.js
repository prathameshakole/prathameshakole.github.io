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
import { FaHandshake, FaLinkedin, FaEnvelope, FaTwitter, FaJava, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const contentAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TimelineWrapper = styled(Box)({
    position: 'relative',
    padding: '2rem 0',
});

const TimelineItem = styled(Box)({
    display: 'flex',
    position: 'relative',
    animation: `${slideIn} 0.6s ease-out forwards`,
    opacity: 0,
    '&:not(:last-child)': {
      marginBottom: '50px',
    },
});

const TimelineSeparator = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
    margin: '0 20px'
});

const TimelineDot = styled(Box)({
    height: '20px',
    width: '20px',
    backgroundColor: '#ffd700',
    borderRadius: '50%',
    zIndex: 1,
    boxShadow: '0 0 10px #ffd700, 0 0 20px #ffd700',
});

const TimelineConnector = styled(Box)({
    width: '4px',
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    flexGrow: 1,
});

const TimelineContent = styled(Box)({
    backgroundColor: '#1c1c1c',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 215, 0, 0.2)',
    width: '100%',
});

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
    },
}));


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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5% 10%',
    boxSizing: 'border-box',
    backgroundColor: '#111',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
        padding: '10%',
    },
}));

const SkillCategory = ({ title, icons }) => (
    <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', mb: 2, borderBottom: '1px solid rgba(255, 215, 0, 0.5)', paddingBottom: '10px' }}>
            {title}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'flex-start' }}>
            {icons.map((icon, index) => (
                <Box key={index} sx={{ textAlign: 'center' }}>
                    {icon.icon}
                    <Typography variant="caption" sx={{ color: '#fff', display: 'block', mt: 0.5 }}>{icon.name}</Typography>
                </Box>
            ))}
        </Box>
    </Box>
);

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

// Typing effect component
const TypingEffect = ({ text, speed = 100, pause = 1500 }) => {
    const [displayed, setDisplayed] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        if (!isDeleting && index < text.length) {
            timeout = setTimeout(() => {
                setDisplayed(text.slice(0, index + 1));
                setIndex(index + 1);
            }, speed);
        } else if (!isDeleting && index === text.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pause);
        } else if (isDeleting && index > 0) {
            timeout = setTimeout(() => {
                setDisplayed(text.slice(0, index - 1));
                setIndex(index - 1);
            }, speed / 2);
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
        }
        return () => clearTimeout(timeout);
    }, [index, isDeleting, text, speed, pause]);

    return (
        <span>{displayed}<span style={{ color: '#ffd700' }}>|</span></span>
    );
};

const milestones = [
    {
        year: "Early Life",
        title: "A Glimpse into My Early Years",
        description: "Beyond coding, I've had a diverse journey. I competed nationally in Fencing and my artwork was featured in international exhibitions. These experiences bring a unique perspective to my problem-solving approach in tech."
    },
    {
        year: "2019-2023",
        title: "Bachelor's in Information Technology",
        description: "My journey started in India, where I completed my Bachelor's in Information Technology, building a strong foundation for my technical skills."
    },
    {
        year: "2023",
        title: "SDE Intern at IDeaS Revenue Solutions",
        description: "I dived into professional software development as an SDE Intern at IDeaS, working with Java 8, Spring MVC, and JUnit to develop and test web applications for the hospitality industry."
    },
    {
        year: "2022-23",
        title: "Publications and Projects",
        description: "Passionate about software development, my work on various projects has led to two publications in computer vision and deep learning, reflecting my interest in cutting-edge technology."
    },
    {
        year: "2023-2025",
        title: "Master's at Northeastern University",
        description: "I recently graduated with a Master of Science in Computer Science degree at Northeastern University, I'm exploring new technologies to create impactful software, specializing in Backend, Full-Stack, and DevOps. I also have a strong interest in Machine Learning and AI."
    }
];

const Timeline = ({ milestones }) => {
    return (
        <TimelineWrapper>
            {milestones.map((milestone, index) => (
                <TimelineItem key={index} sx={{ animationDelay: `${index * 0.2}s` }}>
                    <TimelineSeparator>
                        <TimelineDot />
                        {index < milestones.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 'bold' }}>
                            {milestone.year}
                        </Typography>
                        <Typography variant="h4" sx={{ color: '#fff', fontFamily: 'Coolvetica', my: 1 }}>
                            {milestone.title}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'sans-serif', lineHeight: 1.7, textAlign: 'justify' }}>
                            {milestone.description}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </TimelineWrapper>
    );
};

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
                            <TypingEffect text={"Hi, I'm Prathamesh Akole."} speed={50} pause={1500} />
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
                            Software Developer / Backend / Full-Stack / DevOps / Machine Learning
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
                            <StyledButton href={resumePDF} download>
                                Download Resume
                            </StyledButton>
                        </Box>
                    </HomeLeft>
                    <HomeRight>
                        <Logo />
                    </HomeRight>
                </HomeSection>

                <AboutSection id="about">
                    <Typography variant="h1" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 400, mb: 5, textAlign: 'center' }}>
                        About Me
                    </Typography>
                    <Grid container spacing={6} alignItems="flex-start">
                        <Grid item lg={7}>
                            <Box>
                                <Timeline milestones={milestones} />
                            </Box>
                        </Grid>
                        <Grid item lg={5}>
                            <Box>
                                <SkillCategory title="Languages & Databases" icons={[
                                    { icon: <FaJava size={40} color="#fff" />, name: 'Java' },
                                    { icon: <SiPython size={40} color="#fff" />, name: 'Python' },
                                    { icon: <SiJavascript size={40} color="#fff" />, name: 'JavaScript' },
                                    { icon: <SiTypescript size={40} color="#fff" />, name: 'TypeScript' },
                                    { icon: <SiCplusplus size={40} color="#fff" />, name: 'C++' },
                                    { icon: <SiC size={40} color="#fff" />, name: 'C' },
                                    { icon: <SiPostgresql size={40} color="#fff" />, name: 'PostgreSQL' },
                                    { icon: <SiMysql size={40} color="#fff" />, name: 'MySQL' },
                                    { icon: <SiMongodb size={40} color="#fff" />, name: 'MongoDB' },
                                ]} />
                                <SkillCategory title="Frontend" icons={[
                                    { icon: <SiReact size={40} color="#fff" />, name: 'React' },
                                    { icon: <SiNextdotjs size={40} color="#fff" />, name: 'Next.js' },
                                    { icon: <SiHtml5 size={40} color="#fff" />, name: 'HTML5' },
                                    { icon: <SiCss3 size={40} color="#fff" />, name: 'CSS3' },
                                ]} />
                                <SkillCategory title="Backend & DevOps" icons={[
                                    { icon: <SiSpringboot size={40} color="#fff" />, name: 'Spring Boot' },
                                    { icon: <SiAmazonaws size={40} color="#fff" />, name: 'AWS' },
                                    { icon: <SiDocker size={40} color="#fff" />, name: 'Docker' },
                                    { icon: <SiKubernetes size={40} color="#fff" />, name: 'Kubernetes' },
                                    { icon: <SiJenkins size={40} color="#fff" />, name: 'Jenkins' },
                                    { icon: <SiTerraform size={40} color="#fff" />, name: 'Terraform' },
                                    { icon: <SiGit size={40} color="#fff" />, name: 'Git' },
                                    { icon: <SiPostman size={40} color="#fff" />, name: 'Postman' },
                                ]} />
                            </Box>
                        </Grid>
                    </Grid>
                </AboutSection>


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
            </MainContainer>
            <Loader type="pacman" />
            <Footer />
        </>

    );
};

export default Home;





import React from 'react';
import { Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { Link } from 'react-router-dom';
import TypingEffect from '../../shared/TypingEffect';
import Logo from '../../Logo';
import resumePDF from '../../../../assets/resume/Prathamesh_Akole_Resume_Master_New.pdf';
import { FaLinkedin, FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa';

const fadeIn = keyframes`
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HomeSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 10%',
    boxSizing: 'border-box',
    backgroundColor: 'black',
    minHeight: '100vh',
    position: 'relative',
    gap: '60px',
    [theme.breakpoints.down('lg')]: {
        padding: '0 8%',
        gap: '40px',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        padding: '60px 5%',
        gap: '40px',
        justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '40px 4%',
        gap: '30px',
    },
}));

const HomeLeft = styled(Box)(({ theme }) => ({
    flex: '1',
    maxWidth: '600px',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        maxWidth: '100%',
        textAlign: 'center',
    },
}));

const HomeRight = styled(Box)(({ theme }) => ({
    width: '350px',
    height: '350px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexShrink: 0,
    animation: `${slideInRight} 1s 0.5s backwards`,
    [theme.breakpoints.down('lg')]: {
        width: '300px',
        height: '300px',
    },
    [theme.breakpoints.down('md')]: {
        width: '250px',
        height: '250px',
        order: -1,
        animation: `${slideInLeft} 1s 0.5s backwards`,
    },
    [theme.breakpoints.down('sm')]: {
        width: '200px',
        height: '200px',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: '#ffd700',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '1.5px',
    fontFamily: 'Helvetica Neue, sans-serif',
    textDecoration: 'none',
    padding: '12px 24px',
    border: '1px solid #ffd700',
    marginTop: '20px',
    marginRight: '10px',
    marginBottom: '10px',
    whiteSpace: 'nowrap',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    animation: `${fadeIn} 1s 1.8s backwards`,
    minWidth: '50px',
    '&:hover': {
        backgroundColor: '#ffd700',
        color: '#1a1a1a',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '10px 18px',
        fontSize: '0.9rem',
        marginRight: '8px',
        marginBottom: '8px',
        minWidth: '45px',
    },
}));

const SocialButtonsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '30px',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        marginTop: '25px',
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '20px',
        gap: '8px',
    },
}));

const Intro = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box id="home">
            <HomeSection>
                <HomeLeft>
                    <Typography
                        variant="h1"
                        sx={{
                            color: '#fff',
                            fontSize: {
                                xs: '2.5rem',
                                sm: '3.5rem',
                                md: '4.5rem',
                                lg: '5rem',
                            },
                            lineHeight: '1.2',
                            fontFamily: 'Coolvetica',
                            fontWeight: 400,
                            animation: `${slideInLeft} 1s 0.3s backwards`,
                            mb: { xs: 2, sm: 3 },
                        }}
                    >
                        <TypingEffect text={"Hi, I'm Prathamesh Akole."} speed={50} pause={1500} />
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: '#8d8d8d',
                            marginTop: { xs: '15px', sm: '20px' },
                            fontWeight: 400,
                            fontSize: {
                                xs: '0.9rem',
                                sm: '1.1rem',
                                md: '1.3rem',
                                lg: '1.5rem',
                            },
                            fontFamily: 'Helvetica Neue, sans-serif',
                            letterSpacing: {
                                xs: '1.5px',
                                sm: '2px',
                                md: '2.5px',
                                lg: '3px',
                            },
                            lineHeight: '1.6',
                            animation: `${fadeIn} 1s 1.2s backwards`,
                        }}
                    >
                        Software Developer / Backend / Full-Stack / DevOps / Machine Learning
                    </Typography>
                    <SocialButtonsContainer>
                        <StyledButton
                            component={Link}
                            to="https://www.linkedin.com/in/prathamesh-akole/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={isMobile ? 18 : 20} />
                        </StyledButton>
                        <StyledButton
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=akoleprathamesh@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Email"
                        >
                            <FaEnvelope size={isMobile ? 18 : 20} />
                        </StyledButton>
                        <StyledButton
                            component={Link}
                            to="https://x.com/AkolePrathamesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={isMobile ? 18 : 20} />
                        </StyledButton>
                        <StyledButton
                            component={Link}
                            to="https://github.com/prathameshakole"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub size={isMobile ? 18 : 20} />
                        </StyledButton>
                        <StyledButton 
                            href={resumePDF} 
                            download
                            sx={{
                                fontSize: {
                                    xs: '0.85rem',
                                    sm: '0.95rem',
                                    md: '1rem',
                                },
                                padding: {
                                    xs: '10px 16px',
                                    sm: '12px 20px',
                                    md: '12px 24px',
                                },
                            }}
                        >
                            View Resume
                        </StyledButton>
                    </SocialButtonsContainer>
                </HomeLeft>
                <HomeRight>
                    <Box sx={{ 
                        width: '100%', 
                        height: '100%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.1))',
                    }}>
                        <Logo style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    </Box>
                </HomeRight>
            </HomeSection>
        </Box>
    );
};

export default Intro; 
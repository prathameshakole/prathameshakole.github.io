import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { Link } from 'react-router-dom';
import TypingEffect from '../../shared/TypingEffect';
import Logo from '../../Logo';
import resumePDF from '../../../../assets/resume/feb_25.pdf';
import { FaHandshake, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

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
    width: '300px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    [theme.breakpoints.down('md')]: {
        width: '200px',
        height: '200px',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: '#ffd700',
    fontSize: '13px',
    fontWeight: 400,
    letterSpacing: '2px',
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    padding: '10px 24px', // Make button wider for consistency
    border: '1px solid #ffd700',
    marginTop: '25px',
    marginRight: '5px',
    whiteSpace: 'nowrap',
    borderRadius: '18px', // Consistent curvature
    animation: `${fadeIn} 1s 1.8s backwards`,
    '&:hover': {
        backgroundColor: '#ffd700',
        color: '#333',
    },
}));

const Intro = () => (
    <Box id="home">
        <HomeSection>
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
                        View Resume
                    </StyledButton>
                </Box>
            </HomeLeft>
            <HomeRight>
                <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Logo style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Box>
            </HomeRight>
        </HomeSection>
    </Box>
);

export default Intro; 
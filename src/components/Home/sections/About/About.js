import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import Timeline from '../../shared/Timeline';
import SkillCategory from '../../shared/SkillCategory';
import { milestones } from '../../data/data';
import { FaJava } from 'react-icons/fa';
import {
    SiPython, SiJavascript, SiCplusplus, SiC, SiPostgresql, SiMysql, SiMongodb,
    SiSpringboot, SiReact, SiNextdotjs, SiHtml5, SiCss3,
    SiAmazonwebservices, SiDocker, SiKubernetes, SiJenkins, SiTerraform, SiGit, SiPostman
} from 'react-icons/si';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AboutSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5% 10%',
    boxSizing: 'border-box',
    backgroundColor: '#111',
    [theme.breakpoints.down('md')]: {
        padding: '10%',
    },
}));

const About = () => (
    <Box id="about">
        <AboutSection>
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
                            { icon: <SiCplusplus size={40} color="#fff" />, name: 'C++' },
                            { icon: <SiC size={40} color="#fff" />, name: 'C' },
                            { icon: <SiPostgresql size={40} color="#fff" />, name: 'PostgreSQL' },
                            { icon: <SiMysql size={40} color="#fff" />, name: 'MySQL' },
                            { icon: <SiMongodb size={40} color="#fff" />, name: 'MongoDB' },
                        ]} />
                        <SkillCategory title="Frameworks & Libraries" icons={[
                            { icon: <SiSpringboot size={40} color="#fff" />, name: 'Spring Boot' },
                            { icon: <SiReact size={40} color="#fff" />, name: 'React' },
                            { icon: <SiNextdotjs size={40} color="#fff" />, name: 'Next.js' },
                            { icon: <SiHtml5 size={40} color="#fff" />, name: 'HTML5' },
                            { icon: <SiCss3 size={40} color="#fff" />, name: 'CSS3' },
                        ]} />
                        <SkillCategory title="Other" icons={[
                            { icon: <SiAmazonwebservices size={40} color="#fff" />, name: 'AWS' },
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
    </Box>
);

export default About; 
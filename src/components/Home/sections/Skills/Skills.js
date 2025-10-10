import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import SkillCategory from '../../shared/SkillCategory';
import { FaJava } from 'react-icons/fa';
import {
    SiPython, SiJavascript, SiCplusplus, SiC, SiPostgresql, SiMysql, SiMongodb,
    SiSpringboot, SiReact, SiNextdotjs, SiHtml5, SiCss3,
    SiAmazonwebservices, SiDocker, SiKubernetes, SiJenkins, SiTerraform, SiGit, SiPostman
} from 'react-icons/si';

const SkillsSection = styled(Box)(({ theme }) => ({
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

const Skills = () => (
    <Box id="skills">
        <SkillsSection>
            <Typography variant="h1" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 400, mb: 5, textAlign: 'center', fontSize: '4.5rem' }}>
                Skills & Technologies
            </Typography>
            <Box sx={{ maxWidth: '800px', width: '100%' }}>
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
        </SkillsSection>
    </Box>
);

export default Skills;

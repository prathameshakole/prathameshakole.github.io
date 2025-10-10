import React from 'react';
import { Typography, Box, Grid, useTheme } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import TimelineCarousel from '../../shared/TimelineCarousel';
import PublicationCard from '../../shared/PublicationCard';
import ExperienceCard from '../../shared/ExperienceCard';
import EducationCard from '../../shared/EducationCard';
import { milestones, publications } from '../../data/data';

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

const About = () => {
    const theme = useTheme();
    const educationMilestones = milestones
        .filter((m) => m.category === 'Education')
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    const experienceMilestones = milestones
        .filter((m) => m.category === 'Experience')
        .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
    const volunteerMilestones = milestones.filter((m) => m.category === 'Volunteer');

    return (
        <Box id="about">
            <AboutSection>
                <Typography variant="h1" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 400, mb: 5, textAlign: 'center', fontSize: '4.5rem' }}>
                    About Me
                </Typography>
                <Box sx={{ maxWidth: '100%', width: '100%' }}>
                    {educationMilestones.length > 0 && (
                        <Box sx={{ mb: 5, textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', mb: 3, fontSize: '3rem' }}>
                                Education
                            </Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: 'column',
                                justifyContent: 'center', 
                                alignItems: 'center',
                                gap: '32px',
                                maxWidth: '800px',
                                margin: '0 auto',
                                padding: '0 20px',
                                // Mobile responsive adjustments
                                [theme.breakpoints.down('sm')]: {
                                    gap: '24px',
                                    padding: '0 16px',
                                },
                                [theme.breakpoints.between('sm', 'md')]: {
                                    gap: '28px',
                                    padding: '0 18px',
                                }
                            }}>
                                {educationMilestones.map((education, index) => (
                                    <Box key={index} sx={{ 
                                        width: '100%',
                                        maxWidth: '700px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'stretch'
                                    }}>
                                        <EducationCard
                                            year={education.year}
                                            title={education.title}
                                            description={education.description}
                                            institution={education.institution}
                                            logo={education.logo}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                    {experienceMilestones.length > 0 && (
                        <Box sx={{ mb: 5, textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', mb: 3, fontSize: '3rem' }}>
                                Experience
                            </Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: 'column',
                                justifyContent: 'center', 
                                alignItems: 'center',
                                gap: '32px',
                                maxWidth: '800px',
                                margin: '0 auto',
                                padding: '0 20px'
                            }}>
                                {experienceMilestones.map((experience, index) => (
                                    <Box key={index} sx={{ 
                                        width: '100%',
                                        maxWidth: '700px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'stretch'
                                    }}>
                                        <ExperienceCard
                                            company={experience.company}
                                            role={experience.role}
                                            dateRange={experience.dateRange}
                                            description={experience.description}
                                            logo={experience.logo}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                    {volunteerMilestones.length > 0 && (
                        <Box sx={{ mb: 5, textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', mb: 2, fontSize: '3rem' }}>
                                Volunteer
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <TimelineCarousel milestones={volunteerMilestones} />
                            </Box>
                        </Box>
                    )}
                    {publications.length > 0 && (
                        <Box sx={{ mb: 5, textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', mb: 3, fontSize: '3rem' }}>
                                Publications
                            </Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: 'column',
                                justifyContent: 'center', 
                                alignItems: 'center',
                                gap: '32px',
                                maxWidth: '800px',
                                margin: '0 auto',
                                padding: '0 20px'
                            }}>
                                {publications.map((publication, index) => (
                                    <Box key={index} sx={{ 
                                        width: '100%',
                                        maxWidth: '700px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'stretch'
                                    }}>
                                        <PublicationCard
                                            title={publication.title}
                                            authors={publication.authors}
                                            journal={publication.journal}
                                            year={publication.year}
                                            description={publication.description}
                                            link={publication.link}
                                            type={publication.type}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    )}
                </Box>
            </AboutSection>
        </Box>
    );
};

export default About; 
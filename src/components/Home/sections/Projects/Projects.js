import React, { useState } from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, Modal, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { projects } from '../../data/data';
import { FaJava } from 'react-icons/fa';
// Import icons from react-icons/si
import { 
    SiReact, 
    SiNodedotjs, 
    SiMongodb, 
    SiJavascript, 
    SiGooglechrome, 
    SiExpress, 
    SiPython, 
    SiTensorflow, 
    SiOpencv, 
    SiKeras, 
    SiMui
} from 'react-icons/si';

const ProjectsSection = styled(Box)(({ theme }) => ({
    backgroundColor: '#222',
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingBottom: '8%',
    paddingTop: '2%',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
        padding: '10%',
    },
}));

const StyledCard = styled(Card)({
    border: '2px solid #ffd700',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '18px',
    boxShadow: '0 4px 24px 0 rgba(0,0,0,0.25)',
    transition: 'transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        transform: 'scale(1.04)',
        boxShadow: '0 8px 32px 0 #ffd70055',
        borderColor: '#ffd700',
    },
});

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1300,
});

const ModalContent = styled(Box)({
    background: '#222',
    border: '2px solid #ffd700',
    borderRadius: '20px',
    boxShadow: '0 8px 32px 0 #ffd70055',
    padding: '32px',
    maxWidth: 480,
    width: '90vw',
    color: '#fff',
    position: 'relative',
    outline: 'none',
    fontFamily: 'Helvetica Neue',
});

// Replace the skillLogos object with icon components
const skillIcons = {
    react: SiReact,
    nodejs: SiNodedotjs,
    mongodb: SiMongodb,
    mui: SiMui,
    javascript: SiJavascript,
    'chrome-extension': SiGooglechrome,
    express: SiExpress,
    java: FaJava,
    swing: FaJava, // Using Java icon for Swing as well
    python: SiPython,
    tensorflow: SiTensorflow,
    opencv: SiOpencv,
    'deep-learning': SiKeras,
};


const Projects = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
        <Box id="projects">
            <ProjectsSection>
                <Typography variant="h1" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontWeight: 400, mb: 4, fontSize: '4.5rem' }}>
                    Projects
                </Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <StyledCard onClick={() => handleOpen(project)}>
                                {project.imageUrl && (
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={project.imageUrl}
                                        alt={project.title}
                                        sx={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '180px',
                                            borderRadius: '16px 16px 0 0',
                                            background: '#222',
                                            transition: 'filter 0.2s',
                                            filter: 'brightness(0.95)',
                                            '&:hover': { filter: 'brightness(1.05)' },
                                        }}
                                    />
                                )}
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h4" component="div" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontSize: '2rem' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" color="white" fontFamily={'Coolvetica'} sx={{ fontSize: '1.4rem' }}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        size="xl"
                                        sx={{ color: project.link ? '#ffd700' : '#aaa', opacity: project.link ? 1 : 0.6 }}
                                        href={project.link || undefined}
                                        target={project.link ? '_blank' : undefined}
                                        onClick={e => { if (!project.link) e.stopPropagation(); }}
                                        disabled={!project.link}
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
                <StyledModal open={open} onClose={handleClose}>
                    {selectedProject ? (
                        <ModalContent>
                            <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 12, right: 12, color: '#ffd700' }}>
                                <CloseIcon />
                            </IconButton>
                            {selectedProject.imageUrl && (
                                <Box sx={{ mb: 2, textAlign: 'center', width: '100%', height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#181818', borderRadius: 2 }}>
                                    <img
                                        src={selectedProject.imageUrl}
                                        alt={selectedProject.title}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: 200,
                                            objectFit: 'contain',
                                            borderRadius: 12,
                                            boxShadow: '0 2px 12px #ffd70033',
                                            margin: '0 auto',
                                            display: 'block',
                                        }}
                                    />
                                </Box>
                            )}
                            <Typography variant="h4" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', mb: 1, fontSize: '2.5rem' }}>
                                {selectedProject.title}
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: 'Helvetica Neue', mb: 2, fontSize: '1.4rem' }}>
                                {selectedProject.description}
                            </Typography>
                            {selectedProject.skills && selectedProject.skills.length > 0 && (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center', mt: 2, mb: 2 }}>
                                    {selectedProject.skills.map(skill => {
                                        const IconComponent = skillIcons[skill];
                                        return (
                                            <Box key={skill} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 48 }}>
                                                {IconComponent && (
                                                    <IconComponent 
                                                        size={32} 
                                                        color="#ffd700"
                                                        style={{ marginBottom: 4 }}
                                                    />
                                                )}
                                                <Typography variant="caption" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', fontSize: '1.1rem' }}>
                                                    {skill}
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            )}
                            {selectedProject.link && (
                                <Button variant="contained" sx={{ background: '#ffd700', color: '#222', fontWeight: 700, fontFamily: 'Coolvetica', '&:hover': { background: '#fff176', color: '#222' } }} href={selectedProject.link} target="_blank">
                                    Visit Project
                                </Button>
                            )}
                        </ModalContent>
                    ) : (
                        <span />
                    )}
                </StyledModal>
            </ProjectsSection>
        </Box>
    );
};

export default Projects; 
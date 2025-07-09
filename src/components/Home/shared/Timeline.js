import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled, keyframes } from '@mui/system';

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

export default Timeline; 
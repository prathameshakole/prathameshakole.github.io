import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardRoot = styled(Box)({
    backgroundColor: '#1c1c1c',
    border: '1px solid rgba(255, 215, 0, 0.2)',
    borderRadius: '12px',
    padding: '20px',
    width: '100%',
    minWidth: 280,
    maxWidth: 360,
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    justifyContent: 'space-between'
});

const Year = styled(Typography)({
    color: '#ffd700',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.6rem'
});

const Title = styled(Typography)({
    color: '#fff',
    fontFamily: 'Coolvetica',
    fontSize: '1.8rem'
});

const Desc = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.7,
    textAlign: 'justify',
    fontSize: '1.4rem'
});

const TimelineCard = ({ year, title, description }) => {
    return (
        <CardRoot>
            <Year variant="h6">{year}</Year>
            <Title variant="h4">{title}</Title>
            <Desc variant="body1">{description}</Desc>
        </CardRoot>
    );
};

export default TimelineCard;



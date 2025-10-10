import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const CardRoot = styled(Box)({
    backgroundColor: '#1c1c1c',
    border: '1px solid rgba(255, 215, 0, 0.2)',
    borderRadius: '12px',
    padding: '32px',
    width: '100%',
    minWidth: 600,
    maxWidth: 700,
    boxSizing: 'border-box',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 20px rgba(255, 215, 0, 0.1)',
        border: '1px solid rgba(255, 215, 0, 0.4)',
    }
});

const Title = styled(Typography)({
    color: '#fff',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    lineHeight: 1.3
});

const Authors = styled(Typography)({
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'sans-serif',
    fontSize: '1.4rem',
    fontStyle: 'italic'
});

const Journal = styled(Typography)({
    color: '#ffd700',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.6rem'
});

const Year = styled(Typography)({
    color: '#ffd700',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.7rem'
});

const Description = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.6,
    textAlign: 'justify',
    fontSize: '1.4rem'
});

const Type = styled(Box)({
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    border: '1px solid rgba(255, 215, 0, 0.3)',
    borderRadius: '6px',
    padding: '8px 16px',
    display: 'inline-block',
    fontSize: '1.2rem',
    color: '#ffd700',
    fontFamily: 'sans-serif',
    fontWeight: 'bold'
});

const PublicationCard = ({ title, authors, journal, year, description, link, type }) => {
    return (
        <CardRoot>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Year variant="h6">{year}</Year>
                <Type>{type}</Type>
            </Box>
            <Title variant="h5">{title}</Title>
            <Authors variant="body2">{authors}</Authors>
            <Journal variant="body1">{journal}</Journal>
            <Description variant="body2">{description}</Description>
            {link && (
                <Link 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                        color: '#ffd700', 
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' },
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                    }}
                >
                    View Publication →
                </Link>
            )}
        </CardRoot>
    );
};

export default PublicationCard;

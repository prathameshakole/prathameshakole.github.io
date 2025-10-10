import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const CardRoot = styled(Box)(({ theme }) => ({
    backgroundColor: '#1c1c1c',
    border: '1px solid rgba(255, 215, 0, 0.2)',
    borderRadius: '12px',
    padding: '32px',
    width: '100%',
    minWidth: '280px', // Reduced from 600px for mobile compatibility
    maxWidth: '700px',
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
    },
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        padding: '20px',
        gap: '12px',
        minWidth: '280px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        padding: '24px',
        gap: '14px',
    }
}));

const Title = styled(Typography)(({ theme }) => ({
    color: '#fff',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    lineHeight: 1.3,
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
        lineHeight: 1.2,
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.5rem',
        lineHeight: 1.25,
    }
}));

const Authors = styled(Typography)(({ theme }) => ({
    color: 'rgba(255,255,255,0.8)',
    fontFamily: 'sans-serif',
    fontSize: '1.4rem',
    fontStyle: 'italic',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.2rem',
    }
}));

const Journal = styled(Typography)(({ theme }) => ({
    color: '#ffd700',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.6rem',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.1rem',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.3rem',
    }
}));

const Year = styled(Typography)(({ theme }) => ({
    color: '#ffd700',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.7rem',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.4rem',
    }
}));

const Description = styled(Typography)(({ theme }) => ({
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.6,
    textAlign: 'justify',
    fontSize: '1.4rem',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        lineHeight: 1.5,
        textAlign: 'left',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.2rem',
        lineHeight: 1.55,
    }
}));

const Type = styled(Box)(({ theme }) => ({
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    border: '1px solid rgba(255, 215, 0, 0.3)',
    borderRadius: '6px',
    padding: '8px 16px',
    display: 'inline-block',
    fontSize: '1.2rem',
    color: '#ffd700',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
        padding: '6px 12px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1rem',
        padding: '7px 14px',
    }
}));

const PublicationCard = ({ title, authors, journal, year, description, link, type }) => {
    const theme = useTheme();
    return (
        <CardRoot>
            <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                mb: 1,
                // Mobile responsive adjustments
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '8px',
                    mb: 2,
                },
                [theme.breakpoints.between('sm', 'md')]: {
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: '12px',
                }
            }}>
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

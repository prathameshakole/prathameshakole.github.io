import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
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
    gap: '20px',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 20px rgba(255, 215, 0, 0.1)',
        border: '1px solid rgba(255, 215, 0, 0.4)',
    },
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        padding: '20px',
        gap: '16px',
        minWidth: '280px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        padding: '24px',
        gap: '18px',
    }
}));

const HeaderSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '8px',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        gap: '16px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '12px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        gap: '18px',
    }
}));

const LogoContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 215, 0, 0.2)',
    flexShrink: 0,
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        width: '60px',
        height: '60px',
        borderRadius: '8px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        width: '70px',
        height: '70px',
    }
}));

const InstitutionLogo = styled(Avatar)(({ theme }) => ({
    width: '60px',
    height: '60px',
    backgroundColor: 'transparent',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        width: '45px',
        height: '45px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        width: '55px',
        height: '55px',
    }
}));

const ContentSection = styled(Box)({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
});

// Utility function to format year range into shortened tag format
const formatYearTag = (year) => {
    if (year.includes('-')) {
        const [start, end] = year.split('-');
        return `${start}-${end.slice(-2)}`; // e.g., "2019-2023" becomes "2019-23"
    }
    return year;
};

const YearTag = styled(Chip)(({ theme }) => ({
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    color: '#ffd700',
    border: '1px solid rgba(255, 215, 0, 0.3)',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    height: '32px',
    borderRadius: '16px',
    '& .MuiChip-label': {
        padding: '0 12px',
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        height: '28px',
        borderRadius: '14px',
        '& .MuiChip-label': {
            padding: '0 10px',
            fontSize: '1rem',
        }
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.1rem',
        height: '30px',
        '& .MuiChip-label': {
            padding: '0 11px',
            fontSize: '1.1rem',
        }
    }
}));

const InstitutionName = styled(Typography)(({ theme }) => ({
    color: '#fff',
    fontFamily: 'Coolvetica',
    fontWeight: '600',
    fontSize: '2.2rem',
    lineHeight: 1.3,
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.6rem',
        lineHeight: 1.2,
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.9rem',
        lineHeight: 1.25,
    }
}));

const DegreeTitle = styled(Typography)(({ theme }) => ({
    color: '#ffd700',
    fontFamily: 'Coolvetica',
    fontWeight: '500',
    fontSize: '1.9rem',
    lineHeight: 1.2,
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
        lineHeight: 1.1,
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.6rem',
        lineHeight: 1.15,
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

const TopSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '12px',
        marginBottom: '16px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '16px',
    }
}));

const EducationCard = ({ year, title, description, institution, logo }) => {
    return (
        <CardRoot>
            <TopSection>
                <HeaderSection>
                    <LogoContainer>
                        {logo ? (
                            <InstitutionLogo 
                                src={logo} 
                                alt={`${institution} logo`}
                                variant="rounded"
                            />
                        ) : (
                            <InstitutionLogo 
                                sx={{ 
                                    backgroundColor: 'rgba(255, 215, 0, 0.2)',
                                    color: '#ffd700',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold'
                                }}
                            >
                                {institution ? institution.charAt(0) : 'U'}
                            </InstitutionLogo>
                        )}
                    </LogoContainer>
                    <ContentSection>
                        <InstitutionName variant="h5">{institution}</InstitutionName>
                        <DegreeTitle variant="h6">{title}</DegreeTitle>
                    </ContentSection>
                </HeaderSection>
                <YearTag label={formatYearTag(year)} />
            </TopSection>
            <Description variant="body1">{description}</Description>
        </CardRoot>
    );
};

export default EducationCard;

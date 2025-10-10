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

// Utility function to format date range into shortened tag format
const formatDateRangeTag = (dateRange) => {
    if (!dateRange) return '';
    
    // Handle "Present" case
    if (dateRange.includes('Present')) {
        const startDate = dateRange.split(' - ')[0];
        const [month, year] = startDate.split(' ');
        return `${month} ${year} - Present`;
    }
    
    // Handle date ranges like "August 2022 - December 2022"
    if (dateRange.includes(' - ')) {
        const [start, end] = dateRange.split(' - ');
        const startParts = start.split(' ');
        const endParts = end.split(' ');
        
        if (startParts.length === 2 && endParts.length === 2) {
            const startMonth = startParts[0];
            const startYear = startParts[1];
            const endMonth = endParts[0];
            const endYear = endParts[1];
            
            // If same year, show "Aug - Dec 2022"
            if (startYear === endYear) {
                return `${startMonth.slice(0, 3)} - ${endMonth.slice(0, 3)} ${startYear}`;
            }
            // If different years, show "Aug 2022 - Dec 2023"
            return `${startMonth.slice(0, 3)} ${startYear} - ${endMonth.slice(0, 3)} ${endYear}`;
        }
    }
    
    return dateRange;
};

const DateRangeTag = styled(Chip)(({ theme }) => ({
    backgroundColor: 'rgba(255, 215, 0, 0.15)',
    color: '#ffd700',
    border: '1px solid rgba(255, 215, 0, 0.3)',
    fontFamily: 'Coolvetica',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    height: '32px',
    borderRadius: '16px',
    '& .MuiChip-label': {
        padding: '0 12px',
        fontSize: '1.1rem',
        fontWeight: 'bold'
    },
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
        height: '28px',
        borderRadius: '14px',
        '& .MuiChip-label': {
            padding: '0 10px',
            fontSize: '0.9rem',
        }
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1rem',
        height: '30px',
        '& .MuiChip-label': {
            padding: '0 11px',
            fontSize: '1rem',
        }
    }
}));

const CompanyName = styled(Typography)(({ theme }) => ({
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

const RoleTitle = styled(Typography)(({ theme }) => ({
    color: '#ffd700',
    fontFamily: 'Coolvetica',
    fontWeight: '500',
    fontSize: '1.9rem',
    lineHeight: 1.2,
    marginBottom: '8px',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.3rem',
        lineHeight: 1.1,
        marginBottom: '6px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        fontSize: '1.6rem',
        lineHeight: 1.15,
        marginBottom: '7px',
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

const HeaderSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '8px',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '12px',
        marginBottom: '12px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '16px',
    }
}));

const LeftHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flex: 1,
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        gap: '12px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        gap: '14px',
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
    padding: '8px',
    // Mobile styles
    [theme.breakpoints.down('sm')]: {
        width: '60px',
        height: '60px',
        borderRadius: '8px',
        padding: '6px',
    },
    // Tablet styles
    [theme.breakpoints.between('sm', 'md')]: {
        width: '70px',
        height: '70px',
        padding: '7px',
    }
}));

const CompanyLogo = styled(Avatar)({
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    // Ensure the inner <img> scales to fit inside the square without cropping
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain'
    }
});

const ExperienceCard = ({ company, role, dateRange, description, logo }) => {
    return (
        <CardRoot>
            <HeaderSection>
                <LeftHeader>
                    <LogoContainer>
                        {logo ? (
                            <CompanyLogo src={logo} alt={`${company} logo`} variant="rounded" />
                        ) : (
                            <CompanyLogo
                                sx={{
                                    backgroundColor: 'rgba(255, 215, 0, 0.2)',
                                    color: '#ffd700',
                                    fontSize: '1.4rem',
                                    fontWeight: 'bold'
                                }}
                                variant="rounded"
                            >
                                {company ? company.charAt(0) : 'C'}
                            </CompanyLogo>
                        )}
                    </LogoContainer>
                    <Box sx={{ flex: 1 }}>
                        <CompanyName variant="h5">{company}</CompanyName>
                        <RoleTitle variant="h6">{role}</RoleTitle>
                    </Box>
                </LeftHeader>
                <DateRangeTag label={formatDateRangeTag(dateRange)} />
            </HeaderSection>
            <Description variant="body1">{description}</Description>
        </CardRoot>
    );
};

export default ExperienceCard;

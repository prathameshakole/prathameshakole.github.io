import React from 'react';
import { Box, Typography, Avatar, Chip } from '@mui/material';
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
    gap: '20px',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 20px rgba(255, 215, 0, 0.1)',
        border: '1px solid rgba(255, 215, 0, 0.4)',
    }
});

const HeaderSection = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '8px'
});

const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80px',
    height: '80px',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 215, 0, 0.2)',
    flexShrink: 0
});

const InstitutionLogo = styled(Avatar)({
    width: '60px',
    height: '60px',
    backgroundColor: 'transparent'
});

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

const YearTag = styled(Chip)({
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
    }
});

const InstitutionName = styled(Typography)({
    color: '#fff',
    fontFamily: 'Coolvetica',
    fontWeight: '600',
    fontSize: '2.2rem',
    lineHeight: 1.3
});

const DegreeTitle = styled(Typography)({
    color: '#ffd700',
    fontFamily: 'Coolvetica',
    fontWeight: '500',
    fontSize: '1.9rem',
    lineHeight: 1.2
});

const Description = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.6,
    textAlign: 'justify',
    fontSize: '1.4rem'
});

const TopSection = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
});

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

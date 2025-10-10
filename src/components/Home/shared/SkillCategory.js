import React from 'react';
import { Box, Typography } from '@mui/material';

const SkillCategory = ({ title, icons }) => (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ color: '#ffd700', fontFamily: 'Coolvetica', mb: 2, borderBottom: '1px solid rgba(255, 215, 0, 0.5)', paddingBottom: '10px', fontSize: '2.5rem' }}>
            {title}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            {icons.map((icon, index) => (
                <Box key={index} sx={{ textAlign: 'center' }}>
                    {icon.icon}
                    <Typography variant="caption" sx={{ color: '#fff', display: 'block', mt: 0.5, fontSize: '1.2rem' }}>{icon.name}</Typography>
                </Box>
            ))}
        </Box>
    </Box>
);

export default SkillCategory; 
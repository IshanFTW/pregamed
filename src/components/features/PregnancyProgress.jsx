import { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


export default function PregnancyProgress() {
  const [weeks] = useState(24);
  const weeksLabel = 'Weeks';

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));

  return (
    <Card sx={{ mb: 4, padding: 2 }}>
      <CardContent>
        <Typography variant="h6" aria-label="Pregnancy Progress Overview">
          Pregnancy Progress Overview
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Typography variant="h2" color="textPrimary">
            {weeksLabel}
          </Typography>
        </div>
        <Typography variant="h2" color="primary" sx={{ mb: 2 }}>
          {weeks} Weeks
        </Typography>
        <Typography>Estimated due date: January 15, 2024</Typography>
      </CardContent>

      {/* Add progress bar or image */}
      <BorderLinearProgress variant="determinate" value={50} />
    </Card>
  );
}

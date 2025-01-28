import { Paper, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import { Favorite, Science, AccessibilityNew, ChildCare, Cake } from '@mui/icons-material';

export default function PregnancyTimeline() {
  const milestones = [
    { 
      week: 4, 
      title: "Heart Development",
      icon: <Favorite />,
      description: "Baby's heart begins to form"
    },
    { 
      week: 8, 
      title: "Organ Formation",
      icon: <Science />,
      description: "Major organs start developing"
    },
    { 
      week: 12, 
      title: "First Movements",
      icon: <AccessibilityNew />,
      description: "Baby starts making small movements"
    },
    { 
      week: 20, 
      title: "Gender Reveal",
      icon: <ChildCare />,
      description: "Anatomy scan typically performed"
    },
    { 
      week: 28, 
      title: "Third Trimester",
      icon: <Cake />,
      description: "Rapid growth and brain development"
    },
  ];

  return (
    <Paper sx={{ p: 4, my: 4, bgcolor: 'background.paper' }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Pregnancy Milestones Timeline
      </Typography>
      <Timeline position="alternate">
        {milestones.map((milestone, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ py: 2 }}>
              <Typography variant="h6" color="textSecondary">
                Week {milestone.week}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                {milestone.icon}
              </TimelineDot>
              {index < milestones.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: 2 }}>
              <Typography variant="h6" component="span">
                {milestone.title}
              </Typography>
              <Typography>{milestone.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
}
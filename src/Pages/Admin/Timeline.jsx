import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';


// Map string icons to actual MUI components
const iconMap = {
  home: <HomeOutlinedIcon />,
  email: <EmailOutlinedIcon />,
  calendar: <CalendarMonthOutlinedIcon />,
  document: <DescriptionOutlinedIcon />,
};

const activityData = [
  {
    time: '12 min ago',
    title: 'New Property Listed',
    description: 'A new apartment has been added by John Doe.',
    link: null,
    icon: 'home',
  },
  {
    time: '45 min ago',
    title: 'Client Inquiry',
    description: 'Received a new inquiry from a potential buyer about a villa.',
    link: 'inquiry_details.pdf',
    icon: 'email',
  },
  {
    time: '2 Day Ago',
    title: 'Property Tour',
    description: 'Scheduled a tour for the villa with Jane Smith.',
    link: null,
    icon: 'calendar',
  },
  {
    time: '4 Day Ago',
    title: 'Offer Submitted',
    description: 'An offer has been submitted for a new house.',
    link: 'offer_doc.pdf',
    icon: 'document',
  },
];

export default function Timeline() {
  return (
    <Paper sx={{ p: 2, maxWidth: 511 }} className='grid-custom4'>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" fontWeight="bold">Activity Timeline</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Box>

      {/* Timeline Items */}
      {activityData.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          {/* Left column: Timeline line and icon */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mr: 2,
              height: '100%',
            }}
          >
            <Box
              sx={{
                bgcolor: '#e91e63',
                color: 'white',
                borderRadius: '50%',
                p: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
              }}
            >
              {iconMap[item.icon]}
            </Box>
            {index < activityData.length - 1 && (
              <Box sx={{ width: '2px', height: '100%', bgcolor: '#e0e0e0', mt: '8px' }} />
            )}
          </Box>

          {/* Right column: Content */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="text.secondary">{item.time}</Typography>
            <Typography variant="body1" fontWeight="bold">{item.title}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {item.description}
            </Typography>
            {item.link && (
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', cursor: 'pointer' }}>
                <AttachFileOutlinedIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                <Typography variant="body2">{item.link}</Typography>
              </Box>
            )}
          </Box>
        </Box>
      ))}
      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'primary.main' }}>
        <Typography variant="body2" fontWeight="bold">View All Activities</Typography>
        <ArrowRightIcon />
      </Box>
      </Box>
    </Paper>
  );
}
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function EarningsChart() {
  const chartData = {
    xAxis: { data: [1, 2, 3, 4, 5, 6, 7] }, // Example X-axis data
    series: [
      {
        data: [1.5, 1.5, 1.5, 2.5, 3.5, 4.5, 5.5], // Example series data
        area: true,
        showMark: false,
        color: '#ff9800', // Example orange color
      },
    ],
  };

  return (
    <Paper className ='grid-custom2' sx={{ p: 2, minWidth: 350 , }}>
      {/* Header with title and icon */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Project Status</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>

     <Box>
         {/* Main metrics */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            bgcolor: '#fff3e0', // Light orange background
            p: 1,
            borderRadius: '8px',
            mr: 2,
          }}
        >
          <AccountBalanceWalletOutlinedIcon sx={{ color: '#ff9800' }} />
        </Box>
        <Box>
          <Typography variant="h6" fontWeight="bold">$4,3742</Typography>
          <Typography variant="body2" color="text.secondary">Your Earnings</Typography>
        </Box>
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
          <ArrowDropUpIcon sx={{ color: 'success.main' }} />
          <Typography variant="body1" color="success.main" fontWeight="bold">
            +10.2%
          </Typography>
        </Box>
      </Box>

      {/* Line Chart */}
      <Box sx={{ width: '100%', mb: 2 }}>
        <LineChart
          xAxis={[{ scaleType: 'point', data: chartData.xAxis.data }]}
          series={[
            {
              data: chartData.series[0].data,
              area: true,
              showMark: false,
              color: chartData.series[0].color,
            },
          ]}
          height={150}
          margin={{ top: 10, right: 10, bottom: 20, left: 10 }}
          disableAxisListener
        />
      </Box>

      {/* Donates and Podcasts section */}
      <Box sx={{ borderTop: '1px solid #e0e0e0', pt: 2, mt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography>Donates</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 1 }}>$756.26</Typography>
            <Typography color="error.main">-139.34</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography>Podcasts</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 1 }}>$2,207.03</Typography>
            <Typography color="success.main">+576.24</Typography>
          </Box>
        </Box>
      </Box>
     </Box>
    </Paper>
  );
}
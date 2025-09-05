import * as React from 'react';
import Stack from '@mui/material/Stack';
import {
  Unstable_RadarDataProvider as RadarDataProvider,
  RadarGrid,
  RadarSeriesArea,
  RadarMetricLabels,
} from '@mui/x-charts/RadarChart';
import { ChartsSurface } from '@mui/x-charts/ChartsSurface';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';


export default function RadarChart() {
  return (
  <section className='grid-custom3 '>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Project Status</Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
  </Box>
  <Box>
    <RadarDataProvider height={300} series={series} radar={radar} margin={margin}>
    <Stack direction="column" alignItems="center" gap={1} sx={{ width: '100%' }}>
      <ChartsLegend />
      <ChartsSurface
        // Overriding default styles to hide the tick marks on the axes
        sx={{
          '& .MuiRadarAxis-root': {
            '& .MuiRadarAxis-line': {
              stroke: 'transparent',
            },
          },
          '& .MuiRadarGrid-root': {
              stroke: '#e0e0e0', // Light grey for the grid lines
          },
        }}
      >
        <RadarGrid divisions={4} /> {/* Set divisions to 0 to remove the circular grid lines */}
        <RadarSeriesArea fillOpacity={1} /> {/* Set fillOpacity to 1 for a solid fill */}
        <RadarMetricLabels />
      </ChartsSurface>
    </Stack>
  </RadarDataProvider>
  </Box>
  </section>
  );
}

// Data from https://ourworldindata.org/emissions-by-fuel
const series = [
  {
    id: 'sales',
    label: 'Sales',
    data: [6.65, 2.76, 5.15, 0.19, 0.07, 0.12],
    fillArea: true,
    color: '#E06C75', // A pinkish-red color
  },
  {
    id: 'visits',
    label: 'Visits',
    data: [5.52, 5.5, 3.19, 0.51, 0.15, 0.11],
    fillArea: true,
    color: '#4CB5BD', // A bluish-green color
  },
];

const radar = {
  metrics: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
};
const margin = { left: 50, right: 50 };
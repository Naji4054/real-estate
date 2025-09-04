import * as React from 'react';
import Stack from '@mui/material/Stack';
import {
  Unstable_RadarDataProvider as RadarDataProvider,
  RadarGrid,
  RadarSeriesMarks,
  RadarSeriesArea,
  RadarMetricLabels,
  RadarAxisHighlight,
} from '@mui/x-charts/RadarChart';
import { ChartsSurface } from '@mui/x-charts/ChartsSurface';
import { ChartsLegend } from '@mui/x-charts/ChartsLegend';

export default function RadarChart() {
  return (
    <RadarDataProvider height={300} series={series} radar={radar} margin={margin}>
      <Stack direction="column" alignItems="center" gap={1} sx={{ width: '100%' }}>
        <ChartsLegend />
        <ChartsSurface>
          <RadarGrid divisions={4} />
          <RadarMetricLabels />
          <RadarSeriesArea fillOpacity={0.8}/>
          {/* <RadarAxisHighlight /> */}
        </ChartsSurface>
      </Stack>
    </RadarDataProvider>
  );
}

// Data from https://ourworldindata.org/emissions-by-fuel
const series = [
  {
    id: 'sales',
    label: 'Sales',
    data: [6.65, 2.76, 5.15, 0.19, 0.07, 0.12],
    fillArea: true,
    color: '#E06C75',
  },
  {
    id: 'visits',
    label: 'Visits',
    data: [5.52, 5.5, 3.19, 0.51, 0.15, 0.11],
    fillArea: true,
    color: '#4CB5BD',
  },
];

const radar = {
  metrics: ['Jan','Feb','Mar','Apr', 'May','Jun'],
};
const margin = { left: 50, right: 50 };

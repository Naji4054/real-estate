import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  );
}

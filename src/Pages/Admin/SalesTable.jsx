import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const salesData = [
  {
    country: 'United states',
    flagUrl: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/us.svg',
    sales: '$8,567k',
    percentage: '25.8%',
    isPositive: true,
  },
  {
    country: 'Brazil',
    flagUrl: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/br.svg',
    sales: '$2,415k',
    percentage: '6.2%',
    isPositive: false,
  },
  {
    country: 'India',
    flagUrl: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/in.svg',
    sales: '$865k',
    percentage: '12.4%',
    isPositive: true,
  },
  {
    country: 'Australia',
    flagUrl: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/au.svg',
    sales: '$745k',
    percentage: '11.9%',
    isPositive: false,
  },
  {
    country: 'France',
    flagUrl: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/fr.svg',
    sales: '$45',
    percentage: '16.2%',
    isPositive: true,
  },
  {
    country: 'China',
    flagUrl: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cn.svg',
    sales: '$12k',
    percentage: '14.8%',
    isPositive: true,
  },
];

export default function SalesTable() {
  return (
    <Paper sx={{ p: 2,}} className ='grid-custom2'>
      <Box sx={{ mb: 2,  display:'flex', justifyContent:'space-between'}}>
        <Box>
            <Typography variant="h6">Sales by Countries</Typography>
            <Typography variant="body2" color="text.secondary">
            Monthly Sales Overview
            </Typography>
        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <TableContainer>
        <Table>
          <TableBody>
            {salesData.map((row) => (
              <TableRow key={row.country}>
                {/* Left column: Flag and text */}
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={row.country} src={row.flagUrl} sx={{ width: 40, height: 40, mr: 2 }} />
                    <Box>
                      <Typography fontWeight="bold">{row.sales}</Typography>
                      <Typography variant="body2" color="text.secondary">{row.country}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                
                {/* Right column: Percentage with icon */}
                <TableCell align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {row.isPositive ? (
                      <ArrowDropUpIcon color="success" />
                    ) : (
                      <ArrowDropDownIcon color="error" />
                    )}
                    <Typography
                      fontWeight="bold"
                      color={row.isPositive ? 'success.main' : 'error.main'}
                    >
                      {row.percentage}
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const transactionData = [
  {
    cardNumber: '*4230',
    cardSubtitle: 'Credit',
    cardImg: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg',
    date: '17 Mar 2022',
    status: 'Verified',
    statusBg: '#e8f5e9',
    statusColor: '#4caf50',
    trend: '+1,678',
    trendColor: '#4caf50'
  },
  {
    cardNumber: '*5578',
    cardSubtitle: 'Credit',
    cardImg: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
    date: '12 Feb 2022',
    status: 'Rejected',
    statusBg: '#ffebee',
    statusColor: '#f44336',
    trend: '-839',
    trendColor: '#f44336'
  },
  {
    cardNumber: '*4567',
    cardSubtitle: 'ATM',
    cardImg: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_from_2018.svg',
    date: '28 Feb 2022',
    status: 'Verified',
    statusBg: '#e8f5e9',
    statusColor: '#4caf50',
    trend: '+435',
    trendColor: '#4caf50'
  },
  {
    cardNumber: '*5699',
    cardSubtitle: 'Credit',
    cardImg: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg',
    date: '8 Jan 2022',
    status: 'Pending',
    statusBg: '#fffde7',
    statusColor: '#ffb300',
    trend: '+2,345',
    trendColor: '#4caf50'
  },
  {
    cardNumber: '*5699',
    cardSubtitle: 'Credit',
    cardImg: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg',
    date: '8 Jan 2022',
    status: 'Rejected',
    statusBg: '#ffebee',
    statusColor: '#f44336',
    trend: '-234',
    trendColor: '#f44336'
  },
];

export default function LastTransactionTable() {
  return (
    <Paper sx={{ p: 2 }} className ='grid-custom2'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Last Transaction</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <TableContainer>
        <Table aria-label="last transaction table">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="body2" sx={{ fontWeight: 'bold' }}>CARD</Typography></TableCell>
              <TableCell><Typography variant="body2" sx={{ fontWeight: 'bold' }}>DATE</Typography></TableCell>
              <TableCell><Typography variant="body2" sx={{ fontWeight: 'bold' }}>STATUS</Typography></TableCell>
              <TableCell align="right"><Typography variant="body2" sx={{ fontWeight: 'bold' }}>TREND</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((row, index) => (
              <TableRow key={index}>
                {/* CARD column */}
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar variant="rounded" src={row.cardImg} sx={{ width: 40, height: 25, mr: 2 }} />
                    <Box>
                      <Typography>{row.cardNumber}</Typography>
                      <Typography variant="body2" color="text.secondary">{row.cardSubtitle}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                
                {/* DATE column */}
                <TableCell>
                  <Box>
                    <Typography>{row.date}</Typography>
                    <Typography variant="body2" color="text.secondary">Sent</Typography>
                  </Box>
                </TableCell>

                {/* STATUS column */}
                <TableCell>
                  <Box sx={{
                    bgcolor: row.statusBg,
                    color: row.statusColor,
                    borderRadius: '4px',
                    p: '4px 8px',
                    display: 'inline-block',
                    fontWeight: 'bold'
                  }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{row.status}</Typography>
                  </Box>
                </TableCell>

                {/* TREND column */}
                <TableCell align="right">
                  <Typography fontWeight="bold" color={row.trendColor}>
                    {row.trend}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
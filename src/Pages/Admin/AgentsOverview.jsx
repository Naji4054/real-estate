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
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const agentsData = [
  {
    id: "agent-1",
    avatar: "https://lorem-faker.vercel.app/images/man-1.jpg",
    name: "Michael Chen",
    location: "New York, USA",
    phone: "+1 212-555-0101",
  },
  {
    id: "agent-2",
    avatar: "https://lorem-faker.vercel.app/images/woman-1.jpg",
    name: "Jessica Lopez",
    location: "London, UK",
    phone: "+44 20-7946-0111",
  },
  {
    id: "agent-3",
    avatar: "https://lorem-faker.vercel.app/images/man-2.jpg",
    name: "Alexandre Dubois",
    location: "Paris, France",
    phone: "+33 1-55-99-0100",
  },
  {
    id: "agent-4",
    avatar: "https://lorem-faker.vercel.app/images/woman-2.jpg",
    name: "Sophia Ali",
    location: "Dubai, UAE",
    phone: "+971 4-555-0105",
  },
  {
    id: "agent-5",
    avatar: "https://lorem-faker.vercel.app/images/man-3.jpg",
    name: "Liam O'Connor",
    location: "Sydney, Australia",
    phone: "+61 2-9111-0106",
  },
  {
    id: "agent-6",
    avatar: "https://lorem-faker.vercel.app/images/woman-3.jpg",
    name: "Emily Wang",
    location: "Toronto, Canada",
    phone: "+1 416-555-0107",
  },
];

export default function AgentsOverview() {
  return (
    <Paper sx={{ p: 2 }} className='grid-custom4'>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6">Agents Overview</Typography>
          <Typography variant="body2" color="text.secondary">
            View and manage all agents
          </Typography>
        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <TableContainer>
        <Table>
          <TableBody>
            {agentsData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={row.name} src={row.avatar} sx={{ width: 40, height: 40, mr: 2 }} />
                    <Box>
                      <Typography fontWeight="bold">{row.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{row.location}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                
                <TableCell align="right">
                  <Typography fontWeight="bold">
                    {row.phone}
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

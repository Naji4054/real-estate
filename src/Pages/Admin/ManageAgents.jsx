import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EyeIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { manageAgents } from '../../Utils/manageAgents';
import Divider from '@mui/material/Divider';
import SearchBar from '../../Components/SearchBar';
import debounce from 'lodash.debounce'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));





export default function ManageAgents() {
  const [rows, setRows] = React.useState(manageAgents);

  const handleSearch = debounce((value) => {
    const list  = manageAgents.filter(item => item.firstName.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setRows(list)
  },200)
  const handleSearchInput = (val) => {
    if(val){
      handleSearch(val)
    }
}

  return (
    <>
    <div>
      <SearchBar handleSearch={handleSearchInput}/>
    </div>
    
    <Divider/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: '10%'}}>ID</StyledTableCell>
            <StyledTableCell sx={{ width: '15%'}}>First Name</StyledTableCell>
            <StyledTableCell sx={{ width: '15%'}}>Last Name</StyledTableCell>
            <StyledTableCell sx={{ width: '10%'}}>Deals</StyledTableCell>
            <StyledTableCell sx={{ width: '20'}}>Location</StyledTableCell>
            <StyledTableCell sx={{ width: '15%'}}>phone</StyledTableCell>
            <StyledTableCell sx={{ width: '15%'}} >Actions</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell >{row.firstName}</StyledTableCell>
              <StyledTableCell >{row.lastName}</StyledTableCell>
              <StyledTableCell >{row.deals}</StyledTableCell>
              <StyledTableCell >{row.location}</StyledTableCell>
              <StyledTableCell >{row.phone}</StyledTableCell>
              <StyledTableCell sx={{ display: 'flex', gap: 2}}>
                    <div>
                        <button><EyeIcon className="size-6 text-grey w-[17px]" /></button>
                    </div>        
                    <div>
                        <button><PencilSquareIcon className="size-6 text-grey w-[17px]" /></button>
                    </div>        
                    <div>
                        <button><TrashIcon className="size-6 text-grey w-[17px]"  /></button>
                    </div> 
                {/* </div>        */}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    
  );
}

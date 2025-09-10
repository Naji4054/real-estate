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
import Divider from '@mui/material/Divider';
import SearchBar from '../../Components/SearchBar';
import { orderData } from '../../Utils/allorders';
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


export default function AllOrders() {
  const [rows, setRows] = React.useState(orderData);

  const handleSearch = debounce((val) => {
    const list = orderData.filter(item => item.location.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
    setRows(list)
  },200)

  const handleSearchInput = (values) => {
    if (values){
      handleSearch(values)
    } else {
      setRows(orderData)
    }
  }
  
  return (
    <>
    <div>
    <SearchBar customStyle={{ '& > .css-1aschtf': { margin: '0 !important' }}} handleSearch={handleSearchInput} />
    </div>
    
    <Divider/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: '15%'}}>ORDER-ID</StyledTableCell>
            <StyledTableCell sx={{ width: '15%'}}>DATE</StyledTableCell>
            <StyledTableCell sx={{ width: '20%'}}>PROPERTY</StyledTableCell>
            <StyledTableCell sx={{ width: '20%'}}>LOCATION</StyledTableCell>
            <StyledTableCell sx={{ width: '15%'}}>STATUS</StyledTableCell>
            <StyledTableCell sx={{ width: '10%'}}>ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell >{row.date}</StyledTableCell>
              <StyledTableCell >{row.property}</StyledTableCell>
              <StyledTableCell >{row.location}</StyledTableCell>
              <StyledTableCell >{row.status}</StyledTableCell>
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

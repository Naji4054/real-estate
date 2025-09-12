import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { propertyData } from '../../Utils/allproperty';
import { EyeIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import Divider from '@mui/material/Divider';
import SearchBar from '../../Components/SearchBar';
import debounce from 'lodash.debounce'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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





export default function AllProperty() {

  const [rows, setRows] = React.useState([]);
  const fetchData = async ()=> {
    await axios.get('http://localhost:3000/admin/property').then(res => setRows(res.data.data)).catch(err => console.log(err))
  }
  React.useEffect(() => {
    fetchData()
  },[])

  const handleSearch = debounce((value) => {
    const list = propertyData.filter(item=> item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || item.area.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    setRows(list)
  }, 200)

  const handleSearchInput = (val) => {

    if (val) {
      handleSearch(val)
    } else {
      setRows(propertyData)
    }

  }

  const navigator  = useNavigate()

  const handlePropertyView = (id) => {
    navigator(`/admin/all-property/view/${id}`)
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
            <StyledTableCell sx={{ width: '15%'}}>P-ID</StyledTableCell>
            <StyledTableCell sx={{ width: '20%'}}>PROPERTY</StyledTableCell>
            <StyledTableCell sx={{ width: '20%'}}>CATEGORY</StyledTableCell>
            <StyledTableCell sx={{ width: '15%'}}>AREA</StyledTableCell>
            <StyledTableCell sx={{ width: '15%'}}>PRICE</StyledTableCell>
            <StyledTableCell sx={{ width: '10%'}}>ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell >{row.title}</StyledTableCell>
              <StyledTableCell >{row.category}</StyledTableCell>
              <StyledTableCell >{row.area}</StyledTableCell>
              <StyledTableCell >{row.price}</StyledTableCell>
              <StyledTableCell sx={{ display: 'flex', gap: 2}}>
                    <div>
                        <button onClick={()=> handlePropertyView(row.id)} ><EyeIcon className="size-6 text-grey w-[17px]"  /></button>
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

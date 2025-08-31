import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from '../../ui/Drawer';

export default function AdminHeader() {

  const [openDrawer, setOpenDrawer] = React.useState(false) //drawer initially set to false  {false -> closed} 

  const handleClick = () => {
    setOpenDrawer(prev=> !prev) //A toggle function  if the drawer is closed, it opens; if it’s open, it closes.
  }  

  return (
   <>
    <Box sx={{ flexGrow: 1, marginBottom:'40px' }}>
      <AppBar position="static" sx={{ background: 'grey' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}        
            onClick={handleClick} // toggles drawer on clicking the menu button ...when menu button is clicked handle click is invoked and openDrawer is updated to true by setopendrawer
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <TemporaryDrawer open={openDrawer} toggleDrawer={handleClick}/> 
     {/* store the result ,(the updated value whwn  the menu button is clicked ie. openDrawer)  in prop called open ... and handleclick is passed to toggleDrawer prop */}
   </>
  );
}

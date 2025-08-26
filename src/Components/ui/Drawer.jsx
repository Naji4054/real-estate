import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ReviewsIcon from '@mui/icons-material/Reviews';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddHomeIcon from '@mui/icons-material/AddHome';

export default function TemporaryDrawer({ open, toggleDrawer }) {

//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (newOpen) => () => {
//     setOpen(newOpen);
//   };



const [openList, setOpenList] = React.useState(false)

const handleListClick = ()=> {

  setOpenList(prev=> !prev)
}

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={(event) => event.stopPropagation()}>

        <ListItemButton onClick={handleListClick} >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openList} timeout="auto" unmountOnExit>

          <List component="div" disablePadding>

              <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AutoGraphIcon sx={{ fontSize:'1rem' }}/>
                  </ListItemIcon>
                  <ListItemText primary="Analytics"  sx={{fontSize:'rem'}}/>
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <ReviewsIcon sx={{ fontSize:'1rem' }}/>
                  </ListItemIcon>
                  <ListItemText primary="Review" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <InventoryIcon sx={{ fontSize:'1rem' }}/>
                  </ListItemIcon>
                  <ListItemText primary="Orders" />
              </ListItemButton>

              <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GroupIcon sx={{ fontSize:'1rem' }}/>
                  </ListItemIcon>
                  <ListItemText primary="Customers" />
              </ListItemButton>

           </List>

        </Collapse>

        <ListItemButton onClick={handleListClick} >
          <ListItemIcon>
            < RealEstateAgentIcon/>
          </ListItemIcon>
          <ListItemText primary="Agents" />
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openList} timeout="auto" unmountOnExit>

          <List component="div" disablePadding>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <GroupsIcon sx={{ fontSize:'1rem' }} />
              </ListItemIcon>
              <ListItemText primary="All Agents" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddIcon sx={{ fontSize:'1rem' }}/>
              </ListItemIcon>
              <ListItemText primary="Add Agents" />
            </ListItemButton>

          </List>
        </Collapse>
        
        <ListItemButton onClick={handleListClick} >
          <ListItemIcon>
            < HomeWorkIcon/>
          </ListItemIcon>
          <ListItemText primary="Property" />
          {openList ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openList} timeout="auto" unmountOnExit>

          <List component="div" disablePadding>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ApartmentIcon  sx={{ fontSize:'1rem' }} />
              </ListItemIcon>
              <ListItemText primary="Current Properties" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddHomeIcon sx={{ fontSize:'1rem' }}/>
              </ListItemIcon>
              <ListItemText primary=" Add New Property" />
            </ListItemButton>

          </List>

        </Collapse>

      <Divider />

            <ListItemButton onClick={handleListClick} >
              <ListItemIcon>
                < PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Users" />
              {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

        <Collapse in={openList} timeout="auto" unmountOnExit>

          <List component="div" disablePadding>

            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ListIcon sx={{ fontSize:'1rem' }} />
              </ListItemIcon>
              <ListItemText primary="List" />
            </ListItemButton>

            <ListItemButton sx={{ pl: 4}}>
              <ListItemIcon>
                <AddIcon sx={{ fontSize:'1rem' }}/>
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItemButton>

          </List>

        </Collapse>

    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

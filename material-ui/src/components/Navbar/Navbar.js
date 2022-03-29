import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbarItem';
import { navbarStyles } from './styles';

const Navbar = () => {
  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map((text, index) => (
          <ListItem button key={text.id}>
            <ListItemIcon sx={navbarStyles.icons}>{text.icon}</ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={text.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Navbar;

import User from '../user/User'
import styles from './Navigation.module.scss'

import { Drawer, List, IconButton, Menu, ListItem, MenuItem, ListItemIcon, Badge, ListItemText } from '@mui/material'
import { HomeOutlined } from '@mui/icons-material'
import { BedOutlined } from '@mui/icons-material'
import { MoreVert } from '@mui/icons-material'
import { useState } from 'react'

export default function Navigation() {
  return (
    <div>
      <Drawer variant="permanent" anchor="left">
        <div className={styles['user-container']}>
          <User avatar="/images/avatar.png" name="John Doe" size={55} headingSize="h6" />
          <LongMenu/>
        </div>
        <List>
          <ListItem className={styles['list-item']}>
            <ListItemIcon>
              <HomeOutlined/>
            </ListItemIcon>
            <ListItemText>Apartment</ListItemText>
            <Badge>5</Badge>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BedOutlined/>
            </ListItemIcon>
            <ListItemText>Bedroom</ListItemText>
            <Badge>5</Badge>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

function LongMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <MenuItem>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

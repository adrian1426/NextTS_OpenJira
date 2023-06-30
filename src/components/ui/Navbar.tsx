import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { SIDEBAR_OPEN, UIContext } from '@/context/ui';

const Navbar = () => {
  const { dispatch } = useContext(UIContext);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton onClick={() => dispatch({ type: SIDEBAR_OPEN, payload: null })}>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
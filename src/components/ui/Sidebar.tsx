import { useContext } from 'react';
import { Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { SIDEBAR_CLOSE, UIContext } from '@/context/ui';

const menuItmes: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];

const Sidebar = () => {
  const { state, dispatch } = useContext(UIContext);

  return (
    <Drawer
      anchor='left'
      open={state.sideMenuOpen}
      onClose={() => dispatch({ type: SIDEBAR_CLOSE, payload: null })}
    >
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menú</Typography>
        </Box>

        <List>
          {
            menuItmes.map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

        <Divider />

        <List>
          {
            menuItmes.map((text, index) => (
              <ListItem key={text}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
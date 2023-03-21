import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { redirect } from 'react-router-dom';
import pedroavatar from '../../assets/img/pedroavatar.jpg';

const drawerWidth = 240;
const navItems = [{ content: 'Proyectos', ref: "/" }, { content: 'Experiencia', ref: "/experiencia" }, {
  content: <Avatar
    alt="P"
    src={pedroavatar}
    sx={{ width: 56, height: 56 }}
  />
}];

const DrawerAppBar=({ window })=> {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navegar =(url)=>{
    console.log("asd")
    redirect(url)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Pedro
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={"listaMenu" + i} disablePadding >
            <ListItemButton sx={{ textAlign: 'center' }} href={item.ref}>
              <ListItemText primary={item.content} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (

      <AppBar component="nav">
        <Toolbar>
                

          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            pzagmel
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item,i) => (
              <Button key={"menubutton"+i} sx={{ color: '#fff' } } onClick={()=>navegar(item.ref)}>
           
                {item.content}
              
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
  );
}


export default DrawerAppBar;
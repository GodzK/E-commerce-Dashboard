import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PieChartIcon from '@mui/icons-material/PieChart';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
     <LocalMallIcon/>PKShop
      </Typography>
      <Divider />
    <div className='Sidelist'>  
    <div className='row'><div><HomeIcon/></div><Link to="/" style={{ color: '#000', textDecoration:"none", fontSize:"0.6rem" }}>Overview</Link></div>
    <div className='row'><div><DashboardIcon/></div><Link to="/SalesReport" style={{ color: '#000', textDecoration:"none", fontSize:"0.6rem" }}>Sales Report</Link></div>
    <div className='row'><div><AnalyticsIcon/></div><Link to="/Inventory" style={{ color: '#000', textDecoration:"none", fontSize:"0.6rem" }}>Inventory</Link></div>
    <div className='row'><div><PieChartIcon/></div><Link to="/Customer" style={{ color: '#000', textDecoration:"none", fontSize:"0.6rem" }}>Customer</Link></div> 
    </div>
  
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             <Link to ="/" style={{color:"white" , textDecoration:"none"}}><LocalMallIcon/>PKShop</Link> 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
           <Button sx={{ color: '#fff' }}><div><HomeIcon/></div><Link to="/" style={{ color: '#fff', textDecoration:"none", fontSize:"0.6rem" }}>Overview</Link></Button> 
           <Button sx={{ color: '#fff' }}><div><DashboardIcon/></div><Link to="/SalesReport" style={{ color: '#fff', textDecoration:"none", fontSize:"0.6rem" }}>Sales Report</Link></Button> 
           <Button sx={{ color: '#fff' }}><div><AnalyticsIcon/></div><Link to="/Inventory" style={{ color: '#fff', textDecoration:"none", fontSize:"0.6rem" }}>Inventory</Link></Button> 
           <Button sx={{ color: '#fff' }}><div><PieChartIcon/></div><Link to="/Customer" style={{ color: '#fff', textDecoration:"none", fontSize:"0.6rem" }}>Customer</Link></Button> 
        
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, 
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

Nav.propTypes = {
  window: PropTypes.func,
};

export default Nav;

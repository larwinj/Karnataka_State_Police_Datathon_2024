import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Analytics from './Analytics';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import { Button, Link } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import AssuredWorkloadSharpIcon from '@mui/icons-material/AssuredWorkloadSharp';
import WorkAllotment from './WorkAllotment';
// import Station from '../Station/Station';
import SStation from '../Station/SStation';

import Dashboard from '../../StationPageK/views/dashboard/Dashboard';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#FB2576"),
  backgroundColor: "#FB2576",
  '&:hover': {
    backgroundColor: "pink",
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState(null);
  const [showWorkAllotment, setShowWorkAllotment] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('Analytics');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = React.useState(false);


  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };
  const handleSubtitlesClick = () => {
    setActiveButton('Subtitle');
    setShowWorkAllotment(true);
  };
  return (
    // <Box sx={{ display: 'flex', backgroundColor: 'azure' }}>
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#073980" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
             
            <Typography variant="h6" noWrap component="div" style={{ color: "white", cursor: "pointer" }}
              onClick={() => window.location.reload()}>
              Karnataka Police Performance and Resource Management
            </Typography>
          </div>
          <div style={{display:'flex',alignItems:'center'}}>
         <Button 
         variant="contained"
         sx={{color:"white",backgroundColor:"blue",mr:1}}
         onClick={() => setCurrentPage('Station')}>Station</Button>
         <Button   
         variant="contained"
         sx={{color:"white",backgroundColor:"blue",mr:1}}onClick={() => setCurrentPage('WorkAllotment')}>WorkAllotment</Button>
         <Button 
         variant="contained"
         sx={{color:"white",backgroundColor:"blue",mr:1}} onClick={() => setCurrentPage('Analytics')}>Home</Button>
         </div>
        </Toolbar>
      </AppBar>
      <br/>
      <br/>
      <br/>
      
      
      {/* <section> */}
        {/* <Box component="main" sx={{ flexGrow: 1, pt: 3 }}> */}
        {currentPage === 'Analytics' && <Analytics />}
        {/* {currentPage === 'Analytics' && <Dashboard />} */}
          {currentPage === 'WorkAllotment' && <WorkAllotment />}
          {/* {currentPage === 'Station' && <SStation />} */}
          {currentPage === 'Station' && <Dashboard />}

        {/* </Box> */}
      {/* </section> */}


    </>
  );
}
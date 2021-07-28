import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link
  } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// import Sidebar from "./Sidebar"



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(2)
  },
}));
export const MainListItems = ()=>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  

  return(
  <div>
      <Link to="/dashboard">
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon color="secondary" style={{color:"#6495ED"}}/>
      </ListItemIcon>
      <ListItemText secondary="Dashboard" style={{color:"#6495ED"}} />
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon color="secondary" style={{color:"#6495ED"}} />
      </ListItemIcon>
      <ListItemText secondary="Orders" style={{color:"#6495ED"}}/>
    </ListItem>
    <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon style={{color:"#6495ED"}} />
        </ListItemIcon>
        <ListItemText primary="Add Product" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/addproduct">
    <ListItem button>
      <ListItemIcon>
        {/* <PeopleIcon color="secondary" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/> */}
      </ListItemIcon>
      <ListItemText secondary="Local Product" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
    </ListItem>
    </Link>
    <Link to="/addproduct">
    <ListItem button className={classes.nested}>
      <ListItemIcon>
        {/* <PeopleIcon color="secondary" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/> */}
      </ListItemIcon>
      <ListItemText secondary="Designed Product" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
    </ListItem>
    </Link>
        </List>
      </Collapse>
    <Link to="/myproducts">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon color="secondary" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
      </ListItemIcon>
      <ListItemText secondary="My Products" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
    </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon color="secondary" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
      </ListItemIcon>
      <ListItemText secondary="Reports" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon color="secondary" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
      </ListItemIcon>
      <ListItemText secondary="Integrations" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
    </ListItem>
  </div>
  )};

export const secondaryListItems = (
  <div>
    {/* <ListSubheader style={{color:"black",flex:1}} >Saved reports</ListSubheader> */}
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="secondary" style={{color:"#6495ED"}}/>
      </ListItemIcon>
      <ListItemText secondary="Current month" style={{color:"#6495ED"}}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="secondary" style={{color:"#6495ED"}}/>
      </ListItemIcon>
      <ListItemText secondary="Last quarter" style={{color:"#6495ED"}}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon color="secondary" style={{color:"#6495ED"}}/>
      </ListItemIcon>
      <ListItemText secondary="Year-end sale" style={{color:"#6495ED"}}/>
    </ListItem>
  </div>
);
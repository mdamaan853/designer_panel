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
import Sidebar from "./Sidebar"

export const mainListItems = (
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
      <ListItemText secondary="Orders" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
    </ListItem>
    <Link to="/addproduct">
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon color="secondary" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
      </ListItemIcon>
      <ListItemText secondary="Add Product" style={{color:"#6495ED"}}style={{color:"#6495ED"}}/>
    </ListItem>
    </Link>
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
);

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
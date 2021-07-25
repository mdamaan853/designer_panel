import React from 'react'
import {AppBar, Tabs, Tab,MenuItem,MenuList,Menu,Button} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div>
      <AppBar title="My App">
        <Tabs>
          <Tab label="Designer" />
          <Tab label="Home" />
          <Tab
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        label="Design"
        onClick={handleClick}
      />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="My Design" />
        </StyledMenuItem>
          <Link to="/AddProduct">
        <StyledMenuItem>
          <ListItemText primary="Add New Design"/>
        </StyledMenuItem>
          </Link>
      </StyledMenu>
          <Tab label="Orders" />
        </Tabs>
      </AppBar>
        </div>
    )
}

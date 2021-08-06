import React from 'react';
import {Button,Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import { SettingsInputAntennaTwoTone } from '@material-ui/icons';

const useStyles = makeStyles({
    button_blue:{
    border:"2px solid #0d6efd",
    color:"#0d6efd",
    fontWeight:"bold"
    },
    button_yellow:{
    border:"2px solid #ffc107",
    color:"#ffc107",
    fontWeight:"bold"
    },
    button_green:{
    border:"2px solid #198754",
    color:"#198754",
    fontWeight:"bold"
    },
    button_red:{
    border:"2px solid #dc3545",
    color:"#dc3545",
    fontWeight:"bold"
    },
    button:{
        fontWeight:"bold"
    }
  });

export default function OrderTrackModel({data}) {

    const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [backgroundColor,setBackgroundColor]=React.useState({
    orderPlaced:false,
    orderTransit:false,
    orderDelivered:false,
    orderCancel:false
  })

  const handleChange=()=>{

  }

  const handleClickOpen = () => {
      console.log("hello")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
      <div>
      <Button color="primary" variant="outlined" onClick={handleClickOpen}>Track</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"  >Change shipping status</DialogTitle>
        <DialogContent>
            <Typography color="textSecondary" style={{margin:"14px 4px"}}>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</Typography>
            <Grid container spacing={2} style={{display:"flex",justifyContent:"space-between"}}>
            <Grid item>
                <Button id="placed" className={backgroundColor.orderPlaced ? classes.button_blue : classes.button} onClick={()=>{setBackgroundColor({orderPlaced:true})}}>Order Placed</Button>
            </Grid>
            <Grid item>
                <Button id="transit" className={backgroundColor.orderTransit ? classes.button_yellow : classes.button} onClick={()=>{setBackgroundColor({orderTransit:true})}}>Order Transit</Button>
            </Grid>
            <Grid item>
                <Button id="deliver" className={backgroundColor.orderDelivered ? classes.button_green : classes.button} onClick={()=>{setBackgroundColor({orderDelivered:true})}}>Order Delivered</Button>
            </Grid>
            <Grid item>
                <Button id="cancle" className={backgroundColor.orderCancel ? classes.button_red : classes.button} onClick={()=>{setBackgroundColor({orderCancel:true})}}>Cancel Order</Button>
            </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

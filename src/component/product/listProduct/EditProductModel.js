import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import ListProduct from './ListProduct';

export default function EditProductModel({data}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      console.log("hello")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
      <div>
      <EditIcon color="secondary" onClick={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Product</DialogTitle>
        <DialogContent>
          <label>Title</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            variant="outlined"
            // label="Email Address"
            type="name"
            value={data.title}
            fullWidth
          />
          <label>Description</label>
          <TextField
            autoFocus
            margin="dense"
            id="desc"
            // label="Email Address"
            type="text"
            variant="outlined"
            value={data.description}
            multiline
            fullWidth
          />
          <label>Design No</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            // label="Email Address"
            type="email"
            variant="outlined"
            value={data.Design}
            fullWidth
          />
          <label>Sizes</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            variant="outlined"
            // label="Email Address"
            type="email"
            value={data.Sizes}
            fullWidth
          />
          <label>Price</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            variant="outlined"
            // label="Email Address"
            type="email"
            value={data.price}
            fullWidth
          />
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

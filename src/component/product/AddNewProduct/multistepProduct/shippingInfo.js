import React from "react";
import {
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function ShippingInfo({navigation}) {
    const classes=useStyles()
    return (
        <div>
            <h1 style={{marginBottom:"40px",marginLeft:"30px",marginRight:"30px",fontFamily: "roboto", textAlign: "start" }}>
        Prices And Stocks
      <hr />
      </h1>
      <Grid container spacing={3} style={{padding:"0px 30px"}} >
        <Grid item xs={6} style={{ padding: "0px 20px" }}>
          <label
            style={{
              fontFamily: "roboto",
              fontSize: "16px",
              float: "left",
              margin: "6px 0px",
            }}
          >
            Regular Price
          </label>
          <TextField
            id="outlined-basic"
            // label="Product Name"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} style={{ padding: "0px 20px" }}>
          <label
            style={{
              fontFamily: "roboto",
              fontSize: "16px",
              float: "left",
              margin: "6px 0px",
            }}
          >
         Selling Price
          </label>
          <TextField
            id="outlined-basic"
            //   label="Cloth Type"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} style={{ padding: "0px 20px" }}>
          <label
            style={{
              fontFamily: "roboto",
              fontSize: "16px",
              float: "left",
              margin: "6px 0px",
            }}
          >
            Stocks
          </label>
          <TextField
            id="outlined-basic"
            //   label="Occasion"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} style={{ padding: "0px 20px" }}>
          <label
            style={{
              fontFamily: "roboto",
              fontSize: "16px",
              float: "left",
              margin: "6px 0px",
            }}
          >
            SKU
          </label>
          <TextField
            id="outlined-basic"
            //   label="Cloth Type"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} style={{ padding: "0px 20px" }}>
          <label
            style={{
              fontFamily: "roboto",
              fontSize: "16px",
              float: "left",
              margin: "6px 0px",
            }}
          >
            Size
          </label>
          <TextField
            id="outlined-basic"
            //   label="Cloth Type"
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>
      <div style={{ position: "fixed", bottom: "10px", right: "20px" }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigation.previous()}
          style={{ margin: "0px 4px" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "0px 4px" }}
        >
          Submit
        </Button>
      </div>
        </div>
    )
}

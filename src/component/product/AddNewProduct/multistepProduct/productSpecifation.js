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

export default function Product_spec({ navigation }) {
  const classes = useStyles();
  return (
    <div>
      <h1 style={{ fontFamily: "roboto", textAlign: "start", margin:"0px 30px" }}>
        Product Specifaction
      </h1>
      <hr />
      <Grid container spacing={1} style={{ padding: "0px 20px" }}>
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
          <FormControl
            style={{ width: "100%" }}
            variant="outlined"
            size="small"
            className={classes.formControl}
          >
            {/* <InputLabel htmlFor="age-native-simple">Size</InputLabel> */}
            <Select
              fullWidth
              native
              //   label="hello"
              //   value={state.age}
              //   onChange={handleChange}
              inputProps={{
                name: "age",
                id: "filled-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Small</option>
              <option value={20}>Medium</option>
              <option value={30}>Large</option>
              <option value={30}>Exta Large</option>
            </Select>
          </FormControl>
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
            Colour
          </label>
          <FormControl
            style={{ width: "100%" }}
            variant="outlined"
            size="small"
            className={classes.formControl}
          >
            {/* <InputLabel htmlFor="age-native-simple">Color</InputLabel> */}
            <Select
              native
              //   value={state.age}
              //   onChange={handleChange}
              inputProps={{
                name: "Color",
                id: "filled-age-native-simple",
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Small</option>
              <option value={20}>Medium</option>
              <option value={30}>Large</option>
              <option value={30}>Exta Large</option>
            </Select>
          </FormControl>
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
            Design Name
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
            Cloth Type
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
            Occasion
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
            Cloth Type
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
            Cloth Type
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
            Cloth Type
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
          onClick={() => navigation.next()}
          style={{ margin: "0px 4px" }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

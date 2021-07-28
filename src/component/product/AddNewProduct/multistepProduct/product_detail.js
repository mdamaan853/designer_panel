import React from "react";
import { Button, TextField, TextareaAutosize } from "@material-ui/core";

export default function Product_detail({ navigation }) {
  return (
    <div>
      <h1 style={{ fontFamily: "roboto",textAlign:"start",margin:"0px 30px"}}>Product detail</h1>
      <hr />
      <div style={{margin:"0px 30px"}}>
        <form >
          <div style={{}}>
          <label style={{fontFamily:"roboto",fontSize:"18px" ,float: "left",
    margin: "6px 0px"}}>
              Product Name <span style={{color:"red"}} >*</span>
              </label>
            <TextField
              id="outlined-basic"
              // type="file"
              // label="Product Name"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div style={{margin:"15px 0px"}}>
          <label style={{fontFamily:"roboto",fontSize:"18px" ,float: "left",
    margin: "6px 0px"}}>
              Product Description <span style={{color:"red"}} >*</span>
              </label>
            <TextField
              id="filled-basic"
              variant="outlined"
              size="small"
              multiline
              rows={10}
              fullWidth
            />
          </div>
        </form>
      </div>
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

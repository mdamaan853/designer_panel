import React from 'react'
import { Input,Button,TextField } from '@material-ui/core';

export default function UploadblukProduct() {
    const onChange=(e)=>{
console.log(e.target)
    }
    return (
        <div >
            <h1 style={{fontFamily:"roboto"}}>Upload bulk product</h1>

            {/* <TextField
              id="outlined-basic"
              type="file"
              // label="Product Name"
              variant="outlined"
              size="small"
              fullWidth
            /> */}
            <input
          color="primary"
          accept="image/*"
          type="file"
        //   onChange={onChange}
          id="icon-button-file"
          style={{display:"none"}}
        />
        <label htmlFor="icon-button-file">
            <div style={{margin:"80px 0px"}}>
                <div>
          <Button
            variant="contained"
            component="span"
            // className={classes.button}
            size="large"
            color="primary"
            onChange={onChange}
            
          >
              Upload
             {/* <ImageIcon className={classes.extendedIcon} />  */}
          </Button>
          </div>
          <div style={{margin:"10px 0px",padding:"10px 0px",wordWrap:"break-word"}}>
          <small >For Uploading Multiple Products you need to upload Excel File </small>
          </div>
          </div>
        </label>
        </div>
    )
}

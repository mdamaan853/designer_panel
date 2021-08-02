import React from 'react'
import { Input,Button,TextField } from '@material-ui/core';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

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
          <div style={{margin:"15px 0px"}}>
                  <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button download-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>
                    </div>
                    <table id="table-to-xls" style={{display:"none"}}>
                    <tr>
                        <th>image</th>
                        <th>name</th>
                        <th>desc</th>
                        <th>length</th>
                        <th>size</th>
                        <th>color</th>
                        <th>designId</th>
                        <th>regular price</th>
                        <th>selling price</th>
                        <th>cloth type</th>
                        <th>stoks</th>
                    </tr>
                </table>
          </div>
          </div>
        </label>
        </div>
    )
}

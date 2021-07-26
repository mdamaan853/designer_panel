import React from 'react'
import { Button } from "@material-ui/core";

export default function Product_detail({navigation}) {
    return (
        <div>
            <h1>Product detail</h1>
            <div style={{display:"flex",flexDirection:"row-reverse"}}>
      {/* <Button variant="contained" color="secondary" onClick={()=>navigation.prev()} >back</Button> */}
      <Button variant="contained" color="primary" onClick={()=>navigation.next()} >Continue</Button>
    </div>
        </div>
    )
}

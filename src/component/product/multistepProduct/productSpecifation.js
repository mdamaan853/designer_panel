import React from 'react'
import { Button } from "@material-ui/core";
export default function Product_spec({navigation}) {
    return (
        <div>
            <h1>Product Specifaction</h1>
            <Button variant="contained" color="primary" onClick={()=>navigation.next()} >Continue</Button>
        </div>
    )
}

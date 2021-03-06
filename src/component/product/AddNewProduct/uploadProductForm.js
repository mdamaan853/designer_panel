import React from "react";
import { useStep } from "react-hooks-helper";
import ImageUpload from "./multistepProduct/fileUpload" 
import { Button,TextField,TextareaAutosize } from "@material-ui/core";
import Product_detail from "./multistepProduct/product_detail" 
import Product_spec from "./multistepProduct/productSpecifation" 
import ShippingInfo from "./multistepProduct/shippingInfo";
export default function UploadForm(){
    const steps = [
        { id: "image_upload" },
        { id: "product_detail" },
        { id: "product_spec" },
        { id: "shipping_info" },
        // { id: "submit" },
      ];

      const { step, navigation } = useStep({
        steps,
        initialStep: 0,
      });

      const props = { navigation };

      switch (step.id) {
        case "image_upload":
          return <ImageUpload {...props} />
        case "product_detail":
          return <Product_detail {...props} />;
        case "product_spec":
          return <Product_spec {...props} />;
        case "shipping_info":
          return <ShippingInfo {...props} />;
        // case "submit":
        //   return <Submit {...props} />;
      }
    return (
            <div> 
              <h1>upload</h1>
            <div style={{position:"fixed",bottom:"0px"}}>
            <Button variant="contained" color="primary" onClick={()=>navigation.next()} >Continue</Button>
            </div>
            </div>
    )
}
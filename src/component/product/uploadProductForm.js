import React from "react";
import { useStep } from "react-hooks-helper";
import ImageUpload from "./multistepProduct/fileUpload" 
import Product_detail from "./multistepProduct/product_detail" 
import Product_spec from "./multistepProduct/productSpecifation" 
export default function UploadForm(){
    const steps = [
        { id: "image_upload" },
        { id: "product_detail" },
        { id: "product_spec" },
        // { id: "preview" },
        // { id: "submit" },
      ];

      const { step, navigation } = useStep({
        steps,
        initialStep: 0,
      });

      const props = { navigation };

      switch (step.id) {
        case "image_upload":
          return <ImageUpload {...props} />;
        case "product_detail":
          return <Product_detail {...props} />;
        case "product_spec":
          return <Product_spec {...props} />;
        // case "preview":
        //   return <CampaignPreview {...props} />;
        // case "submit":
        //   return <Submit {...props} />;
      }
    return (
            <div> 
            </div>
    )
}
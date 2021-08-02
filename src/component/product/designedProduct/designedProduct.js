import React from 'react'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

export default function DesignedProduct() {
    const [data,setData]=React.useState({
            email:""
    })
   const handleSubmit=()=>{

   }
   const handleChange=(e)=>{
       var name=e.target.name;
       var value=e.target.value;
       console.log(name+" : "+value)
    //    setData({...[name]:value})
    //    console.log(e.target.value)
   }
    return (
        <div>
            <h1>Designed Product</h1>
            {/* <ValidatorForm
                useRef="form"
                onSubmit={handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={data.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <Button type="submit">Submit</Button>
            </ValidatorForm> */}
        </div>
    )
}

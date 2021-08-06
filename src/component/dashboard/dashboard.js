import React from 'react'
import{Typography,Card,Grid} from '@material-ui/core';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import OrderChart from "./OrdersChart"
import CustomerChart from "./customerChart"
import SalesChart from "./customerChart"
import SalesByGenderChart from "./salesOverviewChart"
import productLogo from "../../images/products.png"
import orderLogo from "../../images/order.png"
import userLogo from "../../images/users.jpg"

export default function Dashboard() {
    
    return (
        <div> 
             <Grid container spacing={3} style={{}}>
             <Grid item xs={12} md={4} sm={6} style={{}}>
             <Card boxShadow={3}>
             <Typography variant='h5'>Products</Typography>
             <div style={{display:"flex",justifyContent:"space-between"}}>
             <Typography variant='h1' style={{margin:"10px",verticalAlign:"center"}}>23</Typography>
               <img src={productLogo} style={{height:"150px"}}/>
               </div>
             </Card>
             </Grid>
             <Grid item xs={12} md={4} sm={6} style={{}}>
             <Card boxShadow={3}>
             <Typography variant='h5'>orders</Typography>
             <div style={{display:"flex",justifyContent:"space-between"}}>
             <Typography variant='h1' style={{margin:"10px",verticalAlign:"center"}}>07</Typography>
               <img src={orderLogo} style={{height:"150px"}}/>
               </div>
             </Card>
             </Grid>
             <Grid item xs={12} md={4} sm={6} style={{}}>
             <Card boxShadow={3}>
             <Typography variant='h5'>Active users</Typography>
             <div style={{display:"flex",justifyContent:"space-between"}}>
             <Typography variant='h1' style={{margin:"10px",verticalAlign:"center"}}>20</Typography>
               <img src={userLogo} style={{height:"150px"}}/>
               </div>
             </Card>
             </Grid>
             <Grid item xs={12} md={8} sm={6} style={{}}>
             <Card boxShadow={3}>
             <Typography variant='h5'>Sales</Typography>
             <OrderChart/>
             </Card>     
             </Grid>
             <Grid item xs={12} md={4} sm={6} style={{}}>
             <Card boxShadow={3}>
             <SalesByGenderChart/>
             </Card>     
             </Grid>
             </Grid>
        </div>
    )
}

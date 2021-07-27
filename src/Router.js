import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "./component/Login"
import Sidebar from "./component/sidebar/Sidebar"
import AddDesign from './component/product/AddNewProduct/AddDesign';
import Dashboard from './component/dashboard/dashboard';
import ListProduct from './component/product/listProduct/ListProduct';

export default function Routers() {
    return (
        <div>
         <Router>
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route> 
          <Route exact path="/addproduct">
          <Sidebar Component={<AddDesign />} name="Add Product"/>
          </Route>
          <Route exact path="/dashboard">
          <Sidebar Component={<Dashboard/>} name="Dashboard"/>
          </Route>
          <Route exact path="/myproducts">
          <Sidebar Component={<ListProduct/>} name="My Products"/>
          </Route>
        </Switch>
    </Router>
        </div>
    )
}

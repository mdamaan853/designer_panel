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
import DesignedProduct from './component/product/designedProduct/designedProduct';

export default function Routers() {
    return (
        <div>
         <Router>
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route> 
          <Route exact path="/addproduct">
          <Sidebar Component={<AddDesign />} name="Add Local Product"/>
          </Route>
          <Route exact path="/designedproduct">
          <Sidebar Component={<DesignedProduct />} name="Add Designed Product"/>
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

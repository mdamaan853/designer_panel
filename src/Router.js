import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "./component/Login"
import Navbar from "./component/Navbar"
import Sidebar from "./component/Sidebar"
import AddDesign from './component/product/AddDesign';
import Dashboard from './component/dashboard/dashboard';

export default function Routers() {
    return (
        <div>
         <Router>
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route> 
          <Route exact path="/addproduct">
          <Sidebar Component={<AddDesign />}/>
          </Route>
          <Route exact path="/dashboard">
          <Sidebar Component={<Dashboard/>}/>
          </Route>
        </Switch>
    </Router>
        </div>
    )
}

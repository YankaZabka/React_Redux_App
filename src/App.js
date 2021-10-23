import React from "react";
import NavBar from "./Components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Photos from "./Components/Photos";
import classes from './App.module.css'

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/photos" component={Photos}/>
            </Switch>
        </Router>
    );
}

export default App;

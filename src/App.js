import React from "react";
import NavBar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Photos from "./pages/Photos";
import classes from './App.module.css'

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/users" component={Users}/>
                <Route path="/photos" component={Photos}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default App;

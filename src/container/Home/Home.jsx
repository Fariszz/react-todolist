import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import axios from 'axios';

// Pages
import toDoApp from '../pages/toDoApp/toDoApp';

// Style
import './Home.css';

class Home extends Component{
    state = {
        showComponent: true
    }

    render(){
        return(
            <Router>
                <Fragment>
                    <div className="topnav">
                        <Link to="/">Home</Link>
                        <Link to="/app">ToDoApp</Link>
                    </div>
                    <Route path="/app" component={toDoApp}/>
                </Fragment>
            </Router>
            
        )
    }
}

export default Home;
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/Home.css';
import Header from './Header';
import Page404 from "./Page404";
import Index from "./IndexPage";
import Product from "./Product";
import News from "./News";
import Login from "./Login";
function Home() {

    return(
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/Product' component={Product}/>
                    <Route exact path='/News' component={News}/>

                    <Route exact path='/Login' component={Login}/>
                    <Route  component={Page404} />
                </Switch>
            </Router>
        </div>
    );

}
export default Home;
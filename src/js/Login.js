import React from 'react';
import '../css/index.css';
import * as serviceWorker from '../serviceWorker';
import ReactDOM from "react-dom";

function Login() {
    ReactDOM.render(
        <React.StrictMode>Login
        </React.StrictMode>,
        document.getElementById('title')
    );
    return(
        <div>
            <h1 className="text-primary">Login??</h1>
        </div>
    );

}
export default Login;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

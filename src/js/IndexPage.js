import React from 'react';
import '../css/IndexPage.css';
import ReactDOM from "react-dom";
function Index() {
    ReactDOM.render(
        <React.StrictMode>Home Page
        </React.StrictMode>,
        document.getElementById('title')
    );
    return(
        <div >
            <h1>I am Index Page! :P</h1>
        </div>
    );

}
export default Index;
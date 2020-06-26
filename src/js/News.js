import React from 'react';
import '../css/News.css';
import ReactDOM from "react-dom";
function News() {
    ReactDOM.render(
        <React.StrictMode>News
        </React.StrictMode>,
        document.getElementById('title')
    );
    return(
        <div >
            <h1>I am News Page! :P</h1>
        </div>
    );

}
export default News;
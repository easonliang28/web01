import React from 'react';
import '../css/Home.css';
import ReactDOM from "react-dom";
function Page404() {

    ReactDOM.render(
        <React.StrictMode>404 Not Found</React.StrictMode>,
        document.getElementById('title')
    );
    return(
        <div>
            <h1>404 Not Found</h1>
        </div>
    );
}
export default Page404;
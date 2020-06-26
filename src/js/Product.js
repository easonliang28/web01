import React from 'react';
import '../css/Product.css';
import ReactDOM from "react-dom";
function Product() {
    ReactDOM.render(
        <React.StrictMode>Product
        </React.StrictMode>,
        document.getElementById('title')
    );
    return(
        <div>
            <h1>I am Page2~~~ :)</h1>
        </div>
    );

}
export default Product;
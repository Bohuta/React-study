import React, { Component } from 'react';
import {Link} from "react-router-dom";
const ProductItem = ({ image, title, text, id }) => {

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
            <div className="card">
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Link to={'/product/'+id} className="btn btn-primary">Go somewhere</Link>
                </div>
            </div> 
        </div>
        );
}

export default ProductItem;
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
const {id, name, img, describe} = service;
    return (
        <div className="service pb-3">
         <img src={img} alt=""/>
         <h3>{name}</h3>
         <p className="px-3">{describe}</p>
        <Link to={`/booking/${id}`}> <button className="btn btn-warning">Book {name.toLowerCase()}</button></Link>
        
        </div>
    );
};

export default Service;
import React from 'react';
import { Link } from 'react-router-dom';
import './Therapist.css'



const Therapist = ({therapist}) => {
    const {name, img, position} = therapist;
    return (
        <div className="col-lg-4  mb-5">
            <img className="imgg" src={img} alt="" />
            <h5>{name}</h5>
            <h6>{position}</h6>
            <Link to={`/about/$`}> <button className="btn btn-warning">About Us</button></Link>
        

            
        </div>
    );
};

export default Therapist;
import React from 'react';
import './Therapist.css'



const Therapist = ({therapist}) => {
    const {name, img, position} = therapist;
    return (
        <div className="col-lg-4  mb-5">
            <img className="imgg" src={img} alt="" />
            <h5>{name}</h5>
            <h6>{position}</h6>

            
        </div>
    );
};

export default Therapist;
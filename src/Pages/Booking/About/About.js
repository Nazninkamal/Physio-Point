import React from 'react';
import { useParams } from 'react-router';

const About = () => {
    const {therapistId} =useParams();
    return (
        <div>
             <h2>This is therapist: {therapistId}</h2>
        </div>
    );
};

export default About;
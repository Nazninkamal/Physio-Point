import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'



const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('services.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    } ,[])
    return (
      <div id="services">
          <h2 className="mt-5 text-primary">PHYSIOTHERAPY SERVICES</h2>
          <p className="mx-5">We are one of the leading providers of domiciliary care and health care staffing services. Is your loved one living with a chronic condition, recovering from illness, or simply in need of daily assistance.</p>
          <div className="service-container">
            {
                services.map(service =><Service
                key = {service.id}
                service={service}

                ></Service>)
            }
         
        </div>
      </div>
    );
};

export default Services;
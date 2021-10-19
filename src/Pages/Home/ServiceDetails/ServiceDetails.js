
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [service, setService] = useState({})
    const {serviceId } = useParams()
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => {
                const doctors = data.find(pd => pd.id == serviceId)
                setService(doctors)
            })
    }, [serviceId])
    console.log(service)
    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [single, setSingle] = useState([])
    const {serviceId } = useParams()
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => {
                const services = data.find(pd => pd.id == serviceId)
                setSingle(services)
            })
    }, [serviceId])
    console.log(single)
    return (
        <div>
            {/* <h2>{single.img}</h2> */}
        </div>
    );
};

export default ServiceDetails;
import React from 'react';
import Banner from '../Banner/Banner';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Services from '../Services/Services';
import Therapists from '../Therapists/Therapists';

const Home = () => {
    return (
        <div id="home">
         <Banner></Banner>
        <Services></Services>
        <Therapists></Therapists>
        <ServiceDetails></ServiceDetails>
         
        </div>
    );
};

export default Home;
import React from 'react';
import { useParams } from 'react-router';

const About = () => {
    // const {therapistId} =useParams();
    return (
        
        <div className="row">

             {/* <h2>This is therapist: {therapistId}</h2> */}
            <h1 className="fw-bold">About Us</h1>
            <p>We offer physical therapy services since 1996</p>
            <br />
            <br /><br /><br /><br />
            
            
            <div className="col-lg-4  col-md-12 col-sm-12 ">
            <h2>Our Vision</h2>
            <p className="text-xl-start">To be a company that attracts, rewards, and retains highly skilled physical therapy staff. Our proactive approach to the development of best business practices and promotion of effective treatment methods will help us accomplish this.</p>
            <br />
            <h2>Our Philosophy</h2>
            <p className="text-xl-start">Physio Physical Therapy is committed to providing high quality outpatient physical therapy services in beautiful state-of-the-art facilities.
                As a healthcare leader we partner with groups and events within the communities we serve. Our focus on our physical therapists continuing education is unmatched and guarantees our physical therapists understand and put into practice cutting-edge treatments and rehabilitation techniques available for all types of injuries and conditions.</p>
            </div>

            <div className="col-lg-4  col-md-12 col-sm-12 ">
                <img className="my-3" src="https://www.bv.org/wp-content/uploads/2016/03/outpatient-physical-therapy.jpg" alt="" />
                
                <img style={{width:"100%"}} src="https://centerpointphysical.com/wp-content/uploads/2021/05/b3-1000x675-1-1000x675-1.jpg" alt="" />
            </div>
            <div className="col-lg-4  col-md-12 col-sm-12 ">
             <h2>Our Mission</h2>
             <p className="text-xl-start">We are committed as primary healthcare professionals to help our clients resume their lifelong pursuit of health, fitness, and well-being.</p>
             
             <h5 className="text-primary">High Quality</h5>
             <p className="text-xl-start">We take a goal-oriented approach to healing. Whatever your goals might be we want to help you achieve them</p>

             <h5 className="text-primary">Patient Care</h5>
             <p className="text-xl-start">We’ll provide hands-on treatment in the office and education you can take home with you, enabling you to become an active participant in your recovery and future physical health.</p>

             <h5 className="text-primary">Professional Service</h5>
             <p className="text-xl-start">Our five physical therapists have a combined 120 years of clinical experience and a shared passion for helping our community stay active.</p>


            </div>
           
          
            
        
            
        </div>
    );
};

export default About;
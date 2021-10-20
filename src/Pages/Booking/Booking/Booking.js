import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} =useParams();
    const [state, setState] = useState({});
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/Nazninkamal/developer-portfolio/main/services.json')
        .then(res => res.json())
        .then(data => {
            const items = data.find(pd=>pd.id== serviceId)
            setState(items)

        });

    } ,[])
    
    return (
        <div className="row">
             <h3 className="text-secondary mb-5"> Welcome to Health Clinic of Physical Health Clinic</h3>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
            {/* <h2>This is booking: {serviceId}</h2> */}
            <img src={state.img} alt="" />
            <h4 className="mt-3">Therapy name: {state.name}</h4>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
                <h4 >We provide <span className="text-primary">{state.name}</span> services</h4>
                <p className="text-xl-start">Your <span className="text-primary">{state.name}</span> begins with a comprehensive evaluation of functional limitations and areas of pain. Our team of expert physical therapists will design a treatment plan based on your work-related needs and goals. We take a team approach and will consult with your employer and case manager, if necessary. Throughout your treatment, we will work hard to help you return to all normal functional activities.When you are ready for discharge, you will receive a personalized home exercise program to allow you to stay healthy on the job, further enhance your rehabilitation.</p>
            </div>
       
            <hr />

           
        <div className="row my-5">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
            <table class="table table-warning">
  <thead>
    <tr>
      <th scope="col">Opening</th>
      <th scope="col">Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Saturday</td>
      <td>CLOSED</td>
    </tr>
    <tr>
      <td>Sunday</td>
      <td>09:00 - 15:00</td>
    </tr>
    <tr>
      <td>Monday</td>
      <td>09:00 - 15:00</td>
     
    </tr>
    <tr>
      
      <td>Tuesday</td>
      <td>09:00 - 15:00</td>
      
    </tr>
    <tr>
     
      <td>Wednesday</td>
      <td>07:00 - 17:00</td>
     
    </tr>
    <tr>
      
      <td>Thrusday</td>
      <td>07:00 - 17:00</td>
      
    </tr>
    <tr>
     
      <td>Friday</td>
      <td>07:00 - 17:00</td>
     
    </tr>
  </tbody>  
</table>
 </div>
 <div className="col-lg-1"></div>

        <div className="col-lg-5  col-md-12 col-sm-12 mt-3">
            <h4 className="text-primary">Our services included all types and sizes</h4>
            <p className="text-xl-start">We take a team approach and will consult with your employer and case manager, if necessary. Throughout your treatment, we will work hard to help you return to all normal functional activities. When you are ready for discharge, you will receive a personalized home exercise-program to allow you to stay healthy.
                <br />
                <br />
                Our experienced team of physiotherapists will perform a comprehensive assessment, including postural and biomechanical assessments, to diagnose your problem.</p>
        </div>
        </div>


      
        </div>
       

    );
};

export default Booking;
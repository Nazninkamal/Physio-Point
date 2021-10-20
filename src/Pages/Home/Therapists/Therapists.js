import React from 'react';
import therapist1 from '../../../images/therapist/1219physicaltherapist.png'
import therapist2 from '../../../images/therapist/AdobeStock_116237971.png'
import therapist3 from '../../../images/therapist/istockphoto-1135099096-612x612.png'
import therapist4 from '../../../images/therapist/physical.png'
import therapist5 from '../../../images/therapist/5.png'
import therapist6 from '../../../images/therapist/6.png'
import Therapist from '../Therapist/Therapist';


const therapists = [
    {
        img: therapist1,
        name: "Disha Nair",
        position:"DOCTOR OF PHYSICAL THERAPY"

    },

    {
        img: therapist2,
        name:"Harlan Mendsohn",
        position:"REHABILATATION THERAPIST"
    },
    {
        img:therapist3,
        name:"Ethel Vanesa",
        position:"MASSAGE THERAPIST"
    },
    {
       img:therapist4,
       name:"Pauala Watkins",
       position:"PILATES THERAPIST"
    },
    {
        img: therapist5,
        name:"Loex Trahan",
        position:"MUSCULOSKELETAL THERAPIST"
    },
    {
        img: therapist6,
        name:"Callie Baggs",
        position:"MANUAL THERAPIST"
    }

]

const Therapists = () => {
    return (
       <div id="therapists" className="row mx-5 my-5">
           <hr />
            <div className="col-lg-5 ">
             <h2 className="text-xl-start">Physiotherapy services from professionals therapists</h2>
        </div>
        
        <div className="col-lg-7">
            <h6  className="text-xl-start">We are one of the leading providers of domiciliary care and health
               care staffing services. Is your loved one living with a chronic condition,
                 recovering from illness, or simply in need of daily assistance.</h6>
        </div>

        <div className="row my-5">
        {
            therapists.map(therapist => <Therapist
             key={therapist.name}
             therapist = {therapist}
            ></Therapist>)
        }
        </div>
       </div>
    );
};

export default Therapists;
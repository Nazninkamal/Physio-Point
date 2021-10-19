import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.png'
import banner3 from '../../../images/banner/banner-3.png'

const Banner = () => {
    return (
        <>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h3>Professional therapist</h3>
      <p>We are highest levels of honesty and professionalism at all times.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Personal Treatments</h3>
      <p>We care about you and the success of your providing personalised care.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
     <h3>Excellence Research</h3>
      <p>We have the right caring, experience and dedicated professional for you.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;
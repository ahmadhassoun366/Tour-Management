import React from 'react';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import ServiceCard from './ServiceCard';


const servicesDate = [
  {
    imgUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'Weather is a service that allows you to get the weather of a city. It is based on the OpenWeatherMap API.',
   
  },
  {
    imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Guide is a service that allows you to get the guide of a city. It is based on the OpenWeatherMap API.',
  },
  {
    imgUrl: customizationImg,
    title: 'Customization',
    desc: 'Customization is a service that allows you getting the custome of a city. It is based on the OpenWeatherMap API.',
  },
]




const ServicesList = () => {
  return (
    <>
   {
    servicesDate.map((item, index) => (
      <Col key={index}>
        <ServiceCard item={item} />
      </Col>
    ))
   }
    </>
  )
}

export default ServicesList
import React from 'react';
import office from '../src/images/o1.png';
import Common from './Common';

const About=()=>{
  return(
    <>
      <Common
        name='Welcome to About Page'
        img={office}
        visit='/contact'
        btname='Contact Now'
      />
    </>
  )
}


export default About;
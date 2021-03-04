import React from 'react';
import web from '../src/images/about.png';
import Common from './Common';

const About = () => {
    return (
         <Common title="Welcome on board with" brandname="Cionax Tech Solution" para="We are the team of talented developers making Websites" btntitle="Contact Us" btnvisit="/Contact" imgsrc={web}/>
    )
}
export default About;
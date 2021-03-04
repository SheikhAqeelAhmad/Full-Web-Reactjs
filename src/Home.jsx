import React from 'react';
import web from '../src/images/home.jpg';
import './index.css';
import Common from "./Common";

const Home = () => {
    return (
            <Common title="Grow your business with" brandname="Cionax Tech Solution" para="We are the team of talented developers making Websites" btntitle="Get Started" btnvisit="/Services" imgsrc={web}/>
    )
}
export default Home;
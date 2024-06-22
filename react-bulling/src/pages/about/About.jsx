import React from 'react';
import './about.scss';
import AboutHeader from '../../components/UI/aboutHeader/AboutHeader';
import AboutSecond from '../../components/UI/aboutSecond/AboutSecond';
import AboutThird from '../../components/UI/aboudThird/AboutThird';


const About = () => {
    return (
        <div className="about">

            <div className="content">

                <AboutHeader />

                <AboutSecond/>
                
                <AboutThird/>

            </div>
        </div>
    );
};

export default About;
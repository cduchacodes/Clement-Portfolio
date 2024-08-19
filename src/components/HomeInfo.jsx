import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <InfoBox 
            text="Hi I'm Clement, a software engineer from Maryland"
            link="/about"
            btnText="More about me"
        />
    ),
    2: (
        <InfoBox 
            text="Want to know what I've worked on so far?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    3: (
        <InfoBox 
            text="Need a project done or looking for a dev?"
            link="/contact"
            btnText="Let's talk"
        />
    ),
    4: (
        <h1></h1>
    ),
    
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[ currentStage];
}

export default HomeInfo
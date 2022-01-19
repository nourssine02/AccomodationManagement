import React from 'react'
import InfoSectionTwo from '../Section/InfoSectionTwo'
import InfoSection from '../Section/InfoSection';
import { InfoDataTwo } from '../../Data/InfoData';
import { InfoData } from '../../Data/InfoData';
import Banner from './Banner';
import { SliderData } from '../../Data/SliderData'


const Home = () => {

   
    return (

        <>



            <Banner slides={SliderData} />

    
            <InfoSection {...InfoData} />
            <InfoSectionTwo {...InfoDataTwo} />




        </>
    );
}

export default Home;
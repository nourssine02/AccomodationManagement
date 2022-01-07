import React from 'react'
import InfoSectionTwo from './Section/InfoSectionTwo'
import InfoSection from './Section/InfoSection';
import { InfoDataTwo } from '../Data/InfoData';
import { InfoData } from '../Data/InfoData';
import Banner from './Banner';
import { SliderData } from '../Data/SliderData'
import Cart from '../Cart';
import { CartData1, CartData2, CartData3, CartData4 } from '../Data/CartData';


const Home = () => {
    return (
        <div>

            <Banner slides={SliderData} />
            
            <Cart {...CartData1}   />
            <Cart {...CartData2}   />
            <Cart {...CartData3}   />
            <Cart {...CartData4}   />


            <InfoSection {...InfoData} />
            <InfoSectionTwo {...InfoDataTwo} />




        </div>
    )
}

export default Home

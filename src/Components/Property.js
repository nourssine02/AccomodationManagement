import React from 'react'
import Cart from '../Cart';
import { CartData1, CartData2, CartData3, CartData4 } from '../Data/CartData';
import SearchSection from './Section/SearchSection'

const Property = () => {
    return (
        <div>


            <SearchSection />
            &nbsp;

            <Cart {...CartData1} />
            <Cart {...CartData2} />
            <Cart {...CartData3} />
            <Cart {...CartData4} />

        </div>
    )
}

export default Property

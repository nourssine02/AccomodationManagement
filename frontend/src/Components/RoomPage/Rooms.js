import React from 'react'
import styled from 'styled-components';
import Cart from '../../Cart';
import { CartData1, CartData2, CartData3, CartData4 } from '../../Data/CartData';

const Container = styled.div`
    padding-bottom : 150px;
`;
const Property = () => {
  return (
    <>
      <Container>

        <Cart {...CartData1} />
        <Cart {...CartData2} />
        <Cart {...CartData3} />
        <Cart {...CartData4} />
        <Cart {...CartData1} />
        <Cart {...CartData2} />
        <Cart {...CartData3} />
        <Cart {...CartData4} />
        <Cart {...CartData1} />
        <Cart {...CartData2} />
        <Cart {...CartData3} />
        <Cart {...CartData4} /> 


      </Container>


    </>
  )
}

export default Property

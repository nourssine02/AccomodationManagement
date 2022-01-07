import React from 'react'
import styled from 'styled-components'



const CartSection = styled.div`
    display: inline-flex;
    margin-top: 150px;

  
`;
const CartWrapper = styled.div`
 
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.75);
    transition: transform 100ms ease-in;
    cursor: pointer;
    

    &:hover {
    transform: scale(1.07);
    }
   
`;

const CartImage = styled.img`

    object-fit: fill;
    min-width: 300px;
    min-height: 200px;
    width: 100%;
    width: 20px;
`;
const CartContent = styled.div`

 
    margin-top: -9px;
      border-radius: 10px;
      padding: 20px;
      padding-top: 20px;
      border: 1;
      h2{
        font-size: 18px;
      font-weight: 600;
      }
      p{
        font-size: 14px;
      font-weight: 300;
      margin-top: 8px;
      margin-bottom: 8px;
      }
`;



const Cart = ({ image, alt, title, price }) => {
    return (
        <CartSection>
            <CartWrapper>

                <CartImage src={image} alt={alt} />

                <CartContent>
                    <h2>{title}</h2>
                    <p>{price}</p>
                </CartContent>

            </CartWrapper>
        </CartSection>

    )
}

export default Cart

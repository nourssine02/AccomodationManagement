import React from 'react'
import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'
import {Link} from 'react-router-dom'



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
const Reviews = styled.div`
  color : yellow; 
`;



const Cart = ({ room }) => {
    return (
        <CartSection>
            
                <CartWrapper >

                 
                    <Link to={`/roomDetails/${room._id}`}>
                           <CartImage src={room.images[0].url} alt='roomImage'/>
                    </Link>
                   


                    <CartContent>
                        <h2>{room.name}</h2>
                        <Reviews >
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <span style={{ 'color': 'black', 'fontSize': '13px' }}> ({room.numOfReviews} Reviews)</span>


                        </Reviews>

                        <p>{room.price}$</p>
                    </CartContent>


                </CartWrapper>
         
        </CartSection>

    )
}

export default Cart

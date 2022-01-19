import React, { useEffect } from 'react'
import styled from 'styled-components';
import Cart from '../Main/Cart';
import Loader from '../../Loader';

import { useDispatch, useSelector } from 'react-redux'
import { getRooms } from '../../Redux/Actions/roomActions'
import { useAlert } from 'react-alert'

const Container = styled.div`
    padding-bottom : 150px;
`;




const Rooms = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, rooms, error } = useSelector(state => state.rooms)


  useEffect(() => {
    if (error) {
      return alert.error(error)

    }
    dispatch(getRooms());


  }, [dispatch, alert, error])



  return (
    <>

      {loading ? <Loader /> : (

        <Container>

          {rooms && rooms.map(room => (
            <Cart key={room._id} room={room} />
          ))}

        </Container>

      )}


    </>
  )
}

export default Rooms

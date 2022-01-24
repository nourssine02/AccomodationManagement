import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Cart from '../Main/Cart';
import Loader from '../../Loader';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux'
import { getRooms } from '../../Redux/Actions/roomActions'
import { useAlert } from 'react-alert'
import { useParams } from 'react-router-dom';

const Container = styled.div`
    padding-bottom : 150px;
    padding-top: 130px;
    padding-left: 20px;
`;



const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const Rooms = () => {

  const { mykeyword } = useParams();

  const alert = useAlert();
  const [price, setPrice] = useState([1, 1000])
  const [roomsType, setRoomsType] = useState('')
  const [capacity, setCapacity] = useState(1)
  const [ratings, setRatings] = useState(0)

  const roomList = [
    'Single', 'Double', 'Family'

  ]
  const nbreGuests = [0, 1, 2, 3, 4, 5];

  const dispatch = useDispatch();

  const { loading, rooms, error } = useSelector(state => state.rooms)


  const keyword = mykeyword

  useEffect(() => {
    if (error) {
      return alert.error(error)

    }
    dispatch(getRooms(keyword, price, roomsType, capacity, ratings));


  }, [dispatch, alert, error, keyword, price, roomsType, capacity, ratings])





  return (
    <>

      {loading ? <Loader /> : (

        <Container>


          <section className="filter-container">
            <form className="filter-form">
              <div className="form-group">
                <label htmlFor="type">room type</label>


                <ul>
                  <li style={{ cursor: 'pointer', listStyleType: 'none' }} onClick={() => setRoomsType()}  >All </li>
                  {roomList.map((roomsType) => (
                    <li key={roomsType} onClick={() => setRoomsType(roomsType)} style={{ cursor: 'pointer', listStyleType: 'none' }}
                    >{roomsType}</li>
                  ))}
                </ul>



              </div>

              <div className="form-group">
                <label htmlFor="capacity">Guests</label>

                <ul>
                  {nbreGuests.map(capacity => (
                    <li key={capacity} onClick={() => setCapacity(capacity)} style={{ cursor: 'pointer', listStyleType: 'none', display: 'inline-block', paddingLeft: '5px' }}
                    >{capacity}</li>
                  ))}

                </ul>


              </div>

              <div className="form-group" style={{ marginRight: '100px' }}>
                <label htmlFor="price">room price </label>
                <Range
                  marks={{
                    1: `$1`,
                    1000: `$1000`

                  }}
                  min={1}
                  max={1000}
                  defaultValue={[1, 1000]}
                  tipFormatter={value => `$${value}`}
                  tipProps={{
                    placement: "top",
                    visible: true
                  }}
                  className="form-control"
                  value={price}
                  onChange={price => setPrice(price)}


                />
              </div>

              <div className="form-group">
                <label htmlFor="ratings">Ratings</label>

                <ul>
                  {[0, 1, 2, 3, 4, 5].map(ratings => (
                    <li key={ratings} onClick={() => setRatings(ratings)} style={{ cursor: 'pointer', listStyleType: 'none', display: 'inline-block', paddingLeft: '5px' }}
                    >{ratings}
                    </li>
                  ))}

                </ul>


              </div>
            </form>
          </section>

          {rooms && rooms.map(room => (
            <Cart key={room._id} room={room} />
          ))}



        </Container>

      )}


    </>
  )
}

export default Rooms

import React, { useEffect, useState } from 'react'
import './roomView.css'
import Loader from '../../Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomDetails, clearErrors } from '../../Redux/Actions/roomActions'
import { useAlert } from 'react-alert'
import { useParams } from "react-router-dom";
import Rating from 'react-rating'





const RoomDetails = ({ match }) => {



    const { id } = useParams();
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, room } = useSelector(state => state.roomDetails)



    useEffect(() => {
        dispatch(getRoomDetails(id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch, alert, error, id])


    const [bookingDetails, udpateDetails] = useState({
        checkIn: "",
        checkOut: "",
        adults: 0,
        childs: 0,
        totalDays: 0,
        totalprice: 0,
        showBooking: true,
        dbooking: false,
        showPayment: false,
        bookingMsg: false
    })

    const [state, setstate] = useState({ hotel: [] })

    console.log("Hotel =>>>", state.hotel)

    return (
        <>
            {loading ? <Loader /> : (

                <div>
                    <div className="hotel-nav"></div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////// */}
                    <section>
                        <div className="containt" style={{ 'marginLeft': ' 63px' }}>
                            <div className="mb-4">
                                <h2>{room.name}</h2>


                                <div className="ratings mt-auto">
                                    <Rating
                                        emptySymbol="fa fa-star-o fa-1x"
                                        fullSymbol="fa fa-star fa-1x"
                                    />
                                    <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>


                                </div>
                            </div>
                            <div className="d-flex roomview-wrapper">
                                <div className="carousel-box">
                                    <div interval="1500">
                                        {room.images && room.images.map((image) => (

                                            <div className="box" key={image.public_id}>
                                                <img
                                                    className="carousel-img"
                                                    src={image.url}
                                                    alt='roomDetailsImage'

                                                />

                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-light book-hotel text-white mb-5">
                                    <div>
                                        <section className={bookingDetails.showBooking ? "d-block" : "d-none"}>
                                            <form >
                                                <div>
                                                    <div className="input-group input-group-lg mt-5">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="inputGroup-sizing-lg">Check In</span>
                                                        </div>
                                                        <input type="date" min='0' name="checkIn" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                                                    </div>
                                                    <div className="input-group input-group-lg mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="inputGroup-sizing-lg">Check Out</span>
                                                        </div>
                                                        <input type="date" min='0' name="checkOut" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="input-group input-group-lg mt-3 m-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" id="inputGroup-sizing-lg">Persons</span>
                                                            </div>
                                                            <input type="number" min="1" max='' name="adults" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                                                        </div>
                                                        <div className="input-group input-group-lg mt-3 m-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" id="inputGroup-sizing-lg">Childs</span>
                                                            </div>
                                                            <input type="number" min="0" max='' name="childs" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                                                        </div>

                                                    </div>
                                                    <div className='text-center mt-3 text-dark'>
                                                        <h2>Price :
                                                            <span className="font-weight-bold">{room.price} $</span>
                                                        </h2>
                                                    </div>
                                                    <div className='text-center mt-3 text-dark'>
                                                        <h5>Status :
                                                            <span className='font-weight-bold'>{room.status}</span>
                                                            <span className="badge badge-primary badge-pill" id={room.status === "Available" ? 'greenColor' : 'redColor'} >{room.status === "Available" ? <>&#10004;</> : <>&#10006;</>}</span>
                                                        </h5>
                                                    </div>
                                                    <button type="submit" className="btn btn-lg btn-block btn-success mt-4">Book Now</button>

                                                </div>

                                            </form>
                                        </section>

                                    </div >
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* //////////////////////////////////////////////////////////////////////////////////////// */}

                    <div className="content" style={{ 'marginLeft': ' 63px' }}>
                        <div className="description infoView">
                            <h5 className="mt-5 font-weight-bold">Description</h5>
                            <p>
                                {room.description}
                            </p>
                        </div>
                        <hr />
                        <div className="room-serivces">
                            <h5 className="mt-5 font-weight-bold">Room Service</h5>
                            <div className="col-sm-4">
                                <ul className="list-group" >
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Free WiFi
                                        <span className="badge badge-primary badge-pill" style={{ 'color': 'black' }}>{room.wifi === "Yes" ? <>&#10004;</> : <>&#10006;</>}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Parking
                                        <span className="badge badge-primary badge-pill" style={{ 'color': 'black' }}>{room.parking === "Yes" ? <>&#10004;</> : <>&#10006;</>}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Swimming Pool
                                        <span className="badge badge-primary badge-pill" style={{ 'color': 'black' }}>{room.swimmingPool === "Yes" ? <>&#10004;</> : <>&#10006;</>}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Fitness Center
                                        <span className="badge badge-primary badge-pill" style={{ 'color': 'black' }}>{room.fitness_center === "Yes" ? <>&#10004;</> : <>&#10006;</>}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="pritn">
                            <h5 className="mt-5 font-weight-bold">Hotel Info</h5>
                            <div className="row">

                                <ul className="list-group-flush col-6">
                                    <li className="list-group-item"><h5 className="font-weight-bold">Address</h5>
                                        <p>{room.address}</p></li>
                                    <li className="list-group-item"><h5 className="font-weight-bold">Allocator Name</h5>
                                        <p>{room.allocator}</p></li>

                                    <li className="list-group-item"><h5 className="font-weight-bold">Contact No.</h5>
                                        <p>{room.contactNo}</p></li>
                                    <li className="list-group-item"><h5 className="font-weight-bold">Number of Reviews</h5>
                                        <p>{room.numOfReviews}</p></li>

                                </ul>

                                <ul className="list-group-flush col-6">
                                    <li className="list-group-item"><h5 className="font-weight-bold">Available Rooms</h5>
                                        <p>{room.capacity}</p></li>
                                    <li className="list-group-item"><h5 className="font-weight-bold">Maximum Adults Allow</h5>
                                        <p>{room.maximumAdultsAllow}</p></li>
                                    <li className="list-group-item"><h5 className="font-weight-bold">Maximum Childs Allow</h5>
                                        <p>{room.maximumChildsAllow}</p></li>
                                    <li className="list-group-item"><h5 className="font-weight-bold">Property Type</h5>
                                        <p>{room.roomsType}</p></li>
                                </ul>

                            </div>


                        </div>
                        {/* /////////////////////////////////////////////////////////////////////////////// */}
                        <hr />

                        <div className="rules">
                            <h5 className="mt-5 font-weight-bold">Hotel Rules</h5>
                            <div className="row">
                                <div className="col-2 mr-4">
                                    <p>Check-in</p>
                                    <p>Check-out</p>
                                    <p>Cancellation/prepayment</p>
                                    <p>Age restriction</p>
                                    <p>Cards accepted at this property </p>
                                    <p>Groups</p>
                                </div>

                                <div className="col-6">
                                    <p>Check in : 11:00 AM -- Check Out: 10:00 AM
                                        <small className="form-text text-muted">
                                            Guests are required to show a photo identification and credit card upon check-in</small>
                                    </p>
                                    <p> Cancellation and prepayment policies vary according to accommodation type. Please enter the dates of your stay and check the conditions of your required room. </p>
                                    <p> The minimum age for check-in is 18</p>
                                    <p>Backpacker Panda Colaba accepts these cards and reserves the right to temporarily hold an amount prior to arrival.  </p>
                                    <p>When booking more than 4 rooms, different policies and additional supplements may apply. </p>
                                </div>
                            </div>

                        </div>
                        <hr />

                        {/* //////////////////////////////////////////////////////////////////////////////////// */}
                        <div className="pritn">
                            <h5 className="mt-5 font-weight-bold">The fine Print</h5>
                            <p>
                                Please note that guests checking in must be at least 18 years of
                                age. According to government regulations guests are required to
                                present a valid photo ID and credit card upon check in. The hotel
                                reserves the right of admission. Please note that early check-in
                                or late check-out is subject to availability and may be
                                chargeable. Please note that in case of couples, a valid marriage
                                proof is required to be produced at the time of check-in. The
                                right to admission is reserved by the property.                  </p>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>

            )}
        </>

    )
}
export default RoomDetails
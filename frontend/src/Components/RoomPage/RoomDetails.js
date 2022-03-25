import React, { useEffect, useState } from 'react'
import './roomView.css'
import Loader from '../../Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomDetails, clearErrors } from '../../Redux/Actions/roomActions'
import { useAlert } from 'react-alert'
import { useParams } from "react-router-dom";

import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'




const RoomDetails = () => {


    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfAdults, setNumberOfAdults] = useState('');
    const [numberOfChilds, setNumberOfChilds] = useState('');
    const [numberOfDays, setNumberOfDays] = useState('')
    const [reviews, setReviews] = useState([])


    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState([]);

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(checkIn + checkOut + numberOfAdults + numberOfChilds);

        try {
            const url = "/api/v1/booking/new";
            await axios.post(url, {
                checkIn: checkIn, checkOut: checkOut, numberOfAdults: numberOfAdults,
                numberOfChilds: numberOfChilds, numberOfDays: numberOfDays

            });
            console.log(checkIn + checkOut + numberOfAdults + numberOfChilds + numberOfDays);
            alert.success(' Management will contact you to confirm the reservation');
        } catch (error) {
            console.log(error);

        }

    }
    const handleComment = async (e) => {
        e.preventDefault();

        axios.put(`/api/v1/review`, {
            rating: rating, comment: comment,
            roomId: room._id


        })
            .then(response => {
                console.log(response);
                alert('Comment Saved')

            })
            .catch(err => {
                console.log(err);
            })


    }


    const getComment = async () => {
        const res = await axios.get(`/api/v1/reviews?id=${id}`)
        setReviews(res.data.reviews)
        console.log(res.data.reviews)

    }

    useEffect(() => {
        getComment();

    }, [])


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


                                <div className="rating">
                                    <StarRatingComponent
                                        starColor={`#fdcc0d`}
                                        emptyStarColor={`#808080`}
                                        name="rate"
                                        starCount={5}
                                        value={room.ratings}
                                    />
                                    <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
                                </div>

                            </div>
                            <div className="d-flex roomview-wrapper">
                                <div className="carousel-box">
                                    <div interval="1500">


                                        <div className="box">
                                            <img
                                                className="carousel-img"
                                                src={room.images}
                                                alt='roomDetailsImage'

                                            />

                                        </div>

                                    </div>
                                </div>

                                <div className="bg-light book-hotel text-white" style={{ marginTop: '-50px' }}>
                                    <div>
                                        <section className="d-block">
                                            <form onSubmit={handleSubmit} >
                                                <div>
                                                    <div className="input-group input-group-lg mt-5">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" >Check In</span>
                                                        </div>
                                                        <input type="date" min='2022-01-25' name="checkIn" className="form-control" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
                                                    </div>
                                                    <div className="input-group input-group-lg mt-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" >Check Out</span>
                                                        </div>
                                                        <input type="date" min='2022-01-25' name="checkOut" className="form-control" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="input-group input-group-lg mt-3 m-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" >Persons</span>
                                                            </div>
                                                            <input type="number" name="adults" className="form-control" value={numberOfAdults} onChange={e => setNumberOfAdults(e.target.value)} />
                                                        </div>
                                                        <div className="input-group input-group-lg mt-3 m-1">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text" >Childs</span>
                                                            </div>
                                                            <input type="number" name="childs" className="form-control" value={numberOfChilds} onChange={e => setNumberOfChilds(e.target.value)} />
                                                        </div>

                                                    </div>
                                                    <div className="input-group input-group-lg mt-3 m-1">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" >Number Of Days</span>
                                                        </div>
                                                        <input type="number" name="numberOfDays" className="form-control" value={numberOfDays} onChange={e => setNumberOfDays(e.target.value)} />
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
                                                    <button type="submit" className="btn btn-lg btn-block btn-success mt-4" style={{ marginLeft: '130px' }} >Book Now</button>

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
                            <h5 className="mt-5 font-weight-bold">House Service</h5>
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
                            <h5 className="mt-5 font-weight-bold">House Info</h5>
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
                                    <li className="list-group-item"><h5 className="font-weight-bold">Room Type</h5>
                                        <p>{room.roomsType}</p></li>
                                </ul>

                            </div>


                        </div>
                        {/* /////////////////////////////////////////////////////////////////////////////// */}
                        <hr />

                        <div className="rules">
                            <h5 className="mt-5 font-weight-bold">House Rules</h5>
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
                    <hr />





                    <div className="comment" style={{marginLeft: '20px'}}>
                        <h5 className="mt-5 font-weight-bold">Reviews</h5>
                        <div className="row">
                            {reviews && reviews.map((rev, index) => (
                                <div  key={index}>
                                    <StarRatingComponent
                                        starColor={`#fdcc0d`}
                                        emptyStarColor={`#808080`}
                                        name="rate"
                                        starCount={5}
                                        value={rev.rating}
                                        className="col-6"

                                    />
                                    <p className="col-2 mr-4">{rev.comment}</p>

                                </div>

                            ))}
                        </div>

                    </div>
                    <form onSubmit={handleComment} style={{ marginLeft: '20px' }} >
                        <h4>Add a comment</h4>

                        <div className="content">
                            <div className="row">
                                <div className="col-10">
                                    <div className="comment-box ml-2">

                                        <div className="ratings" >
                                            <input type="radio" name="rating" value="5" id="5" onChange={(e) => setRating(e.target.value)} /><label htmlFor="5">☆</label>
                                            <input type="radio" name="rating" value="4" id="4" onChange={(e) => setRating(e.target.value)} /><label htmlFor="4">☆</label>
                                            <input type="radio" name="rating" value="3" id="3" onChange={(e) => setRating(e.target.value)} /><label htmlFor="3">☆</label>
                                            <input type="radio" name="rating" value="2" id="2" onChange={(e) => setRating(e.target.value)} /><label htmlFor="2">☆</label>
                                            <input type="radio" name="rating" value="1" id="1" onChange={(e) => setRating(e.target.value)} /><label htmlFor="1">☆</label>
                                        </div>
                                        <div className="comment-area"> <textarea className="form-control" placeholder="what is your view?" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}></textarea> </div>
                                        <div className="comment-btns mt-2">
                                            <div className="row">

                                                <div className="col-6">
                                                    <div className="pull-right"> <button className="btn btn-success send btn-sm">Send <i className="fa fa-long-arrow-right ml-1"></i></button> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>


                </div>


            )}
        </>

    )
}
export default RoomDetails
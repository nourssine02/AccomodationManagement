import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Booking() {

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

    const userName = JSON.parse(localStorage.getItem("token")).name;

    console.log(userName)

  

    return (
        <div>
            <section className={bookingDetails.showBooking ? "d-block" : "d-none"}>
                <form >
                    <div>
                        <div className="input-group input-group-lg mt-5">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Check In</span>
                            </div>
                            <input type="date" min='' name="checkIn" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                        </div>
                        <div className="input-group input-group-lg mt-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-lg">Check Out</span>
                            </div>
                            <input type="date" min='' name="checkOut"  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                        </div>
                        <div className="d-flex">
                            <div className="input-group input-group-lg mt-3 m-1">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Persons</span>
                                </div>
                                <input type="number" min="1" max=''name="adults" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                            </div>
                            <div className="input-group input-group-lg mt-3 m-1">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-lg">Childs</span>
                                </div>
                                <input type="number" min="0" max='' name="childs"  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-lg btn-block btn-danger mt-4">Book Now</button>

                    </div>
                </form>
            </section>
            <section className={bookingDetails.dbooking ? "d-block" : "d-none"}>

              

                <button className="btn btn-info btn-block rounded" >Confirm Booking</button>
            </section>

        </div >
    )
}

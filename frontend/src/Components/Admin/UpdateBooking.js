import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate, useParams } from "react-router-dom";



const Container = styled.div`
    padding-bottom : 170px;
      padding-top : 150px;
      padding-left: 40px;
      padding-right: 40px;
`;
function UpdateBooking() {

    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfAdults, setNumberOfAdults] = useState('');
    const [numberOfChilds, setNumberOfChilds] = useState('');
    const [numberOfDays, setNumberOfDays] = useState('')

    const navigate = new useNavigate();
    const { id } = useParams();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(checkIn + checkOut + numberOfAdults + numberOfChilds);

        try {
            const url = `/api/v1/admin/booking/${id}`;
            await axios.put(url, {
                checkIn: checkIn, checkOut: checkOut, numberOfAdults: numberOfAdults,
                numberOfChilds: numberOfChilds, numberOfDays: numberOfDays

            });
            alert('Update');
            navigate("/admin/bookings")
        } catch (error) {
            console.log(error);

        }

    }

    const loadBooking = async () => {
        const res = await axios.get(`/api/v1/booking/${id}`)
        setCheckIn(res.data.booking.checkIn)
        setCheckOut(res.data.booking.checkOut)
        setNumberOfAdults(res.data.booking.numberOfAdults)
        setNumberOfChilds(res.data.booking.numberOfChilds)
        setNumberOfDays(res.data.booking.numberOfDays)


    }

    useEffect(() => {
        loadBooking();

    }, []);

    return (
        <Container>

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

                    <br></br>
                    <button type='submit' className='btn btn-success' >Submit</button> &nbsp;&nbsp;
                    <Link to="/admin/bookings" className='btn btn-warning' >Cancel</Link>
                </div>

            </form>


        </Container>

    )

}

export default UpdateBooking


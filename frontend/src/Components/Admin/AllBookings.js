import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    padding-bottom : 170px;
      padding-top : 150px;
      padding-left: 40px;
      padding-right: 40px;
`;
class AllBookings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookings: []
        }
    }

    componentDidMount() {
        this.getBookings();
    }
    getBookings() {
        axios.get("/api/v1/admin/bookings").then(res => {
            if (res.data.success) {
                this.setState({
                    bookings: res.data.bookings,
                });
                console.log(this.state.bookings);
            }
        })
    }
     deleteBooking = async (id) => {
        try {
            await axios.delete(`/admin/booking/${id}`)
            alert('Are you sure you want to delete this ?')
            this.getBookings()

        } catch (error) {
            console.log(error);


        }
    }
    render() {
        return (
            <Container>

                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>RoomId</th>
                            <th>checkIn</th>
                            <th>checkOut</th>
                            <th >numberOfAdults</th>
                            <th >numberOfChilds</th>
                            <th >numberOfDays</th>
                            <th >bookingStatus</th>
                            <th ></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.bookings.map((booking, index) => (

                            <tr key={index + 1} >
                                <td><Link to={`/roomDetails/${booking.room}`}>{index + 1}</Link></td>
                                <td>{booking.checkIn}</td>
                                <td>{booking.checkOut}</td>
                                <td>{booking.numberOfAdults}</td>
                                <td>{booking.numberOfChilds}</td>
                                <td>{booking.numberOfDays}</td>
                                <td>{booking.bookingStatus}</td>

                                <td>
                                    <Link to={`/admin/UpdateBooking/${booking._id}`} className='btn btn-success' > Update </Link>&nbsp;&nbsp;
                                    <button onClick={() => this.deleteBooking(booking._id)} className='btn btn-danger'> Delete </button>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>



            </Container>

        )
    }
}

export default AllBookings


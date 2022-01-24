import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    padding-bottom : 170px;
      padding-top : 150px;
    
`;
const AllRooms = () => {


    const [rooms, setRooms] = useState([])



    useEffect(() => {
        getRooms();

    }, [])
    const getRooms = async () => {
        const res = await axios.get("/api/v1/rooms")
        setRooms(res.data.rooms)


    }

    const deleteRoom = async (id) => {
        try {
            await axios.delete(`/api/v1/admin/room/${id}`)
            alert('Are you sure you want to delete this ?')
            getRooms()

        } catch (error) {
            console.log(error);


        }
    }



    return (
        <Container>
            <Link to={`/admin/addRooms`} className='btn btn-info' style={{ 'marginLeft': '1000px' }} > Add Room </Link>&nbsp;&nbsp;

            <table className="table">
                <thead className="thead-dark">
                    <tr>

                        <th>ID</th>
                        <th>NAME</th>
                        <th>ADRESS</th>
                        <th >PRICE</th>
                        <th >RATINGS</th>
                        <th >ROOMS TYPE</th>
                        <th >STATUS</th>
                        <th > CAPACITY</th>
                        <th >ALLOCATOR</th>
                        <th >NUMBER OF  REVIEWS</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room, index) => (

                        <tr key={room._id} >
                            <td><Link to={`/roomDetails/${room._id}`} >{index + 1}</Link></td>
                            <td>{room.name}</td>
                            <td>{room.address}</td>
                            <td>{room.price}</td>
                            <td>{room.ratings}</td>
                            <td>{room.roomsType}</td>
                            <td>{room.status}</td>
                            <td>{room.capacity}</td>
                            <td>{room.allocator}</td>
                            <td>{room.numOfReviews}</td>
                            <td>
                                <Link to={`/admin/UpdateRoom/${room._id}`} className='btn btn-success' > Update </Link>&nbsp;&nbsp;
                                <button  onClick={() => deleteRoom(room._id)} className='btn btn-danger' > Delete </button>
                            </td>

                        </tr>

                    ))}
                </tbody>
            </table>



        </Container>

    )
}

export default AllRooms


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
function UpdateRoom() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const [price, setPrice] = useState(0);
    const [ratings, setRatings] = useState(0)
    const [roomsType, setRoomsType] = useState('')
    const [status, setStatus] = useState(['Available', 'Not Available'])

    const [capacity, setCapacity] = useState(0)
    const [allocator, setAllocator] = useState('')
    const [numOfReviews, setNumOfReviews] = useState(0)




    const navigate = new useNavigate();
    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `/api/v1/admin/room/${id}`;
            await axios.put(url, {
                name: name, address: address, price: price, ratings: ratings,
                roomsType: roomsType, status: status,
                capacity: capacity, allocator: allocator, numOfReviews: numOfReviews


            });
            alert('Update');
            navigate("/admin/rooms")

        } catch (error) {
            console.log(error);


        }


    }



    const loadRoom = async () => {
        const res = await axios.get(`/api/v1/room/${id}`)
        setName(res.data.room.name)
        setAddress(res.data.room.address)
        setPrice(res.data.room.price)
        setRatings(res.data.room.ratings)
        setRoomsType(res.data.room.roomsType)
        setStatus(res.data.room.status)
        setCapacity(res.data.room.capacity)
        setAllocator(res.data.room.allocator)
        setNumOfReviews(res.data.room.numOfReviews)

    }

    useEffect(() => {
        loadRoom();

    },[]);
  
    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" name='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >address</label>
                    <input type="text" className="form-control" name='address' value={address} onChange={e => setAddress(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Price</label>
                    <input type="text" className="form-control" name='price' value={price} onChange={e => setPrice(e.target.value)} />
                </div>

                <div className="form-group">
                    <label >Ratings</label>
                    <input type="number" className="form-control" value={ratings} name='ratings' onChange={e => setRatings(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Room Type</label>
                    <select className="form-control" name='roomsType' value={roomsType} onChange={e => setRoomsType(e.target.value)}>
                        <option>all</option>
                        <option>Single</option>
                        <option>Double</option>
                        <option>Family</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Allocator Name</label>
                    <input type="text" className="form-control" value={allocator} name='allocator' onChange={e => setAllocator(e.target.value)} />
                </div>

                <label>Status</label>
                <div className="form-check">

                    <input type="checkbox" className="form-check-input" onChange={e => setStatus(e.target.value)} name='status' value={status[0]} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Available</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name='status' value={status[1]} onChange={e => setStatus(e.target.value)} />
                    <label className="form-check-label" >Not Available</label>
                </div>


                <br></br>
                <div className="form-group">
                    <label >Capacity</label>
                    <input type="number" className="form-control" name='capacity' value={capacity} onChange={e => setCapacity(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >number of reviews</label>
                    <input type="number" className="form-control" value={numOfReviews} name='numOfReviews' onChange={e => setNumOfReviews(e.target.value)} />
                </div>

                <br></br>
                <button type='submit' className='btn btn-success' >Submit</button> &nbsp;&nbsp;
                <Link to="/admin/rooms" className='btn btn-warning' >Cancel</Link>
            </form>
        </Container>

    )

}

export default UpdateRoom


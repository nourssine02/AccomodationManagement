import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";


const Container = styled.div`
    padding-bottom : 170px;
      padding-top : 150px;
      padding-left: 40px;
      padding-right: 40px;
`;
function AddRooms() {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('')
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('')
    const [ratings, setRatings] = useState(0)
    const [images, setImages] = useState('')
    const [contactNo, setContactNo] = useState(0)
    const [roomsType, setRoomsType] = useState('')
    const [status, setStatus] = useState(['Available', 'Not Available'])
    const [maximumAdultsAllow, setMaximumAdultsAllow] = useState(0)
    const [maximumChildsAllow, setMaximumChildsAllow] = useState(0)
    const [capacity, setCapacity] = useState(0)
    const [allocator, setAllocator] = useState('')
    const [numOfReviews, setNumOfReviews] = useState(0)
    const [wifi, setWifi] = useState(['Yes', 'No'])
    const [fitness, setFitness] = useState(['Yes', 'No'])
    const [parking, setParking] = useState(['Yes', 'No'])
    const [swimmingPool, setSwimmingPool] = useState(['Yes', 'No'])



    const navigate = new useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "/api/v1/admin/room/new";
            await axios.post(url, {
                name: name, address: address, price: price, description: description, ratings: ratings,
                images: images, contactNo: contactNo, roomsType: roomsType, status: status,
                maximumAdultsAllow: maximumAdultsAllow, maximumChildsAllow: maximumChildsAllow,
                capacity: capacity, allocator: allocator, numOfReviews: numOfReviews,
                wifi: wifi, fitness: fitness, parking: parking, swimmingPool: swimmingPool

            });
            alert('Added');
            navigate("/admin/rooms")

        } catch (error) {
            console.log(error);


        }


    }



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
                    <label >description</label>
                    <input type="text" className="form-control" value={description} name='description' onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Ratings</label>
                    <input type="number" className="form-control" value={ratings} name='ratings' onChange={e => setRatings(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input className="form-control" type="text" id="formFile" value={images} name='images'
                        onChange={e => setImages(e.target.value)} />

                </div>
                <div className="form-group">
                    <label >Room Type</label>
                    <select className="form-control" name='roomsType' value={roomsType} onChange={e => setRoomsType(e.target.value)}>
                        <option>Choice</option>
                        <option>Single</option>
                        <option>Double</option>
                        <option>Family</option>
                    </select>
                </div>
                <div className="form-group">
                    <label >Allocator Name</label>
                    <input type="text" className="form-control" value={allocator} name='allocator' onChange={e => setAllocator(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >contactNo</label>
                    <input type="text" className="form-control" name='contactNo' value={contactNo} onChange={e => setContactNo(e.target.value)} />
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
                <div className="form-group">
                    <label >maximum Adults Allow</label>
                    <input type="number" className="form-control" name='maxAdults' value={maximumAdultsAllow}
                        onChange={e => setMaximumAdultsAllow(e.target.value)} />
                </div>
                <div className="form-group">
                    <label > maximum Childs Allow</label>
                    <input type="number" className="form-control" name='maxChilds' value={maximumChildsAllow}
                        onChange={e => setMaximumChildsAllow(e.target.value)} />
                </div>
                <br></br>
                <label >Wifi</label>

                <div className="form-check">

                    <input type="checkbox" className="form-check-input" onChange={e => setWifi(e.target.value)} name='wifi' value={wifi[0]} />
                    <label className="form-check-label" >Yes</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" onChange={e => setWifi(e.target.value)} name='wifi' value={wifi[1]} />
                    <label className="form-check-label" >No</label>
                </div>


                <label >Fitness center</label>

                <div className="form-check">

                    <input type="checkbox" className="form-check-input" onChange={e => setFitness(e.target.value)} name='fitness' value={fitness[0]} />
                    <label className="form-check-label" >Yes</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" onChange={e => setFitness(e.target.value)} name='fitness' value={fitness[1]} />
                    <label className="form-check-label" >No</label>
                </div>


                <label >Parking</label>

                <div className="form-check">

                    <input type="checkbox" className="form-check-input" onChange={e => setParking(e.target.value)} name='parking' value={parking[0]} />
                    <label className="form-check-label" >Yes</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" onChange={e => setParking(e.target.value)} name='parking' value={parking[1]} />
                    <label className="form-check-label" >No</label>
                </div>

                <label >SwimmingPool</label>

                <div className="form-check">

                    <input type="checkbox" className="form-check-input" onChange={e => setSwimmingPool(e.target.value)} name='swimmingPool' value={swimmingPool[0]} />
                    <label className="form-check-label" >Yes</label>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" onChange={e => setSwimmingPool(e.target.value)} name='swimmingPool' value={swimmingPool[1]} />
                    <label className="form-check-label" >No</label>
                </div>

                <br></br>
                <button type='submit' className='btn btn-success' >Submit</button> &nbsp;&nbsp;
                <Link to="/admin/rooms" className='btn btn-warning' >Cancel</Link>
            </form>
        </Container>

    )

}

export default AddRooms


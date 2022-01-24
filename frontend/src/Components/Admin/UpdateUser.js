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
function UpdateUser() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');




    const navigate = new useNavigate();
    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "/api/v1/register";
            await axios.post(url, {
                name: name, email: email, password: password
            });
            alert('Added');
            navigate("/admin/users")

        } catch (error) {
            console.log(error);


        }


    }
    const loadUser = async () => {
        const res = await axios.get(`/api/v1/admin/user/${id}`)
        setName(res.data.user.name)
        setEmail(res.data.user.email)
        setPassword(res.data.user.password)
      

    }

    useEffect(() => {
        loadUser();

    }, []);
    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" name='name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="text" className="form-control" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="text" className="form-control" name='password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>


                <br></br>
                <button type='submit' className='btn btn-success' >Submit</button> &nbsp;&nbsp;
                <Link to="/admin/users" className='btn btn-warning' >Cancel</Link>
            </form>
        </Container>

    )

}

export default UpdateUser

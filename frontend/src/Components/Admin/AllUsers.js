import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    padding-bottom : 170px;
      padding-top : 150px;
`;
const AllUsers = () => {

    const [data, setData] = useState([]);

    //  const [error, setError] = useState();


    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/admin/users`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },

        })

            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                //setError(err);
                console.log(err);
            })

    }, [])


    return (
        <Container>
            <Link to="/admin/addUsers" style={{ "marginLeft": "1100px", "textDecoration": "none", "color": "#D9B64E" }} >add User</Link>

            <table className="table">
                <thead className="thead-dark">
                    <tr>

                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th >PASSWORD</th>
                        <th >ROLE</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (

                        <tr key={index + 1} >
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            <td>{item.role}</td>
                            <td>
                                <button type='submit'> Update </button>
                                <button type='submit'> Delete </button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>

        </Container>

    )
}

export default AllUsers


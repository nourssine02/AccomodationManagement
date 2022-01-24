import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    padding-bottom : 170px;
      padding-top : 150px;
      padding-left: 40px;
      padding-right: 40px;
`;
const AllUsers = () => {


    const [users, setUsers] = useState([])



    useEffect(() => {
        getUsers();

    }, [])


    const getUsers = async () => {
        const res = await axios.get("/api/v1/admin/users")
        setUsers(res.data.users)

    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`/api/v1/admin/user/${id}`)
            alert('Are you sure you want to delete this ?')
            getUsers()

        } catch (error) {
            console.log(error);


        }
    }

    return (
        <Container>
            <Link to={`/admin/addUsers`} className='btn btn-info' style={{ 'marginLeft': '1000px' }} > Add User </Link>&nbsp;&nbsp;

            <table className="table">
                <thead className="thead-dark">
                    <tr>

                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th >ROLE</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (

                        <tr key={index + 1} >
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link to={`/admin/updateUser/${user._id}`} className='btn btn-success' > Update </Link>&nbsp;&nbsp;
                                <button onClick={() => deleteUser(user._id)} className='btn btn-danger'> Delete </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>



        </Container>

    )
}


export default AllUsers


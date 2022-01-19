import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddUsers = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const navigate = new useNavigate();

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/api/v1/register";
            const { user: res } = await axios.post(url, user);
            navigate("/admin/users");
            alert(res.data.message);


        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) { console.log(error.response.data.message) }

        }


    }

    return (
        <>
            ;<section className="container">
                <br></br>
                <h1>ADD USER </h1>
                <br></br>

                <div className="content">
                    {console.log("User", user)}
                    <div className="signup-cont cont">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                className="inpt"
                                required="required"
                                placeholder=" name"
                                onChange={handleChange}
                                value={user.name}
                            />
                            <label htmlFor="name">Your name</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="inpt"
                                required="required"
                                placeholder=" email"
                                onChange={handleChange}
                                value={user.email}
                            />
                            <label htmlFor="email">Your email</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="inpt"
                                required="required"
                                placeholder="password"
                                onChange={handleChange}
                                value={user.password}
                            />
                            <label htmlFor="password">Your password</label>

                            <div className="submit-wrap">
                                <input type="submit" defaultValue="Sign up" className="submit" />

                            </div>
                        </form>
                    </div>

                </div>


            </section>

        </>
    )
}

export default AddUsers

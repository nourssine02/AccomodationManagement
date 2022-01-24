import React, { useState } from "react"
import "./user.css"
import Image from '../../Assets/images/banner2.jpg';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {


    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const [error, setError] = useState("");
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
            navigate("/Login");
            alert(res.data.message);


        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) { setError(error.response.data.message) }

        }

    }
    return (
        <>
            ;<section className="container">
                <article className="half">
                    <h1>Sign Up</h1>
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
                                    placeholder="Your name"
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
                                    placeholder="Your email"
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
                                    placeholder="Your password"
                                    onChange={handleChange}
                                    value={user.password}
                                />
                                <label htmlFor="password">Your password</label>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <div className="submit-wrap">
                                    <input type="submit" defaultValue="Sign up" className="submit" />
                                    <a href="/" className="more">
                                        Terms and conditions
                                    </a>
                                </div>
                            </form>
                        </div>

                    </div>
                </article>
                <div className="half bg" >
                    <img src={Image} alt="bgRegister" />
                </div>
            </section>


        </>
    )
}

// onClick = {() => history.push("/login")}
export default Register
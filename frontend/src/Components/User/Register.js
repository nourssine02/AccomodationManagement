import React, { useState } from "react"
import "./user.css"
import Image from '../../Assets/images/banner2.jpg';
import axios from "axios"

const Register = () => {

    //const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
   // const [error, setError] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const handleSubmit = async (e) => {
    //     const { name, email, password } = user
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post('/Register', {
    //             name, email, password
    //         });
    //         res.data && window.location.replace("/Login");

    //     } catch (err) {
    //         setError(true);
    //     }

    // }
    const register = () => {
        const { name, email, password } = user
        if (name && email && password ) {
            alert("posted");
            axios.post("http://localhost:4000/api/v1/register", user)
                .then(res => {
                    alert(res.data.message)
                    //navigate.push("/login")
                })
        } else {
            alert("invlid input")
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
                            <form  method="post">
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

                                <div className="submit-wrap">
                                    <input type="submit" defaultValue="Sign up" className="submit" />
                                    <a href="/" className="more" onClick={register}>
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
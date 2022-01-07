import React, { useState } from "react"
import "./Register.css"
//import axios from "axios"
//import { useHistory } from "react-router-dom"

const Register = () => {

    //const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const register = () => {
    //     const { name, email, password, reEnterPassword } = user
    //     if (name && email && password && (password === reEnterPassword)) {
    //         axios.post("http://localhost:9002/register", user)
    //             .then(res => {
    //                 alert(res.data.message)
    //                 history.push("/login")
    //             })
    //     } else {
    //         alert("invlid input")
    //     }

    // }

    return (
        // <div className="register">
        //     {console.log("User", user)}
        //     <h1>Register</h1>
        //     <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
        //     <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
        //     <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        //     <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
        //     <div className="button" onClick={Register} >Register</div>
        //     <div>or</div>
        //     <div className="button" >Login</div>
        // </div>
        <>
            ;<section className="container">
                <article className="half">
                    <h1>Azure</h1>
                    <div className="tabs">
                        <span className="tab signin active">
                            <a href="#signin">Sign in</a>
                        </span>
                        <span className="tab signup">
                            <a href="#signup">Sign up</a>
                        </span>
                    </div>
                    <div className="content">
                        <div className="signup-cont cont">
                            <form action="#" method="post" encType="multipart/form-data">
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    className="inpt"
                                    required="required"
                                    placeholder="Your name"
                                />
                                <label htmlFor="name">Your name</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="inpt"
                                    required="required"
                                    placeholder="Your email"
                                />
                                <label htmlFor="email">Your email</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="inpt"
                                    required="required"
                                    placeholder="Your password"
                                />
                                <label htmlFor="password">Your password</label>
                                <div className="submit-wrap">
                                    <input type="submit" defaultValue="Sign up" className="submit" />
                                    <a href="/" className="more">
                                        Terms and conditions
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div className="signin-cont cont">
                            <form action="#" method="post" encType="multipart/form-data">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="inpt"
                                    required="required"
                                    placeholder="Your email"
                                />
                                <label htmlFor="email">Your email</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="inpt"
                                    required="required"
                                    placeholder="Your password"
                                />
                                <label htmlFor="password">Your password</label>
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="checkbox"
                                    defaultChecked
                                />
                                <label htmlFor="remember">Remember me</label>
                                <div className="submit-wrap">
                                    <input type="submit" defaultValue="Sign in" className="submit" />
                                    <a href="/" className="more">
                                        Forgot your password?
                                    </a>
                                </div>
                            </form>
                        </div>

                    </div>
                </article>
                <div className="half bg" >
                    <h1>image Here</h1>
                    i
                </div>
            </section>


        </>
    )
}

// onClick = {() => history.push("/login")}
export default Register
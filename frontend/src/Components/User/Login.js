import React, { useState } from "react"
import "./user.css"
import Image from '../../Assets/images/banner3.jpg';
//import axios from "axios"

const Login = ({ setLoginUser }) => {

    //const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const login = () => {
    //     axios.post("http://localhost:9002/login", user)
    //         .then(res => {
    //             alert(res.data.message)
    //             setLoginUser(res.data.user)
    //             history.push("/")
    //         })
    // }

    return (
      
    
        <>
            ;<section className="container">
                <article className="half">
                    <h1>Sign In</h1>

                    <br></br>
                    <div className="content">
                        {console.log("User", user)}
                        <div className="signin-cont cont">
                            <form action="#" method="post" encType="multipart/form-data">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="inpt"
                                    required="required"
                                    placeholder="Your email"
                                    value={user.email} 
                                    onChange={handleChange} 
                                />
                                <label htmlFor="email">Your email</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="inpt"
                                    required="required"
                                    placeholder="Your password"
                                    value={user.password}
                                     onChange={handleChange}
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
                    <img src={Image} alt="bgRegister" />
                </div>
            </section>


        </>
    )

}
export default Login
import React, { useState } from "react"
import "./user.css"
import Image from '../../Assets/images/banner3.jpg';
import axios from "axios";
import { useNavigate , Link } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState("");
    
    const [loggedIn, setLoggedIn] = useState(false);
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
            const url = "http://localhost:4000/api/v1/login";
            const {user : res} = await axios.post(url, user)
            .then((response) =>{
                localStorage.setItem('token' , response.data.token);
                setLoggedIn({loggedIn: true});
                this.props.setUser(res.data.user);
             
                navigate("/"); 
                console.log(response.data.token);
            }
            )
        } catch (error) {
            if (error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500) { setError(error.response.data.message) }

        }
        navigate("/");


    }

    if(loggedIn){
        return <Link to="/" />
    }
    return (


        <>
     
            ;<section className="container">
                <article className="half">
                    <h1>Sign In</h1>

                    <br></br>
                    <div className="content">
                        {console.log("User", user)}
                        <div className="signin-cont cont">
                            <form onSubmit={handleSubmit}  >
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
                                {error && <div className="alert alert-danger">{error}</div>}
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
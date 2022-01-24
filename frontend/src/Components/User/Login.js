import React, { useEffect, useState } from "react"
import "./user.css"
import Image from '../../Assets/images/banner3.jpg';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../Redux/Actions/userActions";
import { useAlert } from "react-alert";
import Loader from "../../Loader";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch()
    const alert = useAlert();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
        role: "",
    })
    const { error, isAuthentificated, loading } = useSelector(state => state.auth)


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    useEffect(() => {
        if (isAuthentificated) {
            navigate("/");

        }
        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch, alert, error, isAuthentificated,loading, navigate])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(user.email, user.password))


    }

  
    return (


        <>
            ;{loading ? <Loader /> : (
                <section className="container">
                    <article className="half">
                        <h1>Sign In</h1>

                        <br></br>
                        <div className="content">
                            {console.log("User", user)}
                            <div className="signin-cont cont">
                                <form onSubmit={handleSubmit}>
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
                                        <input type="submit" defaultValue="Sign in" className="submit" to={"/"} />
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


            )}


        </>
    )

}
export default Login
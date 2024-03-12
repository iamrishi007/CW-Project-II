// import React from 'react'
import { useEffect, useRef, useState } from 'react'
import "./signup.css"
import Home from './Home'
import Login from './LogIn'
import logo from "../src/assets/logo-news.png"
import { Link } from 'react-router-dom'
export const SignUp = () => {

    const name = useRef()
    const email = useRef()
    const password = useRef()
    const localSignUp = localStorage.getItem("signUp")
    const [showHome, setShowHome] = useState(false)

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
    })

    function handleClick() {
        if (name.current.value && email.current.value && password.current.value) {

            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signUp", email.current.value)

            alert('Register Successfully')
            window.location.reload()
            console.log(name.current.value, email.current.value, password.current.value);
        }
    }
    return (
        <div>
            <div id='heading'>
                <Link to={"/"}>
                    <img src={logo} alt='' id='homeImg'/>

                </Link>
            </div>
            <div id='main'>
                {showHome ? <Login /> :
                    <div className='cont'>
                        <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
                        <div>
                            <input type="text" placeholder='name' ref={name} />
                        </div>
                        <div>
                            <input type="text" placeholder='email' ref={email} />
                        </div>
                        <div>
                            <input type="Password" placeholder='password' ref={password} />
                        </div>
                        <button onClick={handleClick} >SignUp</button>
                    </div>}
            </div>
        </div>
    )
}

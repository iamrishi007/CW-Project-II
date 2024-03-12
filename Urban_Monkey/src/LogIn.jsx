import React, { useRef, useState } from 'react'
import "./login.css"
import AllProducts from './AllProducts'
import logo from "../src/assets/logo-news.png"

const Login = ({ setShowHome }) => {
     const emailRef = useRef();
     const passwordRef = useRef();
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     function handleLogin() {
          const email = emailRef.current.value
          const password = passwordRef.current.value
          const storedEmail = localStorage.getItem("email")
          const storedPassword = localStorage.getItem("password")

          if (email === storedEmail && password === storedPassword) {
               setIsLoggedIn(true)
               window.open('/allproducts')
          }
     }

     return (
          <div>


               <div className='cont'>
                    <h1>Login</h1>
                    {isLoggedIn ? <AllProducts /> :
                         <div>
                              <div>
                                   <input type="text" placeholder='email' ref={emailRef} />
                              </div>
                              <div>
                                   <input type="password" placeholder='password' ref={passwordRef} />
                              </div>
                              <button onClick={handleLogin}>Login</button>
                         </div>
                    }
               </div>
          </div>
     );
};

export default Login;

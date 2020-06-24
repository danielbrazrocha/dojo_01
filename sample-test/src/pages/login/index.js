import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

import Card from '../../components/card'
import './login.css'

const Login = () => {
    return (
        <main className="container__login">
            <Card>
                <div>
                    <h1 className="container__login-title">Sign in</h1>
                    <ul className="login__list">
                        <li><a href="#"><FontAwesomeIcon style={{ fontSize: '22px' }} color="#34495e" icon={faFacebookF} /></a></li>
                        <li><a href="#"><FontAwesomeIcon style={{ fontSize: '22px' }} color="#34495e" icon={faGooglePlusG} /></a></li>
                        <li><a href="#"><FontAwesomeIcon style={{ fontSize: '22px' }} color="#34495e" icon={faLinkedinIn} /></a></li>
                    </ul>
                </div>
                
                <p className="login__list-p">or use your email account:</p>

                <div className="container__login-form">
                    <input type="email" id="email" placeholder="Email"></input>
                    <input type="password" id="pass" placeholder="Password" name="password" minLength="8" required></input>

                    <p>Forgot your password?</p>

                    <button className="btn__signin">Sign in</button>
                </div>
            </Card>
        </main>
    )
}

export default Login
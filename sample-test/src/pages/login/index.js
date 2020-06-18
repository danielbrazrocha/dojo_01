import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

import Card from '../../components/card'
import './login.css'

const Login = () => {
    return (
        <main className="container__login">
            <Card>
                <h1 className="container__login-title">Sign in</h1>
                <ul className="login__list">
                    <li><a href="#"><FontAwesomeIcon color="black" icon={faAmazon} /></a></li>
                    <li><a href="#"><FontAwesomeIcon color="black" icon={faGithub} /></a></li>
                    <li><a href="#"><FontAwesomeIcon color="black" icon={faCodepen} /></a></li>
                </ul>
                <p>or use your email account:</p>

                <input type="email" id="email" placeholder="&#xF002; Email"></input>
                <input type="password" id="pass" placeholder="&#xF002; Password" name="password" minLength="8" required></input>

                <p>Forgot your password?</p>

                <button className="btn__signin">Sign in</button>
            </Card>
        </main>
    )
}

export default Login
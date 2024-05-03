import React from 'react'
import './styles/Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='footer'>

            <Link to={"/TermsAndConditions"}>Terms And Conditions</Link>
            <p className='copyright'>Copyright ⓒ {currentYear}</p>

        </div>
    )
}

export default Footer;
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
    const year=new Date().getFullYear()
    return (
        <div className='footer'>
            <div className='footer-data'>
                <div id='copyright-id'>
                    <p className='copyright'>copyright© {year}</p>
                </div>
                <div id='logos' >
                        <a href="https://www.linkedin.com/in/manish-singh-46b994200/"> <LinkedInIcon className="foot-icon" /></a>
                        <a href="/" onClick={() => window.location = 'mailto:manish.s15j@gmail.com'}> <MailIcon className="foot-icon"/></a>
                        <a href="https://www.instagram.com/iron_manish/" target="_"> <InstagramIcon className="foot-icon"/></a>
                        <a href="https://www.facebook.com/profile.php?id=100008625461949&mibextid=ZbWKwL" target="_"> <FacebookIcon className="foot-icon"/></a>
                </div>
            </div>
        </div>
    )
}

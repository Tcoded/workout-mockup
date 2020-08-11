import React from 'react';
import './Footer.css';

import CustomSelect from './CustomSelect/CustomSelect';

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='footer_links'>
                <div className='footer_links-company' >
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                </div>
                <div className='footer_links-account' >
                    <h4>Account</h4>
                    <p>Log In</p>
                    <p>Create Account</p>
                </div>
                <div className='footer_links-support' >
                    <h4>Support</h4>
                    <p>Help Center</p>
                    <p>Accessibility</p>
                </div>
            </div>
            <hr />
            <div className='footer_social'>
                <img src={require(`../../img/soc1.png`)} className='socIcon' />
                <img src={require(`../../img/soc2.png`)} className='socIcon' />
                <img src={require(`../../img/soc3.png`)} className='socIcon' />
                <img src={require(`../../img/soc4.png`)} className='socIcon' />
                <img src={require(`../../img/soc5.png`)} className='socIcon' />
            </div>
            <hr />
            <div className='footer_legal'>
                <p>© Joshua Trevena. All Rights Reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
            </div>
            <CustomSelect options={['English', 'Français', 'Español']}/>
        </div>
    );
};

export default Footer;
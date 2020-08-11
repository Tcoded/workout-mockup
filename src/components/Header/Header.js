import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='topNav'>
                <h4 className='topNav_Item'>Blog</h4>
                <h4 className='topNav_Item'>Nourish</h4>
                <h4 className='topNav_Item'>Shop</h4>
            </div>
            <div className='bottomNav'>
                <img src={require('../../img/headerLogo.png')} className='header_logo' />
                <div className='bottomNav_linksContainer'>
                    <h4 className='bottomNav_linkItem'>Exercise</h4>
                    <h4 className='bottomNav_linkItem'>Nutrition</h4>
                    <h4 className='bottomNav_linkItem'>Activity</h4>
                    <h4 className='bottomNav_linkItem'>Sleep</h4>
                </div>
                <button className='signUpButton'>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;
import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";




function Header() {
    return (
        <div className='header'>
                <div className='title-holder'>
                    <h1 className='title'>USE MY TECH STUFF</h1>
                </div>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <Link to='/'><p className='header__right__text'>Home</p></Link>
                <Link to='/register'><p className='header__right__text'>Become a Renter</p></Link>
                <Link to='/login'><LanguageIcon /></Link>
                <Link to='/login'><Avatar /></Link>
            </div>
        </div>
    )
}

export default Header
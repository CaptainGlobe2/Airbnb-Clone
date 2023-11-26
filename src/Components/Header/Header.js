import React from 'react'
import{Search,Language,ExpandMore} from "@mui/icons-material"
import{Avatar} from "@mui/material"
import "./Header.css"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img className='header__icon'
            src=''
            alt='RoomBooking'/ >
        </Link>
            <div className='header__center'>
                <input type="text" />
                <Search />
                </div>
                <div className="header__right">
                  <p>test</p>
                  <Language />
                  <ExpandMore />
                  <Avatar />
                </div>
                
            
    </div>
  )
}

export default Header
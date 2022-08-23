import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <div className='nav-center'>
           <div className='nav-header'>
                <img src='https://i.imgur.com/5TsXCFr.jpg' alt='logo' className='logo-pic'/>
            </div>           
        </div>
        <div className='links-container'>
            <ul className='links'>
                {
                    links.map((link) => {
                        const {id, text, icon} = link
                        return (
                            <li key={id}>
                            <Link to={`/${text}`}><button className='links-btn'>{icon}{text}</button></Link>
                            </li> 
                        )
                    })
                }
            </ul> 
        </div> 
    </nav>
  )
}

export default Navbar
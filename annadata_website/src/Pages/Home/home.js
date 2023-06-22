import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/navbar'
import bimg from '../../Assets/bimg.png'
import amol from '../../Assets/amol.png'
import drone from '../../Assets/drone.png'
import dabba from '../../Assets/dabba.png'

export default function Home() {
    return (
        <div className="home-body">
            <Navbar />
            <img className='bimg' src={bimg} alt="" />
            <img className='amol' src={amol} alt="" />
            <img className='drone' src={drone} alt="" />
            <img className='dabba' src={dabba} alt="" />
            <div className="home-header">
                <div className="header-text">
                    Digital Agriculture The Future of Indian Agriculture
                </div>
            </div>
            <div className="company-banner">
                {/* <a href="/">
                    <img src={replit} alt="" />
                </a>
                <a href="/">
                    <img src={replit} alt="" />
                </a>
                <a href="/">
                    <img src={replit} alt="" />
                </a>
                <a href="/">
                    <img src={replit} alt="" />
                </a>
                <a href="/">
                    <img src={replit} alt="" />
                </a> */}
            </div>
        </div>

    )
}

import React from 'react'
import { useState } from 'react'

function Navbar() {

    const [isActive, setIsActive] = useState(false)
    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header>
                <a href="#" className="logo">
                    <img
                        src="https://thumbs.dreamstime.com/z/car-service-logo-design-template-h-gear-automobile-repair-maintenance-assistance-spare-parts-services-isolated-vector-161663619.jpg"
                        alt="" />
                </a>

                <div className={`bx bx-menu ${isActive ? 'bx-x' : ''}`}
                onClick={toggleNavbar} id="menu-icon"></div>
                <ul className={`navbar ${isActive ? 'active' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#ride">Ride</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#review">Reviews</a></li>
                </ul>
                <div className="header-btn">
                    <a href="#" className="sign-up">Sign Up</a>
                    <a href="#" className="sign-in">Sign In</a>
                </div>
            </header>
            <section className="home" id="home">
                <div className="text">
                    <h1><span>Looking</span> to <br />rent a car</h1>
                    <p style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adi<br />pisicing elit.Fuga, ut qui.</p>
                    <div className="app-stores">
                        <img height="50px" width="50px"
                            src="https://th.bing.com/th/id/OIP.fn_qr7uzdYZfa8zVcFbNYgHaCj?w=343&h=120&c=7&r=0&o=5&pid=1.7"
                            alt="" />
                        <img height="50px" width="50px"
                            src="https://th.bing.com/th/id/OIP.C8ZpARKu8OCJQYUoUFFT6gHaCM?w=334&h=103&c=7&r=0&o=5&pid=1.7"
                            alt="" />
                    </div>
                </div>
            </section>
            <div className="form-container">
                <form action="">
                    <div className="input-box">
                        <span>Location</span>
                        <input type="search" name="" id="" placeholder="search places" />
                    </div>
                    <div className="input-box"> <span>pick-up Date</span>
                        <input type="date" name="" id="" />
                    </div>
                    <div className="input-box"> <span>Return Date</span>
                        <input type="date" name="" id="" />
                    </div>
                    <input type="submit" name="" id="" className="btn" />
                </form>
            </div>
        </>
    )
}

export default Navbar
import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            }
            else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])


    return (
        <div className={`navbar ${show && "nav_black"}`}>
            <img
                className="navabar_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
                alt="NETFLIX"
            />
            <img
                className="navabar_avtar"
                src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                alt="AVTAR"
            />
        </div>
    )
}

export default Navbar;
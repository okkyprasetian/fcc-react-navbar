import React, { useState } from 'react'
import { dataLinks, dataSocials } from '../data'
import { FaBars } from 'react-icons/fa'

function Navbar() {

    // State
    const [burger, setBurger] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-header">
                <h1>Okky <span>Prasetia</span></h1>
                <FaBars className="burger" onClick={() => setBurger(!burger)} />
            </div>
            <div className={`nav-links ${burger && 'show-container'}`}>
                <ul className="links">
                    {dataLinks.map(link => {
                        const { id, url, name } = link
                        return (
                            <li className="link" key={id}>
                                <a href={url}>{name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <ul className="nav-social">
                {dataSocials.map(social => {
                    const { id, url, icon } = social
                    return (
                        <li className="social" key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
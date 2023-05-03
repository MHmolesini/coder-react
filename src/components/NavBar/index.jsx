import React from "react";
import { CartWidget } from "../CartWidget";
import logoZahria from '../../../public/images/logos/1.webp'
import './Navbar.css'

export const NavBar = () => {
    return(
        <>
            <nav className='header'>
                <div className="header__logo"><img src={logoZahria} alt="Logo de Zahria" /></div>
                <ul className="header__navbar">
                    <li>Pantalones</li>
                    <li>Remeras</li>
                    <li>Camperas</li>
                </ul>
                <div className="header__cart"><CartWidget/>1</div>
            </nav>
        </>
    )
}
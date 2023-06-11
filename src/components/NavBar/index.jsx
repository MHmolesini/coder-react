import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget";
import logoZahria from '../../../public/images/logos/1.webp'
import './Navbar.css'

export const NavBar = () => {
    return(
        <>
            <nav className='header'>
                <Link to={`/`}>
                    <div className="header__logo"><img src={logoZahria} alt="Logo de Zahria" /></div>
                </Link>
                
                <ul className="header__navbar">
                    <li>
                        <NavLink className='link' to={`/categoria/pantalones`}>
                            Pantalones
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to={`/categoria/remeras`}>
                            Remeras
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to={`/categoria/camperas`}>
                            Camperas
                        </NavLink>
                    </li>
                </ul>
                <div className="header__cart"><CartWidget/></div>
            </nav>
        </>
    )
}
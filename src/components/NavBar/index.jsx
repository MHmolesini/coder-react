import React from "react";
import { CartWidget } from "../CartWidget";

export const NavBar = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>Pantalones</li>
                    <li>Remeras</li>
                    <li><CartWidget/>1</li>
                </ul>
            </nav>
        </>
    )
}
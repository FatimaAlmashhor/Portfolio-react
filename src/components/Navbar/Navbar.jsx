import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className="w-full z-20 ">
            <div className="flex px-12 pt-4 text-lg">
                <NavLink to='/' >
                    <div>HOME</div>
                </NavLink>
                <div className="flex-1  text-right">
                    <NavLink className="w-4" to='/projects-menu' >
                        <div  >PROJECTS</div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import '../../../styles/_mobile.menu.scss'
import Artistpoint from '../../../svg/Artistpoint'
import PrimaryMenu from './Primary.menu'

const MobileMenu = () => {
    const [toggleBurger, setToggleBurger] = useState(false)
    return (
        <div className="mobile-menu">
            <div className={toggleBurger ? "burger active" : "burger"} onClick={e=>setToggleBurger(!toggleBurger)}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </div>
            <div className={toggleBurger ? "side-menu active" : "side-menu"}>
                <ul className="main-menu">
                    <li className="main-menu__logo">
                        <a href="godjs.ga">
                            <Artistpoint />
                        </a>
                    </li>
                    <PrimaryMenu/>
                </ul>
                <button >
                    Get Started Now
                </button>
                <button className="secondary-button">
                    Login/Register
                </button>
            </div>
        </div>
    )
}

export default MobileMenu

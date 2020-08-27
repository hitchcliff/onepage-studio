import React from 'react'
import styles from './Nav.module.scss'

import OnePageLogo from '../../svg/OnePageLogo'
import MobileMenu from './inner/Mobile.menu'
import DesktopMenu from './inner/Desktop.menu'
const Nav = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <a href="godjs.ga">
                    <OnePageLogo></OnePageLogo>
                </a>
            </div>
            <DesktopMenu/>
            <MobileMenu/>
        </div>  
    )
}

export default Nav

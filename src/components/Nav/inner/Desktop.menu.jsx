import React from 'react'
import '../../../styles/_desktop.menu.scss'
import PrimaryMenu from './Primary.menu'

const DesktopMenu = () => {
    return (
        <div>
            <nav>
                <ul className="desktop-menu">
                    <PrimaryMenu/>
                </ul>
            </nav>
        </div>
    )
}

export default DesktopMenu

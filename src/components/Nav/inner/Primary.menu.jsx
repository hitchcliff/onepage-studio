import React, { useState } from 'react'
import { menuList } from "../content/Menu.list"
import IosArrowDown from 'react-ionicons/lib/IosArrowDown'

const PrimaryMenu = () => {
    const [hideShowDropdown, setHideShowDropdown] = useState(false)
    // const [whatToShow, setWhatToShow] = useState(0)
    // const dropdownItems = (dropdown) => {
    //     return (
    //         dropdown.map((item, id) => (
    //             <li key={id} className="dropdown__list">
    //                 <a href={item.link} target="_blank" rel="noopener noreferrer">
    //                     {item.name}
    //                 </a>
    //             </li>
    //         ))
    //     )
    // }

    const handleClick = (e, id) => {
       setHideShowDropdown(!hideShowDropdown);
    //    setWhatToShow(id);
    }
    
    const mapMenuList = menuList.map((item, id) => (
        <li onClick={e=>handleClick(e, id)} key={id} className={hideShowDropdown ? "main-menu__list active" : "main-menu__list"}>
            <div className="main-menu__list--links">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                </a>
                {/* {item.dropdown.length ? 
                    <IosArrowDown 
                        fontSize="20px" 
                        color="#FF841B"
                        
                    /> 
                : null} */}
            </div>
            
            {/* <ul className="dropdown-container">
                {item.dropdown.length ? dropdownItems(item.dropdown) : null}    
            </ul> */}
        </li>
        )
    )

    return(
        <>
            {mapMenuList}
        </>
    )
}

export default PrimaryMenu


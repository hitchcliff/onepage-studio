import React from 'react'
import styles from './Footer.module.scss'
import bg from '../../assets/footer.jpg'
import Artistpoint from '../../svg/Artistpoint'
const Footer = (props) => {
    
    return (
        <div className={styles.container} style={{backgroundImage: `url(${bg})`}}>
           <div className={styles.container__overlay}>
               <div className={styles.details}>
                    <Artistpoint/>
                    <ul>
                        <li>
                            <a href="godjs.ga">about</a>
                        </li>
                        <li>
                            <a href="godjs.ga">services</a>
                        </li>
                        <li>
                            <a href="godjs.ga">project</a>
                        </li>
                        <li>
                            <a href="godjs.ga">team</a>
                        </li>
                        <li>
                            <a href="godjs.ga">terms &amp; conditions</a>
                        </li>
                        <li>
                            <a href="godjs.ga">privary polict</a>
                        </li>
                        <li>
                            <a href="godjs.ga">testimonial</a>
                        </li>
                        <li>
                            <a href="godjs.ga">blog</a>
                        </li>
                        <li>
                            <a href="godjs.ga">contact</a>
                        </li>
                    </ul>
                    <p>&copy; 2020 Artistpoint is powered by <span>DotStor.</span></p>
               </div>
           </div>
        </div>
    )
}

export default Footer

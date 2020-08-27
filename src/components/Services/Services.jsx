import React from 'react'
import styles from './Services.module.scss'
const Services = (props) => {
    const {content, subtitle, maintitle, overlay1, overlay2, overlay3} = props;
    const services = content.map((item, id) => {
        return(
            <div key={id} className={styles.service}>
                {item.icon}
                <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            </div>
        )
    })
    return (
        <div className={styles.container} style={{backgroundImage: `url(${overlay3})`}}>
            <div className={styles.overlay1}>
                <img src={overlay1} alt="kevin nacario"/>
            </div>
            <div className={styles.overlay2} style={{backgroundImage: `url(${overlay2})`}}>
                <div className={styles.overlayRight}></div>
            </div>
            <div className={styles.details}>    
                <h6>{subtitle}</h6>
                <h2>{maintitle}</h2>
                <div className={styles.details__container}>
                    {services}
                </div>
            </div>
        </div>
    )
}

export default Services

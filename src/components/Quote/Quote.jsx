import React from 'react'
import styles from './Quote.module.scss'
const Quote = (props) => {
    const {title, description, image, link} = props;
    
    return (
        <div className={styles.container} style={{backgroundImage: `url(${image})`}}>
           <div className={styles.container__overlay}>
               <div className={styles.details}>
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <button>
                        <a href={link}>get a quote</a>
                    </button>
               </div>
           </div>
        </div>
    )
}

export default Quote

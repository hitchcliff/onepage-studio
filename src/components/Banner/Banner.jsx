import React from 'react'

import styles from './Banner.module.scss'


const Banner = (props) => {
    const {
        subtitle,
        maintitle,
        description,
        link,
        image
    } = props;

    return (
        <div className={styles.container} style={{backgroundImage: `url(${image})`}}>
            <div className={styles.container__overlay}>
                <h3>{subtitle}</h3>
                <h1>{maintitle}</h1>
                {
                    
                }
                <div className={styles.paragraph}>{description.map((desc, i) => <div key={i}>{desc}</div>)}</div>
                <button>
                    <a href={link}>view more</a>
                </button>
            </div>
        </div>
    )
}

export default Banner

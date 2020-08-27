import React from 'react'
import styles from './Counter.module.scss'
const Counter = (props) => {
    const {CounterContent} = props;
    const mapCounterContent = CounterContent.map((item, i) => {
        return(
            <div key={i}>
                {item.icon}
                <h5>{item.value}</h5>
                <p>{item.description}</p>
            </div>
        )
    })
    return (
        <div className={styles.container} style={{backgroundImage: `url(${props.image})`}}>
           <div className={styles.container__overlay}>
               <div className={styles.details}>
                    {mapCounterContent}
               </div>
           </div>
        </div>
    )
}

export default Counter

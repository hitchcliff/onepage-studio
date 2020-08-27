import React from 'react'
import styles from './MissionVision.module.scss'
const MissionVision = (props) => {
    const {boxes, title, subtitle, description, image} = props.props;
   
    return (
        <div className={styles.container} style={{backgroundImage: `url(${image})`}}>
            <div className={styles.overlay}></div>
            <div className={styles.details}>
                <div>
                    <h6>{subtitle}</h6>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.boxes}>
                    {
                        boxes.map((item, id) => (
                            <div key={id} >
                                {item.icon}
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MissionVision

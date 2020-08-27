import React from 'react'
import styles from './Team.module.scss'
import Carousel from '../Carousel/Carousel'
import { threeColumnCarousel } from '../../utils/_loopingUtils';
const Team = (props) => {
    const {members, title, subtitle, description} = props;
    const {slideOne, slideTwo, slideThree} = threeColumnCarousel(members, 3);

    return (
        <div className={styles.container}>
            <h6>{subtitle}</h6>
            <h2>{title}</h2>
            <p>{description}</p>
            <Carousel className={`carousel-type2`}>
                {slideOne}
                {slideTwo}
                {slideThree}
            </Carousel>
        </div>
    )
}

export default Team

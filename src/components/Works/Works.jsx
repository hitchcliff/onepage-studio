import React from 'react'
import styles from './Work.module.scss'
import Carousel from '../Carousel/Carousel'
import { threeColumnCarousel } from '../../utils/_loopingUtils';
const Works = (props) => {
    const {works, title, subtitle, description} = props;
    const {slideOne, slideTwo, slideThree} = threeColumnCarousel(works, 3);

    return (
        <div className={styles.container}>
            <h6>{subtitle}</h6>
            <h2>{title}</h2>
            <p>{description}</p>
            <Carousel className={`carousel-type1`}>
                {slideOne}
                {slideTwo}
                {slideThree}
            </Carousel>
        </div>
    )
}

export default Works

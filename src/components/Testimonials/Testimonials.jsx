import React from 'react'
import styles from './Testimonials.module.scss'
import Carousel from '../Carousel/Carousel'
import { oneColumnCarousel } from '../../utils/_loopingUtils';
import '../../styles/_slideTemplateType2.scss';
const Testimonial = (props) => {
    const {title, subtitle} = props
    const {slideOne, slideTwo, slideThree} = oneColumnCarousel(props);
    
    return (
        <div className={styles.container}>
            <h6>{subtitle}</h6>
            <h2>{title}</h2>
            <Carousel className={'carousel-type3'}>
                {slideOne}          
                {slideTwo}          
                {slideThree}          
            </Carousel>
        </div>
    )
}

export default Testimonial

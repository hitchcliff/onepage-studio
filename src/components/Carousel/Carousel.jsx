import React from 'react'
import styles from './Carousel.module.scss';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const Carousel = (props) => {
    
    const state = {
        autoplay: false,
        slider: React.createRef()
    }
   
    return (
        <div className={styles.container}>
            <RBCarousel
              className={props.className}
              animation={true}
              autoplay={state.autoplay}
              slideshowSpeed={2000}
              defaultActiveIndex={0}
              ref={state.slider}
              version={4}
            >
                {props.children}
              
            </RBCarousel>
        </div>
    )
}

export default Carousel

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export const oneColumnCarousel = ({props}) => {
    const data = props
    
    const slideOne = () => {
        return(
            <div key={data[0].name} className="slide">
                <div className="slide__image">
                    <img src={data[0].image} alt="kevin nacario"/>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                </div>
                <div className="slide__details">
                    <div className="paragraph-2">{data[0].description.map((desc, id) => <div key={id}>{desc}</div>)}</div>
                    <h4>{data[0].name}</h4>
                    <p>{data[0].job}</p>
                </div>
            </div>
        )
    } 
    const slideTwo = () => {
        return(
            <div key={data[1].name} className="slide">
                <div className="slide__image">
                    <img src={data[1].image} alt="kevin nacario"/>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                </div>
                <div className="slide__details">
                    <div className="paragraph-2">{data[1].description.map((desc, id) => <div key={id}>{desc}</div>)}</div>
                    <h4>{data[1].name}</h4>
                    <p>{data[1].job}</p>
                </div>
            </div>
        )
    } 
    const slideThree = () => {
        return(
            <div key={data[2].name} className="slide">
                <div className="slide__image">
                    <img src={data[2].image} alt="kevin nacario"/>
                    <FontAwesomeIcon icon={faQuoteLeft}/>
                </div>
                <div className="slide__details">
                    <div className="paragraph-2">{data[2].description.map((desc, id) => <div key={id}>{desc}</div>)}</div>
                    <h4>{data[2].name}</h4>
                    <p>{data[2].job}</p>
                </div>
            </div>
        )
    } 
        
    const slides = {
        slideOne: slideOne(),
        slideTwo: slideTwo(),
        slideThree: slideThree()
    }

    return slides
}

export const threeColumnCarousel = (data) => {
    const slideOne = data[0].map((item, id) => {
        return(
            <div key={id}>
                <img src={item.image} alt="kevin nacario"/>
                <h4>{item.title}</h4>
                <span>{item.subtitle}</span>
                <p>{item.description}</p>
            </div>
        )
    })
    
    const slideTwo = data[1].map((item, id) => {
        return(
            <div key={id}>
                <img src={item.image} alt="kevin nacario"/>
                <h4>{item.title}</h4>
                <span>{item.subtitle}</span>
                <p>{item.description}</p>
            </div>
        )
    })

    const slideThree = data[2].map((item, id) => {
        return(
            <div key={id}>
                <img src={item.image} alt="kevin nacario"/>
                <h4>{item.title}</h4>
                <span>{item.subtitle}</span>
                <p>{item.description}</p>
            </div>
        )
    })

    const slides = {
        slideOne, slideTwo, slideThree
    }
    
    return slides
}
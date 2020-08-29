import React from 'react'
import styles from './Home.module.scss'

// Banner
import Banner from '../Banner/Banner'
import Banner1 from '../../assets/banner1.jpg'

// Services
import Services from '../Services/Services'
import ServicesImg1 from '../../assets/services1.webp'
import ServicesImg2 from '../../assets/services2.jpg'
import ServicesContent from './Contents/Services.content.js'

// Work
import Works from '../Works/Works'
import WorkContent from './Contents/Work.content.js'

// Mission & Vision
import MissionVision from '../MissionVision/MissionVision'
import MissionVisionContent from './Contents/MissionVision.content.js'

// Team
import Team from '../Team/Team'
import TeamContent from './Contents/Team.content.js'

// Quote
import Quote from '../Quote/Quote'
import QuoteBackgroundImage from '../../assets/quote.jpg'

// Testimonial 
import Testimonial from '../Testimonials/Testimonials'
import TestimonialContent from './Contents/Testimonial.content.js'

// Counter
import Counter from '../Counter/Counter'
import CounterContent from './Contents/Counter.content'
import CounterBackgroundImage from '../../assets/counter.jpg'

// Contact Form
import ContactForm from '../ContactForm/ContactForm'
import {icons, AdditionalDetailsContent} from './Contents/AdditionalDetails.content'

const Home = () => {
    
    return (
        <div className={styles.container}>
            <Banner
                subtitle="repeat predefined"
                maintitle="developing your opportunities within your business"
                description={["Many variations of passages of Lorem Ipsum available but the ", "majority have suffered alteration in some form, by injected humour, or randomised..."]}
                link="godjs.ga/#dummy"
                image={Banner1}
            />
            <Services
                subtitle="our services"
                maintitle="what we do"
                content={ServicesContent}
                overlay1={ServicesImg1}
                overlay2={ServicesImg2}
                overlay3={Banner1}
            />
            {/* <Works
                works={WorkContent}
                subtitle="our work"
                title="finished project"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            /> */}
            <MissionVision
                props={MissionVisionContent}
            />
            <Team
                members={TeamContent}
                subtitle="our team"
                title="excellent expert advisor"
                description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock."
            />
            <Quote 
                title="Achieve your Business Plan"
                description="Vivamus commodo augue ac orci vulputate elementum maecenas quis odio."
                image={QuoteBackgroundImage}
                link="godjs.ga"
            />
            <Testimonial
                props={TestimonialContent}
                title="happy clients"
                subtitle="testimonial"
            />
            <Counter 
                CounterContent={CounterContent}
                image={CounterBackgroundImage}
            />
            <ContactForm
                AdditionalDetailsContent={AdditionalDetailsContent}
                icons={icons}
            />
        </div>
    )
}

export default Home

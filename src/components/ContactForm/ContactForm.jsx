import React, { useState } from 'react'
import styles from './ContactForm.module.scss'
const ContactForm = (props) => {
    const {AdditionalDetailsContent, icons} = props;
    const [state, setState] = useState({})

    const mapDetails = AdditionalDetailsContent.map((item, index) => (
        <div key={index}>
            <h4>{item.name}</h4>
            <p>{item.value}</p>
        </div>
    ))
    
    const mapIcons = icons.map((item, id) => (
        <li key={id}>
            <a target={item.target} href={item.link}>
                {item.icon}
            </a>
        </li>
    ))

    const handleChange = (e) => {
        e.preventDefault();
        const {value, name} = e.target;
        setState({
            [name]: value
        })
    }
    
    return (
        <div className={styles.container}>
            <div>
                <form onSubmit={e=>e.preventDefault()}>
                    <div className={styles.form__group}>
                        <input onChange={e=> handleChange(e)} value={state.value} name="name" type="text" placeholder="Name"/>
                        <input onChange={e=> handleChange(e)} value={state.value} name="email" type="email" placeholder="Email"/>
                    </div>
                    <div className={styles.form__group}>
                        <input onChange={e=> handleChange(e)} value={state.value} name="phone" type="text" placeholder="Phone Number"/>
                        <input onChange={e=> handleChange(e)} value={state.value} name="subject" type="text" placeholder="Subject"/>
                    </div>
                    <div className={styles.form__group}>
                        <textarea onChange={e=> handleChange(e)} value={state.value} name="message" type="text" rows="4" placeholder="How Can I Help?"/>
                    </div>
                    <button>
                        submit
                    </button>
                </form>
                <div>
                    {mapDetails}
                    <ul>
                        {mapIcons}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContactForm

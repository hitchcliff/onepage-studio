import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGooglePlus, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

export const AdditionalDetailsContent = [
    {
        name: "Address",
        value: "5370 S Arrowhead TRL, Baldwin, I 49304"
    },
    {
        name: "Email",
        value: "support@artistpoint.com"
    },
    {
        name: "Phone number",
        value: "+91 1234 567 098"
    },
]

export const icons = [
    {
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        link: "https://www.facebook.com/notkev1n",
        target: '_blank'
    },
    {
        icon: <FontAwesomeIcon icon={faTwitter} />,
        link: "twitter.com",
        target: '_blank'
    },
    {
        icon: <FontAwesomeIcon icon={faGooglePlus} />,
        link: "facebook.com",
        target: '_blank'
    },
    {
        icon: <FontAwesomeIcon icon={faLinkedinIn} />,
        link: "linkedin.com",
        target: '_blank'
    },
    {
        icon: <FontAwesomeIcon icon={faYoutube} />,
        link: "youtube.com",
        target: '_blank'
    }
]
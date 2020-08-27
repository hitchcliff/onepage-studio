import Counter from "../../Counter/Counter"

import React from 'react'
import IosPersonOutline from 'react-ionicons/lib/IosPersonOutline'
import IosBrowsersOutline from 'react-ionicons/lib/IosBrowsersOutline'
import IosStopwatchOutline from 'react-ionicons/lib/IosStopwatchOutline'
import IosPaperOutline from 'react-ionicons/lib/IosPaperOutline'

const CounterContent = [
    {
        icon: <IosPersonOutline fontSize="40px" color="#ffffff"/>,
        value: "100%",
        description: "satisfied customers"
    },
    {
        icon: <IosBrowsersOutline fontSize="40px" color="#ffffff"/>,
        value: "1,900",
        description: "projects completed"
    },
    {
        icon: <IosStopwatchOutline fontSize="40px" color="#ffffff"/>,
        value: "50,100",
        description: "hours worked"
    },
    {
        icon: <IosPaperOutline fontSize="40px" color="#ffffff"/>,
        value: "100%",
        description: "award winning"
    }
]

export default CounterContent
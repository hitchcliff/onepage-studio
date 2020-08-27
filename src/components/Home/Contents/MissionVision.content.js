import React from 'react';
import IosRecordingOutline from 'react-ionicons/lib/IosRecordingOutline'
import IosIonicOutline from 'react-ionicons/lib/IosIonicOutline'

import MissionVissionImage from '../../../assets/vision-mission.jpg'
import HoverBoxesImage from '../../../assets/hover.png'

const MissionVisionContent = {
    subtitle: "our work",
    title: "some form by humor",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\".",
    image: MissionVissionImage,
    hoverImage: HoverBoxesImage,
    boxes: [
        {
            title: "mission",
            icon: <IosRecordingOutline fontSize="60px" color="#FF841B"/>,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "vision",
            icon: <IosIonicOutline fontSize="60px" color="#FF841B"/>,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]
    
}

export default MissionVisionContent;
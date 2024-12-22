import React from 'react'

const HyptoWaterHeroSectionVideo = () => {

    return (

        <div className="pt-[100px] max-sm:pt-[80px] h-[900px] max-lg:h-[500px] max-sm:h-[250px] bg-blue-400 flex">

            <video 
                loop 
                autoPlay 
                muted
                className='h-full w-full object-cover'    
            >
                <source src="/HomePage/HyproWaterHeroSectionVideo.webm" type="video/webm" />
            Your browser does not support the video tag.
            </video>
            
        </div>

    )

}

export default HyptoWaterHeroSectionVideo
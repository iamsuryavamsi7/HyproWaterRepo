import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const HyproWaterGetInTouch = ({contactUsRef}) => {

    return (

        <div 
            className="bg-[#ff8e01] text-white text-center py-10 space-y-5"
            ref={contactUsRef}    
        >

            <div className="text-[40px] max-lg:text-2xl font-semibold">

                Contact Us

            </div>

            <div className="flex space-x-5 max-lg:space-x-0 max-lg:block justify-center max-lg:space-y-5">

                <div 
                    className="flex items-center text-base max-lg:justify-center cursor-pointer hover:opacity-60 active:opacity-40"
                    onClick={() => {

                        const redirectURL = `mailto:infohyprowater@gmail.com`

                        window.open(redirectURL, '_blank');

                    }}
                >

                    <IoMail 
                        className='text-lg mr-1'
                    /> infohyprowater@gmail.com

                </div>

                <div 
                    className="flex items-center text-base max-lg:justify-center cursor-pointer hover:opacity-60 active:opacity-40"
                    onClick={() => {

                        const redirectURL = `tel:+91 8317695701`

                        window.open(redirectURL, '_self');

                    }}
                >

                    <FaPhoneAlt 
                        className='text-base mr-1'
                    /> +91 8317695701

                </div>

            </div>

        </div>

    )

}

export default HyproWaterGetInTouch
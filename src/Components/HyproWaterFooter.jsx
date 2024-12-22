import React from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const HyproWaterFooter = ({scrollToProductsRef, scrollToProcessRef, scrollToAboutUsRef}) => {

    return (

        <div className="bg-[#d9db6e] text-center pb-5 pt-10">

            <div className="flex max-sm:block justify-center space-x-10 max-sm:space-x-4 mb-10">

                <div className="flex max-sm:block text-2xl max-sm:text-xl text-left max-sm:mb-5">

                    <div className="">

                        <div
                            className='transition-all cursor-pointer px-5 py-1 rounded-md'
                            onClick={scrollToProductsRef}
                        >Our Products</div>

                        <div
                            className='transition-all cursor-pointer px-5 py-1 rounded-md'
                            onClick={scrollToProcessRef}
                        >Our Process</div>
                        
                    </div>

                    <div className="">

                        <div
                            className='transition-all cursor-pointer px-5 py-1 rounded-md'
                        >Contact Us</div>

                        <div
                            className='transition-all cursor-pointer px-5 py-1 rounded-md'
                            onClick={scrollToAboutUsRef}
                        >About Us</div>

                    </div>

                </div>

                <div className="flex space-x-5 max-sm:space-x-5">

                    <div className="">

                        <FaInstagram 
                            className='text-[40px] transition-all cursor-pointer duration-200 hover:text-pink-500'
                            onClick={() => {

                                const redirectURL = 'https://www.instagram.com/hypro_water?igsh=MWs5ZDdtMm01d2k0bw==';

                                window.open(redirectURL, '_blank');

                            }}
                        />

                    </div>

                    <div className="">

                        <FaFacebook
                            className='text-[40px] transition-all cursor-pointer duration-200 hover:text-blue-600'
                            onClick={() => {

                                const redirectURL = 'https://www.facebook.com/profile.php?id=61569336627179&mibextid=ZbWKwL';

                                window.open(redirectURL, '_blank');

                            }}
                        />

                    </div>

                </div>

            </div>

            <div className="mb-7 text-sm max-sm:text-xs text-gray-600">

                PRIVACY POLICY | TERMS & CONDITIONS

            </div>

            <div className="mb-10 text-sm max-sm:text-xs text-gray-600">

                &copy; 2024 Hypro Water, a division of Searchtap Media PVT. LTD.

            </div>

            <div 
                className="text-sm max-sm:text-xs text-gray-600 active:text-black text-center flex justify-center items-center"
                onClick={() => {

                    window.open('https://www.connekt.in', '_blank')
                    
                }}    
            >

                    <div className="">

                        <AiOutlineThunderbolt />

                    </div> 

                    <div className="">

                        Powered By connekt.in

                    </div>

            </div>

        </div>

    )

}

export default HyproWaterFooter
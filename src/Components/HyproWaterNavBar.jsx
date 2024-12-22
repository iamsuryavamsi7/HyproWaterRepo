import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

{/* Hypro Water NavBar Code */}
const HyproWaterNavBar = ({scrollToProductsRef, scrollToProcessRef, homeTopRef, scrollToHomeTopRef, scrollToContactUsRef, scrollToAboutUsRef}) => {

    const [isNavBarActivated, setIsNavBarActivated] = useState(false);

    const activateNavBar = () => {

        if ( isNavBarActivated ){

            setIsNavBarActivated(false);

        }else {

            setIsNavBarActivated(true);

        }

    }

    return (

        <div 
            className="fixed z-50 flex h-[100px] max-sm:h-[80px] bg-[#d9db6e] w-full justify-between items-center"
            ref={homeTopRef}
        >

            <img 
                className='fixed bottom-5 right-5 w-[60px] max-sm:w-[50px] max-sm:h-[50px] h-[60px] animate-bounce cursor-pointer'
                src='/HomePage/whatsapp.png'
                alt='Whatsapp Image'
                onClick={() => {

                    const redirectURL = 'https://wa.me/918317695701?text=I%20Have%20doubts%20about%20Hypro%20Water';

                    window.open(redirectURL, '_blank');

                }}
            />

            <div className="ml-[400px] max-lg:ml-[50px] max-sm:ml-[20px] shrink-0">

                <img 
                    src='/HomePage/Hypro-WaterBottle.png'
                    alt='Hypro Water Company Logo'
                    className='h-[70px] w-fit max-sm:h-[50px] max-sm:w-[50px]'
                    onClick={scrollToHomeTopRef}
                />

            </div>

            <div className="flex text-gray-700 font-normal text-xl mr-[400px] max-lg:hidden">

                <div
                    className='hover:bg-orange-500 hover:text-white transition-all cursor-pointer px-5 py-1 rounded-md'
                    onClick={scrollToProductsRef}
                >Our Products</div>
                <div
                    className='hover:bg-orange-500 hover:text-white transition-all cursor-pointer px-5 py-1 rounded-md'
                    onClick={scrollToProcessRef}
                >Our Process</div>
                <div
                    className='hover:bg-orange-500 hover:text-white transition-all cursor-pointer px-5 py-1 rounded-md'
                    onClick={scrollToAboutUsRef}
                >About Us</div>
                <div
                    className='hover:bg-orange-500 hover:text-white transition-all cursor-pointer px-5 py-1 rounded-md'
                    onClick={scrollToContactUsRef}
                >Contact Us</div>

            </div>

            <div 
                className="hidden relative max-lg:block text-[35px] max-sm:text-[30px] max-lg:mr-[50px] max-sm:mr-[20px]"
            >

                <RxHamburgerMenu 
                    className='cursor-pointer'
                    onClick={activateNavBar}
                />

                {isNavBarActivated && (

                    <div className="absolute top-[67px] left-[-150px] max-sm:left-[-130px] text-xl max-sm:text-base text-center w-[200px] max-sm:w-[170px] bg-white border-[1px] border-gray-500 cursor-pointer rounded-md">

                        <div
                            className='hover:bg-yellow-300 text-orange-600 py-5'
                            onClick={() => {
                                
                                scrollToProductsRef()

                                activateNavBar();

                            }}
                        >Our Products</div>
                        <div
                            className='hover:bg-yellow-300 text-orange-600 py-5'
                            onClick={() => {

                                scrollToProcessRef();

                                activateNavBar();

                            }}
                        >Our Process</div>
                        <div
                            className='hover:bg-yellow-300 text-orange-600 py-5'
                            onClick={() => {

                                scrollToAboutUsRef();

                                activateNavBar();

                            }}
                        >About Us</div>
                        <div
                            className='hover:bg-yellow-300 text-orange-600 py-5'
                            onClick={() => {

                                scrollToContactUsRef();

                                activateNavBar();

                            }}
                        >Contact Us</div>

                    </div>

                )}

            </div>

        </div>

    )

}

export default HyproWaterNavBar
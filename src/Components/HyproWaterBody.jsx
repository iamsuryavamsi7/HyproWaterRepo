import React from 'react'

const HyproWaterBody = ({productsRef}) => {

    return (

        <div 
            className="bg-pink-700 py-10"
            ref={productsRef}    
        >

            <div className="text-center text-[45px] max-sm:text-3xl text-white mb-10">

                Our Products

            </div>

            <div className="flex justify-center">

                <div className="grid grid-cols-3 gap-x-60 max-lg:grid-cols-1 max-lg:gap-y-10">

                    <div 
                        className="hover:scale-110 transition-all duration-300"
                    >

                        <img 
                            src='/HomePage/OurProducts/HyproWaterHalfLitre.png'
                            alt='Hypro Water Bottle Products List'
                            className='h-[350px] max-sm:h-[200px] w-fit max-sm:w-[70px]'
                        />

                        <div className="text-white font-semibold text-lg text-center">

                            500 ml

                        </div>

                    </div>

                    <div className="hover:scale-110 transition-all duration-300">

                        <img 
                            src='/HomePage/OurProducts/HyproWater1Litre.png'
                            alt='Hypro Water Bottle Products List'
                            className='h-[350px] max-sm:h-[200px] w-fit max-sm:w-[70px]'
                        />

                        <div className="text-white font-semibold text-lg text-center mr-10 max-sm:mr-1">

                            1 Litre

                        </div>

                    </div>

                    <div className="hover:scale-110 transition-all duration-300">

                        <img 
                            src='/HomePage/OurProducts/HyproWater2Litre.png'
                            alt='Hypro Water Bottle Products List'
                            className='h-[350px] max-sm:h-[200px] w-fit max-sm:w-[70px]'
                        />

                        <div className="text-white font-semibold text-lg text-center">

                            2 Litres

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default HyproWaterBody
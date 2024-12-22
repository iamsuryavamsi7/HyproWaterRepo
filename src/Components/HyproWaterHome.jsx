import React, { useEffect, useRef, useState } from 'react'
import HyproWaterNavBar from './HyproWaterNavBar'
import HyproWaterBody from './HyproWaterBody'
import HyptoWaterHeroSectionVideo from './HyptoWaterHeroSectionVideo'
import HyproWaterFooter from './HyproWaterFooter'
import HyproWaterOurProcess from './HyproWaterOurProcess'
import HyproWaterGetInTouch from './HyproWaterGetInTouch'
import HyproWaterAboutUs from './HyproWaterAboutUs'

const HyproWaterHome = () => {

    const productsRef = useRef(null);

    const [offSet, setOffSet] = useState(100);

    const scrollToProductsRef = () => {
        
        const topPosition = productsRef.current.getBoundingClientRect().top + window.scrollY - offSet;
    
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth',
        });

    };
    

    const ourProcessRef = useRef(null);

    const scrollToProcessRef = () => {

        const topPosition = ourProcessRef.current.getBoundingClientRect().top + window.scrollY - offSet;

        window.scrollTo({
            top: topPosition,
            behavior: 'smooth',
        });

    }

    const aboutUsRef = useRef(null);

    const scrollToAboutUsRef = () => {

        const topPosition = aboutUsRef.current.getBoundingClientRect().top + window.scrollY - offSet;

        window.scrollTo({
            top: topPosition,
            behavior: 'smooth',
        });

    }

    const homeTopRef = useRef(null);

    const scrollToHomeTopRef = () => {

        homeTopRef.current.scrollIntoView({
            behavior: 'smooth'
        });

    }

    const contactUsRef = useRef(null);

    const scrollToContactUsRef = () => {

        contactUsRef.current.scrollIntoView({
            behavior: 'smooth'
        });

    }

    const pageWidth = window.innerWidth;

    useEffect(() => {

        setTimeout(() => {

            if ( pageWidth < 1200 ){

                setOffSet(80);
    
            }else {
    
                setOffSet(100);
    
            }

        }, 1000);

    });

    return (

        <div 
            className=""
            ref={homeTopRef}    
        >

            <HyproWaterNavBar 
                scrollToProductsRef = {scrollToProductsRef}
                scrollToProcessRef = {scrollToProcessRef}
                homeTopRef = {homeTopRef}
                scrollToHomeTopRef = {scrollToHomeTopRef}
                scrollToContactUsRef = {scrollToContactUsRef}
                scrollToAboutUsRef = {scrollToAboutUsRef}
            />

            <HyptoWaterHeroSectionVideo />

            <HyproWaterOurProcess 
                ourProcessRef = {ourProcessRef}
            />

            <HyproWaterBody 
                productsRef = {productsRef}
            />

            <HyproWaterAboutUs 
                aboutUsRef = {aboutUsRef}
            />

            <HyproWaterGetInTouch 
                contactUsRef = {contactUsRef}
            />

            <HyproWaterFooter 
                scrollToProductsRef = {scrollToProductsRef}
                scrollToProcessRef = {scrollToProcessRef}
                scrollToAboutUsRef = {scrollToAboutUsRef}
            />

        </div>

    )

}

export default HyproWaterHome
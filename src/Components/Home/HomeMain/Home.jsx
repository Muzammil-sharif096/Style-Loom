import React from 'react'
import HomeHeader from '../HomeHeader/HomeHeader'
import Crafting from '../Crafting/Crafting'
import Navigating from '../Navigating/Navigating'
import Elevate from '../Elevate/Elevate'
import Testimonial from '../Testimonial/Testimonial'
import Have from '../Have/Have'
import Ward from '../Ward/Ward'
import Slider from '../Slider/Slider'

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <Crafting />
            <Navigating />
            <Elevate />
            <Testimonial />
            <Have />
            <Ward />
            <Slider/>
        </div>
    )
}

export default Home

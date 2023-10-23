import React from 'react';
import Carousal from '../Component/Carousal/Carousal';
import Content from '../Component/Content/Content';
import Info from '../Component/Content/Info';
import { motion, useScroll } from "framer-motion";
const Home = () => {
    const { scrollYProgress } = useScroll();
    console.log('scrollYProgress', scrollYProgress)

    return (
        <>

            {/* <div className='progress-bar '> */}
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            {/* </div > */}
            <Carousal></Carousal>
            <Content></Content>
            <Info></Info>

        </>
    )
}

export default Home
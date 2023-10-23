import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

import { motion, useAnimation, useScroll } from "framer-motion";


const Content = () => {

    const { scrollYProgress } = useScroll();
    const controls = useAnimation();


    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <>
            <div className='container'>

                <div className='row mt-5 gy-5 gx-5'>
                    <div className='col-6 '>
                        {/* <div className='innerDiv' data-aos="fade-right">

                        </div> */}
                        <motion.div style={{ scaleX: scrollYProgress }} className='innerDiv'>
                            <img src='data:image/jpeg;base64,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' alt="" />
                        </motion.div>


                    </div>
                    <div className='col-6 '>
                        {/* <div className='innerDiv' data-aos="fade-left">

                        </div> */}
                        <motion.div style={{ scaleX: scrollYProgress }} className='innerDiv'>
                        </motion.div>


                    </div>
                    <div className='col-6 '>
                        {/* <div className='innerDiv' data-aos="fade-right">

                        </div> */}
                        <motion.div style={{ scaleX: scrollYProgress }} className='innerDiv'>
                        </motion.div>


                    </div>
                    <div className='col-6 '>
                        {/* <div className='innerDiv' data-aos="fade-left">

                        </div> */}
                        <motion.div style={{ scaleX: scrollYProgress }} className='innerDiv'>
                        </motion.div>


                    </div>
                    <div className='col-6 '>
                        {/* <div className='innerDiv' data-aos="fade-right">

                        </div> */}
                        <motion.div style={{ scaleX: scrollYProgress }} className='innerDiv'>
                        </motion.div>


                    </div>
                    <div className='col-6 '>
                        {/* <div className='innerDiv' data-aos="fade-left">

                        </div> */}
                        <motion.div style={{ scaleX: scrollYProgress }} className='innerDiv'>
                        </motion.div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Content
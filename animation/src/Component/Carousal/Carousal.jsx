import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from "axios"
import './Carousal.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousal() {

    const [data, setData] = useState([])

    const getImage = async () => {
        let res = await axios.get('https://api.slingacademy.com/v1/sample-data/photos')
        setData(res.data.photos)
    }
    console.log('data', data)

    useEffect(() => {
        getImage()
    }, [])
    return (
        <>
            <div className='container-fluid p-0'>

                <Swiper
                    centeredSlides={true}
                    className="mySwiper"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {
                        data.map((ele) => {
                            return (
                                <SwiperSlide><img src={ele.url} alt="image" /></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </>
    );
}

import React from 'react';
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import rating from '../../images/rating.png'
import rating0 from '../../images/rating0.png'
import male from '../../images/male.png'
import female from '../../images/female.png'

const Testimonial = () => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <div className='container mx-auto mt-48'>
            <div className="features">
                <div className='grid lg:grid-cols-1'>
                    <h1 style={{ fontWeight: 'bold' }} className='text-cyan-300 features_text'>Testimonial</h1>
                </div>
                <div className="swipers mt-5">
                    <button className='prev' ref={navigationPrevRef}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg></button>
                    <button className='next' ref={navigationNextRef}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg></button>
                    <Swiper
                        slidesPerView={2}
                        centeredSlides={true}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}

                        spaceBetween={30}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper newswiper"
                    >
                        <SwiperSlide>
                            <div className="testi_bg">
                                <div className='grid lg:grid-cols-4'>
                                    <div className="img_part">
                                        <img src={male} alt="male" />
                                    </div>
                                    <div className="conent_part col-span-3">
                                        <div class="heading">
                                            <div class="name_title">
                                                <h4 className='text-cyan-300'>John Fang </h4>
                                                <p className='mt-3'>Web Designer</p>
                                            </div>
                                            <div class="rating mt-10">
                                                <ul>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                    <li>
                                                        <img src={rating0} alt="rating0" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="des">
                                            <p className='dark:text-white mt-5'>Suspendisse ultrices at diam lectus nullam.
                                                Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testi_bg">
                                <div className='grid lg:grid-cols-4'>
                                    <div className="img_part">
                                        <img src={female} alt="female" />
                                    </div>
                                    <div className="conent_part col-span-3">
                                        <div class="heading">
                                            <div class="name_title">
                                                <h4 className='text-cyan-300'>Jenny Doe</h4>
                                                <p className='mt-3'>UI/UX Designer</p>
                                            </div>
                                            <div class="rating mt-10">
                                                <ul>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                    <li>
                                                        <img src={rating} alt="rating" />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="des">
                                            <p className='dark:text-white mt-5'>Suspendisse ultrices at diam lectus nullam.
                                                Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
import React from 'react';
import './Features.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../images/ClipboardText.png';
import slide2 from '../../images/Printer.png';
import slide3 from '../../images/ShieldCheck.png';
import { Navigation } from "swiper";
import "swiper/css/navigation";

const Features = (props) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    return (
        <div className='container mx-auto mt-48'>
            <div className="features">
                <div className='grid grid-cols-1'>
                    <h1 style={{ fontWeight: 'bold' }} className='text-cyan-300 features_text'>Features</h1>
                </div>
                <div className="swipers">
                    <button className='prev' ref={navigationPrevRef}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg></button>
                    <button className='next' ref={navigationNextRef}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg></button>
                    <Swiper
                        slidesPerView={4}
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
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="sw_slider">
                                <div className="image_part">
                                    <img src={slide1} alt="slide1" />
                                </div>
                                <div className="text_part">
                                    <h3 className='text-cyan-300' style={{ fontWeight: 'bold' }}>Search Data</h3>
                                    <p className='dark:text-white mt-5'>Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                                </div>
                                <div className="btn_pa">
                                    <button className='swipe-btn text-cyan-300 mt-8'>Learn More <span style={{ color: '#9C69E2' }}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg></span></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sw_slider">
                                <div className="image_part">
                                    <img src={slide2} alt="slide2" />
                                </div>
                                <div className="text_part">
                                    <h3 className='text-cyan-300' style={{ fontWeight: 'bold' }}>Print Out</h3>
                                    <p className='dark:text-white mt-5'>Print out service gives you convenience if someday you need print data, just edit it all and just print it.</p>
                                </div>
                                <div className="btn_pa">
                                    <button className='swipe-btn text-cyan-300 mt-8'>Learn More <span style={{ color: '#9C69E2' }}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg></span></button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="sw_slider">
                                <div className="image_part">
                                    <img src={slide3} alt="slide3" />
                                </div>
                                <div className="text_part">
                                    <h3 className='text-cyan-300' style={{ fontWeight: 'bold' }}>Security Code</h3>
                                    <p className='dark:text-white mt-5'>Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.</p>
                                </div>
                                <div className="btn_pa">
                                    <button className='swipe-btn text-cyan-300 mt-8'>Learn More <span style={{ color: '#9C69E2' }}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg></span></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Features;
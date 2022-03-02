import React from 'react';
import './Banner.css';
import bannerImg from '../../images/database.png';

const Banner = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <div className='grid lg:grid-cols-2 grid-flow-row gap-4 bn-tp mt-28'>
                    <div className="banner_content dark:text-white">
                        <h1 className='banner_head text-cyan-300'>Save your data storage here.</h1>
                        <p className='banner-p mt-10'>Insignia is a data storage area that has been
                            tested for security, so you can store your data here
                            safely but not be afraid of being stolen by others.</p>

                        <button className='primary-btn'>Learn More</button>
                    </div>
                    <div className="banner_image">
                        <img src={bannerImg} alt="bannerImg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
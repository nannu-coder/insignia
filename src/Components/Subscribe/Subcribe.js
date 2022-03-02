import React from 'react';
import './Subscribe.css'

const Subcribe = () => {
    return (
        <div className='container mx-auto mt-32'>
            <div class="subscribe">
                <div class="left_part">
                    <h3 className='text-cyan-300 cmn_heading'>Subscribe!</h3>
                    <p className='dark:text-white cmn-p'>Join our newsletter to never miss any latest news.</p>
                </div>
                <div class="right_part">
                    <input className='mail' type="text" placeholder='Enter your e-mail address here' />
                    <button className='sub dark:text-white'>Join US</button>
                </div>
            </div>
        </div>
    );
};

export default Subcribe;
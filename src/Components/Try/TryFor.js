import React from 'react';
import './TryFree.css'

const TryFor = () => {
    return (
        <div>
            <hr />
            <div className="container mx-auto mt-20">
                <div class="tryfree">
                    <div class="left_Part">
                        <h3 className=' text-cyan-300 cmn_heading'>Try for free!</h3>
                        <p className='dark:text-white cmn-p'>Get limited 1 week free try our features!</p>
                    </div>
                    <div class="right_part_try">
                        <button className='dark:text-white primary-btn'>Lern More</button>
                        <button className='dark:text-white requiest'>Requiest Demo <span style={{ marginLeft: '5px' }}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TryFor;
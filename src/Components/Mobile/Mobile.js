import React from 'react';
import './Mobile.css';
import phone from '../../images/phone.png';

const Mobile = () => {
    return (
        <div className='container mx-auto mt-40'>
            <div className="app">
                <div className='grid lg:grid-cols-2'>
                    <div className="app_content">
                        <h3 className='text-cyan-300 app_head'>Download Our App</h3>
                        <p className='dark:text-white'>The place to store various data that you can access at any time through the internet  and where you can carry it.
                            This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </p>
                        <button className='primary-btn text-white'>Download</button>
                    </div>
                    <div className="app_image">
                        <img src={phone} alt="phone" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mobile;
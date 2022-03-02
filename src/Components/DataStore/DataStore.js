import React from 'react';
import './DataStore.css';
import dbImage from '../../images/DataStore.png';

const DataStore = () => {
    return (
        <div className='container mx-auto mt-40'>
            <div className="dataStorage">
                <div className='grid lg:grid-cols-2 gap-5'>
                    <div className="dbImage">
                        <img src={dbImage} alt="dbImage" />
                    </div>
                    <div className="dbContent">
                        <h1 className='db-head text-cyan-300'>We are a high-level data storage bank</h1>
                        <p className='dark:text-white db_p mt-12'>The place to store various data that you can access at any time through the internet  and where you can carry it.
                            This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataStore;
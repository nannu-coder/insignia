import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { RiMessage2Line } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <div className="container mx-auto mt-32">
                <div className='grid lg:grid-cols-12'>
                    <div className="logo_addr col-span-4">
                        <div className="footer_heading">
                            <img src={logo} alt="" />
                        </div>
                        <p className='mt-5'>Insignia Society, 234 <br />
                            Bahagia Ave Street
                            PRBW 29281</p>
                        <p className='mt-5'>info@insignia.com <br />
                            1-232-3434 (Main)</p>
                    </div>
                    <div className="about col-span-2">
                        <div className="footer_heading">
                            <h3>About</h3>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="#">Profile</a>
                                </li>
                                <li>
                                    <a href="#">Features</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">DW News</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="help col-span-2">
                        <div className="footer_heading">
                            <h3>Help</h3>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                                <li>
                                    <a href="#">Sign Up</a>
                                </li>
                                <li>
                                    <a href="#">Guide</a>
                                </li>
                                <li>
                                    <a href="#">Reports</a>
                                </li>
                                <li>
                                    <a href="#">Q&amp;A</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social_logo col-span-4">
                        <div className="footer_heading">
                            <h3>Social Links</h3>
                        </div>
                        <div className="social_links">
                            <ul>
                                <li>
                                    <FaFacebook size={40} />
                                </li>
                                <li>
                                    <FaTwitter size={40} />
                                </li>
                                <li>
                                    <FaInstagram size={40} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom mt-28">
                    <div className="copy_Right">
                        <p className='text-cyan-300'>&copy; Insignia™, 2020. All rights reserved.</p>
                    </div>
                    <div className="message">
                        <RiMessage2Line size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
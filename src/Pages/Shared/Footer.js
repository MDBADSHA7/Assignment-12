import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { ChatAltIcon, LocationMarkerIcon, MailIcon, PhoneIcon, PhotographIcon, PlayIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <div className='footer block'>
            <div className='personalIcon'>
                <div className='flex'><a href=""><LocationMarkerIcon className='Icon'></LocationMarkerIcon></a>
                    <b>22/6 North Lalbag , Dhaka-1205 , Bangladesh</b><br />
                </div>
                <div className='flex'>
                    <a href=""><PhoneIcon className='Icon'></PhoneIcon></a><b> Helpline:   +8801735776381, +8801571359201</b>
                </div>
                <div className='flex'>
                    <a href="http://"><MailIcon className='Icon'></MailIcon></a><b> Email : foysalahamedbadsha@gmail.com</b>
                </div>
            </div>
            <div className='flex'>
                <a href="https://www.facebook.com/foysalahamed.badsha">
                    <ChatAltIcon className='Icon'></ChatAltIcon></a>
                <a href="https://i.ibb.co/x5FRY5k/131692351-1365374810482039-8592008014066332892-n.jpg"><PhotographIcon className='Icon'></PhotographIcon></a>
                <a href="https://youtu.be/rztWlsghmuE"><PlayIcon className='Icon'></PlayIcon></a>
            </div>
            <div className='copyright'>
                <h1>Copyrite <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> 2022 MD Badsha's Website</h1>
            </div>
        </div>
    );
};

export default Footer;

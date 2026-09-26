import React from 'react';
import footLogo from '@/app/assets/logo.png'
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className=' flex md:justify-between  md:flex-row  flex-col items-center space-y-2 p-7  mt-5 border-t border-[#202020]'>
            <div className='flex gap-2 '>
                <Image src={footLogo}  alt='footerLogo' className='w-5 h-auto'></Image>
                <h4 className='font-bold font-oswald'>FITLOG</h4>
           </div>
           <div>
            <p className='text-gray-300'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
           </div>
        </footer>
    );
};

export default Footer;
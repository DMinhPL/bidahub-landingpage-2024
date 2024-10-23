import Image from 'next/image';
import React from 'react';
import footerImg from '../../assets/images/logo-footer.png';

const menus = [
    {
        title: 'Giới thiệu',
        target: '#introduction',
        id: 2,
    },
    {
        title: 'Lịch trình sự kiện',
        target: '#schedule',
        id: 3,
    },
    {
        title: 'Giải thưởng',
        target: '#awards',
        id: 4,
    },
    {
        title: 'Thể thức thi đấu & Đăng ký',
        target: '#rules-register',
        id: 5,
    },
];

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='container mx-auto pt-8 lg:pt-[60px]'>
                <Image
                    src={footerImg}
                    alt='Picture of the author'
                    width={1920}
                    height={100}
                />
                <div className='menu mt-8'>
                    <ul className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between'>
                        {menus.map((menu, idx) => (
                            <li key={`item-${idx.toString()}`} className='font-bold'>
                                <button className='lg:text-2xl text-white cursor-pointer font-normal base-transition hover:text-blue-ryb'>
                                    {menu.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contact md:flex justify-between mt-12">
                    <div className="right">
                        <div>
                            <p className='text-md text-white font-normal'>Email</p>
                            <a className='text-white font-normal block mt-4 underline' href="mailto:molinari2024@bidahub.com">molinari2024@bidahub.com</a>
                        </div>
                        <div className='mt-8'>
                            <p className='text-md text-white font-normal'>Số điện thoại</p>
                            <a className='text-white font-normal block mt-4' href="tel:+84348999888">+84.348.999.888</a>
                        </div>
                    </div>
                    <div className="left mt-8 md:mt-0">
                        <p className='text-md text-white font-normal'>Mạng xã hội</p>
                        <div className="flex justify-between min-w-[289px]">
                            <a className='text-white font-normal block mt-4' href="/">Facebook</a>
                            <a className='text-white font-normal block mt-4' href="/">Instagram</a>
                            <a className='text-white font-normal block mt-4' href="/">Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright text-center text-md text-white-smoke py-5 border-t border-white mt-8'>
                © 2024 BidaHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

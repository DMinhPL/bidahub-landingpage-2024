'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
        target: '#register',
        id: 5,
    },
];

const handleScrollToSection = (target: string) => {
    if (target === '#home') {
        // If target is #home, scroll to the very top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    } else {
        const section = document.querySelector(target);
        if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            // Scroll to the section and add 50px offset
            window.scrollTo({
                top: sectionTop - 45, // Subtract 50px for the additional offset
                behavior: 'smooth',
            });
        }
    }
};

const Footer: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const handleScroll = () => {
            let currentSection = '';
            if (window.scrollY === 0) {
                // If near the top, set home as the active section
                setActiveSection('home');
                return;
            }

            // Iterate through sections to find the active one based on scroll position
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 50; // Adjusted for offset
                if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + section.clientHeight) {
                    currentSection = section.id;
                }
            });

            // Set the active section if identified
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Run the function once on mount to detect the initial active section
        handleScroll();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className='relative z-[2]'>
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
                                <button className={`lg:text-2xl text-white cursor-pointer font-normal base-transition hover:opacity-100 ${activeSection === menu.target ? 'opacity-100' : 'opacity-80'}`}
                                    onClick={() => handleScrollToSection(menu.target)}
                                >
                                    {menu.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="contact md:flex justify-between mt-12">
                    <div className="right">
                        <div>
                            <p className='text-md text-white font-normal opacity-50'>Email</p>
                            <a className='text-white font-normal block mt-4 underline' href="mailto:molinari2024@bidahub.com">molinari2024@bidahub.com</a>
                        </div>
                        <div className='mt-8'>
                            <p className='text-md text-white font-normal opacity-50'>Số điện thoại</p>
                            <a className='text-white font-normal block mt-4' href="tel:+84348999888">+84.348.999.888</a>
                        </div>
                    </div>
                    <div className="left mt-8 md:mt-0">
                        <p className='text-md text-white font-normal opacity-50'>Mạng xã hội</p>
                        <div className="flex justify-between min-w-[289px]">
                            <a className='text-white font-normal block mt-4' href="https://www.facebook.com/profile.php?id=61567087604562&mibextid=LQQJ4d">Facebook</a>
                            <a className='text-white font-normal block mt-4' href="/">Instagram</a>
                            <a className='text-white font-normal block mt-4' href="/">Youtube</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright text-center text-md text-white-smoke py-5 border-t border-white border-opacity-[0.2] mt-8'>
                © 2024 BidaHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

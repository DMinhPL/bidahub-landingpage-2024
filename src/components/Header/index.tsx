'use client';
import React, { useState } from 'react';
import logoImg from '../../assets/images/Logo.png';
import Image from 'next/image';
import LanguageSwitcher from '../LanguageSwicher';
import whiteLogoImg from '../../assets/images/white-logo.png';
import burgerIcon from '../../assets/images/ic-burger.png';
import closeMenuIcon from '../../assets/images/ic-close-menu.png';
import bgMenuMobile from '../../assets/images/bg-menu-mobile.png';
import useWindowDimensions from '@/hooks/useWindowDemensions';

const headerMenu = [
    {
        title: 'Trang chủ',
        target: '#home',
        id: 1,
    },
    {
        title: 'Giới thiệu',
        target: '#about',
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


const Header: React.FC = () => {
    const { width } = useWindowDimensions();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className='o-header fixed z-50 top-6 left-0 right-0'>
            <div className="container mx-auto">
                <div className="o-header__wrapper bg-white px-4 py-4 lg:py-[22px] rounded-2xl shadow-sm flex items-center justify-between">
                    {/* Logo  */}
                    <div className="o-header__logo">
                        <Image
                            src={logoImg}
                            alt="Picture of the author"
                            width={149}
                            height={36}
                            placeholder="blur" // Optional blur-up while loading
                        />
                    </div>
                    {/* Navigation  */}
                    <nav className='hidden xl:block'>
                        <ul className='flex items-center'>
                            {
                                headerMenu.map((menu, idx) => (
                                    <li key={`item-${idx.toString()}`} className='font-bold'>
                                        <p className='hover:text-blue-ryb base-transition cursor-pointer text-md 2xl:text-base px-2 xl:px-4'> {menu.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    {/* Language  */}
                    <div className='flex items-center gap-6'>
                        <button className='button-base-style h-12 bg-mindaro text-persian-blue font-bold px-2 2xl:px-6 xl:py-3 rounded-[46px] min-w-32 uppercase hidden xl:block'>
                            liên hệ
                        </button>
                        <LanguageSwitcher />
                        <div className="burger w-11 h-11 items-center justify-center flex xl:hidden">
                            <button onClick={() => setOpenMenu(true)}>
                                <Image
                                    src={burgerIcon}
                                    alt="Picture of the author"
                                    width={28}
                                    height={28}
                                    placeholder="blur" // Optional blur-up while loading
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Side menu Mobile  */}
            {
                width <= 1024 && (
                    <div
                        className={`side-menu px-5 py-7 fixed top-0 left-0 w-full h-full z-10 bg-white transform transition-transform duration-300 ease-in-out ${openMenu ? 'translate-x-0' : '-translate-x-full'
                            } xl:hidden`}
                    >
                        <div className="bg absolute z-[1] top-0 left-0 w-full h-full">
                            <Image
                                src={bgMenuMobile}
                                alt="Picture of the author"
                                width={375}
                                height={667}
                                className='w-full h-full object-cover'
                                placeholder="blur" // Optional blur-up while loading
                            />
                        </div>
                        <div className="body relative z-[2]">
                            <div className="flex items-center justify-between">
                                <Image src={whiteLogoImg}
                                    alt="Picture of the author"
                                    width={149}
                                    height={36}
                                    placeholder="blur"
                                />
                                <div className="close">
                                    <button onClick={() => setOpenMenu(false)}>
                                        <Image
                                            src={closeMenuIcon}
                                            alt="Picture of the author"
                                            width={44}
                                            height={44}
                                            placeholder="blur" // Optional blur-up while loading
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="menu mt-12">
                                <ul>
                                    {
                                        headerMenu.map((menu, idx) => (
                                            <li key={`item-${idx.toString()}`} className='mb-5'>
                                                <p className='text-white base-transition cursor-pointer text-2xl px-2 xl:px-4 h-16'> {menu.title}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    );
};

export default Header;
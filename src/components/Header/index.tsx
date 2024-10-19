import React from 'react';
import logoImg from '../../assets/images/Logo.png';
import Image from 'next/image';
import LanguageSwitcher from '../LanguageSwicher';

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
    return (
        <header className='o-header fixed z-50 top-6 left-0 right-0'>
            <div className="container mx-auto">
                <div className="o-header__wrapper bg-white px-4 py-[22px] rounded-2xl shadow-sm flex items-center justify-between">
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
                    <nav>
                        <ul className='flex items-center'>
                            {
                                headerMenu.map((menu, idx) => (
                                    <li key={`item-${idx.toString()}`} className='font-bold'>
                                        <p className='hover:text-blue-ryb base-transition cursor-pointer px-2 xl:px-4'> {menu.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    {/* Language  */}
                    <div className='flex items-center gap-6'>
                        <button className='button-base-style h-12 bg-mindaro text-persian-blue font-bold px-6 py-3 rounded-[46px] uppercase'>
                            liên hệ
                        </button>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
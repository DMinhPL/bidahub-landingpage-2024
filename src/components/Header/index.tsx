'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import bgMenuMobile from '../../assets/images/bg-menu-mobile.png';
import burgerIcon from '../../assets/images/ic-burger.png';
import closeMenuIcon from '../../assets/images/ic-close-menu.png';
import logoImg from '../../assets/images/Logo.png';
import whiteLogoImg from '../../assets/images/white-logo.png';
import LanguageSwitcher from '../LanguageSwicher';
import Link from 'next/link';

const headerMenu = [
  {
    title: 'Trang chủ',
    target: '#home',
    id: 1,
  },
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

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
    <header className='o-header fixed z-50 top-6 left-0 right-0'>
      <div className='container mx-auto'>
        <div className='o-header__wrapper bg-white px-4 py-4 lg:py-[22px] xl:h-[80px] rounded-2xl shadow-sm flex items-center justify-between'>
          {/* Logo  */}
          <div className='o-header__logo'>
            <Link href='/'>
              <Image
                src={logoImg}
                alt='Picture of the author'
                width={149}
                height={36}
                placeholder='blur' // Optional blur-up while loading
              /></Link>
          </div>
          {/* Navigation  */}
          <nav className='hidden xl:block'>
            <ul className='flex items-center'>
              {headerMenu.map((menu, idx) => (
                <li key={`item-${idx.toString()}`} className='font-bold'>
                  <p
                    className={`hover:text-blue-ryb base-transition cursor-pointer text-md 2xl:text-base px-2 xl:px-4 ${activeSection === menu.target.slice(1) ? 'text-blue-ryb' : 'text-raisin-black'}`}
                    onClick={() => handleScrollToSection(menu.target)}
                  >
                    {' '}
                    {menu.title}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
          {/* Language  */}
          <div className='flex items-center gap-6'>
            <button className='button-base-style h-12 bg-mindaro text-persian-blue font-bold px-2 2xl:px-6 xl:py-3 rounded-[46px] min-w-32 uppercase hidden xl:block'>
              liên hệ
            </button>
            <LanguageSwitcher />
            <div className='burger w-11 h-11 items-center justify-center flex xl:hidden'>
              <button onClick={() => setOpenMenu(true)}>
                <Image
                  src={burgerIcon}
                  alt='Picture of the author'
                  width={28}
                  height={28}
                  placeholder='blur' // Optional blur-up while loading
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Side menu Mobile  */}
      <div
        className={`side-menu px-5 py-7 fixed top-0 left-0 w-full h-full z-10 bg-white transform transition-transform duration-300 ease-in-out ${openMenu ? 'translate-x-0' : '-translate-x-full'
          } xl:hidden`}
      >
        <div className='bg absolute z-[1] top-0 left-0 w-full h-full'>
          <Image
            src={bgMenuMobile}
            alt='Picture of the author'
            width={375}
            height={667}
            className='w-full h-full object-cover'
            placeholder='blur' // Optional blur-up while loading
          />
        </div>
        <div className='body relative z-[2] overflow-auto h-full'>
          <div className='flex items-center justify-between'>
            <Image
              src={whiteLogoImg}
              alt='Picture of the author'
              width={149}
              height={36}
              placeholder='blur'
            />
            <div className='close'>
              <button onClick={() => setOpenMenu(false)}>
                <Image
                  src={closeMenuIcon}
                  alt='Picture of the author'
                  width={44}
                  height={44}
                  placeholder='blur' // Optional blur-up while loading
                />
              </button>
            </div>
          </div>
          <div className='menu mt-12'>
            <ul>
              {headerMenu.map((menu, idx) => (
                <li key={`item-${idx.toString()}`} className='mb-5'>
                  <p className='text-white base-transition cursor-pointer text-2xl px-2 xl:px-4 h-16'>
                    {' '}
                    {menu.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className='contact'>
            <div className='item'>
              <div className='label text-white opacity-50 text-md'>Email</div>
              <div className='value text-white mt-4'>
                <a href="mailto:molinari2024@bidahub.com">molinari2024@bidahub.com</a>
              </div>
            </div>
            <div className='item mt-8'>
              <div className='label text-white opacity-50 text-md'>Số điện thoại</div>
              <div className='value text-white mt-4'>
                <a href="tel:84348999888">+84.348.999.888</a>
              </div>
            </div>
            <div className='item mt-8'>
              <div className='label text-white opacity-50 text-md'>Mạng xã hội</div>
              <div className='value text-white mt-4 flex gap-3'>
                <a href="/" target='_blank'>Facebook</a>
                <a href="/" target='_blank'>Instagram</a>
                <a href="/" target='_blank'>Youtube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

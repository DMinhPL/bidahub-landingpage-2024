import React from 'react';
import bannerContentImg from '../../assets/images/banner-content.png';
import bannerContentMobileImg from '../../assets/images/banner-content-mobile.png';
import bgTextImg from '../../assets/images/banner-text.png';
import bgTextMobileImg from '../../assets/images/banner-text-mobile.png';
import bgLines from '../../assets/images/bgLine.png';
import bgLinesMobile from '../../assets/images/bgLine-mobile.png';
import Image from 'next/image';

interface Props {
    lang?: string;
}

const Banner: React.FC<Props> = ({
    lang = ''
}) => {
    const address = lang === 'en' ? 'Rach Mieu Sports Complex - 1 Hoa Phuong Street, Ward 2, Phu Nhuan District, Ho Chi Minh City' : 'Nhà thi đấu rạch miễu - 1 Hoa Phượng, Phường 2, Phú Nhuận, Hồ Chí Minh'
    return (
        <div className='banner'>
            <div className='container mx-auto'>
                <div className="banner__content max-w-[768px] xl:max-w-[1218px] mx-auto">
                    <div className='flex flex-col items-center'>
                        <Image
                            src={bannerContentImg}
                            alt="Picture of the author"
                            width={958}
                            height={371}
                            className='hidden xl:block'
                            placeholder="blur" // Optional blur-up while loading
                        />
                        <Image
                            src={bannerContentMobileImg}
                            alt="Picture of the mobile"
                            width={958}
                            height={371}
                            className='block xl:hidden'
                            placeholder="blur" // Optional blur-up while loading
                        />
                        <div className="heading mt-6 max-w-[830px] mx-auto">
                            <h1 className='font-svnDay text-2xl lg:text-[30px] text-center uppercase'>
                                {lang === 'en' ? `
                                Billiards Carom 3C Tournament
                                Molinari Open
                                Ho Chi Minh City 2024
                                ` : `
                                Giải Billiards Carom 3C
                                Molinari Mở Rộng
                                TP Hồ Chí Minh 2024
                                `}</h1>
                        </div>
                        <div className='px-6 py-4 lg:py-6 text-white mt-12 relative overflow-hidden'>
                            <Image src={bgTextImg} alt="text img" className='absolute top-0 left-0 w-full h-full z-[1] hidden xl:block' />
                            <Image src={bgTextMobileImg} alt="text img" className='absolute top-0 h-full left-0 w-full z-[1] block xl:hidden' />
                            <div className='relative z-10 font-svnDay'>
                                <h3 className='text-lg lg:text-2xl font-bold text-center uppercase'>{address}</h3>
                                <p className='text-lg lg:text-2xl mt-2 font-bold text-center uppercase'>11/12/2024 - 17/12/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-3 xl:mt-10">
                <Image src={bgLines} className='w-full hidden xl:block' alt="line" />
                <Image src={bgLinesMobile} className='w-full block xl:hidden' alt="line mobile" />
            </div>
        </div>
    );
};

export default Banner;

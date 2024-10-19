import React from 'react';
import bannerContentImg from '../../assets/images/banner-content.png';
import Image from 'next/image';

const Banner: React.FC = () => {
    return (
        <div className='banner'>
            <div className="banner__content max-w-[1218px] mx-auto">
                <div className='flex flex-col items-center'>
                    <Image
                        src={bannerContentImg}
                        alt="Picture of the author"
                        width={958}
                        height={371}
                        placeholder="blur" // Optional blur-up while loading
                    />
                    <div className='py-6 px-12 bg-blue-ryb text-white mt-12 rounded-3xl'>
                        <h3 className='text-2xl font-bold text-center'>Nhà thi đấu rạch miễu - 1 Hoa Phượng, Phường 2, Phú Nhuận, Hồ Chí Minh</h3>
                        <p className='text-2xl font-bold text-center'>09/12/2024 - 15/12/2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
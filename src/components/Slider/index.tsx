'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Slider, { Settings } from 'react-slick';

interface SlideItem {
    imageSrc: StaticImageData;
    title: string;
    subtitle: string;
}

interface SliderProps {
    slides: SlideItem[];
}

const CustomSlider: React.FC<SliderProps> = ({ slides }) => {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '8%',
        arrows: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '7%'
                }
            },
        ]
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <div className="relative w-[288px] lg:w-[360px] flex flex-col justify-center">
                            <Image
                                width={360}
                                height={420}
                                src={slide.imageSrc}
                                alt={slide.title}
                                className="w-full h-full object-cover rounded-2xl aspect-360/420"
                            />
                            <div className="mt-6">
                                <h3 className="text-white font-svnDay text-2xl">{slide.title}</h3>
                                <p className="text-white text-lg mt-1 font-normal">{slide.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomSlider;

'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import icArrowLeft from '../../assets/images/ic-arrow-left.png';
import icArrowRight from '../../assets/images/ic-arrow-right.png';
import Slider, { Settings } from 'react-slick';

// Define custom arrow components
interface ArrowProps {
    className?: string;
    onClick?: () => void;
}
const PrevArrow = (props: ArrowProps) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow w-14 h-14 lg:w-16 lg:h-16 left-[32%] md:left-[40%] xl:left-[44%] flex items-center justify-center bg-inchworm rounded-full hover:bg-inchworm`} // Add custom styling class here
            style={{
                position: 'absolute',
                top: 'calc(100% + 40px)',
                zIndex: 1,
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <Image src={icArrowLeft.src} className='w-6 h-6 lg:w-8 lg:h-8' width={32} height={32} alt="Previous" />
        </div>
    );
};

const NextArrow = (props: ArrowProps) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow w-14 h-14 lg:w-16 lg:h-16 right-[32%] md:right-[40%] xl:right-[44%] flex items-center justify-center bg-inchworm rounded-full hover:bg-inchworm`} // Add custom styling class here
            style={{
                position: 'absolute',
                top: 'calc(100% + 40px)',
                transform: 'translateY(-50%)',
                zIndex: 1,
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <Image src={icArrowRight.src} className='w-6 h-6 lg:w-8 lg:h-8' width={32} height={32} alt="Next" />
        </div>
    );
};

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
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '8%',
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true, // Enable custom arrows
        prevArrow: <PrevArrow />, // Custom prev arrow
        nextArrow: <NextArrow />, // Custom next arrow
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
        <div className="relative pb-14 lg:pb-16">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={`item-${index.toString()}`} className="w-full flex-shrink-0">
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

'use client';
import React, { useEffect, useState } from 'react';
import Section from '../Section';
import timeboxImg from '../../assets/images/timebox.png';
import bgRegisterNumber from '../../assets/images/bg-register-number.png';
import Image from 'next/image';

interface TimeBoxProps {
    value: string;
    label: string;
    lang?: string;
}

const TimeBox: React.FC<TimeBoxProps> = ({ value, label }) => {
    return (
        <div className='timebox w-[76px] md:w-[150px] xl:w-[200px] h-[66px] md:h-[117px] xl:h-[140px] relative flex flex-col justify-center items-center'>
            <Image
                src={timeboxImg}
                alt='timebox img'
                className='absolute top-0 left-0 w-full h-full z-[1]'
            />
            <div className='relative z-[2] text-center'>
                <p className='font-svnDay text-3xl md:text-5xl'>{value}</p>
                <p className='font-medium uppercase text-md md:text-base xl:mt-2'>{label}</p>
            </div>
        </div>
    );
};

const Countdown: React.FC<{
    lang?: string
}> = ({
    lang = ''
}) => {
        const REGISTER_NUMBER = 300;
        const calculateTimeLeft = () => {
            const targetDate = new Date('2024-12-11T08:00:00'); // Set your target date here
            const currentTime = new Date();
            const difference = targetDate.getTime() - currentTime.getTime();

            if (difference <= 0) {
                return {
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                };
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            return {
                days: days < 10 ? `0${days}` : days.toString(),
                hours: hours < 10 ? `0${hours}` : hours.toString(),
                minutes: minutes < 10 ? `0${minutes}` : minutes.toString(),
                seconds: seconds < 10 ? `0${seconds}` : seconds.toString(),
            };
        };
        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

        useEffect(() => {
            const timer = setInterval(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearInterval(timer);
        }, []);

        return (
            <Section title={lang === 'en' ? 'Event countdown' : 'Đếm ngược sự kiện'} className='countdown' id='countdown'>
                <div className='countdown flex gap-2 md:gap-8 justify-center'>
                    <TimeBox value={timeLeft.days} label={lang === 'en' ? 'Days' : 'Ngày'} />
                    <TimeBox value={timeLeft.hours} label={lang === 'en' ? 'Hours' : 'Giờ'} />
                    <TimeBox value={timeLeft.minutes} label={lang === 'en' ? 'Minutes' : 'Phút'} />
                    <TimeBox value={timeLeft.seconds} label={lang === 'en' ? 'Seconds' : 'Giây'} />
                </div>
                <div className="address text-center mt-10">
                    <p className='font-svnDay text-2xl'>{lang === 'en' ? 'Rach Mieu Sports Complex - 1 Hoa Phuong Street, Ward 2, Phu Nhuan District, Ho Chi Minh City' : 'Nhà thi đấu rạch miễu - 1 Hoa Phượng, Phường 2, Phú Nhuận, Hồ Chí Minh'}</p>
                    <p className='font-svnDay text-2xl mt-6'>11/12/2024 - 17/12/2024</p>
                </div>
                <div className="register-number max-w-[521px] mx-auto mt-10 relative">
                    <Image src={bgRegisterNumber} alt="bg register number" className='absolute top-0 left-0 w-full h-full z-[1]' />
                    <div className="relative z-[2] grid grid-cols-2 font-svnDay">
                        <p className='text-blue-ryb text-lg lg:text-2xl max-w-[250px] px-4 py-5 lg:px-7 lg:py-4'>{lang === 'en' ? 'Registered Athletes' : 'Số VĐV đã đăng ký tham gia giải đấu'}</p>
                        <p className='text-[56px] lg:text-[80px] -mt-2 lg:mt-0 text-center px-4 py-5 lg:px-7 lg:py-4'>{REGISTER_NUMBER}</p>
                    </div>
                </div>
            </Section>
        );
    };

export default Countdown;

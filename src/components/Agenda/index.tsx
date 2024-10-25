import React from 'react';
import Section from '../Section';
import icArrowRight from '../../assets/images/ic-arrow-right.png';
import Image from 'next/image';

interface AgendaItems {
    date: string;
    description: string;
    additionalInfo?: string;
}

const timelineItems = [
    {
        date: '21/10/2024',
        description: 'Mở cổng đăng kí cho vận động viên',
    },
    { date: '05/12/2024', description: 'Đóng cổng đăng kí tham gia thi đấu' },
    {
        date: '06/12/2024',
        description: 'Tổ trọng tài bốc thăm và chia nhóm thi đấu',
    },
    {
        date: '09/12/2024 - 14/12/2024',
        description: 'Khai mạc và giới thiệu giải đấu',
        additionalInfo: 'Thi đấu vòng bảng và vòng loại trực tiếp',
    },
    {
        date: '15/12/2024',
        description: 'Chung kết và trao giải',
        additionalInfo: 'Lễ bế mạc',
    },
];

const Agenda: React.FC = () => {
    const items: AgendaItems[] = [...timelineItems];
    return (
        <Section
            title='Lịch trình sự kiện'
            className='schedule scrollToSection'
            id='schedule'
        >
            <div className='w-full mx-auto'>
                <div className='block lg:flex lg:flex-wrap'>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`p-1 ${index === 0 || index === 1 || index === 2 ? 'lg:w-1/3' : 'lg:w-1/2'
                                }`}
                        >
                            <div className={`relative lg:min-h-[300px] h-full p-6 bg-navy text-white rounded-3xl flex flex-col justify-between`}>
                                <h3 className='text-3xl font-svnDay text-inchworm min-h-[70px] xl:min-h-[86px] border-b border-[#1a2483]'>
                                    {item.date}
                                </h3>
                                <div className='mt-12 lg:mt-0'>
                                    <p className='mt-4 text-lg'>{item.description}</p>
                                    {item.additionalInfo && (
                                        <p className='mt-2 text-lg'>{item.additionalInfo}</p>
                                    )}
                                    {
                                        index === 0 && (
                                            <p>
                                                Đăng kí trực tuyến tại website &nbsp;
                                                <a href="http://bidahub.com/molinari2024" className='text-lg underline' target='_blank'> bidahub.com/molinari2024</a>
                                            </p>
                                        )
                                    }
                                </div>
                                {index !== 2 && index !== 4 && (
                                    <div className={`absolute hidden lg:flex inset-y-0 z-[1] items-center ${index === 3 ? '-right-[5.5%]' : '-right-[9%]'}`}>
                                        <div
                                            className={`custom-prev-arrow w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-inchworm rounded-full hover:bg-inchworm`} // Add custom styling class here
                                        >
                                            <Image
                                                src={icArrowRight.src}
                                                className='w-6 h-6 lg:w-8 lg:h-8'
                                                width={32}
                                                height={32}
                                                alt='Previous'
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <p className='font-medium italic mt-4'>
                Lưu ý: Thông tin chi tiết về lịch thi đấu và bốc thăm sẽ được cập nhật
                trên Facebook chính thức của giải đấu (Molinari Tournament 2024) trước
                ngày khai mạc.
            </p>
        </Section>
    );
};

export default Agenda;
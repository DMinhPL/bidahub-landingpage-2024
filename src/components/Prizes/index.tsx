import React from 'react';
import Section from '../Section';

const Prizes: React.FC = () => {
    const data = [
        {
            title: '1 Giải Nhất',
            totalPrize: '260',
            currency: 'Triệu đồng',
            details: [
                'Tiền mặt: 206 triệu',
                '1 Kuro CMI 5',
                '1 Ngọn Lancia',
                '1 Túi cơ Molinari 3x6 cứng',
            ],
        },
        {
            title: '1 Giải Nhì',
            totalPrize: '130',
            currency: 'Triệu đồng',
            details: [
                'Tiền mặt: 81,5 triệu',
                '1 Kuro CMI 4',
                '1 Ngọn Lancia',
                '1 Túi cơ Molinari 3x6 mềm',
            ],
        },
        {
            title: '2 Giải Ba',
            totalPrize: '52',
            currency: 'Triệu đồng',
            details: [
                'Tiền mặt: 18,5 triệu',
                '1 Kuro CMI 3',
                '1 Túi cơ Molinari 2x4 cứng',
            ],
        },
        {
            title: '4 Giải vòng loại 8',
            totalPrize: '45',
            currency: 'Triệu đồng',
            details: [
                'Điểm thưởng: 13.000.000 điểm (tương ứng với 13 triệu)',
                '1 Kuro CMI 2',
            ],
        },
        {
            title: '8 Giải vòng loại 16',
            totalPrize: '29,2',
            currency: 'Triệu đồng',
            details: [
                'Điểm thưởng: 5.200.000 điểm (tương ứng với 5,2 triệu)',
                '1 Kuro CMI 1',
            ],
        },
        {
            title: '16 Giải vòng loại 32',
            totalPrize: '12,2',
            currency: 'Triệu đồng',
            details: [
                'Điểm thưởng: 5.200.000 điểm (tương ứng với 5,2 triệu)',
                '1 Ngọn Molinari',
            ],
        },
        {
            title: '32 Giải vòng loại 64',
            totalPrize: '5,2',
            currency: 'Triệu đồng',
            details: ['Điểm thưởng: 5.200.000 điểm (tương ứng với 5,2 triệu)'],
        },
    ];

    return (
        <Section title='Giải thưởng' className='awards scrollToSection' id='awards'>
            <div className='panel font-svnDay text-2xl lg:text-[36px] bg-inchworm text-raisin-black rounded-3xl lg:p-6 py-6 px-4 text-center w-full'>
                Tổng giá trị giải thưởng lên đến{' '}
                <span className='text-neon-fuchsia'>1,4 tỷ đồng</span>
            </div>
            <div className='list flex flex-wrap mt-2'>
                {data.map((item, i) => (
                    <div
                        key={i}
                        className={`${i === 0 || i === 1 || i === 2 ? 'lg:w-1/3' : 'md:w-1/2 xl:w-1/4'
                            } w-full p-1`}
                    >
                        <div
                            className={`${i === 0 || i === 1 || i === 2
                                    ? 'border border-inchworm shadow-inchworm shadow-inner'
                                    : ''
                                } relative lg:min-h-[420px] h-full p-6 bg-navy text-white rounded-3xl flex flex-col`}
                        >
                            <div className='top border-b border-[#1a2483] pb-4'>
                                <h3 className='text-4xl font-svnDay text-center mx-auto leading-[50px]'>
                                    {item.title}
                                </h3>
                                <div className='flex gap-6 items-center mt-6 justify-center'>
                                    <p className='text-lg w-[82px] text-right'>
                                        Tổng giải thưởng lên đến
                                    </p>
                                    <div className='total text-2xl text-inchworm font-svnDay -mt-2'>
                                        <p className='text-[64px] leading-[70px]'>
                                            {item.totalPrize}
                                        </p>
                                        <p className='text-2xl -mt-2'>{item.currency}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <p className='text-2xl font-svnDay'>Bao gồm:</p>
                                <ul className='mt-6 pl-6 list-disc'>
                                    {item.details.map((detail, index) => (
                                        <li className='leading-[2]' key={index}>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='panel font-svnDay text-2xl lg:text-[36px] bg-inchworm text-raisin-black rounded-3xl lg:p-6 py-6 px-4 text-center w-full mt-2'>
                Giải phụ
            </div>
            {/* 2 Giải seri cao nhất  */}
            <div
                className={`relative lg:min-h-[420px] h-full p-6 bg-navy text-white rounded-3xl flex flex-col mt-2`}
            >
                <div className='top border-b border-[#1a2483] pb-4'>
                    <h3 className='text-4xl font-svnDay text-center mx-auto leading-[50px]'>
                        2 Giải seri cao nhất
                    </h3>
                    <div className='flex gap-6 items-center mt-6 justify-center'>
                        <p className='text-lg w-[82px] text-right'>
                            Tổng giải thưởng lên đến
                        </p>
                        <div className='total text-2xl text-inchworm font-svnDay -mt-2'>
                            <p className='text-[64px] leading-[70px]'>33,5</p>
                            <p className='text-2xl -mt-2'>Triệu đồng</p>
                        </div>
                    </div>
                </div>
                <div className='mt-6'>
                    <p className='text-2xl font-svnDay'>Bao gồm:</p>
                    <ul className='mt-6 pl-6 list-disc'>
                        <li className='leading-[2]'>1 Kuro CMI One</li>
                        <li className='leading-[2]'>1 Ngọn Lancia</li>
                        <li className='leading-[2]'>1 Túi cơ Molinari 2x4 cứng</li>
                    </ul>
                </div>
            </div>
            <div className='mt-4 italic'>
                <p>
                    Lưu ý: Điểm thưởng này là đơn vị hỗ trợ thanh toán được dùng riêng
                    biệt trên hệ thống của BidaHub.
                </p>
                <p>
                    Mỗi 1 đơn vị điểm thưởng có giá trị hỗ trợ thanh toán tương đương 1
                    VND (1 điểm = 1 VND), áp dụng cho các giao dịch mua sắm trên hệ thống
                    của BidaHub (bao gồm website bidahub.com và Zalo Mini App)
                </p>
                <p>Điểm này không thể chuyển nhượng hoặc quy đổi thành tiền mặt.</p>
            </div>
        </Section>
    );
};

export default Prizes;
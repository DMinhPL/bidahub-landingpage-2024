import React from 'react';

const Info: React.FC = () => {
    return (
        <div className='info pb-6 border-b border-gainsboro'>
            <h3 className='font-svnDay text-2xl lg:text-3xl text-blue-ryb'>
                Thông tin về giải đấu
            </h3>
            <ul className='mt-4 list-disc pl-6'>
                <li className='text-raisin-black'>
                    Lệ phí thi đấu:{' '}
                    <strong className='text-neon-fuchsia'>1.300.000 VND/1 vé</strong>{' '}
                    <i>(mỗi vận động viên chỉ được mua 1 vé).</i>
                </li>
                <li className='text-raisin-black'>
                    Mỗi vận động viên sẽ nhận được túi quà tặng tương ứng 1.300.000 VND
                    khi check in.
                </li>
            </ul>
            <p className='text-lg font-semibold mt-4'>
                Đấu theo từng vòng loại , bốc thăm ngẫu nhiên (Bốc thăm thi đấu dự
                kiến vào ngày 06/12/2024)
            </p>
            {/* ====== */}
            <p className='font-medium mt-4'>Cách tính điểm</p>
            <ul className='mt-4 list-disc pl-6'>
                <li className='text-raisin-black'>
                    Vòng loại: 30 điểm/ 40 lượt cơ/ 2 lần xin thời gian
                </li>
                <li className='text-raisin-black'>
                    Từ V16 - bán kết: 40 điểm không giới hạn lượt cơ/ 2 lần xin thời
                    gian.
                </li>
                <li>
                    Chung kết: 50 điểm không giới hạn lượt cơ/ 2 lần xin thời gian.
                </li>
            </ul>
            {/* ====== */}
            <p className='font-medium mt-4'>Trang phục thi đấu:</p>
            <ul className='mt-4 list-disc pl-6'>
                <li className='text-raisin-black'>
                    Quần tây hoặc kaki dài tối màu (Không được mặc quần Jean).
                </li>
                <li className='text-raisin-black'>
                    Mang giày.

                </li>
                <li>
                    Áo thun có cổ ( không mặc áo sọc ngang và caro).
                </li>
            </ul>
            <p className='mt-4 text-lg font-semibold uppercase'>BAN TỔ CHỨC SẼ CÓ THÔNG BÁO SỚM NHẤT TRONG TRƯỜNG HỢP CÓ ĐIỀU CHỈNH HAY THAY ĐỔI XẢY RA.</p>
        </div>
    );
};

export default Info;
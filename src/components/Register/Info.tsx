import React from 'react';

const Info: React.FC<{
    lang?: string
}> = ({
    lang = '',
}) => {
        return (
            <div className={`info pb-6 ${lang === 'en' ? '' : 'border-b border-gainsboro'}`}>
                <h3 className='font-svnDay text-2xl lg:text-3xl text-ua-blue'>
                    {lang === 'en' ? 'Tournament Information' : 'Thông tin về giải đấu'}
                </h3>
                <p className='text-lg mt-4'>
                    {lang === 'en' ? `Billiards Carom 3C Tournament Molinari Open Ho Chi Minh City 2024` : `Giải Billiards Carom 3C Molinari Mở Rộng TP Hồ Chí Minh 2024`}
                </p>
                <p className='text-lg'>
                    {lang === 'en' ? 'Venue: Rach Mieu Stadium - 1 Hoa Phuong, Ward 2, Phu Nhuan, Ho Chi Minh City' : 'Địa điểm tổ chức: Nhà thi đấu rạch miễu - 1 Hoa Phượng, Phường 2, Phú Nhuận, Hồ Chí Minh'}
                </p>
                <p className='text-lg'>
                    {lang === 'en' ? 'Date: 11/12/2024 – 17/12/2024' : 'Thời gian: 11/12/2024 – 17/12/2024'}
                </p>
                <ul className='mt-4 list-disc pl-6'>
                    <li className='text-raisin-black'>
                        {lang === 'en'
                            ? 'Registration Fee: '
                            : 'Lệ phí thi đấu: '}
                        <strong className='text-neon-fuchsia'>{lang === 'en' ? '1,300,000 VND per ticket ' : '1.300.000 VND/1 vé'}</strong>{' '}
                        <i>{lang === 'en' ? '(each athlete is limited to one ticket).' : '(mỗi vận động viên chỉ được mua 1 vé).'}</i>
                    </li>
                    <li className='text-raisin-black'>
                        {lang === 'en'
                            ? 'Upon check-in, each athlete will receive a gift bag valued at 1,300,000 VND.'
                            : 'Mỗi vận động viên sẽ nhận được túi quà tặng tương ứng 1.300.000 VND khi check in.'}
                    </li>
                </ul>
                <p className='text-lg font-semibold mt-4'>
                    {lang === 'en'
                        ? 'Each round will follow a knockout format with random draws (the draw is scheduled for December 9, 2024). Tournament information will be posted on the official '
                        : 'Đấu theo từng vòng loại, bốc thăm ngẫu nhiên (Bốc thăm thi đấu dự kiến vào ngày 09/12/2024 - Thông tin trận đấu sẽ được đăng trên '}
                    {lang === 'en' && <>
                        <a href="https://www.facebook.com/profile.php?id=61567087604562&mibextid=LQQJ4d" className='font-semibold text-ua-blue' target="_blank">Molinari HCMC 2024 </a>
                        Facebook page.
                    </>}
                    {lang !== 'en' && <a href="https://www.facebook.com/profile.php?id=61567087604562&mibextid=LQQJ4d" className='font-semibold text-ua-blue' target="_blank">Facebook Molinari HCMC 2024.</a>}
                </p>
                {/* ====== */}
                <p className='font-medium mt-4'>{lang === 'en' ? 'Scoring System' : 'Cách tính điểm'}</p>
                <ul className='mt-4 list-disc pl-6'>
                    <li className='text-raisin-black'>
                        {lang === 'en'
                            ? 'Qualifying Rounds: 30 points / 40 innings / 2 timeouts'
                            : 'Vòng loại: 30 điểm/ 40 lượt cơ/ 2 lần xin thời gian'}
                    </li>
                    <li className='text-raisin-black'>
                        {lang === 'en'
                            ? 'Round of 16 to Semi-finals: 40 points / unlimited innings / 2 timeouts'
                            : 'Từ V16 - bán kết: 40 điểm không giới hạn lượt cơ/ 2 lần xin thời gian.'}
                    </li>
                    <li>
                        {lang === 'en'
                            ? 'Finals: 50 points / unlimited innings / 2 timeouts'
                            : 'Chung kết: 50 điểm không giới hạn lượt cơ/ 2 lần xin thời gian.'}
                    </li>
                </ul>
                {/* ====== */}
                <p className='font-medium mt-4'>{lang === 'en' ? 'Dress Code' : 'Trang phục thi đấu:'}</p>
                <ul className='mt-4 list-disc pl-6'>
                    <li className='text-raisin-black'>
                        {lang === 'en'
                            ? 'Dark-colored dress pants or khakis (jeans are not permitted).'
                            : 'Quần tây hoặc kaki dài tối màu (Không được mặc quần Jean).'}
                    </li>
                    <li className='text-raisin-black'>
                        {lang === 'en'
                            ? 'Closed-toe shoes.'
                            : 'Mang giày.'}
                    </li>
                    <li>
                        {lang === 'en'
                            ? 'Collared polo shirts (no horizontal stripes or plaid patterns).'
                            : 'Áo thun có cổ ( không mặc áo sọc ngang và caro).'}
                    </li>
                </ul>
                <p className='mt-4 text-lg font-semibold uppercase'> {lang === 'en'
                    ? 'The organizing committee will promptly announce any adjustments or changes if they occur.'
                    : 'BAN TỔ CHỨC SẼ CÓ THÔNG BÁO SỚM NHẤT TRONG TRƯỜNG HỢP CÓ ĐIỀU CHỈNH HAY THAY ĐỔI XẢY RA.'}</p>
            </div>
        );
    };

export default Info;

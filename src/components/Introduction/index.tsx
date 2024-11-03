import React from 'react';
import blomdahl from '../../assets/images/players/blomdahl.png';
import phuongVinh from '../../assets/images/players/phuong-vinh.png';
import quyetChien from '../../assets/images/players/quyet-chien.png';
import Section from '../Section';
import Slider from '../Slider';

const slides = [
    { imageSrc: quyetChien, title: 'Trần Quyết Chiến', subtitle: '2x World Cup Winner' },
    { imageSrc: blomdahl, title: 'Torbjorn Blomdahl', subtitle: '6x World Champion' },
    { imageSrc: phuongVinh, title: 'Bao Phương Vinh', subtitle: 'Vô địch - World Cup City' },
];

const Introduction: React.FC<{
    lang?: string
}> = ({
    lang = ''
}) => {
        return (
            <Section
                title={lang === 'en' ? 'Introduction' : 'Giới thiệu'}
                className='introduction scrollToSection'
                id='introduction'
            >
                <div className='max-w-[991px] mx-auto'>
                    <p className='text-lg font-medium'>
                        {lang === 'en' ? `
              The Molinari Carom 3C Open HCMC 2024 Tournament is a premier event for skilled and passionate billiard players.
              It offers athletes a chance to compete, showcase their best skills, and perform on an international stage.
              This tournament is more than a competition; it’s a celebration of the billiard community,
              promoting sportsmanship and a shared love for this refined game.
            `: `
            Giải Billiards Carom 3C Molinari Mở Rộng TP Hồ Chí Minh 2024 với nội dung thi đấu Carom 3 băng là sân chơi chuyên nghiệp dành cho các cơ
            thủ tài năng và đam mê bida, nơi các vận động viên sẽ có cơ hội tranh tài, phô diễn kỹ năng đỉnh cao và
            thi đấu trong một môi trường chuyên nghiệp. Sự kiện không chỉ là cuộc thi đấu hấp dẫn, mà còn là dịp
            để kết nối cộng đồng yêu bida, thúc đẩy tinh thần thể thao và lan tỏa niềm đam mê với môn chơi tinh tế này.
            `}
                    </p>
                    <p className='text-lg font-medium mt-5'>
                        {lang === 'en' ? `
              This year's tournament promises to have the participation of top names from the world and Vietnam.
            `: `
              Giải đấu năm nay hứa hẹn sẽ có sự góp mặt của những tên tuổi hàng đầu thế giới và Việt Nam.
            `}
                    </p>
                    <ul className='text-lg font-medium pl-6 mt-5 list-disc'>
                        <li>
                            {lang === 'en' ? `Torbjörn Blomdahl – A legend with 46 World Cup titles and 7 world championships.` : `Torbjörn Blomdahl - huyền thoại với 46 danh hiệu World Cup billiards carom 3 băng và 7 lần vô địch thế giới.`}
                        </li>
                        <li className='mt-4'>
                            {lang === 'en' ? `Tran Quyet Chien – Vietnam’s pride with four World Cup 3-cushion titles.` : `Trần Quyết Chiến - niềm tự hào của Việt Nam với ba lần đăng quang tại World Cup Carom 3 băng do Liên đoàn Billiard Thế giới tổ chức.`}
                        </li>
                        <li className='mt-4'>
                            {lang === 'en' ? `Bao Phuong Vinh – The first young Vietnamese player to win the 3-cushion world title in 2023.` : `Bao Phương Vinh - cơ thủ trẻ Việt Nam đầu tiên vô địch thế giới ở nội dung carom 3 băng vào năm 2023.`}

                        </li>
                        <li className='mt-4'>
                            {lang === 'en' ? `Plus, many other outstanding players from across Vietnam.` : `Và nhiều cơ thủ xuất sắc đến từ mọi miền Tổ quốc Việt Nam.`}

                        </li>
                    </ul>
                    <p className='text-lg font-medium mt-5'>
                        {lang === 'en' ? `
             Join us at Molinari Carom 3C Open HCMC 2024  to witness elite players in thrilling matches and experience the pinnacle of the sport. Register now and get ready for an unforgettable event!
             ` : `
             Hãy đăng ký tham gia và sẵn sàng chờ đón Giải Billiards Carom 3C Molinari Mở Rộng TP Hồ Chí Minh 2024 - sự kiện đỉnh cao nơi các cơ thủ tài ba tỏa sáng và tranh tài trong những trận đấu mãn nhãn!
             `}
                    </p>
                </div>
                <div className="slider mt-6 lg:mt-[60px]">
                    <Slider slides={slides} />
                </div>
            </Section>
        );
    };

export default Introduction;

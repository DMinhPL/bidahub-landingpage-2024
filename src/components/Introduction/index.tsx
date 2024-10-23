import React from 'react';
import Section from '../Section';
import Slider from '../Slider';
import quyetChien from '../../assets/images/players/quyet-chien.png';
import blomdahl from '../../assets/images/players/blomdahl.png';
import phuongVinh from '../../assets/images/players/phuong-vinh.png';
import quocNguyen from '../../assets/images/players/quoc-nguyen.png';

const slides = [
    { imageSrc: quyetChien, title: 'Trần Quyết Chiến', subtitle: '2x World Cup Winner' },
    { imageSrc: blomdahl, title: 'Torbjorn Blomdahl', subtitle: '6x World Champion' },
    { imageSrc: phuongVinh, title: 'Bao Phương Vinh', subtitle: 'Vô địch - World Cup City' },
    { imageSrc: quocNguyen, title: 'Nguyễn Quốc Nguyện', subtitle: 'Vô địch - World Cup City' },
    { imageSrc: quyetChien, title: 'Trần Quyết Chiến', subtitle: '2x World Cup Winner' },
    { imageSrc: blomdahl, title: 'Torbjorn Blomdahl', subtitle: '6x World Champion' },
    { imageSrc: phuongVinh, title: 'Bao Phương Vinh', subtitle: 'Vô địch - World Cup City' },
    { imageSrc: quocNguyen, title: 'Nguyễn Quốc Nguyện', subtitle: 'Vô địch - World Cup City' },
];

const Introduction: React.FC = () => {
    return (
        <Section
            title='Giới thiệu'
            className='introduction scrollToSection'
            id='introduction'
        >
            <div className='max-w-[991px] mx-auto'>
                <p className='text-lg font-medium'>
                    Molinari Tournament 2024 với nội dung thi đấu Carom 3 băng là sân chơi
                    chuyên nghiệp dành cho các cơ thủ tài năng và đam mê bida, nơi các vận
                    động viên sẽ có cơ hội tranh tài, phô diễn kỹ năng đỉnh cao và thi đấu
                    trong một môi trường chuyên nghiệp. Sự kiện không chỉ là cuộc thi đấu
                    hấp dẫn, mà còn là dịp để kết nối cộng đồng yêu bida, thúc đẩy tinh
                    thần thể thao và lan tỏa niềm đam mê với môn bida.
                </p>
                <p className='text-lg font-medium mt-5'>
                    Molinari Tournament 2024 hứa hẹn quy tụ các cơ thủ hàng đầu thế giới
                    và Việt Nam, bao gồm những tên tuổi nổi bật như:
                </p>
                <ul className='text-lg font-medium pl-6 mt-5 list-disc'>
                    <li>
                        Torbjörn Blomdahl - huyền thoại với 46 danh hiệu World Cup billiards
                        carom 3 băng và 7 lần vô địch thế giới.
                    </li>
                    <li className='mt-4'>
                        Trần Quyết Chiến - niềm tự hào của Việt Nam với ba lần đăng quang
                        tại World Cup Carom 3 băng do Liên đoàn Billiard Thế giới tổ chức.
                    </li>
                </ul>
                <p className='text-lg font-medium mt-5'>
                    Hãy sẵn sàng tham gia và chờ đón Molinari Tournament 2024 - sự kiện
                    đỉnh cao nơi các cơ thủ tài ba tỏa sáng và tranh tài trong những trận
                    đấu mãn nhãn!
                </p>
            </div>
            <div className="slider mt-6 lg:mt-[60px]">
                <Slider slides={slides} />
            </div>
        </Section>
    );
};

export default Introduction;

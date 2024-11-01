'use client';
import React, { useState } from 'react';
import Section from '../Section';

// Define the type for each FAQ item
type FAQItem = {
    question: string;
    answer: string;
    date: string;
};

const FAQComponent: React.FC = () => {
    // Sample FAQ data
    const faqData: FAQItem[] = [
        {
            question: 'Tôi có thể hủy đăng ký và nhận lại phí không?',
            date: 'Thứ 3, 23/08/2024',
            answer: `Giải đấu không chấp nhận hủy và hoàn phí sau khi đã đăng ký và thanh toán. Nếu không thể tham gia thi đấu, bạn vẫn có thể đến xác nhận có mặt (check-in) trong thời gian tổ chức giải để nhận quà từ ban tổ chức.`,
        },
        {
            question: 'Lệ phí đăng ký là bao nhiêu và phương thức thanh toán như thế nào?',
            answer: 'Lệ phí đăng ký là 1.300.000 VND. Bạn có thể thanh toán trực tuyến bằng cách quét mã QR hoặc chuyển khoản trực tiếp qua tài khoản ngân hàng. Thông tin tài khoản sẽ được hiển thị ở trang đăng ký. Kết quả đăng ký và thanh toán sẽ được gửi qua tin nhắn Zalo khi ban tổ chức xác nhận bạn đã thanh toán thành công.',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Cách thức đăng ký giải đấu?',
            answer: 'Bạn có thể đăng ký trực tuyến qua liên kết đăng ký của chúng tôi và điền đầy đủ thông tin yêu cầu. Sau khi hoàn tất, bạn sẽ nhận được tin nhắn Zalo xác nhận đăng ký thành công và hướng dẫn chi tiết về quy trình tiếp theo. </br><b> Lưu ý:</b> Vui lòng sử dụng số điện thoại đã đăng ký Zalo khi đăng ký tham gia để đảm bảo bạn nhận được tin nhắn từ Ban tổ chức một cách nhanh chóng và thuận tiện.',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Tôi cần mang theo những gì khi đến tham gia?',
            answer: 'Vui lòng mang theo chứng minh thư/hộ chiếu (đã dùng đăng ký tham dự giải đấu), trang phục và dụng cụ thi đấu cần thiết, và bất kỳ vật dụng cá nhân nào bạn cần cho giải đấu.',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Có quy định nào về trang phục không?',
            answer: 'Có, chúng tôi yêu cầu các vận động viên mặc trang phục thể thao phù hợp và theo quy định của giải đấu. Trang phục thi đấu: <ul><li>Quần tây hoặc kaki dài tối màu (Không được mặc quần Jean).</li><li>Mang giày.</li><li>Áo thun có cổ ( không mặc áo sọc ngang và caro).</li></ul>',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Giải đấu sẽ diễn ra ở đâu và lịch thi đấu như thế nào?',
            answer: 'Lịch thi đấu chính thức đã được công bố như trên trang đăng ký. Ngoài ra thông tin lịch thi đấu cụ thể và thông báo sẽ được cập nhật trên trang facebook <a style="font-weight: bold" href="https://www.facebook.com/profile.php?id=61567087604562&mibextid=LQQJ4d" target="_blank">Molinari HCMC 2024</a> của giải đấu. Hãy like và theo dõi facebook để cập nhật tin tức mới nhất.',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Có thể thay đổi thông tin đăng ký sau khi đã đăng ký không?',
            answer: 'Sau khi đã đăng ký, bạn có thể thay đổi một số thông tin trước ngày 06/12/2024 bằng cách liên hệ ban tổ chức. </br> Sau thời gian này, thông tin sẽ được cố định để phục vụ công tác chuẩn bị giải đấu.',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Tôi có thể xem kết quả thi đấu ở đâu?',
            answer: 'Kết quả thi đấu sẽ được cập nhật trên trang facebook <a style="font-weight: bold" href="https://www.facebook.com/profile.php?id=61567087604562&mibextid=LQQJ4d" target="_blank">Molinari HCMC 2024</a> của giải đấu. </br> Hãy bấm like và theo dõi facebook để cập nhật.',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Điểm thưởng trên giải thưởng là gì? Có thể quy đổi thành tiền mặt?',
            answer: 'Điểm thưởng này là đơn vị hỗ trợ thanh toán được dùng riêng biệt trên hệ thống của BidaHub. </br>Mỗi 1 đơn vị điểm thưởng có giá trị hỗ trợ thanh toán tương đương 1 VND (1 điểm = 1 VND) và có thể sử dụng cho </br>các giao dịch mua sắm trên hệ thống của BidaHub (bao gồm website bidahub.com và Zalo Mini App). </br>Điểm thưởng không thể chuyển nhượng hoặc quy đổi thành tiền mặt.',
            date: 'Thứ 3, 23/08/2024',
        },
    ];

    // State to manage which FAQ is currently open
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Toggle the FAQ item
    const toggleFAQ = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <Section
            title='Câu hỏi thường gặp'
            className='faq scrollToSection'
            id='faq'
        >
            <div className="max-w-[1128px] mx-auto">
                {faqData.map((faq, index) => (
                    <div key={index} className={`border-b border-white border-opacity-20  md:py-10 ${index === 0 ? 'pt-0 pb-6' : 'py-6'}`}>
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left"
                        >
                            <p className="text-lg md:text-2xl font-svnDay">{faq.question}</p>
                            <p className={`${openIndex === index ? '' : 'opacity-50'} font-medium`}>{faq.date}</p>

                        </button>
                        {openIndex === index && (
                            <div className="text-md md:text-base pt-6 md:pt-10" dangerouslySetInnerHTML={{ __html: faq.answer }}>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FAQComponent;

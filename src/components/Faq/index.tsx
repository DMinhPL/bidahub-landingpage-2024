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
            question: 'Nếu không tham gia nữa, tôi có được hoàn tiền không?',
            date: 'Thứ 3, 23/08/2024',
            answer: `Các VDV đăng nhập vào BidaHub và đăng ký tham gia giải đấu thông qua landing page (trang web dành cho đăng ký giải đấu) được liên kết với Zalo, App, hoặc Website trực tuyến. Ban tổ chức gửi email xác nhận đăng ký bao gồm mã số tham dự (hoặc QR code), thời gian địa điểm check in, các yêu cầu chuẩn bị (trang thiết bị thi đấu, quần áo). Email sẽ gửi kèm tài liệu hướng dẫn check in, luật thi đấu, quy tắc giải đấu.`,
        },
        {
            question: 'Các hình thức thanh toán là gì?',
            answer: 'Thanh toán qua thẻ ngân hàng, ví điện tử, hoặc tiền mặt tại địa điểm tổ chức.',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Cách thức đăng ký giải đấu?',
            answer: 'Đăng ký giải đấu qua landing page của BidaHub hoặc qua các ứng dụng liên kết như Zalo, App.',
            date: 'Thứ 3, 23/08/2024',
        },
        {
            question: 'Độ tuổi tham gia giải đấu là bao nhiêu?',
            answer: 'Người tham gia phải từ 18 tuổi trở lên.',
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
                    <div key={index} className="border-b border-white border-opacity-20 py-10">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left"
                        >
                            <p className="text-2xl font-svnDay">{faq.question}</p>
                            <p className={`${openIndex === index ? '' : 'opacity-50'} font-medium`}>{faq.date}</p>

                        </button>
                        {openIndex === index && (
                            <div className="text-xl pt-10">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FAQComponent;

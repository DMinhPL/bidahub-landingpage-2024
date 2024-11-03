'use client';
import { REGISTER_RESPONSE_SESSION } from '@/utils/constants';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Success: React.FC = () => {
    const router = useRouter();
    useEffect(() => {
        const sessionData = sessionStorage.getItem(REGISTER_RESPONSE_SESSION);
        if (sessionData) {
            sessionStorage.removeItem(REGISTER_RESPONSE_SESSION);
        }
    }, [])
    return (
        <div className='container mx-auto pb-[60px]'>
            <div className='p-8 bg-white rounded-3xl'>
                <h2 className='text-ua-blue text-2xl lg:text-3xl font-svnDay text-center'>
                    Đăng ký thành công
                </h2>
                <div className='panel rounded-xl bg-alice-blue p-4 mt-4'>
                    <p className='text-gunmetal'>
                        Chúng tôi đã nhận được thông tin đăng ký của bạn và đang trong quá trình xác nhận thanh toán.
                        <p>Chúng tôi sẽ sớm gửi thông tin chi tiết qua tin nhắn Zalo hoặc email của bạn khi quá trình thanh toán hoàn tất (trong vòng 1 đến 2 ngày làm việc kể từ ngày nhận được thanh toán - không bao gồm Thứ 7, chủ nhật và ngày lễ).</p>
                    </p>
                    <p className='text-gunmetal mt-4'>
                        Để cập nhật thông tin giải đấu xin vui lòng theo dõi facebook <a className='text-brilliant-azure font-semibold' href="https://www.facebook.com/molinari.carom3c.hcmc/" target='_blank'>Molinari HCMC 2024.</a>
                    </p>
                    <p className='text-gunmetal mt-4'>
                        Cảm ơn bạn đã đăng ký! Chúc bạn có một trải nghiệm tuyệt vời cùng chúng tôi.
                    </p>
                    <p className='text-gunmetal mt-4'>
                        Mọi thắc mắc xin vui lòng liên hệ với chung tôi qua Hotline: <a className='font-medium text-brilliant-azure' href="tel:0949696696">0949.696.696</a> hoặc Email: <a href="mailto:molinari@bidahub.com" className='text-brilliant-azure font-medium'>molinari@bidahub.com</a> để được hỗ trợ!
                    </p>
                </div>
                <div className='back flex justify-center'>
                    <button
                        onClick={() => router.push('/')}
                        className={`h-[60px] mt-4 rounded-lg bg-ua-blue border border-ua-blue text-white capitalize text-lg p-[18px] min-w-[240px] base-transition flex justify-center items-center`}
                    >
                        Quay lại trang chủ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;

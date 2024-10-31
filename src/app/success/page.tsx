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
                <p className='text-gunmetal text-lg font-medium text-center mt-4'>
                    Chúc mừng! Bạn đã đăng ký thành công.
                </p>
                <div className='panel rounded-xl bg-alice-blue p-4 mt-4'>
                    <p className='text-gunmetal'>
                        Chúng tôi đã nhận được thông tin đăng ký của bạn. Xác nhận chi tiết
                        sẽ được gửi qua email và Zalo. Hãy kiểm tra email và tin nhắn Zalo
                        để biết thêm thông tin.
                        <span className='block'>
                            Chúng tôi rất mong được gặp bạn tại giải!
                        </span>
                    </p>
                    <p className='text-gunmetal mt-4'>
                        Mọi thắc mắc và thông tin thêm và giải đấu, vui lòng liên hệ với
                        chung tôi qua Hotline: 0949.696.696 hoặc Email: molinari@bidahub.com
                        để được hỗ trợ!
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

'use client';
import { RegisterResponseType } from '@/api/type';
import Checkbox from '@/components/Checkbox';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Payment = () => {
    const [confirmChecked, setConfirmChecked] = useState(false);
    const [registrationData, setRegistrationData] = useState<RegisterResponseType>();
    const router = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        // Retrieve and parse the data
        const data = {
            FullName: params.get('FullName') || '',
            CCCD: params.get('CCCD') || '',
            Phone: params.get('Phone') || '',
            DateOfBirth: params.get('DateOfBirth') || '',
            Email: params.get('Email') || '',
            Gender: params.get('Gender') || '',
            Address: params.get('Address') || '',
            ReferralSource: params.get('ReferralSource') || '',
            Club: params.get('Club') || '',
            Note: params.get('Note') || '',
        };
        if (data.FullName && data.CCCD && data.Phone && data.DateOfBirth && data.Address) {
            setRegistrationData(data);
        } else {
            // Redirect back if no data found
            router.push('/');
        }
    }, [router]);

    const onPayment = () => {
        console.log('dsfasdf', registrationData);
    }
    // console.log(registrationData);
    return (
        <div className='container mx-auto'>
            <div className='p-8 bg-white rounded-3xl'>
                <div className='pb-4 border-b border-gainsboro'>
                    <h2 className='text-ua-blue text-2xl lg:text-3xl font-svnDay'>
                        Thông tin đã đăng ký
                    </h2>
                    <ul className='text-raisin-black mt-4'>
                        <li className='mb-3'>
                            <p>
                                Họ và tên: <strong>{registrationData?.FullName}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                Giới tính: <strong>{registrationData?.Gender}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                CCCD: <strong>{registrationData?.CCCD}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                Số điện thoại: <strong>{registrationData?.Phone}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                {' '}
                                Năm sinh: <strong>{registrationData?.DateOfBirth}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                {' '}
                                Địa chỉ: <strong>{registrationData?.Address}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                Email: <strong>{registrationData?.Email}</strong>
                            </p>
                        </li>
                    </ul>
                    <div className="edit-info max-w-[275px] mx-auto mt-4">
                        <button className='h-12 bg-white border border-brilliant-azure rounded-lg hover:text-white hover:bg-cool-black text-gunmetal flex justify-center items-center py-3 px-4 font-medium capitalize base-transition'>
                            thay đổi thông tin đăng ký
                        </button>
                    </div>
                </div>
                {/* ===================== */}
                <div className='py-4 border-b border-gainsboro'>
                    <h2 className='text-ua-blue text-2xl lg:text-3xl font-svnDay'>
                        Thông tin thanh toán
                    </h2>
                    <p className='text-gunmetal text-lg mt-4'>
                        Vui lòng thanh toán phí tham gia giải đấu bằng cách mở App ngân hàng
                        của bạn và quét mã QR hoặc nhập thông tin thanh toán bên dưới:
                    </p>
                    <div className='qr-panel bg-alice-blue max-w-[755px] mx-auto mt-6 p-4'>
                        <div className='md:flex'>
                            <div className='min-w-[282px]'>qrcode</div>
                            <div className='intruction md:pl-12 md:border-l md:border-gainsboro'>
                                <h4 className='text-lg font-semibold text-gunmetal'>
                                    Hướng dẫn thanh toán
                                </h4>
                                <p className='mt-2 text-feldgrau text-md italic'>
                                    Quý khách vui lòng chuyển khoản theo thông tin sau
                                </p>
                                <div className='total bg-white rounded-lg py-3 px-4'>
                                    <p className='text-gunmetal font-medium'>
                                        Số tiền cần thanh toán:{' '}
                                        <strong className='text-xl font-semibold text-neon-fuchsia'>
                                            1.300.000đ
                                        </strong>
                                    </p>
                                </div>
                                <ul className='text-feldgrau mt-2'>
                                    <li>
                                        <p>Ngân hàng: Techcombank</p>
                                    </li>
                                    <li>
                                        <p>Số tài khoản: 66066688</p>
                                    </li>
                                    <li>
                                        <p>Chủ tài khoản: CÔNG TY TNHH VINABIDA</p>
                                    </li>
                                    <li>
                                        <p>Nội dung thanh toán: Tên+sđt+moli24 </p>
                                        <p className='italic'>(Ví dụ: Tuan 0979437225 moli24)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className='text-lg text-gunmetal font-medium'>Hạn thanh toán: 3 ngày kể từ ngày đăng ký, nếu chưa thanh toán thì đăng ký sẽ không hợp lệ.</p>
                    </div>
                </div>
                <div className='submit mt-6 flex flex-col justify-center items-center'>
                    <Checkbox
                        checked={confirmChecked}
                        onChange={() => setConfirmChecked(!confirmChecked)}
                        label={`
                        <p class='text-feldgrau'>Tôi đã đọc và đồng ý với <a href="https://moli24.com" class='font-medium text-blue-ryb' target="_blank">Điều lệ của giải đấu</a></p>
                        `}
                    />

                    <button disabled={!confirmChecked}
                        onClick={onPayment}
                        className={
                            `${confirmChecked ? 'hover:text-neon-fuchsia hover:bg-white' : 'cursor-not-allowed bg-opacity-40'} h-[60px] mt-4 rounded-lg bg-neon-fuchsia border border-neon-fuchsia text-white capitalize text-lg p-[18px] min-w-[240px] base-transition flex justify-center items-center`
                        }>
                        Thanh toán
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payment;

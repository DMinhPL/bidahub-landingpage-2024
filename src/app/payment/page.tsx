/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { updateRegisterInfoService } from '@/api/register';
import { GenerateQrResponseType, QrCodeParams, RegisterResponseType } from '@/api/type';
import { generateQrCodeService } from '@/api/vietqr';
import EditPopup from '@/components/EditPopup';
import { FormValues } from '@/components/RegistrationForm';
import { REGISTER_RESPONSE_SESSION } from '@/utils/constants';
import { formatDateToDDMMYYYY } from '@/utils/functions';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import QRCode from "react-qr-code";
import { toast } from 'react-toastify';


const Payment = () => {
    const router = useRouter();
    const [registrationData, setRegistrationData] = useState<RegisterResponseType>();
    const [isLoading, setIsLoading] = useState(false);
    const [qrResponseData, setQrResponseData] = useState<GenerateQrResponseType>();
    const [openEdit, setOpenEdit] = useState(false);
    const submitListener = useRef(0);
    // const token = useAuthToken();
    const [inputError, setInputError] = useState('');

    const getQrCode = async (data: RegisterResponseType, token: string) => {
        try {
            const params: QrCodeParams = {
                "bankCode": "MB",
                "bankAccount": "0775514403",
                "userBankName": "NGUYEN CHI DUNG",
                content: data.Phone,
                qrType: 0,
                amount: 5000,
                orderId: data.VietQRInfo.orderId,
                transType: "C",
                sign: "Molinari",
                urlLink: `${process.env.NEXT_HOST_URL}/success`
            }
            if (token) {
                const data = await generateQrCodeService(params, token);
                setQrResponseData(data);
            }
        } catch (error) {
            toast.error("Something was wrong, Please try again!");
            console.log(error);
        }
    }

    useEffect(() => {
        const sessionData = sessionStorage.getItem(REGISTER_RESPONSE_SESSION);
        if (!sessionData) return router.push('/');
        const data = JSON.parse(sessionData || '{}') as RegisterResponseType;
        if (data.FullName && data.CCCD && data.Phone && data.DateOfBirth && data.Address) {
            setRegistrationData(data);
            // getQrCode(data, token ?? '');
        } else {
            // Redirect back if no data found
            router.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router, submitListener.current]);

    // useEffect(() => {
    //     const sessionData = sessionStorage.getItem(REGISTER_RESPONSE_SESSION);
    //     if (!sessionData) return router.push('/');
    //     const data = JSON.parse(sessionData || '{}');
    //     if (data.FullName && data.CCCD && data.Phone && data.DateOfBirth && data.Address) {
    //         getQrCode(data, token ?? '');
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [router, token]);

    const onPayment = () => {
        router.push('/success');
    }

    const submitUpdate = async (data: FormValues) => {
        const sessionData = sessionStorage.getItem(REGISTER_RESPONSE_SESSION);
        if (!sessionData) return;
        const storageData = JSON.parse(sessionData || '{}');
        setIsLoading(true);
        try {
            const res = await updateRegisterInfoService(storageData.UniqueId, {
                FullName: data.FullName,
                CCCD: data.CCCD,
                Phone: data.Phone,
                DateOfBirth: data.DateOfBirth,
                Email: data.Email,
                Gender: data.Gender || 'male',
                Address: data.Address,
                Club: data.Club,
                ReferralSource: data.ReferralSource,
                Note: data.Note,
            });
            // Serialize the data into a query parameter
            sessionStorage.removeItem(REGISTER_RESPONSE_SESSION);
            sessionStorage.setItem(REGISTER_RESPONSE_SESSION, JSON.stringify(res));
            setOpenEdit(false);
            submitListener.current += 1;
            setInputError('');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setInputError(error.message);
            // toast.error("Something was wrong, Please try again!");
        } finally {
            setIsLoading(false);
        }
    }

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
                                Giới tính: <strong>{registrationData?.Gender === 'male' ? 'Nam' : 'Nữ'}</strong>
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
                                Năm sinh: <strong>{formatDateToDDMMYYYY(registrationData?.DateOfBirth || '')}</strong>
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
                        <button onClick={() => setOpenEdit(true)} className='h-12 bg-white border border-brilliant-azure rounded-lg hover:text-white hover:bg-cool-black text-gunmetal flex justify-center items-center py-3 px-4 font-medium capitalize base-transition'>
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
                            <div className='min-w-[282px] flex justify-center items-center'>
                                <div className="max-w-[218px] mx-auto">
                                    {
                                        registrationData?.VietQRInfo.qrCode &&
                                        <QRCode
                                            size={218}
                                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                            value={registrationData?.VietQRInfo.qrCode}
                                            viewBox={`0 0 218 218`}
                                        />
                                    }
                                </div>
                            </div>
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
                                        <p>{registrationData?.VietQRInfo?.bankName}</p>
                                    </li>
                                    <li>
                                        <p>Số tài khoản: {registrationData?.VietQRInfo?.bankAccount}</p>
                                    </li>
                                    <li>
                                        <p>Chủ tài khoản: {registrationData?.VietQRInfo?.userBankName}</p>
                                    </li>
                                    <li>
                                        <p>Nội dung thanh toán: {registrationData?.VietQRInfo?.content} </p>
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
                    {/* <Checkbox
                        checked={confirmChecked}
                        onChange={() => setConfirmChecked(!confirmChecked)}
                        label={`
                        <p class='text-feldgrau'>Tôi đã đọc và đồng ý với <a href="https://moli24.com" class='font-medium text-blue-ryb' target="_blank">Điều lệ của giải đấu</a></p>
                        `}
                    /> */}

                    <button
                        onClick={onPayment}
                        className={
                            `hover:text-neon-fuchsia hover:bg-white h-[60px] mt-4 rounded-lg bg-neon-fuchsia border border-neon-fuchsia text-white capitalize text-lg p-[18px] min-w-[240px] base-transition flex justify-center items-center`
                        }>
                        Thanh toán
                    </button>
                </div>
            </div>

            <EditPopup open={openEdit} setOpen={setOpenEdit} onSubmit={submitUpdate} isLoading={isLoading} error={inputError} />
        </div>
    );
};

export default Payment;

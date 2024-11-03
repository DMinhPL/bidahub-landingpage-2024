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
                        Registered Information
                    </h2>
                    <ul className='text-raisin-black mt-4'>
                        <li className='mb-3'>
                            <p>
                                Full Name: <strong>{registrationData?.FullName}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                Gender: <strong>{registrationData?.Gender === 'male' ? 'Male' : 'Female'}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                Identification Number: <strong>{registrationData?.CCCD}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                Phone Number: <strong>{registrationData?.Phone}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                Date of Birth: <strong>{formatDateToDDMMYYYY(registrationData?.DateOfBirth || '')}</strong>
                            </p>
                        </li>
                        <li className='mb-3'>
                            <p>
                                Address: <strong>{registrationData?.Address}</strong>
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
                            Edit Registration Information
                        </button>
                    </div>
                </div>
                {/* ===================== */}
                <div className='py-4 border-b border-gainsboro'>
                    <h2 className='text-ua-blue text-2xl lg:text-3xl font-svnDay'>
                        Payment Information
                    </h2>
                    <p className='text-gunmetal text-lg mt-4'>
                        Please pay the tournament registration fee by opening your banking app and scanning the QR code or by entering the payment information below:
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
                                    Payment Instructions
                                </h4>
                                <p className='mt-2 text-feldgrau text-md italic'>
                                    Please transfer to the following account details:
                                </p>
                                <div className='total bg-white rounded-lg py-3 px-4'>
                                    <p className='text-gunmetal font-medium'>
                                        Amount Due: <strong className='text-xl font-semibold text-neon-fuchsia'>1,300,000 VND</strong>
                                    </p>
                                </div>
                                <ul className='text-feldgrau mt-2'>
                                    <li>
                                        <p>Military Commercial Joint Stock Bank (MB Bank)</p>
                                    </li>
                                    <li>
                                        <p>Account number :  8434899888</p>
                                    </li>
                                    <li>
                                        <p>Bank Account: VINABIDA CO LTD</p>
                                    </li>
                                    <li>
                                        <p>Payment content: Phone number registered for the competition</p>
                                        <p className='italic'>(Example: Tuan 0979437225 moli24)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <p className='text-lg text-gunmetal font-medium'>Payment Deadline: Within 3 days of registration, otherwise the registration will be invalid.</p>
                    </div>
                </div>
                <div className='submit mt-6 flex flex-col justify-center items-center'>
                    <button
                        onClick={onPayment}
                        className={`hover:text-neon-fuchsia hover:bg-white h-[60px] mt-4 rounded-lg bg-neon-fuchsia border border-neon-fuchsia text-white capitalize text-lg p-[18px] min-w-[240px] base-transition flex justify-center items-center`}
                    >
                        Pay Now
                    </button>
                </div>
            </div>

            <EditPopup lang='en' open={openEdit} setOpen={setOpenEdit} onSubmit={submitUpdate} isLoading={isLoading} error={inputError} />
        </div>
    );

};

export default Payment;

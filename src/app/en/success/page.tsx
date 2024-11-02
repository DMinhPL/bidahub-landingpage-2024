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
                    Registration Successful
                </h2>
                <div className='panel rounded-xl bg-alice-blue p-4 mt-4'>
                    <p className='text-gunmetal'>
                        We have received your registration information and are currently processing your payment confirmation. We will soon send detailed information via your Zalo message once the payment process is complete.
                        <span className='block'>
                            Thank you for registering! We wish you a wonderful experience with us.
                        </span>
                    </p>
                    <p className='text-gunmetal mt-4'>
                        For any inquiries, please contact us through our Hotline: 0949.696.696 or Email: molinari@bidahub.com for assistance!
                    </p>
                </div>
                <div className='back flex justify-center'>
                    <button
                        onClick={() => router.push('/en')}
                        className={`h-[60px] mt-4 rounded-lg bg-ua-blue border border-ua-blue text-white capitalize text-lg p-[18px] min-w-[240px] base-transition flex justify-center items-center`}
                    >
                        Return to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;

'use client';
import { registerService } from '@/api/register';
import { registerSchemaEn, registerSchemaVi } from '@/schemas.ts';
import { REGISTER_RESPONSE_SESSION } from '@/utils/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading';
import RegistrationForm from '../RegistrationForm';
import Section from '../Section';
import Info from './Info';

export type FormValues = {
    FullName: string;
    CCCD: string;
    Phone: string;
    DateOfBirth: string;
    Email: string;
    Address: string;
    Gender?: string;
    ReferralSource?: string;
    Club?: string;
    Note?: string;
};

const Register: React.FC<{
    lang?: string
}> = ({
    lang = ''
}) => {
        const [isLoading, setIsLoading] = useState(false);
        const [inputError, setInputError] = useState('');
        const schema = lang === 'en' ? registerSchemaEn : registerSchemaVi;
        useForm<FormValues>({
            mode: 'onSubmit',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            resolver: yupResolver(schema as any),
            defaultValues: {
                FullName: '',
                CCCD: '',
                Phone: '',
                DateOfBirth: '',
                Email: '',
                Address: '',
                Gender: 'male',
                Note: '',
                ReferralSource: '',
                Club: '',
            },
        });
        const onSubmit = async (data: FormValues) => {
            setIsLoading(true);
            try {
                const res = await registerService({
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
                // reset();
                // Serialize the data into a query parameter
                sessionStorage.setItem(REGISTER_RESPONSE_SESSION, JSON.stringify(res));
                setInputError('');
                // Navigate using window.location.assign
                if (lang === 'en') {
                    window.location.assign(`/en/payment`);
                } else {
                    window.location.assign(`/payment`);
                }

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                // toast.error(error.message);
                setInputError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        return (
            <>
                {
                    isLoading && <Loading />
                }
                <Section
                    title={lang === 'en' ? 'Tournament Registration' : 'Đăng ký giải đấu'}
                    className='register scrollToSection'
                    id='register'
                >
                    <div className='bg-white rounded-3xl p-4 lg:p-8 text-raisin-black max-w-[1128px] mx-auto'>
                        <Info lang={lang} />
                        {
                            lang !== 'en' && <div className='register-form pt-6'>
                                <h3 className='font-svnDay text-2xl lg:text-3xl text-ua-blue'>
                                    {lang === 'en' ? 'Tournament Information ' : 'Thông tin đăng ký '}
                                </h3>
                                <RegistrationForm lang={lang} onSubmit={onSubmit} error={inputError} />
                            </div>
                        }
                    </div>
                </Section>
            </>
        );
    };

export default Register;

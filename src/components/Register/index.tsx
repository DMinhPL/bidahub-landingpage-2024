'use client';
import { registerService } from '@/api/register';
import registerSchema from '@/schemas.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../Input';
import Loading from '../Loading';
import Pulldown from '../Pulldown';
import Radio from '../Radio';
import Section from '../Section';
import Info from './Info';
import icCalendar from '../../assets/images/ic-calendar.png';
import Image from 'next/image';

type FormValues = {
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

const Register: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDateFocused, setIsDateFocused] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        mode: 'onSubmit',
        resolver: yupResolver(registerSchema),
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
            reset();
            // Serialize the data into a query parameter
            const queryParams = new URLSearchParams({
                FullName: res.FullName,
                CCCD: res.CCCD,
                Phone: res.Phone,
                DateOfBirth: res.DateOfBirth,
                Email: res.Email,
                Gender: res.Gender,
                Address: res.Address,
                Club: res.Club || '',
                ReferralSource: res.ReferralSource || '',
                Note: res.Note || '',
            }).toString();

            // Navigate using window.location.assign
            window.location.assign(`/payment?${queryParams}`);

        } catch {
            toast.error("Something was wrong, Please try again!");
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
                title='Đăng ký giải đấu'
                className='register scrollToSection'
                id='register'
            >
                <div className='bg-white rounded-3xl p-4 lg:p-8 text-raisin-black max-w-[1128px] mx-auto'>
                    <Info />
                    <div className='register-form pt-6'>
                        <h3 className='font-svnDay text-2xl lg:text-3xl text-ua-blue'>
                            Thông tin đăng ký{' '}
                        </h3>
                        <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                            <div className='pb-6 border-b border-gainsboro'>
                                <div className='grid md:grid-cols-2 gap-x-6 gap-y-4'>
                                    <Controller
                                        name='FullName'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='FullName'
                                                >
                                                    Họ và tên <span className='text-neon-fuchsia'>*</span>
                                                </label>
                                                <Input
                                                    {...field}
                                                    id='FullName'
                                                    name='FullName'
                                                    placeholder='Nhập đầy đủ họ và tên'
                                                    error={errors.FullName?.message}
                                                />
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        name='CCCD'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='CCCD'
                                                >
                                                    CCCD <span className='text-neon-fuchsia'>*</span>
                                                </label>
                                                <Input
                                                    {...field}
                                                    id='CCCD'
                                                    name='CCCD'
                                                    placeholder='Nhập CCCD của bạn'
                                                    error={errors.CCCD?.message}
                                                />
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        name='Phone'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='Phone'
                                                >
                                                    Số điện thoại{' '}
                                                    <span className='text-neon-fuchsia'>*</span>{' '}
                                                    <span className='font-normal capitalize'>
                                                        (Số Điện Thoại Đã được đăng ký zalo)
                                                    </span>
                                                </label>
                                                <Input
                                                    {...field}
                                                    id='Phone'
                                                    name='Phone'
                                                    placeholder='Nhập số điện thoại'
                                                    error={errors.Phone?.message}
                                                />
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        name='DateOfBirth'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none relative'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='DateOfBirth'
                                                >
                                                    Ngày - tháng - năm sinh{' '}
                                                    <span className='text-neon-fuchsia'>*</span>
                                                </label>
                                                <div className="relative">
                                                    {!isDateFocused && !field.value && (
                                                        <span
                                                            className='absolute top-1/2 left-3 transform -translate-y-1/2 text-roman-silver'
                                                            onClick={() => document.getElementById('DateOfBirth')?.focus()}
                                                        >
                                                            Chọn ngày tháng năm sinh
                                                        </span>
                                                    )}
                                                    <span className='absolute top-1/2 right-3 transform -translate-y-1/2 z-[3] w-6 h-6 pointer-events-none'>
                                                        <Image src={icCalendar.src} width={icCalendar.width} height={icCalendar.height} alt='icon' />
                                                    </span>
                                                    <Input
                                                        {...field}
                                                        id='DateOfBirth'
                                                        type='date'
                                                        name='DateOfBirth'
                                                        placeholder='Chọn ngày tháng năm sinh'
                                                        onFocus={() => setIsDateFocused(true)}
                                                        onBlur={() => setIsDateFocused(false)}
                                                        error={errors.DateOfBirth?.message}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        name='Email'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='Email'
                                                >
                                                    Email
                                                </label>
                                                <Input
                                                    {...field}
                                                    type='email'
                                                    id='Email'
                                                    name='Email'
                                                    placeholder='Nhập địa chỉ email'
                                                    error={errors.Email?.message}
                                                />
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        name='Address'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='Address'
                                                >
                                                    Địa chỉ <span className='text-neon-fuchsia'>*</span>
                                                </label>
                                                <Input
                                                    {...field}
                                                    id='Address'
                                                    name='Address'
                                                    placeholder='Nhập địa chỉ của bạn'
                                                    error={errors.Address?.message}
                                                />
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        name='ReferralSource'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='ReferralSource'
                                                >
                                                    Bạn biết đến giải đấu từ đâu
                                                </label>
                                                <Pulldown
                                                    {...field}
                                                    defaultValue={''}
                                                    placeholder='Vui lòng chọn'
                                                    options={[
                                                        { label: 'Facebook', value: 'Facebook' },
                                                        { label: 'Zalo', value: 'Zalo' },
                                                        { label: 'Email', value: 'Email' },
                                                    ]}
                                                />
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        name='Gender'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='Gender'
                                                >
                                                    Giới tính
                                                </label>
                                                <div className='flex gap-4 items-center'>
                                                    <Radio
                                                        label='Nam'
                                                        id='male'
                                                        name='Gender'
                                                        value='male'
                                                        checked={field.value === 'male'}
                                                        onChange={(e) => field.onChange(e.target.value)}
                                                    />
                                                    <Radio
                                                        label='Nữ'
                                                        id='female'
                                                        name='Gender'
                                                        value='female'
                                                        checked={field.value === 'female'}
                                                        onChange={(e) => field.onChange(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    />
                                    <Controller
                                        name='Club'
                                        control={control}
                                        render={({ field }) => (
                                            <div className='form-input border-none'>
                                                <label
                                                    className='font-semibold mb-2 block'
                                                    htmlFor='Club'
                                                >
                                                    Thông tin câu lạc bộ hoặc đội tuyển{' '}
                                                    <span className='font-normal'>(Nếu có)</span>
                                                </label>
                                                <Input
                                                    {...field}
                                                    id='Club'
                                                    name='Club'
                                                    placeholder='Nhập thông tin CLB hoặc đổi tuyển'
                                                />
                                            </div>
                                        )}
                                    />
                                </div>
                                <p className='font-medium mt-6 italic text-md md:text-base'>
                                    <span className='text-neon-fuchsia'>Lưu ý:</span> Chúng tôi sẽ
                                    gửi thông tin giải đấu, mã số thi đấu và giải thưởng qua{' '}
                                    <strong>Zalo</strong>. VĐV vui lòng cung cấp số điện thoại đã
                                    đăng ký Zalo để nhận thông tin từ ban tổ chức.
                                </p>
                            </div>
                            <div className='mt-6 flex justify-center'>
                                <button className='h-[60px] rounded-lg bg-neon-fuchsia border border-neon-fuchsia text-white capitalize text-lg p-[18px] min-w-[240px] base-transition hover:text-neon-fuchsia hover:bg-white flex justify-center items-center'>
                                    Đăng Ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
            <ToastContainer />
        </>
    );
};

export default Register;

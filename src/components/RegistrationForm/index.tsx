// RegistrationForm.tsx
'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input from '../Input';
import Pulldown from '../Pulldown';
import Radio from '../Radio';
import registerSchema from '@/schemas.ts';
import { REGISTER_RESPONSE_SESSION } from '@/utils/constants';

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

type RegistrationFormProps = {
    onSubmit: (data: FormValues) => void;
    isEdit?: boolean;
    isLoading?: boolean;
    error?: string;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit, error, isEdit, isLoading }) => {
    const [isDateFocused, setIsDateFocused] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<FormValues>({
        mode: 'onSubmit',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: yupResolver(registerSchema as any),
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

    const handleFormSubmit = (data: FormValues) => {
        onSubmit(data);
    };

    useEffect(() => {
        if (isEdit) {
            const sessionData = sessionStorage.getItem(REGISTER_RESPONSE_SESSION);
            const data = JSON.parse(sessionData || '{}');
            console.log(data);
            const frmValues = {
                FullName: data.FullName,
                CCCD: data.CCCD,
                Phone: data.Phone,
                DateOfBirth: data.DateOfBirth,
                Email: data.Email,
                Address: data.Address,
                Gender: data.Gender || 'male',
                ReferralSource: data.ReferralSource,
                Club: data.Club,
                Note: data.Note
            }
            reset(frmValues);
            setValue('ReferralSource', data.ReferralSource);
        }
    }, [isEdit, reset, setValue]);

    return (
        <form className='mt-4' onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={`${isEdit ? '' : 'border-b border-gainsboro pb-6'}`}>
                <div className='grid md:grid-cols-2 gap-x-6 gap-y-4'>
                    <Controller
                        name='FullName'
                        control={control}
                        render={({ field }) => (
                            <div className='form-input border-none p-0'>
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
                    {
                        isEdit && (
                            <Controller
                                name='Gender'
                                control={control}
                                render={({ field }) => (
                                    <div className='form-input border-none p-0'>
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
                        )
                    }
                    <Controller
                        name='CCCD'
                        control={control}
                        render={({ field }) => (
                            <div className='form-input border-none p-0'>
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
                            <div className='form-input border-none p-0'>
                                <label
                                    className='font-semibold mb-2 block'
                                    htmlFor='Phone'
                                >
                                    Số điện thoại{' '}
                                    <span className='text-neon-fuchsia'>*</span>{' '}
                                    <span className='font-normal capitalize text-md'>
                                        (Số Điện Thoại Đã được đăng ký zalo)
                                    </span>
                                </label>
                                <Input
                                    {...field}
                                    id='Phone'
                                    name='Phone'
                                    placeholder='Nhập số điện thoại'
                                    error={error || errors.Phone?.message}
                                />
                            </div>
                        )}
                    />
                    <Controller
                        name='DateOfBirth'
                        control={control}
                        render={({ field }) => (
                            <div className='form-input border-none p-0 relative'>
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
                            <div className='form-input border-none p-0'>
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
                            <div className='form-input border-none p-0'>
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
                    {
                        !isEdit &&
                        <Controller
                            name='ReferralSource'
                            control={control}
                            render={({ field }) => (
                                <div className='form-input border-none p-0'>
                                    <label
                                        className='font-semibold mb-2 block'
                                        htmlFor='ReferralSource'
                                    >
                                        Bạn biết đến giải đấu từ đâu
                                    </label>
                                    <Pulldown
                                        {...field}
                                        placeholder='Vui lòng chọn'
                                        options={[
                                            { label: 'Facebook', value: 'Facebook' },
                                            { label: 'Bạn bè', value: 'Friend' },
                                            { label: 'Website', value: 'Website' },
                                        ]}
                                    />
                                </div>
                            )}
                        />
                    }
                    {
                        !isEdit && <Controller
                            name='Gender'
                            control={control}
                            render={({ field }) => (
                                <div className='form-input border-none p-0'>
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
                    }
                    <Controller
                        name='Club'
                        control={control}
                        render={({ field }) => (
                            <div className='form-input border-none p-0'>
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
                {
                    !isEdit &&
                    <p className='font-medium mt-6 italic text-md md:text-base'>
                        <span className='text-neon-fuchsia'>Lưu ý:</span> Chúng tôi sẽ
                        gửi thông tin giải đấu, mã số thi đấu và giải thưởng qua{' '}
                        <strong>Zalo</strong>. VĐV vui lòng cung cấp số điện thoại đã
                        đăng ký Zalo để nhận thông tin từ ban tổ chức.
                    </p>
                }
            </div>
            <div className='mt-6 flex justify-center'>
                {
                    !isEdit ?
                        <button type='submit' className='h-[60px] rounded-lg bg-neon-fuchsia border border-neon-fuchsia text-white capitalize text-lg p-[18px] min-w-[240px] base-transition hover:text-neon-fuchsia hover:bg-white flex justify-center items-center'>
                            Đăng Ký
                        </button>
                        : <button
                            type='submit'
                            className={`h-[48px] rounded-lg bg-ua-blue border border-ua-blue text-white capitalize text-lg p-[18px] min-w-[140px] base-transition flex justify-center items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    ></path>
                                </svg>
                            ) : null}
                            {isLoading ? 'Đang lưu...' : 'Lưu thay đổi'}
                        </button>

                }
            </div>
        </form>
    );
};

export default RegistrationForm;

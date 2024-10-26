'use client';
import React from 'react';
import Section from '../Section';
import Info from './Info';
import Input from '../Input';
import Pulldown from '../Pulldown';
import Radio from '../Radio';
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
    fullName: string;
    cccd: number;
    phoneNumber: string;
    dateOfBirth: string;
    email: string;
    address: string;
    gender: 'male' | 'female';
    reference?: string;
    club?: string;
};

const Register: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        mode: 'onSubmit',
        defaultValues: {
            fullName: '',
            phoneNumber: '',
            dateOfBirth: '',
            address: '',
            email: '',
            gender: 'male',
        },
    });
    const onSubmit = (data: FormValues) => {
        console.log(data);
    }
    return (
        <Section
            title='Đăng ký giải đấu'
            className='register scrollToSection'
            id='register'
        >
            <div className='bg-white rounded-3xl p-4 lg:p-8 text-raisin-black max-w-[1128px] mx-auto'>
                <Info />
                <div className='register-form pt-6'>
                    <h3 className='font-svnDay text-2xl lg:text-3xl text-blue-ryb'>
                        Thông tin đăng ký{' '}
                    </h3>
                    <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                        <div className='pb-6 border-b border-gainsboro'>
                            <div className='grid md:grid-cols-2 gap-x-6 gap-y-4'>
                                <Controller
                                    name='fullName'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='fullName'
                                            >
                                                Họ và tên <span className='text-neon-fuchsia'>*</span>
                                            </label>
                                            <Input
                                                {...field}
                                                id='fullName'
                                                name='fullName'
                                                placeholder='Nhập đầy đủ họ và tên'
                                                required
                                                error={errors.fullName?.message}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='cccd'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='cccd'
                                            >
                                                CCCD <span className='text-neon-fuchsia'>*</span>
                                            </label>
                                            <Input
                                                {...field}
                                                id='cccd'
                                                name='cccd'
                                                placeholder='Nhập CCCD của bạn'
                                                required
                                                error={errors.cccd?.message}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='phoneNumber'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='phoneNumber'
                                            >
                                                Số điện thoại{' '}
                                                <span className='text-neon-fuchsia'>*</span>{' '}
                                                <span className='font-normal capitalize'>
                                                    (Số Điện Thoại Đã được đăng ký zalo)
                                                </span>
                                            </label>
                                            <Input
                                                {...field}
                                                id='phoneNumber'
                                                name='phoneNumber'
                                                placeholder='Nhập số điện thoại'
                                                required
                                                error={errors.phoneNumber?.message}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='dateOfBirth'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='dateOfBirth'
                                            >
                                                Ngày - tháng - năm sinh{' '}
                                                <span className='text-neon-fuchsia'>*</span>
                                            </label>
                                            <Input
                                                {...field}
                                                id='dateOfBirth'
                                                type='date'
                                                name='dateOfBirth'
                                                placeholder='Chọn ngày tháng năm sinh'
                                                error={errors.dateOfBirth?.message}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='email'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='email'
                                            >
                                                Email
                                            </label>
                                            <Input
                                                {...field}
                                                type='email'
                                                id='email'
                                                name='email'
                                                placeholder='Nhập địa chỉ email'
                                                error={errors.email?.message}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='address'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='address'
                                            >
                                                Địa chỉ <span className='text-neon-fuchsia'>*</span>
                                            </label>
                                            <Input
                                                {...field}
                                                id='address'
                                                name='address'
                                                placeholder='Nhập địa chỉ của bạn'
                                                error={errors.address?.message}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='reference'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='reference'
                                            >
                                                Bạn biết đến giải đấu từ đâu
                                            </label>
                                            <Pulldown
                                                {...field}
                                                defaultValue={'5'}
                                                placeholder='Vui lòng chọn'
                                                options={[
                                                    { label: '5', value: '5' },
                                                    { label: '10', value: '10' },
                                                    { label: '15', value: '15' },
                                                    { label: '20', value: '20' },
                                                ]}
                                            />
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='gender'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='gender'
                                            >
                                                Giới tính
                                            </label>
                                            <div className='flex gap-4 items-center'>
                                                <Radio
                                                    label='Nam'
                                                    id='male'
                                                    name='gender'
                                                    value='male'
                                                    checked={field.value === 'male'}
                                                    onChange={(e) => field.onChange(e.target.value)}
                                                />
                                                <Radio
                                                    label='Nữ'
                                                    id='female'
                                                    name='gender'
                                                    value='female'
                                                    checked={field.value === 'female'}
                                                    onChange={(e) => field.onChange(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    )}
                                />
                                <Controller
                                    name='club'
                                    control={control}
                                    render={({ field }) => (
                                        <div className='form-input'>
                                            <label
                                                className='font-semibold mb-2 block'
                                                htmlFor='club'
                                            >
                                                Thông tin câu lạc bộ hoặc đội tuyển{' '}
                                                <span className='font-normal'>(Nếu có)</span>
                                            </label>
                                            <Input
                                                {...field}
                                                id='club'
                                                name='club'
                                                placeholder='Nhập thông tin CLB hoặc đổi tuyển'
                                            />
                                        </div>
                                    )}
                                />
                            </div>
                            <p className='font-medium mt-6 italic'>
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
    );
};

export default Register;

'use client';
import classNames from 'classnames';
import React, {
  forwardRef, useCallback, useMemo, useState
} from 'react';
import icCalendar from '../../assets/images/ic-calendar.png';
import Image from 'next/image';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'date';
  sizeVariant?: 'base' | 'sm';
  error?: string;
  isSuccess?: boolean;
  loading?: boolean;
  isReadOnly?: boolean;
  className?: string;
}

const InputRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({
  type,
  placeholder,
  value,
  error,
  isSuccess,
  disabled,
  sizeVariant = 'base',
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = useCallback(() => setShowPassword(!showPassword), [showPassword]);

  const inputType = useMemo(() => {
    if (type === 'password') {
      if (showPassword) {
        return 'text';
      }
      return 'password';
    }
    return type;
  }, [type, showPassword]);

  const inputClassNames = classNames(
    `border border-gainsboro rounded-lg w-full focus:outline-none font-medium shadow-none text-raisin-black placeholder:text-roman-silver ${className}`,
    {
      'border-gainsboro-300 boreder-1': !error && !isSuccess && !disabled,
      'border-carmine-pink boreder-1': error,
      'border-medium-turquoise boreder-1': isSuccess,
      'bg-gainsboro boreder-1': disabled,
      'cursor-not-allowed': disabled,
      'bg-anti-flash-white2': disabled,
      'focus:border-brilliant-azure': true,
      'focus:shadow-input-focus': true,
      'px-4 py-2 h-[48px] text-base leading-6': sizeVariant === 'base',
      'p-2 h-[36px] text-md leading-4': sizeVariant === 'sm',
    }
  );

  return (
    <div className='a-input'>
      <div className='relative'>
        {
          type === 'date' && <span className='absolute top-1/2 right-3 transform -translate-y-1/2 z-[3] w-6 h-6 pointer-events-none'>
            <Image src={icCalendar.src} width={icCalendar.width} height={icCalendar.height} alt='icon' />
          </span>
        }
        <input
          type={inputType === 'password' && showPassword ? 'text' : inputType}
          placeholder={placeholder}
          value={value}
          className={inputClassNames}
          disabled={disabled}
          {...props}
        />
        {type === 'password' && !disabled && (
          <button
            type='button'
            onClick={handleClick}
            className='absolute inset-y-0 right-0 px-3 py-2 text-md font-medium text-brilliant-azure'
          >
            {!showPassword ? 'Hiện' : 'Ẩn'}
          </button>
        )}
      </div>
      {error && <p className='mt-1 text-carmine-pink text-sm'>{error}</p>}
    </div>
  );
};

const Input = forwardRef(InputRef);

export default Input;

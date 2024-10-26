'use client';
import classNames from 'classnames';
import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({
    label,
    className,
    id,
    ...inputProps
  }, ref) => {
    const inputClassNames = classNames(
      `form-radio focus:outline-none hover:text-brilliant-azure-500 focus:ring-0 focus:ring-offset-0 checked:bg-brilliant-azure-500 cursor-pointer ${className}`,
      {
        'bg-gainsboro boreder-1 cursor-not-allowed': inputProps.disabled,
        'cursor-not-allowed': inputProps.disabled,
      }
    );
    return (
      <div className='a-radio flex space-x-4 cursor-pointer'>
        <div className='flex items-center'>
          <input type='radio' id={id} className={inputClassNames} ref={ref} {...inputProps} />
          {label && <label htmlFor={id} className='ml-2 font-medium'>{label}</label>}
        </div>
      </div>
    );
  }
);

export default Radio;
Radio.displayName = 'Radio';

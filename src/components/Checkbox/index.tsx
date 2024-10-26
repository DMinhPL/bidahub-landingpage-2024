'use client';
/* eslint-disable jsx-a11y/label-has-associated-control */

import classNames from 'classnames';
import React, { forwardRef } from 'react';

export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  className?: string;
  classNameLabel?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({
    label,
    className,
    id,
    classNameLabel,
    ...props
  }, ref) => {
    const checkboxClassName = classNames(
      `form-checkbox h-[18px] w-[18px] text-primary border-manatee bg-white rounded cursor-pointer hover:manatee-200 focus:outline-none focus:ring-0 focus:ring-offset-0 ${className}`,
      {
        'bg-white boreder': !props.disabled,
        'cursor-not-allowed': props.disabled,
      }
    );
    return (
      <div className='flex'>
        <div className='flex items-center'>
          <input type='checkbox' ref={ref} id={id || 'default'} className={checkboxClassName} {...props} />
          {/* eslint-disable-next-line react/no-danger */}
          {label && <label htmlFor={id || 'default'} className={classNameLabel || 'ml-2 text-gunmetal text-md'} dangerouslySetInnerHTML={{ __html: label }} />}
        </div>
      </div>
    );
  },
);

export default Checkbox;

Checkbox.displayName = 'Checkbox';

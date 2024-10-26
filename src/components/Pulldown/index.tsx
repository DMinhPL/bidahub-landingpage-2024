'use client';
import classNames from 'classnames';
import React, { useState } from 'react';

export interface OptionType {
  id?: string | number;
  label: string;
  value: string;
  disabled?: boolean;
}

interface PulldownProps extends React.HTMLAttributes<HTMLSelectElement> {
  id?: string;
  placeholder?: string;
  value?: OptionType | string;
  options: OptionType[];
  error?: string;
  disabled?: boolean;
  handleSelect?: (option: OptionType) => void;
  className?: string;
  classNameContainer?: string;
  isHorizontal?: boolean;
  size?: 'base' | 'sm'
}

const Pulldown: React.FC<PulldownProps> = ({
  id,
  value,
  options,
  error,
  disabled,
  className,
  isHorizontal,
  classNameContainer,
  placeholder,
  size = 'base',
  onChange,
  ...props
}) => {
  const [selected, setSelected] = useState<string>();
  return (
    <div className={classNames(`relative ${classNameContainer}`, { 'flex items-center': isHorizontal })}>
      <div className={classNames('relative', { 'w-full': isHorizontal, 'mt-1': !isHorizontal })}>
        <select
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          className={classNames(
            'border border-gainsboro rounded-lg w-full bg-white text-gunmetal-500 shadow-none outline-none placeholder:text-roman-silver text-raisin-black font-medium',
            className,
            {
              'border-gainsboro-300': !error && !disabled,
              'border-carmine-pink': error,
              'bg-gainsboro cursor-not-allowed': disabled,
              'focus:shadow-input-focus': true,
              'px-4 py-2 h-[48px] text-base leading-6': size === 'base',
              'p-2 h-[36px] text-md leading-4': size === 'sm',
              'text-roman-silver': !selected && !value,
              'text-raisin-black': selected,
            }
          )}
          onChange={(e) => {
            onChange?.(e);
            setSelected(e.target.value);
          }}
          {...props}
        >
          <option value='' disabled hidden selected={!value}>
            {placeholder}
          </option>
          {options.map((option) => (
            <option style={{ color: '#1F2128' }} key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className='mt-1 text-sm text-carmine-pink'>{error}</p>}
      </div>
    </div>
  );
};

export default Pulldown;

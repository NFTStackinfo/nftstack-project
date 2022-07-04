import * as React from 'react';
import {RadioStyle} from "./Radio.style";

export const Radio = ({
                        label,
                        checked,
                        disabled,
                        name,
                        onChange,
                        className = '',
                        size=18,
                      }) => {
  return (
    <RadioStyle
      size={size}
      className={`${className} ${disabled ? 'disabled' : ''}`}
    >
      <input
        type='radio'
        checked={checked && !disabled}
        onChange={onChange}
        disabled={disabled}
        name={name}
      />
      <span className='radio-content'/>
      {label && <span className='radio-label text-b2'>{label}</span>}
    </RadioStyle>
  );
}

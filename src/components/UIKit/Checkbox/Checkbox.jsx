import * as React from 'react';
import {CheckboxStyle} from "./Checkbox.style";
import {Icon} from '../Icon/Icon';

export const Checkbox = ({
                        label,
                        checked,
                        disabled,
                        name,
                        onChange,
                        className = '',
                        size=18,
                           indeterminate
                      }) => {
  return (
    <CheckboxStyle
      size={size}
      className={`${className} ${disabled ? 'disabled' : ''}`}
    >
      <input
        type='checkbox'
        checked={checked && !disabled}
        onChange={onChange}
        disabled={disabled}
        name={name}
      />
      <span className='checkbox-content'>
        <Icon name={indeterminate ? 'subtract' : 'checkmark'} size={16} />
      </span>
      {label && <span className='checkbox-label text-b2'>{label}</span>}
    </CheckboxStyle>
  );
}

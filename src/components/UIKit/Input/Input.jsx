import * as React from 'react';
import {Label, ButtonSubmitWrapper} from "./Input.style";
// import {theme} from "config/theme/theme";
// import {getFormattedPrice, numberWithComma} from "helpers/utils";


const Input = React.forwardRef(({
                                                                  id,
                                                                  type = 'text',
                                                                  name,
                                                                  value,
                                                                  defaultValue,
                                                                  touched,
                                                                  onBlur,
                                                                  onChange,
                                                                  onFocus,
                                                                  onKeyPress,
                                                                  errorMessage,
                                                                  label,
                                                                  variant = 'lg',
                                                                  disabled,
                                                                  className = '',
                                                                  withMargin,
                                                                  noMargin,
                                                                  pattern,
                                                                  withButton,
                                                                  onInputButtonClick,
                                                                  inputButton,
                                                                  buttonDisabled,
                                                                  withComma,
                                                                  buttonMargin,
                                                                  isLoading,
                                                                  buttonInfo,
                                                                  ...rest
                                                              }, ref) => {

    const [inputValue, setInputValue] = React.useState('');
    const [changed, setChanged] = React.useState(false);

    const handleChange = (e) => {
        const {value} = e.target
        if (withButton) {
            setInputValue(value);
            if (!changed) {
                setChanged(true)
            }
            return onChange(e)
        }
        if (withComma) {
            const formattedValue = value.replaceAll(',', '').replaceAll('$', '');
            if (!isNaN(+formattedValue)) {
                e.target.value = formattedValue
                return onChange(e)
            }
            return
        }
        onChange(e)

    }

    const onClick = () => {
        onInputButtonClick(inputValue)
    }


    // const getValue = (inputValue) => {
    //     if (withComma && inputValue) {
    //         return getFormattedPrice('USD', '' + inputValue)
    //     }
    //     return inputValue
    // }
    return (
        <>
            <Label
                // theme={theme}
                variant={variant}
                className={className}
                noMargin={noMargin}
                withMargin={withMargin}
                errorMessage={errorMessage}
            >
                <input
                    className='input'
                    ref={ref}
                    id={id}
                    type={type}
                    name={name}
                    // value={getValue(value)}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={label}
                    onBlur={onBlur}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onKeyPress={onKeyPress}
                    disabled={disabled}
                    pattern={pattern}
                    {...rest}
                />
                <span>{label}</span>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </Label>
            {withButton &&
            <ButtonSubmitWrapper
              buttonMargin={buttonMargin}
            >
              <div className="button-loader">
                <button
                  className='button-submit'
                  type='button'
                  onClick={onClick}
                  disabled={buttonDisabled}
                >
                    {inputButton}
                </button>
                  {isLoading && <p>loading...</p>}
              </div>
                {buttonInfo && <p className='info-text text-sm'>Vehicle details for <strong
                  className='color-primary w-700'> {buttonInfo}</strong></p>}
            </ButtonSubmitWrapper>
            }
        </>

    );
})

Input.displayName = 'MyComponent';

export {Input}

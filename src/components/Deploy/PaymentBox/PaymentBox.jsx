import React from 'react';
import {PaymentBoxStyle} from './PaymentBox.style';
import {Checkbox} from '../../UIKit';

const PaymentBox = ({error, onchange, className}) => {
  return (
    <PaymentBoxStyle error={error} className={className}>
      <h5 className='title text-b3'>Payment</h5>
      <p className='text-b3 info'>We will charge 1,5% from the primary sale</p>
      <Checkbox
        label='I confirm to be charged 1,5% on the primary sale'
        name='checkbox1'
        onChange={onchange}
      />
      {error && <p className='error text-b3'>Please Confirm Payment</p>}
    </PaymentBoxStyle>
  );
};

export default PaymentBox;

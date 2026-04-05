import React from 'react'
import MethodIcon from '../components/Payments/MethodIcon';
import { bitcoin_icon, etherum_icon, monero_icon, theter_icon } from '../assets/assets';
import MethodPopUp from '../components/Payments/MethodPopUp';

export default function Payments() {
  return (
    <div className="p-2">
      <div>
        
        <div className='min-h-40'>
          <h2 className='text-2xl border-b'>Products</h2>
          <div className='flex justify-between px-4 text-xl mt-4 border-b border-gray-400'>
            <p>Product Name</p>
            <p>45$</p>
          </div>
        </div>
        <h3 className='text-2xl'>Choose Payment Method</h3>
        <div className="flex gap-1 mt-4">
          <MethodIcon src={bitcoin_icon} alt="bitcoin" name="Bitcoin" />
          <MethodIcon src={theter_icon} alt="bitcoin" name="USDT" />
          <MethodIcon src={monero_icon} alt="bitcoin" name="Monero" />
          <MethodIcon src={etherum_icon} alt="bitcoin" name="Ethereum" />
        </div>
      </div>
      <div className='relative'>
        <MethodPopUp currency_icon={monero_icon} active={true} currency_address='Gagan'/>
      </div>
    </div>
  );
}

import React from 'react'

const Amount = () => {
  const [amount, setAmount] = React.useState(0);
  const [incValue, setIncValue] = React.useState(0);

  return (
    <div className='flex gap-10'>
      <div className='font-bold text-lg'>Amount: {amount}</div>
      <div><button onClick={() => setAmount(amount => amount + 1)}>Increment+</button></div>
      <div><button onClick={() => setAmount(amount => amount - 1)}>Decrement-</button></div>
      <div><input type='number' onChange={(e) => setIncValue(e.target.value)} placeholder='Enter the increment value here' /></div>
      <div><button onClick={() => setAmount(amount => amount + Number(incValue))}>Increment by value {incValue}</button></div>
    </div>
  )
}

export default Amount;
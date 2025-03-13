import React from 'react'

const Amount = () => {
  const [amount, setAmount] = React.useState(0);
  const [increment, setIncrement] = React.useState(0);

  return (
    <div className='flex gap-2'>
      <div><button onClick={() => setAmount(amount => amount + 1)}>Increment+</button></div>
      <div><button onClick={() => setAmount(amount => amount - 1)}>Decrement-</button></div>
      <div><input value={increment} onChange={(e) => setIncrement(e.target.value)} placeholder='Enter amount here' /></div>
      <div><button onClick={() => setAmount(amount => amount + increment)} >Increment by amount {amount}</button></div>
    </div>
  )
}

export default Amount;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from "../store/index";

const Amount = () => {
  const [incValue, setIncValue] = React.useState(0);
  const amount = useSelector(state => state.account.amount);
  const dispatch = useDispatch();

  return (
    <div className='flex gap-10'>
      <div className='font-bold text-lg'>Amount: {amount}</div>
      <div><button onClick={() => dispatch(increment())}>Increment+</button></div>
      <div><button onClick={() => dispatch(decrement())}>Decrement-</button></div>
      <div><input type='number' onChange={(e) => setIncValue(e.target.value)} placeholder='Enter the increment value here' /></div>
      <div><button onClick={() => dispatch(incrementByAmount(Number.parseInt(incValue)))}>Increment by value {incValue}</button></div>
    </div>
  )
}

export default Amount;
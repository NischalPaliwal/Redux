import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByValue } from "../slices/bonusSlice";

const Bonus = () => {
  const [incValue, setIncValue] = React.useState(0);
  const bonus = useSelector(state => state.bonus.bonus);
  const dispatch = useDispatch();

  return (
    <div className='flex gap-10'>
      <div className='font-bold text-lg'>Bonus: {bonus}</div>
      <div><button onClick={() => dispatch(increment())}>Increment+</button></div>
      <div><button onClick={() => dispatch(decrement())}>Decrement-</button></div>
      <div><input onChange={(e) => setIncValue(e.target.value)} placeholder='Enter the increment value here' /></div>
      <div><button onClick={() => dispatch(incrementByValue(Number.parseInt(incValue)))}>Increment by value {incValue}</button></div>
    </div>
  )
}

export default Bonus;
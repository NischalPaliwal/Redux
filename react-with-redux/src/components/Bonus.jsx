import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementBonus, decrementBonus, incrementBonusByAmount } from "../store/index";

const Bonus = () => {
  const [incValue, setIncValue] = React.useState(0);
  const bonus = useSelector(state => state.bonus.bonus);
  const dispatch = useDispatch();

  return (
    <div className='flex gap-10'>
      <div className='font-bold text-lg'>Bonus: {bonus}</div>
      <div><button onClick={() => dispatch(incrementBonus())}>Increment+</button></div>
      <div><button onClick={() => dispatch(decrementBonus())}>Decrement-</button></div>
      <div><input onChange={(e) => setIncValue(e.target.value)} placeholder='Enter the increment value here' /></div>
      <div><button onClick={() => dispatch(incrementBonusByAmount(Number.parseInt(incValue)))}>Increment by value {incValue}</button></div>
    </div>
  )
}

export default Bonus;
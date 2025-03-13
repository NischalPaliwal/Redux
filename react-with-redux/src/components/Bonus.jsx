import React from 'react'

const Bonus = () => {
  const [bonus, setBonus] = React.useState(0);
  const [incValue, setIncValue] = React.useState(0);

  return (
    <div className='flex gap-10'>
      <div className='font-bold text-lg'>Bonus: {bonus}</div>
      <div><button onClick={() => setBonus(bonus => bonus + 1)}>Increment+</button></div>
      <div><button onClick={() => setBonus(bonus => bonus - 1)}>Decrement-</button></div>
      <div><input onChange={(e) => setIncValue(e.target.value)} placeholder='Enter the increment value here' /></div>
      <div><button onClick={() => setBonus(bonus => bonus + Number(incValue))}>Increment by value {incValue}</button></div>
    </div>
  )
}

export default Bonus;
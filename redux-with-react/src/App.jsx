import * as React from 'react';
import Amount from './components/Amount';
import Bonus from './components/Bonus';

function App() {

  return (
    <div className='min-h-screen flex justify-center items-center gap-10'>
      <Amount />
      <Bonus />
    </div>
  )
}

export default App;
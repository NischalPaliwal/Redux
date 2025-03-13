import Amount from './components/Amount';
import Bonus from "./components/Bonus";

function App() {

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className='flex-col justify-center items-center border p-10'>
      <Amount />
      <Bonus />
      </div>
    </div>
  )
}

export default App;

import './App.css'
import Counter from './component/Counter'
import { useContext } from 'react'
import { CounterContext } from './context/Counter'

function App() {

  const counterState = useContext(CounterContext)

  console.log(counterState);
  
  return (
    <>
      <h1>Counter is {counterState.Count}</h1>
      <Counter />                                                                                                                                                                                                                                                                <br />
      <Counter />                                                                                                                                                                                                                                                                <br />
      <Counter />                                                                                                                                                                                                                                                                <br />
      <Counter />      
    </>
  )
}

export default App

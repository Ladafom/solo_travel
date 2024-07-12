import React from 'react'
import Header from "./components/Header"
import Travels from './components/Travels'
import AddTravel from './components/AddTravel'
import { useNewTravel } from './zustand/useTravel'

function App() {

  const travels = useNewTravel((state)=>state.travels)
  const travel = travels.map((travel, index) => {
    return (
      <Travels key={index} id={index}
      travelsData={travel}/>
    )
});

  return (
    <>
      <Header />
      <div className='travels-list'>
      {travel}
      </div>
      <AddTravel />
    </>
  )
}

export default App
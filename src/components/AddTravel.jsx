import React from "react";
import {useNewTravel} from '../zustand/useTravel'
import TravelForm from "./TravelForm";

function AddTravel(){

  const isTravelAdding = useNewTravel((state)=> state.isTravelAdding)
  const setIsTravelAdding = useNewTravel((state)=> state.setIsTravelAdding)

  return (
    <>
      {isTravelAdding ? <TravelForm />: ''}
      <button className="add-travel-btn margin" onClick={setIsTravelAdding}>
      {!isTravelAdding ? 'Добавить новое путешествие': 'Отменить'}
      </button>
    </>
  )
}

export default AddTravel
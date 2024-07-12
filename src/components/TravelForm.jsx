import React from "react";
import {useNewTravel} from '../zustand/useTravel'

function TravelForm(){

  const newTravel = useNewTravel((state)=> state.newTravel)
  const setImg = useNewTravel((state)=>state.setImg)
  const setCountry = useNewTravel((state)=>state.setCountry)
  const setGoogleLocation = useNewTravel((state)=>state.setGoogleLocation)
  const setPlaceName = useNewTravel((state)=>state.setPlaceName)
  const setDate = useNewTravel((state)=> state.setDate)
  const setDesc= useNewTravel((state)=>state.setDesc)
  const addTravel = useNewTravel((state)=> state.addTravel)
  const setIsTravelAdding = useNewTravel((state)=> state.setIsTravelAdding)

  function loadImage(event){
    if (event.target.files && event.target.files[0]){
      setImg(URL.createObjectURL(event.target.files[0]))
    }
  }

  function addNewTravel(){
    addTravel(newTravel)
    setIsTravelAdding()
  }

  return (
    <>
      <form action="" className="travel-form margin">
        <label className="add-travel-img">
          Добавить фото
          <input type="file"
            id="image-file"
            name="travel"
            accept=".png, .jpg, .jpeg"
            className="image-file"
            onChange={loadImage}
            />
        </label>
        {newTravel.img ? <img src={newTravel.img} alt="" className="travel-img-preview"/>: ''}
        <label>
          Ссылка на GoogleMaps:
          <input type="text"
            value={newTravel.googleLocation}
            onChange={(e) => setGoogleLocation(e.target.value)} />
        </label>
        <label>
          Страна:
          <input type="text"
            value={newTravel.country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <label>
          Место:
          <input type="text"
            value={newTravel.placeName}
            onChange={(e) => setPlaceName(e.target.value)}
          />
        </label>
        <label>
          Дата посещения:
          <input type="text"
            value={newTravel.date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Описание:
          <textarea value={newTravel.travelDescription}
            onChange={(e) => setDesc(e.target.value)}/>
        </label>
      </form>
      <button className="add-travel-btn" onClick={addNewTravel}>
        Добавить новое путешествие
      </button>
    </>
  )
}

export default TravelForm
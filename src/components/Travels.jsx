import React from "react";
import point from "../images/point.svg"
import { useNewTravel } from "../zustand/useTravel";
import '../stylies/travels.css'
import '../stylies/media.css'

function Travels (props) {

  return (
    <div className="travel-card">
      <img src={props.travelsData.img} alt="" className="travel-img" />
      <div className="travel-info">
        <div className="travel-place">
          <img src={point} alt="" />
          <p className="country">{props.travelsData.country}</p>
          <a href={props.travelsData.googleLocation} className="google-location">View on Google Maps</a>
        </div>
        <h1 className="place-name">{props.travelsData.placeName}</h1>
        <h3 className="date">{props.travelsData.date}</h3>
        <p className="travel-description">{props.travelsData.travelDescription}</p>
      </div>
    </div>
  )
}

export default Travels
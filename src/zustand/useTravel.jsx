import { create } from 'zustand'

export const useNewTravel = create((set,get) => ({
  newTravel: {
    img: null,
    country: '',
    googleLocation: '',
    placeName: '',
    date:'',
    travelDescription:''
  },
  travels:[
    {
      img: "/src/images/mountfuji.png",
      country: "JAPAN",
      googleLocation: "https://www.google.com/maps/place/Fujishan/@25.4084292,117.7995943,15z/data=!3m1!4b1!4m6!3m5!1s0x3415a3c708a78063:0x7c20aaf7d21e33d8!8m2!3d25.40843!4d117.809894!16s%2Fg%2F11c6184qm0?entry=ttu",
      placeName: "Mount Fuji",
      date:"12 Jan, 2021 - 24 Jan, 2021",
      travelDescription:"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
    },
    {
      img: "/src/images/sydney_opera_house.png",
      country: "AUSTRALIA",
      googleLocation: "https://www.google.com/maps/place/%D0%A1%D0%B8%D0%B4%D0%BD%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BE%D0%BF%D0%B5%D1%80%D0%BD%D1%8B%D0%B9+%D1%82%D0%B5%D0%B0%D1%82%D1%80/@-33.8567844,151.2128336,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu",
      placeName: "Sydney Opera House",
      date:"27 May, 2021 - 8 Jun, 2021",
      travelDescription:"The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
    },
    {
      img: "/src/images/geiranger_fjord.png",
      country: "NORWAY",
      googleLocation: "https://www.google.com/maps/place/%D0%93%D0%B5%D0%B9%D1%80%D0%B0%D0%BD%D0%B3%D0%B5%D1%80-%D1%84%D1%8C%D0%BE%D1%80%D0%B4/@62.1048242,6.9922387,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu",
      placeName: "Geiranger fjord",
      date:"01 Oct, 2021 - 18 Nov, 2021",
      travelDescription:"The Geiranger Fjord is a fjord in the Sunnmore region of More og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    }
  ],
  setImg: (img) => set((state) => ({
    newTravel:{...state.newTravel, img: state.newTravel.img=img}
  })),
  setCountry: (country) => set((state)=> ({
    newTravel:{...state.newTravel, country: state.newTravel.country=country}
  })),
  setGoogleLocation: (googleLocation) => set((state)=>({
    newTravel:{...state.newTravel, googleLocation: state.newTravel.googleLocation=googleLocation}
  })),
  setPlaceName: (placeName) => set((state)=>({
    newTravel:{...state.newTravel, placeName: state.newTravel.placeName=placeName}
  })),
  setDate: (date) => set((state)=>({
    newTravel:{...state.newTravel, date: state.newTravel.date=date}
  })),
  setDesc: (travelDescription) => set((state)=> ({
    newTravel:{...state.newTravel, travelDescription: state.newTravel.travelDescription=travelDescription}
  })),
  addTravel:(newTravel)=> set((state)=>({
    travels: [...state.travels, newTravel],
  })),
  isTravelAdding : false,
  setIsTravelAdding : () => set((state) => ({isTravelAdding: !state.isTravelAdding,
    newTravel:{
      img: null,
      country: '',
      googleLocation: '',
      placeName: '',
      date:'',
      travelDescription:''
    }
  })),
  deleteTravel: (travelId) => set((state)=> ({
    travels: state.travels.filter(travel => travel.id !== travelId),
  })),
}))

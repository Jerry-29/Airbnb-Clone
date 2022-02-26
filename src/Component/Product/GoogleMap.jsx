import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useEffect, useState } from "react";

//AIzaSyA2j_tb569jTaLl-oDOpY4FyhhgLnFj1nE
import {useSelector} from 'react-redux'


export const EmbedMap = () => {
  const {search}=useSelector(store=>store.SearchReducer)
  const [url,setUrl]=useState('jamnagar')
  useEffect(()=>{

  //   fetch(`https://www.google.com/maps/search/?AIzaSyA2j_tb569jTaLl-oDOpY4FyhhgLnFj1nE=1&${search}`)
  //   .then(res=>res.json())
  //   .then(res=>{
  //    console.log("url responseosnoenoen",res)
  //      setUrl(res)
  //   })

  const key='AIzaSyA2j_tb569jTaLl-oDOpY4FyhhgLnFj1nE'
  const newurl=`https://www.google.com/maps/embed/v1/place?key=${key}&q=${search}`
     setUrl(newurl)

  },[search])

  // async function kim (){

  // const key='AIzaSyA2j_tb569jTaLl-oDOpY4FyhhgLnFj1nE'
  // const newurl=`https://www.google.com/maps/embed/v1/place?key=${key}&q=${search}`
  //    setUrl(newurl)
  // console.log("checkkkk",newurl)
  // }
  return (
    <div>
      <iframe
        style={{ border: "0" }}
        src={`${url}`}
        width="544"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

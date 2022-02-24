import React from "react";
import Carousel from 'react-material-ui-carousel'
import "./Cards.css"


const Cards = (props) => {
//   console.log(props);
const images = props.img
  return (
    
      <div className="Leftdiv" onClick={()=>{
          return 
      }}>
          
         <div className="imgdiv">
         {
             images.map((e)=>{
                  return <div ><img className="image" src = {`${e}` } /></div>
               
             })}
         </div>
         <div className="discriptiondiv">
         <div><p>{props.typeofplace}</p> </div>
         <div className="name"> <p>{props.name}</p></div>
         <div className="description"><p>{props.description}</p></div>
         <div className="beds">
              <p> •{props.beds} Beds</p> 
              <p> •{props.bedrooms} Bedrooms</p>
              <p> •{props.bathrooms} Bathrooms</p>
         </div>
         <div className="price"><h3>₹{props.price}<span className="night">/night</span></h3> </div>
         <p>{props.location}</p> 
         <div> <h4> <span className="star">★</span> {props.rating}</h4>  </div>

         </div>
         <div>
             
        
         </div>
   
      </div>
  
  );

};


export default Cards
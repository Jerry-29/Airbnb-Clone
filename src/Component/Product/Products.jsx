import dat from "../../db.json";
import { useDispatch, useSelector } from "react-redux";
import { showfilterdata } from "../../Redux/action";
import  Cards  from "./Cards";
// import { Render } from "./GoogleMap";

import "./product.css";
import { EmbedMap } from "./GoogleMap";




export const Products = () => {
  const dispatch=useDispatch(showfilterdata(dat))
  const {data}=useSelector(store=>store.FilterReducer)
  console.log("hihiihihhihi",data);
  return (
    <div className="Main-Products-and-Map-container">
      <div className="Main-Products-and-Map-container-left">
        {data.map((e) => {
          return (
           
            <Cards {...e}/>
            
          )
        })}
      </div>
      <div className="Main-Products-and-Map-container-right">
        <EmbedMap/>
      </div>
     
    </div>
  );
};

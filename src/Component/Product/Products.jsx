import data from "../../db.json";
import  Cards  from "./Cards";
// import { Render } from "./GoogleMap";

import "./product.css";

export const Products = () => {
  console.log(data);
  return (
    <div className="Main">
      <div >
        
        {data.map((e) => {
          return (
           
            <Cards {...e}/>
            
          )
        })}
      </div>
     
    </div>
  );
};
